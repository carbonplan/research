import { useEffect, useState, useRef } from 'react'
import { Vega } from 'react-vega'
import { useThemeUI, Box } from 'theme-ui'
var vegaLite = require('vega-lite')

const Donut = ({ params }) => {
  const [spec, setSpec] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const { theme } = useThemeUI()
  const { secondary, purple } = theme.rawColors
  const cost = params.results['Total Cost [$/tCO2 Net Removed]']

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
        innerRadius: 45,
        color: theme.colors.purple,
      },
      encoding: {
        theta: {
          field: 'fraction',
          type: 'quantitative',
          scale: { domain: [0, 1] },
        },
        fillOpacity: {
          field: 'index',
          type: 'quantitative',
          scale: { domain: [0, 3], range: [0.3, 0.9] },
          legend: null,
        },
        color: {
          field: 'color',
          type: 'quantitative',
          scale: {
            domain: [0, 1],
            range: [secondary, purple],
          },
          legend: null,
        },
      },
    }

    setSpec(vegaLite.compile(spec, { config: config }).spec)
    setLoaded(true)
  }, [theme])

  const values = [
    {
      category: 'CAPITAL RECOVERY',
      index: cost < 0 ? 1 : 0,
      color: cost < 0 ? 0 : 1,
      value: params.results['Capital Recovery [$/tCO2eq Net Removed]'],
      fraction:
        cost < 0
          ? 1
          : params.results['Capital Recovery [$/tCO2eq Net Removed]'] /
            params.results['Total Cost [$/tCO2 Net Removed]'],
    },
    {
      category: 'FIXED O&M',
      index: cost < 0 ? 1 : 1,
      color: cost < 0 ? 0 : 1,
      value: params.results['Fixed O&M [$/tCO2eq Net Removed]'],
      fraction:
        cost < 0
          ? 0
          : params.results['Fixed O&M [$/tCO2eq Net Removed]'] /
            params.results['Total Cost [$/tCO2 Net Removed]'],
    },
    {
      category: 'VARIABLE O&M',
      index: cost < 0 ? 1 : 3,
      color: cost < 0 ? 0 : 1,
      value: params.results['Variable O&M [$/tCO2eq Net Removed]'],
      fraction:
        cost < 0
          ? 0
          : params.results['Variable O&M [$/tCO2eq Net Removed]'] /
            params.results['Total Cost [$/tCO2 Net Removed]'],
    },
  ]

  if (params.results['Natural Gas Cost [$/tCO2 Net Removed]'] > 0) {
    values.push({
      category: 'NATURAL GAS',
      index: cost < 0 ? 1 : 2,
      color: cost < 0 ? 0 : 1,
      value: params.results['Natural Gas Cost [$/tCO2 Net Removed]'],
      fraction:
        cost < 0
          ? 0
          : params.results['Natural Gas Cost [$/tCO2 Net Removed]'] /
            params.results['Total Cost [$/tCO2 Net Removed]'],
    })
  }

  const width = 200
  const height = 200

  return (
    <Box>
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
    </Box>
  )
}

export default Donut
