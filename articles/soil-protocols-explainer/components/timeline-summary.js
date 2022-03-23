import { Box } from 'theme-ui'
import { sx } from './styles'
import Timeline from './timeline'

const TimelineSummary = () => {
  return (
    <Box sx={{ mb: [5, 5, 5, 6] }}>
      <Timeline
        label='Typical'
        data={{ activity: [-10, 0], crediting: [-5, 10] }}
      />
      <Timeline
        label='Rigorous'
        data={{ activity: [-2, 0], crediting: [-2, 10] }}
      />
    </Box>
  )
}

export default TimelineSummary
