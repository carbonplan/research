import { Box } from 'theme-ui'
import { Chart, Plot, Donut as DonutComponent } from '@carbonplan/charts'

const Donut = ({ results }) => {
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
    <Box sx={{ width: 200, height: 200 }}>
      <Chart padding={{ left: 0, bottom: 0 }}>
        <Plot square>
          <DonutComponent
            data={values}
            innerRadius={0.26}
            color={cost < 0 ? 'gray' : 'purple'}
          />
        </Plot>
      </Chart>
    </Box>
  )
}

export default Donut
