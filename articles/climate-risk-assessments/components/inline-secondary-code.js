import { Box } from 'theme-ui'

const InlineSecondaryCode = ({ children }) => {
  return (
    <Box as='span' sx={{ fontFamily: 'mono', letterSpacing: 'mono' }}>
      {children}
    </Box>
  )
}

export default InlineSecondaryCode
