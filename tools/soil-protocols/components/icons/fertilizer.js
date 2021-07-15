import React from 'react'
import { Box } from 'theme-ui'

const Fertilizer = ({ closed, sx, ...props }) => {
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
          d='M19.7,9.2l-1.2-0.7V7c0-0.2-0.2-0.4-0.4-0.4h-0.2v-1H19c0.2,0,0.4-0.2,0.4-0.4V3.4C19.3,3.2,19.2,3,19,3h-1.1
    c-0.2-1.2-1.2-2.1-2.4-2.1h-1c-1.1,0-1.9,0.6-2.3,1.6h-6C6,2.5,5.8,2.6,5.8,2.8L3.3,17.9c0,0.1,0,0.2,0.1,0.3
    c0.1,0.1,0.2,0.1,0.3,0.1H6c0.2,0,0.3-0.1,0.4-0.3L8.4,5.6H12v1h-0.2c-0.2,0-0.4,0.2-0.4,0.4v1.5l-1.2,0.7c-0.7,0.5-1.1,1.2-1.1,2
    V13v6.6v3.2c0,1.3,1,2.3,2.3,2.3h7.1c1.3,0,2.3-1,2.3-2.3v-3.2V13v-1.8C20.8,10.3,20.3,9.6,19.7,9.2z'
        />
      </svg>
    </Box>
  )
}

export default Fertilizer
