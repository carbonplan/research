import { useEffect, useRef, useState } from 'react'
import { Box, Flex, Spinner, useColorMode, useThemeUI } from 'theme-ui'
import { useThemedColormap } from '@carbonplan/colormaps'
import { Colorbar, Column, Filter, Row } from '@carbonplan/components'
import { Axis, Chart, Line, Plot, Rect } from '@carbonplan/charts'
import maplibregl from 'maplibre-gl'
import { ZarrLayer } from '@carbonplan/zarr-layer'
import { BASEMAP_STYLE, getMapLayers, registerPmtiles } from './map-style'

import figure from './data/figure4.json'
import basin from './data/mekong.json'

const STORE =
  'https://data.source.coop/carbonplan/srm-downscaling/output/explainer/figures/figure4'
const RESIZE_DEBOUNCE_MS = 100
const MASK_LAYER_ID = 'basin-mask'
const MASK_OPACITY = 0.6
// Layer order, bottom to top: data, mask outside the basin, coastline, basin
// outline.
const COASTLINE_ID = 'coastline'

const METHODS = [
  { key: 'raw', label: 'Raw GCM' },
  { key: 'bcsd', label: 'BCSD' },
  { key: 'qdmsd', label: 'QDMSD' },
]

const METRICS = {
  pct: {
    label: '% change',
    variable: 'delta_pct',
    clim: [-8, 8],
    units: '%',
    step: 1,
    format: (d) => (Math.round(d * 10) / 10).toFixed(1),
  },
  mm: {
    label: 'mm/yr',
    variable: 'delta_mm',
    clim: [-150, 150],
    units: 'mm/yr',
    step: 25,
    format: (d) => `${Math.round(d)}`,
  },
}

const sx = {
  title: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [2, 2, 2, 3],
    color: 'primary',
    mb: [2],
  },
  value: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    fontSize: [1, 1, 1, 2],
    color: 'primary',
    textTransform: 'none',
    whiteSpace: 'nowrap',
  },
  map: {
    position: 'relative',
    flex: 1,
    minWidth: 0,
    aspectRatio: '3 / 4',
    border: 'solid',
    borderColor: 'muted',
    borderWidth: '1px',
    borderRadius: '1px',
  },
  mapLabel: {
    position: 'absolute',
    mx: [1, 1, 1, 2],
    my: [0, 0, 0, 1],
    whiteSpace: 'nowrap',
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [0, 0, 0, 1],
    color: 'primary',
    textShadow: ({ colors }) => `0px 0px 12px ${colors.background}`,
    pointerEvents: 'none',
    zIndex: 1,
  },
  spinner: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    mb: [1, 1, 1, 2],
    mx: [1, 2, 2, 3],
    pointerEvents: 'none',
    transition: 'opacity 0.15s',
    zIndex: 2,
  },
}

// Outer rings of the basin polygons, used to size the map view.
const basinRings = basin.features.flatMap(({ geometry }) =>
  geometry.type === 'Polygon'
    ? [geometry.coordinates[0]]
    : geometry.coordinates.map((polygon) => polygon[0])
)
const BASIN_LABEL = 'Mekong Basin'
const REGION_LABEL = 'SE Asia'

// The whole world with the basin cut out, so filling it dims everything
// outside the basin.
const WORLD_RING = [
  [-180, -90],
  [180, -90],
  [180, 90],
  [-180, 90],
  [-180, -90],
]
const mask = {
  type: 'Feature',
  properties: {},
  geometry: { type: 'Polygon', coordinates: [WORLD_RING, ...basinRings] },
}

// Map extent: the basin's bounding box plus a small margin, in degrees.
const VIEW_PAD_DEG = 0.75
const VIEW = basinRings
  .flat()
  .reduce(
    ([west, south, east, north], [lon, lat]) => [
      Math.min(west, lon),
      Math.min(south, lat),
      Math.max(east, lon),
      Math.max(north, lat),
    ],
    [Infinity, Infinity, -Infinity, -Infinity]
  )
  .map((v, i) => v + (i < 2 ? -VIEW_PAD_DEG : VIEW_PAD_DEG))

const toLngLatBounds = ([west, south, east, north]) => [
  [west, south],
  [east, north],
]

// Shared axis for the basin-mean bars: widened to the next multiple of `step`
// past the most extreme member so every panel plots on the same scale.
const niceDomain = (values, step) => [
  Math.floor(Math.min(0, ...values) / step) * step,
  Math.ceil(Math.max(0, ...values) / step) * step,
]

// A skinny vertical bar beside each map, all on one shared axis so bar
// lengths compare directly across the row.
const barDomain = (metric) =>
  niceDomain(
    METHODS.flatMap(({ key }) => [
      figure.basin[key].mean[metric],
      ...figure.basin[key].members.map((m) => m[metric]),
    ]),
    METRICS[metric].step
  )

const BasinBar = ({ method, metric, domain }) => {
  const { mean } = figure.basin[method]

  return (
    <Box sx={{ width: ['16px', '24px', '24px', '24px'], flexShrink: 0 }}>
      <Chart
        x={[0, 1]}
        y={domain}
        padding={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <Axis top />
        <Plot>
          <Line
            data={[
              [0, 0],
              [1, 0],
            ]}
            color='muted'
            width={1}
          />
          <Rect
            x={[0.3, 0.7]}
            y={[Math.min(0, mean[metric]), Math.max(0, mean[metric])]}
            color='orange'
          />
        </Plot>
      </Chart>
    </Box>
  )
}

const MethodMap = ({ method, metric, colormap, showLabel }) => {
  const [mode] = useColorMode()
  const { theme } = useThemeUI()
  const { background, hinted, muted, primary, secondary } = theme.rawColors
  const container = useRef(null)
  const layersRef = useRef({})
  const [map, setMap] = useState(null)
  const [loading, setLoading] = useState({})

  useEffect(() => {
    if (!container.current) return

    registerPmtiles()
    const mapInstance = new maplibregl.Map({
      container: container.current,
      interactive: false,
      attributionControl: false,
      bounds: toLngLatBounds(VIEW),
      style: {
        ...BASEMAP_STYLE,
        layers: getMapLayers(
          mode,
          { background, hinted, muted, primary },
          {
            countriesOnly: true,
            labels: false,
            coastlineColor: secondary,
          }
        ),
      },
    })

    mapInstance.on('load', () => {
      mapInstance.addSource('basin', { type: 'geojson', data: basin })
      mapInstance.addSource('mask', { type: 'geojson', data: mask })
      mapInstance.addLayer(
        {
          id: MASK_LAYER_ID,
          type: 'fill',
          source: 'mask',
          paint: { 'fill-color': background, 'fill-opacity': MASK_OPACITY },
        },
        COASTLINE_ID
      )
      mapInstance.addLayer({
        id: 'basin-outline',
        type: 'line',
        source: 'basin',
        paint: { 'line-color': primary, 'line-width': 1 },
      })
      setMap(mapInstance)
    })

    return () => {
      mapInstance.remove()
      setMap(null)
    }
  }, [mode, background, hinted, muted, primary, secondary])

  // Both metrics are loaded up front so toggling only changes opacity.
  useEffect(() => {
    if (!map) return

    Object.entries(METRICS).forEach(([key, spec]) => {
      const layer = new ZarrLayer({
        id: key,
        source: `${STORE}/${method}.zarr`,
        variable: spec.variable,
        clim: spec.clim,
        colormap,
        zarrVersion: 3,
        bounds: figure.bounds[method],
        latIsAscending: true,
        opacity: 0,
        onLoadingStateChange: (state) =>
          setLoading((prev) =>
            prev[key] === state.loading
              ? prev
              : { ...prev, [key]: state.loading }
          ),
      })
      map.addLayer(layer, MASK_LAYER_ID)
      layersRef.current[key] = layer
    })

    return () => {
      layersRef.current = {}
      Object.keys(METRICS).forEach((key) => {
        try {
          map.removeLayer(key)
        } catch {
          // map already torn down
        }
      })
    }
  }, [map, method, colormap])

  useEffect(() => {
    Object.entries(layersRef.current).forEach(([key, layer]) =>
      layer.setOpacity(key === metric ? 1 : 0)
    )
    map?.triggerRepaint()
  }, [metric, map])

  useEffect(() => {
    const node = container.current
    if (!node) return

    let timeoutId
    const observer = new ResizeObserver(() => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        map?.resize()
        map?.fitBounds(toLngLatBounds(VIEW), { animate: false })
      }, RESIZE_DEBOUNCE_MS)
    })
    observer.observe(node)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [map])

  return (
    <Box sx={sx.map} ref={container}>
      {showLabel && (
        <>
          <Box sx={{ ...sx.mapLabel, top: 0, right: 0 }}>{BASIN_LABEL}</Box>
          <Box sx={{ ...sx.mapLabel, bottom: 0, left: 0, color: 'secondary' }}>
            {REGION_LABEL}
          </Box>
        </>
      )}
      <Box sx={{ ...sx.spinner, opacity: loading[metric] ? 1 : 0 }}>
        <Spinner size={28} />
      </Box>
    </Box>
  )
}

const MethodComparison = () => {
  const [metric, setMetric] = useState('pct')
  const colormap = useThemedColormap('orangeblue', { format: 'hex' })
  const { clim, units, format } = METRICS[metric]
  const domain = barDomain(metric)

  return (
    <Box>
      <Row columns={[6, 6, 6, 6]}>
        {METHODS.map(({ key, label }, i) => (
          <Column key={key} start={1 + i * 2} width={2}>
            <Flex
              sx={{
                ...sx.title,
                flexDirection: ['column', 'row', 'row', 'row'],
                justifyContent: 'space-between',
                alignItems: ['flex-start', 'baseline', 'baseline', 'baseline'],
                gap: [0, 2, 2, 2],
              }}
            >
              <Box sx={{ whiteSpace: 'nowrap' }}>{label}</Box>
              <Box sx={sx.value}>
                {format(figure.basin[key].mean[metric])}{' '}
                <Box as='span' sx={{ color: 'secondary' }}>
                  {units}
                </Box>
              </Box>
            </Flex>
            <Flex sx={{ alignItems: 'stretch' }}>
              <MethodMap
                method={key}
                metric={metric}
                colormap={colormap}
                showLabel={i === 0}
              />
              <BasinBar method={key} metric={metric} domain={domain} />
            </Flex>
          </Column>
        ))}
      </Row>

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
            Object.keys(METRICS).map((key) => [key, key === metric])
          )}
          labels={Object.fromEntries(
            Object.entries(METRICS).map(([key, { label }]) => [key, label])
          )}
          order={Object.keys(METRICS)}
          setValues={(obj) =>
            setMetric(Object.keys(obj).find((key) => obj[key]))
          }
        />

        <Colorbar
          colormap={colormap}
          label='Δ Precipitation'
          units={units}
          clim={clim}
          horizontal
          format={(d) => (d < 10 ? d.toFixed(1) : d)}
          sx={{ flexShrink: 0, mr: ['16px', '24px', '24px', '24px'] }}
        />
      </Flex>
    </Box>
  )
}

export default MethodComparison
