import dynamic from 'next/dynamic'

const figures = {
  RiskMaps: dynamic(() => import('./components/risk-maps/index.js')),
  RiskTrajectories: dynamic(() =>
    import('./components/risk-trajectories/index.js')
  ),
}

export default figures
