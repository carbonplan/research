---
id: dac-calculator-explainer
number: 6
version: 1.0.0
color: purple
authors:
  - Noah McQueen
  - Jennifer Wilcox
  - Joseph Hamman
  - Jeremy Freeman
title: The cost of direct air capture
date: 02-01-2021
background: articles/006/wind
card: dac-calculator-explainer
quickLook: How the cost of direct air capture varies under different energy scenarios
summary: We developed an interactive tool for exploring the cost of direct air capture (DAC) coupled to stand alone energy sources. Read this article, explore the calculator tool, or read the associated publication to learn more.
icon: articles/006/wind-small
links:
  - label: Calculator tool
    href: /research/dac-calculator
  - label: Related publication
    href: https://www.frontiersin.org/articles/10.3389/fclim.2020.618644/abstract
components:
  - name: BoundaryCondition
    src: ./components/boundary-condition.js
  - name: CostSummary
    src: ./components/cost-summary.js
  - name: ParameterScenario
    src: ./components/parameter-scenario.js
---

Direct air capture (DAC) is a technology that removes carbon dioxide (CO₂) from the air using chemicals. There are several types. Solid sorbent and liquid solvent DAC are in use today. Others are emerging, such as electro-swing, humidity-swing, and mineralization-based.

In all types of DAC, chemicals selectively bind CO₂ from the air, typically at ambient conditions (room temperature and pressure). Once the chemical has bound an adequate amount of CO₂, the system releases the CO₂ at elevated temperature and/or decreased pressure. Once the CO₂ is released, it can be captured, and, if high purity, compressed, transported, and stored.

These activities require infrastructure, consumables, and energy — all of which have a significant price tag.

There are two key costs associated with DAC: capital costs and energy costs. Capital costs are dominated by the equipment required to capture CO₂ from air and regenerate the capture material, including the specialty chemicals used to capture CO₂, the contactor used to facilitate contact between the air stream and the CO₂-capturing chemicals, and the equipment required to release CO₂ from the chemicals.

Energy costs are also significant. Existing systems require between roughly 180 MW and 500 MW to capture 1 million tons of CO₂ per year — about as large as an individual power plant today. Of this energy requirement, roughly 80% is thermal energy and 20% electricity, where the thermal energy is required for heating to regenerate the capture material.

Analyzing the cost of DAC also requires considering any associated greenhouse gas emissions, which effectively reduce the total amount of net removal, and thus increase the [net removed cost](https://cdrprimer.org/read/chapter-4#sec-4-3) — a metric that divides the base cost by one minus the ratio of CO₂eq emitted to CO₂eq removed.<Cite id='mcqueen.2021'/>

In a recent [paper](https://www.frontiersin.org/articles/10.3389/fclim.2020.618644/abstract), McQueen et al. evaluated the cost of co-constructing a solvent DAC process with its energy system.<Cite id='mcqueen.2021.b'/> They evaluated two energy systems that burn natural gas onsite for heat and electricity, capturing nearly all of the CO₂ released during combustion, and six all-electric non-fossil systems.

To help build intuition for how different factors influence the cost of DAC in these scenarios, we built an open source <Link href={'/research/dac-calculator'}>interactive calculator</Link> based directly on the model from the paper. The model is written in JavaScript and runs natively in the browser.

Here we explain the design of the model and the parameter space, and highlight some key insights.

## Factors that determine cost

### Boundary conditions

Techno-economic analyses (TEAs) for emerging technologies, such as DAC, rely heavily on assumptions about which parameters are included in the "boundary" of the analysis. These parameters then act as knobs that, when turned, affect the overall estimate of net removal cost in units of $/tCO₂eq. Transparency about the assumptions underlying any TEA are critical, as is understanding how changing parameters impacts cost estimates.

Our calculator estimates the cost of a given DAC technology explicitly linked to the energy resource used to power it. In other words, the cost not only includes building the DAC facility, but also building the energy infrastructure. We do not, however, include costs for CO₂ transportation or storage. In the case of natural gas with carbon capture and storage, the carbon capture process is inside the boundary, but transportation and storage is outside. The “boundary condition” diagram below shows which costs are included.

<Figure>
  <BoundaryCondition />
  <FigureCaption number={1}>
    Boundary conditions for the DAC cost calculator. <Purple>Purple</Purple> box
    bounds the components considered for our analysis.
  </FigureCaption>
</Figure>

Each of these cost components in turn depend on parameters, which are presented in the calculator as interactive sliders. Above each slider, a chart shows how the total net removed cost will change as you vary that parameter, conditional on the current setting of the others. So, as you change each parameter, not only can you see how the total cost changes, but you can also see how it affects sensitivity to the other parameters. Finally, a dropdown at the top lets you choose between three different sources of energy, which we will now describe.

### Energy scenarios

The calculator allows you to explore three of the energy scenarios that McQueen et al. considered.

The first scenario uses natural gas combined with carbon capture and storage (NGCC) to supply electricity for the DAC plant, while natural gas combustion meets the thermal energy requirements. A key issue when considering NGCC for powering DAC is that any greenhouse gas emissions created in the process reduce the effective net removal, and thus increase the net removal cost. The model assumes that natural gas combustion for electricity production is coupled with carbon capture at 90% capture efficiency. The remaining 10% of emissions from electricity production are considered net emissions and factored into net removed cost. Additionally, the model assumes that all the natural gas combusted for thermal energy is co-captured by the process, resulting in no emissions from combustion.

For natural gas we also have to consider leakage, which is substantial — we use a default rate of 2.2% but rates as high as 3.7% have been reported for the Permian Basin region of the United States.<Cite id='zhang.2020'/> In the model, we assume that some fraction of natural gas is lost to the atmosphere during processing or distribution, with the fraction controlled by a leakage rate parameter. Methane, a primary component of natural gas, has a higher [global warming potential (GWP)](https://cdrprimer.org/read/chapter-4) than CO₂. The model uses a GWP 100 of 32 to calculate the CO₂ equivalent of methane emissions, which are then factored into the net removed cost. As we will show below, given the definition of net removed cost, it is possible to create parameter scenarios with NGCC that do not achieve net carbon removal, because emissions are too large.<Cite id='grubert.twitter'/> The costs we report do not include non-greenhouse gas negative externalities that result from continued use of and dependence on fossil energy, which could be a critical factor in considering different energy sources for DAC.

In the second scenario, wind turbines are used to continuously power the DAC plant which requires over-producing electricity during windy times and storing the excess electricity in lithium-ion batteries. The energy storage allows the DAC plant to continuously use electricity produced from wind, even when the wind turbines are unable to produce electricity (i.e. when the air is still). In this scenario, electric resistance heating is used to meet the thermal demands of the system as opposed to the combustion of natural gas in the first scenario.

The third scenario uses solar photovoltaics (PV) to continuously power the DAC plant. Similar to using wind turbines, solar PV requires the overproduction of electricity when the sun is shining to make up for times when there is not enough sunshine to produce electricity (i.e. at night). This requires energy storage, which is included in the form of lithium-ion batteries. The solar PV alternative also uses electric resistance heating to meet the thermal energy demands.

## Key insights

With default settings, the calculator yields the highest cost for solar, second highest for wind, and lowest for NGCC.<Cite id='horizontal.defaults'/> But, as we will explore, these costs reflect just one specific set of assumptions.

<Figure>
  <CostSummary
    windTotalCost={365.476}
    windVariableOM={4}
    windFixedOM={63.834}
    windCapitalRecovery={297.642}
    solarTotalCost={435.853}
    solarVariableOM={4}
    solarFixedOM={67.679}
    solarCapitalRecovery={364.174}
    NGCCTotalCost={264.979}
    NGCCVariableOM={7.332}
    NGCCFixedOM={42.157}
    NGCCCapitalRecovery={182.271}
    NGCCNaturalGas={33.219}
  />
  <FigureCaption number={2}>
    Net removed costs ($/tCO₂eq) for three energy configurations.
  </FigureCaption>
</Figure>

Here we explore three alternative scenarios in detail: a higher cost NGCC scenario, a lower cost wind scenario, and an NGCC scenario with a higher leakage rate.

To model higher cost NGCC, we use parameters from a DAC facility described in a 2011 report from the American Physical Societies,<Cite id='socolow.2011'/> including corrections from two additional follow-on analyses.<Cite ids={['mazzotti.2013', 'zeman.2014']}/> In using these reports we are assuming a higher DAC plant cost and slightly higher electricity and thermal energy requirements than some other estimates.<Cite id='vertical.defaults'/>

<Figure>
  <ParameterScenario
    energySource={'NGCC'}
    capEx={2027}
    electricReq={1.7}
    thermalReq={7.2}
    leakage={2.2}
    totalCost={434}
    variableOM={8.032}
    fixedOM={43.874}
    naturalGas={41.576}
    capitalRecovery={340.47}
  />
  <FigureCaption number={3}>
    Summary for a higher cost NGCC scenario.
  </FigureCaption>
</Figure>

To model a hypothetical lower cost wind scenario, we keep the default capital expenses the same, which are based on a DAC facility described in Keith et al. (2018),<Cite id='keith.2018'/> and we assume lower electricity and thermal energy requirements.

<Figure>
  <ParameterScenario
    energySource={'wind'}
    capEx={936}
    electricReq={0.6}
    thermalReq={4.4}
    totalCost={313}
    variableOM={4}
    fixedOM={56.37}
    naturalGas={0}
    capitalRecovery={252.37}
  />
  <FigureCaption number={4}>
    Summary for a lower cost wind scenario.
  </FigureCaption>
</Figure>

Finally, returning to the higher cost NGCC example, we can further consider increasing the natural gas leakage rate from the default of 2.2% to 3.7%. With these parameters, net removed cost increases to $490, higher than for any of the scenarios considered thus far.

<Figure>
  <ParameterScenario
    energySource={'NGCC'}
    capEx={2027}
    electricReq={1.7}
    thermalReq={7.2}
    leakage={3.7}
    totalCost={490}
    variableOM={9.077}
    fixedOM={49.577}
    naturalGas={46.982}
    capitalRecovery={384.736}
  />
  <FigureCaption number={5}>
    Summary for a higher cost NGCC scenario with higher leakage.
  </FigureCaption>
</Figure>

As these comparisons show, the energy source on its own does not determine how scenarios stack up — the full parameter space matters.

For NGCC in particular, is it also possible for emissions to be so high that the system no longer achieves carbon removal. This would occur in the above scenario if we were to use a GWP20 of 86 for methane instead of a GWP100 of 32. Even with a GWP100 of 32, higher electricity and thermal requirements coupled to even higher leakage rates could result in no net removal, as shown here, though note that these are extremely high values.

<Figure>
  <ParameterScenario
    energySource={'NGCC'}
    capEx={2027}
    electricReq={6.5}
    thermalReq={9.1}
    leakage={6.9}
    totalCost={'N/A'}
    variableOM={'N/A'}
    fixedOM={'N/A'}
    naturalGas={'N/A'}
    capitalRecovery={'N/A'}
  />
  <FigureCaption number={6}>
    Summary for an NGCC scenario that does not achieve carbon removal.
  </FigureCaption>
</Figure>

A final note is that not all parameter combinations may be feasible. For example, the calculator allows users to set operating and maintenance costs to $0/tCO₂, but this would not be considered an achievable value for realistic DAC systems.

We encourage you to explore how the cost of DAC changes with different economic assumptions outside of these examples — and think carefully about the assumptions underlying parameter choices in any such exercise.

## Looking ahead

We hope our interactive calculator provides intuition and transparency around the complex, high-dimensional parameter relationships underlying the cost of DAC. Along with understanding the technology itself, and finding opportunities to lower costs, evaluating different cost scenarios and energy systems can help with siting DAC facilities. Far more information and modeling is of course required for actual design, engineering, and planning, but experimenting with this tool could be the first step in evaluating existing approaches — or developing new ones.

<Endnote label='Credits' divider>

Noah and Jennifer developed the underlying model with their collaborators Michael J. Desmond, Robert H. Socolow, and Peter Psarras. All authors of this article developed the concept for an interactive version. Joe implemented the model in JavaScript, with Noah’s guidance. Joe and Jeremy developed and implemented the interactive graphics with input from Jonny Black of [Ordinary Things](https://ot.studio). All authors contributed to writing the article.

Please cite as:

N McQueen, J Wilcox, J Hamman, J Freeman (2021) “The cost of direct air capture” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/dac-calculator-explainer](https://carbonplan.org/research/dac-calculator-explainer)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan received no specific financial support for this work. Noah McQueen is a Ph.D. Student at the University of Pennsylvania and Jennifer Wilcox is a Professor at the University of Pennsylvania.

Article text and figures made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/). Open source implementation of the [DAC cost calculator](https://carbonplan.org/research/dac-calculator) made available under an [MIT license](https://github.com/carbonplan/research/blob/main/LICENSE).

</Endnote>
