import { Box } from 'theme-ui'

const FigureCaption = ({ number, children }) => {
  return (
    <Box
      as='figcaption'
      sx={{
        color: 'secondary',
        mt: [3, 3, 3, 4],
        mb: [6, 6, 6, 7],
        fontSize: [2, 2, 2, 3],
      }}
    >
      <Box sx={{ letterSpacing: 'smallcaps', display: 'inline-block' }}>
        FIGURE {number}
      </Box>{' '}
      <Box sx={{ display: 'inline-block', mx: [1] }}>/</Box>
      {children}
    </Box>
  )
}

export default FigureCaption
