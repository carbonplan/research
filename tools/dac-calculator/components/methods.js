import { Box, Heading, Text, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'

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
        This calculator computes the cost per net ton of CO₂ captured by a
        hypothetical DAC facility coupled to different energy sources. The model
        estimates the levelized cost of energy, capital expenses, and operation
        and maintenance costs. The entire model is implemented natively in
        Javascript, and a Python version is under development. The model is
        based directly on a{' '}
        <Link
          href={
            'https://www.frontiersin.org/articles/10.3389/fclim.2020.618644/full'
          }
        >
          paper
        </Link>{' '}
        from McQueen et al. (2021). Read our{' '}
        <NextLink href={'/research/dac-calculator-explainer'} passHref={true}>
          <Link>article</Link>
        </NextLink>{' '}
        for more information.
      </Text>
    </Box>
  )
}

export default Methods
