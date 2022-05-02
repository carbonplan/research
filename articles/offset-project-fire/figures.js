import dynamic from 'next/dynamic'

const figures = {
  FireMap: dynamic(() => import('./components/fire-map.js')),
  RiskScenarios: dynamic(() => import('./components/risk-scenarios.js')),
}

export default figures
