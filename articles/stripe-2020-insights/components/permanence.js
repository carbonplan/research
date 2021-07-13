import { Box } from 'theme-ui'
import { useThemeUI } from 'theme-ui'
import {
  Chart,
  Axis,
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
    <Box as='figure' sx={{ width: '80%', height: '330px' }}>
      <Chart log x={[0.6, 1000]} y={[1, 1000]}>
        <Ticks bottom values={[1, 10, 100, 1000]} />
        <TickLabels bottom values={[1, 10, 100, 1000]} />
        <Ticks left values={[10, 100, 1000]} />
        <TickLabels left values={[10, 100, 1000]} />
        <Axis left bottom />
        <AxisLabel align='center' left>
          <Box sx={{ textTransform: 'none' }}>PRICE $/tCO₂</Box>
        </AxisLabel>
        <AxisLabel align='center' bottom>
          <Box sx={{ textTransform: 'none' }}>PERMANENCE years</Box>
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
