import { useState } from 'react'
import { Box, Flex } from 'theme-ui'
import {
  Chart,
  Plot,
  Line as ChartLine,
  Axis,
  AxisLabel,
  Ticks,
  TickLabels,
  Grid,
  Label,
  Circle,
} from '@carbonplan/charts'
import { Filter } from '@carbonplan/components'
import { format } from 'd3-format'
import { animated, useSpring, easings } from '@react-spring/web'

const sx = {
  heading: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [2, 2, 2, 3],
  },
  value: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    fontSize: [0, 4, 4, '28px'],
    mt: [2, 0, 0, 0],
    ml: [-1, 0, 0, 0],
  },
  label: {
    maxWidth: ['70px', '120px', '120px', '200px'],
    fontSize: [0, 1, 1, 2],
    fontFamily: 'faux',
    letterSpacing: 'faux',
    mt: [0],
    ml: [-1, 0, 0, 0],
  },
}

const INITIAL_AREA = 2700
const GROWTH_RATES = {
  sinking: { 2030: 1.6017, 2050: 1.17002 },
  products: { 2030: 1.4351, 2050: 1.12797 },
}

const formatGrowthRate = (growthRate) => {
  const value = (growthRate - 1) * 100
  return `${value.toFixed(1)}%`
}
const getGrowthCurve = (growthRate, year, yMax) => {
  let last = [2020, INITIAL_AREA]
  const result = [last]
  while (last[0] < year && last[1] < yMax) {
    last = [last[0] + 1, last[1] * growthRate]
    result.push(last)
  }

  return result
}

const Line = ({ growthRate, year, yMax }) => {
  const curve = getGrowthCurve(growthRate, year, yMax)
  const trimmedCurve = [...curve.slice(0, -1), [year, yMax]]

  return (
    <>
      <ChartLine data={trimmedCurve} color='teal' />
      <Circle x={year} y={yMax} color='teal' />
    </>
  )
}

const AnimatedLine = animated(Line)
const AnimatedGrid = animated(Grid)
const AnimatedLabel = animated(Label)

const GrowthChart = () => {
  const [target, setTarget] = useState('sinking')
  const { growthRate2030, growthRate2050, yMax, yMaxLine } = useSpring({
    yMaxLine: target === 'sinking' ? [300000] : [100000],
    yMax: target === 'sinking' ? 300000 : 100000,
    growthRate2030: GROWTH_RATES[target][2030],
    growthRate2050: GROWTH_RATES[target][2050],
    config: {
      duration: 500,
      easing: easings.easeOut,
    },
  })

  return (
    <Box>
      <Flex sx={{ gap: 3, mb: 3 }}>
        <Box sx={sx.heading}>Target</Box>
        <Filter
          values={{
            sinking: target === 'sinking',
            products: target === 'products',
          }}
          setValues={(obj) =>
            obj.sinking ? setTarget('sinking') : setTarget('products')
          }
        />
      </Flex>
      <Box sx={{ width: '100%', height: '300px' }}>
        <Chart x={[2020, 2070]} y={[0, 350000]}>
          <Axis left bottom />
          <Ticks left bottom />
          <TickLabels left format={format('~s')} />
          <TickLabels bottom />
          <AxisLabel bottom>Year</AxisLabel>
          <AxisLabel left units='km²' align='left'>
            Area farmed
          </AxisLabel>
          <Grid vertical values={[2030, 2050]} />
          <AnimatedGrid horizontal values={yMaxLine} />

          <Plot>
            <AnimatedLine growthRate={growthRate2030} yMax={yMax} year={2030} />
            <AnimatedLine growthRate={growthRate2050} yMax={yMax} year={2050} />
          </Plot>
          <Label sx={{ color: 'teal', ml: 3 }} x={2030} y={240000}>
            <Box sx={sx.value}>
              {formatGrowthRate(GROWTH_RATES[target][2030])}
            </Box>
            <Box sx={sx.label}>Annual growth rate for 2030 goal</Box>
          </Label>
          <Label sx={{ color: 'teal', ml: 3 }} x={2050} y={240000}>
            <Box sx={sx.value}>
              {formatGrowthRate(GROWTH_RATES[target][2050])}
            </Box>
            <Box sx={sx.label}>Annual growth rate for 2050 goal</Box>
          </Label>
          <AnimatedLabel
            x={2070}
            y={yMax}
            align='right'
            verticalAlign='top'
            sx={{ mt: [2], maxWidth: ['100px', '100%'] }}
          >
            Area required
            <br />
            for 1{' '}
            <Box as='span' sx={{ textTransform: 'none' }}>
              Gt
            </Box>{' '}
            CO₂
            {target === 'products' ? (
              <Box as='span' sx={{ textTransform: 'none' }}>
                e
              </Box>
            ) : (
              ''
            )}
            /year
          </AnimatedLabel>
        </Chart>
      </Box>
    </Box>
  )
}

export default GrowthChart
