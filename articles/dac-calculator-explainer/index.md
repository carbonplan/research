import Article from '../../components/article'
import Reference from '../../components/reference'
import BoundaryCondition from './components/boundary-condition'
import ParameterTable from './components/parameter-table'

export const meta = {
  id: 'dac-calculator-explainer',
  number: 6,
  version: '1.0.0',
  color: 'purple',
  authors: ['Noah McQueen', 'Jennifer Wilcox', 'Joseph Hamman', 'Danny Cullenward', 'Jeremy Freeman'],
  title: 'The cost of direct air capture',
  date: '01-23-2021',
  background: 'article-006/dac.png',
  summary:
    'What factors drive the cost of direct air capture.'
}

# The cost of direct air capture

Direct air capture (DAC) is a technology that captures carbon dioxide (CO2) from the air using chemicals. There are several types. Sorbent and solvent DAC are in use today, and others are emerging, such as electro-swing, humidity-swing and mineralization-based. 

In all cases, chemicals selectively bind CO2 from the air, typically at ambient conditions (room temperature and pressure). Once the chemical has bound an adequate amount of CO2, the system releases the CO2 at elevated conditions, typically elevated temperature or decreased pressure. Once the CO2 is released, it can be captured, compressed, transported, and stored. 

This all requires infrastructure, consumables, and energy — and has a significant price tag.

There are two key costs associated with DAC: capital costs and energy costs. Capital costs are dominated by the equipment required to both capture CO2 from air and regenerate the capture material. This infrastructure can include the specialty chemicals used to capture CO2, the contactor used to facilitate contact between the air stream and the CO2-capturing chemicals, and the equipment required to release CO2 from the chemicals (such as steam generation, for the solid sorbent DAC approach, or pellet reactors, slakers, and calciners for the solvent DAC approach).

Energy costs are also a major consideration. Existing systems require between 300 MW and 500 MW to capture 1 million tons of CO2 per year — approximately equivalent to the size of an individual power plant today. Of this energy requirement, roughly 80% is thermal energy and 20% electricity, where the thermal energy is associated with the heating during the regeneration step. 

Analyzing the cost of DAC also requires considering any associated greenhouse gas emissions, which effectively reduce the total amount of net removal, and thus increase the $/tCO2 cost. 

In a recent [paper](https://www.frontiersin.org/articles/10.3389/fclim.2020.618644/abstract), McQueen et al. evaluated the cost of co-constructing a solvent DAC process with its energy system. They evaluated two energy systems that burn natural gas onsite for heat and electricity, capturing nearly all of the CO2 released during combustion, and six all-electric non-fossil systems.

To help build intuition for how different factors influence the cost of DAC, we built an [interactive calculator](https://carbonplan.org/research/dac-calculator) based directly on the model from the paper.

Here we explain the design of the model and the parameter space, and highlight some key findings.

## Factors that determine cost

Techno-economic analyses (TEAs) for emerging technologies, such as DAC, rely heavily on assumptions. These assumptions can be thought of as knobs that, when turned, affect the overall cost estimate on a $/tCO2 removed basis. Since these knobs have varying impacts on the cost of capture, it is important to be transparent about the underlying assumptions of any TEA and understand how changing these parameters impact the costs reported for DAC. 

Our calculator estimates the cost of a given DAC technology explicitly linked to the energy resource used to power it. In other words, the cost not only includes building the DAC facility, but the energy resource used to power it.

<BoundaryCondition/>

Each of these cost components in turn depend on many different parameters. Here we highlight the key parameters included in the calculator, with a brief explanation for each.

<ParameterTable/>

The calculator presents each of these parameters as an interactive slider. Above each slider, a chart that shows how the total cost will change as you vary that parameter, conditional on the current setting of all other parameters. So, as you change each parameter, not only can you see how the total cost changes (in the pie chart), but you can also see how it affects the sensitivity of the other parameters. Finally, a dropdown at the top lets you choose between three different sources of energy: wind, solar, and a combined-cycle natural gas turbine with carbon capture.

## Example results

### Natural gas versus electricity

A key result from the McQueen et al. paper concerns the relative cost of particular energy configurations, which you can recreate in the calculator.
When systems use leak-tight natural gas to directly meet the thermal energy requirements of the system and to produce electricity via a small natural gas combined cycle, this provides the lowest-cost energy system ($230 - $390/tCO2). However, current natural gas production in the US involves appreciable natural gas leakage, which dramatically increases the net cost of CO2 capture. The authors develop representative capture costs of $250 – $440/tCO2 for geothermal energy, $370 – $620/tCO2 for nuclear energy (two variants - a light water reactor and small modular nuclear), $360 – $570/tCO2 for wind, $430 – $690/tCO2 for solar photovoltaics (two variants assuming different daily solar availabilities), and $300 - $490/tCO2 for a hybrid system with a natural-gas-powered electric calciner.

### The relationship between ...

WACC and capacity factor?

## Looking ahead

We hope our interactive calculator helps build intuition for the model underlying McQueen et al., and helps reveal the complex, high-dimensional relationships underlying the cost of DAC. Far more information and modeling would be required for utility in actual design, engineering, planning, but experimenting with this tool could be the first step in evaluating existing technologies, or developing new ones.

<SectionBreak />

## Credits

Noah and Jennifer developed the underlying model. All authors developed the concept for an interactive version. Joe implemented the model in Javascript, with Noah’s guidance. Joe and Jeremy developed and implemented the interactive graphics (with input from Jonny Black of [Ordinary Things](https://ot.studio)). All authors contributed to writing the article.

Please cite as:

N McQueen, J Wilcox, J Hamman, D Cullenward, J Freeman (2021) “The cost of direct air capture” CarbonPlan https://carbonplan.org/research/dac-calculator-explainer

## Terms of engagement

CarbonPlan received no specific financial support for this work. Noah McQueen is a Ph.D. Student at the University of Pennsylvania and Jennifer Wilcox is a Professor at the University of Pennsylvania.

### Questions? Interested in collaborating on these problems? Email us at [hello@carbonplan.org](mailto:hello@carbonplan.org)

export default ({ children }) => <Article meta={meta}>{children}</Article>

