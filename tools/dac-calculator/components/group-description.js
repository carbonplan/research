import { memo } from 'react'
import { Box, Text } from 'theme-ui'

const GroupDescription = ({ group }) => {
  return (
    <Box>
      <Text
        sx={{
          fontSize: [4],
          mt: [4],
          mb: [3],
          fontFamily: 'heading',
          letterSpacing: 'heading',
        }}
      >
        {group.displayName}
      </Text>
      <Text
        sx={{
          fontSize: [2],
          mb: [1],
          maxWidth: '500px',
        }}
      >
        {group.description}
      </Text>
    </Box>
  )
}

export default memo(GroupDescription)
