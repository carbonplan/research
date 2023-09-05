import { Box } from 'theme-ui'

const Small = ({ children }) => {
  return (
    <Box
      sx={{
        fontSize: [2, 2, 2, 3],
        lineHeight: 'body',
        fontFamily: 'body',
        fontWeight: 'body',
        letterSpacing: 'body',
        my: ['1em'],
      }}
    >
      {children}
    </Box>
  )
}

export default Small
