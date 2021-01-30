import { useEffect, useState } from 'react'
import { Vega } from 'react-vega'
import { useThemeUI, Box } from 'theme-ui'
var vegaLite = require('vega-lite')

const Donut = ({ params }) => {
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
        innerRadius: 35,
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
      value: params.results['Capital Recovery [$/tCO2eq Net Removed]'],
      fraction:
        params.results['Capital Recovery [$/tCO2eq Net Removed]'] /
        params.results['Total Cost [$/tCO2 Net Removed]'],
    },
    {
      category: 'FIXED O&M',
      opacity: 0.7,
      value: params.results['Fixed O&M [$/tCO2eq Net Removed]'],
      fraction:
        params.results['Fixed O&M [$/tCO2eq Net Removed]'] /
        params.results['Total Cost [$/tCO2 Net Removed]'],
    },
    {
      category: 'VARIABLE O&M',
      opacity: 0.4,
      value: params.results['Variable O&M [$/tCO2eq Net Removed]'],
      fraction:
        params.results['Variable O&M [$/tCO2eq Net Removed]'] /
        params.results['Total Cost [$/tCO2 Net Removed]'],
    },
  ]

  if (params.results['Natural Gas Cost [$/tCO2 Net Removed]'] > 0) {
    values.push({
      category: 'NATURAL GAS',
      opacity: 0.2,
      value: params.results['Natural Gas Cost [$/tCO2 Net Removed]'],
      fraction:
        params.results['Natural Gas Cost [$/tCO2 Net Removed]'] /
        params.results['Total Cost [$/tCO2 Net Removed]'],
    })
  }

  const width = 200
  const height = 200

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
