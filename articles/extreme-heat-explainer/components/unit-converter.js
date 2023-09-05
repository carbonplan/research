import { Box } from 'theme-ui'

const UnitConverter = ({ units, setUnits }) => {
  return (
    <>
      Display in degrees{' '}
      <Box
        as='span'
        sx={{
          color: units == 'c' ? 'primary' : 'secondary',
          textDecoration: 'underline',
          cursor: 'pointer',
          '&:hover': {
            color: 'primary',
          },
        }}
        onClick={() => setUnits('c')}
      >
        Celsius
      </Box>{' '}
      or{' '}
      <Box
        as='span'
        sx={{
          color: units == 'f' ? 'primary' : 'secondary',
          textDecoration: 'underline',
          cursor: 'pointer',
          '&:hover': {
            color: 'primary',
          },
        }}
        onClick={() => setUnits('f')}
      >
        Fahrenheit
      </Box>
      .
    </>
  )
}

export default UnitConverter
