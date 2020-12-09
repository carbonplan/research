/** @jsx jsx */
import { jsx, Box, Grid, Text, Divider } from 'theme-ui'
import { scaleLinear } from 'd3-scale'
import { line } from 'd3-shape'

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
      fontFamily: 'body',
      letterSpacing: 'wide',
      textTransform: 'uppercase',
      fontSize: [2, 2, 3],
    },
    number: {
      fontFamily: 'monospace',
      letterSpacing: 'monospace',
      fontSize: [3, 3, 5],
      color: 'pink',
    },
    units: {
      display: ['block', 'block', 'inline-block'],
      fontFamily: 'faux',
      letterSpacing: 'faux',
      fontSize: [2],
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
      <svg width={width} height={height}>
        <path
          sx={{
            stroke: 'pink',
            fill: 'none',
            strokeWidth: 2,
          }}
          d={path(points)}
        ></path>
      </svg>
    )
  }

  return (
    <Box sx={{ my: [5] }}>
      <Grid gap={[0, 0, '36px']} columns={[3, 3, '125px 125px 300px']}>
        <Box sx={sx.group}>
          <Text sx={sx.label}>Duration</Text>
          <Text sx={sx.number}>
            {projectDuration}
            <Text sx={sx.units}>years</Text>
          </Text>
        </Box>
        <Box sx={sx.group}>
          <Text sx={sx.label}>Discount</Text>
          <Text sx={sx.number}>{discountRate}%</Text>
        </Box>
        <Box sx={sx.group}>
          <Grid gap={['0px']} columns={[1, 1, '200px 1fr']}>
            <Box>
              <Text sx={sx.label}>Temporary cost</Text>
              <Text sx={sx.number}>
                ${temporaryCost[0]}
                <Text sx={sx.units}>per tCO₂</Text>
              </Text>
            </Box>
            {showSparklines && (
              <Sparkline
                scales={{ x: [0, 100], y: [0, 100] }}
                values={temporaryCost}
              />
            )}
          </Grid>
        </Box>
      </Grid>
      <Grid gap={[0, 0, '36px']} columns={[3, 3, '125px 125px 300px']}>
        <Box sx={sx.group}>
          <Text sx={sx.label}>Switch</Text>
          <Text sx={sx.number}>
            {switchingTime}
            {isNumber(switchingTime) && <Text sx={sx.units}>years</Text>}
          </Text>
        </Box>
        <Box sx={sx.group}>
          <Text sx={sx.label}>Risk</Text>
          <Text sx={sx.number}>{projectRisk}%</Text>
        </Box>
        <Box sx={sx.group}>
          <Grid gap={['0px']} columns={[1, 1, '200px 1fr']}>
            <Box>
              <Text sx={sx.label}>Permanent cost</Text>
              <Text sx={sx.number}>
                {isNumber(permanentCost[5]) && '$'}
                {permanentCost[5]}
                {isNumber(permanentCost[5]) && (
                  <Text sx={sx.units}>per tCO₂</Text>
                )}
              </Text>
            </Box>
            {showSparklines && (
              <Sparkline
                scales={{ x: [0, 100], y: [0, 1000] }}
                values={permanentCost}
              />
            )}
          </Grid>
        </Box>
      </Grid>
      <Box sx={{ width: ['100%', '100%', '622px'] }}>
        <Grid
          sx={{ ...sx.group, ...{ pb: [2], pt: [2] } }}
          gap={[0, 0, '120px']}
          columns={[1, 1, '200px 1fr']}
        >
          <Text sx={{ ...sx.label, ...{ mt: ['12px'] } }}>
            Net present value
          </Text>
          <Text sx={{ ...sx.number, ...{ fontSize: [5, 5, 6] } }}>
            ${netPresentValue.toFixed(0)}
            {netPresentValueError && (
              <>
                <Text
                  sx={{
                    display: 'inline-block',
                    mx: [2],
                  }}
                >
                  ±
                </Text>
                {netPresentValueError}
              </>
            )}
            <Text sx={sx.units}>per tCO₂</Text>
          </Text>
        </Grid>
      </Box>
      <Divider sx={{ width: ['100%', '100%', '622px'] }} />
    </Box>
  )
}

export default Scenario
