import { useState } from 'react'
import { Box } from 'theme-ui'
import { Filter } from '@carbonplan/components'

import Schematic from './schematic'

const Narrow = () => {
  const [view, setView] = useState({
    baseline: true,
    retrofit: false,
    narrow: false,
  })
  return (
    <Box>
      <Filter values={view} setValues={setView} sx={{ mb: 3 }} />
      <Schematic view={view} />
    </Box>
  )
}

export default Narrow
