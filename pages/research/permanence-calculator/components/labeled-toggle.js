import { Box } from 'theme-ui'
import { Toggle } from '@carbonplan/components'

const LabeledToggle = ({ value, setValue, labels }) => {
  return (
    <Box
      onClick={() => setValue(!value)}
      sx={{ textAlign: 'center', cursor: 'pointer', position: 'relative' }}
    >
      <Toggle value={value} sx={{ color: 'pink' }} />
      <Box
        sx={{
          fontFamily: 'mono',
          textTransform: 'uppercase',
          fontSize: [1, 1, 1, 2],
          color: value ? 'pink' : 'muted',
          top: '0px',
          position: 'relative',
          transition: '0.2s',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {value ? labels.on : labels.off}
      </Box>
    </Box>
  )
}

export default LabeledToggle
