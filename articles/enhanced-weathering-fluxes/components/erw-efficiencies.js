import React, { useState, useMemo } from 'react'
import { Box, Flex, useThemeUI } from 'theme-ui'
import { useBreakpointIndex } from '@theme-ui/match-media'
import {
  Axis,
  AxisLabel,
  Chart,
  Plot,
  TickLabels,
  Ticks,
} from '@carbonplan/charts'
import { Row, Column } from '@carbonplan/components'
import { mix } from '@theme-ui/color'

import EstFeedSelect from './est-feed-select'
import { replacePlaceholder } from './utils'
import Bar from './custom-bar'
import Selected from './selected'

import data from './data'

const options = [
  {
    value: 'annual',
    key: 'CDR_efficiency_annual_percent',
    color: 'grey',
    unit: '%',
  },
]

const noDataValue = -999
const Y_TICKS = [
  0.0001, 0.0002, 0.0003, 0.0004, 0.0005, 0.0006, 0.0007, 0.0008, 0.0009, 0.001,
  0.002, 0.003, 0.004, 0.005, 0.006, 0.007, 0.008, 0.009, 0.01, 0.02, 0.03,
  0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8,
  0.9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
]

const ErwEfficiencies = ({ children }) => {
  const { theme } = useThemeUI()
  const [estimateType, setEstimateType] = useState(null)
  const [feedstockType, setFeedstockType] = useState(null)
  const [log, setLog] = useState(false)
  const [selected, setSelected] = useState(null)

  const selectedOption = options[0]

  const index = useBreakpointIndex({ defaultIndex: 2 })
  const chartPadding = { left: index === 3 ? 80 : 70, bottom: 32 }

  const sortedData = useMemo(() => {
    return data
      .filter(
        (d) =>
          !isNaN(d[selectedOption.key]) &&
          d[selectedOption.key] !== null &&
          d.CDR_consistentWithZero !== 'Y' &&
          d.CDRflux_tonsCO2_ha_yr > 0
      )
      .sort((a, b) => b[selectedOption.key] - a[selectedOption.key])
  }, [selectedOption])

  const unfilteredOptionData = useMemo(() => {
    return sortedData.map((item, index) => [
      index + 1,
      item[selectedOption.key],
    ])
  }, [selectedOption, sortedData])

  const filteredOptionData = useMemo(() => {
    setSelected(null)
    const newData = sortedData.map((item, index) => {
      const estimateMatch =
        estimateType === null || item.estimate_type === estimateType
      const feedstockMatch =
        feedstockType === null || item.feedstock_group === feedstockType
      if (estimateMatch && feedstockMatch) {
        return [index + 1, item[selectedOption.key]]
      } else {
        return [index + 1, noDataValue]
      }
    })
    return newData
  }, [selectedOption, estimateType, feedstockType, sortedData])

  const domain = [0, unfilteredOptionData.length]
  const range = log ? [0.0001, 100] : [0, 100]
  const barsFilled = unfilteredOptionData.map((_, i) => [i + 1, range[1]])
  const barsFilledSelected = filteredOptionData.map((d) => [
    d[0],
    d[1] === noDataValue ? 0 : range[1],
  ])
  const barsFilledUserSelected = barsFilled.map((d, i) => [
    d[0],
    selected && i === selected.index ? range[1] : 0,
  ])

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

      <Box sx={{ height: 300, mt: [4, 3, 3, 3], mb: 4, position: 'relative' }}>
        <Flex
          sx={{
            pl: chartPadding.left,
            pt: 90,
            position: 'absolute',
            width: '100%',
            fontSize: 0,
            color: 'grey',
            justifyContent: 'center',
            fontFamily: 'mono',
            letterSpacing: 'mono',
            textTransform: 'uppercase',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          {filteredOptionData.filter((d) => d[1] !== noDataValue).length === 0
            ? 'No results for this combination'
            : ''}
        </Flex>

        <Chart x={domain} y={range} logy={log} padding={chartPadding}>
          <Axis left />
          <Ticks left values={log ? Y_TICKS : null} />
          <TickLabels
            left
            values={log ? [0.001, 0.01, 0.1, 1, 10, 100] : null}
            format={(d) => `${d}%`}
          />
          <AxisLabel left>Removal efficiency</AxisLabel>
          <AxisLabel align='center' arrow={false} bottom>
            Individual estimates
          </AxisLabel>
          <Plot>
            <Bar
              data={barsFilled}
              color='hinted'
              onClick={() => setSelected(null)}
              width={1}
              stroke={theme.rawColors.background}
              strokeWidth={0.1}
            />
            <Bar
              data={barsFilledSelected}
              color={mix('grey', 'background', 0.2)(theme)}
              width={1}
              stroke={theme.rawColors.background}
              strokeWidth={0.1}
            />
            <Bar
              data={filteredOptionData}
              color={mix('grey', 'background', 0.9)(theme)}
              style={{ transition: 'all 0.1s' }}
              width={1}
              stroke={theme.rawColors.background}
              strokeWidth={0.1}
            />
            <Bar
              data={barsFilledSelected}
              color='primary'
              style={{
                transition: 'all 0.1s',
                opacity: 0,
                cursor: 'pointer',
              }}
              onMouseOver={(e) => {
                e.target.style.opacity = 0.3
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = 0
              }}
              onBarClick={(d) => {
                setSelected({ ...sortedData[d[0] - 1], index: d[0] - 1 })
              }}
              width={1}
            />
            <Bar
              width={1}
              data={barsFilledUserSelected}
              color='primary'
              style={{
                opacity: 0.3,
              }}
              onClick={() => setSelected(null)}
            />
          </Plot>
        </Chart>
      </Box>
      {replacePlaceholder(children, log, setLog)}
    </>
  )
}

export default ErwEfficiencies
