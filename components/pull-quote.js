import { Box, Text } from 'theme-ui'
import { useState } from 'react'

const PullQuote = ({ color, children }) => {
  return (
    <Box
      sx={{
        float: 'right',
        position: 'relative',
        top: 848,
        mt: -800,
        left: 350,
        display: ['none', 'none', 'initial'],
      }}
    >
      <Text
        sx={{
          fontFamily: 'heading',
          fontSize: [5],
          lineHeight: 'heading',
          color: color || 'text',
          maxWidth: 250,
          float: 'none',
          display: 'inline-block',
        }}
      >
        {children}
      </Text>
    </Box>
  )
}

export default PullQuote
