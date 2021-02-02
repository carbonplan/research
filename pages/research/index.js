import { Layout } from '@carbonplan/components'
import Main from '../../components/main'

const Index = () => {
  return (
    <Layout
      title={'research / carbonplan'}
      description={
        'Articles, tools, and commentary on carbon removal and climate solutions.'
      }
      card={'https://images.carbonplan.org/social/research.png'}
      footer={false}
      links={'local'}
      metadata={'POSTS: 9'}
    >
      <Main />
    </Layout>
  )
}

export default Index
