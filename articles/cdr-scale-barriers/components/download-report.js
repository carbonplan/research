import { Box } from 'theme-ui'
import { Link, Button } from '@carbonplan/components'
import { RotatingArrow } from '@carbonplan/icons'

const sx = {
  height: [24, 24, 34, 46],
  width: [24, 24, 34, 46],
  verticalAlign: 'middle',
  ml: ['4px', '4px', '4px', '6px'],
  transition: 'color 0.15s, transform 0.15s',
}

const DownloadReport = () => {
  return (
    <Box
      sx={{
        borderTop: ({ colors }) => `solid 1px ${colors.muted}`,
        borderBottom: ({ colors }) => `solid 1px ${colors.muted}`,
        py: [4],
        my: [6, 6, 6, 7],
      }}
    >
      <Button
        size='lg'
        href='https://files.carbonplan.org/CDR-Scale-Barriers.pdf'
        suffix={
          <span className='arrow-wrapper'>
            <RotatingArrow
              className='arrow'
              sx={{ ...sx, ml: [0], color: 'teal' }}
            />
            <RotatingArrow className='arrow' sx={{ ...sx, color: 'green' }} />
            <RotatingArrow className='arrow' sx={{ ...sx, color: 'orange' }} />
            <RotatingArrow className='arrow' sx={{ ...sx, color: 'yellow' }} />
          </span>
        }
        sx={{
          '&:hover .arrow-wrapper > .arrow': {
            transform: 'rotate(45deg)',
            color: 'secondary',
          },
        }}
      >
        <Box as='span' sx={{ mr: ['10px', '10px', '12px', '16px'] }}>
          Download full report
        </Box>
      </Button>
    </Box>
  )
}

export default DownloadReport
