import { Box } from 'theme-ui'
import { formatDate } from '@carbonplan/components'

const Date = ({ date, sx }) => {
  return (
    <Box
      sx={{
        color: 'secondary',
        fontFamily: 'mono',
        letterSpacing: '0.05em',
        fontSize: [1, 1, 1, 2],
        userSelect: 'none',
        textTransform: 'uppercase',
        flexShrink: 0,
        ...sx,
      }}
    >
      {formatDate(date)}
    </Box>
  )
}

export default Date
