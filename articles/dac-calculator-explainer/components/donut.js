import { useEffect, useState, useRef } from 'react'
import { Box } from 'theme-ui'
import { Chart, Plot, Donut } from '@carbonplan/charts'

const DonutChart = ({ results, initWidth, sx }) => {
  const [width, setWidth] = useState(null)
  const container = useRef(null)

  const updateWidth = () => {
    if (container.current) {
      const newWidth = container.current.offsetWidth * 0.85
      if (newWidth < initWidth) {
        setWidth(newWidth)
      } else {
        setWidth(initWidth)
      }
    }
  }

  useEffect(() => {
    updateWidth()
  }, [container.current])

  useEffect(() => {
    window.addEventListener('resize', updateWidth)
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

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
    <Box ref={container}>
      <Box
        sx={{
          width,
          height: width,
          ...sx,
        }}
      >
        <Chart padding={{ left: 0, bottom: 0 }}>
          <Plot square>
            <Donut
              data={values}
              innerRadius={0.23}
              color={disabled ? 'gray' : 'purple'}
            />
          </Plot>
        </Chart>
      </Box>
    </Box>
  )
}

export default DonutChart
