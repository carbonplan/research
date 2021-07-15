import { Box } from 'theme-ui'
import Fertilizer from './icons/fertilizer'
import Tractor from './icons/tractor'
import Cow from './icons/cow'
import Crop from './icons/crop'

const Practices = ({ value }) => {
  return (
    <Box sx={{ mt: ['-14px', '-22px', 0, 0], width: '100%' }}>
      <Box
        sx={{
          transform: ['translateY(10px)', 'translateY(10px)', 'none', 'none'],
        }}
      >
        <Cow
          sx={{
            opacity: value.grazing ? 1 : 0.25,
            color: 'orange',
            mr: [0, 1, 1, 1],
          }}
        />
        <Crop
          sx={{
            opacity: value.cropping ? 1 : 0.25,
            color: 'orange',
            mr: [0, 1, 1, 1],
          }}
        />
        <Box as='br' sx={{ display: ['none', 'initial', 'none', 'none'] }} />
        <Fertilizer
          sx={{
            opacity: value.inputs ? 1 : 0.25,
            color: 'orange',
            mr: [0, 1, 1, 1],
          }}
        />
        <Tractor
          sx={{
            opacity: value.tillage ? 1 : 0.25,
            color: 'orange',
            mr: [0, 1, 1, 1],
          }}
        />
      </Box>
    </Box>
  )
}

export default Practices
