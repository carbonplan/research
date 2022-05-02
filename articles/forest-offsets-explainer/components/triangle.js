import { Box } from 'theme-ui'

const Triangle = () => {
  return (
    <Box
      as='svg'
      width='10'
      height='10'
      viewBox='0 0 10 10'
      sx={{ fill: 'primary' }}
    >
      <polygon points='4.5,0 0,10 9,10' />
    </Box>
  )
}

export default Triangle
