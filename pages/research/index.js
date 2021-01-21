import { Layout } from '@carbonplan/components'
import Main from '../../components/main'

const Index = () => {
  return (
    <Layout
      title={'carbonplan / research'}
      description={
        'Articles, tools, and commentary on carbon removal and climate solutions.'
      }
      card={'research'}
      footer={false}
      links={'local'}
      metadata={'POSTS: 8'}
    >
      <Main />
    </Layout>
  )
}

export default Index
