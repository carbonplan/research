import { useState } from 'react'
import { Layout, Guide } from '@carbonplan/components'
import Main from '../../components/main'

const Index = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Layout
      title={'research / carbonplan'}
      description={
        'Articles, tools, and commentary on carbon removal and climate solutions.'
      }
      card={'https://images.carbonplan.org/social/research.png'}
      links={'local'}
      metadata={'POSTS: 11'}
      nav={'research'}
      settings={{ value: expanded, onClick: () => setExpanded(!expanded) }}
    >
      <Guide />
      <Main expanded={expanded} />
    </Layout>
  )
}

export default Index
