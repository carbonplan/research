import React from 'react'
import { Box, useThemeUI } from 'theme-ui'
import { mix } from '@theme-ui/color'

export const HatchingKey = () => {
  const { theme } = useThemeUI()
  const fullGrey = mix('grey', 'background', 0.9)(theme)

  return (
    <Box
      as='span'
      sx={{
        display: 'inline-flex',
        gap: '2px',
        alignItems: 'center',
      }}
    >
      (
      <Box
        as='svg'
        width='12'
        height='12'
        viewBox='0 0 12 12'
        sx={{ mt: '2px' }}
      >
        <defs>
          <pattern
            id='hatchPattern'
            patternUnits='userSpaceOnUse'
            width={4}
            height={4}
            patternTransform={`rotate(40)`}
          >
            <line
              x1='0'
              y1='0'
              x2='0'
              y2={4}
              style={{
                stroke: fullGrey,
                strokeWidth: 2,
              }}
            />
          </pattern>
        </defs>
        <rect x='0' y='0' width='50' height='50' fill='url(#hatchPattern)' />
      </Box>
      )
    </Box>
  )
}

export default HatchingKey
