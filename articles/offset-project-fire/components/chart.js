import { Box } from 'theme-ui'
import {
  Chart as ChartComponent,
  Axis,
  Ticks,
  TickLabels,
  AxisLabel,
  Plot,
  Line,
} from '@carbonplan/charts'

const YEAR_TICKS = [2020, 2030, 2040, 2050, 2060, 2070, 2080, 2090, 2100]
const Chart = ({ data }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: ['250px', '275px', '300px', '400px'],
        my: [4, 4, 4, 5],
      }}
    >
      <ChartComponent x={[2018, 2103]} y={[0, 1.1]}>
        <Ticks bottom values={YEAR_TICKS} />
        <TickLabels bottom values={YEAR_TICKS} />
        <AxisLabel align='center' bottom>
          Year
        </AxisLabel>

        <Ticks left />
        <TickLabels left />
        <AxisLabel align='center' left>
          Fraction buffer pool
        </AxisLabel>

        <Axis bottom left />
        <Plot>
          {data &&
            data.map((line, i) => <Line key={i} data={line} color='red' />)}
          <Line
            color='gray'
            sx={{ 'stroke-dasharray': '8 4' }}
            data={[
              [2018, 0.2],
              [2103, 0.2],
            ]}
          />
        </Plot>
      </ChartComponent>
    </Box>
  )
}

export default Chart
