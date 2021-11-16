import { Box } from 'theme-ui'
import { Chart, Plot, Donut as DonutComponent } from '@carbonplan/charts'

const Donut = ({ results, maxWidth, center = false }) => {
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
      }}
    >
      <Chart padding={{ left: 0, bottom: 0 }}>
        <Plot square>
          <DonutComponent
            data={values}
            innerRadius={0.26}
            color={disabled ? 'gray' : 'purple'}
          />
        </Plot>
      </Chart>
    </Box>
  )
}

export default Donut
