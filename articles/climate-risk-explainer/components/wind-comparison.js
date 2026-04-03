import { useMemo } from 'react'
import { Minimap, Raster, useMinimap } from '@carbonplan/minimaps'
import { equirectangular } from '@carbonplan/minimaps/projections'
import { Box, useThemeUI } from 'theme-ui'
import { Colorbar, Column, Row } from '@carbonplan/components'
import { useThemedColormap } from '@carbonplan/colormaps'
import { geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import streetsTopo from './data/streets.json'

const streets = feature(streetsTopo, streetsTopo.objects.streets)

const BOUNDS = {
  lat: [34.095057, 34.164079],
  lon: [-118.348119, -118.249667],
}

const CLIM = [0, 0.2]

const deg2rad = (deg) => (deg * Math.PI) / 180
const getViewParameters = (crop) => {
  const lonSpan = deg2rad(crop.lon[1] - crop.lon[0])
  const latSpan = deg2rad(crop.lat[1] - crop.lat[0])

  const scaleX = (2 * Math.PI) / lonSpan
  const scaleY = Math.PI / latSpan
  const scale = Math.min(scaleX, scaleY)

  const lonCenter = deg2rad((crop.lon[0] + crop.lon[1]) / 2)
  const latCenter = deg2rad((crop.lat[0] + crop.lat[1]) / 2)

  return {
    scale,
    translate: [
      (-lonCenter * scale) / Math.PI,
      (latCenter * (2 * scale)) / Math.PI,
    ],
  }
}

const { scale, translate } = getViewParameters(BOUNDS)

const sx = {
  label: {
    textAlign: 'center',
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    mb: 1,
  },
  panel: {
    position: 'relative',
    width: '142%',
    ml: '-21%',
  },
}

const cityLabelCoordinates = {
  lon: -118.264,
  lat: 34.096,
}

const placeLabelCoordinates = {
  lon: -118.295,
  lat: 34.133823,
}

const StreetsPath = ({ stroke, strokeWidth, opacity }) => {
  const { projection } = useMinimap() || {}

  const combinedPath = useMemo(() => {
    if (!projection) return ''
    const generator = geoPath(projection)
    return streets.features
      .map((feature) => generator(feature))
      .filter(Boolean)
      .join(' ')
  }, [projection])

  if (!combinedPath) return null

  return (
    <path
      d={combinedPath}
      stroke={stroke}
      opacity={opacity}
      fill='none'
      strokeWidth={strokeWidth}
      style={{ vectorEffect: 'non-scaling-stroke' }}
    />
  )
}

const PointLabel = ({ coords, label, color = 'secondary' }) => {
  const minimap = useMinimap()
  const projection = minimap?.projection
  const { lon, lat } = coords

  if (!projection) return null

  const [x, y] = projection([lon, lat])
  if (!x || !y) return null

  return (
    <Box
      as='text'
      sx={{
        fontFamily: 'mono',
        letterSpacing: 'mono',
        fill: color,
        fontSize: 4,
        pointerEvents: 'none',
        textAnchor: 'middle',
      }}
      x={x}
      y={y}
    >
      {label}
    </Box>
  )
}

const MapPanel = ({ label, variable, colormap }) => {
  const { theme } = useThemeUI()

  return (
    <>
      <Box sx={sx.label}>{label}</Box>
      <Box sx={sx.panel}>
        <Minimap
          projection={equirectangular}
          scale={scale}
          translate={translate}
        >
          <StreetsPath
            stroke={theme.colors?.secondary || theme.colors?.muted || '#666'}
            opacity={0.3}
            strokeWidth={0.5}
          />

          <Raster
            clim={CLIM}
            mode='lut'
            nullValue={9.969209968386869e36}
            source='https://carbonplan-ocr.s3.amazonaws.com/output/fire-risk/tensor/web-figures/v1.1.0/store3.zarr'
            bounds={BOUNDS}
            variable={variable}
            colormap={colormap}
          />

          <PointLabel coords={cityLabelCoordinates} label='Los Angeles' />

          <PointLabel
            coords={placeLabelCoordinates}
            label='Griffith Park'
            color='primary'
          />
        </Minimap>
      </Box>
    </>
  )
}

const WindComparison = () => {
  const colormap = useThemedColormap('reds')

  return (
    <Box sx={{ pb: [2, 2, 2, 3], overflow: 'hidden' }}>
      <Box sx={{ position: 'relative' }}>
        <Row columns={6}>
          <Column start={1} width={3}>
            <MapPanel
              label='Scott 2024'
              variable='rps_scott'
              colormap={colormap}
            />
          </Column>
          <Column start={4} width={3}>
            <MapPanel
              label='Our method'
              variable='rps_2011'
              colormap={colormap}
            />
          </Column>
        </Row>

        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            right: [0, -78, -78, -94],
            display: ['none', 'block'],
          }}
        >
          <Colorbar
            clim={CLIM}
            colormap={colormap}
            label='Risk of loss'
            units='%'
          />
        </Box>
      </Box>

      <Box sx={{ display: ['block', 'none'], mt: 3, width: 'fit-content' }}>
        <Colorbar
          horizontal
          clim={CLIM}
          colormap={colormap}
          height='12px'
          label='Risk of loss'
          units='%'
          sx={{
            '& div, & span': { fontSize: 0 },
          }}
          sxClim={{ fontSize: 0 }}
        />
      </Box>
    </Box>
  )
}

export default WindComparison
