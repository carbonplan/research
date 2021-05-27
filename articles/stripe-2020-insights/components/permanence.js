import { useState, useEffect, useRef } from 'react'
import { Box, Text } from 'theme-ui'
import { useThemeUI } from 'theme-ui'
import { Vega } from 'react-vega'
import data from '../data'
var vegaLite = require('vega-lite')

const tags = {
  mineralization: 'grey',
  soil: 'orange',
  biomass: 'yellow',
  forests: 'green',
  ocean: 'teal',
  dac: 'purple',
}

export const config = (theme) => {
  return {
    background: null,
    padding: { left: 74, right: 0, top: 30, bottom: 50 },
    axis: {
      grid: false,
      labelFontSize: theme.fontSizes[1],
      labelFont: theme.fonts.mono,
      labelColor: theme.colors.text,
      titleFont: theme.fonts.mono,
      titleFontSize: theme.fontSizes[1],
      titleLetterSpacing: theme.letterSpacings.mono,
      titleColor: theme.colors.text,
      domain: true,
      tickOffset: 0,
      labelPadding: 5,
      titlePadding: 10,
    },
    view: {
      stroke: 'none',
    },
    line: {
      strokeWidth: 5,
      color: theme.colors.text,
    },
    autosize: 'none',
  }
}

const Permanence = () => {
  const { projects } = data
  const context = useThemeUI()
  const container = useRef(null)
  const [width, setWidth] = useState(450)
  const theme = context.theme

  useEffect(() => {
    let id = null

    const listener = () => {
      clearTimeout(id)
      id = setTimeout(() => {
        if (container.current.offsetWidth > 0) {
          setWidth(container.current.offsetWidth)
        }
      }, 150)
    }

    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [theme])

  useEffect(() => {
    if (container.current.offsetWidth > 0) {
      setWidth(container.current.offsetWidth)
    }
  }, [container])

  var values = []
  let opacity
  for (var i = 0; i < projects.length; i++) {
    values.push({
      permanence: parseFloat(
        projects[i].metrics.filter((m) => m.name == 'permanence')[0].value
      ),
      cost: parseFloat(
        projects[i].metrics.filter((m) => m.name == 'cost')[0].value
      ),
      group: projects[i].tags[0],
      color: theme.colors[tags[projects[i].tags[0]]],
      name: projects[i].name,
      id: projects[i].id,
      opacity: 1,
    })
  }

  const spec = {
    data: {
      name: 'values',
    },
    mark: {
      type: 'circle',
      size: 200,
    },
    encoding: {
      y: {
        field: 'cost',
        type: 'quantitative',
        axis: { title: 'PRICE $/tCO₂', tickCount: 3 },
        scale: { type: 'log', domain: [2, 2000], nice: false },
      },
      x: {
        field: 'permanence',
        type: 'quantitative',
        axis: { title: 'PERMANENCE years', tickCount: 3 },
        scale: { type: 'log', domain: [0.6, 2000], nice: false },
      },
      color: {
        field: 'color',
        type: 'nominal',
        scale: null,
      },
      stroke: {
        field: 'color',
        type: 'nominal',
        scale: null,
      },
      opacity: {
        field: 'opacity',
        type: 'quantitative',
        scale: null,
      },
    },
  }

  var vgSpec = vegaLite.compile(spec, { config: config(theme) }).spec

  const height = 250

  return (
    <Box as='figure' ref={container} sx={{}}>
      <Vega
        width={width * 0.8 - 58}
        height={height}
        data={{ values: values }}
        renderer={'svg'}
        actions={false}
        spec={vgSpec}
      />
    </Box>
  )
}

export default Permanence
