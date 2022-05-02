import dynamic from 'next/dynamic'

// NOTE: This is a dynamically generated file assuming that every file within components/ is a
//       kebeb-case-named file exporting a single figure. You may overwrite this file if that
//       assumption does not apply.
const figures = {
  BoundaryCondition: dynamic(() =>
    import('./components/boundary-condition.js')
  ),
  CostSummary: dynamic(() => import('./components/cost-summary.js')),
  ParameterScenario: dynamic(() =>
    import('./components/parameter-scenario.js')
  ),
}

export default figures
