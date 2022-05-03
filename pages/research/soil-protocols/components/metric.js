import { Box } from 'theme-ui'
import Squares from './squares'
import Rating from './rating'
import Practices from './practices'

const Metric = ({ field, value }) => {
  if (field === 'practices')
    return (
      <Box sx={{ mt: ['0px', '4px', '1px', '1px'] }}>
        <Practices value={value} />
      </Box>
    )
  if (field === 'rating')
    return (
      <Box sx={{ mt: ['0px', '4px', '4px', '1px'], ml: [0, 0, '3px', '3px'] }}>
        <Rating value={value} />
      </Box>
    )
  else return <Squares color='orange' value={value} />
}

export default Metric
