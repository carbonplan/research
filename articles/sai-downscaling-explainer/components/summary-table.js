import { Box } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'

const sx = {
  label: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [2, 2, 2, 3],
    pt: [2, 2, 2, 3],
    mt: [0],
    pb: [0],
    // Force line break on smaller screens
    '@media (width < 2360px)': {
      wordSpacing: 100,
    },
  },
  valueBig: {
    fontFamily: 'faux',
    letterSpacing: 'faux',
    fontSize: [5, 5, 5, 6],
    color: 'orange',
    mt: 1,
  },
  valueMed: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    fontSize: [4, 4, 4, 5],
    color: 'red',
    mt: [1],
  },
  group: {
    borderStyle: 'solid',
    borderWidth: '0px',
    borderTopWidth: '1px',
    borderColor: 'muted',
  },
}

const Cell = ({ label, children }) => (
  <Box sx={sx.group}>
    <Box sx={sx.label}>{label}</Box>
    {children}
  </Box>
)

const SummaryTable = () => {
  return (
    <Box>
      <Row columns={6}>
        <Column start={1} width={2}>
          <Cell label='Spatial resolution'>
            <Box sx={sx.valueBig}>0.25°</Box>
          </Cell>
        </Column>
        <Column start={3} width={2}>
          <Cell label='Temporal resolution'>
            <Box sx={sx.valueBig}>Daily</Box>
          </Cell>
        </Column>
        <Column start={5} width={2}>
          <Cell label='Downscaled variables'>
            <Box sx={sx.valueBig}>5</Box>
          </Cell>
        </Column>
      </Row>

      <Row columns={4} sx={{ mt: [4, 5, 5, 5], rowGap: [4, 5, 5, 5] }}>
        <Column start={1} width={[2, 1, 1, 1]}>
          <Cell label='Climate scenarios'>
            <Box sx={sx.valueMed}>4</Box>
          </Cell>
        </Column>
        <Column start={[3, 2, 2, 2]} width={[2, 1, 1, 1]}>
          <Cell label='Climate models'>
            <Box sx={sx.valueMed}>2</Box>
          </Cell>
        </Column>
        <Column start={[1, 3, 3, 3]} width={[2, 1, 1, 1]}>
          <Cell label='Model simulations'>
            <Box sx={sx.valueMed}>116</Box>
          </Cell>
        </Column>
        <Column start={[3, 4, 4, 4]} width={[2, 1, 1, 1]}>
          <Cell label='Downscaling methods'>
            <Box sx={sx.valueMed}>2</Box>
          </Cell>
        </Column>
      </Row>
    </Box>
  )
}

export default SummaryTable
