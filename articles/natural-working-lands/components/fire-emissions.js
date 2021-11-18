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
    <Box as='figure' sx={{ mt: [6, 6, 6, 7], mb: [4, 4, 4, 5] }}>
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
              color='yellow'
              width={2}
            />
            <Line
              data={data.GFED.slice(0, data.GFED.length)}
              color='red'
              width={2}
            />
          </Plot>
          <Label x={2002.5} y={41} sx={{ color: 'yellow' }}>
            Fire (ARB)
          </Label>
          <Label x={1998.5} y={55} sx={{ color: 'red' }}>
            Fire (GFED)
          </Label>
          <Label x={1996.5} y={190}>
            Note: 2021 GFED estimates from Jan - Sep
          </Label>
        </Chart>
      </Box>
    </Box>
  )
}

export default Figure
