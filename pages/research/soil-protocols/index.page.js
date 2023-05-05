import { Link } from '@carbonplan/components'
import { Tool } from '@carbonplan/layouts'
import Main from './components/main'

const Index = () => {
  const meta = {
    id: 'soil-protocols',
    title: 'Soil carbon protocols',
    color: 'orange',
    card: 'soil-protocols',
    quickLook: 'A comparison of protocols that credit soil carbon',
    path: '/research/soil-protocols',
  }

  const description = (
    <span>
      Several emerging standards and markets sell credits for soil carbon
      sequestration. This interactive table lets you explore protocols, metrics,
      and our evaluation. Read more about our{' '}
      <Link href='/research/soil-protocols-explainer'>initial analysis</Link>{' '}
      and <Link href='/blog/soil-protocols-added'>subsequent additions</Link>.
      This tool was updated as of October 2021.
    </span>
  )

  return (
    <Tool
      meta={meta}
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
