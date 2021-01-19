import { Box, Text, Styled, Divider } from 'theme-ui'
import { Tag } from '@carbonplan/components'

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        mb: [0],
        pb: [3],
        position: 'sticky',
        top: [56],
        height: 'fit-content',
        backgroundColor: 'background',
      }}
    >
      <Text
        as='h1'
        variant='styles.h1'
        sx={{ pt: [4, 4, 4], mb: [4, 4, 4], mt: [0, 0, 0] }}
      >
        Research
      </Text>
      <Box sx={{ maxWidth: '750px' }}>
        <Styled.p>
          A collection of articles, tools, and commentary on carbon removal and
          climate solutions.
        </Styled.p>
      </Box>
      <Divider sx={{ mr: [4], mt: [4] }} />
      <Box
        sx={{
          mt: [4],
        }}
      >
        <Text
          sx={{
            fontFamily: 'mono',
            letterSpacing: 'mono',
            fontSize: [1],
            color: 'secondary',
          }}
        >
          FILTER BY TYPE
        </Text>
        <Box sx={{ mt: [3] }}>
          <Tag value={true} label='All' />
          <Tag value={true} label='Article' />
          <Tag value={true} label='Tool' />
          <Tag value={true} label='Comment' />
          <Tag value={true} label='Publication' />
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
