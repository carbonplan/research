import { Box, Text, Grid, Container, Styled } from 'theme-ui'
import { Layout } from '@carbonplan/components'
import BackArrow from './back-arrow'
import contents from '../contents'

const prefix = 'https://images.carbonplan.org'

const Tool = ({ title, description, meta, children }) => {
  return (
    <Layout
      card={`${prefix}/social/${meta.card}.png`}
      metadata={false}
      description={meta.summary}
      title={meta.title.toLowerCase() + ' / research / carbonplan'}
      links={'local'}
    >
      <Box sx={{ mb: [6] }}>
        <BackArrow />
        <Grid columns={[1, 1, '700px 1fr']} gap={['100px']} sx={{ mt: [4] }}>
          <Box sx={{ mt: '-95px' }}>
            <span></span>
            {title}
            {description}
          </Box>
          <Box sx={{ display: ['none', 'none', 'initial'] }}>
            <Box sx={{ mt: '24px', maxWidth: '250px' }}>
              <Text
                sx={{
                  fontFamily: 'heading',
                  letterSpacing: 'smallcaps',
                  mb: [3],
                }}
              >
                / QUICK LOOK
              </Text>
              <Text sx={{ color: meta.color }}>{meta.summary}</Text>
            </Box>
          </Box>
        </Grid>
        {children}
      </Box>
    </Layout>
  )
}

export default Tool
