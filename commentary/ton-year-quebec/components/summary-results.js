import { Box, Grid, Text } from 'theme-ui'
import { format } from 'd3-format'
import { scaleLinear } from 'd3-scale'
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
  valueBig: {
    fontFamily: 'faux',
    letterSpacing: 'faux',
    textTransform: 'uppercase',
    color: 'pink',
    fontSize: [6, 7, 7, 8],
  },
  valueSmall: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    color: 'pink',
    fontSize: [3, 3, 3, 4],
  },
  units: {
    fontFamily: 'faux',
    letterSpacing: 'faux',
    color: 'pink',
    textTransform: 'none',
    fontSize: [1, 1, 1, 2],
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
  return (
    <Box>
      <Row columns={[6, 6]}>
        <Column start={[1, 1]} width={[3, 3]}>
          <Box sx={{ ...sx.group }}>
            <Box sx={sx.label}>Over-crediting evergreen</Box>
            <Box sx={sx.valueBig}>{format('.1f')(45.5)}%</Box>
            <Box sx={sx.valueSmall}>
              ({format('.1f')(39.1) + '-' + format('.1f')(52.3)}
              %)
            </Box>
          </Box>
        </Column>
        <Column start={[4, 4]} width={[3, 3]}>
          <Box sx={{ ...sx.group }}>
            <Box sx={sx.label}>Over-crediting deciduous</Box>
            <Box sx={sx.valueBig}>{format('.3~s')(16.1)}%</Box>
            <Box sx={sx.valueSmall}>
              ({format('.3~s')(10.7)}-{format('.3~s')(19.7)}%)
            </Box>
          </Box>
        </Column>
      </Row>
      <Row columns={[6, 6]} sx={{ mt: [4] }}>
        <Column start={[1, 1]} width={[3, 3]}>
          <Box sx={{ ...sx.group }}>
            <Box sx={{ ...sx.label, pb: [1] }}>Components</Box>
            <Box sx={{ ...sx.valueSmall, mt: [2] }}>
              Carbon: +{format('.3~s')(275)}{' '}
              <Box as='span' sx={sx.units}>
                t CO₂ / ha
              </Box>
            </Box>
          </Box>
          <Box sx={{ ...sx.group, border: 'none' }}>
            <Box sx={{ ...sx.valueSmall, mt: [2] }}>
              Albedo: -{format('.3~s')(125)}{' '}
              <Box as='span' sx={sx.units}>
                t CO₂ / ha
              </Box>
            </Box>
          </Box>
          <Box sx={{ ...sx.group, border: 'none' }}>
            <Box sx={{ ...sx.valueSmall, mt: [2] }}>
              Net: +{format('.3~s')(150)}{' '}
              <Box as='span' sx={sx.units}>
                t CO₂ / ha
              </Box>
            </Box>
          </Box>
        </Column>
        <Column start={[4, 4]} width={[3, 3]}>
          <Box sx={{ ...sx.group }}>
            <Box sx={{ ...sx.label, pb: [1] }}>Components</Box>
            <Box sx={{ ...sx.valueSmall, mt: [2] }}>
              Carbon: +{format('.3~s')(275)}{' '}
              <Box as='span' sx={sx.units}>
                t CO₂ / ha
              </Box>
            </Box>
          </Box>
          <Box sx={{ ...sx.group, border: 'none' }}>
            <Box sx={{ ...sx.valueSmall, mt: [2] }}>
              Albedo: -{format('.3~s')(44)}{' '}
              <Box as='span' sx={sx.units}>
                t CO₂ / ha
              </Box>
            </Box>
          </Box>
          <Box sx={{ ...sx.group, border: 'none' }}>
            <Box sx={{ ...sx.valueSmall, mt: [2] }}>
              Net: +{format('.3~s')(231)}{' '}
              <Box as='span' sx={sx.units}>
                t CO₂ / ha
              </Box>
            </Box>
          </Box>
        </Column>
      </Row>
    </Box>
  )
}

export default SummaryResults
