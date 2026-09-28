import { layers, namedFlavor } from '@protomaps/basemaps'
import maplibregl from 'maplibre-gl'
import { Protocol } from 'pmtiles'

const FONT = 'Relative Pro Book'
const FONT_MEDIUM = 'Relative Pro Medium'
const FONT_ITALIC = 'Relative Pro Italic'

const BASEMAP_SOURCE_LAYERS = ['earth', 'water', 'boundaries', 'places']

const SUBORDINATE_LABELS = ['places_region', 'places_subplace']

const COUNTRY_ONLY_LAYERS = [
  'background',
  'earth',
  'water',
  'water_stream',
  'water_river',
  'boundaries_country',
  'places_country',
]

const getMapTheme = (mode, { background, hinted, muted, primary }) => {
  return {
    ...namedFlavor(mode === 'dark' ? 'black' : 'white'),
    background,
    earth: 'transparent',
    water: hinted,
    boundaries: muted,

    ocean_label: primary,
    subplace_label: primary,
    city_label: primary,
    state_label: primary,
    country_label: primary,

    regular: FONT,
    bold: FONT_MEDIUM,
    italic: FONT_ITALIC,
  }
}

const styleLabel = (layer, background) => {
  if (layer.type !== 'symbol' || !layer.layout?.['text-field']) return layer

  const isWater = layer['source-layer'] === 'water'
  const layout = {
    ...layer.layout,
    'text-field': ['coalesce', ['get', 'name:en'], ['get', 'name']],
  }

  if (!isWater) layout['text-letter-spacing'] = 0.07

  if (layer.id === 'places_locality') {
    delete layout['text-variable-anchor']
    layout['text-anchor'] = 'center'
    layout['text-justify'] = 'center'
    layout['text-font'] = [FONT]
  }

  if (layer.id === 'places_country') layout['text-letter-spacing'] = 0.1

  if (layer.id === 'places_region') {
    layout['text-size'] = ['interpolate', ['linear'], ['zoom'], 3, 9, 7, 13]
  }

  const isSubordinate = SUBORDINATE_LABELS.includes(layer.id)

  return {
    ...layer,
    layout,
    paint: {
      ...layer.paint,
      'text-halo-color': background,
      'text-halo-width': isSubordinate ? 0 : 0.8,
      'text-halo-blur': 0.75,
      // ...(isSubordinate ? { 'text-opacity': 0.95 } : {}),
    },
  }
}

const coastlineLayer = (color) => ({
  id: 'coastline',
  type: 'line',
  source: 'protomaps',
  'source-layer': 'earth',
  filter: ['==', '$type', 'Polygon'],
  paint: {
    'line-color': color,
    'line-width': ['interpolate', ['linear'], ['zoom'], 2, 0.5, 8, 1.25],
  },
})

export const getMapLayers = (
  mode,
  colors,
  {
    countriesOnly = false,
    labels = true,
    boundaries = true,
    coastlineColor = colors.muted,
  } = {}
) => {
  const basemapLayers = layers('protomaps', getMapTheme(mode, colors), {
    lang: 'en',
  })
    .filter(
      (layer) =>
        layer.id === 'background' ||
        BASEMAP_SOURCE_LAYERS.includes(layer['source-layer'])
    )
    .filter((layer) => !countriesOnly || COUNTRY_ONLY_LAYERS.includes(layer.id))
    .filter((layer) => labels || layer.type !== 'symbol')
    .filter((layer) => boundaries || layer['source-layer'] !== 'boundaries')
    .map((layer) => styleLabel(layer, colors.background))

  // Coastline sits just below the country boundaries, or below the labels
  // when boundaries are hidden.
  const boundaryIndex = basemapLayers.findIndex(
    ({ id }) => id === 'boundaries_country'
  )
  const index =
    boundaryIndex >= 0
      ? boundaryIndex
      : basemapLayers.findIndex(({ type }) => type === 'symbol')
  const coastline = coastlineLayer(coastlineColor)
  if (index < 0) return [...basemapLayers, coastline]

  return [
    ...basemapLayers.slice(0, index),
    coastline,
    ...basemapLayers.slice(index),
  ]
}

export const BASEMAP_STYLE = {
  version: 8,
  glyphs:
    'https://carbonplan-maps.s3.us-west-2.amazonaws.com/basemaps/fonts/{fontstack}/{range}.pbf',
  sources: {
    protomaps: {
      type: 'vector',
      url: 'pmtiles://https://carbonplan-maps.s3.us-west-2.amazonaws.com/basemaps/pmtiles/global.pmtiles',
      attribution:
        '<a href="https://overturemaps.org/">Overture Maps</a>, <a href="https://protomaps.com">Protomaps</a>, © <a href="https://openstreetmap.org">OpenStreetMap</a>',
    },
  },
}

// One protocol instance for every map on the page, so the pmtiles header,
// directories, and tiles fetched for one map are reused by the others.
let protocol

export const registerPmtiles = () => {
  if (!protocol) {
    protocol = new Protocol()
    maplibregl.addProtocol('pmtiles', protocol.tile)
  }
}
