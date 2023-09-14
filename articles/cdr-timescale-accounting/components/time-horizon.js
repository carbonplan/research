import { useMemo, useState } from 'react'
import { Box } from 'theme-ui'
import { Column, Row, Slider } from '@carbonplan/components'
import {
  Chart,
  Plot,
  Ticks,
  TickLabels,
  Axis,
  AxisLabel,
  Label,
  Line,
  Grid,
  Circle,
} from '@carbonplan/charts'
import { format, precisionRound } from 'd3-format'
import { alpha, mix } from '@theme-ui/color'

import rawData from './DOR_vs_DAC_combined.json'

const sx = {
  filterLabel: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [2, 2, 2, 3],
    mt: [0],
    pb: [0],
  },
  removals: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    fontSize: 4,
  },
  removalType: {
    mt: 3,
    pt: 2,
    mb: 2,
    borderColor: 'muted',
    borderWidth: 0,
    borderStyle: 'solid',
    borderTopWidth: 1,
    fontSize: 0,
    color: 'primary',
    textTransform: 'uppercase',
  },
  units: {
    color: 'secondary',
    textTransform: 'none',
  },
}

const p = precisionRound(0.1, 1.1)
const formatter = format('.' + p + 'r')
const f = (v) => {
  if (v < 0.001) {
    return '0.0'
  } else {
    return formatter(v)
  }
}

const getData = ({ feedbacks }) => {
  const getFilter = (type) => (d) =>
    d.carbon_cycle_feedback === feedbacks &&
    d.perturbation_type === type &&
    d.years_after_deployment <= 100 &&
    (type === 'DAC' ? true : d.wind_speed === 'default')

  return {
    dor: rawData.data
      .filter(getFilter('DOR'))
      .map((d) => [d.years_after_deployment, d.value]),
    dac: rawData.data
      .filter(getFilter('DAC'))
      .map((d) => [d.years_after_deployment, d.value]),
  }
}

const TimeHorizon = () => {
  const [timeHorizon, setTimeHorizon] = useState(10)

  const { on, off } = useMemo(() => {
    const on = getData({ feedbacks: 'on' })
    const off = getData({ feedbacks: 'off' })

    return {
      on,
      off,
    }
  }, [])

  const { initial, net } = useMemo(() => {
    return {
      initial: {
        dac: timeHorizon > 0 ? 1 : 0,
        dor: -1 * off.dor.find(([time]) => time === timeHorizon)[1],
      },
      net: {
        dac: -1 * on.dac.find(([time]) => time === timeHorizon)[1],
        dor: -1 * on.dor.find(([time]) => time === timeHorizon)[1],
      },
    }
  }, [on, off, timeHorizon])

  return (
    <Box>
      <Row columns={6} sx={{ ...sx.removals, mt: 5 }}>
        <Column start={1} width={[6, 3, 3, 3]}>
          <Box sx={sx.removalType}>
            Removal flux{' '}
            <Box as='span' sx={sx.units}>
              (GtCO₂)
            </Box>
          </Box>
          <Row columns={[6, 3, 3, 3]}>
            <Column start={1} width={[3, 1, 1, 1]} sx={{ color: 'purple' }}>
              {f(initial.dac)}
            </Column>
            <Column
              start={[4, 2, 2, 2]}
              width={[3, 1, 1, 1]}
              sx={{ color: 'pink' }}
            >
              {f(initial.dor)}
            </Column>
          </Row>
        </Column>

        <Column start={[1, 4, 4, 4]} width={[6, 3, 3, 3]}>
          <Box sx={sx.removalType}>
            Net atmospheric response{' '}
            <Box as='span' sx={sx.units}>
              (GtCO₂)
            </Box>
          </Box>
          <Row columns={[6, 3, 3, 3]}>
            <Column
              start={1}
              width={[3, 1, 1, 1]}
              sx={{ color: alpha('purple', 0.45) }}
            >
              {f(net.dac)}
            </Column>
            <Column
              start={[4, 2, 2, 2]}
              width={[3, 1, 1, 1]}
              sx={{ color: alpha('pink', 0.45) }}
            >
              {f(net.dor)}
            </Column>
          </Row>
        </Column>
      </Row>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ width: '100%', height: '300px' }}>
          <Chart x={[-5, 100]} y={[-1, 0]} padding={{ left: 72, top: 36 }}>
            <Ticks left bottom />
            <TickLabels left bottom />
            <Grid horizontal vertical />
            <Axis left bottom />
            <AxisLabel bottom units='years'>
              Time
            </AxisLabel>
            <AxisLabel left units='GtCO₂'>
              Volume
            </AxisLabel>
            <Label
              x={timeHorizon}
              y={0}
              align={timeHorizon > 60 ? 'right' : 'left'}
              sx={{
                mt: '-5px',
                ml: timeHorizon > 60 ? 0 : 3,
                mr: timeHorizon > 60 ? 3 : 0,
              }}
            >
              <Box>Time&nbsp;Horizon</Box>
              <Box>
                ({timeHorizon}&nbsp;{timeHorizon === 1 ? 'year' : 'years'})
              </Box>
            </Label>

            <Plot>
              <Line
                width={2}
                data={on.dor}
                color='pink'
                sx={{ opacity: 0.3 }}
              />
              <Line
                width={2}
                data={on.dac}
                color='purple'
                sx={{ opacity: 0.3 }}
              />
              <Line width={2} data={off.dor} color='pink' />
              <Line width={2} data={off.dac} color='purple' />
              <Line
                data={[
                  [timeHorizon, 0],
                  [timeHorizon, -10],
                ]}
                sx={{ strokeDasharray: 4 }}
              />
              <Circle
                x={timeHorizon}
                y={-1 * net.dac}
                size={6}
                color={mix('purple', 'background', 0.3)}
              />
              <Circle
                x={timeHorizon}
                y={-1 * net.dor}
                size={6}
                color={mix('pink', 'background', 0.3)}
              />
              <Circle
                x={timeHorizon}
                y={-1 * initial.dac}
                size={6}
                color='purple'
              />
              <Circle
                x={timeHorizon}
                y={-1 * initial.dor}
                size={6}
                color='pink'
              />
            </Plot>
          </Chart>
        </Box>
        <Box
          sx={{
            width: [
              'calc((100% - 51px) * (100 / 105))',
              'calc((100% - 53px) * (100 / 105))',
              'calc((100% - 56px) * (100 / 105))',
              'calc((100% - 56px) * (100 / 105))',
            ],
            position: 'absolute',
            right: 0,
            top: 34,
            mr: ['-10px', '-9px', '-7px', '-7px'],
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
            min={0}
            max={100}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default TimeHorizon
