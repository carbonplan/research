import { Box, Divider, Grid, Text } from 'theme-ui'
import Donut from './donut'
import LegendWithValues from './legend-with-values'

const ParameterScenario = ({
  figureNumber,
  capitalExpense,
  WACC,
  facilityLifetime,
  scale,
  totalCost,
  variableOM,
  fixedOM,
  naturalGas,
  capitalRecovery,
}) => {
  const results = {
    'Capital Recovery [$/tCO2eq]': capitalRecovery,
    'Variable O&M [$/tCO2eq]': variableOM,
    'Natural Gas Cost [$/tCO2]': naturalGas,
    'Fixed O&M [$/tCO2eq]': fixedOM,
    'Total Cost [$/tCO2]': totalCost,
  }

  return (
    <Box sx={{ my: [5] }}>
      <Grid columns={[1, 1, '200px 200px 1fr']} sx={{ pb: [2] }}>
        <Box>
          <Divider sx={{ mb: [3] }} />
          <Box>
            <Value>{capitalExpense}</Value>
            <Label units='$/tCO₂ ann. cap.'>Capital Exp</Label>
          </Box>
          <Box sx={{ mt: [3] }}>
            <Value>{WACC}</Value>
            <Label units='%'>WACC</Label>
          </Box>
          <Box sx={{ mt: [3] }}>
            <Value>{facilityLifetime}</Value>
            <Label units='years'>Facility Lifetime</Label>
          </Box>
        </Box>
        <Box>
          <Divider />
          <Box sx={{ textAlign: 'center', ml: [2], mt: [4] }}>
            <Donut results={results} />
          </Box>
        </Box>
        <Box>
          <Divider />
          <Text sx={{ color: 'purple', fontSize: [6], fontFamily: 'mono' }}>
            ${totalCost}
          </Text>
          <Text>
            Total costs
            <Text as='span' sx={{ color: 'secondary', ml: [2] }}>
              $/tCO₂
            </Text>
          </Text>
          <Box sx={{ mt: [4] }}>
            <LegendWithValues results={results} />
          </Box>
        </Box>
      </Grid>
      <Divider sx={{ mt: [0, 0, 3] }} />
      <Text
        sx={{
          color: 'secondary',
          my: [3],
        }}
      >
        FIGURE {figureNumber}{' '}
        <Text sx={{ display: 'inline-block', color: 'primary', mx: [1] }}>
          /
        </Text>{' '}
        Parameter and cost summary for energy configuration.
      </Text>
    </Box>
  )
}

function Value({ children }) {
  return (
    <Text
      sx={{
        fontFamily: 'mono',
        color: 'purple',
        fontSize: [4],
        pb: [1],
        borderStyle: 'solid',
        borderColor: 'primary',
        borderWidth: '0px',
        borderBottomWidth: '1px',
      }}
    >
      {children}
    </Text>
  )
}

function Label({ units, children }) {
  return (
    <Text
      sx={{
        fontFamily: 'body',
        color: 'text',
        fontSize: [1],
        pt: [1],
      }}
    >
      {children}
      <Text
        as='span'
        sx={{
          color: 'secondary',
          ml: [2],
        }}
      >
        {units}
      </Text>
    </Text>
  )
}

export default ParameterScenario
