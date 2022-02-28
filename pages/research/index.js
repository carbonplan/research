import { Layout } from '@carbonplan/components'
import Main from '../../components/main'
import { default as articles } from '../../contents/articles'
import { default as comments } from '../../contents/comments'
import { default as tools } from '../../contents/tools'
import { default as publications } from '../../contents/publications'

const Index = () => {
  return (
    <Layout
      title={'Research – CarbonPlan'}
      description={
        'Articles, tools, and commentary on carbon removal and climate solutions.'
      }
      card={'https://images.carbonplan.org/social/research.png'}
      links={'local'}
      metadata={`COUNT: ${
        articles.length + comments.length + publications.length + tools.length
      }`}
      nav={'research'}
    >
      <Main contents={articles} />
    </Layout>
  )
}

export default Index
