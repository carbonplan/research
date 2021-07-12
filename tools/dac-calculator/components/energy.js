import { memo } from 'react'
import { Box, Text } from 'theme-ui'
import { Select, Button } from '@carbonplan/components'
import { Reset } from '@carbonplan/icons'

const Energy = ({ params, reset }) => {
  const [value, setValue] = params.state

  const onChange = (e) => {
    setValue(e.target.value)
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
        <Button
          size='sm'
          prefix={<Reset />}
          inverted
          onClick={reset}
          sx={{
            display: 'inline-block',
            float: 'right',
            mt: ['2px'],
            display: ['none', 'none', 'inherit'],
          }}
        >
          Reset
        </Button>
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
          onChange={onChange}
          defaultValue={defaultValue}
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
