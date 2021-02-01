import { Box, Styled, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import Tool from '../../components/tool'
import Calculator from './components/calculator'

const Index = () => {
  const meta = {
    id: 'dac-calculator',
    title: 'DAC cost calculator',
    color: 'purple',
    card: 'dac-calculator',
    summary:
      'How the cost of direct air capture varies under different energy scenarios.',
  }

  const title = <Styled.h1>DAC cost calculator</Styled.h1>

  const description = (
    <Box sx={{ maxWidth: '700px', mb: [0, 0, 4] }}>
      <Styled.p>
        The cost of direct air capture (DAC) depends on several factors. Our
        interactive calculator combines key parameters and computes the cost of
        net removal. Explore the tool, read our{' '}
        <NextLink href={'/research/dac-calculator-explainer'} passHref={true}>
          <Link>article</Link>
        </NextLink>
        , and read the{' '}
        <Link
          href={
            'https://www.frontiersin.org/articles/10.3389/fclim.2020.618644/full'
          }
        >
          paper
        </Link>{' '}
        this work is based on.
      </Styled.p>
    </Box>
  )

  return (
    <Tool meta={meta} title={title} description={description}>
      <Calculator></Calculator>
    </Tool>
  )
}

export default Index
