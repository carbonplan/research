import { Box } from 'theme-ui'
import {
  Chart,
  Plot,
  Line,
  Grid,
  Label,
  Ticks,
  AxisLabel,
  TickLabels,
} from '@carbonplan/charts'
import { data } from './data/fire-emissions'

const Figure = () => {
  return (
    <Box sx={{ width: '100%', height: '300px' }}>
      <Chart x={[1996, 2022]} y={[0, 205]}>
        <AxisLabel left align='left'>
          CO₂ emissions&nbsp;
          <Box as='span' sx={{ textTransform: 'none', color: 'secondary' }}>
            MMT
          </Box>
        </AxisLabel>
        <AxisLabel bottom>Year</AxisLabel>
        <Grid horizontal vertical />
        <TickLabels bottom left />
        <Ticks bottom left />
        <Plot>
          <Line
            data={data.CARB.slice(3, data.CARB.length - 1)}
            color='red'
            width={2}
            sx={{ strokeDasharray: 4 }}
          />
          <Line
            data={data.GFED.slice(0, data.GFED.length)}
            color='red'
            width={2}
          />
        </Plot>
        <Label x={2002.5} y={38} sx={{ color: 'red' }}>
          Fire (CARB)
        </Label>
        <Label x={1998.5} y={54} sx={{ color: 'red' }}>
          Fire (GFED)
        </Label>
      </Chart>
    </Box>
  )
}

export default Figure
