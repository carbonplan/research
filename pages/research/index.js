/** @jsx jsx */
import Layout from '../../components/layout'
import Entry from '../../components/entry'
import { jsx, Box, Divider, Text, Heading, Badge, Image, Link, Grid, Container } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { darken } from '@theme-ui/color'
import contents from '../../contents'

const link = {
  width: 'fit-content',
  fontSize: [4],
  borderStyle: 'solid',
  borderColor: 'background',
  borderWidth: '0px',
  borderBottomWidth: '1px',
  display: 'block',
  '&:hover': {
    borderColor: 'primary'
  }
}

function Index () {

  return (
    <Layout hideFooter={true}>
      <Container sx={{ px: [4] }}>
        <Box>
          <Heading sx={{ my: [4, 5, 5], fontSize: [6, 7, 7] }}>
            Research
          </Heading>
          <Text sx={{ maxWidth: '700px', fontSize: [3] }}>
            A collection of datasets, models, interactive articles, and commentary
            on carbon removal and climate solutions by us and our collaborators.
          </Text>
          <Box sx={{ mt: [4] }}>
          <NextLink key='soil-carbon-comment' href='/research/soil-carbon-comment'>
            <a>
              <Entry info={contents['soil-carbon-comment']}></Entry>
            </a>
          </NextLink>
          <NextLink key='stripe-reports-insights' href='/research/stripe-reports-insights'>
            <a>
              <Entry info={contents['stripe-reports-insights']}></Entry>
            </a>
          </NextLink>
          </Box>
          <Divider sx={{ mt: [0] }}/>
          <Text sx={{ mt: [5], mb: [6, 0, 0], fontSize: [3] }}>
            More coming soon...
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Index