import { Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import Article from '../../components/article'
import Reference from '../../components/reference'
import SectionBreak from '../../components/section-break'
import Heading from './components/heading'
import BoundaryCondition from './components/boundary-condition'
import ParameterScenario from './components/parameter-scenario'
import CostSummary from './components/cost-summary'

export const meta = {
  id: 'dac-calculator-explainer',
  number: 6,
  version: '1.0.0',
  color: 'purple',
  authors: [
    'Noah McQueen',
    'Jennifer Wilcox',
    'Joseph Hamman',
    'Jeremy Freeman',
  ],
  title: 'The cost of direct air capture',
  date: '02-01-2021',
  background: 'article-006/factory',
  card: 'dac-cost-calculator',
  summary:
    'How the cost of direct air capture varies under different energy scenarios.',
}

export const sidenotes = {
  1: {
    offset: -25,
    number: 1,
    authors: 'N McQueen et al.',
    year: 2021,
    title: 'Analysis and Quantification of Negative Emissions',
    journal: 'CDR Primer',
    editors: 'J Wilcox, B Kolosz, J Freeman',
    url: 'https://cdrprimer.org/read/chapter-4',
  },
  2: {
    offset: 25,
    number: 2,
    authors: 'N McQueen et al.',
    year: 2021,
    title: 'Natural gas vs. electricity for solvent-based direct air capture',
    journal: 'Frontiers in Climate',
    url: 'https://doi.org/10.3389/fclim.2020.618644',
  },
  3: {
    offset: 0,
    number: 3,
    authors: 'Thanks to Emily Grubert for calling out this point and providing a complementary analysis in a recent discussion.',
    url: 'https://twitter.com/emilygrubert/status/1353155080061669376'
  },
  4: {
    offset: -210,
    number: 4,
    authors: 'Socolow et al.',
    year: 2011,
    title:
      'Direct air capture of CO₂ with chemicals: A technology assessment for the APS panel on public affairs',
    journal: 'American Physical Society',
    url: 'https://www.aps.org/policy/reports/assessments/upload/dac2011.pdf',
  },
  5: {
    offset: -100,
    number: 5,
    authors: 'M Mazzotti et al.',
    year: 2013,
    title:
      'Direct air capture of CO₂ with chemicals: optimization of a two-loop hydroxide carbonate system using a countercurrent air-liquid contactor',
    journal: 'Climatic Change',
    url: 'https://link.springer.com/article/10.1007/s10584-012-0679-y',
  },
  6: {
    offset: 25,
    number: 6,
    authors: 'F Zeman',
    year: 2014,
    title: 'Reducing the Cost of Ca-Based Direct Air Capture of CO₂',
    journal: 'Environ. Sci. Technol.',
    url: 'https://pubs.acs.org/doi/10.1021/es502887y',
  },
  7: {
    offset: 50,
    number: 7,
    authors:
      'This scenario is comparable to the vertical flow (VF) scenario described in McQueen et al. (2021).',
  },
  8: {
    offset: -50,
    number: 8,
    authors: 'D Keith et al.',
    year: 2018,
    title: 'A Process for Capturing CO₂ from the Atmosphere',
    journal: 'Joule',
    url: 'https://www.sciencedirect.com/science/article/pii/S2542435118302253',
  },
  9: {
    offset: -25,
    number: 9,
    authors:
      'This scenario is comparable to the horizontal flow (VF) scenario described in McQueen et al. (2021).',
  },
}

<Heading>The cost of direct air capture</Heading>

Direct air capture (DAC) is a technology that removes carbon dioxide (CO₂) from the air using chemicals. There are several types. Solid sorbent and liquid solvent DAC are in use today. Others are emerging, such as electro-swing, humidity-swing, and mineralization-based.

In all types of DAC, chemicals selectively bind CO₂ from the air, typically at ambient conditions (room temperature and pressure). Once the chemical has bound an adequate amount of CO₂, the system releases the CO₂ at elevated temperature and/or decreased pressure. Once the CO₂ is released, it can be captured, and, if high purity, compressed, transported, and stored.

These activities require infrastructure, consumables, and energy — all of which have a significant price tag.

There are two key costs associated with DAC: capital costs and energy costs. Capital costs are dominated by the equipment required to capture CO₂ from air and regenerate the capture material, including the specialty chemicals used to capture CO₂, the contactor used to facilitate contact between the air stream and the CO₂-capturing chemicals, and the equipment required to release CO₂ from the chemicals.

Energy costs are also significant. Existing systems require between roughly 180 MW and 500 MW to capture 1 million tons of CO₂ per year — about as large as an individual power plant today. Of this energy requirement, roughly 80% is thermal energy and 20% electricity, where the thermal energy is required for heating during the regeneration step.

Analyzing the cost of DAC also requires considering any associated greenhouse gas emissions, which effectively reduce the total amount of net removal, and thus increase the [net removed cost](https://cdrprimer.org/read/chapter-4#sec-4-3) — a metric that divides the base cost by one minus the ratio of CO₂eq emitted to CO₂eq removed.<Reference color={meta.color} data={sidenotes[1]}/>

In a recent [paper](https://www.frontiersin.org/articles/10.3389/fclim.2020.618644/abstract), McQueen et al. evaluated the cost of co-constructing a solvent DAC process with its energy system.<Reference color={meta.color} data={sidenotes[2]}/> They evaluated two energy systems that burn natural gas onsite for heat and electricity, capturing nearly all of the CO₂ released during combustion, and six all-electric non-fossil systems.

To help build intuition for how different factors influence the cost of DAC in these scenarios, we built an <NextLink href={'/research/dac-calculator'} passHref={true}><Link>interactive calculator</Link></NextLink> based directly on the model from the paper.

Here we explain the design of the model and the parameter space, and highlight some key insights.

## Factors that determine cost

### Boundary conditions

Techno-economic analyses (TEAs) for emerging technologies, such as DAC, rely heavily on assumptions about which parameters are included in the "boundary" of the analysis. These parameters then act as knobs that, when turned, affect the overall estimate of net removal cost in units of $/tCO₂eq. Transparency about the assumptions underlying any TEA are critical, as is understanding how changing parameters impacts cost estimates.

Our calculator estimates the cost of a given DAC technology explicitly linked to the energy resource used to power it. In other words, the cost not only includes building the DAC facility, but also the energy resource. We do not, however, include costs for transportation or storage. The “boundary condition” diagram below shows which costs are included.

<BoundaryCondition />

Each of these cost components in turn depend on parameters, which are presented in the calculator as interactive sliders. Above each slider, a chart shows how the total net removed cost will change as you vary that parameter, conditional on the current setting of the others. So, as you change each parameter, not only can you see how the total cost changes, but you can also see how it affects sensitivity to the other parameters. Finally, a dropdown at the top lets you choose between three different sources of energy, which we will now describe.

### Energy scenarios

The calculator allows you to explore three of the energy scenarios that McQueen et al. considered.

The first scenario uses natural gas combined with carbon capture and storage (NGCC) to supply electricity for the DAC plant, while natural gas combustion meets the thermal energy requirements. A key issue when considering NGCC for powering DAC is that any greenhouse gas emissions created in the process reduce the effective net removal, and thus increase the net removal cost. The model assumes that natural gas combustion for electricity production is coupled with carbon capture at 90% capture efficiency. The remaining 10% of emissions from electricity production are considered net emissions and factored into net removed cost. Additionally, the model assumes that all the natural gas combusted for thermal energy is co-captured by the process, resulting in no emissions from combustion. 

For natural gas we also have to consider leakage, which is substantial — we use a default rate of 2.2% but rates as high as 3.7% have been reported for the Permian Basin region of the United States. In the model, we assume that some fraction of natural gas is lost to the atmosphere during processing or distribution, with the fraction controlled by a leakage rate parameter. Methane, a primary component of natural gas, has a higher [global warming potential (GWP)](https://cdrprimer.org/read/chapter-4) than CO₂. The model uses a GWP 100 of 32 to calculate the CO₂ equivalent of methane emissions, which are then factored into the net removed cost. As we will show below, given the definition of net removed cost, it is possible to create parameter scenarios with NGCC that do not achieve net carbon removal, because emissions are too large.<Reference color={meta.color} data={sidenotes[3]}/> The costs we report do not include non-greenhouse gas negative externalities that result from continued use of and dependence on fossil energy, which could be a critical factor in considering different energy sources for DAC.

In the second scenario, wind turbines are used to continuously power the DAC plant which requires over-producing electricity during windy times and storing the excess electricity in lithium-ion batteries. The energy storage allows the DAC plant to continuously use electricity produced from wind, even when the wind turbines are unable to produce electricity (i.e. when the air is still). In this scenario, electric resistance heating is used to meet the thermal demands of the system as opposed to the combustion of natural gas in the first scenario.

The third scenario uses solar photovoltaics (PV) to continuously power the DAC plant. Similar to using wind turbines, solar PV requires the overproduction of electricity when the sun is shining to make up for times when there is not enough sunshine to produce electricity (i.e. at night). This requires energy storage, which is included in the form of lithium-ion batteries. Additionally, the solar PV alternative also uses electric resistance heating to meet the thermal energy demands of the DAC plant.

## Key insights

With default settings, the calculator yields the highest cost for solar, second highest for wind, and lowest for NGCC. But, as we will explore, these costs reflect just one specific set of assumptions.

<CostSummary
  windTotalCost={393}
  windVariableOM={4}
  windFixedOM={68}
  windCapitalRecovery={321}
  solarTotalCost={473}
  solarVariableOM={4}
  solarFixedOM={72}
  solarCapitalRecovery={397}
  NGCCTotalCost={275}
  NGCCVariableOM={8}
  NGCCFixedOM={45}
  NGCCCapitalRecovery={182}
  NGCCNaturalGas={39}
/>

With alternate assumptions, we arrive at different answers. By varying parameters, McQueen et al. report ranges of $230-390/tCO₂eq for NGCC, $360–570/tCO₂eq for wind, and $430–690/tCO₂eq for solar. Here we explore some of those parameter scenarios in detail: a higher cost NGCC scenario, a lower cost wind scenario, and an NGCC scenario with a higher leakage rate.

To model high cost NGCC, we use parameters from a DAC facility described in a 2011 report from the American Physical Societies,<Reference color={meta.color} data={sidenotes[4]}/> including corrections for two additional follow-on analyses.<Reference color={meta.color} data={sidenotes[5]}/><Reference color={meta.color} data={sidenotes[6]}/> By using these reports we assume a higher DAC plant cost and slightly higher electricity and thermal energy requirements than some other estimates.<Reference color={meta.color} data={sidenotes[7]}/>

<ParameterScenario
  figureNumber={3}
  figureCaption={'Summary for a higher cost NGCC scenario.'}
  energySource={'NGCC'}
  capEx={2027}
  electricReq={1.7}
  thermalReq={7.2}
  leakage={2.2}
  totalCost={464}
  variableOM={9}
  fixedOM={47}
  naturalGas={44}
  capitalRecovery={364}
/>

To model low cost wind, we use parameters from a DAC facility described in Keith et al. (2018),<Reference color={meta.color} data={sidenotes[8]}/> which corresponds to a lower DAC plant cost and slightly lower electricity and thermal energy requirements.<Reference color={meta.color} data={sidenotes[9]}/>

<ParameterScenario
  figureNumber={4}
  figureCaption={'Summary for a lower cost wind scenario.'}
  energySource={'wind'}
  capEx={936}
  electricReq={0.95}
  thermalReq={5.8}
  totalCost={365}
  variableOM={4}
  fixedOM={64}
  naturalGas={0}
  capitalRecovery={297}
/>

Finally, returning to the high cost NGCC example, we can further consider increasing the natural gas leakage rate from the default of 2.2% to 3.7%. With these parameters, net removed cost increases to $530, higher than for any of the scenarios considered thus far. 

<ParameterScenario
  figureNumber={5}
  figureCaption={'Summary for a higher cost NGCC scenario with higher leakage.'}
  energySource={'NGCC'}
  capEx={2027}
  electricReq={1.7}
  thermalReq={7.2}
  leakage={3.7}
  totalCost={530}
  variableOM={10}
  fixedOM={54}
  naturalGas={51}
  capitalRecovery={416}
/>

If we were to use a GWP20 of 86 for methane instead of a GWP100 of 32, emissions would become so high that the system no longer achieves carbon removal. Even with a GWP100 of 32, higher electricity and thermal requirements coupled to even higher leakage rates could result in no net removal, as shown here, though note that these are extremely high and likely unrealistic values.

<ParameterScenario
  figureNumber={6}
  figureCaption={'Summary for an NGCC scenario that does not achieve carbon removal.'}
  energySource={'NGCC'}
  capEx={2027}
  electricReq={6.1}
  thermalReq={9.1}
  leakage={6.5}
  totalCost={'N/A'}
  variableOM={'N/A'}
  fixedOM={'N/A'}
  naturalGas={'N/A'}
  capitalRecovery={'N/A'}
/>

As these comparisons show, the energy source on its own does not fully determine how different scenarios stack up — the full parameter space matters. Note also, however, that not all parameter combinations may be feasible. As discussed above, some parameter settings for NGCC raise emissions so high that the system no longer achieves carbon removal. The calculator also allows users to set some parameters, such as operating and maintenance costs, to $0/tCO₂, but this would not be considered an achievable value for most realistic DAC systems.

We encourage you to explore how the cost of DAC changes with different economic assumptions outside of these examples — and think carefully about the assumptions underlying parameter choices in any such exercise.

## Looking ahead

We hope our interactive calculator provides intuition and transparency around the complex, high-dimensional parameter relationships underlying the cost of DAC. Along with understanding the technology itself, and finding opportunities to lower costs, evaluating different cost scenarios and energy systems can help with siting DAC facilities. Far more information and modeling is of course required for actual design, engineering, and planning, but experimenting with this tool could be the first step in evaluating existing approaches — or developing new ones.

<SectionBreak />

## Credits

Noah and Jennifer developed the underlying model with their collaborators Michael J. Desmond, Robert H. Socolow, and Peter Psarras. All authors of this article developed the concept for an interactive version. Joe implemented the model in JavaScript, with Noah’s guidance. Joe and Jeremy developed and implemented the interactive graphics with input from Jonny Black of [Ordinary Things](https://ot.studio). All authors contributed to writing the article.

Please cite as:

N McQueen, J Wilcox, J Hamman, J Freeman (2021) “The cost of direct air capture” CarbonPlan https://carbonplan.org/research/dac-calculator-explainer

## Terms of engagement

CarbonPlan received no specific financial support for this work. Noah McQueen is a Ph.D. Student at the University of Pennsylvania and Jennifer Wilcox is a Professor at the University of Pennsylvania.

### Questions? Interested in collaborating on these problems? Email us at [hello@carbonplan.org](mailto:hello@carbonplan.org)

export default ({ children }) => <Article meta={meta}>{children}</Article>

