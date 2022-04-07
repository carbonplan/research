import { Box } from 'theme-ui'
import { format } from 'd3-format'
import { timeFormat, timeParse } from 'd3-time-format'

import {
  Chart,
  Ticks,
  TickLabels,
  Axis,
  AxisLabel,
  Bar,
  Plot,
  Line,
  Label,
  Grid,
} from '@carbonplan/charts'

const formatter = format('~s')

const timeParser = timeParse('%Y-%m-%d')
const timeFormatter = timeFormat('%m-%d-%y')

const ticks = [13, 43, 74, 105, 133]
const ticksMobile = [43, 105]

const Prices = ({ data }) => {
  const timeSeries = {
    BCT: {
      keys: Object.keys(data.BCT),
      values: Object.keys(data.BCT).map((k, i) => [i, data.BCT[k]]),
    },
    KLIMA: {
      keys: Object.keys(data.KLIMA),
      values: Object.keys(data.KLIMA).map((k, i) => [i, data.KLIMA[k]]),
    },
  }

  return (
    <>
      <Box sx={{ width: '100%', height: ['175px', '200px', '200px', '200px'] }}>
        <Chart
          x={[0, timeSeries.BCT.values.length - 2]}
          y={[0, 10]}
          padding={{ left: 65 }}
        >
          <Ticks left />
          <Ticks
            values={ticks}
            bottom
            sx={{ display: ['none', 'inherit', 'inherit', 'inherit'] }}
          />
          <Ticks
            values={ticksMobile}
            bottom
            sx={{ display: ['inherit', 'none', 'none', 'none'] }}
          />
          <TickLabels left format={(d) => `$${d}`} />
          <Axis left bottom />
          <Label x={20} y={8.5} sx={{ color: 'grey' }}>
            BCT
          </Label>
          <Grid vertical values={ticks} />
          <Plot>
            <Line
              data={timeSeries.BCT.values.filter((d) => d[1])}
              color={'grey'}
              width={1.25}
            />
          </Plot>
        </Chart>
      </Box>
      <Box sx={{ width: '100%', height: ['175px', '200px', '200px', '200px'] }}>
        <Chart
          x={[0, timeSeries.BCT.values.length - 2]}
          y={[0, 4000]}
          padding={{ left: 65 }}
        >
          <Ticks left />
          <Ticks
            bottom
            values={ticks}
            sx={{ display: ['none', 'inherit', 'inherit', 'inherit'] }}
          />
          <Ticks
            bottom
            values={ticksMobile}
            sx={{ display: ['inherit', 'none', 'none', 'none'] }}
          />
          <TickLabels left format={(d) => `$${formatter(d)}`} />
          <TickLabels
            bottom
            values={ticks}
            sx={{ display: ['none', 'inherit', 'inherit', 'inherit'] }}
            format={(d) => timeFormatter(timeParser(timeSeries.KLIMA.keys[d]))}
          />
          <TickLabels
            bottom
            values={ticksMobile}
            sx={{ display: ['inherit', 'none', 'none', 'none'] }}
            format={(d) => timeFormatter(timeParser(timeSeries.KLIMA.keys[d]))}
          />
          <Axis left bottom />
          <AxisLabel left align='left'>
            Price
          </AxisLabel>
          <AxisLabel bottom>Time</AxisLabel>
          <Grid vertical values={ticks} />
          <Label x={20} y={2900} sx={{ color: 'grey' }}>
            KLIMA
          </Label>
          <Plot>
            <Line
              data={timeSeries.KLIMA.values.filter((d) => d[1])}
              color={'grey'}
              width={1.25}
            />
          </Plot>
        </Chart>
      </Box>
    </>
  )
}

export default Prices
