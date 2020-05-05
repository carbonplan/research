import Layout from '../components/layout'
import { Box, Text, Heading, Link, Grid, Container } from 'theme-ui'
import { default as NextLink } from 'next/link'

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

function Index ({ articles }) {


  console.log(articles)

  return (
    <Layout>
      <Container sx={{ px: [4] }}>
        <Box sx={{ maxWidth: '700px'}}>
          <Heading sx={{ my: [5], fontSize: [7] }}>
            Research
          </Heading>
          {articles.map(({id, title, authors, date}) => (
            <Box sx={{ my: [3] }} key={id}>
              <Heading sx={{ my: [1], fontSize: [5] }}>
                {title}
              </Heading>
              <Text>
                by {authors}
              </Text>
              <Text>
                {date}
              </Text>
              <NextLink href={`/${id}`}>
                <Link>link</Link>
              </NextLink>
            </Box>
          ))}
        </Box>
      </Container>
    </Layout>
  )
}


export async function getStaticProps() {
  const data = await import('../contents')

  return {
    props: {
      articles: data.default
    }
  }
}

export default Index