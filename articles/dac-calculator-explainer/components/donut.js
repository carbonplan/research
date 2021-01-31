import { useEffect, useState, useCallback } from 'react'
import { Vega } from 'react-vega'
import { useThemeUI, Box } from 'theme-ui'
var vegaLite = require('vega-lite')

const Donut = ({ results, initWidth, innerRadius }) => {
  const [spec, setSpec] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [width, setWidth] = useState(initWidth || 125)
  const context = useThemeUI()
  const theme = context.theme

  const updateWidth = (node) => {
    const newWidth = node.offsetWidth * 0.85
    if (newWidth < width) {
      setWidth(newWidth)
    }
  }

  const container = useCallback((node) => {
    if (node) {
      updateWidth(node)
      let id = null
      const listener = () => {
        clearTimeout(id)
        id = setTimeout(() => {
          updateWidth(node)
        }, 150)
      }
      window.addEventListener('resize', listener)
    }
  }, [])

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
        innerRadius: width * 0.2333,
        color: theme.colors.purple,
      },
      encoding: {
        theta: {
          field: 'fraction',
          type: 'quantitative',
          scale: { domain: [0, 1] },
        },
        opacity: {
          field: 'index',
          type: 'quantitative',
          scale: { domain: [0, 3], range: [0.3, 0.9] },
          legend: null,
        },
      },
    }

    setSpec(vegaLite.compile(spec, { config: config }).spec)
    setLoaded(true)
  }, [context, width])

  const values = [
    {
      category: 'CAPITAL RECOVERY',
      index: 0,
      value: results['Capital Recovery [$/tCO2eq]'],
      fraction:
        results['Capital Recovery [$/tCO2eq]'] / results['Total Cost [$/tCO2]'],
    },
    {
      category: 'FIXED O&M',
      index: 1,
      value: results['Fixed O&M [$/tCO2eq]'],
      fraction:
        results['Fixed O&M [$/tCO2eq]'] / results['Total Cost [$/tCO2]'],
    },
    {
      category: 'VARIABLE O&M',
      index: 3,
      value: results['Variable O&M [$/tCO2eq]'],
      fraction:
        results['Variable O&M [$/tCO2eq]'] / results['Total Cost [$/tCO2]'],
    },
  ]

  if (results['Natural Gas Cost [$/tCO2]'] > 0) {
    values.push({
      category: 'NATURAL GAS',
      index: 2,
      value: results['Natural Gas Cost [$/tCO2]'],
      fraction:
        results['Natural Gas Cost [$/tCO2]'] / results['Total Cost [$/tCO2]'],
    })
  }

  const height = width

  return (
    <>
      {loaded && (
        <Box ref={container} sx={{ width: '100%' }}>
          <Vega
            width={width}
            height={height}
            data={{ values: values }}
            renderer={'svg'}
            actions={false}
            spec={spec}
          />
        </Box>
      )}
      {!loaded && <Box sx={{ height: height + 14 }}></Box>}
    </>
  )
}

export default Donut
