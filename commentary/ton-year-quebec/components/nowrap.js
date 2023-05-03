import { Box } from 'theme-ui'

const Nowrap = ({ children }) => {
  return (
    <Box
      as='span'
      sx={{ whiteSpace: 'nowrap', '& span': { display: 'inline' } }}
    >
      {children}
    </Box>
  )
}

export default Nowrap
