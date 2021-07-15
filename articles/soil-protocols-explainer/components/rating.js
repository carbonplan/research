import { Box, Grid } from 'theme-ui'
import { Check } from '@carbonplan/icons'

const Rating = ({ color, value }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        mt: ['-2px', '1px', '1px', '2px'],
        ml: ['0px'],
        width: '100%',
      }}
    >
      {[0, 1, 2, 3, 4].map((d, i) => (
        <Box
          key={'rating-' + i}
          sx={{
            display: 'inline-block',
            position: 'absolute',
            left: `${d * 21}%`,
          }}
        >
          <Check
            sx={{
              position: 'relative',
              width: ['9px', '14px', '14px', '14px'],
              height: ['9px', '14px', '14px', '14px'],
              opacity: d < value ? 1 : 0.3,
              stroke: 'orange',
              strokeWidth: 1.5,
            }}
          />
        </Box>
      ))}
    </Box>
  )
}

export default Rating
