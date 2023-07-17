import { Box } from 'theme-ui'

const InlineSecondaryCode = ({ children }) => {
  return (
    <Box
      as='span'
      sx={{
        pb: ['3px'],
        pt: ['1px'],
        mx: ['1px'],
        fontSize: [1, 1, 1, 2],
        fontFamily: 'mono',
        letterSpacing: 'mono',
        color: 'secondary',
      }}
    >
      {children}
    </Box>
  )
}

export default InlineSecondaryCode
