import { Box, Text, Grid, Container, Styled } from 'theme-ui'
import Layout from './layout'
import BackArrow from './article/back-arrow'
import contents from '../contents'

const Tool = ({ title, description, meta, children }) => {
  const info = contents[meta.id]

  return (
    <Layout
      shareCard={meta.id}
      shareDescription={meta.summary}
      shareTitle={info.title}
    >
      <Container sx={{ px: [3, 3, 4], mb: [5] }}>
        <BackArrow />
        <Grid columns={[1, 1, '700px 1fr']} gap={['100px']} sx={{ mt: [4] }}>
          <Box sx={{ mt: '-95px' }}>
            <span></span>
            {title}
            {description}
          </Box>
          <Box sx={{ display: ['none', 'none', 'initial'] }}>
            <Box sx={{ mt: '55px', maxWidth: '250px' }}>
              <Text
                sx={{ fontFamily: 'heading', letterSpacing: 'wide', mb: [3] }}
              >
                / QUICK LOOK
              </Text>
              <Text sx={{ color: info.color }}>{meta.summary}</Text>
            </Box>
          </Box>
        </Grid>
        {children}
      </Container>
    </Layout>
  )
}

export default Tool
