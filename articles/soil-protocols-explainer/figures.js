import dynamic from 'next/dynamic'

const figures = {
  MetricHistogram: dynamic(() => import('./components/metric-histogram.js')),
  MetricTable: dynamic(() => import('./components/metric-table.js')),
  RecommendationTable: dynamic(() =>
    import('./components/recommendation-table.js')
  ),
  ScoreSummary: dynamic(() => import('./components/score-summary.js')),
  TimelineSummary: dynamic(() => import('./components/timeline-summary.js')),
}

export default figures
