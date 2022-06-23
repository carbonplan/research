import { Box } from 'theme-ui'
import {
  Chart,
  Ticks,
  TickLabels,
  Axis,
  AxisLabel,
  Plot,
  Line,
  Label,
  Grid,
} from '@carbonplan/charts'
import { inventory, targets, uncertainty } from './data'

const ticks = [2000, 2005, 2010, 2015, 2020, 2025, 2030, 2035]
const ticksMobile = [2000, 2010, 2020, 2030]

const Figure = () => {
  return (
    <>
      <Box sx={{ width: '100%', height: ['250px', '350px', '350px', '350px'] }}>
        <Chart x={[2000, 2035]} y={[0, 600]} padding={{ left: 65 }}>
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

          <Label x={2005} y={550} sx={{ color: 'yellow' }}>
            Greenhouse gas inventory
          </Label>
          <Label x={2028} y={420} sx={{ color: 'green' }}>
            ~3.7x
            <br />
            Reduction
          </Label>
          <Label x={2024} y={140} sx={{ color: 'teal' }}>
            ~6.5x
            <br />
            Reduction
          </Label>

          <Plot>
            <Line
              data={[
                [2021, inventory[21][1] - uncertainty['2021']],
                [2021, inventory[21][1] + uncertainty['2021']],
              ]}
              color={'yellow'}
              width={2}
            />
            <Line data={inventory} color={'yellow'} width={2} />
            <Line
              data={[inventory[21], [2030, targets['2030']]]}
              color={'green'}
              width={2}
              sx={{ strokeDasharray: 4 }}
            />
            <Line
              data={[inventory[21], [2045, 0]]}
              color={'teal'}
              width={2}
              sx={{ strokeDasharray: 4 }}
            />
          </Plot>
        </Chart>
      </Box>
    </>
  )
}

export default Figure
