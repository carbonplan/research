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
import { data } from './data/ghg-inventory'

const Figure = () => {
  return (
    <Box sx={{ width: '100%', height: '300px' }}>
      <Chart x={[1999, 2021]} y={[415, 495]}>
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
            data={[
              [1999, data.AB32],
              [2022, data.AB32],
            ]}
            color='secondary'
            width={2}
          />
          <Line
            data={data.ghg_inventory.slice(3, data.ghg_inventory.length - 2)}
            color='yellow'
            width={2}
          />
        </Plot>
        <Label x={2000.25} y={438}>
          AB 32 2020 Limit
        </Label>
        <Label x={2009.25} y={474} sx={{ color: 'yellow' }}>
          Anthropogenic
          <br />
          GHG inventory
        </Label>
      </Chart>
    </Box>
  )
}

export default Figure
