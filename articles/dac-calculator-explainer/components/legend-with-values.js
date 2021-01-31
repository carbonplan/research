import { Grid, Box, Text } from 'theme-ui'

const Circle = ({ opacity, disabled }) => {
  return (
    <Box
      sx={{
        width: '14px',
        height: '14px',
        mt: '2px',
        borderRadius: '7px',
        opacity: disabled ? 0.75 : opacity,
        backgroundColor: disabled ? 'secondary' : 'purple',
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

const Value = ({ value, disabled }) => {
  return (
    <Box
      sx={{
        color: disabled ? 'secondary' : 'purple',
        fontFamily: 'mono',
        letterSpacing: 'mono',
      }}
    >
      ${value}
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
  const disabled = results['Natural Gas Cost [$/tCO2]'] === 'N/A'

  return (
    <Box sx={{ mt: [2, 2, 3], mb: [2, 2, 3] }}>
      <Row>
        <Circle opacity={0.95} disabled={disabled} />
        <Label label={'Variable O&M'} />
        <Value value={results['Variable O&M [$/tCO2eq]']} disabled={disabled} />
      </Row>
      {(results['Natural Gas Cost [$/tCO2]'] > 0 || disabled) && (
        <Row>
          <Circle opacity={0.75} disabled={disabled} />
          <Label label={'Natural Gas'} />
          <Value
            value={results['Natural Gas Cost [$/tCO2]']}
            disabled={disabled}
          />
        </Row>
      )}
      <Row>
        <Circle opacity={0.55} disabled={disabled} />
        <Label label={'Fixed O&M'} />
        <Value value={results['Fixed O&M [$/tCO2eq]']} disabled={disabled} />
      </Row>
      <Row>
        <Circle opacity={0.35} disabled={disabled} />
        <Label label={'Capital Recovery'} />
        <Value
          value={results['Capital Recovery [$/tCO2eq]']}
          disabled={disabled}
        />
      </Row>
    </Box>
  )
}

export default Legend
