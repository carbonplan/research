import dynamic from 'next/dynamic'

const figures = {
  CartoonEmissions: dynamic(() => import('./components/cartoon-emissions.js')),
  CartoonProject: dynamic(() => import('./components/cartoon-project.js')),
  EmissionsChart: dynamic(() => import('./components/emissions-chart.js')),
  EquivalenceTable: dynamic(() => import('./components/equivalence-table.js')),
  ExamplesTable: dynamic(() => import('./components/examples-table.js')),
  MethodsChart: dynamic(() => import('./components/methods-chart.js')),
  ValueChart: dynamic(() => import('./components/value-chart.js')),
}

export default figures
