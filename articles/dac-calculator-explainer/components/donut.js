import { useEffect, useState } from 'react'
import { Vega } from 'react-vega'
import { useThemeUI, Box } from 'theme-ui'
var vegaLite = require('vega-lite')

const Donut = ({ results }) => {
  const [spec, setSpec] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const context = useThemeUI()
  const theme = context.theme

  useEffect(() => {
    const config = {
      background: null,
      cursor: 'pointer',
      view: {
        stroke: null,
      },
    }

    const spec = {
      data: {
        name: 'values',
      },
      mark: {
        type: 'arc',
        innerRadius: 29,
        color: theme.colors.purple,
      },
      encoding: {
        theta: {
          field: 'fraction',
          type: 'quantitative',
          scale: { domain: [0, 1] },
        },
        opacity: {
          field: 'category',
          type: 'nominal',
          // scale: { domain: [0, 1] },
          legend: null,
        },
      },
    }

    setSpec(vegaLite.compile(spec, { config: config }).spec)
    setLoaded(true)
  }, [context])

  const values = [
    {
      category: 'CAPITAL RECOVERY',
      opacity: 1.0,
      value: results['Capital Recovery [$/tCO2eq]'],
      fraction:
        results['Capital Recovery [$/tCO2eq]'] / results['Total Cost [$/tCO2]'],
    },
    {
      category: 'FIXED O&M',
      opacity: 0.7,
      value: results['Fixed O&M [$/tCO2eq]'],
      fraction:
        results['Fixed O&M [$/tCO2eq]'] / results['Total Cost [$/tCO2]'],
    },
    {
      category: 'VARIABLE O&M',
      opacity: 0.4,
      value: results['Variable O&M [$/tCO2eq]'],
      fraction:
        results['Variable O&M [$/tCO2eq]'] / results['Total Cost [$/tCO2]'],
    },
  ]

  if (results['Natural Gas Cost [$/tCO2]'] > 0) {
    values.push({
      category: 'NATURAL GAS',
      opacity: 0.2,
      value: results['Natural Gas Cost [$/tCO2]'],
      fraction:
        results['Natural Gas Cost [$/tCO2]'] / results['Total Cost [$/tCO2]'],
    })
  }

  const width = 125
  const height = 125

  return (
    <>
      {loaded && (
        <Vega
          width={width}
          height={height}
          data={{ values: values }}
          renderer={'svg'}
          actions={false}
          spec={spec}
        />
      )}
      {!loaded && <Box sx={{ height: height + 14 }}></Box>}
    </>
  )
}

export default Donut
