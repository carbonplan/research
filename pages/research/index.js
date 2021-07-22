import { useState } from 'react'
import { Layout, Guide } from '@carbonplan/components'
import Main from '../../components/main'
import { getAllContentData } from '../../lib/api'

const Index = ({ contents }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Layout
      title={'research / carbonplan'}
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

export async function getStaticProps() {
  const contents = await getAllContentData([
    'title',
    'color',
    'tags',
    'date',
    'icon',
    'extendedSummary',
    'links',
  ])

  return {
    props: { contents },
  }
}

export default Index
