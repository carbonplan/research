import { Box, Link } from 'theme-ui'
import { Links } from '@carbonplan/components'
import Tool from '../../components/tool'
import Calculator from './components/calculator'

const { InternalLink } = Links

const Index = () => {
  const meta = {
    id: 'dac-calculator',
    title: 'DAC cost calculator',
    color: 'purple',
    card: 'dac-calculator',
    summary:
      'How the cost of direct air capture varies under different energy scenarios.',
  }

  const title = 'DAC cost calculator'

  const description = (
    <span>
      The cost of direct air capture (DAC) depends on several factors. Our
      calculator combines key parameters and computes the cost of net removal.
      Explore the tool, read our{' '}
      <InternalLink href={'/research/dac-calculator-explainer'}>
        article
      </InternalLink>
      , and read the{' '}
      <Link
        href={
          'https://www.frontiersin.org/articles/10.3389/fclim.2020.618644/full'
        }
      >
        paper
      </Link>{' '}
      this work is based on.
    </span>
  )

  return (
    <Tool meta={meta} title={title} description={description}>
      <Calculator></Calculator>
    </Tool>
  )
}

export default Index
