import { Box, Text, Grid } from 'theme-ui'
import Donut from './donut'
import Bar from './bar'
import data from './data'

const getValidation = (data, metric, category) => {
  const subset = data.filter((d) => {
    return d.id.includes('MSFT') && d.tags[0] === category
  })
  if (metric === 'additionality') {
    return (
      subset
        .map((d) => {
          const value = d.metrics.filter((m) => m.name === metric)[0].value
          if (value >= 1) return 1
          return 0
        })
        .reduce((a, b) => a + b, 0) / subset.length
    )
  } else {
    return (
      subset
        .map((d) => {
          const rating = d.metrics.filter((m) => m.name === metric)[0].rating
          if (rating == 1) return 1
          return 0
        })
        .reduce((a, b) => a + b, 0) / subset.length
    )
  }
}

const validations = {}
const categories = [
  'forests',
  'soil',
  'biomass',
  'ocean',
  'mineralization',
  'dac',
]
const metrics = [
  'mechanism',
  'volume',
  'negativity',
  'permanence',
  'additionality',
]
const colors = {
  forests: 'green',
  biomass: 'yellow',
  soil: 'orange',
  mineralization: 'grey',
  dac: 'purple',
  ocean: 'teal',
}
categories.forEach((c) => {
  validations[c] = {}
  metrics.forEach((m) => {
    validations[c][m] = getValidation(data.projects, m, c)
  })
})

const sx = {
  label: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    pb: [0],
    fontSize: [2, 2, 2, 3],
  },
}

const Validation = () => {
  return (
    <Box>
      <Box sx={{ display: ['none', 'initial', 'initial'] }}>
        <Grid columns={[5]} sx={{ columnGap: [3, 4, 4], mb: [2] }}>
          <Box sx={sx.label}>Mechanism</Box>
          <Box sx={sx.label}>Volume</Box>
          <Box sx={sx.label}>Negativity</Box>
          <Box sx={sx.label}>Permanence</Box>
          <Box sx={sx.label}>Additionality</Box>
          <Box />
        </Grid>

        <Box sx={{ mb: [4] }}>
          {categories.map((c, i) => {
            return (
              <Grid
                key={i}
                columns={[5]}
                sx={{ columnGap: [3, 4, 4], mb: [3] }}
              >
                <Box>
                  <Bar
                    data={[validations[c]['mechanism']]}
                    opacity={[1, 0.2]}
                    color={colors[c]}
                  />
                </Box>
                <Box>
                  <Bar
                    data={[validations[c]['volume']]}
                    opacity={[1, 0.2]}
                    color={colors[c]}
                  />
                </Box>
                <Box>
                  <Bar
                    data={[validations[c]['negativity']]}
                    opacity={[1, 0.2]}
                    color={colors[c]}
                  />
                </Box>
                <Box>
                  <Bar
                    data={[validations[c]['permanence']]}
                    opacity={[1, 0.2]}
                    color={colors[c]}
                  />
                </Box>
                <Box>
                  <Bar
                    data={[validations[c]['additionality']]}
                    opacity={[1, 0.2]}
                    color={colors[c]}
                  />
                </Box>
              </Grid>
            )
          })}
        </Box>
      </Box>
      <Box sx={{ display: ['initial', 'none', 'none'] }}>
        {metrics.map((m, i) => {
          return (
            <Box key={i}>
              <Box sx={{ ...sx.label, mb: [2] }}>{m}</Box>
              <Grid columns={[6]} sx={{ columnGap: [3, 4, 4], mb: ['24px'] }}>
                {categories.map((c, j) => {
                  return (
                    <Box key={j}>
                      <Bar
                        aspect={0.3}
                        key={j}
                        data={[validations[c][m]]}
                        opacity={[1, 0.2]}
                        color={colors[c]}
                      />
                    </Box>
                  )
                })}
              </Grid>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Validation
