import { Box } from 'theme-ui'
import {
  Chart,
  Axis,
  Ticks,
  TickLabels,
  AxisLabel,
  Plot,
  Bar,
  StackedBar,
} from '@carbonplan/charts'

const ParamChart = ({ param, data }) => {
  const domain =
    param.scale == 'linear'
      ? [
          param.validRange[0] -
            (param.validRange[1] - param.validRange[0]) * 0.04,
          param.validRange[1] +
            (param.validRange[1] - param.validRange[0]) * 0.04,
        ]
      : param.displayRange

  return (
    <Box sx={{ ml: ['-6px'], width: '100%', height: param.chartHeight }}>
      <Chart
        x={domain}
        y={[0, 800]}
        logx={param.scale === 'log'}
        padding={{ left: 0, bottom: 0, right: 0, top: 0 }}
        axisPadding={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <Axis bottom right />
        <Ticks bottom right />
        <TickLabels right />
        <TickLabels bottom values={param.tickLabels} />
        <Plot sx={{ pb: '2px' }}>
          <StackedBar
            test={param.displayName === 'Electric Req'}
            data={data.map(([x, ...yValues]) => [x, 0, ...yValues])}
            color='purple'
            range={[0.1, 0.9]}
            width={param.width}
          />
        </Plot>
      </Chart>
    </Box>
  )
}

export default ParamChart
