import { useEffect, useState } from 'react'
import { Vega } from 'react-vega'
import { useThemeUI, Box } from 'theme-ui'

var vegaLite = require('vega-lite')

const Chart = ({ data }) => {
  const [spec, setSpec] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const context = useThemeUI()
  const theme = context.theme

  useEffect(() => {
    const config = {
      background: null,
      padding: { left: 0, right: 0, top: 0, bottom: 0 },
      axis: {
        grid: false,
        labelFontSize: theme.fontSizes[1],
        labelFont: theme.fonts.monospace,
        labelColor: theme.colors.text,
        titleFont: theme.fonts.monospace,
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
      layer: [
        {
          data: {
            name: 'data',
          },
          mark: {
            type: 'line',
            color: theme.colors.red,
            clip: true,
          },
          encoding: {
            x: {
              field: 'x',
              type: 'quantitative',
              scale: {
                domain: [2018, 2103],
                nice: false,
                padding: 0,
              },
              axis: {
                title: 'YEAR',
                offset: 6,
                format: '.0f',
                values: [2020, 2030, 2040, 2050, 2060, 2070, 2080, 2090, 2100],
              },
            },
            y: {
              field: 'y',
              aggregate: 'sum',
              type: 'quantitative',
              scale: {
                domain: [0, 1.1],
                padding: 0,
                nice: false,
              },
              axis: {
                title: 'FRACTION BUFFER POOL',
                orient: 'left',
                padding: 0,
                offset: 5,
              },
            },
            opacity: {
              field: 'i',
              type: 'quantitative',
              scale: null,
              legend: null,
            },
          },
        },
        {
          mark: {
            type: 'rule',
            color: theme.colors.secondary,
            strokeDash: [8, 4],
          },
          data: {
            values: { y: 0.2 },
          },
          encoding: {
            y: {
              field: 'y',
              type: 'quantitative',
              scale: {
                domain: [0, 1.1],
                padding: 0,
                nice: false,
              },
            },
          },
        },
      ],
    }
    setSpec(vegaLite.compile(spec, { config: config }).spec)
    setLoaded(true)
  }, [context])

  const width = 550
  const height = 150

  return (
    <>
      {loaded && (
        <Vega
          width={width}
          height={height}
          data={{ data: data }}
          renderer={'svg'}
          actions={false}
          spec={spec}
        />
      )}
      {!loaded && <Box sx={{ height: height + 41 }}></Box>}
    </>
  )
}

export default Chart
