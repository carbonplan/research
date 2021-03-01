import { Box } from 'theme-ui'

const Inline = ({ sx, children }) => {
  return (
    <Box as='span' sx={{ display: 'inline-block', ...sx }}>
      {children}
    </Box>
  )
}

export default Inline
