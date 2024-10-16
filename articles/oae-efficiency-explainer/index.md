---
version: 1.0.0
title: Mapping the efficiency of ocean alkalinity enhancement
authors:
  - Matthew C. Long
  - Freya Chay
  - Mengyang Zhou
  - Michael Tyka
  - Shane Loeffler
  - Kata Martin
  - Thomas Nicholas
  - Elizabeth Yankovsky
  - David Ho
  - Alicia Karspeck
color: blue
date: 10-15-2024
summary: Increasing the alkalinity of the ocean can help increase CO₂ absorption. But the same techniques won’t lead to the same outcomes everywhere. We collaborated with [C]Worthy to build a tool that will make it easier to see where ocean alkalinity enhancement is most efficient.
quickLook: This new dataset and tool make it easier to see how the efficiency of ocean alkalinity enhancement varies around the world. Developed in collaboration with [C]Worthy.
card: oae-efficiency-explainer
background: articles/027/droplet
icon: articles/027/droplet-small
components:
  - name: FluxMap
    src: ./components/flux-map.js
  - name: PhysicalProcesses
    src: ./components/physical-processes.js
  - name: ModelingMethods
    src: ./components/modeling-methods.js
  - name: EfficienciesMap
    src: ./components/efficiencies-map.js
  - name: RegionalComparison
    src: ./components/regional-comparison.js
  - name: AlkChemDiagram
    src: ./components/alk-chem-diagram.js
  - name: CarbChemDiagram
    src: ./components/carb-chem-diagram.js
  - name: DataWrapper
    src: ./components/data.js
  - name: HCO3
    src: ./components/chemistry.js
  - name: CO3
    src: ./components/chemistry.js
links:
  - label: Map tool
    href: /research/oae-efficiency
  - label: Paper (in press)
    href: https://doi.org/10.21203/rs.3.rs-4124909/v1
  - label: Dataset
    href: https://beta.source.coop/repositories/cworthy/oae-efficiency-atlas/description/
---

<DataWrapper>
The ocean plays an essential role in the global carbon cycle. It stores about 38,000 billion metric tons of carbon, making it the largest active reservoir of carbon on the planet. It also soaks up about one quarter of the CO₂ emitted annually by humans. Scientists and engineers are currently exploring how to amplify the ocean’s natural ability to absorb and store carbon. One promising approach is called ocean alkalinity enhancement (OAE). OAE mimics natural geochemical processes that shift ocean chemistry to remove CO₂ from the atmosphere. This could be a highly scalable approach to carbon dioxide removal (CDR), but making it work requires a rigorous understanding of ocean processes and how they vary over time and space.

OAE relies on adding alkaline materials, like crushed rocks or hydroxides, to the surface ocean — but this action alone does not guarantee carbon removal.<Sidenote>Strictly speaking, electrochemical OAE methods actually remove acid from the surface ocean, but this is functionally equivalent to adding a base such as hydroxide.</Sidenote> Instead, these materials shift the chemistry of the water, making it able to absorb and store more CO₂. Although this initial chemical shift happens quickly, it takes time for the ocean to absorb CO₂ from the atmosphere. Since the ocean is always in motion, carbon removal can happen far from where alkalinity is added. Furthermore, if ocean circulation moves the alkalinity-treated water away from the surface and out of contact with the atmosphere, the process of absorbing atmospheric CO₂ can be cut short. Natural variations in these physical circulation dynamics mean that alkalinity deployed in different locations or at different times of the year can result in different amounts of carbon removal. Understanding these dynamics is critical for deciding where and when it makes sense to pursue OAE, and estimating how much carbon actually gets removed from the atmosphere.

The OAE Efficiency Map is a new tool for understanding these dynamics and informing related decisions. Using a global ocean biogeochemical model, [[C]Worthy](https://cworthy.org/) and collaborators simulated how efficiently OAE leads to carbon removal and its dependence on the location and season in which the alkaline materials are added to the ocean, and described the results in a [scientific paper](https://doi.org/10.21203/rs.3.rs-4124909/v1) (in press). The “efficiency” of OAE is defined as the amount of CO₂ that will be transferred from the atmosphere to the ocean per unit of alkalinity added. Together, [C]Worthy and CarbonPlan have turned this dataset into an [interactive online tool](/research/oae-efficiency). With it, you can explore global patterns in OAE efficiency, and drill down to visualize how alkalinity released in a specific region and season will move through the ocean and result in carbon removal over time.

Scientists, companies, policymakers, and society at large are all still learning about OAE — both its potential as a carbon removal strategy and its safety for ocean ecosystems. We hope this tool helps build intuition about how OAE works, supports smart decision-making about real-world deployments, and informs ongoing efforts to create scientifically informed standards and effective regulatory frameworks for ocean-based CDR.

## Introduction to Ocean Alkalinity Enhancement

If you’re new to OAE, there are a few foundational concepts that are important to understand in order to interpret our methods and effectively use the new tool.

### 01 — The ocean stores enormous amounts of carbon and constantly exchanges CO₂ with the atmosphere.

CO₂ is constantly being passed back and forth between the ocean and the atmosphere to maintain equilibrium — a state in which the concentration of dissolved CO₂ at the surface of the ocean is in balance with the amount of CO₂ gas in the atmosphere.<Sidenote>Notably, the deep ocean does not stay close to equilibrium with the atmosphere, which is one reason the ocean can store so much carbon. When ocean circulation brings deep water to the surface, it can exchange CO₂ with the atmosphere. However, since the ocean is stratified and of such large volume, ventilating the deep ocean requires hundreds to thousands of years.</Sidenote> Each year, around 330 billion metric tons (petagrams) of CO₂ are absorbed and released by the ocean, a massive exchange of carbon with the atmosphere that includes strong regional and seasonal patterns (Figure 1). But these massive fluxes of carbon in and out of the ocean don’t perfectly balance. Because human-derived emissions have increased the amount of CO₂ in the atmosphere, the ocean absorbs an additional 10 petagrams of anthropogenic CO₂ annually.<Cite id='friedlingstein.2023'/>

<Figure>
  <FluxMap />
  <FigureCaption number={1}>
    Historical simulation of the exchange of CO₂ between the ocean and
    atmosphere. These are data from a high-resolution (0.1° x 0.1°) numerical
    simulation using the [Community Earth System
    Model](https://www.cesm.ucar.edu/).
    <Cite id='Krumhardt.2024' /> Negative values indicate that CO₂ is being transferred
    into the ocean, while positive values indicate transfer of CO₂ out of the ocean
    and into the atmosphere. The patterns in this animation reflect the combined
    influence of ocean circulation and mixing, biological productivity, surface warming
    and cooling, and variations in the winds.
  </FigureCaption>
</Figure>

Air-sea gas exchange ensures that the concentration of CO₂ in the surface ocean is approximately in balance with CO₂ in the atmosphere — but the ocean stores much more carbon than we would expect if all the carbon was in the form of dissolved CO₂ gas. When CO₂ dissolves in seawater, it forms a weak acid called carbonic acid (H₂CO₃), which dissociates to form bicarbonate (<HCO3 />) and carbonate (<CO3 />) ions. Only about 1% of the carbon in the ocean is CO₂ — the majority is stored in the form of bicarbonate (~90%) and carbonate (~10%) ions. Unlike CO₂, bicarbonate and carbonate ions cannot directly exchange with the atmosphere and storing carbon in these forms increases the ocean’s total carbon storage capacity. The chemical reactions relating CO₂, bicarbonate, and carbonate ions are referred to as “carbonate chemistry.”

<Figure>
  <CarbChemDiagram />
  <FigureCaption number={2}>
    Schematic of air-sea CO₂ transfer and seawater carbonate chemistry.{' '}
  </FigureCaption>
</Figure>

Together, the sum of dissolved CO₂, bicarbonate, and carbonate ions is referred to as dissolved inorganic carbon (DIC). The balance between dissolved CO₂, bicarbonate, and carbonate — and, as a result, the total quantity of DIC that is in equilibrium with a given amount of CO₂ in the atmosphere — is controlled by the pH of seawater. Relatively more bicarbonate and carbonate ions are stored per mole of dissolved CO₂ when seawater has a higher pH (more basic) as compared to a lower pH (more acidic). Put another way, adding acid shifts the system toward dissolved CO₂, while adding a base shifts the system toward bicarbonate and carbonate ions. Importantly, adding dissolved CO₂ to the ocean — and the subsequent formation of carbonic acid — lowers the pH of seawater. This phenomenon is known as ocean acidification, and, in addition to providing an important feedback on the carbonate chemistry relationships described above, it has direct implications for marine organisms that are sensitive to pH.<Cite id='doney.2009'/>

### 02 — Adding alkaline materials shifts seawater chemistry, and creates space for the ocean to absorb more CO₂.

Adding alkaline materials to the ocean raises the pH of the solution. By raising the pH, alkaline materials allow the carbonate chemistry system to shift toward bicarbonate and carbonate ions. This creates a deficit in dissolved CO₂, which is replenished as CO₂ is transferred from the atmosphere to the ocean to restore equilibrium. Thus, OAE achieves carbon removal through air-sea CO₂ re-equilibration. If re-equilibration is fully achieved, dissolved CO₂ and pH values return to near their starting state, but the overall quantity of carbon stored in the ocean will have increased.

<Figure>
  <AlkChemDiagram />
  <FigureCaption number={3}>
    Schematic showing how adding alkalinity to seawater affects ocean carbon
    storage.{' '}
  </FigureCaption>
</Figure>

The maximum possible carbon removal that can be achieved by adding alkalinity to the ocean is determined by how much additional carbon would be dissolved if the seawater was permitted to fully re-equilibrate with the atmosphere. Perhaps counterintuitively, this potential differs based on where you are in the ocean. In the tropics, for example, adding one mole of alkalinity can be expected to achieve a maximum uptake of about 0.7 to 0.8 moles of carbon. High latitude regions have a greater maximum efficiency, closer to 0.9 moles of carbon per mole alkalinity. Estimates like these are referred to as the “thermodynamic maximum efficiency” of OAE. The differences in maximum efficiency are explained by differences in the temperature, salinity, and background chemistry at the surface ocean.

### 03 — Physical processes in the ocean influence how much CO₂ is ultimately transferred from the atmosphere to the ocean after alkaline materials are added.

Although it’s easy to calculate the maximum potential carbon removal from an alkalinity addition, the physical dynamics of the ocean — like surface turbulence, ocean currents, and vertical mixing — play an important role in determining whether that maximum potential efficiency is achieved.<Cite id='he.2023'/>

Air-sea CO₂ equilibration in response to an alkalinity addition takes time because it requires diffusing molecules from the air into the water. Furthermore, the carbonate chemistry of seawater means that CO₂ equilibration takes much longer than the equilibration for other gasses, such as oxygen (O₂). Because most of the CO₂ transferred into the ocean ends up as bicarbonate and carbonate ions, about 20 moles of CO₂ must be absorbed from the atmosphere to get a 1 mole change in the dissolved CO₂ in the ocean.<Sidenote>Similar to the thermodynamic maximum efficiency, this ratio — the amount of CO₂ transfer required to change the dissolved CO₂ concentration — varies as a function of latitude due to differences in surface ocean carbon chemistry. At high latitudes, less CO₂ transfer is required to change the dissolved CO₂ concentration, hence the gas exchange equilibration timescale tends to be shorter than in the tropics.</Sidenote> While carbonate chemistry defines the amount of CO₂ that’s necessary to transfer to achieve equilibrium, the rate of gas exchange, called the gas transfer velocity, is dependent on wind speed. Winds drive turbulence and create bubbles in the surface ocean. Higher winds more effectively refresh the water at the air-sea interface and create more bubbles, accelerating air-sea gas exchange.

Since air-sea gas equilibration takes a long time and the ocean is constantly moving, CO₂ uptake from the atmosphere doesn’t just happen in one place. Alkalinity added to the ocean is transported away from the source region by ocean currents. Since reaching equilibrium takes time, the CO₂ absorption following an OAE deployment has the potential to happen over a very large region. And if alkalinity is removed from the surface ocean, air-sea gas equilibration can be cut short. This is a particular concern in areas where surface waters are subducting and in high-latitude regions where high winds and cold surface conditions drive energetic vertical mixing.

<Figure>
  <PhysicalProcesses />
  <FigureCaption number={4}>
    Schematic representation of the factors controlling OAE efficiency. The rate
    of CO₂ gas equilibration (left column) is determined by the gas transfer
    velocity, which depends on wind speed. Since CO₂ gas equilibration takes a
    long time, ocean currents can distribute the added alkalinity — and hence
    the CO₂ uptake — over large regions (middle column). Finally, removal of
    alkalinity from the surface ocean by vertical mixing or subduction shuts off
    CO₂ gas exchange (right column), limiting the total CO₂ uptake and OAE
    efficiency.
  </FigureCaption>
</Figure>

## Creating the OAE Efficiency Dataset

We created the OAE efficiency dataset to explore
how adding alkalinity to the ocean at different locations and seasons results in
diverse carbon removal outcomes. In this dataset, we define OAE efficiency as the
amount of CO₂ that is transferred from the atmosphere to the ocean per unit of alkalinity
added.<Sidenote>Note that this dataset does not consider the CO₂ emissions associated with the upstream energy and material handling requirements needed to deliver alkalinity to the ocean — it just describes the effect on ocean CO₂ uptake once alkalinity has been added to the ocean.</Sidenote>

To model OAE efficiency, we used a coarse-resolution global ocean circulation model from the [Community Earth System Model](https://www.cesm.ucar.edu/).<Sidenote>The model we used has a horizontal resolution (grid spacing) of about 100 km, which is a fairly standard resolution for models used for climate projections.</Sidenote> We first divided the ocean surface into regions of approximately similar size. To do so, we used a machine learning algorithm ([K-means clustering](https://github.com/CWorthy-ocean/oae-dor-global-efficiency/blob/main/analysis/Polygons.ipynb)) to fill each ocean basin with polygons of approximately similar surface areas. We delineated the exclusive economic zones<Sidenote>The exclusive economic zones are defined by the region within 200 nautical miles of a country’s coastline.</Sidenote> separately and filled these regions with more, smaller polygons to improve the resolution along coastlines. Next, we conducted a 15-year OAE simulation for each polygon in each of the four seasons. During the initial month of these simulations, we released alkalinity uniformly over the surface of the polygon at a rate of 10 mol m⁻² yr⁻¹.<Sidenote>The efficiency curves computed by the model are not strongly dependent on the magnitude of this flux, since the carbonate system is approximately linear over a broad range of perturbations. Using another model, [He and Tyka (2023)](https://doi.org/10.5194/bg-20-27-2023) showed that an injection rate of 10 mol m⁻² yr⁻¹ does not raise the local pH beyond about 0.1 units and we confirmed that this result holds in our model. Thus, at this injection rate, carbonate saturation levels do not incur substantial risk of precipitation. The practicality of delivering this quantity of alkalinity to the ocean is a separate question. [He and Tyka (2023)](https://doi.org/10.5194/bg-20-27-2023) also examined ship-based alkalinity delivery. Given the size of the polygons used in this study, the alkalinity addition rate of 10 mol m⁻² yr⁻¹ could be sustained by 4–72 ships operating within each region, presuming a release of liquid or readily-dissolved material.</Sidenote> We then ran the model forward in time to simulate the movement of the perturbed water and the ensuing difference in air-sea CO₂ equilibration relative to a simulation where no OAE intervention took place.

<Figure>
  <ModelingMethods />
  <FigureCaption number={5}>
    Process flow diagram illustrating the procedure for generating the OAE
    Efficiency Map. We used a global ocean biogeochemical model to simulate the
    effects of alkalinity surface forcing applied within different regions and
    all four seasons. The difference between the baseline and injection
    conditions simulated by the model enabled computing the net carbon removal
    achieved by the OAE intervention and the associated efficiency (net carbon
    uptake by the ocean per unit of alkalinity added).
  </FigureCaption>
</Figure>

The model we used represents the three-dimensional circulation of the ocean and includes a biogeochemical model called MARBL.<Cite id='long.2021'/> Since the physical circulation model is coarse resolution, its representation of the ocean flow is not perfect — but it does simulate broadly realistic circulation patterns, including surface currents, ocean overturning, and vertical mixing. MARBL provides a representation of the carbonate chemistry processes described above, as well as a representation of the lower trophic levels of the marine ecosystem. The air-sea CO₂ exchange rate is parameterized as a function of the square of the wind speed.<Cite id='wanninkhof.2014'/> This is a generally accepted parameterization, but it's important to note that it is an approximate relationship developed empirically.<Cite id='ho.2006'/> It is likely that coastal regions, for example, have a different wind speed dependence than the open ocean, due to additional constituents dissolved in the water and shorter distance of open water.<Cite id='dobashi.2023'/>

To compute net CO₂ uptake induced by OAE, we evaluated the time evolution of the simulated air-sea CO₂ flux relative to baseline simulation that did not include the OAE intervention, but was otherwise identical. The importance of this counterfactual is illustrated by the fact that OAE can drive ocean carbon uptake even in regions characterized by outgassing (see Figure 1): an OAE-induced reduction in ocean outgassing is functionally equivalent to net carbon dioxide removal. To represent the counterfactual, we used MARBL’s ability to simultaneously simulate two seawater carbonate systems. We applied the alkalinity addition to the first carbonate system; then we used a difference between the fields simulated by the perturbed and unperturbed carbonate systems to compute OAE effects.

You can learn more about our modeling approach in this [preprint](https://doi.org/10.21203/rs.3.rs-4124909/v1), and you can access the data via this [Source Cooperative repository](https://beta.source.coop/repositories/cworthy/oae-efficiency-atlas/description/).

## Exploring the OAE Efficiency Tool

We created an [interactive online tool](/research/oae-efficiency) to enable broader access to the OAE efficiency dataset. You can use this tool to build intuition about global patterns in OAE efficiency, and to explore how releasing alkalinity in a particular region and season leads to carbon removal over time.

Figure 6 summarizes the OAE efficiency for all the global polygons.<Sidenote>Keep in mind that the efficiency shown is a result of a full three-dimensional simulation of ocean circulation and biogeochemistry: alkalinity is added at each polygon, the model simulates the transport of the alkalinity away from that region, as well as changes in the carbonate system and the air-sea flux over that expanding plume. We then map the simulated efficiency back to the polygon of origin — but the carbon uptake does not exclusively occur within the polygon.</Sidenote> You can choose the season of simulated alkalinity release, and use the slider to see how geographic patterns of OAE efficiency change through time. For example, the tool shows that a few regions stand out as having relatively high carbon removal over the course of a year or two post-alkalinity release. This includes subpolar regions in the North Atlantic, North Pacific, and Southern Ocean, as well as areas along the equator. As time progresses past the first couple of years, the amount of geographic variation in OAE efficiency begins to diminish. By year 15, much of the ocean begins to approach the thermodynamic maximum efficiency. An exception is the subtropical gyres and high-latitude regions, which even after 15 years have relatively low OAE efficiency.

<Figure>
  <EfficienciesMap />
  <FigureCaption number={6}>
    Global variation in OAE efficiency as a function of time following
    alkalinity release in different seasons. The colors show the OAE efficiency,
    which is defined as the amount of carbon uptake in moles divided by the
    number of moles of alkalinity added to the ocean.
  </FigureCaption>
</Figure>

The tool also shows that the season of release has a modest effect on OAE efficiency. A dramatic exception, however, is seen in high latitude regions. In areas around Antarctica and the North Atlantic, releasing alkalinity in winter generates very little CO₂ uptake. This is because deep vertical mixing removes the alkalinity from the surface before air-sea CO₂ equilibration can occur. Notably, the loss of alkalinity from the surface ocean is essentially irreversible on timescales of a few decades, as much of the water that sinks in these regions will be entrained in the deep overturning circulation and will not return to the surface for decades, or even centuries.

In addition to exploring patterns at a global scale, the interactive tool can also zoom into the regional level. In the map, you can click on any polygon to visualize how alkalinity released in that region disperses into a plume over time, and examine the associated evolution of carbon uptake and pH. As shown in Figure 7, releasing alkalinity in some regions leads to rapid CO₂ uptake, while others achieve carbon removal more slowly or are curtailed by physical ocean dynamics from the outset.

<Figure>
  <RegionalComparison />
  <FigureCaption number={7}>
    Regional OAE efficiency data for example polygons in the North Atlantic. The
    map shows the polygon locations of alkalinity release. Click on a polygon
    and use the elapsed time slider to see how alkalinity injection leads to
    additional CO₂ uptake over space and time. The bottom right panel shows the
    OAE efficiency curves — moles of carbon uptake per mole of alkalinity added
    — over the 15-year model integrations.
  </FigureCaption>
</Figure>

One pattern that stands out across regions is the large spatial scale over which CO₂ uptake occurs. For many regions, a significant portion of the total carbon uptake happens more than 1,000 kilometers away from the site of alkalinity addition. This emphasizes the importance of rigorous approaches to modeling to understand how OAE plays out over spatial and temporal scales that are difficult to observe directly.

## How to use the OAE efficiency data

There are different ways to start using the OAE efficiency dataset, depending on your interests. Here are some examples:

<Figure>
  <Table
    index={false}
    columns={[2, 5, 5, 5]}
    start={[
      [1, 1, 1, 1],
      [1, 2, 2, 2],
      [2, 4, 4, 4],
    ]}
    width={[
      [2, 1, 1, 1],
      [1, 2, 2, 2],
      [1, 2, 2, 2],
    ]}
    data={[
      ['Who are you?', 'What do you want to do?', 'Next steps'],
      [
        'Data explorer',
        'I want to learn more about global and regional patterns of OAE efficiency and related anomalies in pH.',
        <span>
          Visit our <Link href='/research/oae-efficiency'>map tool</Link>{' '}
          where you can explore the data directly in your web browser, through both maps and time series data.
        </span>,
      ],
      [
        'OAE researcher',
        'I want to perform additional in-depth analysis of the data.',
        <span>
          Read the <Link href='https://doi.org/10.21203/rs.3.rs-4124909/v1'>scientific paper</Link> (in press) and access the research-grade data{' '}
<Link href='https://beta.source.coop/repositories/cworthy/oae-efficiency-atlas/description/'>here</Link>.
        </span>,
      ],
      [
        'CDR project',
        'I want to use these resources to make estimates of carbon removal from OAE deployments.',
        <span>
          See our <Link href='https://github.com/CWorthy-ocean/IRF_Method/blob/main/IRF_Convolution_Notebook.ipynb'>example calculation</Link> showing how, conceptually, these modeled results can be used to develop carbon removal estimates from arbitrary alkalinity releases.
        </span>,
      ],
    ]}

/>

</Figure>
 
We expect the use case of quantifying carbon removal from real-world OAE deployments to be of particular interest, but potential users should know that there are some limitations involved.<Sidenote>The data and statistical approaches described here could also be relevant for direct ocean removal (DOR). DOR creates a CO₂ deficit by removing carbon directly from the surface ocean and, like OAE, removes carbon from the atmosphere via air-sea gas exchange. To apply the OAE efficiency data to DOR, it would be necessary to apply a chemistry-based conversion factor between alkalinity addition and dissolved inorganic carbon removal.</Sidenote>

First, the results are based on a single, coarse-resolution model. While we expect that the broad patterns of OAE efficiency would be similar if simulated in a different ocean model of comparable complexity, regional differences will certainly emerge due to differences in simulated flow and biogeochemical background state. The magnitude and sign of this effect will vary regionally. The spatial resolution of the model determines the scale of features in the ocean flow that can be represented explicitly. The model we used has a horizontal resolution of about 100 km, which is a fairly standard resolution for models used for climate projections. However, there are important features of the ocean flow that cannot be resolved at this scale. Improving the resolution of the model is likely to change the simulated OAE efficiency — but the magnitude, and even the sign of this effect, is also likely to vary regionally.

Second, we only released alkalinity during a single year (1999). The model was run for 15-year simulations using historical data starting in 1999.<Sidenote>The choice of the year 1999 was arbitrary and based simply on the desire to be able to integrate the model for a couple of decades following alkalinity release using historical meteorological data. As the experimental design was refined, we decided to run the model for only 15 years.</Sidenote> As a result, the OAE Efficiency Map does not provide an indication of the variations in efficiency that would result from the interannual changes in atmospheric and oceanic conditions that would be sampled by different release years. Preliminary analysis demonstrates that there is an imprint of interannual variability on OAE efficiency, but the importance of this variability varies regionally.

Third, we used a simplified alkalinity forcing. The model was forced at each polygon with a surface flux of total alkalinity, thus these data do not incorporate all the processes that could affect ultimate net carbon removal, including local-scale physics mediating initial dispersion patterns, the [dissolution](https://carbonplan.org/research/cdr-verification/docs/components/alk-total) of alkaline minerals, the potential for [mineral precipitation](https://carbonplan.org/research/cdr-verification/docs/components/sec-precip), or potential feedbacks on the natural alkalinity cycle.<Cite id='bach.2024'/>

Finally, the model assumes an infinite atmospheric CO₂ reservoir. As OAE removes carbon from the atmosphere, the mole fraction of CO₂ in the atmosphere will decline. Our simulations do not include this effect, but rather assume that the atmospheric CO₂ is unaffected by the OAE deployment. The amount of CO₂ transferred to restore equilibrium will be less with a responsive atmospheric CO₂ reservoir. However, all CDR technologies, including direct air capture (DAC), will impact the atmospheric CO₂ and generate feedback through the rest of the global carbon cycle ([see this article](https://carbonplan.org/research/cdr-timescale-accounting) for a related discussion). Forcing the model as we have done is the best way to ensure comparability across carbon removal assessments for different CDR pathways, but accounting for the OAE effects on ocean carbon inventories and related properties (e.g., pH) will require a treatment with a responsive atmosphere.

## The path forward

We envision extending the OAE Efficiency Map to include treatment with higher resolution models over regional to basin-scale domains. Such datasets have a potentially important role to play in quantifying carbon removal, enabling effective site selection, helping people develop a deeper understanding of how OAE might affect ecosystems in space and time. Future work will also explore the role of interannual climate variability in driving changes in efficiency. We can imagine using historical variability and generating ensembles of OAE releases, for example, to provide meaningful estimates of the envelope of uncertainty in net carbon uptake stemming from this variability.

We think these data have a big role to play in shaping the ongoing discussions about how to quantify and verify the effects of OAE and create reliable carbon removal standards. The dataset illustrates that carbon removal mediated by OAE is spread over large regions in space and occurs over multiple years. The fact that these models indicate that this removal is slow and widespread, rather than fast and localized, must shape the way we decide to set up accounting systems and market transactions around it.

</DataWrapper>

<Endnote label='Acknowledgements' divider>
Thanks to Lydia Kapsenberg of [CEA Consulting](https://www.ceaconsulting.com/) for helpful comments on drafts of this article.

</Endnote>

<Endnote label='Credits' divider>

Matt, Mengyang, and Mike designed the numerical experiments. Mengyang performed the model simulations to generate the underlying data. Alicia conceived the idea to serve these data as a community dataset. Tom generated the dataset underlying the online tool and some of the explainer figures. Matt, Alicia, Freya, Kata, and Shane designed the figures; Kata and Shane produced the figures. Elizabeth and Tom produced the IRF convolution example. Matt and Freya wrote the article. All authors contributed to revising the text. Header image (modified) by [Koen Emmers](https://unsplash.com/photos/water-drop-on-body-of-water-Da1Wv-XC43k) on [Unsplash](https://unsplash.com/).

Please cite as:

M. Long et al. (2024) “Mapping the efficiency of ocean alkalinity enhancement.” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/oae-efficiency-explainer](https://carbonplan.org/research/oae-efficiency-explainer)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan and [C]Worthy received funding from the [Carbon to Sea Initiative](https://carbontosea.org) and the [Environmental Defense Fund](https://www.edf.org) to implement the interactive tool and write this explainer article. The article text and figures are made available under a [CC BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

This material is based on work by [C]Worthy and collaborators that was supported by the National Center for Atmospheric Research (NCAR), a major facility sponsored by the National Science Foundation (NSF) under Cooperative Agreement No. 1852977. Mengyang received support from the Advanced Study Program Graduate Visitor Program at the National Center for Atmospheric Research. The authors acknowledge high performance computing support from the [Cheyenne](https://doi.org/10.5065/D6RX99HX) supercomputer provided by [NCAR's Computational and Information Systems Laboratory](https://www.cisl.ucar.edu/), sponsored by the NSF.

</Endnote>
