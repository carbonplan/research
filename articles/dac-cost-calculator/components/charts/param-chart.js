import { Vega } from 'react-vega'
import { useThemeUI } from 'theme-ui'

var vegaLite = require('vega-lite')

const ParamChart = ( { param, data } ) => {
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

  const spec = {
    data: {
      name: 'values'
    },
    mark: {
      type: "bar",
      color: theme.colors.purple,
      width: 14  // hack
    },
    encoding: {
      x: {
        field: "x",
        type: "quantitative",
        scale: { domain: param.validRange, type: param.scale},
        axis: { title: null }
      },
      y: {
        field: "y",
        aggregate: "sum",
        type: "quantitative",
        scale: { 'padding': 1.87 },
        axis: { title: null, orient: 'right' }
      },
      opacity: {
        field: "c",
        type: "nominal",
        legend: null,
      }
    }
  }

  var vgSpec = vegaLite.compile(spec,
      { config: donut_config }).spec;

  const width = 300
  const height = 120

  return <Vega width={width} height={height} data={{ values: data }} renderer={'svg'} actions={false} spec={vgSpec} />

}

export default ParamChart