import { Grid, Box, Text } from 'theme-ui'

const Circle = ({ opacity, value }) => {
  return (
    <Box
      sx={{
        width: '14px',
        height: '14px',
        mt: '2px',
        borderRadius: '7px',
        opacity: value < 0 ? 0.65 : opacity,
        backgroundColor: value < 0 ? 'secondary' : 'purple',
      }}
    ></Box>
  )
}

const Label = ({ label }) => {
  return (
    <Box
      sx={{
        color: 'secondary',
        fontFamily: 'body',
        letterSpacing: 'body',
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
        color: value < 0 ? 'secondary' : 'purple',
        fontFamily: 'mono',
        letterSpacing: 'mono',
      }}
    >
      ${value < 0 ? 'N/A' : value.toFixed(0)}
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
      columns={['10px 125px 1fr']}
    >
      {children}
    </Grid>
  )
}

const Legend = ({ results }) => {
  return (
    <Box sx={{ mt: [3], mb: [3] }}>
      <Row>
        <Circle
          opacity={0.95}
          value={results['Total Cost [$/tCO2 Net Removed]']}
        />
        <Label label={'Variable O&M'} />
        <Value value={results['Variable O&M [$/tCO2eq Net Removed]']} />
      </Row>
      {results['Natural Gas Cost [$/tCO2]'] > 0 && (
        <Row>
          <Circle
            opacity={0.75}
            value={results['Total Cost [$/tCO2 Net Removed]']}
          />
          <Label label={'Natural Gas'} />
          <Value value={results['Natural Gas Cost [$/tCO2 Net Removed]']} />
        </Row>
      )}
      <Row>
        <Circle
          opacity={0.55}
          value={results['Total Cost [$/tCO2 Net Removed]']}
        />
        <Label label={'Fixed O&M'} />
        <Value value={results['Fixed O&M [$/tCO2eq Net Removed]']} />
      </Row>
      <Row>
        <Circle
          opacity={0.35}
          value={results['Total Cost [$/tCO2 Net Removed]']}
        />
        <Label label={'Capital Recovery'} />
        <Value value={results['Capital Recovery [$/tCO2eq Net Removed]']} />
      </Row>
    </Box>
  )
}

export default Legend
