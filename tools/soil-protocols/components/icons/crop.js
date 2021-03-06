import React from 'react'
import { Box } from 'theme-ui'

const Crop = ({ closed, sx, ...props }) => {
  const color = sx && sx.color ? sx.color : 'primary'
  return (
    <Box
      sx={{
        display: 'inline-block',
        width: [24, 18, 22, 24],
        height: [24, 18, 22, 24],
        fill: color,
        ...sx,
      }}
      {...props}
    >
      <svg viewBox='0 0 26 26'>
        <path
          d='M21,14.1c-3.2,0.4-5.6,1.5-7,3.2c-0.2,0.3-0.4,0.6-0.6,0.9v-3c2-0.3,3.6-1,4.7-2.2c1.4-1.5,1.6-3.2,1.7-4.2
  l0-0.5l-0.5,0.1c-2.6,0.3-4.5,1.2-5.6,2.6c-0.1,0.2-0.2,0.3-0.3,0.5v-1.3l0.5-0.5c2.2-2.2,2.2-5.7,0-7.8L13,1l-0.9,0.9
  c-1,1-1.6,2.4-1.6,3.9s0.6,2.9,1.6,3.9l0.5,0.5v1.3c-0.1-0.2-0.2-0.3-0.3-0.5c-1.1-1.4-3-2.3-5.6-2.6L6.2,8.4l0,0.5
  c0,0.7,0.2,1.7,0.7,2.8c1,2,2.9,3.2,5.7,3.6v3c-0.2-0.3-0.4-0.6-0.6-0.9c-1.4-1.7-3.7-2.8-7-3.2L4.6,14l0,0.5c0,0.8,0.2,2.1,0.9,3.4
  c1.2,2.5,3.6,4,7.1,4.5V25h0.8v-2.6c2.6-0.4,4.6-1.3,5.9-2.8l0,0c1.7-1.8,2-4,2.1-5.2l0-0.5L21,14.1z'
        />
      </svg>
    </Box>
  )
}

export default Crop
