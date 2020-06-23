import { Box, Link } from 'theme-ui'

const Block = ({ children }) => {
  return (
    <Box
      sx={{
        pl: [4],
        borderStyle: 'solid',
        borderColor: 'muted',
        borderWidth: '0px',
        borderLeftWidth: '6px',
        fontSize: [3],
        mt: [4],
        mb: [4],
      }}
    >
      {children}
    </Box>
  )
}

export default Block
