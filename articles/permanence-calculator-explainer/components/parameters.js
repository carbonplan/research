import { Box, Grid, Text, Divider } from 'theme-ui'

const Row = ({ children }) => {
  return (
    <Grid
      columns={[1, '275px 1fr', '275px 1fr']}
      sx={{
        borderStyle: 'solid',
        borderWidth: '0px',
        borderTopWidth: '1px',
        borderColor: 'muted',
        pt: [3],
        pb: ['22px', 3, 3],
      }}
    >
      {children}
    </Grid>
  )
}

const Top = ({ children }) => {
  return (
    <Box
      sx={{
        borderStyle: 'solid',
        borderWidth: '0px',
        borderTopWidth: '1px',
        borderColor: 'muted',
        pt: [3],
        pb: ['22px', 3, 3],
      }}
    >
      {children}
    </Box>
  )
}

const Parameters = ({}) => {
  const sx = {
    title: {
      fontFamily: 'body',
      letterSpacing: 'wide',
      textTransform: 'uppercase',
      fontSize: [2, 2, 3],
    },
    label: {
      fontFamily: 'body',
      letterSpacing: 'wide',
      textTransform: 'uppercase',
      fontSize: [2, 2, 3],
    },
    description: {
      fontFamily: 'faux',
      letterSpacing: 'faux',
      fontSize: [2],
    },
    number: {
      fontFamily: 'monospace',
      letterSpacing: 'monospace',
      fontSize: [5],
      color: 'pink',
    },
    units: {
      textTransform: 'initial',
      fontFamily: 'faux',
      letterSpacing: 'faux',
      fontSize: [2],
      color: 'secondary',
    },
    group: {
      borderStyle: 'solid',
      borderWidth: '0px',
      borderTopWidth: '1px',
      borderColor: 'muted',
      pt: [3],
      pb: [3],
    },
  }
  return (
    <Box sx={{ my: [4] }}>
      <Top>
        <Text sx={{ ...sx.title, ...{ color: 'pink' } }}>Parameters</Text>
      </Top>
      <Row>
        <Text sx={sx.label}>
          Project duration
          <Text sx={sx.units}>years</Text>
        </Text>
        <Text sx={sx.description}>
          How long the temporary carbon removal lasts before needing a renewal.
        </Text>
      </Row>
      <Row>
        <Text sx={sx.label}>
          Switching time
          <Text sx={sx.units}>years</Text>
        </Text>
        <Text>
          The year in which the decision-maker switches from temporary to
          permanent carbon removal. (Optional.)
        </Text>
      </Row>
      <Row>
        <Text sx={sx.label}>
          Discount rate
          <Text sx={sx.units}>%</Text>
        </Text>
        <Text>
          Used to discount future year costs and generate a net present value
          calculation.
        </Text>
      </Row>
      <Row>
        <Text sx={sx.label}>
          Project risk
          <Text sx={sx.units}>%/year</Text>
        </Text>
        <Text>
          The risk that a project fails and releases its carbon back to the
          atmosphere.
        </Text>
      </Row>
      <Row>
        <Text sx={sx.label}>
          Temporary project cost
          <Text sx={sx.units}>$/tCO₂</Text>
        </Text>
        <Text>
          Project costs set as constant or based on a custom price trajectory.
        </Text>
      </Row>
      <Row>
        <Text sx={sx.label}>
          Permanent project cost
          <Text sx={sx.units}>$/tCO₂</Text>
        </Text>
        <Text>
          Project costs set as constant or based on a custom price trajectory.
        </Text>
      </Row>
      <Divider sx={{ mt: [1], width: ['100%', '100%', '650px'] }} />
    </Box>
  )
}

export default Parameters
