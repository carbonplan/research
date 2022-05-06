import React from 'react'
import { Box } from 'theme-ui'

const Ex = ({ closed, sx, ...props }) => {
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
        <line x1={8} x2={18} y1={8} y2={18} style={style} />
        <line x1={8} x2={18} y1={18} y2={8} style={style} />
        {closed && <circle cx='13' cy='13' r='12' style={style} />}
      </svg>
    </Box>
  )
}

export default Ex
