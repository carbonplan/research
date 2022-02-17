import { useState } from 'react'
import { Layout } from '@carbonplan/components'
import Main from '../../components/main'
import contents from '../../contents/articles'

const Index = () => {
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
    >
      <Main contents={contents} />
    </Layout>
  )
}

export default Index
