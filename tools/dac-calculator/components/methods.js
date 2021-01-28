import { Box, Heading, Text } from 'theme-ui'

const Methods = () => {
  return (
    <Box sx={{ mt: [4], mb: [0, 0, 5] }}>
      <Text
        sx={{
          fontSize: [4],
          mt: [4],
          mb: [3],
          fontFamily: 'heading',
          letterSpacing: 'heading',
        }}
      >
        Brief Methods
      </Text>
      <Text sx={{ fontSize: [3] }}>
        This calculator computes the cost per ton of CO₂ captured by
        a hypothetical DAC facility. It does this by estimating the levelized
        cost of energy, capital expenses, and operation and maintenance costs.
        This initial version of is based off the excellent work of Noah McQueen.
        Read more about the Noah's work in this paper.
      </Text>
    </Box>
  )
}

export default Methods
