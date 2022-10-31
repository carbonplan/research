---
version: 1.0.1
date: 01-31-2022
title: Unpacking ton-year accounting
authors:
  - Freya Chay
  - Grayson Badgley
  - Kata Martin
  - Jeremy Freeman
  - Joe Hamman
  - Danny Cullenward
color: pink
card: ton-year-explainer
background: articles/013/blowing
quickLook: Explaining methods used to value temporary carbon storage
summary: Ton-year accounting is used to quantify the value of temporary carbon storage — a task for which we lack a clear intellectual framework. We explain how ton-year accounting methods work and highlight crucial differences between prominent ton-year accounting methods.
icon: articles/013/blowing-small
links:
  - label: Our critique of NCX’s methods
    href: /research/ton-year-ncx
  - label: Comment letters to Verra
    href: /blog/ton-year-verra
components:
  - name: CartoonEmissions
    src: ./components/cartoon-emissions.js
  - name: CartoonProject
    src: ./components/cartoon-project.js
  - name: EmissionsChart
    src: ./components/emissions-chart.js
  - name: EquivalenceTable
    src: ./components/equivalence-table.js
  - name: ExamplesTable
    src: ./components/examples-table.js
  - name: MethodsChart
    src: ./components/methods-chart.js
  - name: ValueChart
    src: ./components/value-chart.js
---

To reach net-zero emissions and limit global warming, we’ll need to dramatically cut emissions and remove gigatons of carbon dioxide from the atmosphere for storage.<Cite id='bergman.2021' sxReference={{mt: [3, 3, 3, 4]}} /> Although we ultimately need to reduce emissions and permanently remove carbon from the atmosphere, significant investment has gone into shorter-term interventions that delay emissions or remove carbon for temporary storage — typically involving forestry and agricultural activities in the land sector.<Cite id='joppa.2021'/>

We know temporary carbon storage provides some value for meeting our climate goals, but it’s unclear how much. Surprisingly, there isn’t a clear intellectual framework for thinking about the climate benefits of temporary carbon storage. Answers vary based on which climate outcomes are considered and depend on normative decisions like the time horizon over which value is calculated.

Despite this big-picture ambiguity, many people equate the benefits of temporary carbon storage with the impacts from carbon dioxide emissions. Usually, this assertion is implicit — for example, each time an offset credit representing 10, 50, or 100 years of carbon storage is used to justify the emission of a ton of CO₂.<Sidenote>[The Berkeley Carbon Trading Project](https://gspp.berkeley.edu/faculty-and-impact/centers/cepp/projects/berkeley-carbon-trading-project/offsets-database) estimates that land-sector offset projects have generated more than 640 million tCO₂e worth of offset credits, most of which are non-permanent storage.</Sidenote> Other times the assertion is explicit. In particular, we’ve noticed growing interest in a family of methods called ton-year accounting, which directly value carbon storage based on its duration. These methods are used by companies to bundle short-duration carbon storage, such as [1-year forest harvest delays](https://f.hubspotusercontent20.net/hubfs/9337776/Papers/Forests%20and%20Carbon_A%20Guide%20for%20Buyers%20and%20Policymakers_SilviaTerra2020_v0.4.pdf), into carbon offsets that are marketed as equivalent to more permanent climate mitigation efforts.

Because different ton-year accounting methods paint different pictures about the value of temporary carbon storage, it can be hard to parse what’s going on under the hood. We wrote this explainer to walk through how ton-year accounting works, to articulate ton-year accounting’s implicit assumptions about how temporary carbon storage should be valued, and to highlight crucial differences between the most prominent ton-year accounting methods.

In addition to these descriptive goals, we also develop two analytical conclusions. First, we explain why one approach — the Moura Costa method — produces physically invalid results and should not be used to credit temporary carbon storage. Second, we review the optional use of discount rates, which break any claims to “physical equivalence” that might otherwise be made using ton-year accounting methods.

While ton-year accounting must be understood in the context of broader debates about the value of temporary carbon storage, we do not attempt to resolve those questions here. Rather, we hope that this explainer provides a timely and concrete introduction to the key concepts of ton-year accounting, which is one of the ways offset markets value temporary climate benefits. We’ll return to some of the more fundamental questions about the value of temporary carbon storage in future work.

## Ton-year accounting basics

Ton-year accounting refers to a family of techniques for calculating how many tons of temporarily stored CO₂ are physically equivalent to avoiding the emission of CO₂ in the first place. A central idea in ton-year accounting is that the climate impacts of CO₂ can be characterized by the quantity of CO₂ involved and the time it resides in the atmosphere. Within this framework, a larger quantity of CO₂ stored for a shorter period of time and a smaller quantity of CO₂ stored for a longer period of time can claim equivalent climate outcomes. We've broken down the ton-year accounting process into five basic steps, which we walk through below.

### Step 01 — Defining a new unit

The first step in ton-year accounting is to define a unit that captures both the number of tons stored and the time over which those tons are stored. A ton-year is defined simply as 1 tCO₂ held somewhere — such as in the atmosphere or in a tree — for one year. For example, a tree that holds 1 tCO₂ for 2 years provides 2 ton-years of carbon storage. If instead the tree held 2 tCO₂ for 10 years, it would provide 20 ton-years of storage.

### Step 02 — Dealing with time

The next step is to decide how to value costs and benefits that occur in the future. This is done through the choice of a time horizon, a point past which the costs and benefits of carbon storage are ignored. The shorter the time horizon, the more valuable temporary carbon storage will seem. Notably, choosing a time horizon is a normative judgement rather than the expression of a scientific consensus or physical reality.<Cite id='levasseur.2012a'/>

### Step 03 — Calculating the ton-year cost of an emission

With a new unit defined and a time horizon chosen, the impact of an emission can be calculated in ton-years. If an emission "costs" X ton-years, the logic of ton-year accounting dictates that we can go find storage providing X ton-years of benefit to offset that emission.

If CO₂ stayed in the atmosphere permanently, the impact of an emission in ton-years would simply be the quantity of CO₂ emitted multiplied by the time horizon chosen in Step 2. Emit 1 tCO₂ and track it for 100 years? That’s 100 ton-years. But atmospheric CO₂ concentrations aren’t determined by emissions alone; in practice, calculating the cost of CO₂ emissions in terms of ton-years requires accounting for the parts of the global carbon cycle, like the oceans, that remove CO₂ from the atmosphere.

To demonstrate this calculation, we provide a simplified (but physically unrealistic) example in the figure below. In this example, 1 tCO₂ is emitted at t=0 and removed from the atmosphere by natural processes over four years. In the first year, the 1 tCO₂ results in 1 ton-year of atmospheric impact. In the second year, only 0.5 tCO₂ remains, resulting in another 0.5 ton-years of impact. Summing each year’s atmospheric impact over the 4 year time horizon results in a total cost of 2 ton-years.

<Figure>
  <CartoonEmissions />
  <FigureCaption number={1}>
    A simplified example of calculating the ton-year cost of an emission. In
    this example, 1 tCO₂ is emitted at t=0 and removed from the atmosphere by
    natural processes over four years. The emission’s ton-year impact is summed
    over the time horizon to calculate the total ton-year cost of the emission.
    This example is physically unrealistic because real CO₂ emissions affect
    atmospheric CO₂ concentrations for millennia.
  </FigureCaption>
</Figure>

### Step 04 — Calculating the ton-years of a carbon storage solution

To compare the ton-year cost of an emission with a temporary storage project, the “benefit” of temporary carbon storage must also be calculated in ton-years. Although there are many methods for this benefit calculation, we’ll explain two prominent approaches here: the Moura Costa<Cite id='mouracosta.2000'/> and Lashof<Cite id='fearnside.2000'/> methods.

Moura Costa calculates the benefit of carbon storage in the most straightforward way possible: count up the number of tons stored and multiply by the storage duration. In other words, Moura Costa looks at the carbon storage provided by the trees, but does not directly quantify atmospheric outcomes nor consider the potential impact of re-emission after the temporary storage period. Figure 2 shows this benefit calculation applied to an example project which stores 1 tCO₂ in a tree for two years, then re-emits that CO₂ into the atmosphere. Moura Costa calculates a 2 ton-year benefit for the project.

Lashof, in contrast, looks only at atmospheric outcomes and assumes that temporarily stored carbon is fully re-emitted at the end of the storage period. Lashof calculates the benefit of temporary carbon storage by asking how many ton-years of atmospheric impact are avoided within the specified time horizon. So if temporary carbon storage pushes some of the impact of an emission out past the chosen time horizon, Lashof considers that a quantifiable benefit. For the same Figure 2 example project and a time horizon of four years, Lashof calculates a 0.5 ton-year benefit — only one quarter of the benefit calculated by Moura Costa.

<Figure>
  <CartoonProject />
  <FigureCaption number={2}>
    A simplified example of calculating the ton-year benefit of temporary carbon
    storage according to two ton-year accounting methods: Moura Costa and
    Lashof. In this example, a project stores 1 tCO₂ in a tree for two years,
    then re-emits that carbon into the atmosphere. The emitted CO₂ is removed
    from the atmosphere by natural processes over four years. Moura Costa
    calculates a 2 ton-year benefit, while Lashof calculates a 0.5 ton-year
    benefit. This example is physically unrealistic because real CO₂ emissions
    affect the atmosphere for hundreds of thousands of years.
  </FigureCaption>
</Figure>

### Step 05 — Making an equivalence claim

Once the cost of an emission and the benefit of temporary storage have both been denominated in ton-years, we can answer the question: how much temporary storage do we need to offset an emission?

Both methods answer this question by dividing the ton-year cost of emissions by the ton-year benefit of temporary storage, which produces a unitless equivalence ratio. To complete our example scenario from Figures 1 and 2, under Moura Costa accounting, storing 1 tCO₂ for two years is enough to offset 100% of the CO₂ emission (2 ton-years / 2 ton-years = equivalence ratio of 1). However, applying Lashof to the same project says that we would only offset 25% of the emission, meaning we would need to scale the project four-fold to claim equivalence (2 ton-years / 0.5 ton-years = equivalence ratio of 4).

Despite these divergent outcomes, either method might be used to bundle temporary carbon storage into a carbon offset and problematically, both of these offsets could be marketed as equivalent to 1 tCO₂.

## Connecting ton-year accounting to climate outcomes

With a basic understanding of ton-year accounting, we can now ask how ton-year equivalence claims relate to the climate outcomes we care about.

To start, we must consider a more realistic representation of how carbon emissions affect atmospheric CO₂ concentrations. Calculating a physically accurate estimate of the ton-year cost of a CO₂ emission requires accounting for dynamic adjustments in the global carbon cycle that result from adding more CO₂ to the atmosphere. As atmospheric CO₂ concentrations increase, physical processes within the Earth’s biosphere and oceans respond by taking up additional CO₂, thereby lowering the effective “cost” of the CO₂ emission.

Rather than explicitly incorporating these processes, which operate over timescales of decades to millennia and require careful modeling, ton-year accounting methods instead rely on simplified curves that characterize the proportion of a CO₂ emission remaining in the atmosphere as a function of time.<Cite id='pierrehumbert.2014'/> These modeled “impulse response function” curves make it easy to calculate the atmospheric impact of CO₂ in ton-years without the need to run a full-blown climate model.<Cite id='irf.note'/>

Using the same cost and benefit logic described above, ton-year accounting integrates under these curves (rather than using addition and multiplication as shown in our simplified example) to calculate the ton-year cost of CO₂ residing in the atmosphere. In Figure 3, you can use the time horizon slider to see how the ton-year cost of emitting 1 tCO₂ is calculated by integrating under a CO₂ emission curve.<Cite id='joos.2013'/>

<Figure>
  <EmissionsChart />
  <FigureCaption number={3}>
    Ton-year methods calculate the ton-year cost of CO₂ in the atmosphere by
    integrating under a curve that represents the proportion of an emission
    remaining in the atmosphere as a function of time (Joos et al., 2013). Drag
    the slider to change the time horizon.
  </FigureCaption>
</Figure>

When ton-year accounting takes the integral of the CO₂ emission curve, it approximates the amount of extra energy trapped in the climate system by a CO₂ emission — a concept known as cumulative radiative forcing. Excess energy trapped in the climate system causes harmful and effectively irreversible climate impacts, like glacier melt and sea-level rise,<Cite id='solomon.2009'/> so even temporary reductions yield positive climate benefits.

It is this concept of cumulative radiative forcing that underlies the most plausible ton-year accounting equivalence claims. Emitting CO₂ results in a quantifiable amount of extra energy being added to the climate system. We can also calculate how much less energy is added to the climate system because of temporary CO₂ storage. When these two quantities balance out, ton-year accounting can claim that the emission and the temporary storage are equivalent from the standpoint of cumulative radiative forcing.

But we have to ask if this version of “equivalence” is sufficient. Ultimately that involves a critical normative judgment — the timeframe over which the ton-year comparison is made. To take this to an extreme, balancing climate impacts over just 10 years would clearly misrepresent the physical reality of CO₂’s long lifetime in the atmosphere, but there’s nothing stopping someone from using a 10-year horizon within ton-year accounting.<Sidenote>The choice of a time horizon in ton-year accounting and the calculation of global warming potentials (GWPs) share many of the same challenges and trade-offs. For a summary of the GWP time horizon discussion with references, see [Sarofim & Giordano 2018](https://doi.org/10.5194/esd-9-1013-2018).</Sidenote>

Another notable shortcoming is that cumulative radiative forcing is not the only climate outcome we might care about. There are other climate impacts which are primarily determined by the absolute amount of CO₂ in the atmosphere at a given point in time, rather than the total energy trapped in the climate system over time.<Cite id='kirschbaum.2006'/> These outcomes include long-term temperature targets like 1.5 or 2 degrees. In these cases, storing a ton of CO₂ today but releasing it decades from now may simply kick the can down the road. It’s absolutely possible that temporary carbon storage looks beneficial through the lens of cumulative radiative forcing, but may be neutral or even counterproductive through the lens of temperature targets after the temporary storage ends.

Unfortunately, there is no objective framework for balancing these potentially contradictory outcomes. Ton-year accounting does not attempt to resolve this tension — it simply operates with an implicit assumption that cumulative radiative forcing is the climate outcome we should pay attention to. For some climate impacts and time horizons, that’s probably a reasonable approximation. For others, the assumption doesn’t hold.

The great thing about physical equivalence claims based on cumulative radiative forcing is that we can check them. Figure 4 shows the Moura Costa and Lashof benefit calculations applied to a more realistic project scenario. In the illustrated project scenario, 1 tCO₂ is stored for 20 years before it is fully re-emitted to the atmosphere. All calculations are performed with a time horizon of 100 years.

<Figure>
  <MethodsChart method='Moura-Costa' />
  <FigureCaption number={4}>
    Different ton-year methods produce different claims about the benefit of the
    same temporary carbon storage. For a project that stores 1 CO₂ for 20 years
    before re-emitting it to the atmosphere and a 100 year time horizon, Moura
    Costa calculates a 20 ton-year benefit while Lashof calculates an 8.4
    ton-year benefit. The timescale toggle provides context for how a 100 year
    time horizon compares to the long-lived nature of atmospheric CO₂.
  </FigureCaption>
</Figure>

If Moura Costa and Lashof are both making physical equivalence claims about the same temporary storage, how can they come up with different answers?

For Lashof, we can compare atmospheric outcomes for the emission scenario and the project scenario (with the temporary CO₂ storage scaled according to the equivalence ratio) to confirm that the physical claim is consistent from the standpoint of cumulative radiative forcing. Everything checks out.

When we try to do this for Moura Costa, however, we encounter a problem. To compare atmospheric outcomes, we have to look at what happens to the CO₂ between the end of the temporary storage period and the end of the time horizon. Since Moura Costa’s calculations don’t pay any attention to what happens after the temporary storage period, many different atmospheric outcomes — e.g. full re-emission, partial re-emission, or transition to permanent storage — can all be assigned the same nominal benefit, despite having obviously different physical consequences. Furthermore, if we assume full re-emission (as in Figure 4), the physical equivalence claim [doesn’t hold up](https://github.com/carbonplan/ton-year/blob/main/notebooks/mc-equivalency-claim.ipynb).

It is also true that by comparing the ton-years of CO₂ in the atmosphere directly to the ton-years of CO₂ in storage, Moura Costa distorts the core, physical logic of ton-year accounting and significantly exaggerates the climate benefits of temporary storage. A clear illustration of this problem is that Moura Costa allows for the claim that temporarily storing 1 tCO₂ justifies the emission of more than 1 tCO₂ — an indefensible outcome (Table 1).

<Figure>
  <EquivalenceTable />
  <TableCaption number={1}>
    The Moura Costa method allows for the claim that temporarily storing 1 tCO₂
    justifies the emission of more than 1 tCO₂ — an indefensible outcome.
  </TableCaption>
</Figure>

We are not the first people to make these observations about the Moura Costa method,<Cite ids={['brandao.2013', 'levasseur.2012b']}/> but since the method has been used, we believe these concerns bear repeating.

In sum, ton-year accounting methods can produce equivalence claims that say something useful about cumulative radiative forcing, but may fail to capture other important climate outcomes. Because the Moura Costa method produces physical claims that don’t match atmospheric outcomes, we don’t think it should be used.

## Putting the pieces together

Figure 5 lets you explore how choosing a ton-year accounting method and modifying input parameters can dramatically affect the apparent value of temporary storage. Based on user-specified parameters, Figure 5 shows the ton-year cost of an emission, the ton-year benefit of temporary storage, and the corresponding equivalence ratio calculated by the Moura Costa and Lashof methods.

<Figure>
  <ValueChart />
  <FigureCaption number={5}>
    The choice of a ton-year accounting method and input parameters can
    dramatically affect the apparent value of temporary storage. Based on the
    chosen parameters, the ton-year cost of emitting 1 tCO₂ (top) and ton-year
    benefit of temporarily storing 1 tCO₂ (middle) are calculated according to
    both the Moura Costa and Lashof methods. The storage amount needed for
    equivalence (the “equivalence ratio”) is calculated by dividing the ton-year
    cost of an emission by the ton-year benefit of the temporary storage
    (bottom). The parameters can be modified by moving the sliders or typing in
    values. Note that discount rates should be applied with extreme caution
    since they break the claim of physical equivalence. Displayed values less
    than 1 are rounded to three significant digits.
  </FigureCaption>
</Figure>

With a time horizon of 1000 years, the cost of an emission is about 310 ton-years. Lashof calculates that 1 tCO₂ stored for 1 year would result in an approximately 0.235 ton-year benefit, so for “equivalence”, we’d need to store about 1319 tCO₂ for 1 year (310.161 / 0.235 = 1319.45). Moura Costa, in contrast, calculates we need to store only around 310 tCO₂ for 1 year (310.161 / 1 = 310.161). Changing the time horizon to 100 years drops the Lashof and Moura Costa equivalence claims to 128 tCO₂ and 52 tCO₂ stored for 1 year, respectively.

This diversity can also be seen in real examples of how ton-year accounting has been used in the offsets industry (Table 2).

<Figure>
  <ExamplesTable />
  <TableCaption number={2}>
    Ton-year accounting methods have been and are being used in the offsets
    industry with a diversity of method and parameter choices. CAR (2020) refers
    to the Climate Action Reserve’s implementation of ton-year accounting in its
    [Soil Enrichment
    Protocol](https://www.climateactionreserve.org/how/protocols/soil-enrichment/).
    NCX (2020) refers to the method described in NCX’s [Version 0.4 white
    paper](https://ncx.com/wp-content/uploads/2021/06/Forests-and-Carbon_A-Guide-for-Buyers-and-Policymakers_SilviaTerra2020_v0.4-2-1.pdf).
    NCX (2021) refers to the method described in NCX’s [Version 0.5 white
    paper](https://f.hubspotusercontent20.net/hubfs/9337776/Papers/Forests%20and%20Carbon_A%20Guide%20for%20Buyers%20and%20Policymakers_SilviaTerra2020_v0.4.pdf).
    Each column in the table uses a distinct ton-year accounting method. To
    ground these industry examples in the rest of the conversation, we include
    an example using the Lashof method for comparison.
  </TableCaption>
</Figure>

The Climate Action Reserve (CAR) provides a ton-year accounting option in some of its published protocols, including its [Soil Enrichment Protocol](https://www.climateactionreserve.org/how/protocols/soil-enrichment/). CAR’s ton-year method asserts that 1 tCO₂ stored for 100 years is equivalent to 1 tCO₂ emitted. For projects that do not want to commit to CAR’s standard 100-year permanence obligation, CAR gives 1/100th of a credit for each year 1 tCO₂ is stored. (CAR’s calculation of partial credit is distinct from any other published ton-year approach that we’ve come across; it relies on the assumption that 100-years is “permanent” and gives partial credit for anything less.)

The startup NCX (formerly known as SilviaTerra) has released at least two white papers describing ton-year methods for bundling 1-year forest harvest delays into offset credits and is currently developing an [offsets protocol](https://ncx.com/our-verified-carbon-standard-concept-note-approval/) with the registry Verra. Both NCX versions are described in the table above.

NCX’s current [white paper](https://f.hubspotusercontent20.net/hubfs/9337776/Papers/Forests%20and%20Carbon_A%20Guide%20for%20Buyers%20and%20Policymakers_SilviaTerra2020_v0.4.pdf) asserts that temporarily storing 30.8 tCO₂ for one year is equivalent to the impact of emitting 1 tCO₂. To better understand this claim, we independently replicated NCX’s calculation using detailed methods helpfully provided by NCX in response to our inquiry. While we understand that NCX markets its approach as using a distinct methodology,<Cite ids={['jenkins.2021', 'parisa.2021']}/> [our analysis](https://github.com/carbonplan/ton-year/blob/main/notebooks/ncx-equivalency.ipynb) shows that their approach is conceptually identical to the Lashof method with one important difference — NCX’s ton-year calculations apply a 3.3% discount rate.

The choice to apply a discount rate is more complicated than it may appear. If the goal of ton-year accounting is to produce equivalence claims about physical climate outcomes, applying a discount rate breaks that relationship and invalidates any claim to physical equivalence. Both temporary carbon storage and emitting CO₂ result in quantifiable changes to the Earth’s energy balance and we should compare them directly, no discounting required.

If instead the goal is to produce equivalence claims about economic outcomes, things get more complicated. Calculating the economic value of temporary carbon storage requires translating CO₂ emissions into economic damages. To do this, economists use “damage functions” that take variables like future temperatures and sea-level rise as inputs and generate costs in terms of dollars. Climate economists apply discount rates to those calculated costs to represent them in net present value calculations—a well-established practice we wrote about [here](https://carbonplan.org/research/permanence-calculator-explainer). There are good reasons to think about the economic trade-offs of different climate solutions via net present value calculations, but doing so adds layers of complexity and normative decision-making that must be navigated with care.

By applying a discount rate, NCX makes an economic equivalence claim rather than a physical equivalence claim. The specifics of their approach to economic valuation raise significant questions about their claimed equivalence ratios, which we’ve written about in an accompanying [policy brief](/research/ton-year-ncx). We are also concerned that NCX markets its credits as producing “equivalent climate impacts” compared to permanent carbon storage, when in fact the use of a discount rate allows for greater climate impacts tomorrow in exchange for temporary climate benefits today.

<PullQuote>
  When companies overestimate the physical value of temporary storage, they
  issue more credits than the climate benefits they can back up
</PullQuote>

The default assumption in carbon markets is that all credits justify ongoing CO₂ emissions on a physical equivalence basis, such that a company emitting 10 tCO₂ need only purchase 10 offset credits to negate the climate impacts of their emissions. Using ton-year accounting with discount rates is inconsistent with this assumption, which is why anyone selling credits on this basis needs to make its distinct claims explicit.

These details might appear esoteric, but their impacts aren’t. When companies overestimate the physical value of temporary storage, they issue more credits than the climate benefits they can back up. We are concerned that NCX’s current approach does exactly that and we encourage them to reconsider their methods.

## Key takeaways

So, what can we ultimately say about the utility of ton-year accounting?

First, it’s clear that ton-year accounting is actually a whole bunch of things. The diversity of ton-year methods allows different quantities of temporary carbon storage to be marketed as equivalent to 1 tCO₂, which is why it’s important to surface what assumptions — like the choice of a time horizon or application of a discount rate — underlie all ton-year claims. Any assertion that temporary climate benefits offset ongoing CO₂ emissions on the basis of ton-year accounting requires additional information to understand the normative claims involved and identify whether those claims are based on methods that produce physically justifiable results.

Second, ton-year accounting is only useful for making equivalence claims about climate damages that stem from cumulative radiative forcing. It’s true that temporarily storing carbon reduces the cumulative amount of energy trapped by the Earth’s atmosphere, but that does not make it identical to either avoiding emissions in the first place or permanently storing CO₂ — both of which produce benefits that are strictly greater than those achieved by temporary carbon storage.

Third, the equivalence claims made by some ton-year methods don’t add up. Specifically, it is our opinion that the claims made by the Moura Costa method are not physically credible and that the method should not be used to establish climate-equivalence claims or issue carbon offsets. We are also concerned about the application of discount rates within ton-year accounting, which invalidates claims of physical climate equivalence and can obscure the atmospheric consequences of temporary carbon storage.

Moving forward, it is critical to develop a clear and consistent framework for articulating the value of temporary storage. We’re especially excited to see new efforts to integrate the value of temporary storage into conversations about the social cost of carbon, an approach that explicitly links the value of temporary-ness to robust conversations about quantifying and discounting future climate harms.<Cite id='groom.2021'/> Temporary storage has a non-zero value, but it’s important to be open and transparent about both the risks and benefits that come when valuing temporary storage — both of which may vary depending on the relative value society places on different kinds of climate impacts. More work is needed to establish a coherent framework for valuing temporary storage.

Finally, we’ve implemented the [ton-year accounting methods](https://github.com/carbonplan/ton-year) described in this explainer in a Python package that you can find on GitHub alongside examples of how to use it. We hope this is helpful for building intuition and unpacking ton-year claims. Please reach out with questions, iterate on the package, and share what you discover!

<Endnote label='Credits' divider>
Freya performed the research and led the development of the underlying ton-year code with help from Grayson. Freya, Grayson, and Danny contributed to interpreting the results and writing the explainer. Kata and Jeremy developed the graphics, with Kata leading the development of the interactive figures. Joe supported work on the ton-year code.

Please cite as:

F Chay, G Badgley, K Martin, J Freeman, J Hamman, D Cullenward (2022) “'Unpacking ton-year accounting” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/ton-year-explainer](https://carbonplan.org/research/ton-year-explainer)</span>

</Endnote>

<Endnote label='Terms'>
CarbonPlan received no specific financial support for this work. No one except the authors of the paper exercised control over the research process or products. The authors are solely responsible for the content of this writeup, which does not reflect the views of any other individuals or organizations.

Article text and figures made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/). Implementation of interactive visualizations made available under an [MIT license](https://github.com/carbonplan/research/blob/main/LICENSE). Open source [package for ton-year accounting methods](https://github.com/carbonplan/ton-year) made available under an [MIT license](https://github.com/carbonplan/ton-year/blob/main/licenses/LICENSE).

</Endnote>
