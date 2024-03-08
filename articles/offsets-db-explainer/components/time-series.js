import { Box } from 'theme-ui'
import {
  Axis,
  AxisLabel,
  Chart,
  TickLabels,
  Ticks,
  Line,
  Plot,
  Grid,
  Label,
} from '@carbonplan/charts'
import data from './data.json'

const getLineData = (protocol) =>
  data[protocol]
    .filter((d) => typeof d[1] === 'number')
    .map(([dateString, value]) => {
      const date = new Date(dateString)
      return [date.getFullYear() + (date.getMonth() + 1) / 12, value]
    })

const LINES = [
  { protocol: 'car-livestock', color: 'orange' },
  { protocol: 'car-landfill', color: 'blue' },
  { protocol: 'car-forest-mx', color: 'green' },
].map((l) => ({ ...l, data: getLineData(l.protocol) }))

const TimeSeries = () => {
  return (
    <Box sx={{ height: [200, 300] }}>
      <Chart x={[2008.75, 2024]} y={[0, 250]}>
        <Axis left bottom />
        <AxisLabel left>Cumulative projects</AxisLabel>
        <AxisLabel bottom>Listing date</AxisLabel>
        <Ticks left bottom />
        <TickLabels left bottom />
        <Grid vertical />
        <Label
          x={2023}
          y={222}
          align='right'
          sx={{ color: 'green', whiteSpace: 'nowrap' }}
        >
          car-forest-mx
        </Label>
        <Label x={2011} y={135} sx={{ color: 'blue', whiteSpace: 'nowrap' }}>
          car-landfill
        </Label>
        <Label x={2013} y={40} sx={{ color: 'orange', whiteSpace: 'nowrap' }}>
          car-livestock
        </Label>
        <Plot>
          {LINES.map(({ protocol, color, data }) => (
            <Line key={protocol} data={data} color={color} width={2} />
          ))}
        </Plot>
      </Chart>
    </Box>
  )
}

export default TimeSeries
