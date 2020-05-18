/** @jsx jsx */
import Layout from '../../components/layout'
import { jsx, Box, Divider, Text, Heading, Badge, Image, Link, Grid, Container } from 'theme-ui'
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
            <NextLink key={id} href={`/research/${id}`}><a sx={{
              cursor: 'pointer',
              '&:hover > #box > #grid > #box2 > #container > #background': {
                opacity: 0.5
              },
              '&:hover > #box > #grid > #box2 > #container > #arrow': {
                opacity: 1
              }
            }}>
            <Box id='box' sx={{ 
              mt: [4],
              pt: [4],
              pb: [4],
              borderStyle: 'solid', 
              borderColor: 'muted',
              borderWidth: '0px', 
              borderTopWidth: '1px',
              color: 'text'
            }} key={id}>
              <Grid id='grid' columns={[1, '225px 1fr', '225px 1fr']}>
              <Box id='box2' sx={{
                
              }}>
                <Box id='container' sx={{
                  display: 'inline-block',
                  width: '130px',
                  height: '130px',                  
                  ml: [0, 5, 5],
                  mt: '6px',
                  position: 'relative',
                  borderRadius: '50%', 
                  borderStyle: 'solid',
                  borderColor: 'primary',
                  borderWidth: '1px'
                }}>
                <Box id='background' sx={{
                  top: 0,
                  left: 0,
                  position: 'absolute',
                  display: 'inline-block',
                  borderRadius: '50%', 
                  width: '100%',
                  height: '100%',
                  backgroundColor: color,
                  transition: '0.25s',
                  opacity: 1,
                  backgroundImage: ['none','none','url("https://carbonplan-assets.s3.amazonaws.com/images/road-small.png")'],
                }}>
                </Box>
                <Text id='arrow' sx={{ 
                  fontFamily: 'faux',
                  position: 'absolute',
                  top: '-23px',
                  left: '23px',
                  width: '100%',
                  height: '100%',
                  display: 'inline-block',
                  borderRadius: '50%', 
                  fontSize: '122px',
                  color: 'text',
                  zIndex: 1000,
                  transition: '0.25s',
                  opacity: 0
                }}>→</Text>
                </Box>
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
                  letterSpacing: 'faux', 
                  fontFamily: 'faux', 
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
                    pointerEvents: 'none',
                    cursor: 'default',
                    color: 'secondary',
                    borderColor: 'secondary'
                  }}>{tag}</Badge></Box>)}
                </Box>
              </Box>
              </Grid>
            </Box>
            </a>
            </NextLink>
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