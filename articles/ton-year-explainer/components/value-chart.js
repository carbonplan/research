import { Box } from 'theme-ui'
import {
  AxisLabel,
  Chart,
  Grid,
  Ticks,
  TickLabels,
  Plot,
  Label,
  Rect,
} from '@carbonplan/charts'
import { Column, Row } from '@carbonplan/components'
import { useState } from 'react'
import { format } from 'd3-format'

import { getBaselineData, getScenarioData, getIrfCurve } from './utils'
import Parameters from './parameters'

const sx = {
  barLabel: {
    fontSize: [3, 3, 4, 4],
    ml: [2, '12px', '12px', '12px'],
    mt: ['1px', '3px', '-1px', '-1px'],
  },
  barLabelMethod: {
    fontSize: [1, 1, 1, 2],
    fontFamily: 'faux',
    letterSpacing: 'faux',
    textTransform: 'none',
    ml: ['6px'],
  },
  label: {
    mt: ['-22px', '-22px', 0, 0],
    fontSize: [2, 2, 2, 3],
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
  },
  method: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    fontSize: [1, 1, 1, 2],
    my: [2],
  },
}

const formatValue = (value) => {
  return value < 1 ? format('.3f')(value) : format('.0f')(value)
}

const BarLabel = ({ value, y, color, label, max = 500 }) => {
  const inner = (
    <>
      {formatValue(value)}
      {label && (
        <Box as='span' sx={{ ...sx.barLabelMethod }}>
          ({label})
        </Box>
      )}
    </>
  )
  return (
    <>
      <Label
        x={value}
        y={y}
        sx={{
          ...sx.barLabel,
          display: ['none', 'none', 'block', 'block'],
          color,
        }}
      >
        {inner}
      </Label>
      <Label
        x={value < max ? value : 0}
        y={y}
        sx={{
          ...sx.barLabel,
          display: ['block', 'block', 'none', 'none'],
          color: value < max ? color : 'background',
        }}
      >
        {inner}
      </Label>
    </>
  )
}

const ValueChart = () => {
  const [timeHorizon, setTimeHorizon] = useState(1000)
  const [delay, setDelay] = useState(100)
  const [discountRate, setDiscountRate] = useState(0)
  const { impact } = getBaselineData(
    getIrfCurve('joos_2013'),
    timeHorizon,
    discountRate
  )
  const { benefit: mcBenefit } = getScenarioData(
    'Moura Costa',
    getIrfCurve('joos_2013'),
    timeHorizon,
    delay,
    discountRate
  )
  const mcAmount = impact / mcBenefit
  const { benefit: lashofBenefit } = getScenarioData(
    'Lashof',
    getIrfCurve('joos_2013'),
    timeHorizon,
    delay,
    discountRate
  )
  const lashofAmount = impact / lashofBenefit

  return (
    <Row columns={6}>
      <Column start={1} width={6}>
        <Parameters
          timeHorizon={timeHorizon}
          setTimeHorizon={setTimeHorizon}
          delay={delay}
          setDelay={setDelay}
          discountRate={discountRate}
          setDiscountRate={setDiscountRate}
        />
      </Column>
      <Column start={1} width={6}>
        <Box sx={{ mt: [0, 2, 3, 3], width: '100%', height: '300px' }}>
          <Chart x={[0, 1000]} y={[1, 10.5]} padding={{ left: 0, top: 16 }}>
            <Ticks bottom />
            <TickLabels bottom />
            <AxisLabel bottom units='ton-years'>
              Impact
            </AxisLabel>
            <Grid vertical />
            <Label
              x={0}
              y={10.25}
              sx={{ ...sx.label, mt: [0, 0, 0, 0], color: 'primary' }}
            >
              Ton-year cost of 1{' '}
              <Box as='span' sx={{ textTransform: 'none' }}>
                tCO₂
              </Box>{' '}
              emission
            </Label>
            <Label x={0} y={5.75} sx={{ ...sx.label, color: 'primary' }}>
              Ton-year benefit of temporary{' '}
              <Box
                as='br'
                sx={{ display: ['initial', 'initial', 'none', 'none'] }}
              />
              storage of 1{' '}
              <Box as='span' sx={{ textTransform: 'none' }}>
                tCO₂
              </Box>
            </Label>

            <Plot>
              <Rect x={[0, Math.max(1, impact)]} y={[8, 9]} color='yellow' />
              <Rect
                x={[0, Math.max(1, mcBenefit)]}
                y={[3.5, 4.5]}
                color='green'
              />
              <Rect
                x={[0, Math.max(1, lashofBenefit)]}
                y={[1.9, 2.9]}
                color='pink'
              />
            </Plot>

            <BarLabel value={impact} y={9} color='yellow' />
            <BarLabel
              value={mcBenefit}
              y={4.5}
              color='green'
              label={<span>Moura&nbsp;Costa</span>}
            />
            <BarLabel
              value={lashofBenefit}
              y={2.9}
              color='pink'
              label='Lashof'
            />
          </Chart>
        </Box>
      </Column>
      <Column start={1} width={6}>
        <Box sx={{ mt: [2, 0, 0, 0], width: '100%', height: '180px' }}>
          <Chart x={[0, 1500]} y={[1, 6]} padding={{ left: 0, top: 16 }}>
            <Ticks bottom values={[0, 300, 600, 900, 1200, 1500]} />
            <TickLabels bottom values={[0, 300, 600, 900, 1200, 1500]} />
            <Grid vertical values={[0, 300, 600, 900, 1200, 1500]} />

            <AxisLabel bottom units='unitless'>
              Equivalence Ratio
            </AxisLabel>
            <Label x={0} y={5.75} sx={{ ...sx.label, color: 'primary' }}>
              Storage amount needed to{' '}
              <Box
                as='br'
                sx={{ display: ['initial', 'initial', 'none', 'none'] }}
              />
              offset 1{' '}
              <Box as='span' sx={{ textTransform: 'none' }}>
                tCO₂
              </Box>{' '}
              emission
            </Label>

            <Plot>
              <Rect
                x={[0, Math.max(1.5, mcAmount)]}
                y={[3.5, 4.5]}
                color='green'
              />
              <Rect
                x={[0, Math.max(1.5, lashofAmount)]}
                y={[1.9, 2.9]}
                color='pink'
              />
            </Plot>

            <BarLabel
              value={mcAmount}
              y={4.62}
              color='green'
              label={<span>Moura&nbsp;Costa</span>}
            />
            <BarLabel
              value={lashofAmount}
              y={2.97}
              color='pink'
              label='Lashof'
              max={750}
            />
          </Chart>
        </Box>
      </Column>
    </Row>
  )
}

export default ValueChart
