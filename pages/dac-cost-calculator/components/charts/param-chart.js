import { Vega } from 'react-vega'
import { useThemeUI } from 'theme-ui'

var vegaLite = require('vega-lite')

const ParamChart = () => {
  const context = useThemeUI()
  const theme = context.theme

  const donut_config = {
    background: null,
    cursor: 'pointer',
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
  }

  var values = [
    { x: 0, y: 28, c: 0 },
    { x: 1, y: 43, c: 0 },
    { x: 2, y: 81, c: 0 },
    { x: 3, y: 19, c: 0 },
    { x: 4, y: 52, c: 0 },
    { x: 5, y: 24, c: 0 },
    { x: 6, y: 87, c: 0 },
    { x: 7, y: 17, c: 0 },
    { x: 8, y: 68, c: 0 },
    { x: 9, y: 49, c: 0 }
  ]

  const spec = {
    data: {
      name: 'values'
    },
    mark: {
      type: "line",
      color: theme.colors.purple
    },
    encoding: {
      x: {
        field: "x",
        type: "quantitative",
        scale: { domain: [0, 10] }  // TODO: parameterize
      },
      y: {
        field: "y",
        type: "quantitative",
        scale: { domain: [0, 100] }  // TODO: parameterize
      },
    }
  }

  var vgSpec = vegaLite.compile(spec,
      { config: donut_config }).spec;

  const width = 200
  const height = 100

  return <Vega width={width} height={height} data={{ values: values }} renderer={'svg'} actions={false} spec={vgSpec} />

}

export default ParamChart