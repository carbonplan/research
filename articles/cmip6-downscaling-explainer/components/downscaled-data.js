import { useCallback, useEffect, useState } from 'react'
import { Box, Flex, useThemeUI } from 'theme-ui'
import zarr from 'zarr-js'
import { Minimap, Raster, Path } from '@carbonplan/minimaps'
import { equirectangular } from '@carbonplan/minimaps/projections'
import { useThemedColormap } from '@carbonplan/colormaps'
import { Colorbar, Filter, Slider } from '@carbonplan/components'

const CLIM = [16, 48]
const NAN = 9.969209968386869e36
const SLIDER_SIZES = [22, 22, 26]
const sx = {
  slider: {
    '&::-webkit-slider-thumb': {
      height: SLIDER_SIZES,
      width: SLIDER_SIZES,
    },
    '&::-moz-range-thumb': {
      height: SLIDER_SIZES,
      width: SLIDER_SIZES,
    },
    width: SLIDER_SIZES.map((size) => `calc(100% + ${size}px)`),
    ml: SLIDER_SIZES.map((size) => `-${size / 2}px`),
    position: 'absolute',
    top: '50%',
    ':focus': {
      color: 'primary',
    },
    ':focus-visible': {
      outline: 'none !important',
      background: 'none !important',
    },
    bg: 'unset',
  },
  line: {
    position: 'absolute',
    pointerEvents: 'none',
    top: 0,
    height: '100%',
    width: 0,
    borderWidth: '1px',
    borderColor: 'primary',
    borderStyle: 'solid',
  },
  caret: {
    position: 'absolute',
    top: '50%',
    height: 0,
    width: SLIDER_SIZES,
    mt: '-3px',
    ml: '-8px',
    pointerEvents: 'none',
    overflow: 'visible',
    '&:after': {
      content: '""',
      padding: '3px',
      display: 'inline-block',
      borderStyle: 'solid',
      borderColor: 'secondary',
      borderWidth: '0 2px 2px 0',
      transform: 'rotate(-45deg)',
    },
    '&:before': {
      content: '""',
      padding: '3px',
      display: 'inline-block',
      borderStyle: 'solid',
      borderColor: 'secondary',
      borderWidth: '0 2px 2px 0',
      transform: 'rotate(135deg)',
    },
  },
  panelLabel: {
    position: 'absolute',
    top: 0,
    fontSize: [3, 3, 4, 5],
    whiteSpace: 'nowrap',
    mt: [1, 1, 1, 2],
    mx: [1, 2, 2, 3],
    textShadow: ({ colors }) => `0px 0px 20px ${colors.background}`,
  },
}

const REGIONS = ['westus', 'europe', 'india', 'east-africa', 'central-america']
const REGION_LABELS = {
  'north america': 'westus',
  europe: 'europe',
  'south asia': 'india',
  'east africa': 'east-africa',
  'central america': 'central-america',
}

const fetchData = () => {
  return Promise.all(
    REGIONS.map((region) => [
      new Promise((resolve) =>
        zarr().loadGroup(
          `https://cmip6downscaling.blob.core.windows.net/vis/article/fig1/regions/${region}/downscaled-tasmax.zarr`,
          (error, { tasmax, lat, lon }) => {
            const bounds = {
              lat: [
                lat.data.reduce((a, b) => Math.min(a, b)),
                lat.data.reduce((a, b) => Math.max(a, b)),
              ],
              lon: [
                lon.data.reduce((a, b) => Math.min(a, b)),
                lon.data.reduce((a, b) => Math.max(a, b)),
              ],
            }

            resolve({
              id: region,
              downscaled: tasmax,
              downscaledBounds: bounds,
            })
          },
          ['tasmax', 'lat', 'lon']
        )
      ),
      new Promise((resolve) =>
        zarr().loadGroup(
          `https://cmip6downscaling.blob.core.windows.net/vis/article/fig1/regions/${region}/gcm-tasmax.zarr`,
          (error, { tasmax, lat, lon }) => {
            const bounds = {
              lat: [
                lat.data.reduce((a, b) => Math.min(a, b)),
                lat.data.reduce((a, b) => Math.max(a, b)),
              ],
              lon: [
                lon.data.reduce((a, b) => Math.min(a, b)),
                lon.data.reduce((a, b) => Math.max(a, b)),
              ],
            }

            resolve({
              id: region,
              gcm: tasmax,
              gcmBounds: bounds,
            })
          },
          ['tasmax', 'lat', 'lon']
        )
      ),
    ]).flat()
  )
    .then((arr) =>
      arr.reduce((accum, { id, ...value }) => {
        accum[id] = { ...accum[id], ...value }
        return accum
      }, {})
    )
    .then((obj) => {
      return Object.keys(obj).reduce((accum, id) => {
        const { downscaled, downscaledBounds, gcm, gcmBounds } = obj[id]

        // Ensure that GCM and downscaled data both span combined bounds
        const bounds = {
          lat: [
            Math.max(downscaledBounds.lat[0], gcmBounds.lat[0]),
            Math.min(downscaledBounds.lat[1], gcmBounds.lat[1]),
          ],
          lon: [
            Math.max(downscaledBounds.lon[0], gcmBounds.lon[0]),
            Math.min(downscaledBounds.lon[1], gcmBounds.lon[1]),
          ],
        }

        const f = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [
              [bounds.lon[0], bounds.lat[0]],
              [bounds.lon[1], bounds.lat[1]],
            ],
          },
        }

        const p = equirectangular().fitSize([Math.PI * 2, Math.PI], f)

        accum[id] = {
          id,
          downscaled: { data: downscaled, bounds: downscaledBounds },
          gcm: { data: gcm, bounds: gcmBounds },
          scale: p.scale(),
          translate: [
            p.translate()[0] / Math.PI - 1,
            (2 * p.translate()[1]) / Math.PI - 1,
          ],
        }

        return accum
      }, {})
    })
}

const DownscaledData = () => {
  const { theme } = useThemeUI()
  const [region, setRegion] = useState('westus')
  const [width, setWidth] = useState(null)
  const [data, setData] = useState(null)
  const [slider, setSlider] = useState(40)
  const [clim, setClim] = useState(CLIM)
  const colormap = useThemedColormap('warm')

  useEffect(() => {
    fetchData().then(setData)
  }, [])

  const container = useCallback((node) => {
    if (node != null) {
      setWidth(node.clientWidth)
      window.addEventListener('resize', () => {
        setWidth(node.clientWidth)
      })
    }
  }, [])

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          border: 'solid',
          borderColor: 'muted',
          borderWidth: '1px',
          borderRadius: '1px',
          minHeight: (width || 0) / 2,
        }}
        ref={container}
      >
        <Box sx={{ display: 'block', width }}>
          {data && (
            <Minimap
              projection={equirectangular}
              translate={data[region].translate}
              scale={data[region].scale}
            >
              <Path
                fill={theme.colors.background}
                opacity={1}
                source={
                  'https://storage.googleapis.com/carbonplan-maps/world-atlas/ocean-50m.json'
                }
                feature={'ocean'}
              />

              <Path
                stroke={theme.colors.primary}
                source={
                  'https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json'
                }
                feature={'land'}
                opacity={1}
              />

              <Raster
                clim={[clim[0] + 273.15, clim[1] + 273.15]}
                mode='lut'
                nullValue={NAN}
                source={data[region].downscaled.data}
                bounds={data[region].downscaled.bounds}
                colormap={colormap}
              />
            </Minimap>
          )}
        </Box>

        <Box
          sx={{
            ...sx.panelLabel,
            right: 0,
            display: ['none', 'initial', 'initial', 'initial'],
          }}
        >
          Downscaled result
        </Box>
        <Box
          sx={{
            ...sx.panelLabel,
            right: 0,
            display: ['initial', 'none', 'none', 'none'],
          }}
        >
          Downscaled
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${slider}%`,
            overflow: 'hidden',
            backgroundColor: 'background',
          }}
        >
          <Box sx={{ display: 'block', width }}>
            {data && (
              <Minimap
                projection={equirectangular}
                translate={data[region].translate}
                scale={data[region].scale}
              >
                <Path
                  fill={theme.colors.background}
                  opacity={1}
                  source={
                    'https://storage.googleapis.com/carbonplan-maps/world-atlas/ocean-50m.json'
                  }
                  feature={'ocean'}
                />

                <Path
                  stroke={theme.colors.primary}
                  source={
                    'https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json'
                  }
                  feature={'land'}
                  opacity={1}
                />
                <Raster
                  clim={[clim[0] + 273.15, clim[1] + 273.15]}
                  mode='lut'
                  nullValue={NAN}
                  source={data[region].gcm.data}
                  bounds={data[region].gcm.bounds}
                  colormap={colormap}
                />
              </Minimap>
            )}
          </Box>
          <Box
            sx={{
              ...sx.panelLabel,
              left: 0,
              display: ['none', 'initial', 'initial', 'initial'],
            }}
          >
            Global Climate Model
          </Box>
          <Box
            sx={{
              ...sx.panelLabel,
              left: 0,
              display: ['initial', 'none', 'none', 'none'],
            }}
          >
            GCM
          </Box>
        </Box>

        <Slider
          sx={sx.slider}
          value={slider}
          min={0}
          max={100}
          step={1}
          onChange={(e) => setSlider(parseFloat(e.target.value))}
        />
        <Box sx={{ ...sx.line, left: `${slider}%` }} />
        <Box sx={{ ...sx.caret, left: `${slider}%` }} />
      </Box>

      <Flex
        sx={{
          mt: 2,
          columnGap: [0, 5, 5, 5],
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <Filter
          values={{
            'north america': region === 'westus',
            'central america': region === 'central-america',
            europe: region === 'europe',
            'south asia': region === 'india',
            'east africa': region === 'east-africa',
          }}
          setValues={(obj) =>
            setRegion(REGION_LABELS[Object.keys(obj).find((k) => obj[k])])
          }
          sx={{ flexGrow: 0 }}
        />
        <Colorbar
          colormap={colormap}
          label='tasmax'
          units='°C'
          clim={clim}
          horizontal
          sx={{ flexShrink: 0 }}
          setClim={setClim}
        />
      </Flex>
    </Box>
  )
}

export default DownscaledData
