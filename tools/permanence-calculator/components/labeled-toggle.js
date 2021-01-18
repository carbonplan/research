import { Box, Text } from 'theme-ui'
import { Toggle } from '@carbonplan/components'

const LabeledToggle = ({ value, setValue, labels }) => {
  return (
    <Box onClick={() => setValue(!value)} sx={{ cursor: 'pointer' }}>
      <Toggle value={value} sx={{ color: 'pink' }} />
      <Text
        sx={{
          fontFamily: 'faux',
          textTransform: 'initial',
          fontSize: [2],
          color: value ? 'pink' : 'muted',
          right: '-1px',
          top: '-1px',
          position: 'relative',
          transition: '0.2s',
          textAlign: 'center',
        }}
      >
        {value ? labels.on : labels.off}
      </Text>
    </Box>
  )
}

export default LabeledToggle
