import Article from '../../components/article'
import Reference from '../../components/reference'
import SectionBreak from '../../components/section-break'
import BoundaryCondition from './components/boundary-condition'
import ParameterScenario from './components/parameter-scenario'

export const meta = {
  id: 'dac-calculator-explainer',
  number: 6,
  version: '1.0.0',
  color: 'purple',
  authors: [
    'Noah McQueen',
    'Jennifer Wilcox',
    'Joseph Hamman',
    'Danny Cullenward',
    'Jeremy Freeman',
  ],
  title: 'The cost of direct air capture',
  date: '01-29-2021',
  background: 'article-006/factory',
  summary:
    'What factors drive the cost of direct air capture under different energy configurations?',
}

export const sidenotes = {
  1: {
    offset: 0,
    number: 1,
    authors: 'N McQueen et al.',
    year: 2021,
    title: 'Natural gas vs. electricity for solvent-based direct air capture',
    journal: 'Frontiers in Climate',
    url: 'https://doi.org/10.3389/fclim.2020.618644',
  },
}

# The cost of direct air capture

Direct air capture (DAC) is a technology that captures carbon dioxide (CO₂) from the air using chemicals. There are several types. Sorbent and solvent DAC are in use today, and others are emerging, such as electro-swing, humidity-swing and mineralization-based.

In all cases, chemicals selectively bind CO₂ from the air, typically at ambient conditions (room temperature and pressure). Once the chemical has bound an adequate amount of CO₂, the system releases the CO₂ at elevated conditions, typically elevated temperature and/or decreased pressure. Once the CO₂ is released, it can be captured, compressed, transported, and stored.

This all requires infrastructure, consumables, and energy — and has a significant price tag.

There are two key costs associated with DAC: capital costs and energy costs. Capital costs are dominated by the equipment required to both capture CO₂ from air and regenerate the capture material. This infrastructure can include the specialty chemicals used to capture CO₂, the contactor used to facilitate contact between the air stream and the CO₂-capturing chemicals, and the equipment required to release CO₂ from the chemicals (such as steam generation, for solid sorbent DAC approaches, or pellet reactors, slakers, and calciners for the solvent DAC approach).

Energy costs are also a major consideration. Existing systems require between roughly 300 MW and 500 MW to capture 1 million tons of CO₂ per year — approximately equivalent to the size of an individual power plant today. Of this energy requirement, roughly 80% is thermal energy and 20% electricity, where the thermal energy is associated with the heating during the regeneration step.

Analyzing the cost of DAC also requires considering any associated greenhouse gas emissions, which effectively reduce the total amount of net removal, and thus increase the $/tCO₂ cost.

In a recent [paper](https://www.frontiersin.org/articles/10.3389/fclim.2020.618644/abstract), McQueen et al. evaluated the cost of co-constructing a solvent DAC process with its energy system.<Reference color={meta.color} data={sidenotes[1]}/> They evaluated two energy systems that burn natural gas onsite for heat and electricity, capturing nearly all of the CO₂ released during combustion, and six all-electric non-fossil systems.

To help build intuition for how different factors influence the cost of DAC, we built an [interactive calculator](https://carbonplan.org/research/dac-calculator) based directly on the model from the paper.

Here we explain the design of the model and the parameter space, and highlight some key findings.

## Factors that determine cost

Techno-economic analyses (TEAs) for emerging technologies, such as DAC, rely heavily on assumptions. These assumptions can be thought of as knobs that, when turned, affect the overall cost estimate on a $/tCO₂ removed basis. Since these knobs have varying impacts on the cost of capture, it is important to be transparent about the underlying assumptions of any TEA and understand how changing these parameters impact the costs reported for DAC.

Our calculator estimates the cost of a given DAC technology explicitly linked to the energy resource used to power it. In other words, the cost not only includes building the DAC facility, but the energy resource used to power it. We do not, however, include costs for transportation or storage. The “boundary condition” diagram below shows which costs are included.

<BoundaryCondition />

Each of these cost components in turn depend on many different parameters. Here we highlight the key parameters included in the calculator, with a brief explanation for each.

The calculator presents each of these parameters as an interactive slider. Above each slider, a chart that shows how the total cost will change as you vary that parameter, conditional on the current setting of all other parameters. So, as you change each parameter, not only can you see how the total cost changes (in the pie chart), but you can also see how it affects the sensitivity of the other parameters. Finally, a dropdown at the top lets you choose between three different sources of energy: wind, solar, and a combined-cycle natural gas turbine with carbon capture.

## Example results

### Natural gas versus electricity

A key result from the McQueen et al. paper concerns the relative cost of particular energy configurations, which you can recreate in the calculator. Specifically, the calculator explores three energy scenarios from this paper.

The first scenario uses natural gas combined with carbon capture and storage to supply electricity for the DAC plant, while natural gas combustion meets the thermal energy requirements. Here, the natural gas used in the process is assumed to be ‘leak-tight,’ or, in other words, none of the natural gas produced for use in the process is lost to the atmosphere during processing or distribution. This is a key assumption since methane, a primary component of natural gas, has a higher global warming potential (GWP) than CO2. Including methane emissions during production and supply can result in significant greenhouse gas emissions, which impacts whether a given DAC process actually results in net negative emissions. Current natural gas production in the US involves an appreciable amount of natural gas leakage, which dramatically increases the net cost of CO₂ capture. Additionally, these costs do not incorporate negative externalities that result from continued use of and dependence on fossil energy.

In the second scenario, wind turbines are used to continuously power the DAC plant which requires over-producing electricity during windy times and store the excess electricity in lithium-ion batteries. The energy storage allows for the DAC plant to continuously use electricity produced from wind, even when the wind turbines are unable to produce electricity (i.e., when the air is still). In this scenario, electric resistance heating is used to meet the thermal demands of the system as opposed to the combustion of natural gas in the first scenario.

Finally, the third scenario uses solar photovoltaics (PV) to continuously power the DAC plant. Similar to using wind turbines, solar PV requires the overproduction of electricity when the sun is shining to make up for times when there is not enough sunshine to produce electricity (i.e., at night). This requires energy storage, which is included in the form of lithium-ion batteries. Additionally, the solar PV alternative also uses electric resistance heating to meet the thermal energy demands of the DAC plant.

In the McQueen et al. paper, the authors use a series of different assumptions to develop the cost of DAC coupled to these same three energy scenarios. When systems use leak-tight natural gas as in the first energy scenario, this provides a cost estimate of $230 - $390/tCO₂, where the range is the result of varying capital costs and energy demands that are outlined within the paper. The authors develop representative capture costs of $360 – $570/tCO₂ for wind and $430 – $690/tCO₂ for solar photovoltaics (two variants assuming different daily solar availabilities).

### The relationship between WACC, capacity factor, and DAC costs

To illustrate the relationship between cost parameters and the overall cost of DAC, we have provided two examples that you can follow along with in the interactive calculator. Unless otherwise stated, these examples use the default values provided in the calculator.

In this first example, we explore the relationship between the weighted average cost of capital (WACC) and the cost of DAC. WACC is derived from combined equity and debt capital. The WACC is a weighted percent between differing interest rates from multiple lenders and can be used to calculate the capital recovery factor, which is used to annualize the capital cost of the system. In other words, the WACC is a way to discount money that exists today for its future value. The higher the WACC, the higher the annualized capital cost resulting in greater process costs.

For this example, start by moving the toggle labelled WACC from 8.5% to 10%, which is a reasonable value for a first-of-a-kind DAC plant. This causes the cost of DAC to increase from $218/tCO2 to $238/tCO2.

<ParameterScenario
  capitalExpense={936}
  WACC={0.1}
  facilityLifetime={20}
  scale={1000000}
  totalCost={238}
  variableOM={6}
  fixedOM={31}
  naturalGas={36}
  capitalRecovery={165}
/>

From 10%, we can reduce the WACC to 4%, which is similar to the WACC that you might see for a public-owned utility company. Reducing the WACC to 4% drops the cost of DAC by nearly $80/tCO2. That is a 30% reduction in the overall cost of DAC, just by modifying the WACC. Notice that the primary reason for this change results from the changing capital recovery on a per ton of CO2 captured basis.

<ParameterScenario
  capitalExpense={936}
  WACC={0.04}
  facilityLifetime={20}
  scale={1000000}
  totalCost={165}
  variableOM={6}
  fixedOM={31}
  naturalGas={36}
  capitalRecovery={165}
/>

Another interesting parameter is the capacity factor for the DAC plant. For this model, the capacity factor is the ratio of the actual operating capacity of a given industrial facility divided by the maximum operating capacity of the facility over a defined period. This includes planned down time, such as routine maintenance. The lower the capacity factor, the larger the facility needs to be to capture the same amount of CO2, or to produce an equivalent amount of electricity, as a facility with a higher capacity factor. This results in higher capital costs and higher overall process costs.

For this example, we look specifically at the capacity factor of the DAC facility. At 90%, the cost of DAC from the calculator is $218. Reminder: reset the WACC to 8.5%, which is the calculator default.

<ParameterScenario
  capitalExpense={936}
  WACC={0.085}
  facilityLifetime={20}
  scale={1000000}
  totalCost={218}
  variableOM={6}
  fixedOM={31}
  naturalGas={36}
  capitalRecovery={145}
/>

If we decrease this capacity factor to 75%, the DAC facility must be built to capture roughly 1.3 million tons to ensure that over the course of a year it captures 1 million tons, accounting for the 30% of the time that the plant is not operational.

<ParameterScenario
  capitalExpense={936}
  WACC={0.085}
  facilityLifetime={20}
  scale={1000000}
  totalCost={223}
  variableOM={6}
  fixedOM={31}
  naturalGas={36}
  capitalRecovery={150}
/>

While the calculator allows users to change multiple parameters to see how the costs of DAC change, it is important to note that not all of these combinations may be feasible. For example, the calculator allows users to set the operating and maintenance costs to $0/tCO2. However, this would not be considered an achievable value for a DAC system.

We encourage you to explore how the cost of DAC changes with different economic assumptions outside of these examples.

## Looking ahead

We hope our interactive calculator helps build intuition for the model underlying McQueen et al., and helps reveal the complex, high-dimensional relationships underlying the cost of DAC. Along with understanding the technology and finding opportunities to lower cost, evaluating different cost scenarios and energy systems can help with siting DAC facilities. Far more information and modeling is of course required for actual design, engineering, and planning, but experimenting with this tool could be the first step in evaluating existing technologies — or developing new ones.

<SectionBreak />

## Credits

Noah and Jennifer developed the underlying model. All authors developed the concept for an interactive version. Joe implemented the model in Javascript, with Noah’s guidance. Joe and Jeremy developed and implemented the interactive graphics (with input from Jonny Black of [Ordinary Things](https://ot.studio)). All authors contributed to writing the article.

Please cite as:

N McQueen, J Wilcox, J Hamman, D Cullenward, J Freeman (2021) “The cost of direct air capture” CarbonPlan https://carbonplan.org/research/dac-calculator-explainer

## Terms of engagement

CarbonPlan received no specific financial support for this work. Noah McQueen is a Ph.D. Student at the University of Pennsylvania and Jennifer Wilcox is a Professor at the University of Pennsylvania.

### Questions? Interested in collaborating on these problems? Email us at [hello@carbonplan.org](mailto:hello@carbonplan.org)

export default ({ children }) => <Article meta={meta}>{children}</Article>
