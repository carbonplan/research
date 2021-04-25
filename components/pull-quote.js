import { Box, Text } from 'theme-ui'
import { useState } from 'react'

const PullQuote = ({ color, children }) => {
  return (
    <Box
      as='blockquote'
      sx={{
        float: 'left',
        position: 'relative',
        top: 848,
        mt: -800,
        left: [
          '0px',
          '0px',
          'calc(7 * 100vw / 12 - 20px)',
          'min(calc(7 * 100vw / 12 - 28px), 1092px)',
        ],
        width: [
          '100%',
          '100%',
          'calc(2 * 100vw / 12 - 34px)',
          'min(calc(2 * 100vw / 12 - 54px), 272px)',
        ],
        display: ['none', 'none', 'initial'],
      }}
    >
      <Box
        sx={{
          fontFamily: 'heading',
          fontSize: [5],
          lineHeight: 'heading',
          color: color || 'text',
          display: 'block',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default PullQuote
