import { Layout } from '@carbonplan/components'
import Main from '../../components/main'
import { getCombinedContents } from '../../utils/contents'

const Index = ({ articles, commentary, count }) => {
  return (
    <Layout
      title={'Research – CarbonPlan'}
      description={
        'Articles, tools, and commentary on carbon removal and climate solutions.'
      }
      card={'https://images.carbonplan.org/social/research.png'}
      links={'local'}
      metadata={`COUNT: ${count}`}
      nav={'research'}
    >
      <Main articles={articles} commentary={commentary} />
    </Layout>
  )
}

export const getStaticProps = () => {
  const { articles, commentary, comments, publications, tools } =
    getCombinedContents()

  return {
    props: {
      articles,
      commentary,
      count:
        articles.length +
        commentary.length +
        comments.length +
        publications.length +
        tools.length,
    },
  }
}

export default Index
