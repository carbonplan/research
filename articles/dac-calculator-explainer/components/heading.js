import { Styled, Box } from 'theme-ui'

const Heading = ({ children }) => {
  return (
    <Box sx={{ maxWidth: '550px' }}>
      <Styled.h1>{children}</Styled.h1>
    </Box>
  )
}

export default Heading
