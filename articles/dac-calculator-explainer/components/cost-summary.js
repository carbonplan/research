import { Box, Grid, Text, Divider } from 'theme-ui'
import Donut from './donut'
import Legend from './legend'

const results = {
  'Capital Recovery [$/tCO2eq]': 20,
  'Variable O&M [$/tCO2eq]': 10,
  'Natural Gas Cost [$/tCO2]': 20,
  'Fixed O&M [$/tCO2eq]': 50,
  'Total Cost [$/tCO2]': 100,
}

const sx = {
  title: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    color: 'text',
    fontSize: [3],
    textTransform: 'uppercase',
    ml: [2]
  },
  cost: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    color: 'purple',
    fontSize: [5],
    ml: [2],
    mb: [2],
  },
}

const CostSummary = () => {
  return (
    <Box sx={{ my: [5] }}>
      <Grid columns={[3, 3, 4]} sx={{ pb: [0] }}>
        <Box sx={{ textAlign: 'left' }}>
          <Text sx={sx.title}>NGCC</Text>
          <Text sx={sx.cost}>$100</Text>
          <Donut results={results} />
        </Box>
        <Box sx={{ textAlign: 'left' }}>
          <Text sx={sx.title}>Wind</Text>
          <Text sx={sx.cost}>$100</Text>
          <Donut results={results} />
        </Box>
        <Box sx={{ textAlign: 'left' }}>
          <Text sx={sx.title}>Solar</Text>
          <Text sx={sx.cost}>$100</Text>
          <Donut results={results} />
        </Box>
        <Box sx={{ position: 'relative', }}>
          <Legend results={results} />
        </Box>
      </Grid>
      <Divider sx={{ mt: [3] }} />
      <Text
        sx={{
          color: 'secondary',
          my: [3],
        }}
      >
        FIGURE 2{' '}
        <Text sx={{ display: 'inline-block', color: 'primary', mx: [1] }}>
          /
        </Text>{' '}
        Cost summaries for three energy configurations.
      </Text>
    </Box>
  )
}

export default CostSummary
