import { Grid } from 'theme-ui'
import { Layout, Tag } from '@carbonplan/components'
import Sidebar from '../../components/sidebar'
import List from '../../components/list'

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
      <Grid columns={[1, 1, 'minmax(350px, 30%) auto']} gap={['0px']}>
        <Sidebar />
        <List />
      </Grid>
    </Layout>
  )
}

export default Index
