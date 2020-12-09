import { Box, Text } from 'theme-ui'
import { mix } from '@theme-ui/color'

const Toggle = ({ value, setValue, labels }) => {
  return (
    <Box onClick={() => setValue(!value)} sx={{ cursor: 'pointer' }}>
      <Box
        sx={{
          width: '50px',
          height: '20px',
          borderRadius: '20px',
          backgroundColor: value ? mix('pink', 'background', 0.5) : 'muted',
          position: 'relative',
          transition: '0.2s',
          display: 'inline-block',
        }}
      >
        <Box
          sx={{
            width: '14px',
            height: '14px',
            borderRadius: '7px',
            position: 'absolute',
            left: value ? '32px' : '4px',
            top: '3px',
            backgroundColor: value ? 'pink' : 'secondary',
            transition: '0.2s',
          }}
        ></Box>
      </Box>
      <Text
        sx={{
          fontFamily: 'faux',
          textTransform: 'initial',
          fontSize: [2],
          color: value ? 'pink' : 'muted',
          right: '1px',
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

export default Toggle
