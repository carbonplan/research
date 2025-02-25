import { useState } from 'react'
import { Box } from 'theme-ui'
import { Filter } from '@carbonplan/components'
import {
  Area,
  Axis,
  AxisLabel,
  Chart,
  Grid,
  Label,
  Line,
  Plot,
  Rect,
} from '@carbonplan/charts'
import { curveCatmullRom } from 'd3-shape'
import { mix } from '@theme-ui/color'

const OPTIONS = {
  1: {
    emissions: [
      [1, 1],
      [3, 0.5],
      [6, 0],
      [10, 0],
    ],
    removals: [
      [3, 0],
      [4, -0.1],
      [6, -0.5],
      [8, -0.7],
      [10, -0.8],
    ],
    today: 'Emissions exceed removals.',
    netZero: 'System is capable of residual compensation and drawdown.',
  },
  2: {
    emissions: [
      [1, 1],
      [3, 0.5],
      [6, 0.3],
      [10, 0.3],
    ],
    removals: [
      [3, 0],
      [4, -0.1],
      [6, -0.3],
      [8, -0.3],
      [10, -0.3],
    ],
    today: 'Emissions exceed removals.',
    netZero:
      'Removals come hand-in-hand with residual emissions. System is not capable of drawdown.',
  },
  3: {
    emissions: [
      [1, 1],
      [3, 0.4],
      [6, 0.013],
      [10, 0],
    ],
    removals: [
      [3, 0],
      [4, -0.1],
      [6, 0],
      [8, 0],
      [10, 0],
    ],
    today: 'Emissions exceed removals.',
    netZero:
      'Opportunity for removals diminishes as the system is displaced. Cannot support residual compensation or drawdown.',
  },
}

const sx = {
  era: {
    textAlign: 'left',
    color: 'primary',
    ml: 2,
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    fontSize: [3, 4, 4, '28px'],
  },
  description: {
    textAlign: 'left',
    color: 'primary',
    mx: 2,
    fontFamily: 'faux',
    letterSpacing: 'faux',
    fontSize: [1, 1, 1, 2],
    textTransform: 'none',
  },
}

const Scenarios = () => {
  const [option, setOption] = useState(1)
  return (
    <Box>
      <Filter
        values={{
          1: option === 1,
          2: option === 2,
          3: option === 3,
        }}
        setValues={(obj) =>
          setOption(Number(Number(Object.keys(obj).find((key) => obj[key]))))
        }
        labels={{
          1: 'Flexible removal',
          2: 'Committed removal',
          3: 'Constrained removal',
        }}
      />

      <Box sx={{ height: 400, mt: 5 }}>
        <Chart x={[0, 10]} y={[-3, 10]} padding={{ left: 20, bottom: 20 }}>
          <Axis left />
          <AxisLabel bottom>Time</AxisLabel>
          <AxisLabel left>Global emissions</AxisLabel>
          <AxisLabel
            left
            align='left'
            sx={{
              '& div div': { flexDirection: 'row-reverse' },
              '& div div svg': {
                transform: 'rotate(-45deg)',
                mt: '0px',
                mb: '4px',
              },
            }}
          >
            Removals
          </AxisLabel>
          <Plot>
            <Rect color='muted' opacity={0.2} x={[1, 6]} y={[-3, 10]} />
            <Rect color='muted' opacity={0.6} x={[6, 10]} y={[-3, 10]} />
            <Area
              curve={curveCatmullRom}
              color={mix('yellow', 'background', 0.5)}
              data={[
                [0, 6.5],
                [1, 7],
                [2, 5.5],
                [3, 3.75],
                [4, 2.5],
                [6, 1],
                [8, 0.6],
                [10, 0.5],
              ]}
            />
            <Area
              curve={curveCatmullRom}
              color={mix('green', 'background', 0.5)}
              data={[
                [3, 0],
                [4, -0.1],
                [6, -1],
                [8, -1.8],
                [10, -2],
              ]}
            />
            <Area
              curve={curveCatmullRom}
              color={'yellow'}
              data={OPTIONS[option].emissions}
              sx={{ transition: 'all 0.15s' }}
            />
            <Area
              curve={curveCatmullRom}
              color={'green'}
              data={OPTIONS[option].removals}
              sx={{ transition: 'all 0.15s' }}
            />
            <Line
              data={[
                [2, 0.9],
                [2.25, 1.4],
                [2.5, 1.4],
              ]}
              sx={{
                stroke: 'yellow',
                strokeWidth: 1,
              }}
            />
            <Line
              data={[
                [4.5, -0.9],
                [4.75, -0.9],
                [5, -0.4],
              ]}
              sx={{
                stroke: 'green',
                strokeWidth: 1,
              }}
            />
          </Plot>
          <Label
            color='yellow'
            x={2.5}
            y={1.4}
            verticalAlign='middle'
            height={1}
            sx={{ ml: 1 }}
          >
            System emissions
          </Label>

          <Label
            color='green'
            x={4.5}
            y={-0.9}
            align='right'
            verticalAlign='middle'
            height={1}
            sx={{ mr: 1 }}
          >
            System removals
          </Label>
          <Label x={3.25} y={10} width={4.5} align='center'>
            <Box sx={sx.era}>Today</Box>
            <Box sx={sx.description}>{OPTIONS[option].today}</Box>
          </Label>
          <Label x={8} y={10} width={4} align='center'>
            <Box sx={sx.era}>Net-zero</Box>
            <Box sx={sx.description}>{OPTIONS[option].netZero}</Box>
          </Label>
          <Grid
            horizontal
            values={[0]}
            sx={{ borderColor: 'secondary', borderTopWidth: 1, opacity: 1 }}
          />
          <Grid
            vertical
            values={[1, 6]}
            sx={{
              borderColor: 'primary',
              borderStyle: 'dashed',
              borderTopWidth: 1,
              opacity: 1,
            }}
          />
        </Chart>
      </Box>
    </Box>
  )
}

export default Scenarios
