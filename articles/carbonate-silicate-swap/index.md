---
version: 1.0.0
title: Scaling enhanced weathering in limed fields
authors:
  - Tyler Kukla
  - Yoshiki Kanzaki
  - Christopher T. Reinhard
  - Noah J. Planavsky
  - Shane Loeffler
  - Kata Martin
  - Freya Chay
date: 08-27-2025
summary: Both agricultural liming and enhanced weathering spread crushed rocks on fields and have the potential to remove carbon from the atmosphere. We explore how modifying liming for carbon removal works — and whether markets are the best way to fund it.
quickLook: Both agricultural liming and enhanced weathering spread crushed rocks on fields and have the potential to remove carbon from the atmosphere. We explore how modifying liming for carbon removal works — and whether markets are the best way to fund it.
color: grey
background: articles/032/tractor
icon: articles/032/tractor-small
card: carbonate-silicate-swap
links:
  - label: Preprint
    href: https://cdrxiv.org/preprint/304
components:
  - name: Figure1
    src: ./components/figure-1.js
  - name: DIC
    src: ./components/figure-1.js
  - name: Cation
    src: ./components/figure-1.js
  - name: Anion
    src: ./components/figure-1.js
  - name: Weathering
    src: ./components/figure-1.js
  - name: Figure2
    src: ./components/figure-2.js
  - name: Figure3
    src: ./components/figure-3.js
  - name: Figure4
    src: ./components/figure-4.js
  - name: ConservativeLegend
    src: ./components/figure-4.js
  - name: SimpleSubtractionLegend
    src: ./components/figure-4.js
  - name: HCO3
    src: ./components/chemistry.js
  - name: CO3
    src: ./components/chemistry.js
---

Part of the reason enhanced rock weathering is such a promising carbon removal approach today is that spreading crushed rocks on a field is nothing new. Agricultural liming is a farming practice that uses crushed rock to reduce soil acidity and improve yields. Over decades, farmers have figured out how to do this at scale — thus, without realizing it, overcoming a core practical challenge of enhanced weathering. Liming expanded the infrastructure for quarrying, crushing, transporting, and spreading rocks, and led to years of research on how rock dissolution affects soil chemistry and crop yields.

To the carbon removal community, the scale and tradition of liming is thus a welcome vehicle for scaling enhanced weathering. But as real world deployments begin, it has become clear that the legacy of liming could limit enhanced weathering by complicating the use of carbon removal credits to support it.

The problem is threefold. First, the rocks commonly used for enhanced weathering may not always remove more carbon than traditional liming. Second, it’s hard to account for the liming that would likely have happened without an enhanced weathering project. And third, modifying an existing process makes it difficult to separate out just the removal benefits — [something](https://carbonplan.org/research/cdr-counterfactual-accounting) [we’ve written about before](https://carbonplan.org/blog/counterfactual-accounting-update). None of these issues can be ignored and, in many cases, are so thorny that they could limit the types of projects the carbon market will support.

We recently authored a [preprint](https://cdrxiv.org/preprint/304) that focuses on the first challenge — the conditions under which liming could outperform enhanced weathering for carbon removal. In it, we dove deep into the geochemical differences between rocks commonly used for liming and enhanced weathering, and presented a framework for deciding between them. We stopped short, however, of exploring the implications for making these decisions in the context of the nascent carbon markets.

This article builds on our preprint to explore how the existence of liming might limit the market’s ability to support and scale enhanced weathering projects. Liming creates tension with some of the market’s most basic requirements, including the precise quantification of carbon fluxes and a clear demonstration that carbon removal credits represent real, additional carbon removed relative to some baseline. Non-market-based solutions could relax these requirements to support good projects that might not happen in a world where the market is the only option.

To get to that point, we first dig into the climate benefits of liming and enhanced weathering on their own. We use a model to show how neither practice is inherently better at carbon removal and how different carbon accounting frameworks complicate the comparison between them. Then we discuss how these theoretical challenges are amplified by the practical limitations of carbon quantification in the market. Combined, these issues mean that some projects likely won’t be viable in the carbon market, even if they would be good for the climate. If we want to maximize the climate benefits of spreading rocks on agricultural fields, this provides a clear example of why we need to explore other financial models to support these practices.

## Why is it so hard to quantify the carbon flux?

At a technical level, liming and enhanced rock weathering are essentially the same activity pursued for different goals. Both involve spreading crushed rock on agricultural fields; both reduce soil acidity; and both can result in carbon removal under the right conditions. In fields that have been limed, we can think of enhanced weathering as effectively modifying the existing rock spreading practice to improve carbon removal outcomes.

The key difference, from a climate perspective, is that they usually use different types of rocks. Farmers often lime with carbonate — a type of rock rich with minerals that contain carbon, like calcite (CaCO₃), while enhanced weathering companies often use silicates — rocks with minerals that are carbon-free, like forsterite (Mg₂SiO₄).<Sidenote>While the majority of enhanced weathering work is done with silicates, some companies are using carbonates. Similarly, not all liming is done with carbonate rocks — the preferred feedstock tends to vary regionally based on what is available and affordable.</Sidenote> Neither rock is universally better at removing carbon from the atmosphere. The results from our preprint show how the optimal choice depends on project-specific factors as well as normative choices like the spatial and temporal boundaries of carbon quantification. But a few general distinctions can help us navigate the trade-offs that exist before we introduce the complexity of the market.

### Different rocks with different strengths

Carbonates and silicates are alike in that they are both cation-rich. When they dissolve, or weather, the chemical reactions consume protons (H⁺) and release cations such as Ca²⁺ and Mg²⁺. More cations increases the amount of carbon the soil water can hold — their positive charge balances the negative charge of dissolved inorganic carbon species like <HCO3 /> and <CO3 /> (Figure 1). Once exported to the ocean, the cations and carbon can be durably stored for thousands of years.

That’s where the similarities end. Carbonates and silicates weather at very different rates — carbonates tend to weather rapidly, while silicates can take years to release the same number of cations a carbonate might release in months (Figure 1). But faster isn’t always better. Carbonates also release their own carbon when they dissolve, which means less of the resulting <HCO3 /> and <CO3 /> comes from the atmosphere. In acidic conditions, that carbonate-derived carbon can even be released to the atmosphere, making carbonates a local source of CO₂ (Figure 1, high acidity).<Sidenote>Note that the total impact of cation release on the atmospheric CO₂ budget depends on the fate of the cations over time and the carbon fluxes that would have occurred if no rock was spread at all.</Sidenote>

<Figure>
  <Figure1 />
  <FigureCaption number={1}>
    Rock weathering mediated by carbonic acid — which is in equilibrium with
    atmospheric CO₂ — produces dissolved carbon <DIC /> that is charge-balanced
    by cations <Cation />. Carbonates tend to weather faster than silicates,
    shown by more rocks weathering at once <Weathering />, but they release
    their own carbon <Anion />. In the high acidity case, weathering rates
    increase, but the weathering is done by strong acid that does not directly
    remove atmospheric CO₂ and can even emit carbonate-carbon to the
    atmosphere.{' '}
  </FigureCaption>
</Figure>

### Trade-offs mean outcomes aren’t intuitive

If liming was universally bad for the climate, and enhanced weathering universally good, then limed fields wouldn’t pose a problem for the market. Unfortunately, it’s not that simple. Even on a site-by-site basis, it’s hard to figure out when enhanced weathering is better than liming, and by how much. That’s the root of the problem — the carbonate-silicate trade-off encompasses a complicated landscape of outcomes and the market has to figure out how to navigate it.

To get a sense for why this landscape is so complicated, we explored a few of the parameters that matter with the soil geochemical model [SCEPTER](https://github.com/cdr-laboratory/SCEPTER).<Cite ids={['kanzaki.2022','kanzaki.2024']} /> We compared calcite, a carbonate and common liming agent, to basalt, a silicate and common enhanced weathering feedstock, in conditions similar to the Corn Belt in the US Great Plains.<Sidenote>Liming is relatively common in the Great Plains, and there are ongoing basalt enhanced weathering field trials in the region.</Sidenote> We also tested a less acidic and more acidic soil by varying how much ammonium nitrate fertilizer was applied, with less fertilizer corresponding to less acidity.

The first factor we have to consider when comparing calcite and basalt is how much rock weathers. You can generally increase the rate of rock weathering in two ways: adding more rock or grinding it more finely. More and finer rock increases weathering by creating more surface area for the water and rock to interact. But it comes at a cost — transporting and crushing more rock emits more carbon to the atmosphere.

Figure 2 focuses on just the geochemical removal — ignoring the emissions from transporting and crushing the rock. It shows how basalt is much more responsive to the amount and fineness of rock than calcite. That’s because basalt weathers more slowly, making it more sensitive to increasing the surface area. Calcite also becomes saturated in the soil pretty quickly — at a certain point, adding more calcite has little effect on weathering. Basalt, in contrast, is not as saturation-limited in our model conditions.

The other key takeaway from Figure 2 is that calcite does not _always_ emit carbon in more acidic soils. It’s tempting to assume that if the soil is acidic today, then past liming must have emitted carbon, so we don’t have to account for any potential removal. That might be true when smaller amounts of rock are applied, but adding more rock can temporarily reduce the soil acidity enough to make up for it (Fig. 2; high acidity). The soil might be acidic again a year later, after the calcite is gone, but that doesn’t mean applying the rock led to more carbon emissions than removals. Rock weathering (including liming) could also decrease emissions downstream by exporting less acid from the soil. We don’t account for that here but, if we did, soil acidity would likely have an even smaller effect on removal outcomes.

<Figure>
  <Figure2 />
  <FigureCaption number={2}>
    Carbon removal, integrated after 15 years of annual rock application, for
    different application fluxes. Moving the grain size slider shows that basalt
    removal is more responsive to changing the grain size than calcite. Toggling
    to the high acidity scenario shows that acidic soil decreases basalt carbon
    removal and can turn calcite into a source of emissions at lower calcite
    application fluxes.{' '}
  </FigureCaption>
</Figure>

Comparing calcite and basalt gets even more complicated when we account for the emissions from transport and crushing.<Sidenote>We use the emissions framework of [Zhang et al., 2023](https://doi.org/10.1021/acs.est.3c01658). More details on how we parameterize it can be found in the preprint.</Sidenote> Figure 3 shows how net removal — the bolded lines — peaks at a certain application flux for calcite, but not basalt. Once the soil approaches calcite saturation, adding more rock drives more emissions than removals. However, in our simulations, adding more basalt often compensates for the emissions of spreading more rock, unless the transport distance is very far. The same general trends are found in both the less acidic and more acidic soil cases. If our goal is to maximize the carbon removal flux, Figure 3 makes a strong case that maximizing basalt application is the answer.

However, at this point it’s important to stress that these are the results of just one model. The model is a useful tool for understanding which factors matter for the calcite-basalt trade-off and whether they can interact in surprising ways. But we still have a lot to learn. Other models and experiments may find that basalt is more saturation-limited, or that basalt removals don’t always outpace emissions when you add more rock. In fact, we found that adding more basalt leads to less removal if we just change how the model represents the evolution of mineral surface area — a fairly uncertain process. Even if more rock leads to more CDR, we also don’t have a firm grasp on how much rock is “too much” — over-application could lead to drawbacks over time.<Cite ids={['levy.2024']} /> For now, results like these teach us how hard the problem is to solve, not necessarily how to solve it. In the next section, we’ll explore how this already uncertain landscape gets even more complicated in the context of the carbon removal market.

<Figure>
  <Figure3 />
  <FigureCaption number={3}>
    Net carbon removal for calcite and basalt. The “weathering” line is the same
    as the removal line in Figure 2. The “logistics” line is the sum of crushing
    and transport emissions. The bold “net” line is the difference between the
    two. Explore different scenarios with the grain size slider (which affects
    both “logistics” and “weathering”) and the transport distance slider (which
    only affects “logistics”). Toggle to the high acidity case to see how more
    acidic soils change net removal outcomes.
  </FigureCaption>
</Figure>

## Liming makes it harder to build a reliable carbon market

Our analysis of removals and emissions tells us that there aren’t any shortcuts to quantifying net carbon removal — it requires a lot of information, especially for fields that were previously limed. In the carbon market, registries have the difficult job of deciding what information is trustworthy and how to accurately translate it into carbon credits. Accounting for liming requires more (and often less accurate) information, which threatens to make those credits less reliable.

As we mentioned at the beginning of this article, there are three key problems that have to be tackled to make markets work: (1) quantifying the direct carbon impact of the project; (2) estimating what would have happened without the project; and (3) comparing the two scenarios and determining which portion of the difference represents new carbon removal.

Our preprint addresses why the first step is always difficult, but liming also significantly complicates steps two and three.

To estimate what would have happened without an enhanced weathering project — step two — you first have to define the counterfactual liming practice. This includes determining what rock would have been applied, how much, and how often. That’s easier said than done. Field-scale liming records are sparse, potentially unreliable, and sharing them can create privacy concerns. Regional liming data could inform field-level practices, but they are often incomplete or privately held.

After defining the counterfactual practice, you then have to estimate its carbon cycle impact. This task faces the same measurement and modeling uncertainties as the project itself. You could use a control plot, but lime dissolution is difficult to measure in the field, and control plots can be expensive and burdensome for farmers and project developers. Models can help, but they are rarely sufficient on their own. One could make very conservative assumptions about the counterfactual carbon removal, but this risks over-penalizing the enhanced weathering project in ways that could undermine its viability.

Then, after all that, you still have to tackle the third step: determining which changes count as creditable carbon removal. In theory, markets distinguish between avoided emissions and carbon removal — and only the removal benefit qualifies for a carbon removal credit. This means that even if an enhanced weathering project produces real net benefits compared to a liming baseline, only part of those benefits might be eligible for carbon removal crediting.

### The market could limit project viability

We can use a simplified scenario to show how different carbon accounting frameworks shape crediting of enhanced weathering projects. If we collapse all the complexity of enhanced weathering projects into just two decisions — the amount and fineness of silicate rock — we can get a sense for which projects might be excluded when we separate removals from avoided emissions. Figure 4 lays out this solution space, showing which projects are considered favorable to a baseline liming scenario under the “simple subtraction” method (represented by shading), which doesn’t separate removals from avoided emissions, and the “conservative” method (represented by hatching), which does.<Sidenote>While there are [several different approaches](https://carbonplan.org/research/cdr-counterfactual-accounting) one might take to separate avoided emissions, we use the “conservative” approach because it’s the one adopted by the registry Isometric in their enhanced weathering protocol ([v1.1](https://registry.isometric.com/protocol/enhanced-weathering-agriculture/1.1)).</Sidenote>

Which accounting approach is “correct” is largely a policy question that hinges on the goal of funding the project. If the goal is the precise quantification of removal to support offsetting claims, the conservative approach makes sense. If the goal is to fund activities that are good for the climate, even if they might be hard to precisely quantify, then simple subtraction might be enough. Because the market primarily supports offsetting claims, we shouldn’t relax the accounting rules just to support more good projects. At the same time, it’s important to understand where market accounting frameworks risk excluding projects that _do_ bring real climate benefits.

<Figure>
  <Figure4 />
  <FigureCaption number={4}>
    Basalt carbon removal outcomes relative to a baseline liming scenario.
    Shading or hatching indicates a good climate outcome for a basalt practice
    that uses a given application flux (x-axis) and grain size (y-axis). The
    shading <SimpleSubtractionLegend />
    refers to the simple subtraction case, where removals (R) and emissions (E) from
    the liming baseline are subtracted directly from the basalt project. The hatching{' '}
    <ConservativeLegend /> refers to the conservative case, where only the baseline
    removals are subtracted from the project, ensuring that avoided baseline emissions
    are not credited. Use the toggle options to explore the effects of soil acidity
    and the basalt transport distance relative to the baseline.{' '}
  </FigureCaption>
</Figure>

Here we see that the impact of excluding avoided emissions depends on the details of the project and the baseline. Clicking through the options in Figure 4, more acidic conditions and a shorter basalt transport distance both lead to more project scenarios that appear good for the climate under simple subtraction but won’t be supported by the conservative approach. Some of this difference is owed to avoided emissions and, in the less acidic case, some is owed to real removals that [cannot be objectively separated](https://carbonplan.org/research/cdr-counterfactual-accounting) from avoided emissions. In contrast, if the transport distance is the same and soil acidity is low, then there is hardly any difference between the two approaches at all.

Separating removals from avoided emissions isn’t the only way that liming could limit projects in the carbon market. The burden of defining and quantifying the liming baseline could push market actors to focus on fields with no liming history at all — a trend that is already starting to emerge. Even if the baseline is easy enough to define, it could raise questions about how much carbon removal from the project is additional relative to the baseline. Any fuzziness around this additionality question could pose a reputational risk, making projects unattractive. At this point, it’s hard to say how much these issues could limit enhanced weathering’s ability to scale. But it’s clear that possibility exists. If we want to make sure these limitations don’t hold enhanced weathering back, we may need to consider other ways to support it beyond the market.

## It’s time to think outside the market

Liming laid the groundwork for scaling enhanced rock weathering, but liming also creates challenges that make it harder to properly quantify and credit enhanced weathering projects. Our work analyzing carbon fluxes and evaluating the impacts of different accounting frameworks has led us to the conclusion that the real problem here with making markets work might be the market itself. The tension between liming and enhanced rock weathering should be taken as an invitation to consider other mechanisms for supporting projects that benefit the climate.

We are not yet at a point in our research where we can definitively say which alternative mechanisms would do a better job helping scale enhanced weathering, and under which circumstances. Based on what we have learned about how much project-specific variables affect carbon removal outcomes, it’s likely the ideal funding mechanism will vary, as well. But the science suggests markets will not be able to scale enhanced weathering on their own, and we know other options exist.

One example is pay-for-practice programs, which already provide financial support to liming practices around the world. Repurposed for enhanced weathering, these programs could pay farmers to spread rocks in a way that supports broader climate goals. The quantification problem might be easier, but the implementation would still require careful science and policy design. The pay-for-practice model is well suited to support activities that are hard to quantify, yet also have a high likelihood of delivering good outcomes. In theory, this mechanism could more rapidly scale rock spreading practices that are good for the climate by relaxing the strict quantification, baselining, and additionality requirements that make some projects poorly suited for carbon removal crediting. It’s not a guaranteed solution by any means. But the tension between markets and the science of enhanced weathering is growing harder to ignore, making it more important than ever to find other ways to support good climate outcomes.

<Endnote label='Credits' divider>

Tyler performed the analysis and wrote the article with Freya. Yoshiki, Christopher, and Noah helped develop the model simulations and interpretations and co-authored the preprint. Shane and Kata produced the figures. Thanks to Grayson Badgley, Maggie Koerth, and other colleagues at CarbonPlan for additional comments and discussion.

Please cite as:

T Kukla et al. (2025) “Scaling enhanced weathering in limed fields” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/carbonate-silicate-swap](https://carbonplan.org/research/carbonate-silicate-swap)</span>

</Endnote>

<Endnote label='Terms'>

This work was supported in part by [grants](https://carbonplan.org/funding) from Giving Green (via Giving What We Can) and Adam and Abigail Winkel. No one except the authors exercised control over the research process or products. The authors are solely responsible for the content of this commentary, which does not reflect the views of any other individuals or organizations.

Article text, figures, and underlying [data](https://doi.org/10.5281/zenodo.16916117) are made available under a [CC BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

</Endnote>
