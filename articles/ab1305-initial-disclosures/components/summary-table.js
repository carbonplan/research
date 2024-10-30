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
    '@media (width < 1390px)': {
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
            <Box sx={sx.label}>Disclosures found</Box>
            <Box sx={{ ...sx.valueBig, color: 'purple' }}>25</Box>
          </Box>
        </Column>
        <Column start={[4, 4]} width={[3, 3]}>
          <Box sx={sx.group}>
            <Box sx={sx.label}>Complete disclosures</Box>
            <Box sx={{ ...sx.valueBig, color: 'purple' }}>6</Box>
          </Box>
        </Column>
      </Row>
      <Row columns={[6, 6]} sx={{ mt: [4] }}>
        <Column start={[1, 1]} width={[2, 2]}>
          <Box sx={sx.group}>
            <Box sx={{ ...sx.label, ...sx.twoColumn }}>Unique projects</Box>
            <Box sx={{ ...sx.valueSmall, color: 'purple' }}>108</Box>
          </Box>
        </Column>
        <Column start={[3, 3]} width={[2, 2]}>
          <Box sx={sx.group}>
            <Box sx={{ ...sx.label }}>Entries missing&nbsp;data</Box>
            <Box sx={{ ...sx.valueSmall, color: 'purple' }}>55%</Box>
          </Box>
        </Column>
        <Column start={[5, 5]} width={[2, 2]}>
          <Box sx={sx.group}>
            <Box sx={{ ...sx.label, ...sx.twoColumn }}>Unique protocols</Box>
            <Box sx={{ ...sx.valueSmall, color: 'purple' }}>38</Box>
          </Box>
        </Column>
      </Row>
    </Box>
  )
}

export default SummaryTable
