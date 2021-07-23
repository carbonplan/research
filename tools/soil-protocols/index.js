import { Box, Themed, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import Tool from '../../components/tool'
import Main from './components/main'

const Index = () => {
  const meta = {
    id: 'soil-protocols',
    title: 'Soil carbon protocols',
    color: 'orange',
    card: 'soil-protocols',
    quickLook: 'A comparison of protocols that credit soil carbon.',
  }

  const description = (
    <span>
      Several emerging standards and markets sell credits for soil carbon
      sequestration. We sytematically{' '}
      <Link href='/research/soil-protocols-explainer'>analyzed them</Link>. This
      interactive table lets you explore protocols, metrics, and our evaluation.
      Consider it a buyer's guide to soil carbon offsets.
    </span>
  )

  return (
    <Tool
      meta={meta}
      title={meta.title}
      description={description}
      contentWidth={[6, 8, 10, 10]}
      descriptionWidth={[6, 7, 7, 7]}
      quickLookStart={9}
    >
      <Main />
    </Tool>
  )
}

export default Index
