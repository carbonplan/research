import { Box } from 'theme-ui'
import { useBreakpointIndex } from '@theme-ui/match-media'
import {
  Chart,
  Grid,
  Axis,
  Ticks,
  TickLabels,
  Point,
  Plot,
  AxisLabel,
} from '@carbonplan/charts'
import Rect from './rect'

const sx = {
  label: {
    color: 'orange',
    textTransform: 'uppercase',
    fontFamily: 'mono',
    letterSpacing: 'mono',
    transform: 'translateX(-100%)',
    fontSize: [0, 0, 0, 1],
    top: '11px',
    right: '8px',
    position: 'relative',
  },
  labelLeft: {
    color: 'orange',
    textTransform: 'uppercase',
    fontFamily: 'mono',
    letterSpacing: 'mono',
    fontSize: [0, 0, 0, 1],
    top: '11px',
    left: '8px',
    position: 'relative',
  },
}

const isNA = (v) => v[0] === 0 && v[1] === 0

const Timeline = ({ data }) => {
  const breakpoint = useBreakpointIndex({ defaultIndex: 0 })
  const hasActivity = data.activity !== 'N/A'

  let max,
    min,
    counter,
    ticks = []

  if (breakpoint === 0) {
    max =
      data.permanence[1] >= 40
        ? Math.round((data.permanence[1] + 20) / 20) * 20
        : 40
    min = data.permanence[1] > 60 ? -60 : -40
    counter = min
    while (counter <= max) {
      ticks.push(counter)
      counter += 20
    }
  } else {
    max =
      data.permanence[1] > 30
        ? Math.round((data.permanence[1] + 10) / 10) * 10
        : 30
    min = data.activity[0] === -20 ? -30 : -20
    counter = min
    while (counter <= max) {
      ticks.push(counter)
      counter += 10
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: hasActivity ? '173px' : '145px',
        mt: [3],
        mb: [3, 0, 0, 0],
      }}
    >
      <Chart
        x={[min, max]}
        y={[hasActivity ? -0.4 : 0.6, 4]}
        padding={{ left: 0 }}
      >
        <AxisLabel bottom>
          Time&nbsp;
          <Box as='span' sx={{ textTransform: 'none' }}>
            years
          </Box>
        </AxisLabel>
        <Grid
          vertical
          values={ticks}
          sx={{ opacity: 0.2, borderColor: 'primary' }}
        />
        <Ticks bottom values={ticks} sx={{ borderColor: 'primary' }} />
        <TickLabels
          bottom
          values={ticks}
          format={(d) => (d === 0 ? 'Start' : d)}
          sx={{ whiteSpace: 'nowrap', color: 'primary' }}
        />
        <Plot>
          {hasActivity && (
            <Rect
              color='orange'
              x={[data.activity[0], data.activity[1]]}
              y={[0, 0.6]}
            />
          )}
          <Rect
            color='orange'
            x={[data.crediting[0], data.crediting[1]]}
            y={[1, 1.6]}
          />
          <Rect
            color='orange'
            x={[data.permanence[0], data.permanence[1]]}
            y={[2, 2.6]}
          />
          {data.verification.map((d, i) => {
            return <Rect key={i} color='orange' x={[d, d + 0.5]} y={[3, 3.6]} />
          })}
        </Plot>
        {hasActivity && (
          <Point x={data.activity[0]} y={1}>
            <Box sx={sx.label}>Activity{isNA(data.activity) && ' — N/A'}</Box>
          </Point>
        )}
        <Point x={data.crediting[0]} y={2}>
          <Box sx={sx.label}>Crediting{isNA(data.crediting) && ' — N/A'}</Box>
        </Point>
        <Point x={data.permanence[0]} y={3}>
          <Box sx={sx.label}>Permanence{isNA(data.permanence) && ' — N/A'}</Box>
        </Point>
        <Point x={data.verification[0]} y={4}>
          <Box sx={sx.label}>
            Verification{isNA(data.verification) && ' — N/A'}
          </Box>
        </Point>
      </Chart>
    </Box>
  )
}

export default Timeline
