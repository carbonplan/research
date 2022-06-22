import { Box } from 'theme-ui'
import {
  Chart,
  Ticks,
  TickLabels,
  Axis,
  AxisLabel,
  Plot,
  Line,
  Circle,
  Label,
  Grid,
} from '@carbonplan/charts'
import { inventory, uncertainty, targets, plan2022, plan2017 } from './data'

const ticks = [2010, 2015, 2020, 2025, 2030]
const ticksMobile = [2010, 2020, 2030]

const Figure = () => {
  return (
    <>
      <Box sx={{ width: '100%', height: ['350px', '350px', '350px', '350px'] }}>
        <Chart x={[2009, 2030]} y={[240, 500]} padding={{ left: 65 }}>
          <Grid vertical values={ticks} />
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
          <TickLabels left />
          <Axis left bottom />
          <AxisLabel left units='million tCO₂e'>
            Emissions
          </AxisLabel>
          <AxisLabel bottom>Year</AxisLabel>
          <TickLabels
            bottom
            values={ticks}
            sx={{ display: ['none', 'inherit', 'inherit', 'inherit'] }}
          />
          <TickLabels
            bottom
            values={ticksMobile}
            sx={{ display: ['inherit', 'none', 'none', 'none'] }}
          />
          <Label x={2010} y={490} sx={{ color: 'yellow' }}>
            Greenhouse gas inventory
          </Label>
          <Label x={2024} y={420} sx={{ color: 'red' }}>
            Final 2017
            <br />
            scoping plan
          </Label>
          <Label x={2021} y={330} sx={{ color: 'orange' }}>
            Draft 2022
            <br />
            scoping plan
          </Label>
          <Label x={2010} y={280} sx={{ color: 'secondary' }}>
            2030 Target
          </Label>
          <Label x={2010} y={422} sx={{ color: 'secondary' }}>
            2020 Target
          </Label>

          <Plot>
            <Line
              data={[
                [2009, targets['2020']],
                [2020, targets['2020']],
              ]}
              color='secondary'
              width={2}
            />
            <Line
              data={[
                [2009, targets['2030']],
                [2030, targets['2030']],
              ]}
              color='secondary'
              width={2}
            />
            <Line
              data={inventory.filter((d) => d[0] >= 2009)}
              color={'yellow'}
              width={2}
            />
            <Line
              data={plan2022.filter((d) => d[0] >= 2009)}
              color={'orange'}
              width={2}
              sx={{ strokeDasharray: 4 }}
            />
            <Line
              data={plan2017.filter((d) => d[0] >= 2009)}
              color={'red'}
              width={2}
              sx={{ strokeDasharray: 4 }}
            />
            <Line
              data={[
                [2021, inventory[21][1] - uncertainty['2021']],
                [2021, inventory[21][1] + uncertainty['2021']],
              ]}
              color={'yellow'}
              width={2}
            />
            <Circle x={2020} y={targets['2020']} color='secondary' />
            <Circle x={2030} y={targets['2030']} color='secondary' />
          </Plot>
        </Chart>
      </Box>
    </>
  )
}

export default Figure
