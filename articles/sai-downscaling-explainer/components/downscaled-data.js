import { useCallback, useEffect, useRef, useState } from 'react'
import { Box, Flex, Spinner, useColorMode, useThemeUI } from 'theme-ui'
import { useThemedColormap } from '@carbonplan/colormaps'
import { Colorbar, Filter, Slider } from '@carbonplan/components'
import maplibregl from 'maplibre-gl'
import { ZarrLayer } from '@carbonplan/zarr-layer'
import { BASEMAP_STYLE, getMapLayers, registerPmtiles } from './map-style'

const SLIDER_SIZES = [22, 22, 26]
const RESIZE_DEBOUNCE_MS = 100
const DEFAULT_REGION = 'south-africa'
const COARSE_URL =
  'https://data.source.coop/carbonplan/srm-downscaling/output/explainer/figures/figure1_coarse.zarr'
const DOWNSCALED_URL =
  'https://data.source.coop/carbonplan/srm-downscaling/output/explainer/figures/figure1_downscaled.zarr'
const sx = {
  slider: {
    '&::-webkit-slider-thumb': {
      height: SLIDER_SIZES,
      width: SLIDER_SIZES,
      bg: 'transparent',
      boxShadow: 'none',
    },
    '&::-moz-range-thumb': {
      height: SLIDER_SIZES,
      width: SLIDER_SIZES,
      bg: 'transparent',
      border: 'none',
      boxShadow: 'none',
    },
    width: SLIDER_SIZES.map((size) => `calc(100% + ${size}px)`),
    ml: SLIDER_SIZES.map((size) => `-${size / 2}px`),
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    ':focus': {
      color: 'primary',
    },
    ':focus-visible': {
      outline: 'none !important',
      background: 'none !important',
    },
    bg: 'unset',
    zIndex: 2,
  },
  line: {
    position: 'absolute',
    pointerEvents: 'none',
    top: 0,
    height: '100%',
    width: '1px',
    bg: 'primary',
    transform: 'translateX(-50%)',
    zIndex: 1,
  },
  handle: {
    position: 'absolute',
    top: 'calc(50% + 10px)',
    transform: 'translate(-50%, -50%)',
    width: SLIDER_SIZES,
    height: SLIDER_SIZES,
    borderRadius: '100%',
    bg: 'primary',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    zIndex: 1,
  },
  chevron: {
    padding: '3px',
    borderStyle: 'solid',
    borderColor: 'secondary',
    borderWidth: '0 2px 2px 0',
  },
  panelLabel: {
    position: 'absolute',
    top: 0,
    fontSize: [3, 3, 4, 5],
    whiteSpace: 'nowrap',
    mt: [1, 1, 1, 2],
    mx: [1, 2, 2, 3],
    textShadow: ({ colors }) => `0px 0px 20px ${colors.background}`,
    zIndex: 1,
  },
  spinner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    mb: [1, 1, 1, 2],
    mx: [1, 2, 2, 3],
    pointerEvents: 'none',
    transition: 'opacity 0.15s',
    zIndex: 2,
  },
}

const DATA = {
  'south-africa': {
    clim: [16, 40],
    bounds: {
      lat: [-35, -22],
      lon: [16, 33],
    },
  },
  india: {
    clim: [-24, 38],
    bounds: {
      lat: [7.5, 37.5],
      lon: [68, 97],
    },
  },
  bolivia: {
    clim: [6, 40],
    bounds: {
      lat: [-23, -9],
      lon: [-70, -57],
    },
  },
  'western-us': {
    clim: [-20, 30],
    bounds: {
      lat: [31, 49],
      lon: [-125, -102],
    },
  },
  philippines: {
    clim: [18, 34],
    bounds: {
      lat: [5, 21],
      lon: [116, 127],
    },
  },
}

const toKelvin = (clim) => clim.map((value) => value + 273.15)

const toLngLatBounds = ({ lat, lon }) => [
  [lon[0], lat[0]],
  [lon[1], lat[1]],
]

const clipLayer = (id, render) => ({
  id,
  type: 'custom',
  renderingMode: '2d',
  onAdd() {},
  render,
})

const DownscaledData = () => {
  const [mode] = useColorMode()
  const { theme } = useThemeUI()
  const { background, hinted, muted, primary, secondary } = theme.rawColors
  const mapContainer = useRef(null)
  const coarseLayerRef = useRef(null)
  const downscaledLayerRef = useRef(null)
  const [region, setRegion] = useState(DEFAULT_REGION)
  const [map, setMap] = useState(null)
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const [slider, setSlider] = useState(40)
  const [loading, setLoading] = useState({ coarse: true, downscaled: true })
  const sliderValueRef = useRef(40)
  const colormap = useThemedColormap('warm', { format: 'hex' })

  useEffect(() => {
    let mapInstance
    if (mapContainer.current) {
      registerPmtiles()

      mapInstance = new maplibregl.Map({
        container: mapContainer.current,
        interactive: false,
        attributionControl: false,
        bounds: toLngLatBounds(DATA[DEFAULT_REGION].bounds),
        style: {
          ...BASEMAP_STYLE,
          layers: getMapLayers(mode, {
            background,
            hinted,
            muted,
            primary,
            secondary,
          }),
        },
      })

      mapInstance.addControl(
        new maplibregl.AttributionControl({ compact: true }),
        'bottom-right'
      )

      mapInstance
        .getContainer()
        .querySelector('.maplibregl-ctrl-attrib')
        ?.classList.add('maplibregl-compact')

      mapInstance.on('load', () => {
        setMap(mapInstance)
        setIsMapLoaded(true)
      })
    }

    return () => {
      mapInstance?.remove()
      setMap(null)
    }
  }, [mode, background, hinted, muted, primary, secondary])

  useEffect(() => {
    if (map && isMapLoaded) {
      const options = {
        variable: 'tasmax',
        clim: toKelvin(DATA[DEFAULT_REGION].clim),
        colormap,
        zarrVersion: 3,
        bounds: [-180, -90, 180, 90],
        latIsAscending: true,
      }
      const trackLoading = (key) => (state) =>
        setLoading((prev) =>
          prev[key] === state.loading ? prev : { ...prev, [key]: state.loading }
        )

      setLoading({ coarse: true, downscaled: true })

      const downscaled = new ZarrLayer({
        id: 'downscaled',
        source: DOWNSCALED_URL,
        onLoadingStateChange: trackLoading('downscaled'),
        ...options,
      })
      const coarse = new ZarrLayer({
        id: 'coarse',
        source: COARSE_URL,
        onLoadingStateChange: trackLoading('coarse'),
        ...options,
      })

      coarseLayerRef.current = coarse
      downscaledLayerRef.current = downscaled

      const beforeId = 'coastline'
      const clipX = (canvas) =>
        Math.round((sliderValueRef.current / 100) * canvas.width)

      map.addLayer(
        clipLayer('coarse-clip-start', (gl) => {
          const canvas = map.getCanvas()
          gl.enable(gl.SCISSOR_TEST)
          gl.scissor(0, 0, clipX(canvas), canvas.height)
        }),
        beforeId
      )

      map.addLayer(coarse, beforeId)

      map.addLayer(
        clipLayer('downscaled-clip-start', (gl) => {
          const canvas = map.getCanvas()
          const x = clipX(canvas)
          gl.scissor(x, 0, canvas.width - x, canvas.height)
        }),
        beforeId
      )

      map.addLayer(downscaled, beforeId)

      map.addLayer(
        clipLayer('clip-end', (gl) => gl.disable(gl.SCISSOR_TEST)),
        beforeId
      )
    }

    return () => {
      coarseLayerRef.current = null
      downscaledLayerRef.current = null
      if (map) {
        try {
          map.removeLayer('coarse-clip-start')
          map.removeLayer('coarse')
          map.removeLayer('downscaled-clip-start')
          map.removeLayer('downscaled')
          map.removeLayer('clip-end')
        } catch {
          setMap(null)
        }
      }
    }
  }, [colormap, map, isMapLoaded])

  useEffect(() => {
    if (map && isMapLoaded && DATA[region]) {
      const { bounds, clim } = DATA[region]
      const kelvinClim = toKelvin(clim)

      coarseLayerRef.current?.setClim(kelvinClim)
      downscaledLayerRef.current?.setClim(kelvinClim)

      map.fitBounds(toLngLatBounds(bounds), { animate: false })
    }
  }, [region, map, isMapLoaded])

  useEffect(() => {
    const node = mapContainer.current
    if (!node) return

    let timeoutId
    const observer = new ResizeObserver(() => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => map?.resize(), RESIZE_DEBOUNCE_MS)
    })
    observer.observe(node)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [map])

  const handleSliderChange = useCallback(
    (e) => {
      const value = parseFloat(e.target.value)
      sliderValueRef.current = value
      setSlider(value)
      map?.triggerRepaint()
    },
    [map]
  )

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
          aspectRatio: '2 / 1',
        }}
        ref={mapContainer}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: `${slider}%`,
              right: 0,
              height: '100%',
              overflow: 'hidden',
            }}
          >
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
          </Box>

          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${slider}%`,
              height: '100%',
              overflow: 'hidden',
            }}
          >
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
            onChange={handleSliderChange}
          />
          <Box sx={{ ...sx.line, left: `${slider}%` }} />
          <Box sx={{ ...sx.handle, left: `${slider}%` }}>
            <Box sx={{ ...sx.chevron, transform: 'rotate(135deg)' }} />
            <Box sx={{ ...sx.chevron, transform: 'rotate(-45deg)' }} />
          </Box>
        </Box>

        <Box
          sx={{
            ...sx.spinner,
            opacity: loading.coarse || loading.downscaled ? 1 : 0,
          }}
        >
          <Spinner size={28} />
        </Box>
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
          values={Object.fromEntries(
            Object.keys(DATA).map((key) => [
              key.replaceAll('-', ' '),
              key === region,
            ])
          )}
          setValues={(obj) =>
            setRegion(
              Object.keys(obj)
                .find((k) => obj[k])
                .replaceAll(' ', '-')
            )
          }
          sx={{ flexGrow: 0 }}
        />
        <Colorbar
          colormap={colormap}
          label='tasmax'
          units='°C'
          clim={DATA[region].clim}
          horizontal
          sx={{ flexShrink: 0 }}
        />
      </Flex>
    </Box>
  )
}

export default DownscaledData
