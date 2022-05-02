import { Box } from 'theme-ui'
import { Column, Row } from '@carbonplan/components'
import { EQUIVALENCE_VALUES } from './constants'

const sx = {
  label: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [2, 2, 2, 3],
    mb: [2],
  },
  number: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    fontSize: [3, 4, 4, '28px'],
    color: 'pink',
  },
  units: {
    display: ['inline-block'],
    fontFamily: 'faux',
    letterSpacing: 'faux',
    fontSize: [2, 2, 2, 3],
    color: 'secondary',
    ml: 2,
  },
  group: {
    borderStyle: 'solid',
    borderWidth: '0px',
    borderTopWidth: '1px',
    borderColor: 'muted',
    pt: [3],
  },
}

const EquivalenceTable = () => {
  return (
    <Row columns={[6]}>
      <Column start={[1]} width={[3]}>
        <Row columns={[2]}>
          <Box sx={sx.group}>
            <Box sx={sx.label}>
              Storage <br />
              amount
            </Box>
            {EQUIVALENCE_VALUES.map((_, i) => (
              <Box sx={sx.number} key={i}>
                1<Box sx={sx.units}>tCO₂</Box>
              </Box>
            ))}
          </Box>
          <Box sx={sx.group}>
            <Box sx={sx.label}>
              Storage <br />
              period
            </Box>
            {EQUIVALENCE_VALUES.map(([delay]) => (
              <Box sx={sx.number} key={delay}>
                {delay}
                <Box sx={sx.units}>
                  <Box sx={{ display: ['none', 'none', 'initial', 'initial'] }}>
                    years
                  </Box>
                  <Box sx={{ display: ['initial', 'initial', 'none', 'none'] }}>
                    y
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Row>
      </Column>
      <Column start={[4]} width={[3]} sx={sx.group}>
        <Box sx={sx.label}>
          Equivalent <br />
          emissions
        </Box>
        {EQUIVALENCE_VALUES.map(([delay, value]) => (
          <Box sx={sx.number} key={delay}>
            {value}
            <Box sx={sx.units}>tCO₂</Box>
          </Box>
        ))}
      </Column>
    </Row>
  )
}

export default EquivalenceTable
