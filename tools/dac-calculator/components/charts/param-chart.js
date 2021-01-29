import { useEffect, useState } from 'react'
import { Vega } from 'react-vega'
import { useThemeUI, Box } from 'theme-ui'

var vegaLite = require('vega-lite')

const ParamChart = ({ param, data }) => {
  const [spec, setSpec] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [width, setWidth] = useState(380)
  const [barWidth, setBarWidth] = useState(15)
  const context = useThemeUI()
  const theme = context.theme

  useEffect(() => {
    if (document.body.clientWidth < 420) {
      setWidth(280)
      setBarWidth(10)
    }
  }, [])

  useEffect(() => {
    const config = {
      background: null,
      padding: { left: 0, right: 0, top: 0, bottom: 0 },
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
            domain: [0, 1000],
            padding: 0,
            nice: false,
          },
          axis: {
            title: null,
            orient: 'right',
            padding: 0,
            offset: 5,
            format: '0f',
          },
        },
        opacity: {
          field: 'c',
          type: 'nominal',
          legend: null,
        },
      },
    }
    setSpec(vegaLite.compile(spec, { config: config }).spec)
    setLoaded(true)
  }, [context, param])

  const height = param.chartHeight

  return (
    <>
      {loaded && (
        <Vega
          width={width}
          height={height}
          data={{ values: data }}
          renderer={'svg'}
          actions={false}
          spec={spec}
        />
      )}
      {!loaded && <Box sx={{ height: height + 41 }}></Box>}
    </>
  )
}

export default ParamChart
