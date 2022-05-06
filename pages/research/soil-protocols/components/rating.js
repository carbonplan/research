import { Box, Grid } from 'theme-ui'
import { Check } from '@carbonplan/icons'

const Rating = ({ color, value }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        mt: ['8px', '-1px', '-1px', '0px'],
        ml: ['-4px', '-3px', '-4px', '-4px'],
        width: '100%',
      }}
    >
      {[0, 1, 2, 3, 4].map((d, i) => (
        <Box
          key={'rating-' + i}
          sx={{
            display: 'inline-block',
            position: 'absolute',
            left: `${d * 22}%`,
          }}
        >
          <Check
            sx={{
              position: 'relative',
              width: ['26px', '15px', '15px', '15px'],
              height: ['20px', '15px', '15px', '15px'],
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
