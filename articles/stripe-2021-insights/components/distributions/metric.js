import { Box } from 'theme-ui'
import { mean, max, range } from 'd3-array'
import { format } from 'd3-format'
import { curveBasis } from 'd3-shape'
import { mix } from '@theme-ui/color'
import {
  Chart,
  Grid,
  Ticks,
  TickLabels,
  AxisLabel,
  Plot,
  Circle,
  Line,
} from '@carbonplan/charts'

const categoryToIndex = {
  dac: 0,
  mineralization: 1,
  ocean: 2,
  biomass: 3,
  soil: 4,
  forests: 5,
}

const categoryToColor = {
  dac: 'purple',
  mineralization: 'grey',
  ocean: 'teal',
  biomass: 'yellow',
  soil: 'orange',
  forests: 'green',
}

const categories = [
  'dac',
  'mineralization',
  'ocean',
  'biomass',
  'soil',
  'forests',
]

const Metric = ({
  projects,
  field,
  domain,
  units,
  label,
  bandwidth,
  ticks,
  source,
}) => {
  const clamp = (d) => {
    return Math.min(Math.max(d, domain[0]), domain[1])
  }

  projects = projects.filter((d) => d[field] !== 'N/A')

  return (
    <Chart
      logx
      x={domain}
      y={[-0.5, 5.8]}
      padding={{ left: 0, right: 0, bottom: 50 }}
    >
      <Grid vertical values={ticks} />
      <Ticks bottom values={ticks} />
      <TickLabels bottom values={ticks} format={format('~s')} />
      <AxisLabel bottom>
        {label}&nbsp;
        <Box as='span' sx={{ textTransform: 'none', color: 'secondary' }}>
          {units}
        </Box>
      </AxisLabel>
      <Plot>
        {projects
          .filter((d) => d.source !== source)
          .map((d, i) => {
            return (
              <Circle
                key={i}
                x={d[field]}
                y={categoryToIndex[d.category]}
                color={mix(categoryToColor[d.category], 'background', 0.1)}
              />
            )
          })}
        {projects
          .filter((d) => d.source === source)
          .map((d, i) => {
            return (
              <Circle
                key={i}
                x={d[field]}
                y={categoryToIndex[d.category]}
                color={categoryToColor[d.category]}
              />
            )
          })}
        {categories.map((c, i) => {
          const thresholds = range(
            Math.log10(domain[0]),
            Math.log10(domain[1]) + 0.1,
            0.1
          )
          const subset = projects
            .filter((d) => d.category == c && d.source === source)
            .map((d) => clamp(d[field]))

          if (subset.length === 0) return null

          let density = kde(
            epanechnikov(bandwidth),
            thresholds,
            subset.map((d) => Math.log10(d))
          ).map((d) => [Math.pow(10, d[0]), d[1]])

          const mx = max(density, (d) => d[1])
          density = density.map((d) => [d[0], (0.8 * d[1]) / mx + i])

          return (
            <Line
              key={i}
              data={density}
              color={categoryToColor[c]}
              width={2}
              curve={curveBasis}
            />
          )
        })}
      </Plot>
    </Chart>
  )
}

function kde(kernel, thresholds, data) {
  return thresholds.map((t) => [t, mean(data, (d) => kernel(t - d))])
}

function epanechnikov(bandwidth) {
  return (x) =>
    Math.abs((x /= bandwidth)) <= 1 ? (0.75 * (1 - x * x)) / bandwidth : 0
}

export default Metric
