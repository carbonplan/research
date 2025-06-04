---
version: 1.0.0
title: Mapping the efficiency of direct ocean removal
authors:
  - Freya Chay
  - Matthew Long
  - Mengyang Zhou
  - Shane Loeffler
  - Anderson Banihirwe
  - Kata Martin
  - Alicia Karspeck
color: blue
date: 06-04-2025
summary: We collaborated with [C]Worthy to build a tool that will make it easier to see where a marine carbon removal approach called direct ocean removal is most efficient.
quickLook: This new dataset and tool make it easier to see how the efficiency of direct ocean removal — a marine carbon dioxide removal approach — varies around the world. Developed in collaboration with [C]Worthy.
card: dor-efficiency-explainer
background: articles/031/interface
icon: articles/031/interface-small
components:
  - name: TimeSeries
    src: ./components/time-series.js
  - name: MapCompare
    src: ./components/map-compare.js
links:
  - label: Map tool
    href: /research/dor-efficiency
  - label: Dataset
    href: https://beta.source.coop/repositories/cworthy/dor-efficiency-atlas/description/
  - label: Comparison with OAE tool
    href: /research/mcdr-tools-about
---

In the field of carbon dioxide removal (CDR), there is growing interest in [open system](https://carbontosea.org/2025/03/06/open-system-cdr-and-mrv/) approaches that harness natural processes to remove carbon from the atmosphere. These approaches are compelling because they could be highly scalable. But because they interact with dynamic natural systems, understanding their impact usually requires models to track carbon flows over space and time.

We’re releasing a new, model-based dataset and tool to help characterize how well [direct ocean removal](https://carbonplan.org/research/cdr-verification/direct-ocean-removal) (DOR), a marine CDR approach, works depending on where and when it is performed.<Sidenote>Direct ocean removal is sometimes referred to as direct ocean capture. We use direct ocean removal because the acronym "DOC" typically refers to dissolved organic carbon. Since dissolved organic carbon is relevant to ocean-based CDR discussions, we prefer DOR to avoid confusion.</Sidenote> DOR systems extract CO₂ from the surface ocean for storage or utilization, returning seawater that is depleted in dissolved inorganic carbon (DIC) to the ocean. This DIC-depleted water can then re-equilibrate, absorbing new CO₂ from the atmosphere. Critically, the natural process of CO₂ equilibration varies significantly by location and season, which means the efficiency of DOR can, too. Understanding these dynamics is foundational for evaluating where and when DOR makes sense — and how much carbon it can actually remove from the atmosphere.

Using a global ocean biogeochemical model, [C]Worthy simulated how DOR leads to atmospheric carbon removal, and how the efficiency of that process depends on the location and season in which CO₂ is extracted from the ocean. The modeling approach mirrors previous work characterizing the efficiency of ocean alkalinity enhancement.<Sidenote>For more information, see the following resources: (1) [Zhou et al. (2025)](https://www.nature.com/articles/s41558-024-02179-9.epdf?sharing_token=LgDF4VdJvkifRzIuQy5nT9RgN0jAjWel9jnR3ZoTv0ML06qtsGAXcI3ncw2VKMdvNBF8yc3ykUNvQP2YZSZZg3VEb8eJNbnayufBxkZ0cVTHRB4myOJv4osBgWv1OPyMNfRCLYPLT3MancsjfEhCqWMLGD_VUA_LXbALrR9640c%3D), (2) Our [OAE explainer article](https://carbonplan.org/research/oae-efficiency-explainer), and (3) Our [OAE Efficiency Map](https://carbonplan.org/research/oae-efficiency).</Sidenote> Together, [C]Worthy and CarbonPlan have turned this new DOR dataset into an interactive online tool — the [DOR Efficiency Map](https://carbonplan.org/research/dor-efficiency).

With this map, you can explore global patterns, or zoom in to see how CO₂-depleted water moves through the ocean, resulting in atmospheric carbon removal over time. You can also investigate how storage losses — i.e., the expected or unexpected release of the extracted CO₂ back to the atmosphere — affect the overall climate impact of DOR.

## Introduction to DOR

At its technical core, direct ocean removal is a method of extracting CO₂ from seawater. But to understand DOR’s true impact on the atmosphere, two additional factors must be considered: what happens to the CO₂ once it’s extracted from the ocean, and how effectively the ocean absorbs CO₂ from the air after the intervention. Below, we break down each of these considerations in turn.

### 01 — Extracting CO₂ from the surface ocean

DOR systems extract CO₂ from seawater by altering the water’s chemistry, temporarily reducing its capacity to hold carbon. While specific systems vary in their energy and material requirements, they generally rely on a common mechanism: acidifying the water (e.g., via electrochemical or photoacid processes) to shift carbonate chemistry and drive CO₂ outgassing. This produces a pure stream of CO₂ which can be stored or utilized, and a stream of CO₂-depleted seawater, which is returned to the ocean to absorb more CO₂ from the atmosphere. Both of these outputs must be tracked over time to understand the impact of DOR on atmospheric CO₂.

A common misconception is that extracting CO₂ from seawater is inherently more efficient than removing it from the atmosphere. This assumption stems from the fact that CO₂ is more concentrated in seawater than in air. However, this overlooks key physical and energetic trade-offs. Because water is much denser than air, moving and processing seawater requires significantly more energy.<Cite id='eisaman.2020'/> As a result, the efficiency advantage of higher CO₂ concentrations in seawater can be offset by the additional energy costs of handling water. Moreover, removing CO₂ from the surface ocean does not automatically equate to removing it from the atmosphere. As discussed more below, the ultimate efficiency of DOR depends on the degree to which the resulting CO₂ deficit is replenished via air-sea gas exchange.

### 02 — Tracking the fate of the extracted CO₂

Once CO₂ is extracted from the ocean, it must be managed carefully to ensure it’s not emitted to the atmosphere. Different storage mechanisms can differ dramatically in durability — how long the CO₂ is likely to remain out of the atmosphere.

On the most durable end of the spectrum, extracted CO₂ could be reacted with alkaline minerals (such as mine tailings or steel slag) and turned into rock.<Cite id='dipple.2021'/> Once this form of solid storage is achieved, losses are unlikely. However, some of the extracted CO₂ could still reach the atmosphere if it were released during transportation or before the mineralization reaction occurs.

Injecting CO₂ deep underground into geologic formations is another form of potentially long-term storage, but it comes with some risks. In some geologic formations, injected CO₂ may undergo a mineralization reaction and achieve solid storage.<Sidenote>A lot remains to be learned about this type of storage. Depending on the characteristics of the reservoir and the concentration of injected CO₂, this mineralization process could take anywhere from years to decades.</Sidenote> However, in many reservoirs, CO₂ is likely to remain in a supercritical phase — a high-pressure, high-temperature state where it behaves like both a gas and a liquid — for hundreds or thousands of years.<Cite id='hovorka.2021'/> This means that in addition to the risk of releasing CO₂ to the atmosphere during transportation and injection, there is a long-term need to maintain the injection well, monitor its integrity, and respond in the event that it starts leaking down the line.<Cite id='nas.2019'/> Mitigating this risk requires clear structures of regulatory oversight and long-term financial liability.

In contrast to these durable storage options, extracted CO₂ that is utilized in products or industrial processes is likely to reach the atmosphere quickly. For example, using the CO₂ to make synthetic fuels or carbonated beverages would only briefly delay its emission. When the fuel is burned or the seltzer is consumed, the CO₂ extracted by DOR would be emitted to the atmosphere. Incorporating CO₂ into industrial products like chemicals or plastics may provide more durability, but the CO₂ will eventually be released when those materials degrade or are incinerated.

These storage considerations are not unique to DOR; they are shared across all carbon removal pathways that produce a pure stream of CO₂ for storage, such as [direct air capture](https://carbonplan.org/research/cdr-verification) (DAC) and [bioenergy with carbon capture and storage](https://carbonplan.org/research/cdr-verification/beccs) (BECCS). What is unique to DOR is that the CO₂ in question was previously stored in the ocean, so storage losses result in the emission of carbon that otherwise would have remained durably sequestered.

### 03 — Tracking the absorption of new CO₂ from the atmosphere

DOR does not reduce atmospheric CO₂ unless the ocean absorbs additional carbon from the air after the initial CO₂ extraction. To understand DOR’s effectiveness as a carbon removal strategy, we must therefore examine what happens to the CO₂-depleted seawater that’s returned to the ocean.

The ocean constantly seeks equilibrium with the atmosphere, meaning that the CO₂ deficit created by DOR drives CO₂ reuptake. This is [similar](https://carbonplan.org/research/oae-efficiency-explainer#introduction-to-ocean-alkalinity-enhancement) to ocean alkalinity enhancement (OAE), where chemical changes in seawater create a CO₂ deficit and cause the ocean to absorb additional CO₂. Another way to think of the CO₂ deficit is as the maximum potential for atmospheric CO₂ removal. While OAE generates this potential by adding alkalinity to seawater, DOR generates it by extracting CO₂.

For both DOR and OAE, the extent to which the ocean absorbs atmospheric CO₂ after the intervention depends on when and where the CO₂ deficit is created. If CO₂-depleted seawater stays near the surface long enough, it can reach 100% of its carbon removal potential. However, physical ocean processes — such as currents, mixing, and downwelling — can transfer water from the surface into the ocean interior before atmospheric CO₂ absorption is complete. These physical processes vary in different regions of the ocean and in different seasons.

Assessing the ultimate impact of DOR on the atmosphere therefore requires tracking both the fate of the CO₂ that has been extracted from the ocean and the amount of CO₂ that the ocean reuptakes from the atmosphere (Figure 1). Both factors are crucial for determining whether DOR successfully contributes to atmospheric carbon removal.

<Figure>
  <TimeSeries />
  <FigureCaption number={1}>
    The atmospheric impact of direct ocean removal (DOR) depends on the ocean’s
    reuptake of CO₂ from the atmosphere and the fate of the extracted CO₂ —
    specifically, how much is stored versus lost back to the atmosphere. This
    figure does not account for upstream emissions from the energy and materials
    required to perform DOR, which would further reduce its net atmospheric
    impact.
  </FigureCaption>
</Figure>

In an ideal CDR scenario, all of the CO₂ extracted from the ocean is permanently stored and the resulting deficit in the surface ocean is fully replenished with atmospheric CO₂. This would lead to a net reduction of atmospheric carbon that is equivalent to the quantity of CO₂ extracted. Alternatively, if the CO₂ that was previously stored in the ocean is extracted, but not securely stored — and not fully replenished by the atmosphere — DOR could amount to a net emission, increasing the quantity of CO₂ in the atmosphere rather than decreasing it.

## Creating the DOR efficiency dataset

We created the DOR efficiency dataset to explore how extracting CO₂ from the surface ocean at different locations and seasons leads to variable amounts of atmospheric carbon removal. In this dataset, we define DOR efficiency as the amount of CO₂ that is transferred from the atmosphere to the ocean relative to the amount of CO₂ extracted.

We modeled DOR efficiency using the same framework we previously used to model OAE efficiency. Briefly, we divided the surface ocean into 690 regions and quantified the efficiency of DOR in each region by removing dissolved inorganic carbon (DIC) at the surface at a rate of 10 mol m<sup>–2</sup>yr<sup>–1</sup> for one month, then running the model for 15 years to simulate atmospheric CO₂ absorption. These numerical experiments were repeated for each region in all four seasons. For a more complete explanation of the modeling framework — including a discussion of its strengths and limitations — see our [previous explainer](https://carbonplan.org/research/oae-efficiency-explainer) and the underlying [scientific paper](https://www.nature.com/articles/s41558-024-02179-9.epdf?sharing_token=LgDF4VdJvkifRzIuQy5nT9RgN0jAjWel9jnR3ZoTv0ML06qtsGAXcI3ncw2VKMdvNBF8yc3ykUNvQP2YZSZZg3VEb8eJNbnayufBxkZ0cVTHRB4myOJv4osBgWv1OPyMNfRCLYPLT3MancsjfEhCqWMLGD_VUA_LXbALrR9640c%3D). You can access the full research-grade dataset for DOR efficiency [here](https://beta.source.coop/repositories/cworthy/dor-efficiency-atlas/description/).

For clarity, this dataset focuses on the reabsorption of atmospheric CO₂ following a DOR intervention. The efficiency values do not account for the emissions associated with carrying out the DOR or potential storage losses that emit the extracted CO₂ to the atmosphere. In the interactive tool, users can apply different assumptions about the fate of extracted CO₂ to see how this affects this dataset’s efficiency estimates.

## Exploring the DOR Efficiency Map

The new DOR Efficiency Map lets users interactively explore the modeled efficiency data.

At a high level, global efficiency patterns are nearly identical for DOR and OAE. Figure 2 summarizes DOR efficiency across all global regions in the new dataset, side-by-side with comparable results from the OAE tool. You can select the season of the intervention to explore the efficiency achieved by both interventions over the 15-year simulations. In most regions of the ocean, the CO₂ deficit created by either intervention is fully replenished over the modeling period. In the interactive tool, you can go one level deeper to explore the temporal pattern of atmospheric CO₂ reuptake after DOR. Although many regions reach a similar efficiency over the course of 15 years, some regions stand out for how quickly (or slowly) CO₂ uptake occurs. For example, the subpolar North Atlantic, North Pacific, Southern Ocean, and parts of the equatorial Pacific show particularly high efficiency in the first year or two after CO₂ extraction. In contrast, high-latitude regions are very inefficient and the subtropical gyres show low equilibration efficiency, with a substantial fraction of the extracted CO₂ deficit remaining after 15 years.

<Figure>
  <MapCompare />
  <FigureCaption number={2}>
    Global patterns in DOR and OAE efficiency achieved over the 15-year modeling
    period. Patterns of CO₂ reuptake after DOR and OAE interventions closely
    mirror each other. However, unlike OAE, DOR efficiency is also affected by
    storage losses — that is, any release of extracted CO₂ into the atmosphere.
  </FigureCaption>
</Figure>

Figure 2 also illustrates how the fate of the extracted CO₂ affects the overall efficiency of DOR. You can move the storage loss slider to change the fraction of extracted CO₂ that ends up emitted to the atmosphere. This slider only affects DOR, not OAE, and illustrates the potential impacts of unsuccessful storage, rapid CO₂ utilization, or cumulative leakage over the 15-year modeled period. This feature is also available in the new interactive tool.

Note that directly comparing DOR and OAE efficiency required an additional analytical step that was not included in the original presentation of the OAE modeling results. There, OAE efficiency was defined as the amount of CO₂ removed per unit of alkalinity added. To compare across DOR and OAE, we needed to translate that concept of efficiency into a common metric: the amount of CO₂ removed per unit of removal potential. To do so, we divided the OAE efficiency by the mean surface 𝜂ₘₐₓ (a thermodynamic maximum OAE efficiency) over the region where alkalinity was released. You can read more about this translation [here](https://carbonplan.org/research/about-mcdr-efficiency-tools#comparing-oae-and-dor). The harmonized efficiency metric is now available as an additional layer in the OAE efficiency map, enabling direct comparisons across the two approaches.

## Conclusion

Together, these new data and the interactive map provide a foundation for assessing when and where DOR is likely to be most effective. DOR is unique. Unlike direct air capture, understanding its impact requires close attention to how atmospheric CO₂ is absorbed by the ocean over space and time. And unlike ocean alkalinity enhancement, DOR creates a concentrated stream of CO₂ that must be securely stored to avoid reversing the carbon removal it achieves.

As interest in ocean-based carbon removal grows, improving our understanding of these dynamics is critical for designing effective interventions. We hope these data can help inform efforts to guide responsible deployments, quantify DOR outcomes, and develop reliable standards.

<Endnote label='Credits' divider>

Matt designed the numerical experiments and performed the model simulations to generate the underlying data. Shane, Kata, Freya, and Matt designed the figures, which Shane implemented. Anderson performed the data transformation to support visualizations and data access. Freya wrote the article with input from Matt. All authors contributed to revising the text. Header image (modified) by [Daniel Sinoca](https://unsplash.com/photos/water-droplets-on-blue-surface-UjXGaJHH2jE) on [Unsplash](https://unsplash.com/).

Please cite as:

Chay et al. (2025) “Mapping the efficiency of direct ocean removal.” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/dor-efficiency-explainer](https://carbonplan.org/research/dor-efficiency-explainer)</span>

</Endnote>

<Endnote label='Terms'>

Funding to implement the interactive tool and write this explainer article was provided by grants to [C]Worthy from the Chan Zuckerberg Initiative, The Navigation Fund, and Grantham Foundation, and funding to CarbonPlan from [C]Worthy. The article text and figures are made available under a [CC BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

This research used resources of the National Energy Research Scientific Computing Center (NERSC), a Department of Energy Office of Science User Facility using NERSC award ALCC-ERCAP0034226. Mengyang acknowledges the support from Yale Center for Natural Carbon Capture.

</Endnote>
