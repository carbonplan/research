import { memo } from 'react'
import { Box, Text } from 'theme-ui'

const GroupDescription = ({ group }) => {
  return (
    <Box>
      <Box
        sx={{
          fontSize: [4],
          mt: [5],
          mb: [3],
          fontFamily: 'heading',
          letterSpacing: 'heading',
        }}
      >
        {group.displayName}
      </Box>
      <Box
        sx={{
          fontSize: [2, 2, 2, 3],
          mb: [1],
          maxWidth: '500px',
        }}
      >
        {group.description}
      </Box>
    </Box>
  )
}

export default memo(GroupDescription)
