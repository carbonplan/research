import { memo } from 'react'
import { Box, Text } from 'theme-ui'
import { Select } from '@carbonplan/components'
import Reset from './reset'

const eMap = {
  WIND: 'Wind',
  SOLAR: 'Solar',
  NGCC: 'NGCC',
}

const Energy = ({ params, reset }) => {
  const [value, setValue] = params.state

  const handleChange = (e) => {
    setValue(eMap[e.target.value])
  }

  const defaultValue = value.toUpperCase()
  return (
    <Box sx={{ mt: [2, 2, '20px'] }}>
      <Box
        sx={{
          fontSize: [3],
          fontFamily: 'heading',
          letterSpacing: 'smallcaps',
          color: 'purple',
        }}
      >
        ENERGY SOURCE
        <Reset onClick={reset} />
      </Box>
      <Box
        sx={{
          fontSize: [3, 3, 3, 4],
        }}
      >
        <Box as='span' sx={{ display: ['none', 'none', 'initial'] }}>
          The source of energy for the DAC facility is
        </Box>
        <Select
          size='sm'
          sx={{
            ml: [0, 0, 2],
            mt: [0, 0, '18px'],
            color: 'purple',
            fontFamily: 'heading',
            textTransform: 'uppercase',
          }}
        >
          <option>NGCC</option>
          <option>Wind</option>
          <option>Solar</option>
        </Select>
      </Box>
    </Box>
  )
}

export default memo(Energy)
