import { Minimap, Path, useMinimap } from '@carbonplan/minimaps'
import { naturalEarth1 } from '@carbonplan/minimaps/projections'
import React, { useEffect, useState } from 'react'
import { geoPath } from 'd3-geo'

import { Box, Flex, useThemeUI } from 'theme-ui'
import { useThemedColormap } from '@carbonplan/colormaps'
import { Colorbar, Column, Filter, Row } from '@carbonplan/components'
import TimeSlider from './time-slider'
import { useEfficiency, useRegions } from './data'

const getColor = (polygon_id, efficiencies, colormap) => {
  if (!efficiencies) {
    return null
  }

  const index = Number(polygon_id)
  const efficiency = efficiencies.get(index)

  const rgb = colormap[Math.round(efficiency * (colormap.length - 1))] ?? []

  return `rgb(${rgb.join(',')})`
}

const Regions = ({ colormap, injectionMonth, time }) => {
  const { projection } = useMinimap()
  const [regions, setRegions] = useState({})
  const [efficiencies, setEfficiencies] = useState()
  const { efficiency } = useEfficiency(injectionMonth)
  const { regions: regionsGeojson } = useRegions()

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
          fill={getColor(polygon_id, efficiencies, colormap)}
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

const formatTime = (t) => {
  return `Y${Math.floor(t / 12) + 1} M${(t % 12) + 1}`
}
const EfficienciesMap = () => {
  const { theme } = useThemeUI()
  const [injectionMonth, setInjectionMonth] = useState(0)
  const [time, setTime] = useState(179)
  const colormap = useThemedColormap('cool')

  return (
    <Box sx={{ width: '100%' }}>
      <Row columns={6}>
        <Column start={1} width={[6, 3, 3, 3]}>
          <Box
            as='label'
            sx={{
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              textTransform: 'uppercase',
              fontSize: [2, 2, 2, 3],
            }}
          >
            Elapsed time
          </Box>

          <Box sx={{ mt: 2 }} />
          <TimeSlider
            time={time}
            setTime={setTime}
            max={179}
            formatDate={formatTime}
            delay={500}
            pause='max'
          />
        </Column>

        <Column
          start={[1, 5, 5, 5]}
          width={[6, 2, 2, 2]}
          sx={{ mt: [3, 0, 0, 0] }}
        >
          <Box
            as='label'
            sx={{
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              textTransform: 'uppercase',
              fontSize: [2, 2, 2, 3],
            }}
          >
            Injection month
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
            sx={{ mt: 3 }}
          />
        </Column>
      </Row>

      <Box sx={{ mx: [-3, -3, -3, -5] }}>
        <Minimap projection={naturalEarth1} scale={1} translate={[0, 0]}>
          <Regions
            colormap={colormap}
            injectionMonth={injectionMonth}
            time={time}
          />
          <Path
            stroke={theme.colors.primary}
            source={'https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json'}
            feature={'land'}
            opacity={0.7}
            fill={theme.colors.background}
          />
        </Minimap>
      </Box>
      <Flex sx={{ justifyContent: 'flex-end' }}>
        <Colorbar
          colormap={colormap}
          clim={[0, 1]}
          label='Efficiency'
          horizontal
          sx={{ flexShrink: 0 }}
        />
      </Flex>
    </Box>
  )
}

export default EfficienciesMap
