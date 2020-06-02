import { Box, Grid, Text, Heading, Badge } from 'theme-ui'

const Entry =({ info }) => {
  const { id, title, color, tags, authors, version, date, icon } = info

  return <Box sx={{
    cursor: 'pointer',
    '&:hover > #box > #grid > #box2 > #container > #background': {
      opacity: 0.5
    },
    '&:hover > #box > #grid > #box2 > #container > #arrow': {
      opacity: 1
    }
  }}>
    <Box id='box' sx={{ 
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
            width: '140px',
            height: '140px',                  
            ml: [0, 5, 5],
            mt: '-2px',
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
            backgroundImage: [`url("https://carbonplan-assets.s3.amazonaws.com/images/${icon}")`],
          }}>
          </Box>
          <Text id='arrow' sx={{ 
            fontFamily: 'faux',
            position: 'absolute',
            top: '-18px',
            left: '26px',
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
            by {authors.map((author, ix) => <Text key={author} sx={{
              display: 'inline-block',
              mr: [2]
            }}>{author} {ix < (info.authors.length - 1) ? '+' : ''}</Text>)}
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
  </Box>
}

export default Entry