import { Box, Divider, Grid, Text } from 'theme-ui'
import Donut from './donut'
import LegendWithValues from './legend-with-values'

const ParameterScenario = ({
  energySource,
  capEx,
  electricReq,
  thermalReq,
  leakage,
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
    <Box sx={{ mt: [5], mb: [3], maxWidth: '650px' }}>
      <Grid
        gap={[0, 0, '32px']}
        columns={[1, 1, '200px 160px 1fr']}
        sx={{ pb: [2] }}
      >
        <Box>
          <Divider sx={{ mb: [3] }} />
          <Box>
            <Value>{capEx}</Value>
            <Label units='$/tCO₂ ann. cap.'>Cap Exp</Label>
          </Box>
          <Box sx={{ mt: [3] }}>
            <Value>{electricReq}</Value>
            <Label units='GJ/tCO₂'>Electric Req</Label>
          </Box>
          <Box sx={{ mt: [3], mb: leakage ? [0, 0, 0] : [2, 2, 0] }}>
            <Value>{thermalReq}</Value>
            <Label units='GJ/tCO₂'>Thermal Req</Label>
          </Box>
          {leakage > 0 && (
            <Box sx={{ mt: [3], mb: [2, 2, 0] }}>
              <Value>{leakage}</Value>
              <Label units='%'>Leakage Rate</Label>
            </Box>
          )}
        </Box>
        <Box>
          <Divider />
          <Box
            sx={{
              textAlign: ['left', 'left', 'center'],
              mt: ['13px', '13px', 4],
            }}
          >
            <Donut results={results} initWidth={150} />
          </Box>
        </Box>
        <Box>
          <Divider />
          <Text
            sx={{
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              fontSize: [3],
              mt: [3],
              textTransform: 'uppercase',
            }}
          >
            {energySource}
          </Text>
          <Text
            sx={{
              color: totalCost === 'N/A' ? 'secondary' : 'purple',
              fontSize: [6],
              fontFamily: 'mono',
            }}
          >
            ${totalCost}
          </Text>
          <Text
            sx={{
              textAlign: 'left',
              color: 'text',
              fontSize: [2],
            }}
          >
            {totalCost === 'N/A' ? 'No Net Removal' : 'Net Removed Cost'}
            {!(totalCost === 'N/A') && (
              <Text
                sx={{
                  ml: [2],
                  display: 'inline-block',
                  color: 'secondary',
                }}
              >
                $/tCO₂eq
              </Text>
            )}
          </Text>
          <Box
            sx={{
              mt: leakage ? [0, 0, '59px'] : [0, 0, '-2px'],
            }}
          >
            <LegendWithValues results={results} />
          </Box>
        </Box>
      </Grid>
      <Divider sx={{ mt: [0, 0, '-4px'] }} />
    </Box>
  )
}

function Value({ children }) {
  return (
    <Text
      sx={{
        fontFamily: 'mono',
        color: 'purple',
        fontSize: [3],
        pb: [1],
        borderStyle: 'solid',
        borderColor: 'muted',
        borderWidth: '0px',
        borderBottomWidth: '1px',
        maxWidth: '200px',
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
