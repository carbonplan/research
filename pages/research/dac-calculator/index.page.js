import { Box } from 'theme-ui'
import { Link } from '@carbonplan/components'
import { Tool } from '@carbonplan/layouts'
import Calculator from './components/calculator'

const Index = () => {
  const meta = {
    id: 'dac-calculator',
    title: 'DAC cost calculator',
    color: 'purple',
    card: 'dac-calculator',
    quickLook:
      'How the cost of direct air capture varies under different energy scenarios',
    path: '/research/dac-calculator',
  }

  const description = (
    <span>
      The cost of direct air capture (DAC) depends on several factors. Our
      calculator combines key parameters and computes the cost of net removal.
      Explore the tool, read our{' '}
      <Link href={'/research/dac-calculator-explainer'}>article</Link>, and read
      the{' '}
      <Link
        href={
          'https://www.frontiersin.org/articles/10.3389/fclim.2020.618644/full'
        }
        tracking
      >
        paper
      </Link>{' '}
      this work is based on.
    </span>
  )

  return (
    <Tool meta={meta} description={description}>
      <Calculator></Calculator>
    </Tool>
  )
}

export default Index
