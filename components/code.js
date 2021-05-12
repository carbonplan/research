import { Box } from 'theme-ui'
import { alpha } from '@theme-ui/color'

const Code = ({ children }) => {
  return (
    <Box
      sx={{
        bg: alpha('muted', 0.5),
        color: 'primary',
        fontSize: [2, 2, 2, 3],
        my: [5, 5, 5, 6],
        p: [3, 4, 5, 6],
        borderRadius: '1px',
        fontFamily: 'mono',
        letterSpacing: 'mono',
      }}
    >
      {children}
    </Box>
  )
}

export default Code
