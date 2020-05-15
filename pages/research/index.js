import Layout from '../../components/layout'
import { Box, Divider, Text, Heading, Badge, Image, Link, Grid, Container } from 'theme-ui'
import { default as NextLink } from 'next/link'
import data from '../../contents'
import { darken } from '@theme-ui/color'

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

  const { articles } = data

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
          <Box sx={{

          }}>
          {articles.map(({id, title, color, tags, authors, version, date}) => (
            <Box sx={{ 
              my: [4],
              pt: [4],
              pb: [2],
              borderStyle: 'solid', 
              borderColor: 'muted',
              borderWidth: '0px', 
              borderTopWidth: '1px'
            }} key={id}>
              <Grid columns={[1, '225px 1fr', '225px 1fr']}>
              <Box>
                <NextLink href={`/research/${id}`}><a><Box sx={{
                  display: 'inline-block',
                  width: '130px',
                  height: '130px',                  
                  ml: [0, 5, 5],
                  mt: '6px',
                  position: 'relative'
                }}>
                <Box sx={{
                  top: 0,
                  left: 0,
                  position: 'absolute',
                  display: 'inline-block',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%', 
                  borderStyle: 'solid',
                  borderColor: 'primary',
                  borderWidth: '1px',
                  backgroundColor: color
                }}>
                </Box>
                <Text sx={{ 
                  fontFamily: 'faux',
                  position: 'absolute',
                  top: '-23px',
                  left: '20px',
                  width: '100%',
                  height: '100%',
                  display: 'inline-block',
                  borderRadius: '50%', 
                  fontSize: '122px',
                  color: 'text',
                  zIndex: 1000,
                  transition: '0.25s',
                  opacity: 0,
                  '&:hover': {
                    opacity: 1
                  }
                }}>→</Text>
                </Box>
                </a>
                </NextLink>
              </Box>
              <Box>
                <Text sx={{ fontFamily: 'monospace', color: 'secondary', fontSize: [2] }}>
                    {date} <Text sx={{ display: 'inline-block', color: 'text'}}>/</Text> v{version}
                  </Text>
                <Heading sx={{ mb: ['2px'], mt: ['10px'], fontSize: [5] }}>
                  {title}
                </Heading>
                <Text sx={{ 
                  textTransform: 'uppercase', 
                  letterSpacing: 'mono', 
                  fontFamily: 'monospace', 
                  fontSize: [3],
                  mt: ['10px'] 
                }}>
                  by {authors.map((author) => <Text key={author} sx={{
                    display: 'inline-block',
                    mr: [2]
                  }}>{author}</Text>)}
                </Text>
                <Box sx={{ mt: ['10px'], fontFamily: 'monospace', letterSpacing: 'extra' }}>
                  {tags.map((tag) => <Box key={tag} sx={{ 
                    display: 'inline-block', 
                    mr: [3] 
                  }}><Badge key={tag} variant='primary' sx={{
                    cursor: 'default',
                    color: 'secondary',
                    borderColor: 'secondary'
                  }}>{tag}</Badge></Box>)}
                </Box>
              </Box>
              </Grid>
            </Box>
          ))}
          <Divider/>
          </Box>
          <Text sx={{ mt: [5], mb: [6, 0, 0], fontSize: [3] }}>
            More coming soon...
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Index