import { Box, Flex } from 'theme-ui'
import { Input, Slider } from '@carbonplan/components'
import { useEffect, useState } from 'react'

const sx = {
  slider: { width: 'calc(100% - 66px)', display: 'inline-block' },
  input: {
    MozAppearance: 'textfield',
    '&::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '&::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },

    display: 'inline-block',
    ml: [3],
    width: '50px',

    borderBottomWidth: 0,
    fontSize: [1, 1, 1, 2],
    fontFamily: 'mono',
    letterSpacing: 'mono',
  },
}
const Parameter = ({
  label,
  units,
  onChange,
  value,
  step,
  min,
  max,
  factor = 1,
  decimals = 0,
}) => {
  const formattedValue = (factor * value).toFixed(decimals)
  const [inputValue, setInputValue] = useState(formattedValue)

  useEffect(() => {
    setInputValue(formattedValue)
  }, [formattedValue])

  const handleUpdate = () => {
    let normalizedValue = inputValue / factor

    if (Number.isNaN(normalizedValue)) {
      setInputValue(formattedValue)
      return
    }
    normalizedValue = Math.min(Math.max(normalizedValue, min), max)

    const diff = normalizedValue - min
    if (diff % step > 0) {
      normalizedValue = min + Math.round(diff / step) * step
    }

    onChange(normalizedValue)
    if (Number(inputValue) !== normalizedValue) {
      setInputValue((factor * normalizedValue).toFixed(decimals))
    }
  }

  const handleKeyUp = (e) => {
    if (['ArrowDown', 'ArrowUp', 'Enter'].includes(e.code)) {
      handleUpdate()
    }
  }

  return (
    <Box>
      <Box
        as='label'
        htmlFor={label}
        sx={{
          fontSize: [2, 2, 2, 3],
          mb: [1],
          fontFamily: 'heading',
          letterSpacing: 'smallcaps',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </Box>

      <Flex>
        <Slider
          onChange={(e) => onChange(Number(e.target.value))}
          value={value}
          step={step}
          min={min}
          max={max}
          sx={sx.slider}
        />
        <Input
          id={label}
          size='xs'
          type='number'
          step={step * factor}
          sx={sx.input}
          onKeyUp={handleKeyUp}
          onBlur={handleUpdate}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
      </Flex>
      <Box
        sx={{
          fontSize: [0, 0, 1, 1],
          color: 'secondary',
          fontFamily: 'mono',
          letterSpacing: 'mono',
        }}
      >
        {units}
      </Box>
    </Box>
  )
}
export default Parameter
