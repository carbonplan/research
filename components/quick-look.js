import { Box } from 'theme-ui'
import { Column } from '@carbonplan/components'

const QuickLook = ({ start, color, children, tool = false }) => {
  return (
    <>
      <Column start={[1, start]} width={[1]}>
        <Box
          sx={{
            display: ['none', 'none', 'initial'],
            fontSize: [2, 2, 2, 3],
          }}
        >
          <Box sx={{ mt: [5, 6, 7, 8] }}>
            <Box
              sx={{
                fontFamily: 'faux',
                letterSpacing: 'smallcaps',
                mb: [3],
                pt: tool ? [0, 0, '42px', '55px'] : [0, 0, '42px', '23px'],
                textAlign: 'right',
              }}
            >
              /
            </Box>
          </Box>
        </Box>
      </Column>
      <Column start={[1, start + 1]} width={[1, 2]}>
        <Box
          sx={{
            display: ['none', 'none', 'initial'],
            fontSize: [2, 2, 2, 3],
          }}
        >
          <Box sx={{ mt: [5, 6, 7, 8] }}>
            <Box
              sx={{
                fontFamily: 'faux',
                letterSpacing: 'smallcaps',
                mb: [3],
                pt: tool ? [0, 0, '42px', '55px'] : [0, 0, '42px', '23px'],
              }}
            >
              QUICK LOOK
            </Box>
            <Box
              sx={{ color: color, fontFamily: 'faux', letterSpacing: 'faux' }}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </Column>
    </>
  )
}

export default QuickLook
