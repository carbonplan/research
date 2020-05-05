import { Box, Text, Grid, Container } from 'theme-ui'
import Layout from './layout'
import Contents from '../contents'

const Article = ({ children, meta }) => {

  const info = Contents.filter(({id}) => id === meta.id)[0]

  return <Layout>
    <Box sx={{ backgroundColor: info.color, height: '125px', position: 'relative' }}>
      <Container sx={{ px: [4] }}>
        <Box sx={{ 
          position: 'absolute', 
          bottom: 0, 
          width: '100%', 
          pb: [3],
          color: 'background'
        }}>
          <Grid columns={[1, '15% 35% 50%', '15% 35% 50%']} gap={['0px']}>
            <Text sx={{ fontFamily: 'monospace', textTransform: 'uppercase' }}>
              Article({ info.number })
            </Text>
            <Text sx={{ fontFamily: 'monospace', textTransform: 'uppercase' }}>
              by { info.authors }
            </Text>
            <Text sx={{ fontFamily: 'monospace', textTransform: 'uppercase' }}>
              { info.date }
            </Text>
          </Grid>
        </Box>
      </Container>
    </Box>
    <Container sx={{ px: [4] }}>
      <Box sx={{ maxWidth: '700px' }}>
        {children}
      </Box>
    </Container>
  </Layout>
}

export default Article