import { Box } from 'theme-ui'

const Squares = ({ color, data }) => {
  return (
    <Box
      sx={{
        mt: ['13px'],
      }}
    >
      <svg height='20px' width='100%' stroke='none' fill='none'>
        <Box
          as='rect'
          sx={{ fill: color ? color : 'primary', opacity: data >= 0 ? 1 : 0.2 }}
          x='0'
          y='0'
          width='25%'
          height='12'
        />
        <Box
          as='rect'
          sx={{ fill: color ? color : 'primary', opacity: data >= 1 ? 1 : 0.2 }}
          x='33%'
          y='0'
          width='25%'
          height='12'
        />
        <Box
          as='rect'
          sx={{ fill: color ? color : 'primary', opacity: data >= 2 ? 1 : 0.2 }}
          x='65%'
          y='0'
          width='25%'
          height='12'
        />
      </svg>
    </Box>
  )
}

export default Squares
