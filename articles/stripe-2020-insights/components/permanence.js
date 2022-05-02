import { Box } from 'theme-ui'
import { useThemeUI } from 'theme-ui'
import {
  Chart,
  Grid,
  AxisLabel,
  Ticks,
  TickLabels,
  Plot,
  Scatter,
} from '@carbonplan/charts'
import data from '../data'

const categories = [
  { name: 'mineralization', color: 'grey' },
  { name: 'soil', color: 'orange' },
  { name: 'biomass', color: 'yellow' },
  { name: 'forests', color: 'green' },
  { name: 'ocean', color: 'teal' },
  { name: 'dac', color: 'purple' },
]

const Permanence = () => {
  const { projects } = data
  const { theme } = useThemeUI()

  return (
    <Box
      sx={{
        width: '100%',
        height: ['330px', '330px', '330px', '400px'],
      }}
    >
      <Chart log x={[0.6, 2000]} y={[1, 2000]}>
        <Grid vertical horizontal count={3} />
        <Ticks bottom values={[1, 10, 100, 1000]} />
        <TickLabels bottom values={[1, 10, 100, 1000]} />
        <Ticks left values={[10, 100, 1000]} />
        <TickLabels left values={[10, 100, 1000]} />
        <AxisLabel left align='left'>
          Price&nbsp;
          <Box sx={{ textTransform: 'none', color: 'secondary' }}>$/tCO₂</Box>
        </AxisLabel>
        <AxisLabel bottom>
          Permanence&nbsp;
          <Box sx={{ textTransform: 'none', color: 'secondary' }}>years</Box>
        </AxisLabel>

        <Plot>
          {categories.map(({ name, color }) => (
            <Scatter
              data={projects
                .filter((p) => p.tags[0] === name)
                .map((p) => [
                  p.metrics.filter((m) => m.name == 'permanence')[0].value,
                  p.metrics.filter((m) => m.name == 'cost')[0].value,
                ])}
              color={theme.colors[color]}
              key={name}
              size={15}
            />
          ))}
        </Plot>
      </Chart>
    </Box>
  )
}

export default Permanence
