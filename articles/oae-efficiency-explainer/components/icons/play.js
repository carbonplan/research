import { Box } from 'theme-ui'

const Play = (props) => {
  return (
    <Box
      as='svg'
      viewBox='0 0 13 15'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      {...props}
    >
      <path d='M13 7.5L0 0V15L13 7.5Z' />
    </Box>
  )
}

export default Play
