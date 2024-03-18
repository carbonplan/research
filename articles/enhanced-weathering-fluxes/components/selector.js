import React from 'react'
import { Box, Flex, IconButton } from 'theme-ui'
import { Select } from '@carbonplan/components'
import { X } from '@carbonplan/icons'

const capitalizeFirstLetter = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return str
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const Selector = ({
  value,
  setValue,
  options,
  color,
  onReset,
  sx,
  includeClear = false,
}) => (
  <Flex
    sx={{
      width: '100%',
      alignItems: 'flex-start',
      ...sx,
    }}
  >
    <Box sx={{ flexGrow: 1, '& :first-child': { width: '100%' } }}>
      <Select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        size={'xs'}
        sxSelect={{
          fontSize: ['14px', '14px', '14px', '16px'],
          '&:hover': { color: 'primary' },
          color: color,
          borderColor: color,
          pb: '3px',
        }}
      >
        {options.map((value) => (
          <option key={value?.value ?? value} value={value?.value ?? value}>
            {capitalizeFirstLetter(value?.label ?? value)}
          </option>
        ))}
      </Select>
    </Box>
    {includeClear && (
      <Box sx={{ width: 16 }}>
        {onReset && (
          <IconButton
            aria-label='Clear selection'
            sx={{
              p: 0,
              height: 16,
              width: 16,
              ml: 1,
              mt: 1,
              cursor: 'pointer',
              color: 'secondary',
              '&:hover': { color: 'primary' },
            }}
            onClick={onReset}
          >
            <X
              sx={{
                height: 16,
                width: 16,
              }}
            />
          </IconButton>
        )}
      </Box>
    )}
  </Flex>
)

export default Selector
