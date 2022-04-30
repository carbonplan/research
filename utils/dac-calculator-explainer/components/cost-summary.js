import { Box, Grid, Divider } from 'theme-ui'
import Donut from './utils/donut'
import Legend from './utils/legend'

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
    fontSize: [3, 3, 3, 4],
    textTransform: 'uppercase',
    ml: [2],
    mt: [3],
  },
  cost: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    color: 'purple',
    fontSize: [5, 5, 5, 6],
    ml: [2],
    mb: ['11px'],
  },
  donut: {
    ml: ['4px'],
    mb: ['10px'],
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
    <Box>
      <Grid columns={[3, 3, 4]} gap={[4, 5, 4, 6]} sx={{ pb: [0] }}>
        <Box sx={{ textAlign: 'left' }}>
          <Divider sx={{ mt: [0], mr: [0, 0, 3, 3] }} />
          <Box sx={sx.title}>NGCC</Box>
          <Box sx={sx.cost}>${NGCCTotalCost.toFixed(0)}</Box>
          <Donut results={NGCCResults} initWidth={125} sx={sx.donut} />
        </Box>
        <Box sx={{ textAlign: 'left' }}>
          <Divider sx={{ mt: [0], mr: [0, 0, 3, 3] }} />
          <Box sx={sx.title}>Wind</Box>
          <Box sx={sx.cost}>${windTotalCost.toFixed(0)}</Box>
          <Donut results={windResults} initWidth={125} sx={sx.donut} />
        </Box>
        <Box sx={{ textAlign: 'left' }}>
          <Divider sx={{ mt: [0], mr: [0, 0, 3, 3] }} />
          <Box sx={sx.title}>Solar</Box>
          <Box sx={sx.cost}>${solarTotalCost.toFixed(0)}</Box>
          <Donut results={solarResults} initWidth={125} sx={sx.donut} />
        </Box>
        <Box sx={{ position: 'relative' }}>
          <Legend />
        </Box>
      </Grid>
      <Divider sx={{ mt: [3] }} />
    </Box>
  )
}

export default CostSummary
