import React, { useState } from 'react'
import { Box, Flex } from 'theme-ui'
import { Row, Column, Filter } from '@carbonplan/components'
import {
  Chart,
  Grid,
  Ticks,
  TickLabels,
  AxisLabel,
  Plot,
  Line,
  Label,
} from '@carbonplan/charts'

import { useCaseColors, chartLabelSx } from './utils'
import { ChartLegend, firstRowCenteredSx } from './legend'
import data from './data/fig4.json'

const SITES = ['Kuma', 'Palouse', 'Pullman']
const PLANE = 100
const REFERENCE = 'hourly'
const DIFF_CASE = 'longterm'
const CASES = [REFERENCE, DIFF_CASE]
const X_END = 10
const X_TICKS = [0, 2, 4, 6, 8, 10]
const Y_LIM = [0, 4]
const Y_TICKS = [0, 1, 2, 3, 4]
const X_LIM = [0, 10]
const CDR_X = [X_END + 0.15, X_END + 0.3]
const LINE_WIDTH = 1.5
const CHART_HEIGHT = ['275px', '275px', '275px', '325px']
const PADDING = { left: 64, bottom: 48, right: [16, 0, 0, 0] }
const TRANSITION = '0.1s ease-in-out'

const formatDiff = (v) => `${v < 0 ? '−' : '+'}${Math.abs(v).toFixed(2)}`

const endOf = (series, key) => series[key][series[key].length - 1]

const LEGEND_X = 0.4

const box = ([x0, x1], [y0, y1]) => [
  [x0, y0],
  [x1, y0],
  [x1, y1],
  [x0, y1],
]

const lineSx = { transition: `d ${TRANSITION}` }

const useLineColors = () => {
  const caseColors = useCaseColors()
  return {
    [REFERENCE]: caseColors.daily,
    [DIFF_CASE]: caseColors[DIFF_CASE],
  }
}

const Timeseries = ({ site }) => {
  const lineColors = useLineColors()
  const series = data.cdr[site][PLANE]

  const hourly = endOf(series, REFERENCE)
  const actual = endOf(series, DIFF_CASE)

  return (
    <Box sx={{ width: '100%', height: CHART_HEIGHT, position: 'relative' }}>
      <Chart x={X_LIM} y={Y_LIM} padding={PADDING} clamp={false}>
        <Grid horizontal values={Y_TICKS} />
        <Ticks left values={Y_TICKS} />
        <Ticks bottom values={X_TICKS} />
        <TickLabels left values={Y_TICKS} />
        <TickLabels bottom values={X_TICKS} />
        <AxisLabel left units='tCO₂/ha'>
          Cumulative CDR
        </AxisLabel>
        <AxisLabel bottom units='years'>
          Time
        </AxisLabel>
        <Plot>
          {CASES.map((c) => (
            <Line
              key={c}
              data={data.years.map((t, i) => [t, series[c][i]])}
              color={lineColors[c]}
              width={LINE_WIDTH}
              sx={lineSx}
            />
          ))}
          <Line
            data={box(CDR_X, [hourly, actual])}
            color='primary'
            width={1}
            sx={lineSx}
          />
        </Plot>

        <Label
          x={CDR_X[1]}
          y={(hourly + actual) / 2}
          height={Math.abs(hourly - actual)}
          verticalAlign='middle'
          sx={{
            ...chartLabelSx,
            ml: -2,
            whiteSpace: 'nowrap',
            color: 'primary',
            transform: 'rotate(-90deg)',
          }}
        >
          Δ CDR
        </Label>

        <ChartLegend
          x={LEGEND_X}
          y={Y_LIM[1]}
          sx={firstRowCenteredSx}
          cases={[DIFF_CASE, REFERENCE]}
          colors={lineColors}
          width={LINE_WIDTH}
        />
      </Chart>
    </Box>
  )
}

const Value = ({ value, label, sx }) => {
  return (
    <Box
      sx={{
        textAlign: ['left', 'right', 'right', 'left'],
        ml: [0, 0, 0, 3],
        ...sx,
      }}
    >
      <Box sx={chartLabelSx}>{label}</Box>
      <Box sx={{ mt: 1 }}>
        <Box
          as='span'
          sx={{
            fontFamily: 'mono',
            letterSpacing: 'mono',
            fontSize: [3, 3, 3, 4],
            color: 'grey',
          }}
        >
          {formatDiff(value)}
        </Box>
        <Box as='span' sx={{ ...chartLabelSx, color: 'secondary' }}>
          &nbsp;tCO₂/ha
        </Box>
      </Box>
    </Box>
  )
}

const Cdr = () => {
  const [site, setSite] = useState(SITES[0])

  const series = data.cdr[site][PLANE]

  const hourly = endOf(series, REFERENCE)
  const actual = endOf(series, DIFF_CASE)
  const potential = hourly + data.diffPotential[site]

  return (
    <Box>
      <Filter
        values={Object.fromEntries(SITES.map((s) => [s, s === site]))}
        labels={Object.fromEntries(SITES.map((s) => [s, data.states[s]]))}
        setValues={(next) => setSite(SITES.find((s) => next[s]))}
      />
      <Row columns={[6]} sx={{ mt: 3 }}>
        <Column start={[1]} width={[6, 4, 4, 3]} sx={{ order: [2, 1, 1, 1] }}>
          <Timeseries site={site} />
        </Column>
        <Column
          start={[1, 5, 5, 4]}
          width={[6, 2, 2, 1]}
          sx={{ order: [1, 2, 2, 2] }}
        >
          <Flex
            sx={{
              mb: [4, 0, 0, 0],
              flexDirection: ['row', 'column', 'column', 'column'],
              gap: 4,
            }}
          >
            <Value label='Δ CDR' value={actual - hourly} />
            <Value label='Δ DISSOLUTION' value={potential - hourly} />
          </Flex>
        </Column>
      </Row>
    </Box>
  )
}

export default Cdr
