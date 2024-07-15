import { Box } from 'theme-ui'

const Pause = (props) => {
  return (
    <Box
      as='svg'
      viewBox='0 0 12 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      stroke='currentColor'
      {...props}
    >
      <line x1='2' x2='2' y2='13' strokeWidth='4' />
      <line x1='10' x2='10' y2='13' strokeWidth='4' />
    </Box>
  )
}

export default Pause
