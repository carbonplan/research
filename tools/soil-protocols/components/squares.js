import { Box } from 'theme-ui'

const Squares = ({ color, value, height }) => {
  return (
    <Box sx={{ mt: ['-2px', '4px', '4px', '4px'] }}>
      <Box
        as='svg'
        sx={{
          height: [
            '12px',
            height ? height : '14px',
            height ? height : '14px',
            height ? height : '14px',
          ],
          width: ['100%'],
        }}
        stroke='none'
        fill='none'
      >
        <Box
          as='rect'
          sx={{
            fill: color ? color : 'primary',
            opacity: value >= 1 ? 1 : 0.2,
          }}
          x='0'
          y='0'
          width='31%'
          height='12'
        />
        <Box
          as='rect'
          sx={{
            fill: color ? color : 'primary',
            opacity: value >= 2 ? 1 : 0.2,
          }}
          x='36%'
          y='0'
          width='31%'
          height='12'
        />
        <Box
          as='rect'
          sx={{
            fill: color ? color : 'primary',
            opacity: value >= 3 ? 1 : 0.2,
          }}
          x='72%'
          y='0'
          width='31%'
          height='12'
        />
      </Box>
    </Box>
  )
}

export default Squares
