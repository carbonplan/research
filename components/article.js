import { Box, Text, Grid, Container } from 'theme-ui'
import { Layout } from '@carbonplan/components'
import BackArrow from './back-arrow'

const prefix = 'https://images.carbonplan.org'

const Article = ({ children, meta }) => {
  return (
    <Layout
      card={`${prefix}/social/${meta.card}.png`}
      description={meta.summary}
      title={meta.title.toLowerCase() + ' / research / carbonplan'}
      links={'local'}
      metadata={'scroll'}
    >
      <Box
        sx={{
          backgroundColor: meta.color,
          height: ['auto', 'auto', meta.background ? '275px' : '100px'],
          position: ['relative', 'relative', 'absolute'],
          backgroundImage: [
            'none',
            'none',
            meta.background ? `url(${prefix}/${meta.background}.png)` : 'none',
          ],
          width: ['calc(100vw)'],
          left: [0],
          ml: [-3, -4, 0],
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
            color: ['#1b1e23', '#1b1e23', meta.invert ? '#1b1e23' : '#ebebec'],
          }}
        >
          <Container sx={{ px: [3, 4, 4] }}>
            <Grid columns={[1, 1, '165px 585px 1fr']} gap={['0px']}>
              <Text
                sx={{
                  fontFamily: 'mono',
                  letterSpacing: 'mono',
                  textTransform: 'uppercase',
                  fontSize: [2],
                }}
              >
                Article({meta.number})
              </Text>
              <Text
                sx={{
                  fontFamily: 'mono',
                  letterSpacing: 'mono',
                  textTransform: 'uppercase',
                  fontSize: [2],
                }}
              >
                by{' '}
                {meta.authors.map((author, ix) => (
                  <Text
                    key={author}
                    sx={{
                      display: 'inline-block',
                      mr: [2],
                      fontFamily: 'mono',
                      letterSpacing: 'mono',
                      fontSize: [2],
                    }}
                  >
                    {author.replace(/ /g, '\u00a0')}{' '}
                    {ix < meta.authors.length - 1 ? '+' : ''}
                  </Text>
                ))}
              </Text>
              <Text
                sx={{
                  fontFamily: 'mono',
                  letterSpacing: 'mono',
                  textTransform: 'uppercase',
                  fontSize: [2],
                }}
              >
                {meta.date}
              </Text>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Container
        sx={{ pt: [0, 0, meta.background ? '275px' : '100px'], mb: [5] }}
      >
        <BackArrow />
        <Grid columns={[1, 1, '650px 1fr']} gap={['100px']}>
          <Box sx={{ mt: '-65px' }}>{children}</Box>
          <Box sx={{ display: ['none', 'none', 'initial'] }}>
            <Box sx={{ mt: '55px', maxWidth: '250px' }}>
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
      </Container>
    </Layout>
  )
}

export default Article
