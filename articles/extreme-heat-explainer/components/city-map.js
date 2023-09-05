import { useState, useEffect } from 'react'
import { Box, Flex, useThemeUI } from 'theme-ui'
import { Minimap, Path, Sphere, Points, Graticule } from '@carbonplan/minimaps'
import { naturalEarth1 } from '@carbonplan/minimaps/projections'
import { Filter, Colorbar, FigureCaption } from '@carbonplan/components'
import { useThemedColormap } from '@carbonplan/colormaps'

import UnitConverter from './unit-converter'

const SCENARIO_LABELS = {
  '1985-2014': 'historical',
  '2020-2039': 'ssp245-2030',
  '2040-2059': 'ssp245-2050',
}

const CityMap = () => {
  const [scenario, setScenario] = useState('ssp245-2030')
  const [radiation, setRadiation] = useState('sun')
  const [threshold, setThreshold] = useState('30.5')
  const [clim] = useState([0, 140])
  const [data, setData] = useState(null)
  const [position, setPosition] = useState(null)
  const [units, setUnits] = useState('c')

  const THRESHOLD_LABELS_C = {
    '29.0': '29',
    30.5: '30.5',
    '32.0': '32',
  }

  const THRESHOLD_LABELS_F = {
    84.2: '29',
    86.9: '30.5',
    89.6: '32',
  }

  useEffect(() => {
    fetch(
      'https://carbonplan-climate-impacts.s3.us-west-2.amazonaws.com/extreme-heat/v1.0/outputs/web/explainer/maps.json'
    )
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  useEffect(() => {
    if (data) {
      setPosition(data.lat.map((d, i) => [data.lon[i], data.lat[i]]))
    }
  }, [data])

  const colormap = useThemedColormap('warm')

  const { theme } = useThemeUI()

  return (
    <>
      <Box sx={{ mb: [3, 3, 3, 4] }}>
        <Box sx={{ pb: [6, 6, 6, 7] }}>
          <Flex sx={{ justifyContent: 'space-between', mb: [4, 4, 4, 5] }}>
            <Filter
              values={{
                '1985-2014': scenario === 'historical',
                '2020-2039': scenario === 'ssp245-2030',
                '2040-2059': scenario === 'ssp245-2050',
              }}
              order={['1985-2014', '2020-2039', '2040-2059']}
              setValues={(obj) =>
                setScenario(
                  SCENARIO_LABELS[Object.keys(obj).find((k) => obj[k])]
                )
              }
              sx={{}}
            />
            <Box>
              {units == 'f' && (
                <Filter
                  values={{
                    84.2: threshold === '29',
                    86.9: threshold === '30.5',
                    89.6: threshold === '32',
                  }}
                  order={['84.2', '86.9', '89.6']}
                  setValues={(obj) =>
                    setThreshold(
                      THRESHOLD_LABELS_F[Object.keys(obj).find((k) => obj[k])]
                    )
                  }
                  sx={{ display: 'inline-block' }}
                />
              )}
              {units == 'c' && (
                <Filter
                  values={{
                    '29.0': threshold === '29',
                    30.5: threshold === '30.5',
                    '32.0': threshold === '32',
                  }}
                  order={['29.0', '30.5', '32.0']}
                  setValues={(obj) =>
                    setThreshold(
                      THRESHOLD_LABELS_C[Object.keys(obj).find((k) => obj[k])]
                    )
                  }
                  sx={{ display: 'inline-block' }}
                />
              )}
              <Box
                as='span'
                sx={{
                  display: [
                    'none',
                    'inline-block',
                    'inline-block',
                    'inline-block',
                  ],
                  fontFamily: 'mono',
                  letterSpacing: 'mono',
                  fontSize: [1, 1, 1, 2],
                  opacity: 0.24,
                  mt: ['2px'],
                }}
              >
                {units == 'c' ? 'ºC' : 'ºF'}
              </Box>
            </Box>
            <Filter
              values={{
                shade: radiation === 'shade',
                sun: radiation === 'sun',
              }}
              order={['shade', 'sun']}
              setValues={(obj) =>
                setRadiation(Object.keys(obj).find((k) => obj[k]))
              }
            />
          </Flex>
          <Box sx={{ display: 'block', width: '100%', position: 'relative' }}>
            <Minimap
              projection={naturalEarth1}
              scale={1.55}
              translate={[-0.12, -0.02]}
            >
              <Path
                stroke={theme.colors.primary}
                fill={'none'}
                source={
                  'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json'
                }
                feature={'land'}
              />
              <Graticule stroke={theme.colors.primary} />
              <Sphere fill={theme.colors.background} />
              {data && position && (
                <Points
                  position={position}
                  value={data[`WBGT-${radiation}`][scenario][threshold]}
                  colormap={colormap}
                  clim={clim}
                  size={5}
                  opacity={0.5}
                />
              )}
            </Minimap>
            <Box sx={{ position: 'absolute', left: 0, mt: [3, 3, 3, 4] }}>
              <Colorbar
                colormap={colormap}
                horizontal
                clim={clim}
                label='Days over threshold'
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <FigureCaption number={4}>
        Points show days over threshold for 15,300 urban centers. You can select
        the time period (1985-2014, 2020-2039, or 2040-2059), the threshold
        (29.0, 30.5, or 32.0 ºC), and whether to use WBGT in the shade or sun.
        For each time period, results show medians over time periods to reflect
        the “typical” heat in any given location. Results are medians across the
        ensemble of GCMs. <UnitConverter units={units} setUnits={setUnits} />
      </FigureCaption>
    </>
  )
}

export default CityMap
