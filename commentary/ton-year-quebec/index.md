---
version: 1.1.0
title: Problems with Quebec's new reforestation offsets protocol
authors:
  - Grayson Badgley
  - Freya Chay
  - Jeremy Freeman
  - Kata Martin
color: pink
date: 05-03-2023
summary: Quebec's flawed reforestation offsets protocol overestimates the value of temporary carbon storage and ignores the albedo effects of planting trees.
card: ton-year-quebec
components:
  - name: EquivalenceChart
    src: ./components/equivalence-chart.js
  - name: CartoonAlbedo
    src: ./components/cartoon-albedo.js
  - name: SummaryResults
    src: ./components/summary-results.js
  - name: Nowrap
    src: ./components/nowrap.js
---

Last December, the government of Quebec adopted a [new offsets protocol](https://www.environnement.gouv.qc.ca/changements/carbone/credits-compensatoires/sequestration-carbone-boisement-reboisement-terres-prive-en.htm) under its compliance cap-and-trade program that awards offset credits for reforesting private land across the province. This commentary documents our concerns about using Quebec's protocol to offset fossil CO₂ emissions.

Quebec's reforestation protocol awards credits using [ton-year accounting](https://carbonplan.org/research/ton-year-explainer), an approach for bundling short-term carbon storage into offset credits. As we’ve [written](https://carbonplan.org/blog/ton-year-verra) [about](https://files.carbonplan.org/GHG-Protocol-Letter-11-30-2022.pdf) [elsewhere](https://carbonplan.org/research/ton-year-ncx), ton-year accounting is at best an incomplete method for valuing temporary carbon storage. At worst, it is an unscientific justification for ongoing emissions. To our knowledge, Quebec’s protocol marks the first use of ton-year accounting in a compliance carbon market. In this context, offset credits substitute for otherwise mandatory emission reductions, which makes the scientific integrity of those credits of the utmost importance.

Below, we discuss why the credits generated by Quebec’s protocol overestimate the benefits of reforestation. First, we reiterate why ton-year accounting overvalues temporary storage and how offset credits from Quebec’s reforestation protocol might actually increase long-term global temperatures. Second, we document how the protocol’s failure to account for changes in surface albedo risks significant over-crediting.

Unfortunately, our concerns with this protocol extend beyond Quebec. Because Quebec and California linked their cap-and-trade programs in 2014, credits originating from Quebec are eligible for use by regulated polluters in California. Washington State is currently considering linking its carbon market to these jurisdictions as well. We hope our analysis motivates regulators in both Washington and California to examine these issues and prevent the use of credits generated under Quebec’s reforestation protocol.

## Ton-year accounting overvalues temporary carbon storage

Quebec’s reforestation protocol uses ton-year accounting to issue offset credits for temporary CO₂ storage. Ton-year accounting asserts that temporarily storing multiple tons of CO₂ can be considered equivalent to permanently storing a single ton of CO₂. As we’ve [explained](https://carbonplan.org/research/ton-year-explainer) [previously](https://files.carbonplan.org/Verra-Ton-Year-Comment-Letter-04-08-22.pdf), ton-year accounting does not provide a credible basis for making carbon offsetting claims because it is inconsistent with the physical requirements of achieving net zero and global temperature stabilization.

When we burn fossil fuels, we add CO₂ to the atmosphere, which traps outgoing radiation and warms the planet. The more CO₂ we emit, the warmer it gets. Lowering atmospheric CO₂ concentrations has the opposite effect, which means that temporarily withholding CO₂ from the atmosphere causes short-term cooling.

Quebec’s ton-year accounting method attempts to capture the benefits of temporary storage by matching the cumulative cooling of temporarily storing CO₂ against the cumulative warming caused by emitting fossil CO₂. In doing so, Quebec’s protocol asserts that temporarily storing CO₂ fully compensates for emitting fossil CO₂ — but this claim isn’t true. Quebec’s ton-year accounting method fails to account for the fact that fossil CO₂ emissions linger in the atmosphere for thousands of years. By ignoring the long-term temperature effects of increasing atmospheric CO₂ concentrations, Quebec’s protocol overvalues the climate benefits of temporary carbon storage.

We can demonstrate this shortcoming using FaIR, a simple climate model.<Cite id='smith.2018'/> FaIR allows us to simulate the long-term temperature effects of three scenarios: emitting no CO₂ (baseline), emitting 1 Gt CO₂ with no other activities (emissions), and offsetting the emission of 1 Gt CO₂ with 10 years of carbon storage in the amount required under Quebec’s protocol (emissions + offset).<Sidenote>These scenarios are not designed to model probable outcomes of Quebec’s protocol, but instead were designed to illustrate the shortcomings of its ton-year accounting approach.</Sidenote>

<Figure>
  <EquivalenceChart />
  <FigureCaption number={1}>
    {/* prettier-ignore-start */}
    Temperature effects of using Quebec’s ton-year accounting method to make carbon
    offsetting claims. While temporarily storing CO₂ reduces temperatures <Nowrap>
      (<Orange>orange</Orange>),
    </Nowrap> combining storage with additional CO₂ emissions results in the same
    long-term temperature as emitting CO₂ alone <Nowrap>
      (<Yellow>yellow</Yellow>).
    </Nowrap> For offsetting to be consistent with net zero and temperature stabilization,
    the emissions + offset scenario would need to be similar to the baseline scenario
    of emitting nothing at all <Nowrap>
      (<Pink>pink</Pink>).
    </Nowrap> Reported temperatures only consider CO₂ effects.
    {/* prettier-ignore-end */}
  </FigureCaption>
</Figure>

An offsetting claim consistent with temperature stabilization would require the ton-year offset scenario (orange) to have the same effect on temperature as not emitting any CO₂ at all (pink). But that is not what happens. As Figure 1 shows, after initial temperature benefits, the long-term temperature outcome of the ton-year scenario (orange) is indistinguishable from the emissions-only scenario (yellow). The convergence happens because, in the ton-year scenario, post-storage atmospheric CO₂ concentrations reflect both the emission of new fossil CO₂ and the CO₂ remitted after storage. Thus, both scenarios have nearly identical concentrations of atmospheric CO₂ and long-term temperatures. Using offset credits based on ton-year accounting in lieu of mandatory emissions reductions — as enabled by Quebec’s protocol — will likely delay progress towards our long-term temperature goals over the coming decades.

Our criticisms of ton-year accounting do not mean that temporary carbon storage has no value. The problem is that we don’t yet have a framework for valuing temporary carbon storage that is properly grounded in the realities of physical climate science. More recent conversations around [horizontal and vertical stacking](https://www.carbon-direct.com/insights/accounting-for-short-term-durability-in-carbon-offsetting) or efforts to [link temporary storage with climate damages](https://doi.org/10.21203/rs.3.rs-1515075/v1) suggest new and helpful ways of thinking about the problem, and we look forward to an open and scientifically grounded conversation about how to properly value temporary storage.

## You can’t ignore albedo

Separate from our concerns about ton-year accounting, Quebec’s protocol also risks significantly overestimating the benefits of reforestation because it doesn’t account for a possible side effect of planting trees: changing albedo.

From the standpoint of the carbon cycle, trees capture and store CO₂ as they grow, which means reforestation lowers atmospheric CO₂ concentrations. However, growing more trees doesn’t always cool the planet. This perhaps unexpected result can occur because trees affect the reflectivity of the Earth — a property known as albedo. When "dark" trees are planted in places that were previously highly reflective, such as deserts or snowy parts of the world, they can decrease the Earth’s albedo. Lower albedo means less solar radiation escapes the Earth system, which warms the planet. These albedo effects can significantly diminish the climate benefits of forest carbon storage. One recent study found that decreased albedo could counteract nearly 70 percent of the potential carbon benefits gained from reforesting dryland ecosystems.<Cite id='rohatyn.2022'/> Albedo changes also matter in seasonally snow-covered Quebec, where fields blanketed with snow reflect the vast majority of incoming radiation prior to reforestation.

To better understand how ignoring albedo could result in over-crediting, we used a recently published dataset that quantified the potential radiative effects of reforestation across Canada.<Cite id='drever.2021'/> The researchers estimated the 10th, 50th, and 90th percentile of albedo-induced changes in radiative forcing using four separate radiative kernels and then aggregated the results regionally. Helpfully, the authors converted their estimates of albedo-induced changes from units of radiative forcing (watts / m²) into units more useful for carbon accounting (kg C / m²). This conversion allows us to directly compare the radiative effects of albedo to the radiative effects of temporary CO₂ storage.

We focused our attention on [the Appalachians ecoregion](http://www.ecozones.ca/english/zone/AtlanticMaritime/ecoregions.html) of southern Quebec, which runs along the southern bank of the St. Lawrence River. Numerous studies have identified abandoned farmland in the area as a high-priority target for reforestation, making it a useful region for exploring the trade-offs of reforestation and surface albedo.<Cite ids={['drever.2021','vouligny.2008']} hide={[true, false]}/>

When considering albedo alone, adding trees to currently unforested parts of southern Quebec warms the planet. Planting a hectare of evergreen trees, like spruce or fir, has the same warming effect caused by emitting 125.03 t CO₂ (80% CI: 107.43 to 143.92 t CO₂ / ha). Planting a hectare of deciduous trees, like maple or beech, has a smaller effect and results in warming equivalent to emitting 44.18 t CO₂ (80% CI: 29.33 to 54.27 t CO₂ / ha). Deciduous trees have a smaller effect because they shed their leaves during the winter, which exposes more snow that reflects a greater proportion of incoming radiation (Figure 2). Evergreen trees, by contrast, not only keep their leaves year round, but also tend to have significantly denser canopies, causing a larger decrease in surface albedo and greater warming.

<Figure>
  <CartoonAlbedo />
  <FigureCaption number={2}>
    The radiative effects of trees from the standpoint of carbon storage (left)
    and albedo (right). Properly evaluating the climate benefits of
    reforestation, especially in snowy regions, requires considering both carbon
    and albedo effects. Even if different tree types sequester the same amount
    of carbon (left), they can have different effects on albedo (right).
    Evergreen trees keep their leaves all winter long, which causes larger
    changes in albedo. Quebec's protocol only considers the benefits of
    reforestation through the lens of carbon storage, which results in
    over-crediting.
  </FigureCaption>
</Figure>

Reforestation, of course, also removes CO₂ from the atmosphere, so we must consider CO₂ removal and albedo effects together to estimate net climate benefits. Let’s examine a hypothetical spruce reforestation project, which offers a representative example given that roughly 96 percent of Quebec’s previous reforestation efforts have involved planting evergreen species.<Cite id='white.2005'/> According to one estimate, spruce plantations in southern Quebec can store upwards of 275 t CO₂ / ha at maturity.<Cite id='tremblay.2006'/> Because Quebec’s protocol only accounts for the benefits of CO₂ storage, the reforested spruce plantation would receive offset credits based on the full storage amount of 275 t CO₂ / ha. But if we account for the warming caused by decreased albedo, our hypothetical spruce plantation would only provide net cooling equivalent to 150 t CO₂ / ha (275 - 125 = 150). In this simplified example, which only considers peak carbon storage, the protocol would overestimate crediting by 45.5 percent (Figure 3; 80% CI: 39.1 to 52.3 percent). Planting deciduous trees, with their smaller albedo effects, would result in less over-crediting. Assuming deciduous plantations have the same peak carbon storage capacity as their evergreen counterparts (275 t CO₂ / ha), ignoring albedo effects results in over-crediting of 16.1 percent (80% CI: 10.7 to 19.7 percent).<Sidenote>It’s difficult to precisely estimate potential over-crediting in the deciduous case because we could not identify a reliable estimate of the likely CO₂ storage of reforested deciduous stands.</Sidenote>

<Figure>
  <SummaryResults />
  <FigureCaption number={3}>
    Potential over-crediting caused by ignoring albedo effects when reforesting
    southern Quebec. Values reported here are for demonstrative purposes, as
    precisely quantifying over-crediting requires site-specific carbon and
    albedo data.
  </FigureCaption>
</Figure>

While a rough estimate, this example demonstrates that albedo effects matter. Estimating over-crediting with more precision would require data on site-specific forest biomass accumulation and higher spatial resolution estimates of albedo effects. It would also require more careful consideration of the variable time dynamics of albedo changes and biomass accumulation. Forest canopies rapidly expand during the early stages of growth, causing similarly rapid changes in surface albedo. Biomass, on the other hand, accumulates steadily over time and can lag canopy closure by decades or more. As a result, the warming caused by albedo changes may occur before the cooling caused by forest growth. By ignoring these time dynamics, Quebec's protocol might credit reforestation projects while they are actively warming the planet.

## Conclusion

Our analysis shows that Quebec’s reforestation offsets protocol is critically flawed in two ways.

First, it relies on ton-year accounting, which overvalues temporary carbon storage and produces offset credits that do not compensate for the full climate damages of emitting fossil CO₂. The lack of assurance that these credits can deliver on temperature goals over the coming decades, let alone the next 100 years, challenges their usefulness altogether.

Second, Quebec's protocol fails to account for albedo changes, which could overestimate the climate benefits of reforestation in Quebec by 50% or more. From a crediting standpoint, the potential scale of this problem is significant. The same study that quantified the albedo effects of reforestation across Canada estimated that there are over 800,000 hectares of reforestable land in Quebec.<Cite id='drever.2021' hide={['true']}/> Even with conservative assumptions, such as reforesting 15 percent of that land with each reforested hectare generating 20 credits, the scale of potential over-crediting climbs into the millions.

Quebec should take immediate steps to address both of these concerns.

We end with a cautionary note. Quebec’s adoption of a flawed protocol demonstrates the risks of linking regional carbon markets. Because Quebec and California have [formally linked](https://ww2.arb.ca.gov/our-work/programs/cap-and-trade-program/program-linkage) their cap-and-trade programs, polluters in California can now use ton-year credits generated in Quebec to satisfy their compliance emission requirements under California law.<Sidenote><a href="https://govt.westlaw.com/calregs/Document/I15A135F35A2111EC8227000D3A7C4BC3?viewType=FullText&originationContext=documenttoc&transitionType=CategoryPageItem&contextData=(sc.Default)"> California Code of Regulations Title 17 § 95943(a)(1)</a></Sidenote> However, based on our analysis, credits generated under Quebec’s protocol do not appear to satisfy California’s statutory permanence requirement "that mechanisms are in place...to ensure that all credited reductions endure for at least 100 years."<Sidenote><a href="https://govt.westlaw.com/calregs/Document/I11A095435A2111EC8227000D3A7C4BC3?viewType=FullText&originationContext=documenttoc&transitionType=CategoryPageItem&contextData=(sc.Default)">California Code of Regulations Title 17 § 95802</a></Sidenote> We urge California’s policymakers to reexamine this protocol and take steps to prevent the use of ton-year-backed offset credits. The emergence of this sort of divergence in standards should come as no surprise — carbon market experts have long warned that market linkages introduce complexity and can undermine ambition.<Cite id='green.2014'/> Policymakers in Washington State should take note as they [contemplate linking their own carbon market](https://ecology.wa.gov/Air-Climate/Climate-Commitment-Act/Cap-and-invest/linkage) with Quebec and California, so that these problems do not propagate further.

<Endnote label='Credits' divider>

Freya implemented Quebec’s ton-year accounting method in the Python `tonyear` package and wrote the code underlying Figure 1. Grayson assembled the data to explore albedo effects. Kata and Jeremy designed the tables and figures. Grayson, Freya, and Jeremy wrote the text.

Please cite as:

G Badgley, F Chay, J Freeman, and K Martin (2023) “Problems with Quebec's new reforestation offsets protocol” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/ton-year-quebec](https://carbonplan.org/research/ton-year-quebec)</span>

</Endnote>

<Endnote label='Acknowledgements'>

Special thanks to [Chris Williams](https://www2.clarku.edu/faculty/facultybio.cfm?id=715) at Clark University for sharing the albedo-induced radiative forcing data from Drever et al., 2022 and for his constructive replies to our questions about the data. Danny Cullenward provided an initial reading and analysis of how California’s cap-and-trade program treats offset credits generated by Quebec’s program.

The authors are solely responsible for any mistakes or omissions.

</Endnote>

<Endnote label='Terms'>

CarbonPlan received [no specific financial support](https://carbonplan.org/funding) for this work. No one except the authors exercised control over the research process or products. The authors are solely responsible for the content of this commentary, which does not reflect the views of any other individuals or organizations.

Article text and figures made available under a [CC BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/). The [code](https://www.github.com/carbonplan/ton-year-quebec) underlying this commentary is made available under an [MIT license](https://choosealicense.com/licenses/mit/).

</Endnote>