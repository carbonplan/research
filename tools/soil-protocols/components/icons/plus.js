import React from 'react'
import { Box } from 'theme-ui'

const Plus = ({ closed, sx, ...props }) => {
  const color = sx && sx.color ? sx.color : 'primary'
  const style = { vectorEffect: 'non-scaling-stroke' }
  return (
    <Box
      sx={{
        display: 'inline-block',
        width: 24,
        height: 24,
        stroke: color,
        strokeWidth: '1.5px',
        ...sx,
      }}
      {...props}
    >
      <svg fill='none' viewBox='0 0 26 26'>
        <polyline style={style} points='5.95 13.34 10.25 17.64 19.53 8.36' />
        {closed && <circle style={style} cx='13' cy='13' r='12' />}
      </svg>
    </Box>
  )
}

export default Plus
