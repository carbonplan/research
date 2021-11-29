import { Box } from 'theme-ui'
import {
  Chart,
  Axis,
  Ticks,
  TickLabels,
  Plot,
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
    <Box
      sx={{
        ml: ['-6px'],
        width: 'calc(100% - 36px)',
        height: param.chartHeight,
      }}
    >
      <Chart
        x={domain}
        y={[0, 800]}
        logx={param.scale === 'log'}
        padding={{ left: 0, bottom: 0, right: 0, top: 0 }}
        axisPadding={{ left: 6, right: 6, top: 0, bottom: 0 }}
      >
        <Axis right />
        <Ticks bottom right />
        <TickLabels right format={(d) => `$${d}`} />
        <TickLabels bottom values={param.tickLabels} />
        <Plot sx={{ pb: '2px' }}>
          <StackedBar
            data={data.map(([x, ...yValues]) => [x, 0, ...yValues])}
            color='purple'
            width={param.width}
          />
        </Plot>
      </Chart>
    </Box>
  )
}

export default ParamChart
