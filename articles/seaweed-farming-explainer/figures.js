import dynamic from 'next/dynamic'

const figures = {
  CostCalculator: dynamic(() =>
    import('./components/cost-calculator/index.js')
  ),
  GrowthChart: dynamic(() => import('./components/growth-chart/index.js')),
  SummaryMap: dynamic(() => import('./components/summary-map/index.js')),
}

export default figures
