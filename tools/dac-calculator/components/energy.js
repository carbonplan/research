/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Text } from 'theme-ui'

const eMap = {
  WIND: 'Wind',
  SOLAR: 'Solar',
  NGCC: 'NGCC',
}

const Energy = ({ params }) => {
  const [value, setValue] = params.state

  const handleChange = (e) => {
    setValue(eMap[e.target.value])
  }

  const defaultValue = value.toUpperCase()
  return (
    <Box sx={{ mt: [2, 2, '24px'] }}>
      <Text
        sx={{
          fontSize: [3],
          fontFamily: 'heading',
          letterSpacing: 'smallcaps',
          color: 'purple',
        }}
      >
        ENERGY SOURCE
      </Text>
      <Text
        sx={{
          fontSize: [3],
        }}
      >
        <Text as='span' sx={{ display: ['none', 'none', 'initial'] }}>
          The source of energy for the DAC facility is
        </Text>
        <Box
          sx={{
            display: 'inline-block',
            ml: [0, 0, 2],
          }}
        >
          <select
            onChange={handleChange}
            sx={{
              cursor: 'pointer',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              p: [1],
              pl: [0],
              mt: [0, 0, 3],
              bg: 'background',
              border: 'none',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1px',
              borderBottomColor: 'text',
              borderRadius: '0px',
              fontFamily: 'heading',
              fontSize: [3],
              fontColor: 'text',
              width: '100px',
              color: 'purple',
            }}
            defaultValue={defaultValue}
          >
            <option>NGCC</option>
            <option>WIND</option>
            <option>SOLAR</option>
          </select>
          <span
            sx={{
              ml: ['-15px'],
              fontSize: [4],
              display: 'inline-block',
              pointerEvents: 'none',
              position: 'relative',
              top: '3px',
              color: 'secondary',
              width: '10px',
            }}
          >
            ↓
          </span>
        </Box>
      </Text>
    </Box>
  )
}

export default Energy
