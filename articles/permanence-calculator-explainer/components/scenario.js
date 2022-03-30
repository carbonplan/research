import { Box, Divider } from 'theme-ui'
import { scaleLinear } from 'd3-scale'
import { line } from 'd3-shape'
import { Figure, Row, Column } from '@carbonplan/components'

const Scenario = ({
  projectDuration,
  switchingTime,
  discountRate,
  projectRisk,
  temporaryCost,
  permanentCost,
  netPresentValue,
  netPresentValueError,
  showSparklines,
}) => {
  const sx = {
    label: {
      fontFamily: 'heading',
      letterSpacing: 'smallcaps',
      textTransform: 'uppercase',
      fontSize: [1, 2, 2, 3],
    },
    number: {
      fontFamily: 'mono',
      letterSpacing: 'mono',
      fontSize: [3, 3, 5, 6],
      color: 'pink',
    },
    units: {
      display: ['block', 'block', 'inline-block', 'inline-block'],
      fontFamily: 'faux',
      letterSpacing: 'faux',
      fontSize: [2, 2, 2, 3],
      color: 'secondary',
      ml: [0, 0, 2],
    },
    group: {
      borderStyle: 'solid',
      borderWidth: '0px',
      borderTopWidth: '1px',
      borderColor: 'muted',
      pt: [3],
      pb: [3],
    },
  }

  const isNumber = (value) => {
    if (value == 'N/A') return false
    return true
  }

  const Sparkline = ({ scales, values }) => {
    const width = 100
    const height = 63
    const x = scaleLinear().domain(scales.x).range([0, width])
    const y = scaleLinear().domain(scales.y).range([height, 0])
    var path = line()
      .x(function (d) {
        return x(d[0])
      })
      .y(function (d) {
        return y(d[1])
      })
    const years = [0, 20, 40, 60, 80, 100]
    const points = values.map((d, i) => [years[i], d])
    return (
      <svg width='100%' viewBox={`0 0 100 ${height}`} height={height}>
        <Box
          as='path'
          sx={{
            stroke: 'pink',
            fill: 'none',
            strokeWidth: '2px',
            vectorEffect: 'non-scaling-stroke',
          }}
          d={path(points)}
        ></Box>
      </svg>
    )
  }

  return (
    <Figure>
      <Row columns={[6]}>
        <Column start={[1]} width={[3]}>
          <Row columns={[2]}>
            <Box sx={sx.group}>
              <Box sx={sx.label}>Duration</Box>
              <Box sx={sx.number}>
                {projectDuration}
                <Box sx={sx.units}>years</Box>
              </Box>
            </Box>
            <Box sx={sx.group}>
              <Box sx={sx.label}>Discount</Box>
              <Box sx={sx.number}>{discountRate}%</Box>
            </Box>
          </Row>
        </Column>
        <Column start={[4]} width={[3]} sx={sx.group}>
          <Row columns={[3]}>
            <Column start={[1]} width={[2]}>
              <Box sx={sx.label}>Temporary cost</Box>
              <Box sx={sx.number}>
                ${temporaryCost[0]}
                <Box sx={sx.units}>per tCO₂</Box>
              </Box>
            </Column>
            {showSparklines && (
              <Column start={[3]} width={[1]}>
                <Sparkline
                  scales={{ x: [0, 100], y: [0, 100] }}
                  values={temporaryCost}
                />
              </Column>
            )}
          </Row>
        </Column>
      </Row>
      <Row columns={[6]}>
        <Column start={[1]} width={[3]}>
          <Row columns={[2]}>
            <Box sx={sx.group}>
              <Box sx={sx.label}>Switch</Box>
              <Box sx={sx.number}>
                {switchingTime}
                {isNumber(switchingTime) && <Box sx={sx.units}>years</Box>}
              </Box>
            </Box>
            <Box sx={sx.group}>
              <Box sx={sx.label}>Risk</Box>
              <Box sx={sx.number}>{projectRisk}%</Box>
            </Box>
          </Row>
        </Column>
        <Column start={[4]} width={[3]} sx={sx.group}>
          <Row columns={[3]}>
            <Column start={[1]} width={[2]}>
              <Box sx={sx.label}>Permanent cost</Box>
              <Box sx={sx.number}>
                {isNumber(permanentCost[5]) && '$'}
                {permanentCost[5]}
                {isNumber(permanentCost[5]) && (
                  <Box sx={sx.units}>per tCO₂</Box>
                )}
              </Box>
            </Column>
            {showSparklines && (
              <Column start={[3]} width={[1]}>
                <Sparkline
                  scales={{ x: [0, 100], y: [0, 1000] }}
                  values={permanentCost}
                />
              </Column>
            )}
          </Row>
        </Column>
      </Row>
      <Row columns={[6]} sx={{ ...sx.group, ...{ pb: [2], pt: [2] } }}>
        <Column start={[1]} width={[3]}>
          <Box sx={{ ...sx.label, ...{ mt: ['12px'] } }}>Net present value</Box>
        </Column>
        <Column start={[4]} width={[3]}>
          <Box sx={{ ...sx.number, ...{ fontSize: [5, 5, 6] } }}>
            ${netPresentValue.toFixed(0)}
            {netPresentValueError && (
              <>
                <Box
                  sx={{
                    display: 'inline-block',
                    mx: [2],
                  }}
                >
                  ±
                </Box>
                {netPresentValueError}
              </>
            )}
            <Box sx={sx.units}>per tCO₂</Box>
          </Box>
        </Column>
      </Row>
      <Divider sx={{ width: ['100%'] }} />
    </Figure>
  )
}

export default Scenario
