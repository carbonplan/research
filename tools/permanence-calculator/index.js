import { Box, Styled, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import Tool from '../../components/tool'
import Calculator from './components/calculator'

const Index = () => {
  const meta = {
    id: 'permanence-calculator',
    title: 'Permanence calculator',
    summary:
      'How to compare the long-term cost of temporary and permanent carbon removal.',
    quotes: [],
  }

  const title = <Styled.h1>Permanence calculator</Styled.h1>

  const description = (
    <Box sx={{ maxWidth: '700px', mb: [0] }}>
      <Styled.p>
        The effects of CO₂ emissions last for hundreds to thousands of years.
        The permanence of CO₂ removal differs across methods, ranging from
        temporary (e.g. forests, soil) to effectively permanent (e.g.
        mineralization, geological). This calculator estimates the upfront costs
        needed to make a temporary carbon removal strategy permanent over time.
        Read more in our{' '}
        <NextLink href={'/research/permanence-calculator-explainer'} passHref={true}>
          <Link>article</Link>
        </NextLink>
        .
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
