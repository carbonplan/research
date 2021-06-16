import { Box } from 'theme-ui'
import { useReferences } from './references'

const CiteSeparator = ({ sep = ',' }) => {
  const { color } = useReferences()

  return (
    <Box as='span' sx={{ userSelect: 'none' }}>
      <Box
        as='span'
        sx={{
          fontSize: ['16px', '16px', '16px', '20px'],
          color: color,
          display: 'initial',
        }}
      >
        <sup>{sep}</sup>
      </Box>
    </Box>
  )
}

export default CiteSeparator
