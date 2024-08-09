import { Box } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'

const sx = {
  label: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [2, 2, 2, 3],
    pt: [2, 2, 2, 3],
    mt: [1],
    pb: [0],
  },
  twoColumn: {
    // Force line break on smaller screens
    '@media (width < 1251px)': {
      wordSpacing: 100,
    },
  },
  valueBig: {
    fontFamily: 'faux',
    letterSpacing: 'faux',
    textTransform: 'uppercase',
    fontSize: [6, 7, 7, 8],
  },
  valueSmall: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    fontSize: [3, 3, 3, 4],
    mt: [2],
  },
  group: {
    borderStyle: 'solid',
    borderWidth: '0px',
    borderTopWidth: '1px',
    borderColor: 'muted',
    mb: [0, 0, 0, 3],
  },
}

const SummaryTable = () => {
  return (
    <Box>
      <Row columns={[6, 6]}>
        <Column start={[1, 1]} width={[3, 3]}>
          <Box sx={sx.group}>
            <Box sx={sx.label}>Invited companies</Box>
            <Box sx={{ ...sx.valueBig, color: 'orange' }}>9</Box>
          </Box>
        </Column>
        <Column start={[4, 4]} width={[3, 3]}>
          <Box sx={sx.group}>
            <Box sx={sx.label}>Participating companies</Box>
            <Box sx={{ ...sx.valueBig, color: 'orange' }}>2</Box>
          </Box>
        </Column>
      </Row>
      <Row columns={[6, 6]} sx={{ mt: [4] }}>
        <Column start={[1, 1]} width={[2, 2]}>
          <Box sx={sx.group}>
            <Box sx={{ ...sx.label, ...sx.twoColumn }}>Locations</Box>
            <Box sx={{ ...sx.valueSmall, color: 'orange' }}>342</Box>
          </Box>
        </Column>
        <Column start={[3, 3]} width={[2, 2]}>
          <Box sx={sx.group}>
            <Box sx={{ ...sx.label, ...sx.twoColumn }}>Hazards</Box>
            <Box sx={{ ...sx.valueSmall, color: 'orange' }}>4</Box>
          </Box>
        </Column>
        <Column start={[5, 5]} width={[2, 2]}>
          <Box sx={sx.group}>
            <Box sx={{ ...sx.label, ...sx.twoColumn }}>Time periods</Box>
            <Box sx={{ ...sx.valueSmall, color: 'orange' }}>2</Box>
          </Box>
        </Column>
      </Row>
    </Box>
  )
}

export default SummaryTable
