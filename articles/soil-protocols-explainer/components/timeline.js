import { Box } from 'theme-ui'
import {
  Chart,
  Grid,
  Axis,
  Ticks,
  TickLabels,
  AxisLabel,
  Point,
  Plot,
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

const Timeline = ({ label, data }) => {
  const max = 30
  const min = -20

  let counter = min
  let ticks = []
  while (counter <= max) {
    ticks.push(counter)
    counter += 10
  }

  return (
    <Box sx={{ width: '100%', height: '120px', mb: [7, 7, 7, 8] }}>
      <Box
        sx={{
          letterSpacing: 'smallcaps',
          textTransform: 'uppercase',
          fontSize: [2, 2, 2, 3],
          pb: [3, 3, 3, 4],
          mt: [1],
          color: 'secondary',
        }}
      >
        {label} timeline
      </Box>
      <Chart x={[min, max]} y={[-0.4, 2]} padding={{ left: 0 }}>
        <AxisLabel bottom>
          Time&nbsp;
          <Box as='span' sx={{ textTransform: 'none', color: 'secondary' }}>
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
          <Rect
            color='orange'
            x={[data.activity[0], data.activity[1]]}
            y={[0, 0.6]}
          />
          <Rect
            color='orange'
            x={[data.crediting[0], data.crediting[1]]}
            y={[1, 1.6]}
          />
        </Plot>
        <Point x={data.activity[0]} y={1}>
          <Box sx={sx.label}>Activity</Box>
        </Point>
        <Point x={data.crediting[0]} y={2}>
          <Box sx={sx.label}>Crediting</Box>
        </Point>
      </Chart>
    </Box>
  )
}

export default Timeline
