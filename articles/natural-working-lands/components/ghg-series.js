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
import { data as inventoryData } from './data/ghg-inventory'
import { data as netData } from './data/net-effect'
import { data as fireData } from './data/fire-emissions'
import { getOption, averageOverRange } from './utils'

const years = Array(22)
  .fill(0)
  .map((_, i) => i + 2000)

const Figure = () => {
  let data = []

  for (let k = 0; k < years.length; k++) {
    const net = netData['AB 1504']
    const fire = fireData['CARB']
    const residual = net.value - averageOverRange(fire, net.range)
    const result = residual + averageOverRange(fire, [years[k], years[k]])
    const baseline = inventoryData.ghg_inventory.slice(
      3,
      inventoryData.ghg_inventory.length
    )[k][1]
    data.push([years[k], baseline + result])
  }

  return (
    <Box as='figure' sx={{ mt: [6, 6, 6, 7], mb: [4, 4, 4, 5] }}>
      <Box sx={{ width: '100%', height: '300px' }}>
        <Chart x={[1999, 2021]} y={[390, 515]}>
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
                [1999, inventoryData.AB32],
                [2022, inventoryData.AB32],
              ]}
              color='secondary'
              width={2}
            />
            <Line
              data={inventoryData.ghg_inventory.slice(
                3,
                inventoryData.ghg_inventory.length - 1
              )}
              color='yellow'
              width={2}
            />
            <Line data={data} color='orange' width={2} />
          </Plot>
          <Label x={2000.25} y={440}>
            AB32 2020 Limit
          </Label>
          <Label x={2009.25} y={474} sx={{ color: 'yellow' }}>
            Anthropogenic
            <br />
            GHG inventory
          </Label>
          <Label x={2006.25} y={423} sx={{ color: 'orange' }}>
            Anthropogenic + Forests
            <br />
            GHG inventory
          </Label>
        </Chart>
      </Box>
    </Box>
  )
}

export default Figure
