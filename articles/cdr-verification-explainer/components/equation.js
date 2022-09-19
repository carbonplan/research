import { Box, Flex } from 'theme-ui'
import { Colors } from '@carbonplan/components'

const { Secondary } = Colors
const sx = {
  term: { textTransform: 'uppercase' },
  units: {
    color: 'secondary',
    textTransform: 'none',
    display: 'inline',
    position: 'relative',
    top: 1,
    mx: '2px',
    fontSize: '65%',
  },
}

const Equation = () => {
  return (
    <Flex
      sx={{
        fontFamily: 'mono',
        letterSpacing: 'mono',
        textTransform: 'uppercase',
        fontSize: [1, 1, 1, 3],
        backgroundColor: 'hinted',
        p: 4,
        my: [4],
      }}
    >
      <Box sx={{ flexShrink: 0 }}>
        Removal cost<Box sx={sx.units}>$/tCO₂</Box>
      </Box>
      <Box>
        <Secondary>=</Secondary>
      </Box>
      <Box sx={{ ml: 3 }}>
        <Secondary>(</Secondary>Levelized operation cost
        <Box sx={sx.units}>$</Box> <Secondary>+</Secondary> MRV cost
        <Box sx={sx.units}>$</Box>
        <Secondary>)</Secondary> <Secondary>/</Secondary>{' '}
        <Box>
          <Secondary>(</Secondary>Net removal
          <Box sx={sx.units}>tCO₂</Box> <Secondary>*</Secondary> Uncertainty
          discount
          <Box sx={sx.units}>%</Box>
          <Secondary>)</Secondary>
        </Box>
      </Box>
    </Flex>
  )
}

export default Equation
