import dynamic from 'next/dynamic'

const figures = {
  SummaryResults: dynamic(() =>
    import('./components/summary-results/index.js')
  ),
  ProgramOverview: dynamic(() =>
    import('./components/program-overview/index.js')
  ),
  AnalysisExplanation: dynamic(() =>
    import('./components/analysis-explanation/index.js')
  ),
  ProjectAnalysis: dynamic(() =>
    import('./components/project-analysis/index.js')
  ),
  SouthernCascades: dynamic(() =>
    import('./components/southern-cascades/index.js')
  ),
  Triangle: dynamic(() => import('./components/triangle.js')),
}

export default figures
