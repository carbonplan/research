import { Box } from 'theme-ui'
import {
  Chart,
  Axis,
  Ticks,
  TickLabels,
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

  const { validValues, invalidValues } = data.reduce(
    (accum, [x, ...yValues]) => {
      if (yValues.find((v) => v < 0)) {
        accum.invalidValues.push([x, 1000])
      } else {
        accum.validValues.push([x, 0, ...yValues])
      }
      return accum
    },
    { validValues: [], invalidValues: [] }
  )

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
        padding={{
          left: 0,
          right: [0, 0, 0, 4],
          top: 0,
          bottom: 22,
        }}
        axisPadding={{
          left: 6,
          right: 6,
          top: 0,
          bottom: 2,
        }}
      >
        <Axis right />
        <Ticks bottom right />
        <TickLabels right format={(d) => `$${d}`} />
        <TickLabels bottom values={param.tickLabels} />
        <Plot>
          {validValues.length > 0 && (
            <StackedBar data={validValues} color='purple' width={param.width} />
          )}
          {invalidValues.length > 0 && (
            <Bar
              data={invalidValues}
              color='secondary'
              fillOpacity={0.6}
              width={param.width}
            />
          )}
        </Plot>
      </Chart>
    </Box>
  )
}

export default ParamChart
