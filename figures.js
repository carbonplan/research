import dynamic from 'next/dynamic'

const figures = {
  'carbon-removal-mechanisms': {
    Cycle: dynamic(() =>
      import('./articles/carbon-removal-mechanisms/components/cycle.js')
    ),
  },
  'offset-project-fire': {
    FireMap: dynamic(() =>
      import('./articles/offset-project-fire/components/fire-map.js')
    ),
    RiskScenarios: dynamic(() =>
      import('./articles/offset-project-fire/components/risk-scenarios.js')
    ),
  },
}
export default figures
