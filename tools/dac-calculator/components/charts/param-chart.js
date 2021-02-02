import { useEffect, useState, useRef } from 'react'
import { Vega } from 'react-vega'
import { useThemeUI, Box } from 'theme-ui'

var vegaLite = require('vega-lite')

const ParamChart = ({ param, data }) => {
  const [spec, setSpec] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [width, setWidth] = useState(null)
  const [barWidth, setBarWidth] = useState(15)
  const container = useRef(null)
  const { theme } = useThemeUI()

  const updateWidth = (container) => {
    if (container.current) {
      const newWidth = Math.min(380, container.current.offsetWidth * 0.9)
      setWidth(newWidth)
      setBarWidth(newWidth * 0.0392)
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
      padding: { left: 0, right: 10, top: 0, bottom: 0 },
      axis: {
        grid: false,
        labelFontSize: theme.fontSizes[1],
        labelFont: theme.fonts.mono,
        labelColor: theme.colors.text,
        titleFont: theme.fonts.mono,
        titleFontSize: theme.fontSizes[1],
        titleColor: theme.colors.text,
        domain: true,
        tickOffset: 0,
        labelPadding: 5,
        titlePadding: 10,
      },
      view: {
        stroke: 'none',
      },
    }

    const spec = {
      data: {
        name: 'values',
      },
      mark: {
        type: 'bar',
        color: theme.colors.purple,
        width: barWidth,
        clip: true,
      },
      encoding: {
        x: {
          field: 'x',
          type: 'quantitative',
          scale: {
            domain:
              param.scale == 'linear'
                ? [
                    param.validRange[0] -
                      (param.validRange[1] - param.validRange[0]) * 0.04,
                    param.validRange[1] +
                      (param.validRange[1] - param.validRange[0]) * 0.04,
                  ]
                : param.displayRange,
            type: param.scale,
            nice: false,
            padding: 0,
          },
          axis: {
            title: null,
            domainWidth: 0,
            offset: 6,
            labelBound: true,
            labelFlush: false,
            format: '~f',
            labelSeparation: 8,
          },
        },
        y: {
          field: 'y',
          aggregate: 'sum',
          type: 'quantitative',
          scale: {
            domain: [0, 800],
            padding: 0,
            nice: false,
          },
          axis: {
            title: null,
            orient: 'right',
            padding: 0,
            offset: 5,
            format: '$0f',
          },
        },
        opacity: {
          field: 'o',
          type: 'quantitative',
          scale: { domain: [0, 3], range: [0.3, 0.9] },
          legend: null,
        },
        color: {
          field: 'c',
          type: 'quantitative',
          scale: {
            domain: [0, 1],
            range: [theme.colors.secondary, theme.colors.purple],
          },
          legend: null,
        },
      },
    }
    setSpec(vegaLite.compile(spec, { config: config }).spec)
    setLoaded(true)
  }, [theme, param, barWidth])

  const height = param.chartHeight

  return (
    <Box ref={container} sx={{ width: '97%' }}>
      {loaded && width && (
        <Vega
          width={width}
          height={height}
          data={{ values: data }}
          renderer={'svg'}
          actions={false}
          spec={spec}
        />
      )}
      {(!loaded || !width) && <Box sx={{ height: height + 41 }}></Box>}
    </Box>
  )
}

export default ParamChart
