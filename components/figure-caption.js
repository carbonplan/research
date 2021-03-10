import { Box } from 'theme-ui'

const FigureCaption = ({ number, children }) => {
  return (
    <Box
      sx={{
        color: 'secondary',
        mt: [3],
        mb: [5],
      }}
    >
      <Box sx={{ letterSpacing: 'smallcaps', display: 'inline-block' }}>
        FIGURE {number}
      </Box>{' '}
      <Box sx={{ display: 'inline-block', mx: [1] }}>/</Box> {children}
    </Box>
  )
}

export default FigureCaption
