---
id: carbon-removal-mechanisms
version: 1.0.0
color: grey
title: Carbon removal mechanisms
authors:
  - Toly Rinberg
  - Danny Cullenward
  - Joseph Hamman
  - Jeremy Freeman
date: 07-24-2020
card: carbon-removal-mechanisms
background: articles/003/pipes
quickLook: How different carbon removal projects interact with the global carbon cycle
summary: Carbon removal is confusing because there are many approaches, and all affect the carbon cycle in different ways. In this article we develop and explain a typology for comparing approaches.
icon: articles/003/pipes-small
components:
  - name: Cycle
    src: ./components/cycle.js
---

Carbon removal is an exciting field because there are so many methods.

Methods are often categorized by technology or sector — such as forests, soil, or direct air capture, as we do with category tags in our [project reports](https://carbonplan.org/reports).

But simple labels obscure biogeophysical reality. Funding and policy decisions require a full analysis of the comparative benefits, which in turn requires an understanding of how projects affect the global carbon cycle.

This post develops key concepts and diagrams for comparing the mechanisms underlying projects. Critically, we distinguish two kinds of climate benefits — “carbon removal” and “avoided emissions.” The distinction is trickier than it seems: some projects deliver one type of benefit exclusively; some accomplish one now, but could perform the other in the future; and others offer a combination.

Sorting out the details matters. The differences between carbon removal and avoided emissions have important implications for climate strategy, yet they are frequently conflated. Clearer distinctions help align carbon removal goals with specific theories of change, including near-term funding for technologies with future carbon removal potential.

We hope this article helps bring clarity to the carbon removal conversation.

## The background carbon cycle

Carbon removal must be considered in the context of the [global carbon cycle](https://www.globalcarbonproject.org/) — the exchange of carbon, in various chemical states, between the land, ocean, atmosphere, and geosphere. Each reservoir has a “stock” of carbon stored, and carbon “fluxes” between reservoirs, with billions of tons of carbon (GtC) moving through the system every year.

Increased carbon in the atmosphere causes warming at the Earth’s surface. Since the 1750s, atmospheric carbon has increased by roughly 30% (from ~590 to ~870 GtC), with human emissions (~10 GtC/year) now constituting about 5% of the total atmosphere/ocean and atmosphere/land fluxes combined.<Cite ids={['friedlingstein.2019', 'ciais.2013']}/> (These numbers ignore the important, but smaller, role of changes in other greenhouse gas concentrations and emissions.) The efficacy and impact of any carbon removal effort depends on its relative scale and how it interfaces with the background cycle.

To help the reader develop intuition about carbon removal, we use “intervention diagrams” to succinctly illustrate the impact of specific projects. A blank diagram looks like this:

<Figure>
  <Cycle
    intro={true}
    labels={true}
    tag={'mineralization'}
    data={{ stock: {}, flux: [] }}
  />
</Figure>

For any given project, we use colors to highlight which stocks are involved and which fluxes are enhanced or blocked. We dim the others.

These diagrams are meant to illustrate key concepts, but they deliberately over-simplify the underlying science. They do not depict the sizes of either stocks or fluxes. They only show the intervention at a fixed moment in time, obscuring the fact that any intervention causes feedbacks that dynamically affect other stocks and fluxes due to the interconnected nature of the carbon cycle.<Cite id='keller.2018'/> Nevertheless, they offer a simple way to distinguish different carbon removal mechanisms.

With this diagram in hand, let’s build our intuition by first stepping through examples involving engineered systems.

## Engineered systems

Consider the process of storing carbon dioxide in mineral form via injection into basaltic rock, which results in effectively permanent CO₂ storage. Using our diagram, we show geologic storage by filling in the appropriate circle indicating where carbon is ultimately stored.

<Figure>
  <Cycle
    labels={true}
    tag={'mineralization'}
    data={{ stock: { geological: true }, flux: [] }}
  />
</Figure>

Does geologic injection lead to carbon removal? The answer depends on where the CO₂ came from.

Let’s imagine the CO₂ is waste from some industrial process that burns a carbon-based fossil fuel. Injecting the captured CO₂ from a fossil energy waste stream into geologic storage permanently stores CO₂, but has not taken it out of the atmosphere because the source of the carbon was a fossil fuel and was destined for the atmosphere if not captured first. As a result of the project’s decision to capture and store carbon, CO₂ emissions that might have otherwise occurred are avoided instead. We call this outcome “avoided emissions” and distinguish it from “carbon removal.” We diagram it with a crossed out circle blocking the arrow from fuels to the atmosphere, and drawing a horizontal arrow from fuels to geologic storage.

<Figure>
  <Cycle
    labels={true}
    tag={'mineralization'}
    data={{
      stock: { fuel: true, geological: true },
      flux: [
        { from: 'fuel', to: 'atmosphere', type: 'avoided' },
        { from: 'fuel', to: 'geological', type: 'enhanced' },
      ],
    }}
  />
</Figure>

Now consider an alternative source of CO₂: the atmosphere. Suppose a project captures CO₂ from the atmosphere using direct air capture technology, and then injects pure CO₂ into the ground. This project performs carbon removal because it reduces atmospheric CO₂ and stores it in another stock. We draw this scenario by highlighting an arrow straight from the atmosphere to geologic storage. Compared to the previous example, the end location of storage remains the same, but the source of the CO₂ — and thus the source of the flux — has changed. (As drawn, this scenario assumes that direct air capture is powered by zero-carbon energy; otherwise, we would also include an arrow from fuels to the atmosphere to reflect the fact that the project leads to both atmospheric emissions and carbon removal.)

<Figure>
  <Cycle
    labels={true}
    tag={'dac'}
    data={{
      stock: { geological: true, land: false, ocean: false, material: false },
      flux: [{ from: 'atmosphere', to: 'geological', type: 'enhanced' }],
    }}
  />
</Figure>

We distinguish these two scenarios because precision is necessary for accurate characterization and decision-making, not because one is necessarily better or worse for the climate. Either can be good or bad, depending on the context.

For example, when evaluating a carbon removal project, we must consider all of the emissions associated with the lifecycle of the process. If the direct air capture is powered by carbon-intensive energy, then despite performing net carbon removal, it will likely be ineffective at scale.

Similarly, if the captured CO₂ is used to create a synthetic fuel or to extract further fossil fuels through a process called “enhanced oil recovery,” then the overall process might accomplish little to no net carbon removal. In some circumstances, it could even emit more than it removes while continuing to enable fossil fuel production. We would diagram such a project as follows.

<Figure>
  <Cycle
    labels={true}
    tag={'dac'}
    data={{
      stock: { fuel: true },
      flux: [
        { from: 'atmosphere', to: 'fuel', type: 'enhanced' },
        { from: 'fuel', to: 'atmosphere', type: 'enhanced' },
      ],
    }}
  />
</Figure>

As this diagram suggests, a project’s efficacy depends on the scale of gross carbon removal (down arrow) relative to the scale of gross project emissions (up arrow). In our [project reports](https://carbonplan.org/reports) we use a summary metric called “Negativity” to capture this important aspect of projects’ lifecycle emissions. If a project performs carbon removal, but its Negativity is near 0, then it’s not an effective way of delivering climate benefits.

Avoiding emissions can also be good, or bad, for the climate. Permanently storing what otherwise would have been an atmospheric CO₂ emission avoids an increase in atmospheric CO₂. However, the impact of the intervention often depends on the counterfactual scenario — would the emission have happened without our action? — which can only ever be estimated, not observed.

Estimating counterfactuals with confidence is often more difficult for avoided emissions than for carbon removal. If a project claims to avoid emissions that weren’t going to happen anyway — and especially if someone else gets credit to continue to emit more emissions in exchange, as is the case with carbon offset programs — then a low-quality avoided emissions project can do more damage to the climate than doing nothing at all.<Cite id='haya.2020'/>

As these examples help illustrate, differentiating carbon removal from avoided emissions requires thinking about the source of the carbon and how projects redirect fluxes to different stocks.

## Biological systems

Let’s work through examples involving biological systems. These can be more complex than the engineered systems described above because CO₂ in biological systems is constantly in flux and often harder to measure. As a result, humans have less direct control over outcomes, and need to consider a wider range of risks. The intuition we’ve developed above can help reduce those challenges.

Consider a tree and its role in the carbon cycle. The tree uses photosynthesis to convert light energy into chemical energy, which it uses to convert CO₂ into compounds that make up the plant’s tissue. (For the purposes of the carbon cycle, scientists call a plant’s tissue its biomass. About 50% of the above-ground biomass of a tree is carbon from the atmosphere.<Cite id='martin.2018'/>)

Viewed in isolation, a tree performs carbon removal, at least for the period of its life when it is growing and therefore sequestering net CO₂ from the atmosphere into its tissues. How much? The rate depends on factors like the age and species of the tree and properties of the surrounding ecosystem, with carbon removal generally accelerating early in the growth of a tree and then eventually reaching saturation — the point at which CO₂ emissions from the decay of organic material like leaves balances the CO₂ removal from photosynthesis, and no further carbon removal occurs. During the growth and maturation of a tree — or of a forest with many trees — a cumulative quantity of carbon fluxes from the atmosphere into the biosphere.

In our diagram, we show the simple case of a growing forest with a circle representing the storage of carbon in the land, and an arrow representing a flux of CO₂ from the atmosphere into the land.

<Figure>
  <Cycle
    labels={true}
    tag={'forests'}
    data={{
      stock: { geological: false, land: true, ocean: false, material: false },
      flux: [{ from: 'atmosphere', to: 'land', type: 'enhanced' }],
    }}
  />
</Figure>

The accounting becomes more complex for projects that change existing ecological systems.

Reforestation, for example, refers to the planting of trees in locations that were forested in the past. (You might also hear the phrase “afforestation,” which refers to planting vegetation – typically monoculture forest plantations – in areas that have not previously been forested. Ecologists rightly question the feasibility or utility of large-scale afforestation.<Cite id='lewis.2019'/>)

From a carbon cycle perspective, reforestation will result in new tree growth. We can think of it as carbon removal, at least for as long as the trees continue to accumulate biomass. The diagram is the same as above.

But what if someone agrees to not cut down a forest they were otherwise planning to harvest? This scenario arises frequently in carbon offset programs that seek to compensate landowners for the climate benefits of their forests. Maybe the landowner pursues “avoided conversion” by preserving a forest indefinitely through a conservation easement. Or perhaps they agree to delay a timber harvest for a few years under an “improved forest management” practice that increases the quantity of carbon stored on the land relative to business-as-usual conditions. Are such practices carbon removal or avoided emissions? Turns out, both!

These projects avoid emissions because cutting down the trees would have caused emissions in two ways — first, the industrial processes of harvesting cause emissions on their own, and second, the dead biomass leftover would decompose and emit CO₂. But they are also carbon removal because the trees left standing will continue to capture carbon from the atmosphere, with the total amount depending on their age and growth relative to saturation. We can show this in our diagram by combining the two arrows.

<Figure>
  <Cycle
    labels={true}
    tag={'forests'}
    data={{
      stock: { geological: false, land: true, ocean: false, material: false },
      flux: [
        { from: 'atmosphere', to: 'land', type: 'enhanced' },
        { from: 'land', to: 'atmosphere', type: 'avoided' },
      ],
    }}
  />
</Figure>

These projects address the same stock as before, but the intervention affects the flux both to and from the atmosphere. As this example illustrates, understanding a project’s net impact always depends on what would have happened in the absence of the intervention.

## Biomass and materials

Another example — and a frequently confusing one — is the conversion of biomass into derived materials that decompose more slowly and are thus more durable than the source biomass. Examples include producing durable laminated wood products,<Cite id='hepburn.2019'/> or using pyrolysis to convert biomass into bio-oil (fast pyrolysis)<Cite id='schmidt.2018'/> or biochar (slow pyrolysis).<Cite id='campbell.2018'/>

These conversions can be considered either avoided emissions or carbon removal depending on the context in which we consider the project — known as the “boundary conditions” in the field of lifecycle analysis.

From a narrow perspective, decomposition of biomass exposed to the atmosphere results in emissions, so converting it into a more durable form avoids (or at least delays) some of those emissions. In other words, a relatively fast source of emissions is replaced with a much slower one, with the difference constituting the project’s avoided emissions (see Campbell et al., 2018 and our [Jupyter notebook](https://github.com/carbonplan/notebooks/tree/master/biochar) for a model that accounts for these dynamics in the case of biochar).

In our diagram, we include a special storage location for such durable “materials” and we indicate a flux from land biomass into this more permanent stock. We do not, however, indicate a flux from the atmosphere into the biomass because these projects are solely responsible for the conversion, not the biomass production. Rather, we indicate an avoided emission from the land back into the atmosphere.

<Figure>
  <Cycle
    labels={true}
    tag={'biomass'}
    data={{
      stock: { geological: false, land: true, ocean: false, material: true },
      flux: [
        { from: 'land', to: 'material', type: 'enhanced' },
        { from: 'land', to: 'atmosphere', type: 'avoided' },
      ],
    }}
  />
</Figure>

In some cases, one could reasonably argue that the broader system, including both biomass production and conversion into biochar, performs carbon removal. In this broader system, carbon fluxes from the atmosphere into land biomass; some remains as biomass; and some is stored for a long duration as biochar. Strictly from a carbon cycle perspective, it’s rather similar to the combination of direct air capture and geological sequestration described above. We could diagram that more complete system as follows.

<Figure>
  <Cycle
    labels={true}
    tag={'biomass'}
    data={{
      stock: { geological: false, land: true, ocean: false, material: true },
      flux: [
        { from: 'land', to: 'material', type: 'enhanced' },
        { from: 'atmosphere', to: 'land', type: 'enhanced' },
      ],
    }}
  />
</Figure>

But how should we label any individual project? Ultimately, it’s a judgement call. Where the situation is ambiguous, we prefer to define the system boundaries based on the project itself, rather than the abstract technology or method, because funding and decision making occur at the level of these projects. If a project manages an end-to-end system that produces biomass and converts it to biochar, then we would say the project performs carbon removal. If instead a project procures biomass from elsewhere and makes biochar, then we would say the project avoids emissions.

## Adding complexity

Another example shows how these core concepts help us navigate increasingly complex projects.

Consider the case of creating bio-oil from sawdust and then injecting that bio-oil into geologic formations for permanent storage. While similar to the biochar example, this case involves an extra step. There are three different ways to think about this project, depending on where we draw the boundaries and how we contextualize the project in the surrounding system.

First, we consider the narrowest boundary condition. For this scenario, we assume that the bio-oil has already been produced and that without the project, the bio-oil would be burned to produce CO₂ emissions. In this case, the project is avoiding emissions by geologically sequestering the bio-oil instead.

<Figure>
  <Cycle
    labels={true}
    tag={'biomass'}
    data={{
      stock: { geological: true, material: true },
      flux: [
        { from: 'material', to: 'geological', type: 'enhanced' },
        { from: 'material', to: 'atmosphere', type: 'avoided' },
      ],
    }}
  />
</Figure>

Second, we could broaden the boundary to start with the sawdust. If we assume that without the project the sawdust would decompose and produce CO₂ emissions, then the project is again avoiding emissions, in this case by processing the sawdust into bio-oil and geologically sequestering it.

<Figure>
  <Cycle
    labels={true}
    tag={'biomass'}
    data={{
      stock: { geological: true, land: true, material: true },
      flux: [
        { from: 'land', to: 'material', type: 'enhanced' },
        { from: 'material', to: 'geological', type: 'enhanced' },
        { from: 'land', to: 'atmosphere', type: 'avoided' },
      ],
    }}
  />
</Figure>

Third, we might consider an even broader boundary that begins with the biomass production itself. Here, we assume that without the project the biomass would not have been grown. In that case, the project performs carbon removal by growing biomass, converting it into bio-oil, and geologically sequestering it.

<Figure>
  <Cycle
    labels={true}
    tag={'biomass'}
    data={{
      stock: { geological: true, material: true, land: true },
      flux: [
        { from: 'material', to: 'geological', type: 'enhanced' },
        { from: 'land', to: 'material', type: 'enhanced' },
        { from: 'atmosphere', to: 'land', type: 'enhanced' },
      ],
    }}
  />
</Figure>

As these alternative perspectives illustrate, the same basic project type can act as carbon removal or as two different variants of avoided emissions, depending on the boundary conditions we draw and the role of the project we consider within that boundary.

## Putting the concepts to work

Considering the full carbon cycle impacts of a project is a complex task, and many questions remain — especially around what these distinctions mean for those purchasing or investing in carbon removal. We’ll give two examples of how the carbon cycle concepts developed here matter to real-world decisions.

First, if we’re considering avoided emissions among carbon removal projects, where should we as a community draw the line?

<PullQuote>
  A clear typology is needed to categorize and contextualize projects in the
  broader field of climate mitigation
</PullQuote>

There is no objectively correct answer about where to focus energy and resources, but we believe that a clear typology is needed to categorize and contextualize projects in the broader field of climate mitigation. We at CarbonPlan are particularly interested in approaches that either perform carbon removal today, or that could in principle be part of carbon removal systems if coupled to some other component — such as geologic sequestration coupled to direct air capture, or biochar production coupled to sustainable biomass production. That said, reducing and avoiding emissions are the essential core of climate mitigation strategy, and need to accelerate rapidly in parallel to large-scale deployment of carbon removal.

Second, what does all this mean for a funder or decision-maker?

The answer depends on the goals. If an organization wants to “purchase” carbon removal in a strict, narrow sense — such as to justify carbon neutrality claims premised on achieving a net carbon balance given the organization's emissions — then they should engage only projects that exclusively perform carbon removal today. Precisely because the field is so new, however, few such projects exist! We’ve also seen examples of projects conflating carbon removal and avoided emissions claims, so we advise sponsor organizations to scrutinize and communicate the claims projects make on this important dimension.

Other sponsor organizations may be interested in supporting technologies that have the potential to become components of carbon removal systems, but which do not currently remove atmospheric CO₂ today. This philosophy could be a critical driver to accelerate change in the coming years, but it risks confusion with current carbon removal efforts. We recommend that such sponsor organizations explicitly frame their mission as advancing a particular theory of technological change and/or research investment, so as to clarify their goals and potential strategic risks.

<Endnote label='Credits' divider>

Danny, Jeremy, and Toly developed the concepts and typology. All authors developed the concept for the graphics (with input from Jonny Black of [Ordinary Things](https://ot.studio)). Jeremy implemented the graphics. All authors contributed to writing the article.

Please cite as:

T Rinberg, D Cullenward, J Hamman, J Freeman (2020) “Carbon removal mechanisms” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/carbon-removal-mechanisms](https://carbonplan.org/research/carbon-removal-mechanisms)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan received no specific financial support for this work.

Article text and figures made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

</Endnote>
