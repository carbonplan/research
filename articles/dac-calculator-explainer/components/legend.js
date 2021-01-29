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

const Row = ({ children }) => {
  return (
    <Grid
      sx={{
        fontSize: [1],
        mb: [1],
      }}
      columns={['10px 140px']}
    >
      {children}
    </Grid>
  )
}

const Legend = () => {
  return (
    <Box
      sx={{
        position: ['relative', 'relative', 'absolute'],
        bottom: '-4px',
        mt: [0],
        mb: [0, 0, 3],
      }}
    >
      <Row>
        <Circle opacity={1} />
        <Label label={'Variable O&M'} />
      </Row>
      <Row>
        <Circle opacity={0.8} />
        <Label label={'Natural gas'} />
      </Row>
      <Row>
        <Circle opacity={0.6} />
        <Label label={'Fixed O&M'} />
      </Row>
      <Row>
        <Circle opacity={0.4} />
        <Label label={'Capital recovery'} />
      </Row>
    </Box>
  )
}

export default Legend
