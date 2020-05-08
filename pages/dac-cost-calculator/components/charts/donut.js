import { Vega } from 'react-vega'
import { useThemeUI } from 'theme-ui'

var vegaLite = require('vega-lite')

const Donut = ({ params }) => {

  const context = useThemeUI()
  const theme = context.theme

  const donut_config = {
    background: null,
    cursor: 'pointer',
    view: {
      stroke: null
    },
  }
  console.log('chart', params.results)
  var values = [
    { category: 'CAPITAL RECOVERY', opacity: 0.8, value: params.results['Capital Recovery [$/tCO2eq]'] / params.results['Total Cost [$/tCO2]']},
    { category: 'FIXED O+M', opacity: 0.55, value: params.results['Fixed O+M [$/tCO2eq]'] / params.results['Total Cost [$/tCO2]']},
    { category: 'VARIABLE O+M', opacity: 0.3, value: params.results['Variable O+M [$/tCO2eq]'] / params.results['Total Cost [$/tCO2]']},
  ]

  const spec = {
    data: {
      name: 'values'
    },
    mark: {
      type: "arc",
      innerRadius: 35,
      color: theme.colors.purple,
    },
    encoding: {
      theta: {
        field: "value",
        type: "quantitative",
        scale: { domain: [0, 1] },
      },
      opacity: {
        field: "opacity",
        type: "quantitative",
        scale: { domain: [0, 1] },
        legend: {
          orient: 'bottom',
          direction: 'vertical',
          title: null,
          labelColor: theme.colors.text,
          symbolType: 'square'
        }
      }
    },
  }

  var vgSpec = vegaLite.compile(spec, { config: donut_config }).spec;

  const width = 150
  const height = 150

  return <Vega width={width} height={height} data={{ values: values }} renderer={'svg'} actions={false} spec={vgSpec} />

}

export default Donut