import { useEffect, useState, useRef } from 'react'
import { Vega } from 'react-vega'
import { useThemeUI, Box } from 'theme-ui'
var vegaLite = require('vega-lite')

const Donut = ({ results, initWidth, innerRadius }) => {
  const [spec, setSpec] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [width, setWidth] = useState(null)
  const context = useThemeUI()
  const container = useRef(null)
  const theme = context.theme

  const updateWidth = (node) => {
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
    updateWidth(container)
  }, [container.current])

  useEffect(() => {
    let id = null
    const listener = () => {
      clearTimeout(id)
      id = setTimeout(() => {
        updateWidth(container)
      }, 150)
    }
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('resize', listener)
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
        color: {
          field: 'color',
          type: 'quantitative',
          scale: { domain: [0, 1], range: [theme.colors.secondary, theme.colors.purple] },
          legend: null,
        }
      },
    }

    setSpec(vegaLite.compile(spec, { config: config }).spec)
    setLoaded(true)
  }, [context, width])

  const disabled = results['Total Cost [$/tCO2]'] === 'N/A'

  const values = [
    {
      category: 'CAPITAL RECOVERY',
      index: disabled ? 1 : 0,
      color: disabled ? 0 : 1,
      value: results['Capital Recovery [$/tCO2eq]'],
      fraction: disabled ? 1 :
        results['Capital Recovery [$/tCO2eq]'] / results['Total Cost [$/tCO2]'],
    },
    {
      category: 'FIXED O&M',
      index: 1,
      color: 1,
      value: results['Fixed O&M [$/tCO2eq]'],
      fraction: disabled ? 0 :
        results['Fixed O&M [$/tCO2eq]'] / results['Total Cost [$/tCO2]'],
    },
    {
      category: 'VARIABLE O&M',
      index: 3,
      color: 1,
      value: results['Variable O&M [$/tCO2eq]'],
      fraction: disabled ? 0 :
        results['Variable O&M [$/tCO2eq]'] / results['Total Cost [$/tCO2]'],
    },
  ]

  if (results['Natural Gas Cost [$/tCO2]'] > 0) {
    values.push({
      category: 'NATURAL GAS',
      index: 2,
      color: 1,
      value: results['Natural Gas Cost [$/tCO2]'],
      fraction: disabled ? 0 :
        results['Natural Gas Cost [$/tCO2]'] / results['Total Cost [$/tCO2]'],
    })
  }

  const height = width

  return (
    <Box ref={container} sx={{ width: '100%' }}>
      {loaded && width && (
        <Vega
          width={width}
          height={height}
          data={{ values: values }}
          renderer={'svg'}
          actions={false}
          spec={spec}
        />
      )}
      {(!loaded || !width) && <Box sx={{ height: height + 14 }}></Box>}
    </Box>
  )
}

export default Donut
