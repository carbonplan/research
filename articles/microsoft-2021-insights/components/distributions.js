import { Box, Text } from 'theme-ui'
import Chart from './chart'
import data from './data'

const projects = data.projects.map((d) => {
  return {
    id: d.id,
    tags: d.tags,
    volume: d.metrics[1].value,
    negativity: d.metrics[2].value,
    permanence: d.metrics[3].value,
  }
})

const sx = {
  label: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
  },
  units: {
    display: 'inline-block',
    fontFamily: 'body',
    letterSpacing: 'body',
    color: 'secondary',
    textTransform: 'none',
    ml: [1],
  },
}

const Distributions = () => {
  return (
    <Box>
      <Box sx={{ my: [4] }}>
        <Box sx={sx.label}>
          Volume <Box sx={sx.units}>tCO₂</Box>
        </Box>
        <Chart
          data={projects}
          field={'volume'}
          ticks={[10, 100, 1000, 10000, 100000, 1000000]}
          domain={[10, 1000000]}
          bandwidth={0.2}
          log={true}
        />
      </Box>
      <Box sx={{ mt: [5] }}>
        <Box sx={sx.label}>
          Permanence <Box sx={sx.units}>years</Box>
        </Box>
        <Chart
          data={projects}
          field={'permanence'}
          ticks={[1, 10, 100, 1000]}
          domain={[1, 1000]}
          bandwidth={0.1}
          log={true}
        />
      </Box>
    </Box>
  )
}

export default Distributions
