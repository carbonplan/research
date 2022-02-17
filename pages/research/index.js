import { useState } from 'react'
import { Layout } from '@carbonplan/components'
import Main from '../../components/main'
import contents from '../../contents/articles'

const Index = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Layout
      title={'Research – CarbonPlan'}
      description={
        'Articles, tools, and commentary on carbon removal and climate solutions.'
      }
      card={'https://images.carbonplan.org/social/research.png'}
      links={'local'}
      metadata={`COUNT: ${contents.length}`}
      nav={'research'}
      settings={{ value: expanded, onClick: () => setExpanded(!expanded) }}
    >
      <Main expanded={expanded} contents={contents} />
    </Layout>
  )
}

export default Index
