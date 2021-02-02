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
    ml: [2],
    mt: [3],
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

const CostSummary = ({
  windTotalCost,
  windVariableOM,
  windFixedOM,
  windCapitalRecovery,
  solarTotalCost,
  solarVariableOM,
  solarFixedOM,
  solarCapitalRecovery,
  NGCCTotalCost,
  NGCCVariableOM,
  NGCCFixedOM,
  NGCCCapitalRecovery,
  NGCCNaturalGas,
}) => {
  const NGCCResults = {
    'Capital Recovery [$/tCO2eq]': NGCCCapitalRecovery,
    'Variable O&M [$/tCO2eq]': NGCCVariableOM,
    'Natural Gas Cost [$/tCO2]': NGCCNaturalGas,
    'Fixed O&M [$/tCO2eq]': NGCCFixedOM,
    'Total Cost [$/tCO2]': NGCCTotalCost,
  }

  const windResults = {
    'Capital Recovery [$/tCO2eq]': windCapitalRecovery,
    'Variable O&M [$/tCO2eq]': windVariableOM,
    'Fixed O&M [$/tCO2eq]': windFixedOM,
    'Total Cost [$/tCO2]': windTotalCost,
  }

  const solarResults = {
    'Capital Recovery [$/tCO2eq]': solarCapitalRecovery,
    'Variable O&M [$/tCO2eq]': solarVariableOM,
    'Fixed O&M [$/tCO2eq]': solarFixedOM,
    'Total Cost [$/tCO2]': solarTotalCost,
  }
  return (
    <Box sx={{ my: [5] }}>
      <Grid columns={[3, 3, 4]} sx={{ pb: [0] }}>
        <Box sx={{ textAlign: 'left' }}>
          <Divider sx={{ mt: [0], mr: [3] }} />
          <Text sx={sx.title}>NGCC</Text>
          <Text sx={sx.cost}>${NGCCTotalCost.toFixed(0)}</Text>
          <Donut results={NGCCResults} initWidth={125} />
        </Box>
        <Box sx={{ textAlign: 'left' }}>
          <Divider sx={{ mt: [0], mr: [3] }} />
          <Text sx={sx.title}>Wind</Text>
          <Text sx={sx.cost}>${windTotalCost.toFixed(0)}</Text>
          <Donut results={windResults} initWidth={125} />
        </Box>
        <Box sx={{ textAlign: 'left' }}>
          <Divider sx={{ mt: [0], mr: [3] }} />
          <Text sx={sx.title}>Solar</Text>
          <Text sx={sx.cost}>${solarTotalCost.toFixed(0)}</Text>
          <Donut results={solarResults} initWidth={125} />
        </Box>
        <Box sx={{ position: 'relative' }}>
          <Legend />
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
        Net removed costs ($/tCO₂eq) for three energy configurations.
      </Text>
    </Box>
  )
}

export default CostSummary
