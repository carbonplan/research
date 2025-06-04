import dynamic from 'next/dynamic'

// NOTE: This is a dynamically generated file based on the config specified under the
//       `components` key in each article's frontmatter.
const components = {
  'dor-efficiency-explainer': {
    TimeSeries: dynamic(() =>
      import(
        '../../articles/dor-efficiency-explainer/components/time-series.js'
      ).then((mod) => mod.TimeSeries || mod.default)
    ),
    MapCompare: dynamic(() =>
      import(
        '../../articles/dor-efficiency-explainer/components/map-compare.js'
      ).then((mod) => mod.MapCompare || mod.default)
    ),
  },
  'protocol-review-survey': {
    OrganizationsTable: dynamic(() =>
      import(
        '../../articles/protocol-review-survey/components/organizations-table.js'
      ).then((mod) => mod.OrganizationsTable || mod.default)
    ),
    QuestionsTable: dynamic(() =>
      import(
        '../../articles/protocol-review-survey/components/questions-table.js'
      ).then((mod) => mod.QuestionsTable || mod.default)
    ),
    NovelEffortsTable: dynamic(() =>
      import(
        '../../articles/protocol-review-survey/components/novel-efforts-table.js'
      ).then((mod) => mod.NovelEffortsTable || mod.default)
    ),
    IndyReviewTable: dynamic(() =>
      import(
        '../../articles/protocol-review-survey/components/indy-review-table.js'
      ).then((mod) => mod.IndyReviewTable || mod.default)
    ),
    RankingTable: dynamic(() =>
      import(
        '../../articles/protocol-review-survey/components/ranking-table.js'
      ).then((mod) => mod.RankingTable || mod.default)
    ),
    PerspectiveTable: dynamic(() =>
      import(
        '../../articles/protocol-review-survey/components/perspective-table.js'
      ).then((mod) => mod.PerspectiveTable || mod.default)
    ),
  },
  'cdr-counterfactual-accounting': {
    AccountingGraph: dynamic(() =>
      import(
        '../../articles/cdr-counterfactual-accounting/components/accounting-graph.js'
      ).then((mod) => mod.AccountingGraph || mod.default)
    ),
  },
  'ab1305-initial-disclosures': {
    SummaryTable: dynamic(() =>
      import(
        '../../articles/ab1305-initial-disclosures/components/summary-table.js'
      ).then((mod) => mod.SummaryTable || mod.default)
    ),
  },
  'oae-efficiency-explainer': {
    FluxMap: dynamic(() =>
      import(
        '../../articles/oae-efficiency-explainer/components/flux-map.js'
      ).then((mod) => mod.FluxMap || mod.default)
    ),
    PhysicalProcesses: dynamic(() =>
      import(
        '../../articles/oae-efficiency-explainer/components/physical-processes.js'
      ).then((mod) => mod.PhysicalProcesses || mod.default)
    ),
    ModelingMethods: dynamic(() =>
      import(
        '../../articles/oae-efficiency-explainer/components/modeling-methods.js'
      ).then((mod) => mod.ModelingMethods || mod.default)
    ),
    EfficienciesMap: dynamic(() =>
      import(
        '../../articles/oae-efficiency-explainer/components/efficiencies-map.js'
      ).then((mod) => mod.EfficienciesMap || mod.default)
    ),
    RegionalComparison: dynamic(() =>
      import(
        '../../articles/oae-efficiency-explainer/components/regional-comparison.js'
      ).then((mod) => mod.RegionalComparison || mod.default)
    ),
    AlkChemDiagram: dynamic(() =>
      import(
        '../../articles/oae-efficiency-explainer/components/alk-chem-diagram.js'
      ).then((mod) => mod.AlkChemDiagram || mod.default)
    ),
    CarbChemDiagram: dynamic(() =>
      import(
        '../../articles/oae-efficiency-explainer/components/carb-chem-diagram.js'
      ).then((mod) => mod.CarbChemDiagram || mod.default)
    ),
    DataWrapper: dynamic(() =>
      import('../../articles/oae-efficiency-explainer/components/data.js').then(
        (mod) => mod.DataWrapper || mod.default
      )
    ),
    HCO3: dynamic(() =>
      import(
        '../../articles/oae-efficiency-explainer/components/chemistry.js'
      ).then((mod) => mod.HCO3 || mod.default)
    ),
    CO3: dynamic(() =>
      import(
        '../../articles/oae-efficiency-explainer/components/chemistry.js'
      ).then((mod) => mod.CO3 || mod.default)
    ),
  },
  'climate-risk-comparison': {
    SummaryTable: dynamic(() =>
      import(
        '../../articles/climate-risk-comparison/components/summary-table.js'
      ).then((mod) => mod.SummaryTable || mod.default)
    ),
    RegionSummary: dynamic(() =>
      import(
        '../../articles/climate-risk-comparison/components/region-summary.js'
      ).then((mod) => mod.RegionSummary || mod.default)
    ),
  },
  'enhanced-weathering-fluxes': {
    ErwEstimates: dynamic(() =>
      import(
        '../../articles/enhanced-weathering-fluxes/components/erw-estimates.js'
      ).then((mod) => mod.ErwEstimates || mod.default)
    ),
    ScatterChart: dynamic(() =>
      import(
        '../../articles/enhanced-weathering-fluxes/components/scatter-chart.js'
      ).then((mod) => mod.ScatterChart || mod.default)
    ),
    ErwEfficiencies: dynamic(() =>
      import(
        '../../articles/enhanced-weathering-fluxes/components/erw-efficiencies.js'
      ).then((mod) => mod.ErwEfficiencies || mod.default)
    ),
    Diagram: dynamic(() =>
      import(
        '../../articles/enhanced-weathering-fluxes/components/diagram.js'
      ).then((mod) => mod.Diagram || mod.default)
    ),
    SpatialBoundary: dynamic(() =>
      import(
        '../../articles/enhanced-weathering-fluxes/components/spatial-boundary.js'
      ).then((mod) => mod.SpatialBoundary || mod.default)
    ),
    TemporalBoundary: dynamic(() =>
      import(
        '../../articles/enhanced-weathering-fluxes/components/temporal-boundary.js'
      ).then((mod) => mod.TemporalBoundary || mod.default)
    ),
    HatchingKey: dynamic(() =>
      import(
        '../../articles/enhanced-weathering-fluxes/components/hatching-key.js'
      ).then((mod) => mod.HatchingKey || mod.default)
    ),
  },
  'offsets-db-explainer': {
    Diagram: dynamic(() =>
      import('../../articles/offsets-db-explainer/components/diagram.js').then(
        (mod) => mod.Diagram || mod.default
      )
    ),
    SummaryTable: dynamic(() =>
      import(
        '../../articles/offsets-db-explainer/components/summary-table.js'
      ).then((mod) => mod.SummaryTable || mod.default)
    ),
    TimeSeries: dynamic(() =>
      import(
        '../../articles/offsets-db-explainer/components/time-series.js'
      ).then((mod) => mod.TimeSeries || mod.default)
    ),
  },
  'cdr-timescale-accounting': {
    TimeSeries: dynamic(() =>
      import(
        '../../articles/cdr-timescale-accounting/components/time-series.js'
      ).then((mod) => mod.TimeSeries || mod.default)
    ),
    TimeHorizon: dynamic(() =>
      import(
        '../../articles/cdr-timescale-accounting/components/time-horizon.js'
      ).then((mod) => mod.TimeHorizon || mod.default)
    ),
    TableRecommendations: dynamic(() =>
      import(
        '../../articles/cdr-timescale-accounting/components/table-recommendations.js'
      ).then((mod) => mod.TableRecommendations || mod.default)
    ),
  },
  'ew-quantification-explainer': {
    PhasesTable: dynamic(() =>
      import(
        '../../articles/ew-quantification-explainer/components/phases-table.js'
      ).then((mod) => mod.PhasesTable || mod.default)
    ),
    ProtocolsMethods: dynamic(() =>
      import(
        '../../articles/ew-quantification-explainer/components/protocols-methods.js'
      ).then((mod) => mod.ProtocolsMethods || mod.default)
    ),
  },
  'extreme-heat-explainer': {
    Small: dynamic(() =>
      import('../../articles/extreme-heat-explainer/components/small.js').then(
        (mod) => mod.Small || mod.default
      )
    ),
    HeatCalculator: dynamic(() =>
      import(
        '../../articles/extreme-heat-explainer/components/heat-calculator.js'
      ).then((mod) => mod.HeatCalculator || mod.default)
    ),
    BiasCorrection: dynamic(() =>
      import(
        '../../articles/extreme-heat-explainer/components/bias-correction.js'
      ).then((mod) => mod.BiasCorrection || mod.default)
    ),
    DaysOver: dynamic(() =>
      import(
        '../../articles/extreme-heat-explainer/components/days-over.js'
      ).then((mod) => mod.DaysOver || mod.default)
    ),
    CityMap: dynamic(() =>
      import(
        '../../articles/extreme-heat-explainer/components/city-map.js'
      ).then((mod) => mod.CityMap || mod.default)
    ),
  },
  'climate-risk-assessments': {
    DataSources: dynamic(() =>
      import(
        '../../articles/climate-risk-assessments/components/data-sources.js'
      ).then((mod) => mod.DataSources || mod.default)
    ),
    FlowChart: dynamic(() =>
      import(
        '../../articles/climate-risk-assessments/components/flow-chart.js'
      ).then((mod) => mod.FlowChart || mod.default)
    ),
    InlineSecondaryCode: dynamic(() =>
      import(
        '../../articles/climate-risk-assessments/components/inline-secondary-code.js'
      ).then((mod) => mod.InlineSecondaryCode || mod.default)
    ),
  },
  'cdr-verification-explainer': {
    PathwayDiagram: dynamic(() =>
      import(
        '../../articles/cdr-verification-explainer/components/pathway-diagram.js'
      ).then((mod) => mod.PathwayDiagram || mod.default)
    ),
    UncertaintyDimensions: dynamic(() =>
      import(
        '../../articles/cdr-verification-explainer/components/uncertainty-dimensions.js'
      ).then((mod) => mod.UncertaintyDimensions || mod.default)
    ),
    VCLChart: dynamic(() =>
      import(
        '../../articles/cdr-verification-explainer/components/vcl-chart.js'
      ).then((mod) => mod.VCLChart || mod.default)
    ),
    VCLTable: dynamic(() =>
      import(
        '../../articles/cdr-verification-explainer/components/vcl-table.js'
      ).then((mod) => mod.VCLTable || mod.default)
    ),
    Equation: dynamic(() =>
      import(
        '../../articles/cdr-verification-explainer/components/equation.js'
      ).then((mod) => mod.Equation || mod.default)
    ),
  },
  'cdr-scale-barriers': {
    BigQuote: dynamic(() =>
      import('../../articles/cdr-scale-barriers/components/big-quote.js').then(
        (mod) => mod.BigQuote || mod.default
      )
    ),
    DownloadReport: dynamic(() =>
      import(
        '../../articles/cdr-scale-barriers/components/download-report.js'
      ).then((mod) => mod.DownloadReport || mod.default)
    ),
  },
  'cmip6-downscaling-explainer': {
    DownscaledData: dynamic(() =>
      import(
        '../../articles/cmip6-downscaling-explainer/components/downscaled-data.js'
      ).then((mod) => mod.DownscaledData || mod.default)
    ),
    Ecosystem: dynamic(() =>
      import(
        '../../articles/cmip6-downscaling-explainer/components/ecosystem.js'
      ).then((mod) => mod.Ecosystem || mod.default)
    ),
    Downscaling: dynamic(() =>
      import(
        '../../articles/cmip6-downscaling-explainer/components/downscaling.js'
      ).then((mod) => mod.Downscaling || mod.default)
    ),
  },
  'toucan-crypto-offsets': {
    Prices: dynamic(() =>
      import('../../articles/toucan-crypto-offsets/components/prices.js').then(
        (mod) => mod.Prices || mod.default
      )
    ),
    Retirements: dynamic(() =>
      import(
        '../../articles/toucan-crypto-offsets/components/retirements.js'
      ).then((mod) => mod.Retirements || mod.default)
    ),
  },
  'fire-forests-inventories': {
    FireEmissions: dynamic(() =>
      import(
        '../../articles/fire-forests-inventories/components/fire-emissions.js'
      ).then((mod) => mod.FireEmissions || mod.default)
    ),
    GHGInventory: dynamic(() =>
      import(
        '../../articles/fire-forests-inventories/components/ghg-inventory.js'
      ).then((mod) => mod.GHGInventory || mod.default)
    ),
    GHGSeries: dynamic(() =>
      import(
        '../../articles/fire-forests-inventories/components/ghg-series.js'
      ).then((mod) => mod.GHGSeries || mod.default)
    ),
    NetEffect: dynamic(() =>
      import(
        '../../articles/fire-forests-inventories/components/net-effect.js'
      ).then((mod) => mod.NetEffect || mod.default)
    ),
    NetSeries: dynamic(() =>
      import(
        '../../articles/fire-forests-inventories/components/net-series.js'
      ).then((mod) => mod.NetSeries || mod.default)
    ),
  },
  'seaweed-farming-explainer': {
    CostCalculator: dynamic(() =>
      import(
        '../../articles/seaweed-farming-explainer/components/cost-calculator/index.js'
      ).then((mod) => mod.CostCalculator || mod.default)
    ),
    GrowthChart: dynamic(() =>
      import(
        '../../articles/seaweed-farming-explainer/components/growth-chart/index.js'
      ).then((mod) => mod.GrowthChart || mod.default)
    ),
    SummaryMap: dynamic(() =>
      import(
        '../../articles/seaweed-farming-explainer/components/summary-map/index.js'
      ).then((mod) => mod.SummaryMap || mod.default)
    ),
  },
  'ton-year-explainer': {
    CartoonEmissions: dynamic(() =>
      import(
        '../../articles/ton-year-explainer/components/cartoon-emissions.js'
      ).then((mod) => mod.CartoonEmissions || mod.default)
    ),
    CartoonProject: dynamic(() =>
      import(
        '../../articles/ton-year-explainer/components/cartoon-project.js'
      ).then((mod) => mod.CartoonProject || mod.default)
    ),
    EmissionsChart: dynamic(() =>
      import(
        '../../articles/ton-year-explainer/components/emissions-chart.js'
      ).then((mod) => mod.EmissionsChart || mod.default)
    ),
    EquivalenceTable: dynamic(() =>
      import(
        '../../articles/ton-year-explainer/components/equivalence-table.js'
      ).then((mod) => mod.EquivalenceTable || mod.default)
    ),
    ExamplesTable: dynamic(() =>
      import(
        '../../articles/ton-year-explainer/components/examples-table.js'
      ).then((mod) => mod.ExamplesTable || mod.default)
    ),
    MethodsChart: dynamic(() =>
      import(
        '../../articles/ton-year-explainer/components/methods-chart.js'
      ).then((mod) => mod.MethodsChart || mod.default)
    ),
    ValueChart: dynamic(() =>
      import(
        '../../articles/ton-year-explainer/components/value-chart.js'
      ).then((mod) => mod.ValueChart || mod.default)
    ),
  },
  'soil-protocols-explainer': {
    MetricHistogram: dynamic(() =>
      import(
        '../../articles/soil-protocols-explainer/components/metric-histogram.js'
      ).then((mod) => mod.MetricHistogram || mod.default)
    ),
    MetricTable: dynamic(() =>
      import(
        '../../articles/soil-protocols-explainer/components/metric-table.js'
      ).then((mod) => mod.MetricTable || mod.default)
    ),
    RecommendationTable: dynamic(() =>
      import(
        '../../articles/soil-protocols-explainer/components/recommendation-table.js'
      ).then((mod) => mod.RecommendationTable || mod.default)
    ),
    ScoreSummary: dynamic(() =>
      import(
        '../../articles/soil-protocols-explainer/components/score-summary.js'
      ).then((mod) => mod.ScoreSummary || mod.default)
    ),
    TimelineSummary: dynamic(() =>
      import(
        '../../articles/soil-protocols-explainer/components/timeline-summary.js'
      ).then((mod) => mod.TimelineSummary || mod.default)
    ),
  },
  'soil-depth-sampling': {
    Depth: dynamic(() =>
      import(
        '../../articles/soil-depth-sampling/components/depth/index.js'
      ).then((mod) => mod.Depth || mod.default)
    ),
    Density: dynamic(() =>
      import(
        '../../articles/soil-depth-sampling/components/density/index.js'
      ).then((mod) => mod.Density || mod.default)
    ),
    Country: dynamic(() =>
      import(
        '../../articles/soil-depth-sampling/components/country/index.js'
      ).then((mod) => mod.Country || mod.default)
    ),
  },
  'stripe-2021-insights': {
    InlineCheck: dynamic(() =>
      import('../inline-check.js').then((mod) => mod.InlineCheck || mod.default)
    ),
    Distributions: dynamic(() =>
      import(
        '../../articles/stripe-2021-insights/components/distributions/index.js'
      ).then((mod) => mod.Distributions || mod.default)
    ),
    Numbers: dynamic(() =>
      import('../../articles/stripe-2021-insights/components/numbers.js').then(
        (mod) => mod.Numbers || mod.default
      )
    ),
    Price: dynamic(() =>
      import(
        '../../articles/stripe-2021-insights/components/price/index.js'
      ).then((mod) => mod.Price || mod.default)
    ),
  },
  'forest-risks-explainer': {
    RiskMaps: dynamic(() =>
      import(
        '../../articles/forest-risks-explainer/components/risk-maps/index.js'
      ).then((mod) => mod.RiskMaps || mod.default)
    ),
    RiskTrajectories: dynamic(() =>
      import(
        '../../articles/forest-risks-explainer/components/risk-trajectories/index.js'
      ).then((mod) => mod.RiskTrajectories || mod.default)
    ),
  },
  'forest-offsets-explainer': {
    SummaryResults: dynamic(() =>
      import(
        '../../articles/forest-offsets-explainer/components/summary-results/index.js'
      ).then((mod) => mod.SummaryResults || mod.default)
    ),
    ProgramOverview: dynamic(() =>
      import(
        '../../articles/forest-offsets-explainer/components/program-overview/index.js'
      ).then((mod) => mod.ProgramOverview || mod.default)
    ),
    AnalysisExplanation: dynamic(() =>
      import(
        '../../articles/forest-offsets-explainer/components/analysis-explanation/index.js'
      ).then((mod) => mod.AnalysisExplanation || mod.default)
    ),
    ProjectAnalysis: dynamic(() =>
      import(
        '../../articles/forest-offsets-explainer/components/project-analysis/index.js'
      ).then((mod) => mod.ProjectAnalysis || mod.default)
    ),
    SouthernCascades: dynamic(() =>
      import(
        '../../articles/forest-offsets-explainer/components/southern-cascades/index.js'
      ).then((mod) => mod.SouthernCascades || mod.default)
    ),
    Triangle: dynamic(() =>
      import(
        '../../articles/forest-offsets-explainer/components/triangle.js'
      ).then((mod) => mod.Triangle || mod.default)
    ),
  },
  'microsoft-2021-insights': {
    InlineCheck: dynamic(() =>
      import('../inline-check.js').then((mod) => mod.InlineCheck || mod.default)
    ),
    Distributions: dynamic(() =>
      import(
        '../../articles/microsoft-2021-insights/components/distributions.js'
      ).then((mod) => mod.Distributions || mod.default)
    ),
    Metrics: dynamic(() =>
      import(
        '../../articles/microsoft-2021-insights/components/metrics.js'
      ).then((mod) => mod.Metrics || mod.default)
    ),
    Numbers: dynamic(() =>
      import(
        '../../articles/microsoft-2021-insights/components/numbers.js'
      ).then((mod) => mod.Numbers || mod.default)
    ),
    Oxford: dynamic(() =>
      import(
        '../../articles/microsoft-2021-insights/components/oxford.js'
      ).then((mod) => mod.Oxford || mod.default)
    ),
    Validation: dynamic(() =>
      import(
        '../../articles/microsoft-2021-insights/components/validation.js'
      ).then((mod) => mod.Validation || mod.default)
    ),
  },
  'dac-calculator-explainer': {
    BoundaryCondition: dynamic(() =>
      import(
        '../../articles/dac-calculator-explainer/components/boundary-condition.js'
      ).then((mod) => mod.BoundaryCondition || mod.default)
    ),
    CostSummary: dynamic(() =>
      import(
        '../../articles/dac-calculator-explainer/components/cost-summary.js'
      ).then((mod) => mod.CostSummary || mod.default)
    ),
    ParameterScenario: dynamic(() =>
      import(
        '../../articles/dac-calculator-explainer/components/parameter-scenario.js'
      ).then((mod) => mod.ParameterScenario || mod.default)
    ),
  },
  'permanence-calculator-explainer': {
    Parameters: dynamic(() =>
      import(
        '../../articles/permanence-calculator-explainer/components/parameters.js'
      ).then((mod) => mod.Parameters || mod.default)
    ),
    Scenario: dynamic(() =>
      import(
        '../../articles/permanence-calculator-explainer/components/scenario.js'
      ).then((mod) => mod.Scenario || mod.default)
    ),
  },
  'offset-project-fire': {
    FireMap: dynamic(() =>
      import('../../articles/offset-project-fire/components/fire-map.js').then(
        (mod) => mod.FireMap || mod.default
      )
    ),
    RiskScenarios: dynamic(() =>
      import(
        '../../articles/offset-project-fire/components/risk-scenarios.js'
      ).then((mod) => mod.RiskScenarios || mod.default)
    ),
  },
  'carbon-removal-mechanisms': {
    Cycle: dynamic(() =>
      import(
        '../../articles/carbon-removal-mechanisms/components/cycle.js'
      ).then((mod) => mod.Cycle || mod.default)
    ),
  },
  'soil-carbon-comment': {
    Conclusions: dynamic(() =>
      import(
        '../../articles/soil-carbon-comment/components/conclusions.js'
      ).then((mod) => mod.Conclusions || mod.default)
    ),
  },
  'stripe-2020-insights': {
    InlineCheck: dynamic(() =>
      import('../inline-check.js').then((mod) => mod.InlineCheck || mod.default)
    ),
    Metrics: dynamic(() =>
      import('../../articles/stripe-2020-insights/components/metrics.js').then(
        (mod) => mod.Metrics || mod.default
      )
    ),
    Permanence: dynamic(() =>
      import(
        '../../articles/stripe-2020-insights/components/permanence.js'
      ).then((mod) => mod.Permanence || mod.default)
    ),
    Table: dynamic(() =>
      import('../../articles/stripe-2020-insights/components/table.js').then(
        (mod) => mod.Table || mod.default
      )
    ),
  },
  'defining-good-cdr': {
    Activities: dynamic(() =>
      import(
        '../../commentary/defining-good-cdr/components/activities.js'
      ).then((mod) => mod.Activities || mod.default)
    ),
    Scenarios: dynamic(() =>
      import('../../commentary/defining-good-cdr/components/scenarios.js').then(
        (mod) => mod.Scenarios || mod.default
      )
    ),
  },
  'icvcm-landfill-additionality': {
    AnnotatedProject: dynamic(() =>
      import(
        '../../commentary/icvcm-landfill-additionality/components/annotated-project.js'
      ).then((mod) => mod.AnnotatedProject || mod.default)
    ),
    Summary: dynamic(() =>
      import(
        '../../commentary/icvcm-landfill-additionality/components/summary.js'
      ).then((mod) => mod.Summary || mod.default)
    ),
  },
  'buffer-pool-burning': {},
  'ethanol-cdr-claims': {
    Schematics: dynamic(() =>
      import(
        '../../commentary/ethanol-cdr-claims/components/schematics.js'
      ).then((mod) => mod.Schematics || mod.default)
    ),
    Divider: dynamic(() =>
      import('theme-ui').then((mod) => mod.Divider || mod.default)
    ),
  },
  'forest-offsets-alaska': {},
  'ton-year-quebec': {
    EquivalenceChart: dynamic(() =>
      import(
        '../../commentary/ton-year-quebec/components/equivalence-chart.js'
      ).then((mod) => mod.EquivalenceChart || mod.default)
    ),
    CartoonAlbedo: dynamic(() =>
      import(
        '../../commentary/ton-year-quebec/components/cartoon-albedo.js'
      ).then((mod) => mod.CartoonAlbedo || mod.default)
    ),
    SummaryResults: dynamic(() =>
      import(
        '../../commentary/ton-year-quebec/components/summary-results.js'
      ).then((mod) => mod.SummaryResults || mod.default)
    ),
    Nowrap: dynamic(() =>
      import('../../commentary/ton-year-quebec/components/nowrap.js').then(
        (mod) => mod.Nowrap || mod.default
      )
    ),
  },
  'sbti-carbon-removal': {
    FigureTwo: dynamic(() =>
      import(
        '../../commentary/sbti-carbon-removal/components/figure-two.js'
      ).then((mod) => mod.FigureTwo || mod.default)
    ),
  },
  'verra-integrity-council': {
    CreditHierarchy: dynamic(() =>
      import(
        '../../commentary/verra-integrity-council/components/credit-hierarchy.js'
      ).then((mod) => mod.CreditHierarchy || mod.default)
    ),
    CreditIssuance: dynamic(() =>
      import(
        '../../commentary/verra-integrity-council/components/credit-issuance.js'
      ).then((mod) => mod.CreditIssuance || mod.default)
    ),
  },
  'data-financial-risk': {},
  'scoping-plan-comments': {
    EmissionsTable: dynamic(() =>
      import(
        '../../commentary/scoping-plan-comments/components/emissions-table.js'
      ).then((mod) => mod.EmissionsTable || mod.default)
    ),
    EmissionsTargets: dynamic(() =>
      import(
        '../../commentary/scoping-plan-comments/components/emissions-targets.js'
      ).then((mod) => mod.EmissionsTargets || mod.default)
    ),
    EmissionsPlans: dynamic(() =>
      import(
        '../../commentary/scoping-plan-comments/components/emissions-plans.js'
      ).then((mod) => mod.EmissionsPlans || mod.default)
    ),
    DifferenceTable: dynamic(() =>
      import(
        '../../commentary/scoping-plan-comments/components/difference-table.js'
      ).then((mod) => mod.DifferenceTable || mod.default)
    ),
  },
  'offset-disclosure-needs': {},
  'ton-year-ncx': {
    TableHundred: dynamic(() =>
      import('../../commentary/ton-year-ncx/components/table-hundred.js').then(
        (mod) => mod.TableHundred || mod.default
      )
    ),
    TableThousand: dynamic(() =>
      import('../../commentary/ton-year-ncx/components/table-thousand.js').then(
        (mod) => mod.TableThousand || mod.default
      )
    ),
  },
  'climate-financial-risks': {},
  'ab1305-initial-disclosures-database': {
    DatabaseTable: dynamic(() =>
      import(
        '../../articles/ab1305-initial-disclosures/components/database-table.js'
      ).then((mod) => mod.DatabaseTable || mod.default)
    ),
  },
  'cdr-counterfactual-accounting-methods': {
    NetCDR: dynamic(() =>
      import(
        '../../articles/cdr-counterfactual-accounting/components/net-cdr.js'
      ).then((mod) => mod.NetCDR || mod.default)
    ),
    Figure: dynamic(() =>
      import('@carbonplan/components').then((mod) => mod.Figure || mod.default)
    ),
    FigureCaption: dynamic(() =>
      import('@carbonplan/components').then(
        (mod) => mod.FigureCaption || mod.default
      )
    ),
  },
  'forest-offsets-explainer-faq': {
    CommonPractice: dynamic(() =>
      import(
        '../../articles/forest-offsets-explainer/components/common-practice/index.js'
      ).then((mod) => mod.CommonPractice || mod.default)
    ),
  },
  'offsets-db-methods': {
    TableCategories: dynamic(() =>
      import(
        '../../articles/offsets-db-explainer/components/table-categories.js'
      ).then((mod) => mod.TableCategories || mod.default)
    ),
    Figure: dynamic(() =>
      import('@carbonplan/components').then((mod) => mod.Figure || mod.default)
    ),
  },
  'soil-protocols-explainer-gold-standard-response': {},
}

export default components
