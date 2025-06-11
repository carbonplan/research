import { Minimap, Path, useMinimap } from '@carbonplan/minimaps'
import { naturalEarth1 } from '@carbonplan/minimaps/projections'
import React, { useEffect, useState, useMemo } from 'react'
import { geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import zarr from 'zarr-js'

import { Box, Flex, useThemeUI } from 'theme-ui'
import { useThemedColormap } from '@carbonplan/colormaps'
import { Colorbar, Column, Filter, Row, Slider } from '@carbonplan/components'
import { Chart, Ticks, TickLabels } from '@carbonplan/charts'

const getColor = (polygon_id, efficiencies, colormap, type, storageLoss) => {
  if (!efficiencies) {
    return null
  }

  const index = Number(polygon_id)
  const efficiency = efficiencies.get(index)

  if (type === 'dor') {
    const adjustedEfficiency = efficiency - storageLoss / 100

    const totalRange = 2
    const stepSize = totalRange / (colormap.length - 1)

    let colorIndex = 0
    for (let i = 0; i < colormap.length; i++) {
      const threshold = -1 + stepSize * i
      if (adjustedEfficiency >= threshold) {
        colorIndex = i
      } else {
        break
      }
    }

    const rgb = colormap[colorIndex] ?? []
    return `rgb(${rgb.join(',')})`
  } else {
    const colorIndex = Math.min(
      Math.round(efficiency * (colormap.length - 1)),
      colormap.length - 1
    )
    const rgb = colormap[colorIndex] ?? []
    return `rgb(${rgb.join(',')})`
  }
}

const Regions = ({ colormap, injectionMonth, time, type, storageLoss }) => {
  const { projection } = useMinimap()
  const [regions, setRegions] = useState({})
  const [efficiencies, setEfficiencies] = useState()
  const [efficiency, setEfficiency] = useState(null)
  const [regionsGeojson, setRegionsGeojson] = useState(null)
  const [oaeLoader, setOaeLoader] = useState(null)
  const [dorLoader, setDorLoader] = useState(null)
  const [loadedEfficiencies, setLoadedEfficiencies] = useState({})

  useEffect(() => {
    zarr().open(
      'https://carbonplan-oae-efficiency.s3.us-west-2.amazonaws.com/v3/store1b_eta_max.zarr/OAE_efficiency_eta_max',
      (err, get) => {
        if (!err && get) {
          setOaeLoader(() => get)
        }
      }
    )

    zarr().open(
      'https://carbonplan-dor-efficiency.s3.amazonaws.com/v3/store1b.zarr/DOR_efficiency',
      (err, get) => {
        if (!err && get) {
          setDorLoader(() => get)
        }
      }
    )
  }, [])

  useEffect(() => {
    if (!regionsGeojson) {
      fetch(
        'https://carbonplan-oae-efficiency.s3.us-west-2.amazonaws.com/regions.topojson'
      )
        .then((response) => response.json())
        .then((topojsonData) => {
          const geojsonData = feature(
            topojsonData,
            topojsonData.objects.regions
          )
          setRegionsGeojson(geojsonData)
        })
        .catch((error) => {
          console.error('Error loading regions:', error)
        })
    }
  }, [regionsGeojson])

  useEffect(() => {
    const loader = type === 'oae' ? oaeLoader : dorLoader
    const key = `${type}-${injectionMonth}`

    if (!loadedEfficiencies[key] && loader) {
      setLoadedEfficiencies((prev) => ({ ...prev, [key]: 'loading' }))
      loader([0, 0, injectionMonth], (innerErr, array) => {
        if (!innerErr && array) {
          setLoadedEfficiencies((prev) => ({ ...prev, [key]: array }))
        }
      })
    }
  }, [injectionMonth, type, oaeLoader, dorLoader, loadedEfficiencies])

  useEffect(() => {
    const key = `${type}-${injectionMonth}`
    const loadedEfficiency = loadedEfficiencies[key]

    if (loadedEfficiency && loadedEfficiency !== 'loading') {
      setEfficiency(loadedEfficiency)
    } else {
      setEfficiency(null)
    }
  }, [loadedEfficiencies, type, injectionMonth])

  useEffect(() => {
    if (efficiency) {
      setEfficiencies(efficiency.pick(time, null, 0))
    }
  }, [efficiency, time])

  useEffect(() => {
    if (regionsGeojson) {
      setRegions(
        regionsGeojson.features.reduce((a, f) => {
          const id = f.properties.polygon_id
          const path = geoPath(projection)(f)
          // append paths for multipart geometries
          if (a[id]) {
            a[id] = a[id] + ' ' + path
          } else {
            a[id] = path
          }
          return a
        }, {})
      )
    }
  }, [regionsGeojson, projection])

  return (
    <>
      {Object.keys(regions).map((polygon_id) => (
        <path
          key={polygon_id}
          d={regions[polygon_id]}
          fill={getColor(polygon_id, efficiencies, colormap, type, storageLoss)}
        />
      ))}
    </>
  )
}

const MONTH_LABELS = {
  Jan: 0,
  Apr: 1,
  Jul: 2,
  Oct: 3,
}

const EfficienciesMap = () => {
  const { theme } = useThemeUI()
  const [injectionMonth, setInjectionMonth] = useState(0)
  const [storageLoss, setStorageLoss] = useState(0)
  const time = 179
  const baseColormap = useThemedColormap('cool')
  const negativeColorMapShort = [
    ...useThemedColormap('reds', { count: Math.ceil(baseColormap.length / 5) }),
  ].reverse()
  const negativeColorMapFull = [
    ...useThemedColormap('reds', { count: baseColormap.length }),
  ].reverse()

  const dorColorbarColormap = useMemo(() => {
    return [...negativeColorMapShort, ...baseColormap]
  }, [baseColormap, negativeColorMapShort])

  const dorMapColormap = useMemo(() => {
    return [...negativeColorMapFull, ...baseColormap]
  }, [baseColormap, negativeColorMapFull])

  const dorEfficiencyLowerBound = -0.2

  return (
    <Box sx={{ width: '100%' }}>
      <Row columns={6}>
        <Column start={[1, 1, 1, 1]} width={[6, 3, 3, 3]}>
          <Box
            as='label'
            sx={{
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              textTransform: 'uppercase',
              fontSize: [2, 2, 2, 3],
            }}
          >
            Intervention month
          </Box>

          <Filter
            values={{
              Jan: injectionMonth === MONTH_LABELS['Jan'],
              Apr: injectionMonth === MONTH_LABELS['Apr'],
              Jul: injectionMonth === MONTH_LABELS['Jul'],
              Oct: injectionMonth === MONTH_LABELS['Oct'],
            }}
            setValues={(obj) =>
              setInjectionMonth(
                MONTH_LABELS[Object.keys(obj).find((k) => obj[k])]
              )
            }
            sx={{ mt: 2 }}
          />
        </Column>

        <Column
          start={[1, 4, 4, 4]}
          width={[6, 3, 3, 3]}
          sx={{ mt: [4, 0, 0, 0] }}
        >
          <Flex
            as='label'
            sx={{
              justifyContent: 'flex-end',
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              textTransform: 'uppercase',
              fontSize: [2, 2, 2, 3],
            }}
          >
            Storage loss
          </Flex>
          <Flex
            sx={{
              gap: 2,
              alignItems: 'center',
              mt: ['11px', '11px', '11px', '10px'],
            }}
          >
            <Slider
              min={0}
              max={100}
              step={1}
              value={storageLoss}
              onChange={(e) => setStorageLoss(e.target.value)}
            />
            <Box
              sx={{
                fontFamily: 'mono',
                letterSpacing: 'mono',
                width: 50,
                textAlign: 'right',
                fontSize: [1, 1, 1, 2],
              }}
            >
              {storageLoss}%
            </Box>
          </Flex>
        </Column>
      </Row>

      <Row columns={6} sx={{ mt: 4 }}>
        <Column start={1} width={[6, 3, 3, 3]}>
          <Box
            sx={{
              textAlign: 'center',
              fontFamily: 'mono',
              fontSize: [0, 0, 0, 1],
              letterSpacing: 'mono',
            }}
          >
            OAE
          </Box>
          <Box sx={{ mx: [-3, -3, -3, -5] }}>
            <Minimap projection={naturalEarth1} scale={1} translate={[0, 0]}>
              <Regions
                colormap={baseColormap}
                injectionMonth={injectionMonth}
                time={time}
                type='oae'
                storageLoss={storageLoss}
              />
              <Path
                stroke={theme.colors.primary}
                source={
                  'https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json'
                }
                feature={'land'}
                opacity={0.7}
                fill={theme.colors.background}
              />
            </Minimap>
          </Box>
        </Column>

        <Column start={[1, 4, 4, 4]} width={[6, 3, 3, 3]}>
          <Box
            sx={{
              mx: [-3, -3, -3, -5],
              position: 'relative',
              overflow: 'visible',
            }}
          >
            <Box
              sx={{
                textAlign: 'center',
                fontFamily: 'mono',
                fontSize: [0, 0, 0, 1],
                letterSpacing: 'mono',
                mt: [4, 0, 0, 0],
              }}
            >
              DOR
            </Box>
            <Box>
              <Minimap projection={naturalEarth1} scale={1} translate={[0, 0]}>
                <Regions
                  colormap={dorMapColormap}
                  injectionMonth={injectionMonth}
                  time={time}
                  type='dor'
                  storageLoss={storageLoss}
                />
                <Path
                  stroke={theme.colors.primary}
                  source={
                    'https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json'
                  }
                  feature={'land'}
                  opacity={0.7}
                  fill={theme.colors.background}
                />
              </Minimap>
            </Box>
          </Box>
        </Column>

        <Column start={1} width={6}>
          <Box sx={{ width: '100%', mt: 20 }}>
            <Flex sx={{ justifyContent: 'center' }}>
              <Box sx={{ width: ['80%', '80%', '80%', '80%'] }}>
                <Box
                  sx={{
                    fontSize: [0, 0, 0, 1],
                    fontFamily: 'mono',
                    letterSpacing: 'mono',
                    textAlign: 'center',
                    mb: 2,
                  }}
                >
                  EFFICIENCY
                  <Box sx={{ color: 'secondary', ml: 1 }}>
                    CO₂ absorbed / potential removal
                  </Box>
                </Box>
                <Colorbar
                  colormap={dorColorbarColormap}
                  width={'100%'}
                  horizontal
                />
                <Box sx={{ mt: 50 }}>
                  <Chart
                    x={[dorEfficiencyLowerBound, 1]}
                    y={[0, 0]}
                    padding={{ left: 1 }}
                  >
                    <Ticks
                      bottom
                      sx={{
                        '&:first-of-type': { ml: '-1px' },
                      }}
                    />
                    <TickLabels
                      bottom
                      format={(d) => {
                        if (d === -0.2) {
                          return '-1.0'
                        }
                        return d
                      }}
                    />
                    <Ticks
                      bottom
                      values={[
                        dorEfficiencyLowerBound / 2 - 0.01,
                        dorEfficiencyLowerBound / 2 + 0.01,
                      ]}
                      sx={{
                        transform: 'rotate(30deg)',
                        mt: ['-15px', '-19px', '-19px', '-19px'],
                        height: 22,
                      }}
                    />
                  </Chart>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Column>
      </Row>
    </Box>
  )
}

export default EfficienciesMap
