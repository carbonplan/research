import dynamic from 'next/dynamic'

// NOTE: This is a dynamically generated file based on the config specified under the
//       `components` key in each article's frontmatter.
const components = {
  'toucan-crypto-offsets': {
    Prices: dynamic(() =>
      import('../../articles/toucan-crypto-offsets/components/prices.js')
    ),
    Retirements: dynamic(() =>
      import('../../articles/toucan-crypto-offsets/components/retirements.js')
    ),
  },
  'fire-forests-inventories': {
    FireEmissions: dynamic(() =>
      import(
        '../../articles/fire-forests-inventories/components/fire-emissions.js'
      )
    ),
    GHGInventory: dynamic(() =>
      import(
        '../../articles/fire-forests-inventories/components/ghg-inventory.js'
      )
    ),
    GHGSeries: dynamic(() =>
      import('../../articles/fire-forests-inventories/components/ghg-series.js')
    ),
    NetEffect: dynamic(() =>
      import('../../articles/fire-forests-inventories/components/net-effect.js')
    ),
    NetSeries: dynamic(() =>
      import('../../articles/fire-forests-inventories/components/net-series.js')
    ),
  },
  'seaweed-farming-explainer': {
    CostCalculator: dynamic(() =>
      import(
        '../../articles/seaweed-farming-explainer/components/cost-calculator/index.js'
      )
    ),
    GrowthChart: dynamic(() =>
      import(
        '../../articles/seaweed-farming-explainer/components/growth-chart/index.js'
      )
    ),
    SummaryMap: dynamic(() =>
      import(
        '../../articles/seaweed-farming-explainer/components/summary-map/index.js'
      )
    ),
  },
  'ton-year-explainer': {
    CartoonEmissions: dynamic(() =>
      import(
        '../../articles/ton-year-explainer/components/cartoon-emissions.js'
      )
    ),
    CartoonProject: dynamic(() =>
      import('../../articles/ton-year-explainer/components/cartoon-project.js')
    ),
    EmissionsChart: dynamic(() =>
      import('../../articles/ton-year-explainer/components/emissions-chart.js')
    ),
    EquivalenceTable: dynamic(() =>
      import(
        '../../articles/ton-year-explainer/components/equivalence-table.js'
      )
    ),
    ExamplesTable: dynamic(() =>
      import('../../articles/ton-year-explainer/components/examples-table.js')
    ),
    MethodsChart: dynamic(() =>
      import('../../articles/ton-year-explainer/components/methods-chart.js')
    ),
    ValueChart: dynamic(() =>
      import('../../articles/ton-year-explainer/components/value-chart.js')
    ),
  },
  'soil-protocols-explainer': {
    MetricHistogram: dynamic(() =>
      import(
        '../../articles/soil-protocols-explainer/components/metric-histogram.js'
      )
    ),
    MetricTable: dynamic(() =>
      import(
        '../../articles/soil-protocols-explainer/components/metric-table.js'
      )
    ),
    RecommendationTable: dynamic(() =>
      import(
        '../../articles/soil-protocols-explainer/components/recommendation-table.js'
      )
    ),
    ScoreSummary: dynamic(() =>
      import(
        '../../articles/soil-protocols-explainer/components/score-summary.js'
      )
    ),
    TimelineSummary: dynamic(() =>
      import(
        '../../articles/soil-protocols-explainer/components/timeline-summary.js'
      )
    ),
  },
  'soil-depth-sampling': {
    Depth: dynamic(() =>
      import('../../articles/soil-depth-sampling/components/depth/index.js')
    ),
    Density: dynamic(() =>
      import('../../articles/soil-depth-sampling/components/density/index.js')
    ),
    Country: dynamic(() =>
      import('../../articles/soil-depth-sampling/components/country/index.js')
    ),
  },
  'stripe-2021-insights': {
    InlineCheck: dynamic(() => import('../inline-check.js')),
    Distributions: dynamic(() =>
      import(
        '../../articles/stripe-2021-insights/components/distributions/index.js'
      )
    ),
    Numbers: dynamic(() =>
      import('../../articles/stripe-2021-insights/components/numbers.js')
    ),
    Price: dynamic(() =>
      import('../../articles/stripe-2021-insights/components/price/index.js')
    ),
  },
  'forest-risks-explainer': {
    RiskMaps: dynamic(() =>
      import(
        '../../articles/forest-risks-explainer/components/risk-maps/index.js'
      )
    ),
    RiskTrajectories: dynamic(() =>
      import(
        '../../articles/forest-risks-explainer/components/risk-trajectories/index.js'
      )
    ),
  },
  'forest-offsets-explainer': {
    SummaryResults: dynamic(() =>
      import(
        '../../articles/forest-offsets-explainer/components/summary-results/index.js'
      )
    ),
    ProgramOverview: dynamic(() =>
      import(
        '../../articles/forest-offsets-explainer/components/program-overview/index.js'
      )
    ),
    AnalysisExplanation: dynamic(() =>
      import(
        '../../articles/forest-offsets-explainer/components/analysis-explanation/index.js'
      )
    ),
    ProjectAnalysis: dynamic(() =>
      import(
        '../../articles/forest-offsets-explainer/components/project-analysis/index.js'
      )
    ),
    SouthernCascades: dynamic(() =>
      import(
        '../../articles/forest-offsets-explainer/components/southern-cascades/index.js'
      )
    ),
    Triangle: dynamic(() =>
      import('../../articles/forest-offsets-explainer/components/triangle.js')
    ),
    CommonPractice: dynamic(() =>
      import(
        '../../articles/forest-offsets-explainer/components/common-practice/index.js'
      )
    ),
  },
  'microsoft-2021-insights': {
    InlineCheck: dynamic(() => import('../inline-check.js')),
    Distributions: dynamic(() =>
      import(
        '../../articles/microsoft-2021-insights/components/distributions.js'
      )
    ),
    Metrics: dynamic(() =>
      import('../../articles/microsoft-2021-insights/components/metrics.js')
    ),
    Numbers: dynamic(() =>
      import('../../articles/microsoft-2021-insights/components/numbers.js')
    ),
    Oxford: dynamic(() =>
      import('../../articles/microsoft-2021-insights/components/oxford.js')
    ),
    Validation: dynamic(() =>
      import('../../articles/microsoft-2021-insights/components/validation.js')
    ),
  },
  'dac-calculator-explainer': {
    BoundaryCondition: dynamic(() =>
      import(
        '../../articles/dac-calculator-explainer/components/boundary-condition.js'
      )
    ),
    CostSummary: dynamic(() =>
      import(
        '../../articles/dac-calculator-explainer/components/cost-summary.js'
      )
    ),
    ParameterScenario: dynamic(() =>
      import(
        '../../articles/dac-calculator-explainer/components/parameter-scenario.js'
      )
    ),
  },
  'permanence-calculator-explainer': {
    Parameters: dynamic(() =>
      import(
        '../../articles/permanence-calculator-explainer/components/parameters.js'
      )
    ),
    Scenario: dynamic(() =>
      import(
        '../../articles/permanence-calculator-explainer/components/scenario.js'
      )
    ),
  },
  'offset-project-fire': {
    FireMap: dynamic(() =>
      import('../../articles/offset-project-fire/components/fire-map.js')
    ),
    RiskScenarios: dynamic(() =>
      import('../../articles/offset-project-fire/components/risk-scenarios.js')
    ),
  },
  'carbon-removal-mechanisms': {
    Cycle: dynamic(() =>
      import('../../articles/carbon-removal-mechanisms/components/cycle.js')
    ),
  },
  'soil-carbon-comment': {
    Conclusions: dynamic(() =>
      import('../../articles/soil-carbon-comment/components/conclusions.js')
    ),
  },
  'stripe-2020-insights': {
    InlineCheck: dynamic(() => import('../inline-check.js')),
    Metrics: dynamic(() =>
      import('../../articles/stripe-2020-insights/components/metrics.js')
    ),
    Permanence: dynamic(() =>
      import('../../articles/stripe-2020-insights/components/permanence.js')
    ),
    Table: dynamic(() =>
      import('../../articles/stripe-2020-insights/components/table.js')
    ),
  },
}

export default components
