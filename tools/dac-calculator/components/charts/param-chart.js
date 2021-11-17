import { Box } from 'theme-ui'
import {
  Chart,
  Axis,
  Ticks,
  TickLabels,
  AxisLabel,
  Plot,
  Bar,
} from '@carbonplan/charts'

const ParamChart = ({ param, data }) => {
  const domain = [data[0][0], data[data.length - 1][0]]
  // const range = data.reduce(
  //   (accum, [x, ...values]) => {
  //     const min = Math.min(...values)
  //     const max = Math.max(...values)

  //     if (typeof accum[0] !== 'number' || accum[0] > min) {
  //       accum[0] = min
  //     }
  //     if (typeof accum[1] !== 'number' || accum[1] < max) {
  //       accum[1] = max
  //     }

  //     return accum
  //   },
  //   [null, null]
  // )

  return (
    <Box sx={{ ml: ['-6px'], width: '100%', height: 200 }}>
      <Chart x={domain} y={[0, 800]} logx={param.scale === 'log'}>
        <Ticks bottom right />
        <TickLabels bottom right />
        <Plot>
          <Bar data={data.map((d) => [d[0], d[d.length - 1]])} color='purple' />
        </Plot>
      </Chart>
    </Box>
  )
}

export default ParamChart
