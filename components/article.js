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
          width: '1200px', 
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
    <Container sx={{ px: [4], mb: [5] }}>
      <Grid columns={[1, '650px 1fr', '650px 1fr']} gap={['100px']}>
        <Box>{children}</Box>
        <Box sx={{ display: ['none', 'none', 'initial']}}>
          <Box sx={{ mt: '150px', maxWidth: '250px' }}>
            <Text sx={{ fontFamily: 'heading', letterSpacing: 'wide', mb: [3] }}>
              / QUICK LOOK
            </Text>
            <Text sx={{ color: info.color }}>
              {meta.summary}
            </Text>
          </Box>
          {meta.quotes.map((quote) => (
            <Box key={quote.position} sx={{ mt: quote.position, maxWidth: '250px' }}>
            <Text sx={{ 
              fontFamily: 'mad', 
              fontSize: [5], 
              lineHeight: [1.125], 
              color: info.color 
            }}>
              {quote.text}
            </Text>
            </Box>
          ))}
        </Box>
      </Grid>
    </Container>
  </Layout>
}

export default Article