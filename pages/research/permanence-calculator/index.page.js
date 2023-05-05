import { Link } from '@carbonplan/components'
import { Tool } from '@carbonplan/layouts'
import Calculator from './components/calculator'

const Index = () => {
  const meta = {
    id: 'permanence-calculator',
    title: 'Permanence calculator',
    color: 'pink',
    card: 'permanence-calculator-explainer',
    quickLook:
      'How to compare the long-term cost of temporary and permanent carbon removal',
    path: '/research/permanence-calculator',
  }

  const description = (
    <span>
      The effects of CO₂ emissions last for hundreds to thousands of years. The
      permanence of CO₂ removal differs across methods, ranging from temporary
      (e.g. forests, soil) to effectively permanent (e.g. mineralization,
      geological). This calculator estimates the upfront costs needed to make a
      temporary carbon removal strategy permanent over time. Read more in our{' '}
      <Link href={'/research/permanence-calculator-explainer'}>article</Link>.
    </span>
  )

  return (
    <Tool meta={meta} description={description}>
      <Calculator></Calculator>
    </Tool>
  )
}

export default Index
