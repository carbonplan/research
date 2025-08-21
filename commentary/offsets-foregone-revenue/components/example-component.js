import { Box } from 'theme-ui'
import {
  Chart,
  Plot,
  Ticks,
  TickLabels,
  Axis,
  AxisLabel,
  Bar,
} from '@carbonplan/charts'

const data = Array(11)
  .fill(null)
  .map((_, i) => [i, (i + 1) * 9])

const ExampleComponent = ({ color }) => {
  return (
    <Box sx={{ width: '100%', height: '400px' }}>
      <Chart x={[-1, 11]} y={[0, 100]} padding={{ left: 60, top: 50 }}>
        <Ticks left bottom />
        <TickLabels left bottom />
        <Axis left bottom />
        <AxisLabel left>Variable one</AxisLabel>
        <AxisLabel bottom>Variable two</AxisLabel>
        <Plot>
          <Bar data={data} color={color} />
        </Plot>
      </Chart>
    </Box>
  )
}

export default ExampleComponent
