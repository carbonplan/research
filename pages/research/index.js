import { Layout } from '@carbonplan/components'
import Contents from '../../components/contents'

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
    >
      <Contents />
    </Layout>
  )
}

export default Index
