import { Box } from 'theme-ui'
import {
  Chart,
  Plot,
  Ticks,
  TickLabels,
  Axis,
  AxisLabel,
  Line,
  Label,
} from '@carbonplan/charts'
import { curveMonotoneX } from 'd3-shape'

const data = {
  offset: [
    { y: 2000.0, x: 0.0 },
    { y: 2005.0, x: 0.0 },
    { y: 2010.0, x: 0.0 },
    { y: 2015.0, x: 0.0 },
    { y: 2020.0, x: 0.0 },
    { y: 2025.0, x: -0.001985 },
    { y: 2030.0, x: -0.002389 },
    { y: 2035.0, x: -0.000123 },
    { y: 2040.0, x: 0.000443 },
    { y: 2045.0, x: 0.0005 },
    { y: 2050.0, x: 0.000474 },
    { y: 2055.0, x: 0.000441 },
    { y: 2060.0, x: 0.000414 },
    { y: 2065.0, x: 0.000392 },
    { y: 2070.0, x: 0.000376 },
    { y: 2075.0, x: 0.000364 },
    { y: 2080.0, x: 0.000355 },
    { y: 2085.0, x: 0.000349 },
    { y: 2090.0, x: 0.000345 },
    { y: 2095.0, x: 0.000343 },
    { y: 2100.0, x: 0.000342 },
    { y: 2105.0, x: 0.000342 },
    { y: 2110.0, x: 0.000342 },
    { y: 2115.0, x: 0.000343 },
    { y: 2120.0, x: 0.000343 },
  ],
  baseline: [
    { y: 2000.0, x: 0.0 },
    { y: 2005.0, x: 0.0 },
    { y: 2010.0, x: 0.0 },
    { y: 2015.0, x: 0.0 },
    { y: 2020.0, x: 0.0 },
    { y: 2025.0, x: 0.0 },
    { y: 2030.0, x: 0.0 },
    { y: 2035.0, x: 0.0 },
    { y: 2040.0, x: 0.0 },
    { y: 2045.0, x: 0.0 },
    { y: 2050.0, x: 0.0 },
    { y: 2055.0, x: 0.0 },
    { y: 2060.0, x: 0.0 },
    { y: 2065.0, x: 0.0 },
    { y: 2070.0, x: 0.0 },
    { y: 2075.0, x: 0.0 },
    { y: 2080.0, x: 0.0 },
    { y: 2085.0, x: 0.0 },
    { y: 2090.0, x: 0.0 },
    { y: 2095.0, x: 0.0 },
    { y: 2100.0, x: 0.0 },
    { y: 2105.0, x: 0.0 },
    { y: 2110.0, x: 0.0 },
    { y: 2115.0, x: 0.0 },
    { y: 2120.0, x: 0.0 },
  ],
  emission: [
    { y: 2000.0, x: 0.0 },
    { y: 2005.0, x: 0.0 },
    { y: 2010.0, x: 0.0 },
    { y: 2015.0, x: 0.0 },
    { y: 2020.0, x: 0.0 },
    { y: 2025.0, x: 0.000354 },
    { y: 2030.0, x: 0.000426 },
    { y: 2035.0, x: 0.000422 },
    { y: 2040.0, x: 0.000406 },
    { y: 2045.0, x: 0.000391 },
    { y: 2050.0, x: 0.000379 },
    { y: 2055.0, x: 0.00037 },
    { y: 2060.0, x: 0.000363 },
    { y: 2065.0, x: 0.000357 },
    { y: 2070.0, x: 0.000353 },
    { y: 2075.0, x: 0.00035 },
    { y: 2080.0, x: 0.000348 },
    { y: 2085.0, x: 0.000347 },
    { y: 2090.0, x: 0.000348 },
    { y: 2095.0, x: 0.000349 },
    { y: 2100.0, x: 0.00035 },
    { y: 2105.0, x: 0.000352 },
    { y: 2110.0, x: 0.000354 },
    { y: 2115.0, x: 0.000356 },
    { y: 2120.0, x: 0.000357 },
  ],
}
const EquivalenceChart = () => {
  return (
    <Box sx={{ width: '100%', height: '400px' }}>
      <Chart
        x={[2000, 2120]}
        y={[-0.004, 0.001]}
        padding={{ left: 90, top: 50 }}
      >
        <Ticks left bottom />
        <TickLabels left bottom />
        <Axis left bottom />
        <AxisLabel left units='K'>
          Temperature difference
        </AxisLabel>
        <AxisLabel bottom>Year</AxisLabel>
        <Plot>
          <Line
            curve={curveMonotoneX}
            data={data.offset.map(({ x, y }) => [y, x])}
            color={'orange'}
            width={2}
          />
          <Line
            curve={curveMonotoneX}
            data={data.baseline.map(({ x, y }) => [y, x])}
            color={'pink'}
            width={2}
            sx={{ strokeDasharray: '4' }}
          />
          <Line
            curve={curveMonotoneX}
            data={data.emission.map(({ x, y }) => [y, x])}
            color={'yellow'}
            width={2}
          />
        </Plot>
        <Label x={2025} y={0.0022} sx={{ color: 'yellow' }}>
          Emissions
        </Label>
        <Label x={2120} y={-0.00035} sx={{ color: 'pink' }} align='right'>
          Baseline
        </Label>
        <Label x={2025} y={-0.0028} sx={{ color: 'orange' }}>
          Emissions + Offset
        </Label>
      </Chart>
    </Box>
  )
}

export default EquivalenceChart
