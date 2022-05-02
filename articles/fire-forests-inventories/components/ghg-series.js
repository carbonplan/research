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

const Figure = () => {
  let lineData = []

  const years = Array(13)
    .fill(0)
    .map((_, i) => i + 2000)

  const fireOptions = ['GFED', 'CARB']
  const emissionsOptions = Object.keys(netData)

  for (let i = 0; i < emissionsOptions.length; i++) {
    for (let j = 0; j < fireOptions.length; j++) {
      let data = []
      for (let k = 0; k < years.length; k++) {
        const net = netData[emissionsOptions[i]]
        const fire = fireData[fireOptions[j]]
        const residual = net.value - averageOverRange(fire, net.range)
        const result =
          residual + averageOverRange(fire, [years[k], years[k] + 9])
        const baseline = inventoryData.ghg_inventory[k + 12][1]
        data.push([years[k] + 9, baseline + result])
      }
      lineData.push(data)
    }
  }

  return (
    <Box sx={{ width: '100%', height: '300px' }}>
      <Chart x={[1999, 2022]} y={[340, 550]}>
        <AxisLabel left align='left'>
          CO₂ emissions&nbsp;
          <Box as='span' sx={{ textTransform: 'none', color: 'secondary' }}>
            MMT
          </Box>
        </AxisLabel>
        <AxisLabel bottom aligh='right'>
          Year
        </AxisLabel>
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
          {lineData.map((d, i) => (
            <Line
              key={i}
              data={d}
              color={'orange'}
              width={2}
              sx={i === 7 ? { strokeDasharray: 4 } : {}}
            />
          ))}
          <Line
            data={inventoryData.ghg_inventory.slice(
              3,
              inventoryData.ghg_inventory.length
            )}
            color='yellow'
            width={2}
          />
        </Plot>
        <Label x={2000.25} y={448}>
          AB 32 2020 Limit
        </Label>
        <Label x={2006.25} y={521} sx={{ color: 'yellow' }}>
          Anthropogenic
          <br />
          GHG inventory
        </Label>
        <Label x={2006.25} y={405} sx={{ color: 'orange' }}>
          Anthropogenic GHG Inventory +
          <br />
          Forest-related emissions
        </Label>
      </Chart>
    </Box>
  )
}

export default Figure
