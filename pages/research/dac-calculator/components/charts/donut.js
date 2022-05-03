import { Box } from 'theme-ui'
import { Chart, Plot, Donut } from '@carbonplan/charts'

const DonutChart = ({ results }) => {
  const cost = results['Total Cost [$/tCO2 Net Removed]']

  const values = []
  if (cost < 0) {
    values.push(1)
  } else {
    values.push(
      results['Capital Recovery [$/tCO2eq Net Removed]'],
      results['Fixed O&M [$/tCO2eq Net Removed]'],
      results['Variable O&M [$/tCO2eq Net Removed]']
    )
    if (results['Natural Gas Cost [$/tCO2 Net Removed]'] > 0) {
      values.push(results['Natural Gas Cost [$/tCO2 Net Removed]'])
    }
  }

  return (
    <Box sx={{ width: 200, height: 200, mt: '4px', ml: '5px', mb: '10px' }}>
      <Chart padding={{ left: 0, bottom: 0 }}>
        <Plot square>
          <Donut
            data={values}
            innerRadius={0.225}
            color={cost < 0 ? 'gray' : 'purple'}
          />
        </Plot>
      </Chart>
    </Box>
  )
}

export default DonutChart
