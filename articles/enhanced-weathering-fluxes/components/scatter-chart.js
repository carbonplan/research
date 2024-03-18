import React, { useMemo, useState } from 'react'
import {
  Axis,
  AxisLabel,
  Chart,
  Circle,
  Plot,
  TickLabels,
  Ticks,
} from '@carbonplan/charts'
import { Column, Row } from '@carbonplan/components'
import { Box, Flex, useThemeUI } from 'theme-ui'

import EstFeedSelect from './est-feed-select'
import { replacePlaceholder } from './utils'
import { alpha, mix } from '@theme-ui/color'
import Selected from './selected'

import data from './data'

const AXES = {
  particle_diameter_um: {
    label: 'Particle diameter',
    value: 'particle_diameter_um',
    units: 'µm',
  },
  application_rate_ton_ha_yr: {
    label: 'Application rate',
    value: 'application_rate_ton_ha_yr',
    units: 'tons / ha / yr',
  },
}

const X_TICKS = [
  0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900,
  1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
]
const Y_TICKS = [
  0.0001, 0.0002, 0.0003, 0.0004, 0.0005, 0.0006, 0.0007, 0.0008, 0.0009, 0.001,
  0.002, 0.003, 0.004, 0.005, 0.006, 0.007, 0.008, 0.009, 0.01, 0.02, 0.03,
  0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8,
  0.9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
]

const ScatterChart = ({ children }) => {
  const { theme } = useThemeUI()
  const [xAxis, setXAxis] = useState('particle_diameter_um')
  const [estimateType, setEstimateType] = useState('laboratory')
  const [feedstockType, setFeedstockType] = useState(null)
  const [selected, setSelected] = useState(null)
  const [log, setLog] = useState(false)

  const scatters = useMemo(() => {
    setSelected(null)
    return data.reduce(
      (a, item) => {
        const {
          CDRflux_tonsCO2_ha_yr: cdr,
          feedstock_group: feedstock,
          estimate_type,
          [xAxis]: xValue,
          CDR_consistentWithZero: zero,
        } = item
        if (cdr > 0 && zero === 'N' && xValue !== 'NA' && xValue !== null) {
          const isEstimateMatch =
            estimateType === null || estimate_type === estimateType
          const isFeedstockMatch =
            feedstockType === null || feedstock === feedstockType
          if (isEstimateMatch && isFeedstockMatch) {
            a.selected.push({ ...item, x: xValue, y: cdr })
          } else {
            a.unselected.push({ ...item, x: xValue, y: cdr })
          }
        }
        return a
      },
      { selected: [], unselected: [] }
    )
  }, [xAxis, feedstockType, estimateType])

  return (
    <>
      <Row columns={[6]}>
        <EstFeedSelect
          estimateType={estimateType}
          setEstimateType={setEstimateType}
          feedstockType={feedstockType}
          setFeedstockType={setFeedstockType}
        />
        <Column
          start={[1, 5, 5, 5]}
          width={[6, 2, 2, 2]}
          sx={{ mt: [3, 0, 0, 0] }}
        >
          <Selected selected={selected} />
        </Column>
      </Row>
      <Box sx={{ height: 300, mt: [5, 4, 4, 4], mb: 4, position: 'relative' }}>
        <Chart
          x={
            log
              ? [0.3, 10000]
              : [0, xAxis === 'particle_diameter_um' ? 2000 : 5000]
          }
          y={log ? [1e-4 / 2, 1e2] : [0, 50]}
          logx={log}
          logy={log}
        >
          <Axis bottom left />
          <AxisLabel bottom units={AXES[xAxis].units}>
            {AXES[xAxis].label}
          </AxisLabel>
          <AxisLabel left units='tons / ha / yr'>
            CDR
          </AxisLabel>
          <Ticks left values={log ? Y_TICKS : null} />
          <TickLabels left />
          <Ticks bottom values={log ? X_TICKS : null} />
          <TickLabels bottom values={log ? [1, 10, 100, 1000, 10000] : null} />
          <Plot onClick={() => setSelected(null)}>
            {scatters.unselected.map((scatter, i) => (
              <Circle
                key={i + 'unselected' + 'unselected'}
                x={scatter.x}
                y={scatter.y}
                color={mix('grey', 'background', 0.2)(theme)}
              />
            ))}
            {scatters.selected.map((scatter, i) => (
              <Circle
                key={i + 'selected'}
                x={scatter.x}
                y={scatter.y}
                color={alpha('grey', 0.9)(theme)}
                sx={{
                  cursor: 'pointer',
                  pointerEvents: 'visible-stroke',
                  '&:hover': {
                    stroke: 'primary',
                    strokeWidth: 12,
                    transition: 'all 0.1s ease-in-out',
                  },
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelected(scatter)
                }}
              />
            ))}
            {selected && (
              <Circle
                x={selected.x}
                y={selected.y}
                color='primary'
                size={14}
                sx={{
                  cursor: 'pointer',
                  pointerEvents: 'visible-stroke',
                }}
                onClick={() => setSelected(null)}
              />
            )}
          </Plot>
          <Flex
            sx={{
              pl: 70, // matches chart padding.left
              pt: 90,
              position: 'absolute',
              width: '100%',
              fontSize: 0,
              color: 'grey',
              justifyContent: 'center',
              fontFamily: 'mono',
              letterSpacing: 'mono',
              textTransform: 'uppercase',
              pointerEvents: 'none',
            }}
          >
            {scatters.selected.length === 0
              ? 'No results for this combination'
              : ''}
          </Flex>
        </Chart>
      </Box>
      {replacePlaceholder(children, log, setLog, xAxis, setXAxis)}
    </>
  )
}

export default ScatterChart
