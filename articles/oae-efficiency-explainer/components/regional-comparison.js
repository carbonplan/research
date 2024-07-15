import { Badge, Colorbar, Column, Filter, Row } from '@carbonplan/components'
import {
  Graticule,
  Minimap,
  Path,
  Raster,
  Sphere,
  useMinimap,
} from '@carbonplan/minimaps'
import { naturalEarth1 } from '@carbonplan/minimaps/projections'
import { useThemedColormap } from '@carbonplan/colormaps'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Box, Flex, useThemeUI } from 'theme-ui'
import { geoPath } from 'd3-geo'
import zarr from 'zarr-js'
import concat from 'ndarray-concat-cols'
import { Chart, Plot, Line, Grid } from '@carbonplan/charts'
import { mix } from '@theme-ui/color'

import { useEfficiency, useRegions } from './data'
import TimeSlider from './time-slider'

const sx = {
  column: {
    borderWidth: 0,
    borderTopWidth: '1px',
    borderColor: 'muted',
    borderStyle: 'solid',
    pt: [2, 2, 3, 3],
    mb: [3, 3, 4, 4],
  },
  heading: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [2, 2, 2, 3],
    mb: [2, 2, 3, 3],
    wordSpacing: ['300px', '300px', 'inherit', 'inherit'],
  },
  value: {
    textTransform: 'uppercase',
    fontFamily: 'mono',
    letterSpacing: 'mono',
    fontSize: [3, 3, 3, 4],
  },
  details: {
    mt: 2,
    color: 'secondary',
    fontFamily: 'faux',
    letterSpacing: 'faux',
    fontSize: [0, 1, 1, 1],
  },
}

const MONTH_LABELS = {
  Jan: 0,
  Apr: 1,
  Jul: 2,
  Oct: 3,
}

const POLYGONS = [74, 131, 126, 106, 140, 119, 107, 124, 116]
const SOURCE =
  'https://carbonplan-oae-efficiency.s3.us-west-2.amazonaws.com/store3.zarr/delta_FG_CO2'
const CLIM = [0, -1e-2].map((d) => d / -315.36)
const FILL_VALUE = 9.969209968386869e36
const BOUNDS = {
  lat: [-90, 90],
  lon: [-180, 180],
}

const Regions = ({ region, setRegion, setHoveredRegion, hoveredRegion }) => {
  const { regions } = useRegions()
  const [paths, setPaths] = useState({})
  const { projection } = useMinimap()

  useEffect(() => {
    if (regions) {
      setPaths(
        regions.features.reduce((a, f) => {
          if (POLYGONS.includes(f.properties.polygon_id)) {
            a[f.properties.polygon_id] = geoPath(projection)(f)
          }
          return a
        }, {})
      )
    }
  }, [regions, projection])

  const { unselected, selected, hovered } = useMemo(() => {
    return Object.keys(paths).reduce(
      (accum, polygon_id) => {
        if (region === Number(polygon_id)) {
          accum.selected = paths[polygon_id]
        } else if (hoveredRegion === Number(polygon_id)) {
          accum.hovered = { polygon_id, path: paths[polygon_id] }
        } else {
          accum.unselected[polygon_id] = paths[polygon_id]
        }

        return accum
      },
      { unselected: {}, hovered: null, selected: null }
    )
  }, [paths, region, hoveredRegion])

  return (
    <>
      {Object.keys(unselected).map((polygon_id) => (
        <Box
          as='path'
          key={polygon_id}
          d={unselected[polygon_id]}
          onClick={() => setRegion(polygon_id)}
          onMouseEnter={() => setHoveredRegion(polygon_id)}
          onMouseLeave={() => setHoveredRegion(null)}
          sx={{
            fill: 'none',
            stroke: 'secondary',
            strokeWidth: 2,
            pointerEvents: 'all',
            cursor: 'pointer',
          }}
        />
      ))}
      {selected && (
        <Box
          as='path'
          d={selected}
          sx={{
            fill: 'none',
            stroke: 'primary',
            strokeWidth: 2,
            pointerEvents: 'all',
            cursor: 'pointer',
          }}
        />
      )}
      {hovered && (
        <Box
          as='path'
          d={hovered.path}
          onClick={() => setRegion(hovered.polygon_id)}
          onMouseLeave={() => setHoveredRegion(null)}
          sx={{
            fill: mix('primary', 'background', 0.7),
            stroke: 'primary',
            strokeWidth: 2,
            pointerEvents: 'all',
            cursor: 'pointer',
          }}
        />
      )}
    </>
  )
}

const MAP_PROPS = { scale: 1.7, translate: [0.25, 0.5] }

const formatTime = (t) => {
  return `Year ${String(t + 1).padStart(2, '0')}`
}

const RegionalComparison = () => {
  const { theme } = useThemeUI()
  const [region, setRegion] = useState(119)
  const [hoveredRegion, setHoveredRegion] = useState(119)
  const [injectionMonth, setInjectionMonth] = useState(0)
  const { efficiency } = useEfficiency(injectionMonth)
  const [time, setTime] = useState(0)
  const [chunkCache, setChunkCache] = useState({})
  const fetchChunk = useRef(null)
  const colormap = useThemedColormap('warm')

  const { selectedLine, hoveredLine, backgroundLines } = useMemo(() => {
    if (efficiency) {
      return POLYGONS.reduce(
        (accum, p) => {
          const ndData = efficiency.pick(null, p, 0)
          const line = Array(180)
            .fill(null)
            .map((d, i) => [i / 12, ndData.get(i)])

          if (p === region) {
            accum.selectedLine = line
          } else if (p === hoveredRegion) {
            accum.hoveredLine = line
          } else {
            accum.backgroundLines.push(line)
          }

          return accum
        },
        { selectedLine: null, hoveredLine: null, backgroundLines: [] }
      )
    } else {
      return {}
    }
  }, [efficiency, region, hoveredRegion])

  useEffect(() => {
    const openArray = async () => {
      try {
        zarr().open(SOURCE, (err, loader) => {
          if (err) {
            console.error('Error opening array:', err)
            return
          }
          fetchChunk.current = (key) => {
            const [regionIndex, injectionMonthIndex] = key
              .split(',')
              .map(Number)
            setChunkCache((prev) => ({ ...prev, [key]: 'loading' }))
            loader(
              [regionIndex, injectionMonthIndex, 0, 0, 0],
              (err, chunk) => {
                if (err) {
                  console.error('Error loading chunk:', err)
                  return
                }
                setChunkCache((prev) => ({ ...prev, [key]: chunk }))
              }
            )
          }

          fetchChunk.current('5,0')
        })
      } catch (error) {
        console.error('Error fetching group:', error)
      }
    }
    openArray()
  }, [])

  useEffect(() => {
    if (!fetchChunk.current) {
      return
    }

    const key = [POLYGONS.indexOf(region), injectionMonth].join(',')

    if (!chunkCache[key]) {
      fetchChunk.current(key)
    }
  }, [chunkCache, region, injectionMonth])

  const data = useMemo(() => {
    const key = [POLYGONS.indexOf(region), injectionMonth].join(',')
    if (chunkCache[key] && chunkCache[key] !== 'loading') {
      // dims: ['polygon_id', 'injection_date', 'elapsed_time', 'y', 'x']
      const result = chunkCache[key].pick(0, 0, time, null, null)

      // Slice out column at index=125 in x dimension to remove artifact from original data grid
      const refined = concat([result.hi(180, 124), result.lo(0, 125)], {
        dtype: 'float32',
      })
      return refined
    } else {
      return
    }
  }, [chunkCache, time, region, injectionMonth])

  const handleSetRegion = useCallback((id) => {
    setRegion(Number(id))
    setTime(0)
  }, [])

  const handleSetHoveredRegion = useCallback((id) => {
    setHoveredRegion(Number(id))
  }, [])

  return (
    <Row columns={6}>
      <Column start={1} width={4} sx={{ ...sx.column, overflowX: 'hidden' }}>
        <Box sx={sx.heading}>
          <Box sx={{ mb: 3, wordSpacing: 'inherit' }}>
            <Flex sx={{ gap: '11px', alignItems: 'baseline' }}>
              Region
              <Badge>{String(region).padStart(3, '0')}</Badge>
            </Flex>
          </Box>
          <Box
            sx={{
              width: [
                'calc(7 * (100vw - 12px * 7 ) / 6 + 6*  12px)', // 7 columns
                'calc(7 * (100vw - 18px * 9 ) / 8 + 6*  18px)', // 7 columns
                'calc(7 * (100vw - 24px * 13 ) / 12 + 6*  24px)', // 7 columns
                'calc(7 * (100vw - 36px * 13 ) / 12 + 6*  36px)', // 7 columns
              ],
              ml: [
                'calc(-1.5 * (100vw - 12px * 7 ) / 6 - 12px)', // 1.5 columns + gutter
                'calc(-1.5 * (100vw - 18px * 9 ) / 8 - 18px)', // 1.5 columns + gutter
                'calc(-1.5 * (100vw - 24px * 13 ) / 12 - 24px)', // 1.5 columns + gutter
                'calc(-1.5 * (100vw - 36px * 13 ) / 12 - 36px)', // 1.5 columns + gutter
              ],
            }}
          >
            <Minimap projection={naturalEarth1} {...MAP_PROPS}>
              <Sphere
                stroke={theme.colors.primary}
                fill={theme.colors.background}
                strokeWidth={1}
              />
              <Raster
                source={data}
                colormap={colormap}
                clim={CLIM}
                mode={'lut'}
                nullValue={FILL_VALUE}
                bounds={BOUNDS}
              />
              <Path
                key={'basemap'}
                stroke={theme.colors.primary}
                source={
                  'https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json'
                }
                feature={'land'}
                opacity={0.3}
                fill={theme.colors.background}
              />

              <Graticule stroke={theme.colors.primary} />
              <Regions
                region={region}
                setRegion={handleSetRegion}
                hoveredRegion={hoveredRegion}
                setHoveredRegion={handleSetHoveredRegion}
              />
            </Minimap>
          </Box>
        </Box>
        <Colorbar
          clim={[0, 1e-2]}
          colormap={colormap}
          units={'mol/m²/yr'}
          label='Addtl CO₂ uptake'
          horizontal
        />
      </Column>
      <Column start={5} width={2}>
        <Flex sx={{ flexDirection: 'column', height: '100%', width: '100%' }}>
          <Box sx={sx.column}>
            <Box sx={sx.heading}>Injection month</Box>

            <Filter
              values={{
                Jan: injectionMonth === MONTH_LABELS['Jan'],
                Apr: injectionMonth === MONTH_LABELS['Apr'],
                Jul: injectionMonth === MONTH_LABELS['Jul'],
                Oct: injectionMonth === MONTH_LABELS['Oct'],
              }}
              setValues={(obj) => {
                setInjectionMonth(
                  MONTH_LABELS[Object.keys(obj).find((k) => obj[k])]
                )
                setTime(0)
              }}
            />
          </Box>

          <Box sx={sx.column}>
            <Box sx={sx.heading}>Elapsed time</Box>
            <TimeSlider
              time={time}
              setTime={setTime}
              max={14}
              formatDate={formatTime}
              delay={200}
              disabled={!data}
            />
          </Box>

          <Box sx={{ ...sx.column, flexGrow: 1 }}>
            <Box sx={sx.heading}>Efficiency</Box>
            <Flex
              sx={{
                position: 'absolute',
                alignItems: 'baseline',
                gap: [0, 2],
                mt: [0, -2],
                flexDirection: ['column', 'row'],
              }}
            >
              <Box sx={sx.value}>
                {selectedLine &&
                  selectedLine[selectedLine.length - 1][1].toFixed(2)}
              </Box>
              <Box sx={sx.details}>after 15 years</Box>
            </Flex>
            <Chart x={[0, 15]} y={[0, 1]} padding={{ left: 0, top: 30 }}>
              <Grid vertical />
              <Plot>
                {backgroundLines &&
                  backgroundLines.map((l, i) => (
                    <Line
                      key={i}
                      color='secondary'
                      data={l}
                      width={1}
                      sx={{ opacity: 0.8 }}
                    />
                  ))}
                {selectedLine && (
                  <Line color='primary' data={selectedLine} width={1.5} />
                )}
                {hoveredLine && (
                  <Line
                    color={mix('primary', 'background', 0.7)}
                    data={hoveredLine}
                    width={1.5}
                  />
                )}
              </Plot>
            </Chart>
          </Box>
        </Flex>
      </Column>
    </Row>
  )
}

export default RegionalComparison
