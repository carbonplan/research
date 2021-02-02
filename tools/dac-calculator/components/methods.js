import { Box, Heading, Text, Link, Styled } from 'theme-ui'
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
      <Styled.p>
        This calculator computes the{' '}
        <Link href='https://cdrprimer.org/read/chapter-4#sec-4-3'>
          net removed cost
        </Link>{' '}
        ($/tCO₂eq) of carbon removal for a hypothetical DAC facility coupled to
        one of three different energy sources: natural gas combined with carbon
        capture and storage (NGCC), wind, and solar. The model estimates the
        levelized cost of energy, capital expenses, and operation and
        maintenance costs.
      </Styled.p>
      <Styled.p>
        For natural gas, the model assumes that combustion for electricity
        production is coupled with carbon capture at 90% capture efficiency. The
        remaining 10% of emissions from electricity production are considered
        net emissions and factored into net removed cost using a GWP100 of 32.
        Additionally, the model assumes that all the natural gas combusted for
        thermal energy is co-captured by the process, resulting in no emissions
        from combustion. A leakge rate parameter accounts for natural gas
        leakage, which has been reported as high as 3.7% in the Permian Basin
        region of the United States.
      </Styled.p>
      <Styled.p>
        Given the definition of net removed cost, it is possible to create
        parameter scenarios with NGCC that do not achieve net carbon removal,
        because emissions are too large. We show this case with gray bars in the
        calculator.
      </Styled.p>
      <Styled.p>
        The entire model is implemented natively in JavaScript and{' '}
        <Link href='http://github.com/carbonplan/research/tools/dac-calculator'>
          available on Github
        </Link>
        , and a Python version is under development. The model is based directly
        on a{' '}
        <Link
          href={
            'https://www.frontiersin.org/articles/10.3389/fclim.2020.618644/full'
          }
        >
          paper
        </Link>{' '}
        by McQueen et al. (2021). There may be small differences (± $10) between
        the model outputs above and the results in the paper due to
        implementation differences.
      </Styled.p>
      <Styled.p>
        Read our{' '}
        <NextLink href={'/research/dac-calculator-explainer'} passHref={true}>
          <Link>article</Link>
        </NextLink>{' '}
        for more information.
      </Styled.p>
    </Box>
  )
}

export default Methods
