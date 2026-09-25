---
version: 1.0.0
title: How averaging out the weather affects enhanced weathering estimates
authors:
  - Zach Perzan
  - Tyler Kukla
  - Freya Chay
  - Shane Loeffler
date: 09-25-2026
quickLook: Exploring meteorological forcing decisions in EW models.
components:
  - name: Authors
    src: ./components/authors.js
  - name: Forcing
    src: ./components/meteorology/forcing.js
  - name: Profiles
    src: ./components/meteorology/profiles.js
  - name: Dissolution
    src: ./components/meteorology/dissolution.js
  - name: Cdr
    src: ./components/meteorology/cdr.js
  - name: Figure
    src: '@carbonplan/components'
  - name: FigureCaption
    src: '@carbonplan/components'
slug: modeling-bytes-03-meteorology
card: modeling-bytes-03-meteorology
---

# {title}

<Authors authors={authors} color={color} />

Enhanced weathering outcomes depend on climate. Rocks tend to weather faster in warmer and wetter conditions, leading to more carbon removal. But when researchers simulate enhanced weathering, they have to decide how granularly to represent these conditions over time. Should the model capture individual wetting and drying cycles? Or is it safe to use monthly, annual, or even long-term means?

At first blush, it’s tempting to think that more granular meteorological forcings are always better. They are certainly needed to resolve the individual wetting and drying events that drive weathering. But that added complexity could also bring uncertainty, and it may not make the modeled answer much more accurate.

In this piece, we explore how enhanced weathering model predictions change when we use finer or coarser meteorological forcings. We found that coarser meteorological forcings tend to cause more carbon dioxide removal (CDR) because they make soils wetter and more CO₂-rich. The effect is large enough that modelers need to be aware of it, but not so large that this decision alone spells the difference between estimating a lot of CDR versus none at all. We also found that, when coarse and granular forcings reach a similar answer, it’s usually for different reasons. For example, more weathering might be canceled by more alkalinity loss.

For anyone who needs to build a conservative CDR estimate, or accurately represent alkalinity loss pathways, the time resolution of the meteorological forcing probably matters. But how much it matters is still an open question. We wrap up by pointing to three research questions that we think are necessary to offer more complete guidance around the choice of meteorological forcing data.

## What we did

We used the reactive transport code [MIN3P](https://github.com/kumayer/min3p-dp-perzan)<Cite ids={['javadi.2008', 'jia.2023', 'mayer.2002']} /> to simulate enhanced weathering across eight soil series, driving each with hourly, daily, monthly, and long-term mean meteorological data.

Coarser meteorological forcings have a particularly large effect on infiltration and evapotranspiration rates, a key control on weathering, because it smooths out the wetting and drying events that take place over hours to days. You can see this effect in Figure 1. Hourly data from ERA5 reanalysis<Cite ids={['cccs.2026', 'hersbach.2023']} /> reach extremes in water demand (potential evapotranspiration) and supply (precipitation plus irrigation) that are dampened when we take the daily, monthly, or long-term mean. Importantly, changing the time resolution only affects the variance of the forcing — the average value over the simulation window stays the same.

<Figure>
  <Forcing />
  <FigureCaption number={1}>
    Daily, monthly, and long-term data for the Flanagan soil series in central
    IL in 2010. All resolutions share the same mean. High-resolution data
    captures more extremes, which are smoothed out as the meteorological data
    are coarsened.
  </FigureCaption>
</Figure>

This setup allows us to explore how the extremes captured by the higher-resolution data affect CDR estimates. We’d expect extremes to matter the most where model processes are nonlinear, since averaging the inputs to a nonlinear process can give you a different answer than averaging the outputs.

MIN3P captures a variety of nonlinear processes, including soil water transport, soil gas diffusion, and carbonate geochemistry. But in our setup, we also omitted some potentially nonlinear processes for simplicity. For example, we hold constant the rate of soil CO₂ production and the reactive surface area of the feedstock, despite evidence that both behave nonlinearly and respond strongly to individual wetting events.<Cite ids={['anand.2026', 'beckingham.2017', 'davidson.2012']} /> We also include alkalinity losses through secondary mineral formation, carbonate precipitation, and exchangeable acidity, but omit the additional buffering capacity associated with pH-dependent surface charge. These choices highlight how model construction itself shapes the sensitivity to forcing resolution, and suggests our results may offer a lower-bound for the sensitivity of enhanced weathering outcomes to coarsening meteorological inputs.

The eight soil series we simulate span winter-wet and summer-wet climates, with some drier sites that require extensive irrigation, and others that are mostly rain-fed. Each soil series is also geochemically distinct, with differences in mineralogy, cation exchange, and soil water chemistry. For each soil series, we ran a feedstock-amended and a control (no feedstock) simulation for each meteorological forcing resolution. All amended runs receive the same feedstock dose — a one-time application of 10 tonnes per hectare of forsterite mixed into the top 30 cm of the soil.<Sidenote>The modeled forsterite has an initial specific surface area of 0.375 m²/g, consistent with a diameter of 50 μm and a roughness factor of 10. Its maximum carbon removal potential (assuming total dissolution and perfect carbon removal efficiency) is 1.2 tonnes of CO₂ per tonne of feedstock.</Sidenote> You can find our model results and more information about the model setup, including the initial climatological and geochemical conditions for each site [here](https://doi.org/10.5281/zenodo.22947690). The code to run our simulations is [here](https://github.com/carbonplan/ew-byte-03/releases/tag/v1.0).

## Coarser meteorological forcing leads to wetter soils with more CO₂

In our simulations, coarser meteorological forcings drive two consistent results across sites: It makes the modeled soils wetter, and increases baseline soil CO₂ levels. Together, these effects drive a modest increase in forsterite dissolution at all of our sites but one.

We found that mean soil water content increased as we coarsened the meteorological forcing from hourly to daily, monthly, or the long-term mean (Figure 2, left panel). This increase in soil water content is largest near the top of the soil profile where our forsterite feedstock is mixed in. The soils get wetter because hydraulic conductivity — how fast water flushes out of a soil — increases nonlinearly with soil water content. The hourly and daily simulations capture individual rain and irrigation events that make the soil very wet. These wet events are brief, though, and their high hydraulic conductivity allows the soil to drain and dry out quickly. The monthly and long-term mean simulations, in contrast, receive water as more of a steady trickle, keeping the soil wetter on average, as the water takes longer to pass through it.

Wetter soils in the simulations with coarser forcing also lead to higher levels of soil CO₂ (Figure 2, right panel) — the primary source of carbonic acid that drives rock weathering. Even though the differences in soil moisture are relatively small, we found that soil CO₂ can increase by 50-100 percent in the monthly and long-term mean cases. This happens because wetter soils are less well-ventilated, so gases end up trapped. Like hydraulic conductivity, this relationship is also nonlinear: Dry periods disproportionately allow soil CO₂ to escape to the surface, so averaging them out traps more CO₂ in the soil.

<Figure>
  <Profiles />
  <FigureCaption number={2}>
    Soil water (left) and CO₂ response (right) to coarser meteorological
    forcing. Lines show the mean profile of the eight sites. Hover or click on
    the legend keys to see all eight profiles for a given meteorological forcing
    case.
  </FigureCaption>
</Figure>

Wetter soils with more CO₂ ultimately favor more rock weathering, but the effects are only modest in our simulations. When comparing hourly and daily forcings, forsterite dissolution is almost identical. In the monthly and long-term mean cases, dissolution typically increases relative to the hourly simulations, but not by more than 10-20 percent (Figure 3). This is a small change compared to the large increases in soil CO₂, and it is best understood by the fact that soil CO₂ itself has only a minor effect on the pH of the porewater. Across our eight sites, pH in the feedstock mixing zone changes by just 0.1-0.3 pH units when using the long-term mean as opposed to hourly forcing data.<Sidenote>Because pH is on a logarithmic scale, a 2x change in CO₂ does not cause a 2x change in pH units.</Sidenote>

<Figure>
  <Dissolution />
  <FigureCaption number={3}>
    Percent change in feedstock dissolution compared to the hourly forcing data.
    Each point is one site for one year. The monthly and long-term mean
    simulations show a larger change than daily, with a bias toward more
    dissolution driven by wetter, more CO₂-rich soils. Hover or click on a point
    to see where it lands for each meteorological forcing resolution.
  </FigureCaption>
</Figure>

## Coarser meteorological forcing tends to increase carbon removal

At seven of our eight sites, coarsening the meteorological forcings increased estimated carbon removal. But that shared directional response hides site-specific variations in magnitude, and in the relationship between dissolution and total carbon removal.

In short, changes to feedstock dissolution don’t result in proportional changes to carbon removal. Dissolution by carbonic acid releases alkalinity, but how much of that alkalinity ultimately leaves the soil depends on the reactions that can consume it, and how those reactions respond to meteorological forcings in both the amended and control simulations. Figure 4 compares hourly and long-term mean forcing to show three ways that this can play out: one site where carbon removal increases less than dissolution, one where it increases more, and one where both decrease.

<Figure>
  <Cdr />
  <FigureCaption number={4}>
    Cumulative CDR under long-term mean and hourly forcings (lines) and how it
    compares to the potential change in CDR, measured solely by the change in
    forsterite dissolution (annotated bars). Click the site names at the top to
    explore all three sites. Coarser meteorological forcings generally increase
    CDR, as it does at the eastern CO and eastern WA sites, but the increase in
    CDR can be higher or lower than the increase in forsterite dissolution. At
    one site, northern TX, long-term mean forcings lead to less dissolution and
    less CDR.
  </FigureCaption>
</Figure>

At three of our eight sites, the hourly and long-term forcings reach a similar answer for different reasons. Coarser meteorological forcings increase forsterite dissolution, but also increase alkalinity loss in the sub-soil, leading to a disproportionately small increase in CDR. The Kuma soil series in eastern Colorado provides a good example (Figure 4, eastern CO). Coarsening the forcing dissolves enough additional forsterite to potentially raise carbon removal by 0.90 t/ha, but only about 0.18 t/ha is realized. The difference is driven by a layer of calcite at about 30 cm depth, which responds in opposite directions across the control and amended simulations. In the control run, the increase in soil CO₂ causes more carbonate to dissolve, which raises the baseline alkalinity export against which the amended run is compared. In the amended run, forsterite dissolution releases Mg²⁺, which displaces Ca²⁺ off of cation exchange sites, and raises calcite saturation enough to drive precipitation and lower alkalinity export.<Sidenote>While calcite stores carbon, it is not always a durable reservoir in managed soils, so calcite precipitation does not contribute to CDR in our calculations.</Sidenote> Both effects dampen the carbon removal response to coarser meteorological forcing.

At four of our eight sites, coarser meteorological forcings increase forsterite dissolution _and_ reduce alkalinity loss in the sub-soil, leading to a disproportionately large increase in CDR. Here, we use the Palouse soil series in eastern Washington as an example (Figure 4, eastern WA). Extra forsterite dissolution in the long-term mean case could raise carbon removal by 0.28 t/ha, but the increase in actual carbon removal is nearly twice as high at 0.51 t/ha. This happens because the long-term simulation has both more forsterite dissolution and more acidic porewater. More forsterite dissolution means more alkalinity is released, and more acidic porewater means less alkalinity is consumed by exchangeable acidity — both act to increase carbon removal relative to the hourly simulation. The long-term mean simulation dissolves more forsterite while staying more acidic because it has higher levels of soil CO₂, which ends up driving the pH response.

The outlier case in our simulations is Pullman in northern Texas — the only example where coarsening meteorological forcings decreased dissolution, and disproportionately decreased carbon removal. Dissolution decreases by an equivalent of 0.33 t/ha of CDR under long-term forcing, while CDR itself decreases by 0.63 t/ha (Figure 4, northern TX). The hourly case results in more carbon removal because, unlike the other sites, forsterite weathering becomes limited by soil CO₂. Pullman’s initial soil CO₂ concentrations are the lowest of all sites we simulated, and forsterite dissolution brings it below atmospheric CO₂ levels. Under these CO₂-starved conditions, the hourly forcing’s ventilation replenishes CO₂ rather than releasing it, driving more weathering. The long-term mean case’s carbon removal is further limited by the fact that the control run is not CO₂-starved. Its more acidic conditions cause more calcite dissolution compared to hourly, which takes away from net carbon removal.

## Takeaways for quantification and research

This initial exploration indicates that the time resolution of meteorological forcing is consequential in certain contexts. If you want to know if enhanced weathering removes carbon in a given setting, the time resolution of meteorological forcing probably isn’t going to change the answer. But if you’re operating in a context where the accuracy or conservativeness of the carbon removal estimate itself matters — such as comparing modeled results to data, or issuing a credit — this choice deserves attention and justification.

When choosing your meteorological forcing data, it’s useful to consider the goal at hand. If the model is meant as a check on feedstock dissolution, the granularity of the meteorological forcing may not be so important, and a simpler, coarser forcing could be a reasonable choice. But if the model is meant to inform the full reaction network of alkalinity sources and sinks, or constrain uncertainty, then finer meteorological forcing with more process representation could be a more defensible choice. The decision could also depend on the observational data used to calibrate and validate the model. Comparing the model results to high-resolution lysimeter data might justify using a finer time resolution, whereas a coarser resolution could be defensible when comparing to time-integrated cation depletion data.

Moving forward, we see several opportunities to build on this work and develop more confident guidance around modeling best practices. Three questions are top of mind. First, does our finding that soil CO₂ increases with coarser forcing hold if CO₂ production is allowed to respond to variations in moisture and temperature? Second, is feedstock dissolution more responsive to forcing granularity when reactive surface area evolves with soil moisture? Finally, what does forcing resolution do to spinups — the simulations used to set initial conditions for the results we present here? We used long-term mean forcing for each site’s spinup to give each run a common starting point,<Sidenote>Spinup runs can also span hundreds or thousands of years to achieve steady state, so long-term mean forcing helps make these runs less computationally expensive.</Sidenote> but results might change if the spinup forcing matched the simulations built upon it.

If you've explored forcing resolution in your own simulations — or if you try it after reading this — we'd like to hear what you found, especially where it diverges from our results.

<Endnote label='Credits' divider>

Tyler and Zach conceived the analysis. Zach conducted the modeling. Tyler drafted the article, and all authors contributed to writing and review. Shane designed the figures with support from Tyler, Zach, and Kata Martin.

Please cite as Z Perzan et al. (2026) “How averaging out the weather affects enhanced weathering estimates” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/modeling-bytes-03-meteorology](carbonplan.org/research/modeling-bytes-03-meteorology)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan’s work on this article was supported by a grant from the Chan Zuckerberg Initiative DAF, an advised fund of Silicon Valley Community Foundation. Article text, figures, and [underlying data](https://doi.org/10.5281/zenodo.22947690) are made available under a [CC BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

Zach is an assistant professor at University of Nevada, Las Vegas. His contributions were made as a summer Research Fellow hired by CarbonPlan.

</Endnote>
