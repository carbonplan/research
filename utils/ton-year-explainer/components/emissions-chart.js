import { Box } from 'theme-ui'
import {
  Area,
  Axis,
  AxisLabel,
  Chart,
  Grid,
  Label,
  Line,
  Plot,
  Ticks,
  TickLabels,
} from '@carbonplan/charts'
import { Group, Slider } from '@carbonplan/components'
import { useRef, useState } from 'react'

import { getBaselineData, getIrfCurve } from './utils'

const sx = {
  value: {
    color: 'yellow',
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    fontSize: [3, 4, 4, '28px'],
  },
  label: {
    fontFamily: 'faux',
    letterSpacing: 'faux',
    fontSize: [1, 1, 1, 2],
    mt: [0],
    color: 'yellow',
  },
}

const baseline = getIrfCurve('joos_2013')

const EmissionsChart = () => {
  const chartContainer = useRef(null)
  const timeHorizonContainer = useRef(null)
  const [timeHorizon, setTimeHorizon] = useState(100)

  const { points } = getBaselineData(baseline, 1000, 0)
  const { points: horizonPoints, impact } = getBaselineData(
    baseline,
    timeHorizon,
    0
  )

  let timeHorizonFlipped = false
  if (chartContainer?.current) {
    const { width: chartWidth } = chartContainer.current.getBoundingClientRect()
    const { width: timeHorizonWidth } =
      timeHorizonContainer.current.getBoundingClientRect()

    if (
      70 + (chartWidth - 70) * (timeHorizon / 1000) + timeHorizonWidth >
      chartWidth
    ) {
      timeHorizonFlipped = true
    }
  }

  return (
    <Group>
      <Group>
        <Box sx={{ position: 'relative' }}>
          <Box
            ref={chartContainer}
            sx={{
              width: '100%',
              height: ['300px', '300px', '300px', '350px'],
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            <Chart x={[0, 1000]} y={[0, 1]}>
              <Ticks left bottom />
              <TickLabels left bottom />
              <Grid vertical />

              <Axis left bottom />
              <AxisLabel align='left' left units='tCO₂'>
                volume
              </AxisLabel>
              <AxisLabel bottom units='years'>
                time
              </AxisLabel>
              <Label
                x={timeHorizon}
                y={1}
                align={timeHorizonFlipped ? 'right' : 'left'}
                sx={{
                  mt: '-5px',
                  ml: timeHorizonFlipped ? 0 : 3,
                  mr: timeHorizonFlipped ? 3 : 0,
                }}
              >
                <Box ref={timeHorizonContainer} id='test'>
                  Time&nbsp;Horizon
                </Box>
                <Box>
                  ({timeHorizon}&nbsp;{timeHorizon === 1 ? 'year' : 'years'})
                </Box>
              </Label>

              <Plot>
                <Line color='primary' data={points} />
                <Line color='yellow' data={horizonPoints} />
                <Area
                  color='yellow'
                  data={horizonPoints}
                  sx={{ opacity: '40%' }}
                />
              </Plot>
              <Grid
                vertical
                values={[timeHorizon]}
                sx={{
                  borderLeftWidth: '2px',
                  borderColor: 'secondary',
                  borderStyle: 'dashed',
                  opacity: 1,
                }}
              />
            </Chart>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: [6],
              left: [
                '30%',
                'calc(65% - 100px)',
                'calc(75% - 125px)',
                'calc(75% - 155px)',
              ],
            }}
          >
            <Box sx={sx.value}>{impact.toFixed(2)} ton-years</Box>
            <Box sx={sx.label}>
              Cost of emitting 1{' '}
              <Box as='span' sx={{ textTransform: 'none' }}>
                tCO₂
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: [
                'calc(100% - 48px)',
                'calc(100% - 56px)',
                'calc(100% - 56px)',
                'calc(100% - 56px)',
              ],
              position: 'absolute',
              ml: ['60px', '64px', '64px', '64px'],
              mt: '-51px',
            }}
          >
            <Slider
              sx={{
                mt: '1px',
                height: 0,
                pointerEvents: 'all',
              }}
              onChange={(e) => setTimeHorizon(Number(e.target.value))}
              value={timeHorizon}
              step={1}
              min={1}
              max={1000}
            />
          </Box>
        </Box>
      </Group>
    </Group>
  )
}

export default EmissionsChart
