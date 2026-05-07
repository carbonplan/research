---
version: 1.0.0
title: How surface roughness scaling can mislead enhanced weathering predictions
authors:
  - Tyler Kukla
  - Alexis Navarre-Sitchler
  - Kate Maher
  - Shane Loeffler
  - Freya Chay
date: 05-07-2026
quickLook: Correcting a mis-interpreted equation in EW models.
components:
  - name: Authors
    src: ./components/authors.js
  - name: Figure
    src: '@carbonplan/components'
  - name: FigureCaption
    src: '@carbonplan/components'
  - name: Rulers
    src: ./components/rulers.js
  - name: Roughness
    src: ./components/roughness.js
  - name: Cdr
    src: ./components/cdr.js
slug: modeling-bytes-02-roughness
card: modeling-bytes-02-roughness
---

# {title}

<Authors authors={authors} color={color} />

Not all modeling choices in enhanced weathering (EW) have clear right answers, but some choices are clearly wrong. Over the last six years, enhanced weathering modeling has widely adopted a misinterpreted parameterization for rock surface area that can drastically inflate modeled carbon removal outcomes.

Parameterizing the surface area of crushed rock is a consequential EW modeling decision. Higher surface areas tend to mean faster weathering and more carbon removal — the same principle that explains why crushed ice melts faster than a single block. In this case, a minor misinterpretation of a paper from 2007<Cite id='navarre-sitchler.2007' /> (written by one of the co-authors of this article) has led to many EW modeling studies using an equation that we believe inflates surface areas by ~10-100x, potentially producing similarly inflated carbon removal outcomes.

The goal of this piece is to correct the record and propose an alternative approach for the EW community. We explain the error, show the magnitude of its effect in a set of example simulations, and discuss how to interpret the affected papers.

## Correcting the misused parameterization

Most EW models calculate initial rock surface area by treating rock grains as perfect spheres, computing their surface area from the radius, and then multiplying by a “roughness factor,” as grains aren’t perfectly round. The key question here is what roughness factor models should use.<Sidenote>Since spheres have the lowest surface area to volume ratio of any 3D shape, valid roughness factors are greater than or equal to one.</Sidenote>

Today, perhaps the most common approach in EW modeling is to calculate the roughness factor from the grain radius using an equation put forth by Navarre-Sitchler and Brantley, 2007 (NSB07).<Cite id='navarre-sitchler.2007' hide={[true]} /> Its use in EW models can be traced back to Beerling et al. (2020) — a highly influential paper that presented pathways for scaling EW to two billion tonnes of carbon dioxide removal per year.<Cite id='beerling.2020' /> Since then, at least 14 other studies across six different bespoke EW models have used the same surface roughness parameterization.<Cite ids={['anand.2026', 'baek.2023', 'beerling.2025', 'bertagni.2025', 'eufrasio.2022', 'jerden.2024', 'kantzas.2022', 'kanzaki.2022', 'kanzaki.2024', 'kukla.2025', 'taylor.2026', 'valMartin.2023', 'vakilifard.2021', 'zhang.2025' ]} /> The problem is the parameterization was incorrectly applied from the start.

We refer to the mistaken parameterization as the B20 equation, since it comes from Beerling et al. (2020). The B20 equation and the NSB07 equation are written identically:

> λ = (β/_a_)<sup>_d_</sup>.

Both equations solve for the roughness factor, λ, and rely on constants, _a_ and _d_, which are discussed below. The key difference — and the mistake in the B20 equation — is the interpretation of β. B20 defines β as the grain radius, while NSB07 defines it as the smallest feature resolvable by the “ruler” you use to measure the surface area.

To understand the correct interpretation of β, it helps to first understand the problem NSB07 was trying to solve. Rather than provide a roughness factor for EW models, the NSB07 equation was part of a framework for comparing basalt weathering rates measured at different scales. Researchers need to measure surface area to get a weathering rate in terms of the mass of rock weathered per area per time, but the ruler they use affects the result. This is analogous to the “[coastline paradox](https://en.wikipedia.org/wiki/Coastline_paradox),” where coastline perimeters appear shorter when measured with larger rulers. Like coastlines, rock surfaces are fractal, so larger rulers smooth out more detail. NSB07 presented a framework to correct for that effect.

The smallest commonly used ruler for rock surface areas is a gas molecule, typically N₂, and its size sets the “target” resolution for surface area in EW models. Using gas phase adsorption, this ruler measures the “BET” (Brunauer, Emmett, and Teller) surface area, which approximates the surface area that is accessible to water and, therefore, weatherable. Coarser rulers need a factor, λ, to scale the surface area they measure up to the BET surface area — with larger λ values needed at coarser scales (Figure 1). For example, at the grain scale, if you measure the spherical surface area, you’d have to apply a scaling factor to account for the actual roughness of the grain surface. At the far larger watershed scale, if you measure the area of the basaltic bedrock, you would smooth out even more features — such as larger cracks and fracture networks — and would have to apply a much larger scaling factor to get back to BET surface area.

<Figure>
  <Rulers />
  <FigureCaption number={1}>
    EW modelers want to account for the rock surface area at some target
    resolution (top panel) — usually the surface area accessible by water. But
    certain features are smoothed out by the ruler used to make the measurement.
    To account for this, each ruler has a fixed scaling factor, λ, based on its
    resolution (middle and bottom panels). Since the lower resolution ruler
    smooths out more detail, it needs a larger scaling factor. The NSB07
    equation estimates that factor based on the resolution of the ruler.
  </FigureCaption>
</Figure>

In the NSB07 formulation, β is the size of the smallest feature your ruler can resolve. It gets normalized to the denominator, _a_ — the resolution of the BET ruler — and raised to the power of _d_, the empirically determined fractal dimension. Critically, this means that when applying NSB07 correctly, each ruler has a single smallest resolvable feature, and therefore a single corresponding λ value.

Since the EW models are typically trying to estimate surface area starting from a spherical grain size ruler, they should use the β value from NSB07 that is associated with that ruler — yielding a λ of ~20. By instead letting λ vary with grain radius, the B20 equation leads to higher λ values, and therefore higher surface areas, for nearly all EW grain sizes — ~2-10x higher than the correct interpretation of NSB07 (Figure 2).

<Figure>
  <Roughness />
  <FigureCaption number={2}>
    Roughness factor (λ) versus grain radius for the B20 equation and NSB07.
    Since grain radius is measured with a single ruler, λ is constant across
    grain sizes in the NSB07 equation. The B20 equation leads to more inflated
    roughness factors for larger grain sizes.
  </FigureCaption>
</Figure>

That said, even the correct interpretation of NSB07, which results in substantially smaller values of λ, is likely still inappropriate for EW applications. That’s because a λ of 20 is about twice as high as the λ values typically measured for ground, fresh mineral surfaces.<Cite ids={['anbeek.1992', 'beckingham.2016', 'rimstidt.2012', 'white.2003', 'white.1990']} /> That discrepancy is acceptable in the context of NSB07, which derived λ values from a post-mortem analysis of published data spanning ~13 orders of magnitude. For EW, however, the relevant question is what roughness factors actually look like for the freshly crushed rock that gets applied to fields — and the observational data is likely to be a more appropriate constraint.

## Inflated carbon removal estimates

Artificially high roughness factors can lead to artificially high carbon dioxide removal (CDR) estimates, and that’s what we found when we used a model to compare the B20 equation to roughness factors more consistent with the observational data. For the two basalt feedstocks we tested at a range of grain sizes, using the B20 equation inflated CDR estimates by 2x at the low end, and ~250x at the high end.

Our analysis used the reactive transport model SCEPTER ([v1.0.2](https://github.com/cdr-laboratory/SCEPTER/releases/tag/v1.0.2)), where the B20 equation is the default roughness factor treatment.<Cite id='kanzaki.2022' hide={[true]} /> Our EW simulations spread 10 tonnes of rock per hectare annually for 50 years, testing different roughness factor treatments, feedstocks, and grain sizes. You can find our model results [here](https://doi.org/10.5281/zenodo.19962322), and code for our analysis [here](https://github.com/carbonplan/ew-byte-02/releases/tag/v1.0).

Figure 3 shows how much less CDR is achieved using roughness factors of 1-10, or the NSB07 equation, compared to the B20 equation. For both basalts — the glassy basalt<Cite id='kanzaki.2024' hide={[true]} /> and Blue Ridge basalt<Cite id='lewis.2021' /> — larger grains lead to more inflated CDR with the B20 equation, consistent with a larger discrepancy in λ values.<Sidenote>In all roughness factor treatments, coarser grains lead to less surface area per unit mass and less CDR (not shown). Since the B20 equation assumes coarser grains are also rougher, the decrease in surface area (and thus CDR) is smaller.</Sidenote> We focus on the results where λ is less than 10, consistent with data. In those simulations, at a grain radius of 100 μm, CDR reaches just 1-30 percent of what the B20 equation achieves, depending on the roughness factor and the feedstock. At a radius of 600 μm, that range drops to ~0.4-8 percent.

<Figure>
  <Cdr />
  <FigureCaption number={3}>
    Fraction of CDR achieved with alternative roughness factors compared to the
    B20 equation. Ribbons bound the empirical range of typical λ values — 1-10.
    Points show CDR outcomes with the correct application of the NSB07 equation.
    For the two basalts we tested — the glassy basalt and Blue Ridge basalt —
    the B20 equation inflates CDR outcomes more with larger grains.
  </FigureCaption>
</Figure>

The CDR response to a lower roughness factor depends in part on the composition of the feedstock.<Cite ids={['lewis.2021', 'qin.2021']} hide={[true, false]}/> In our simulations, the glassy basalt is slightly more sensitive to the roughness factor treatment than the Blue Ridge basalt. The difference is likely due to the presence of reactive minerals in the Blue Ridge basalt that approach chemical equilibrium under typical soil conditions, such that reaction progress is governed more by the renewal of dilute soil water than by reactive surface area.<Sidenote>Surface roughness is not as important a factor for all feedstocks. As an example, we repeated these simulations with calcite and, consistent with [previous work](https://doi.org/10.1016/j.apgeochem.2020.104852), found the surface roughness parameterization had a negligible effect on CDR outcomes. These calcite simulations are just for illustrative purposes. The B20 equation has only been applied to basalt, consistent with the intent of NSB07.</Sidenote>

## Moving away from the B20 equation

Models don’t require a roughness factor — EW practitioners could prescribe the specific surface area directly, and some have<Cite ids={['deng.2023', 'green.2024']} /> — but the concept remains useful in EW. Grain size is one of the most commonly measured feedstock characteristics. It relates to the emissions required to crush the rock, and the mesh sizes of the sieves used to sort it. The roughness factor lets modelers connect their downstream weathering estimates to these upstream processes.

But until more empirically grounded formulations are developed, we suggest modelers should use roughness factors within the 1-10 range, independent of the grain size. This range is supported by data, including mechanically ground rock, and appears in a range of minerals including feldspars, pyroxenes, and olivines.<Cite ids={['anbeek.1992', 'beckingham.2016', 'rimstidt.2012', 'white.1990']} hide={[true, true, true, true]} /> It’s also consistent with suggested modeling practices in marine EW<Cite id='geerts.2025' /> and with a number of terrestrial EW papers that used a roughness factor of one.<Cite ids={['chen.2023', 'cipolla.2021a', 'cipolla.2021b', 'cipolla.2022', 'vink.2023']} /> The two other parameterizations we’ve seen in the terrestrial EW literature yield λ values in the ~5-30 range, with higher values at _smaller_ grain sizes,<Cite ids={['brantley.2000', 'strefler.2018']} /> though these equations rely on a limited set of data. In aggregate, a systematic relationship between λ and grain size may only emerge when we account for additional parameters such as mineralogy and grinding method.<Cite id='hodson.1998' />

The roughness factor can also be measured directly as the ratio of the BET and spherical surface areas. But this approach is complicated by secondary minerals that can have extremely high surface areas without contributing to CDR.<Cite ids={['kuila.2013', 'macht.2011', 'theng.1982']} /> One recent study found that even trace amounts of these secondary phases ({'<'}0.1 weight percent) can account for most of the BET surface area.<Cite id='fisher.2023' /> Without careful screening, these secondary phases could increase the roughness factor without increasing the unweathered surface area that matters for CDR.<Cite id='beckingham.2017' />

With more roughness factor data being collected across grain sizes and feedstocks, better parameterizations may emerge down the road. But in this early phase of EW modeling, restricting λ to less than 10 is a responsible choice because it is less likely to inflate modeled CDR outcomes in ways inconsistent with the available evidence.

## Recalibrating expectations

The mistaken B20 equation has been widely used in the EW modeling community, and the CDR estimates reported in affected papers should be interpreted accordingly.<Sidenote>Some of the authors of this piece (Tyler and Freya) have published a [preprint](https://doi.org/10.70212/cdrxiv.2025304.v1) that uses the mistaken parameterization.</Sidenote> Some affected papers make points that likely hold true regardless of the roughness factor parameterization. But papers that make claims about the amount or scale of CDR that EW can achieve — including the foundational Beerling et al. (2020) paper — risk miscalibrating our expectations. Those results should be understood as likely inflating CDR outcomes, perhaps by as much as two orders of magnitude.

The broader lesson here is that we are still in the learning phase of EW. That mistakes exist in the EW modeling literature is not itself a problem — in these early stages, mistakes are all but guaranteed. Problems arise, however, when we place high confidence in published results whose methods are still actively being developed. The academic literature can help stakeholders calibrate expectations for EW as a CDR pathway, but those expectations should be treated as provisional until the underlying methods mature.

<Endnote label='Credits' divider>

Tyler conceived the article, conducted the analysis, and wrote the first draft. All authors contributed to writing. Alexis helped clarify the interpretation of the NSB07 equation. Shane designed the figures with support from Tyler and Kata Martin.

Please cite as T Kukla et al. (2026) “How surface roughness scaling can mislead enhanced weathering predictions.” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/modeling-bytes-02-roughness](carbonplan.org/research/modeling-bytes-02-roughness)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan’s work on this article was supported by a grant from the Chan Zuckerberg Initiative DAF, an advised fund of Silicon Valley Community Foundation. Article text, figures, and [underlying data](https://doi.org/10.5281/zenodo.19962322) are made available under a [CC BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

</Endnote>
