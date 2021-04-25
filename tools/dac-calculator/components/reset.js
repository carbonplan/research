import { Box, Text } from 'theme-ui'

const Reset = ({ onClick }) => {
  return (
    <Box
      onClick={onClick}
      as='button'
      sx={{
        fontSize: [3, 3, 3, 4],
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        pr: [0],
        pb: [0],
        pt: [0],
        background: 'transparent',
        border: 'none',
        mt: [0],
        fontFamily: 'body',
        letterSpacing: 'body',
        float: 'right',
        color: 'secondary',
        stroke: 'secondary',
        position: 'relative',
        cursor: 'pointer',
        transition: 'color 0.15s, stroke 0.15s',
        display: ['none', 'none', 'inherit'],
        pl: ['24px'],
        userSelect: 'none',
        '&:hover': {
          color: 'primary',
          stroke: 'primary',
        },
      }}
    >
      <Box
        sx={{
          display: 'inline-block',
          position: 'absolute',
          width: '17px',
          height: '17px',
          left: '0px',
          top: '2px',
          strokeWidth: '2px',
        }}
      >
        <svg fill='none' viewBox='0 0 20 20'>
          <path d='M2,10c0-1,0.2-2.1,0.6-3.1C4.4,2.8,9.1,1,13.2,2.7c2,0.9,3.5,2.4,4.3,4.3' />
          <path d='M18,10c0,1.1-0.2,2.1-0.6,3.1c-1.7,4.1-6.4,5.9-10.5,4.2c-2-0.9-3.5-2.5-4.3-4.4' />
          <polyline points='7.6,14.2 2.5,12.9 1.7,18.2  ' />
          <polyline points='12.4,5.8 17.5,7.1 18.3,1.8  ' />
        </svg>
      </Box>
      Reset
    </Box>
  )
}

export default Reset
