import { Grid, Box, Text } from 'theme-ui'
import { alpha } from '@theme-ui/color'

const Circle = ({ opacity }) => {
  return (
    <Box
      sx={{
        width: '14px',
        height: '14px',
        mt: '2px',
        borderRadius: '7px',
        backgroundColor: alpha('purple', opacity),
      }}
    ></Box>
  )
}

const Label = ({ label }) => {
  return (
    <Box
      sx={{
        color: 'secondary',
        fontFamily: 'mono',
        letterSpacing: 'mono',
        textTransform: 'uppercase',
        fontSize: [1],
      }}
    >
      {label}
    </Box>
  )
}

const Value = ({ value }) => {
  return (
    <Box
      sx={{
        color: 'purple',
        fontFamily: 'mono',
        letterSpacing: 'mono',
      }}
    >
      <Text>${value.toFixed(0)}</Text>
    </Box>
  )
}

const Row = ({ children }) => {
  return (
    <Grid
      sx={{
        fontSize: [1],
        mb: [1],
      }}
      columns={['10px 140px 1fr']}
    >
      {children}
    </Grid>
  )
}

const Legend = ({ results }) => {
  return (
    <Box sx={{ mt: [3], mb: [3] }}>
      <Row>
        <Circle opacity={1} />
        <Label label={'Variable O&M'} />
        <Value value={results['Variable O&M [$/tCO2eq]']} />
      </Row>
      {results['Natural Gas Cost [$/tCO2]'] > 0 && (
        <Row>
          <Circle opacity={0.8} />
          <Label label={'Natural gas'} />
          <Value value={results['Natural Gas Cost [$/tCO2]']} />
        </Row>
      )}
      <Row>
        <Circle opacity={0.6} />
        <Label label={'Fixed O&M'} />
        <Value value={results['Fixed O&M [$/tCO2eq]']} />
      </Row>
      <Row>
        <Circle opacity={0.4} />
        <Label label={'Capital recovery'} />
        <Value value={results['Capital Recovery [$/tCO2eq]']} />
      </Row>
    </Box>
  )
}

export default Legend
