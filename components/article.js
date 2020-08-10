import { Box, Text, Grid, Container } from 'theme-ui'
import Layout from './layout'
import BackArrow from './article/back-arrow'
import contents from '../contents'

const Article = ({ children, meta }) => {
  const info = contents[meta.id]

  return (
    <Layout
      shareCard={meta.id}
      shareDescription={meta.summary}
      shareTitle={info.title}
    >
      <Box
        sx={{
          backgroundColor: info.color,
          height: ['auto', 'auto', info.background ? '275px' : '100px'],
          position: 'relative',
          backgroundImage: [
            'none',
            'none',
            info.background
              ? `url(https://carbonplan-assets.s3.amazonaws.com/images/${info.background})`
              : 'none',
          ],
          backgroundSize: 'cover',
          backgroundPosition: '50% 70%',
          py: [3, 3, 0],
        }}
      >
        <Box
          sx={{
            position: ['initial', 'initial', 'absolute'],
            bottom: 0,
            pb: [0, 0, 3],
            width: '100%',
            color: ['#1b1e23', '#1b1e23', info.invert ? '#ebebec' : '#1b1e23'],
          }}
        >
          <Container sx={{ px: [4] }}>
            <Grid columns={[1, '15% 35% 50%', '15% 35% 50%']} gap={['0px']}>
              <Text
                sx={{
                  fontFamily: 'monospace',
                  letterSpacing: 'monospace',
                  textTransform: 'uppercase',
                }}
              >
                Article({info.number})
              </Text>
              <Text
                sx={{
                  fontFamily: 'monospace',
                  letterSpacing: 'monospace',
                  textTransform: 'uppercase',
                }}
              >
                by{' '}
                {info.authors.map((author, ix) => (
                  <Text
                    key={author}
                    sx={{
                      display: 'inline-block',
                      mr: [2],
                    }}
                  >
                    {author} {ix < info.authors.length - 1 ? '+' : ''}
                  </Text>
                ))}
              </Text>
              <Text
                sx={{
                  fontFamily: 'monospace',
                  letterSpacing: 'monospace',
                  textTransform: 'uppercase',
                }}
              >
                {info.date}
              </Text>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Container sx={{ px: [4], mb: [5] }}>
        <BackArrow />
        <Grid columns={[1, 1, '650px 1fr']} gap={['100px']}>
          <Box sx={{ mt: '-65px' }}>{children}</Box>
          <Box sx={{ display: ['none', 'none', 'initial'] }}>
            <Box sx={{ mt: '55px', maxWidth: '250px' }}>
              <Text
                sx={{ fontFamily: 'heading', letterSpacing: 'wide', mb: [3] }}
              >
                / QUICK LOOK
              </Text>
              <Text sx={{ color: info.color }}>{meta.summary}</Text>
            </Box>
            {meta.quotes.map((quote) => (
              <Box
                key={quote.position}
                sx={{
                  position: 'absolute',
                  top: quote.position,
                  maxWidth: '250px',
                }}
              >
                <Text
                  sx={{
                    fontFamily: 'heading',
                    fontSize: [5],
                    lineHeight: 'heading',
                    color: info.color,
                  }}
                >
                  {quote.text}
                </Text>
              </Box>
            ))}
          </Box>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Article
