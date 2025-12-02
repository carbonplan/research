import { Box } from 'theme-ui'
import { format } from 'd3-format'
import {
  Chart,
  Ticks,
  TickLabels,
  Axis,
  AxisLabel,
  Bar,
  Plot,
  Line,
  Label,
  Grid,
} from '@carbonplan/charts'

const data = {
  2009: 2605227,
  2010: 4991786,
  2011: 7670460,
  2012: 11857529,
  2013: 8307486,
  2014: 5508923,
  2015: 5264806,
  2016: 3310261,
  2017: 3071090,
  2018: 5971540,
  2019: 9604842,
  2020: 19355331,
  2021: 43046942,
  2022: 33783221,
  2023: 37728043,
  2024: 15870432,
  2025: 6077005,
}

const counts = Object.keys(data).map((k) => [parseInt(k), data[k]])

const Issuances = () => {
  const formatter = format('~s')

  return (
    <Box sx={{ width: '100%', height: ['275px', '350px', '350px', '350px'] }}>
      <Chart x={[2008, 2026]} y={[0, 40000000]} padding={{ left: 60 }}>
        <Ticks left />
        <Ticks
          bottom
          count={10}
          sx={{ display: ['none', 'inherit', 'inherit', 'inherit'] }}
        />
        <Ticks
          bottom
          count={5}
          sx={{ display: ['inherit', 'none', 'none', 'none'] }}
        />
        <TickLabels left format={formatter} />
        <TickLabels
          bottom
          count={10}
          sx={{ display: ['none', 'inherit', 'inherit', 'inherit'] }}
        />
        <TickLabels
          bottom
          count={5}
          sx={{ display: ['inherit', 'none', 'none', 'none'] }}
        />
        <Axis left bottom />
        <Grid
          vertical
          count={10}
          sx={{ display: ['none', 'inherit', 'inherit', 'inherit'] }}
        />
        <Grid
          vertical
          count={5}
          sx={{ display: ['inherit', 'none', 'none', 'none'] }}
        />
        <AxisLabel left align='left'>
          Credits
        </AxisLabel>
        <AxisLabel bottom>Issuance year</AxisLabel>
        <Plot>
          <defs>
            <pattern
              id={`hatch-pattern`}
              patternUnits='userSpaceOnUse'
              width={1}
              height={1}
              patternTransform={'rotate(35)'}
            >
              <Box
                as='line'
                x1='0'
                y1='0'
                x2='0'
                y2='1'
                sx={{
                  stroke: 'blue',
                  strokeWidth: 1,
                }}
              />
            </pattern>
          </defs>
          <Bar
            width={0.7}
            data={counts}
            color={counts.map((c, i) =>
              i === counts.length - 1 ? 'url(#hatch-pattern)' : 'blue'
            )}
          />
          <Line
            data={[
              [2019.5, 10],
              [2019.5, 40000000],
            ]}
            color={'secondary'}
            sx={{ strokeWidth: 1, strokeDasharray: 4 }}
          />
        </Plot>
        <Label
          x={2019.5}
          y={40000000}
          sx={{ color: 'secondary', mr: 2 }}
          align='right'
        >
          Hydropower Ban
        </Label>
      </Chart>
    </Box>
  )
}

export default Issuances
