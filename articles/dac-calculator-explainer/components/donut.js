import { Box } from 'theme-ui'
import { Chart, Plot, Donut } from '@carbonplan/charts'

const DonutChart = ({ results, maxWidth, center = false }) => {
  const disabled = results['Total Cost [$/tCO2]'] === 'N/A'

  const values = []

  if (disabled) {
    values.push(1)
  } else {
    values.push(
      results['Capital Recovery [$/tCO2eq]'],
      results['Fixed O&M [$/tCO2eq]'],
      results['Variable O&M [$/tCO2eq]']
    )
    if (results['Natural Gas Cost [$/tCO2]'] > 0) {
      values.push(results['Natural Gas Cost [$/tCO2]'])
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: center ? undefined : maxWidth,
        height: maxWidth,
        ml: center ? undefined : 1,
      }}
    >
      <Chart padding={{ left: 0, bottom: 0 }}>
        <Plot square>
          <Donut
            data={values}
            innerRadius={0.24}
            color={disabled ? 'gray' : 'purple'}
          />
        </Plot>
      </Chart>
    </Box>
  )
}

export default DonutChart
