---
version: 1.0.0
title: Crediting challenges when carbon removal comes with avoided emissions
authors:
  - Tyler Kukla
  - Shane Loeffler
  - Kata Martin
  - Freya Chay
date: 11-13-2024
summary: Some carbon removal projects also result in avoided emissions. This is good for the climate, but can pose challenges for individual projects that are trying to earn carbon removal credits.
quickLook: Some carbon removal projects also result in avoided emissions. This is good for the climate, but can pose challenges for individual projects that are trying to earn carbon removal credits.
color: grey
card: cdr-counterfactual-accounting
background: articles/029/cairn
icon: articles/029/cairn-small
links:
  - label: Supplemental methods
    href: /research/cdr-counterfactual-accounting-methods
components:
  - name: AccountingGraph
    src: ./components/accounting-graph.js
---

It’s possible — and increasingly popular — to achieve carbon removal (CDR) by tweaking an existing process rather than creating a new one. From modifying the use of alkalinity to treat wastewater, to switching what kinds of rocks farmers use to raise the pH of their soils, these projects are now common enough that we’ve started referring to them as CDR “optimization projects.” Optimization projects are exciting because they could help clean up emissions-intensive systems and remove carbon from the atmosphere without requiring a lot of new physical investments. They’re the definition of low-hanging fruit. But supporting them via carbon removal credits requires dealing with some tricky carbon accounting questions.

Optimization projects are meant to remove carbon, but often also end up avoiding emissions associated with the processes they tweak. To issue carbon removal credits, it is therefore necessary to distinguish between the removal and avoided emissions benefits. But there are different ways to separate the benefits, and seemingly small changes to the accounting rules can produce markedly different crediting outcomes.

The rules that are used to credit optimization projects today are often too vague to evaluate whether or not the credits conflate carbon removal and avoided emissions. This ambiguity sets a concerning precedent given the expectation that carbon removal and avoided emissions credits are distinct benefits. To build a credible market for carbon removal credits, these protocols will have to change, establishing clear and precise rules to differentiate removals.

But these issues also highlight the fact that carbon removal credits might not be the best way to finance all optimization projects. Crediting removals offers little incentive to reduce existing process emissions. Moreover, as we’ll show, taking a careful approach to crediting removals can actually penalize optimization projects in cases where separating out the avoided emissions is hard. Optimization projects can bring some easy climate wins that we shouldn’t ignore. But we also shouldn’t bend the definition of carbon removal to make them work. Instead, we should start thinking about other ways to support these projects that don’t require the line between removals and avoided emissions to be so rigidly defined.

## Avoided emissions can hide in carbon removal credits

Emissions reduction represents the bulk of the work needed to slow climate change, but carbon removal will likely be needed to stop climate change or reverse it. Following this logic, the carbon market has coalesced around differentiating credits that represent carbon removal from those representing avoided emissions.<Sidenote>See, for example, the [Oxford Principles for Net Zero Aligned Carbon Offsetting](https://www.smithschool.ox.ac.uk/sites/default/files/2024-02/Oxford-Principles-for-Net-Zero-Aligned-Carbon-Offsetting-revised-2024.pdf) and [SBTi’s Corporate Net-Zero Standard](https://sciencebasedtargets.org/resources/files/Net-Zero-Standard.pdf).</Sidenote> This distinction has also become a focus of broader CDR policy conversations, with growing advocacy around establishing separate policy targets for emission reductions and carbon removals.<Sidenote>In January 2024, over 100 academics, research institutes, NGOs, and companies signed an [open letter](https://carbonmarketwatch.org/wp-content/uploads/2024/01/High-Level-Letter-w_-Logos-signatories-rev.-15_02.pdf) calling for the adoption of separate targets for carbon removal and emission reduction. CarbonPlan was a signatory.</Sidenote>

To quantify the climate benefit of a CDR optimization project, it must be compared to the counterfactual — what would have happened if the CDR project did not exist. But the counterfactual, like the project itself, can include both carbon removals and emissions. Because of this complexity, some accounting approaches comparing the project and counterfactual can end up hiding avoided emission benefits within credits that are labeled as carbon removal.

We’re going to use enhanced rock weathering (ERW) as a case study to illustrate how accounting rules might inadvertently conflate avoided emission and carbon removals. ERW uses crushed rock to accelerate natural chemical reactions that remove CO₂ from the atmosphere. Many farmers already spread crushed rock on their fields, usually limestone, to raise soil pH. ERW attempts to optimize this existing agricultural process by changing the quantity or type of rock applied. The fact that “liming” is already widespread is often seen as an advantage of ERW — we already know how to spread crushed rock and we have the infrastructure to do it.<Cite ids={['beerling.2018','davis.2024', 'dietzen.2018']} />

Figure 1 shows a simplified example of an ERW project where traditional liming has been optimized for CDR. In this hypothetical scenario, the traditional liming practice applied 15 tons of rock, whereas the CDR project now applies 20 tons of rock. We assume that traditional liming was climate neutral; the CO₂ removal from rock weathering perfectly balanced out the emissions from sourcing and spreading the rock (gray bars).<Sidenote>Note that most liming is done with calcite limestone (CaCO₃) which, when it dissolves, may remove carbon from the atmosphere or emit the carbon previously contained in the rock depending on soil conditions.</Sidenote> In contrast, the CDR project removes twice as much carbon than it emits (purple bars). Compared to the traditional liming practice, it achieves more removal with fewer emissions.<Sidenote>Our example assumes we know the counterfactual carbon fluxes and can confidently estimate carbon removal from rock weathering. Both of these are [challenging](https://carbonplan.org/research/enhanced-weathering-fluxes) quantification tasks for enhanced weathering projects.</Sidenote>

<Figure>
  <AccountingGraph
    approach={1}
    showNet={false}
    inputs={{
      alkalinityCounterfactual: 15,
      alkalinityProject: 20,
      emissionsFactorCounterfactual: 1,
      emissionsFactorProject: 0.5,
      removalFactorCounterfactual: 1,
      removalFactorProject: 1,
      rockTonsProject: 20,
      rockTonsCounterfactual: 15,
    }}
  />
  <FigureCaption number={1}>
    Emissions and removals for the hypothetical prior liming practice (gray) and
    CDR project (purple) scenarios. The CDR project applies 20 tons of rock and
    the prior liming practice applies 15. Project emissions come from activities
    like sourcing, crushing, transporting, and spreading the rock, and removals
    occur as the rock weathers.
  </FigureCaption>
</Figure>

In this scenario, how much additional carbon removal has the CDR project achieved? It seems clear that the question requires comparing the project scenario to the traditional liming scenario. But surprisingly, the answer changes based on the details of how the comparison is made. Below, we illustrate four potential approaches that lead to four different answers about how much net CDR has been achieved. The answers range from 10 tCO₂ removed to 5 tCO₂ emitted. For a more detailed explanation of the four approaches and the ability to test them on different project and counterfactual scenarios, see our [supplemental methods](https://carbonplan.org/research/cdr-counterfactual-accounting-methods).

### Approach 1: Simple subtraction

The simplest approach is to compare the net carbon removal achieved by the CDR project to the net carbon removal achieved by the traditional liming. Although this sounds like a reasonable method to identify additional carbon removal, it offers no way to distinguish between avoided emissions and carbon removals. In our example, traditional liming resulted in zero tons of net carbon removal while the CDR project results in 10 tons of net removals. The simple subtraction approach would therefore credit the CDR project for 10 tons of removal (Figure 2, green bar). But under the hood, over half of those credits would represent avoided emissions (Figure 2, hatched green bar). Counting them would lead to over-crediting the carbon removal.

<Figure>
  <AccountingGraph
    approach={1}
    inputs={{
      alkalinityCounterfactual: 15,
      alkalinityProject: 20,
      emissionsFactorCounterfactual: 1,
      emissionsFactorProject: 0.5,
      removalFactorCounterfactual: 1,
      removalFactorProject: 1,
      rockTonsProject: 20,
      rockTonsCounterfactual: 15,
    }}
  />
  <FigureCaption number={2}>
    Net CDR using the simple subtraction approach. Gray and purple bars denote
    carbon fluxes for the traditional liming and CDR project cases,
    respectively. The green bar shows the total amount of removals that this
    accounting approach gives the project credit for. The hatched portion of the
    green bar represents credited removals owed to avoiding counterfactual
    emissions. While avoided emissions obviously account for half of the total
    in green, there are other avoided emissions that are less obvious and still
    have to be accounted for in crediting.
  </FigureCaption>
</Figure>

### Approach 2: Ignore obvious avoided emissions

In the second approach, the CDR project can ignore emissions that would have occurred in the traditional liming scenario, but it doesn’t get credit for the obvious avoided liming emissions that exceed the total project emissions. In our example, traditional liming emits 5 more tons than the CDR project. Even though those emissions are avoided in the project scenario, the project can’t claim removal credits for them (Figure 3).

<Figure>
  <AccountingGraph
    approach={2}
    inputs={{
      alkalinityCounterfactual: 15,
      alkalinityProject: 20,
      emissionsFactorCounterfactual: 1,
      emissionsFactorProject: 0.5,
      removalFactorCounterfactual: 1,
      removalFactorProject: 1,
      rockTonsProject: 20,
      rockTonsCounterfactual: 15,
    }}
  />
  <FigureCaption number={3}>
    As Figure 2, but for Approach 2 — ignore obvious avoided emissions. The
    shaded component of the gray emissions bar indicates the part of the total
    activity that is ignored in the carbon accounting.
  </FigureCaption>
</Figure>

Unfortunately, this approach can still end up over-crediting the removal by counting some of the avoided emissions. To illustrate, recall that the CDR project applies 20 tons of rock while the traditional liming practice applies 15 tons of rock. By weight, we can think about the project as replacing the 15 tons from liming that would have happened anyway, while also adding 5 extra tons of rock on top.<Sidenote>We are making the simplifying assumption here that in both the liming scenario and the project scenario, 1 ton of rock results in 1 ton of removal. This removal efficiency is high and, in practice, will vary based on rock types and application rates.</Sidenote> But, despite using that extra 5 tons, the CDR project emits less carbon overall. Using Approach 2, that means the project has no emissions burden — the project emissions minus the traditional liming emissions equals zero (Figure 3). Even though the extra 5 tons don’t replace the traditional liming practice, their emissions are “offset” by the avoided liming emissions and that increases the net CDR claimed.

### Approach 3: Separate the replacement portion of the project

If we could differentiate between the “replacement” rock and the “extra” rock, then we could reliably separate out the avoided liming emissions. The third approach does this by comparing only the replacement rock (not the extra rock) against the traditional liming practice. If the replacement rock’s emissions are lower than the traditional liming emissions, the replacement emissions are ignored. In our hypothetical, the project emits 7.5 tons of CO₂ to replace the amount of rock used in the traditional liming practice. The traditional liming emissions offset those 7.5 tons, but they don’t offset the 2.5 tons of emissions required to source the extra 5 tons of rock. This means that whether you add 5 tons of rock or improve the efficiency of the baseline process _and_ add 5 tons of rock, you get the same net CDR result. In our example, this approach would credit the project for 2.5 tons of carbon removal (Figure 4). Unfortunately, there are major practical limitations to this approach.

<Figure>
  <AccountingGraph
    approach={4}
    inputs={{
      alkalinityCounterfactual: 15,
      alkalinityProject: 20,
      emissionsFactorCounterfactual: 1,
      emissionsFactorProject: 0.5,
      removalFactorCounterfactual: 1,
      removalFactorProject: 1,
      rockTonsProject: 20,
      rockTonsCounterfactual: 15,
    }}
  />
  <FigureCaption number={4}>
    As Figures 2 and 3, but for Approach 3 — separate the replacement portion of
    the project. The CDR project emits 7.5 tons to replace the traditional
    liming practice, so those emissions are balanced by the avoided liming
    emissions. The extra 2.5 tons of project emissions are tied to the “extra”
    rock, so those are not compared to the prior liming activity.
  </FigureCaption>
</Figure>

It can be surprisingly hard to define which part of an optimization project is “replacing” the traditional practice. We assumed the project rock replaces the traditional liming practice by weight (15 tons for 15 tons), but this is usually a bad assumption. The same mass of two rock types can have very different effects on soil pH, soil mineralogy, and carbon removal. Even if the effects are similar by weight, they can dissolve at different rates and lead to different outcomes over time. Swapping one rock for another is usually an apples-to-oranges comparison — it can be hard to define what “replacing” the prior rock even means. In the absence of a clear answer, these complicated dynamics may render Approach 3 impractical.

### Approach 4: Conservative

This leads us to the fourth approach, which reliably separates avoided emissions from removal credits without the practical challenges of Approach 3 — but it comes at a cost. Unlike the other approaches, this approach requires the CDR project to account for _all_ of its associated emissions, whether they replace an existing process or not. The CDR project must deduct the removals from the traditional liming practice, but it cannot deduct any emissions. This “double-whammy” makes it harder for optimization projects to earn removal credits. In our example, even though the CDR project emits less carbon and removes more than traditional liming would have, the conservative approach casts it as net emitting (Figure 5, green bar).

<Figure>
  <AccountingGraph
    approach={3}
    inputs={{
      alkalinityCounterfactual: 15,
      alkalinityProject: 20,
      emissionsFactorCounterfactual: 1,
      emissionsFactorProject: 0.5,
      removalFactorCounterfactual: 1,
      removalFactorProject: 1,
      rockTonsProject: 20,
      rockTonsCounterfactual: 15,
    }}
  />
  <FigureCaption number={5}>
    As Figure 2-4, but for Approach 4 — conservative. The prior liming emissions
    cannot be used to balance any CDR project emissions. As a result, the
    project is net emitting and no carbon removal credits are earned (green
    bar).
  </FigureCaption>
</Figure>

In practice, this means that using the conservative approach could actively disincentivize optimization projects. It doesn’t make sense to modify the baseline activity if it raises your emissions burden and you don’t get any credit for improving the status quo. In that case, a company may be better off allowing the baseline activity to continue, no matter how emissions-intensive it is, and just add extra rock on top of it.

## Takeaways

So long as credits are being sold as carbon removal, it’s important to maintain a clear distinction between CDR and avoided emissions. This means Approaches 1 and 2 don’t work for CDR crediting because they can embed avoided emissions. Approach 3 can work, but only if there is a clear way to define the part of the project which replaces the counterfactual activity. Otherwise, the only option is Approach 4, which could severely limit the range of optimization projects that are viable via carbon removal credit sales.

Of current ERW protocols (Table 1), only Isometric’s clearly addresses this counterfactual accounting problem, and it uses the conservative approach. The counterfactual accounting rules in the other protocols are too vague to interpret. Neither Puro’s nor Carbon Standard International’s protocols offer explicit guidance on how to handle counterfactual rock application. Puro’s protocol generally acknowledges that the counterfactual scenario should be considered, but does not specify how.

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
      [
        <Box
          as='span'
          key='registry'
          sx={{
            fontFamily: 'heading',
            letterSpacing: 'smallcaps',
            textTransform: 'uppercase',
          }}
        >
          Registry
        </Box>,
        <Box
          as='span'
          key='protocol'
          sx={{
            fontFamily: 'heading',
            letterSpacing: 'smallcaps',
            textTransform: 'uppercase',
          }}
        >
          Protocol
        </Box>,
        <Box
          as='span'
          key='accounting'
          sx={{
            fontFamily: 'heading',
            letterSpacing: 'smallcaps',
            textTransform: 'uppercase',
          }}
        >
          Accounting approach
        </Box>,
      ],
      [
        'Isometric',
        <span>
          Enhanced Rock Weathering in Agriculture (
          <Link href='https://registry.isometric.com/protocol/enhanced-weathering-agriculture'>
            v1.0
          </Link>
          )
        </span>,
        'Conservative',
      ],
      [
        'Puro',
        <span>
          Enhanced Rock Weathering Methodology (2022 edition,{' '}
          <Link href='https://7518557.fs1.hubspotusercontent-na1.net/hubfs/7518557/Supplier%20Documents/ERW%20methodology.pdf'>
            v.1
          </Link>
          ; <Link href='https://7518557.fs1.hubspotusercontent-na1.net/hubfs/7518557/ERW%20Standards/Enhanced_Rock_Weathering_2022_2.pdf'>
            v.2
          </Link>)
        </span>,
        'Unclear; no method specified for weighing counterfactual against project',
      ],
      [
        'Carbon Standards International',
        <span>
          Enhanced Rock Weathering in Croplands (
          <Link href='https://www.carbon-standards.com/docs/transfer/4000033EN.pdf'>
            v0.9
          </Link>
          )
        </span>,
        'No counterfactual consideration',
      ],
    ]}
  />
  <TableCaption number={1}>
    Accounting approaches used for three enhanced rock weathering protocols.
    Only one, Isometric, provides clear guidance for treating the counterfactual
    removal scenario.
  </TableCaption>
</Figure>

Although we’ve focused on the example of liming optimization in enhanced rock weathering, other optimization projects will face similar dynamics. As protocols for optimization projects are developed and refined, we encourage registries to write clear and precise rules for counterfactual accounting — formalized in text and equations — that demonstrably separate avoided emissions from removals.

These changes would clarify the rules and ensure a removal credited means a removal truly made, but this still does not result in a system that strongly supports CDR optimization projects. The strict and complicated rules necessary to separate avoided emissions from removals can end up excluding projects that, in reality, are good for the climate.

We could support optimization projects by treating their avoided emissions as a co-benefit so the removal can be credited at a premium. But that doesn’t solve the whole problem. If a project can’t achieve net removal under the conservative approach (Approach 4), for example, the extra financing won’t make a difference. A better funding mechanism for projects like these might be one that doesn’t require such precision around the quantity and type of climate outcomes. Moving forward, we’re excited to think more about regulatory and sector-specific incentives that intersect with CDR activities, and the ways they could push CDR efforts toward the best overall climate outcomes.

<Endnote label='Credits' divider>

Tyler wrote the first draft of the article. Tyler and Freya derived the accounting equations. Freya helped write and edit the article. Shane designed the figures with input from Tyler, Kata, and Freya, and Shane built the figures and the interactive tool in the supplemental methods.

Please cite as:

T Kukla et al. (2024) “Crediting challenges when carbon removal comes with avoided emissions.” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/cdr-counterfactual-accounting](https://carbonplan.org/research/cdr-counterfactual-accounting)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan’s work on this explainer was supported by [grants](https://carbonplan.org/funding) from Adam and Abigail Winkel and the Grantham Foundation. The authors are solely responsible for the content of this article, which does not reflect the views of any other individuals or organizations.

The article text and figures are made available under a [CC BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

</Endnote>
