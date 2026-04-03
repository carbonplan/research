import { Box } from 'theme-ui'

export const HCO3 = () => {
  return (
    <>
      HCO₃
      <Box as='span' sx={{ ml: ['-5px', '-5px', '-5px', '-7px'] }}>
        ⁻
      </Box>
    </>
  )
}

export const CO3 = () => {
  return (
    <>
      CO₃
      <Box as='span' sx={{ ml: ['-6px', '-6px', '-6px', '-8px'] }}>
        ²⁻
      </Box>
    </>
  )
}
