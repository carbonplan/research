import { Box, Text } from 'theme-ui'
import { useThemeUI } from 'theme-ui'
import { Vega } from 'react-vega'
import data from '../data'
var vegaLite = require('vega-lite')

export const config = (theme) => {
  return {
    background: null,
    cursor: 'pointer',
    padding: { left: 25, right: 0, top: 30, bottom: 50 },
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
      titlePadding: 10
    },
    view: {
      stroke: 'none'
    },
    line: {
      strokeWidth: 5,
      color: theme.colors.text
    },
    autosize: 'none'
  }
}

const Permanence = () => {

  const { projects } = data
  const context = useThemeUI()
  const theme = context.theme

  const Inline = ({ name, display }) => {
    return <Text sx={{ 
      display: 'inline-block', 
      color: theme.tags[name] 
    }}>{ display ? display : name }</Text>
  }

  var values = []
  let opacity
  for (var i = 0; i < projects.length; i++) {
    values.push(
      {
        durability: parseFloat(projects[i].metrics.filter(
          m => (m.name == 'permanence'))[0].value
        ),
        group: projects[i].tags[0],
        color: theme.colors[theme.tags[projects[i].tags[0]]],
        name: projects[i].name,
        id: projects[i].id,
        opacity: 1
      }
    )
  }

  const spec = {
    data: { 
      name: 'values' 
    },
    mark: {
      type: 'circle', 
      size: 200
    },
    encoding: {
      y: { 
        field: 'group', 
        type: 'nominal',
        scale: { 'padding': 1.87 },
        axis: { title: 'CATEGORY', domain: false, labels: false, ticks: false }
      },
      x: {
        field: 'durability', 
        type: 'quantitative', 
        axis: { title: 'PERMANENCE years', tickCount: 3 },
        scale: { type: 'log',  domain: [0.6, 2000], nice: false  },
      },
      color: {
        field: 'color',
        type: 'nominal',
        scale: null

      },
      stroke: {
        field: 'color',
        type: 'nominal',
        scale: null,
      },
      opacity: {
        field: 'opacity',
        type: 'quantitative',
        scale: null
      }
    }
  }

  var vgSpec = vegaLite.compile(spec, { config: config(theme) }).spec

  const width = 600
  const height = 200

  return <Box>
    <Vega width={width} height={height}
    data={{ values: values }} renderer={'svg'} actions={false} spec={vgSpec} />
    <Text sx={{ 
      color: 'secondary', 
      fontSize: [1], 
      fontFamily: 'monospace', 
      mt: [2], 
      mb: [5] 
    }}>
    Figure 1. Each point shows the permanence for a project. 
    Colors represent project categories:{' '}
    <Inline name='forests'/>, <Inline name='soil'/>, <Inline name='biomass'/>,{' '} 
    <Inline name='dac' display='direct air capture'/>, <Inline name='mineralization'/>, 
    and <Inline name='ocean'/>. 
  </Text>
  </Box>
}

export default Permanence
