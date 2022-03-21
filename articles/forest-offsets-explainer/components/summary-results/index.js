import { useThemeUI, Box, Grid, Text } from 'theme-ui'
import { format } from 'd3-format'
import { scaleLinear } from 'd3-scale'
import { Row, Column } from '@carbonplan/components'

import program from '../../data/program'

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
  valueBig: {
    fontFamily: 'faux',
    letterSpacing: 'faux',
    textTransform: 'uppercase',
    color: 'green',
    fontSize: [6, 7, 7, 8],
  },
  valueSmall: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    color: 'green',
    fontSize: [3, 3, 3, 4],
  },
  group: {
    borderStyle: 'solid',
    borderWidth: '0px',
    borderTopWidth: '1px',
    borderColor: 'muted',
    mb: [0, 0, 0, 3],
  },
}

const SummaryResults = () => {
  const { theme } = useThemeUI()
  return (
    <Box>
      <Row columns={[6, 6]}>
        <Column start={[1, 1]} width={[3, 3]}>
          <Box sx={{ ...sx.group }}>
            <Box sx={sx.label}>Over-crediting percent</Box>
            <Box sx={sx.valueBig}>
              {format('.1f')(program.overCrediting.percent.median * 100)}%
            </Box>
            <Box sx={sx.valueSmall}>
              (
              {format('.1f')(program.overCrediting.percent.min * 100) +
                '-' +
                format('.1f')(program.overCrediting.percent.max * 100)}
              %)
            </Box>
          </Box>
        </Column>
        <Column start={[4, 4]} width={[3, 3]}>
          <Box sx={{ ...sx.group }}>
            <Box sx={sx.label}>Over-crediting value</Box>
            <Box sx={sx.valueBig}>
              $
              {format('.3~s')(
                program.overCrediting.arbocs.median * program.defaultCreditValue
              )}
            </Box>
            <Box sx={sx.valueSmall}>
              ($
              {format('.3~s')(
                program.overCrediting.arbocs.min * program.defaultCreditValue
              ).slice(0, 3) +
                '-' +
                format('.3~s')(
                  program.overCrediting.arbocs.max * program.defaultCreditValue
                )}
              )
            </Box>
          </Box>
        </Column>
      </Row>
      <Row columns={[6, 6]} sx={{ mt: [4] }}>
        <Column start={[1, 1]} width={[2, 2]}>
          <Box sx={{ ...sx.group }}>
            <Box sx={sx.label}>Analyzed credits</Box>
            <Box sx={{ ...sx.valueSmall, mt: [2] }}>
              {format('.3~s')(program.overCrediting.analyzed)}
            </Box>
          </Box>
        </Column>
        <Column start={[3, 3]} width={[2, 2]}>
          <Box sx={{ ...sx.group }}>
            <Box sx={sx.label}>Over-crediting</Box>
            <Box sx={{ ...sx.valueSmall, mt: [2] }}>
              {format('.2~s')(program.overCrediting.arbocs.median)} (
              {format('.2~s')(program.overCrediting.arbocs.min).slice(0, 2) +
                '-' +
                format('.2~s')(program.overCrediting.arbocs.max)}
              )
            </Box>
          </Box>
        </Column>
        <Column start={[5, 5]} width={[2, 2]}>
          <Box sx={{ ...sx.group }}>
            <Box sx={sx.label}>Credit value</Box>
            <Box sx={{ ...sx.valueSmall, mt: [2] }}>
              ${program.defaultCreditValue}
            </Box>
          </Box>
        </Column>
      </Row>
    </Box>
  )
}

export default SummaryResults
