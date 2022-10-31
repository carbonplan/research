---
version: 1.0.0
title: California’s draft climate change scoping plan is incomplete
authors:
  - Danny Cullenward
date: 05-17-2022
summary: California’s net-zero climate plan is long on carbon removal, short on details, and based on flawed analysis.
card: scoping-plan-comments
color: yellow
components:
  - name: EmissionsTable
    src: ./components/emissions-table.js
  - name: EmissionsTargets
    src: ./components/emissions-targets.js
  - name: EmissionsPlans
    src: ./components/emissions-plans.js
  - name: DifferenceTable
    src: ./components/difference-table.js
---

Last week the California Air Resources Board (CARB) released its [draft 2022 scoping plan](https://ww2.arb.ca.gov/our-work/programs/ab-32-climate-change-scoping-plan/2022-scoping-plan-documents), a document meant to outline the state's comprehensive strategy for achieving its climate targets.

While past scoping plans have focused on how to meet legally binding emission limits, CARB’s new draft marks a notable shift in emphasis. Instead of refining a strategy to reach a statutory 2030 target, the bulk of the draft plan focuses on a non-binding [executive order](https://www.ca.gov/archive/gov39/wp-content/uploads/2018/09/9.10.18-Executive-Order.pdf) to achieve statewide “carbon neutrality” by 2045 — or what is more commonly known as a [net-zero emissions goal](https://evetamme.com/2022/03/08/carbon-neutrality-to-climate-neutrality/).

There can be great value in planning for long-term climate targets, but the draft scoping plan does California a disservice by focusing on long-term goals at the expense of near-term action. It also risks locking in polluting infrastructure by relying too heavily on carbon dioxide removal (CDR) technologies in place of comparably ambitious emission reductions.

This post aims to provide an initial reaction to CARB’s incomplete net-zero analysis. It covers three issues: (1) the planned reliance on CDR technologies, which lacks an even-handed analysis of ambitious emission reduction alternatives; (2) a large error in land-sector emissions modeling that results in every single proposed scenario failing to reach net-zero emissions; and (3) a significant discrepancy between CARB’s optimistic reference scenario and the state’s own emissions inventory.

Despite the technical nature of these topics, nothing less than the future of California’s climate policy is at stake. CARB staff have published a net-zero plan that, by its own admission, fails to model net-zero emissions. In place of tangible strategies to reduce emissions, the draft plan relies on proprietary modeling of a myopic set of policy options and aims to achieve far fewer emission reductions than other leading climate jurisdictions in the United States are already pursuing. And although the pace of emission reductions needs to more than triple to hit California’s legally binding 2030 target, the plan spends only six pages discussing why CARB believes any concerns about that gap should be addressed in a future cap-and-trade rulemaking.

These conclusions might appear surprising to readers who expect California to lead on climate policy, but beneath the draft plan’s soaring rhetoric the technical details are plain as day. CARB Board Members should take notice of these shortcomings and direct staff to evaluate an alternative scenario that centers emission reductions through 2030 with a much more modest role for CDR technologies by 2045.

## 01 – Over-relying on carbon removal

CARB’s draft scoping plan looks at four scenarios, all of which include significant roles for carbon dioxide removal (CDR) technologies. At the Governor’s [direction](https://www.gov.ca.gov/2021/07/09/governor-newsom-holds-virtual-discussion-with-leading-climate-scientists-on-states-progress-toward-carbon-neutrality/), Alternatives 1 and 2 examine options to reach net-zero emissions by 2035. Alternatives 3 and 4 consider net-zero emissions by 2045. The draft scoping plan identifies Alternative 3 as its preferred course of action.

At CarbonPlan, we support ambitious climate policy that is designed to stabilize global temperatures, including the deployment of high-integrity carbon removal. Nevertheless, planning for potentially unrealistic targets can lead to a disconnect from practical options. Not only do such targets lack a viable implementation strategy, but they can also distract from a more complete analysis of alternatives. Both shortcomings are apparent in the draft scoping plan.

First, a goal of net-zero emissions by 2035 is not particularly realistic — no matter [how much](https://www.latimes.com/opinion/story/2022-05-17/california-air-resources-board-carbon-neutrality-2045-2030) we might want it. CARB’s analysis of two 2035 scenarios adds little to the policy conversation because the state is not on track to reduce its emissions 40 percent by 2030, let alone 100 percent by 2035. Over the last two years, emissions fell by about 4.5 million tCO₂e per year (see Figure 1). That pace would have to more than triple to get on track for 2030 and increase by more than a factor of six to hit a 2035 net zero target. It would take significant efforts that are very obviously not on the table to accelerate climate policy to reach a 2035 net-zero target.

<Figure>
  <EmissionsTargets />
  <FigureCaption number={1}>
    California greenhouse gas emissions and targets. The solid line shows
    statewide emissions through 2019 from California’s official greenhouse gas
    inventory, with provisional estimates from CARB for 2020 and 2021. For over
    a decade emissions have been falling at an average rate of about 4 to 5
    million tCO₂e per year, with a recent average of about 4.5 million tCO₂e per
    year from 2019 to 2021. To reach California’s legally binding 2030 emissions
    limit (about 259 million tCO₂e per year), emissions would have to fall 16.7
    million tCO₂e per year, or about 3.7 times as fast. To reach net-zero
    emissions by 2035, emissions would need to fall about 29.2 million tCO₂e per
    year (net of carbon dioxide removal), or about 6.5 times as fast.{' '}
  </FigureCaption>
</Figure>

Second, CARB’s decision to focus half its attention on 2035 scenarios resulted in an artificially narrow review of alternatives for 2045 scenarios. Table 1 shows that none of the four scenarios in CARB’s draft Scoping Plan aims to reach net zero by 2045 while minimizing reliance on CDR. In the two 2035 scenarios, CDR peaks and declines to lower levels by 2045 as a result of the ambitious emission reductions analyzed in Alternatives 1 and 2. In contrast, both 2045 scenarios assume that CDR will play a much larger long-term role, reaching almost 80 million tCO₂e per year in Alternative 3 and 100 million tCO₂e per year in 2045 in Alternative 4. Emissions are reduced by less than 80 percent in both 2045 scenarios.

<Figure>
  <EmissionsTable
    data={[
      ['Alternative 1', '2035', '21.6', '5.0%', '91.5%'],
      ['Alternative 2', '2035', '59.8', '13.9%', '82.7%'],
      ['Alternative 3 (selected)', '2045', '79.5', '18.5%', '78.1%'],
      ['Alternative 4', '2045', '99.5', '23.1%', '73.4%'],
    ]}
  />
  <TableCaption number={1}>
    Carbon dioxide removal (CDR) needs by scenario (uncorrected). CDR in 2045 is
    reported directly from E3’s modeling
    [spreadsheet](https://ww2.arb.ca.gov/sites/default/files/2022-05/2022-draft-sp-PATHWAYS-data-E3.xlsx),
    without correction for a known error with land-sector modeling. The
    percentage reliance on CDR in 2045 reports the quotient from dividing this
    number by 431 million tCO₂e, the 1990 emissions baseline against which
    California climate targets are expressed. The percentage reliance on
    emission reductions reflects the fact that each scenario is projected to
    result in ongoing net emissions of 15 million tCO₂e per year in 2045, rather
    than net-zero emissions, due to the erroneous treatment of the natural and
    working lands (NWL) sector as described in the next section of this post.
  </TableCaption>
</Figure>

For comparison, California Assemblymember Al Muratsuchi [proposed legislation](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202120220AB1395) last year that would have given CARB the legal authority to pursue a 2045 net zero target, provided that CARB would achieve the target by cutting emissions at least 90 percent — a standard that only Alternative 1 meets. CARB rejects Alternative 1 as a result of the higher costs associated with reaching net-zero emissions a full decade earlier than Alternatives 3 and 4, without reaching the question of whether a comparably limited reliance on CDR and a longer 2045 net-zero time horizon might make more sense.

In the end, CARB does not analyze a scenario that achieves net-zero emissions by 2045 by prioritizing emission reductions alongside a more modest reliance on CDR. As a result, none of the alternative scenarios addresses the kinds of considerations made in earlier legislative proposals in California, nor the actual legal requirements in other leading climate jurisdictions like [Washington](https://apps.leg.wa.gov/rcw/default.aspx?cite=70A.45.020) (which requires emission reductions of at least 95 percent by 2050) or [New York](https://www.nysenate.gov/legislation/laws/ENV/75-0107) (which requires emission reductions of at least 85 percent by 2050).

## 02 – A large modeling error

CARB also made a fundamental modeling error in its treatment of land-sector emissions. In each of the four scenarios in the draft plan, the sum of projected 2045 emissions and carbon removal is 15 million tCO₂e per year because CARB assumed the natural and working lands (NWL) sector will be a carbon sink. In contrast, the actual draft scoping plan indicates that CARB expects the NWL sector to be a net carbon source, resulting in an average of 8 million tCO₂e per year in emissions. As a result of this error, none of the scenarios reaches net-zero emissions. All are off by about 23 million tCO₂e per year.

Some context is in order, as this issue touches on work my colleagues and I have been doing for a few years. Those who follow CarbonPlan’s work know we’ve taken a particular interest in how to think about the permanence of forest carbon storage. For example, we [recently explored options](https://carbonplan.org/research/fire-forests-inventories) for integrating highly variable emissions from the forest sector into California’s greenhouse gas inventory. So I was curious to see how the draft scoping plan, which promised to include forest emissions as well as forest carbon sequestration, would address this topic.

Although advocates have widely promoted forests’ ability to store [large amounts of carbon](https://doi.org/10.1073/pnas.1710465114), [growing threats](https://doi.org/10.1111/ele.14018) to [forest carbon permanence](https://doi.org/10.1126/science.aaz7005) are challenging the viability of that strategy. Those of us who lived through the 2020 and 2021 wildfire seasons in the American West know that no one should bank on forest carbon as a justification for ongoing fossil fuel emissions, even as we double down on efforts to protect and conserve forests for their climate, environmental, and cultural values. To CARB’s credit, the draft Scoping Plan reflects [growing scientific evidence](https://doi.org/10.1029/2021AV000384) that forests in the American West are likely to be a net source of emissions, rather than a sink. Page 72 of the draft indicates that CARB expects emissions of about 8 million tCO₂e per year from 2025 through 2045.

But when I went to look at the [technical modeling spreadsheet](https://ww2.arb.ca.gov/sites/default/files/2022-05/2022-draft-sp-PATHWAYS-data-E3.xlsx), I couldn’t tell where these numbers were reflected — and in the course of exploring this issue, also noticed that every one of CARB’s four scenarios resulted in a net 15 million tCO₂e emissions source in 2045. Shouldn’t a net-zero scenario produce net-zero emissions?

After asking around, I learned that CARB relied on a placeholder assumption that the land sector would provide a net sink of 15 million tCO₂e per year, rather than a source of 8 million tCO₂e per year as the draft plan more appropriately concludes. That’s a problem because the results in the technical modeling spreadsheet produce net-zero emissions by 2045 if and only if the land sector contributes a net sink of 15 million tCO₂e per year. But that’s not the assumption CARB selected, so the results are off by about 23 million tCO₂e per year in every scenario.

I am at a loss to explain why CARB published a strategy that does not actually model net-zero emissions in any of its scenarios. Nevertheless, it’s clear from the text of the draft scoping plan that CARB staff knew about this problem. Footnote 165 of the [draft plan](https://ww2.arb.ca.gov/sites/default/files/2022-05/2022-draft-sp.pdf) reads:

> For purposes of the Draft 2022 Scoping Plan, CARB assumed NWL could compensate for 15 [million t]CO₂e of residual emissions. This assumption was made prior to completion of the NWL GHG analysis described in Chapter 2.

Reconciling the land sector numbers requires one of two options. CARB must either re-open the scoping plan process to explore scenarios with greater emission reductions than what was published in the draft plan, or it must increase the amount of carbon dioxide removal required to reach net-zero emissions to maintain fixed assumptions in the draft scoping plan scenarios.

With luck this error could provide an opportunity for CARB to explore more ambitious emission reductions. The only alternative would be to tack on an additional 23 million tCO₂e in 2045 carbon removal needs in each scenario, raising an already speculative emphasis on this important but high-risk technology family. Table 2 shows what this adjustment would mean — that is, what a decision to not revisit the core scenario assumptions would require.

<Figure>
  <EmissionsTable
    data={[
      ['Alternative 1', '2035', '44.6', '10.4%', '89.6%'],
      ['Alternative 2', '2035', '82.8', '19.2%', '80.8%'],
      ['Alternative 3 (selected)', '2045', '102.6', '23.8%', '76.2%'],
      ['Alternative 4', '2045', '122.5', '28.4%', '71.6%'],
    ]}
  />
  <TableCaption number={2}>
    Carbon dioxide removal (CDR) needs by scenario (corrected). The information
    from Table 1 is updated with an additional 23 million tCO₂e per year in CDR
    in 2045, leaving emission reductions fixed. This adjustment is required
    unless CARB were to re-open all of its scenario assumptions, as CDR’s
    functional role in CARB’s net-zero planning is to “close the gap” between
    the emission reductions achieved by a given scenario and the policy target
    of that scenario — exactly as the cap-and-trade program is assumed to
    deliver with respect to the state’s 2030 target. CARB’s planned emission
    reductions (about 72 to 76 percent in Alternatives 3 and 4, respectively)
    falls well short of what is required in New York (≥ 85 percent) and
    Washington (≥ 95 percent).
  </TableCaption>
</Figure>

Under the outcome depicted in Table 2, only Alternative 1 would satisfy the standards of Mr. Muratsuchi’s proposed legislation in California and the existing standards in New York. None of the scenarios would satisfy Washington’s current climate law.

These numbers are striking and highlight the need for CARB to reconsider the balance between emissions reductions and carbon removal. Properly addressing that balance requires a new scenario that aims to achieve net-zero emissions by 2045 while relying on CDR technologies for a much more modest share — something closer to 10 than 30 percent.

## 03 – A significant discrepancy on cap-and-trade

Beyond the draft scoping plan’s over-reliance on carbon removal and its failure to plan for actual net zero emissions as a result of a land-sector modeling error, it’s important to note that the draft pays very little attention to achieving California’s legally binding 2030 emissions limit. A mere six pages address California’s path to 2030 and the critical role the cap-and-trade program is expected to play on that journey (see pp. 86-91 of the [draft plan](https://ww2.arb.ca.gov/sites/default/files/2022-05/2022-draft-sp.pdf)).

The lack of attention to cap-and-trade is striking because the 2017 Scoping Plan called for cap-and-trade to achieve nearly half of the annual emission reductions needed to hit a much more ambitious 2030 climate target — despite [widespread criticism](https://calmatters.org/environment/2018/05/checking-the-math-on-cap-and-trade-some-experts-say-its-not-adding-up/) from technical experts that the program [has not been designed](https://apnews.com/article/climate-business-environment-and-nature-california-pollution-694060aa41a4e78dc8a436a71d57564d) properly to achieve this outcome.

As a result, one critical question in the 2022 scoping plan process is whether CARB expects to continue to rely on cap-and-trade, or whether CARB intends to re-center the state’s successful history of effective climate regulation and industrial policy going forward instead. Policymakers have indicated they might reduce the expected reliance on cap-and-trade, but have [deferred any decisions](https://calmatters.org/environment/2022/02/california-climate-cap-trade/) to follow from critical modeling work conducted in the scoping plan process. Getting the details right is important because CARB intends to use the scoping plan modeling in a future regulatory process to “assess what, if any, changes are warranted to the Cap-and-Trade, or other, programs to ensure we are on track to achieve the 2030 target” (see p. 87 of the [draft scoping plan](https://ww2.arb.ca.gov/sites/default/files/2022-05/2022-draft-sp.pdf)).

From a technical perspective, what’s needed to properly establish the cap-and-trade program’s intended role is an update to CARB’s reference scenario — that is, a projection of what CARB expects emissions will be as a result of the non-cap-and-trade policies, prior to the expected effect of cap-and-trade (see Chapter 1 of the [2021 IEMAC advisory report](https://calepa.ca.gov/2021-iemac-annual-report/)). With an updated reference scenario in hand, CARB and independent analysts can evaluate whether or not the current cap-and-trade program is consistent with those goals.

CARB has included an updated reference scenario in the draft plan, but unfortunately it raises more questions than it answers. Without providing any technical details, CARB suggests that the baseline outlook for emissions has improved since 2017 and therefore the cap-and-trade program will not need to do quite as much work as had been previously expected. The updated reference scenario suggests that non-cap-and-trade policies “could potentially reduce” emissions down to 304 million tCO₂e in 2030 — an additional 16 million tCO₂e lower than the 320 million tCO₂e projected in the 2017 Scoping Plan (see Table 2-4 in the [draft scoping plan](https://ww2.arb.ca.gov/sites/default/files/2022-05/2022-draft-sp.pdf)). Lower emissions in the updated reference scenario implies a smaller need for the cap-and-trade program, which CARB once again assumes will “close the gap” between these projections and the state’s 2030 target (about 259 million tCO₂e).

I was curious to see how updates to the reference scenario modeling would reflect the last five years of experience in energy and climate policy. But I couldn’t find any documentation of what CARB or its modeling consultant, [E3](https://www.ethree.com/), did to produce the updated reference scenario. (In addition to the six pages in the main draft document, pp. 15-16 of [technical Appendix H](https://ww2.arb.ca.gov/sites/default/files/2022-05/2022-draft-sp-appendix-h-ab-32-ghg-inventory-sector-modeling.pdf) includes a few more details listed in a table.)

So I decided to compare the relevant scenarios from the final 2017 Scoping Plan and draft 2022 Scoping Plan. I was also curious to see how these scenarios compare to CARB’s greenhouse gas inventory, which provides [official emissions data through 2019](https://ww2.arb.ca.gov/ghg-inventory-data), along with CARB’s [provisional emission estimates for 2020 and 2021](https://ww2.arb.ca.gov/resources/documents/supplemental-report-2021-2022-budget-act-item-3900-001-3237).

What I found was striking. The updated reference scenario is indeed substantially lower, such that it falls to 304 rather than 320 million tCO₂e in 2030. As Figure 2 shows, however, the updated reference is also substantially lower than the official greenhouse gas inventory where these different sources overlap. In other words, it assumes that emissions in the period 2015-2021 are much lower than what CARB says they actually were — and then projects roughly parallel emission reductions from that incongruously lower starting point.

<Figure>
  <EmissionsPlans />
  <FigureCaption number={2}>
    California greenhouse gas emissions and plans. The draft 2022 scoping plan
    suggests that California will need to rely less on cap-and-trade based on an
    updated reference scenario that trends lower than a previous version
    published in the 2017 Scoping Plan. No technical documentation was provided
    for this new scenario. However, the new reference scenario is over 15
    million tCO₂e per year lower than actual emissions in 2019, and over 27
    million tCO₂e per year lower than CARB’s provisional estimate of 2021
    emissions. This suggests some and potentially all of the change may be due
    to a modeling discrepancy.{' '}
  </FigureCaption>
</Figure>

Breaking down the differences reveals an even more questionable picture. As Table 3 shows, the discrepancy is minor in most sectors but much larger in the residential and commercial buildings and industrial sectors — two sectors where year-to-year changes tend to be modest due to slow capital stock turnover. The total difference grows to about 15 million tCO₂e by 2018-2019, and reaches 27.3 (±24.4) million tCO₂e by 2021.

<Figure>
  <DifferenceTable />
  <TableCaption number={3}>
    Differences between the draft 2022 scoping plan and CARB emissions data
    (million tCO₂e). A sector-by-sector breakdown in the discrepancies between
    official inventory data and the new updated reference scenario comes from
    residential and commercial buildings as well as the industrial sector. No
    technical documentation is available to explain these unexpected trends.
  </TableCaption>
</Figure>

Discrepancies of this magnitude should come with a detailed explanation, but there’s nothing in the documentation or technical modeling appendices that explains what’s going on. Something is seriously off, but without any technical documentation it’s practically impossible to figure out the details. As a result, the only information provided on California’s path to 2030 is based on proprietary modeling that conflicts with CARB’s own emissions data.

## Taking California’s existing climate laws seriously

California law requires CARB to develop policies and measures to reduce statewide emissions [below 259 million tCO₂e by 2030](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=38566.&lawCode=HSC). Instead of focusing its draft 2022 scoping plan on what is needed to get California on track for its existing climate laws, however, CARB decided to focus on an ambitious but ultimately non-binding net-zero planning exercise.

A serious look at net-zero can be a good thing. After all, long-term planning can help illuminate what steps are needed now to achieve a long-term target and identify critical infrastructure needs. Unfortunately, that’s not how the discussion is unfolding in California. There is no meaningful attempt in the draft scoping plan to evaluate whether the state is on track for a comparably modest 2030 climate target, and there are no recommendations for how to triple or quadruple recent emission reductions in service of that legally binding requirement. What’s offered, instead, is six pages of undocumented assertions and an updated modeling scenario that directly contradicts CARB’s own emissions data.

The draft scoping plan’s treatment of net-zero targets is no better. I appreciate how many different planning assumptions and modeling contingencies are involved with a study of this magnitude. Nevertheless, there is no excuse for publishing a draft climate strategy for hitting net-zero emissions that does not, by its own acknowledgment, achieve net-zero emissions in _any_ of its scenarios. CARB’s failure to properly model the land sector as a source, rather than as a sink, requires a factual correction — full stop. The Board should also use this opportunity to direct CARB staff to develop a new scenario that evaluates the possibility of reaching a 2045 net zero target that includes a much more modest carbon removal strategy in line with what other leaders like Washington and New York require in their own climate laws.

Here’s hoping that CARB’s Board members are open to good-faith criticism, willing to address the errors in the draft scoping plan, and prepared to revisit its assumptions with a renewed sense of purpose. Getting a net-zero plan of this importance wrong could do much more harm than good. There is still a chance to do better, but like everything else in climate policy, that window is closing rapidly.

## Disclaimer

This post reflects my personal views in my role at CarbonPlan and not necessarily those of the [Independent Emissions Market Advisory Committee](https://calepa.ca.gov/independent-emissions-market-advisory-committee/), on which I serve as vice chair.

## Data sources

GHG Inventory for 2009-2019: [CARB 2000-2019 GHG Emission Trends Report Data](https://ww2.arb.ca.gov/ghg-inventory-data), Figures 1 and 3.

GHG Inventory for 2020-2021: [Supplemental Report of the 2021-2022 Budget Act, Item 3900-001-3237](https://ww2.arb.ca.gov/resources/documents/supplemental-report-2021-2022-budget-act-item-3900-001-3237).

Final 2017 Scoping Plan: [Documents](https://ww2.arb.ca.gov/our-work/programs/ab-32-climate-change-scoping-plan/2017-scoping-plan-documents) and [Spreadsheet](https://ww3.arb.ca.gov/cc/scopingplan/comparison_graphs_6cases101817.xlsm). See tab "Annual GHG Emissions - Sector" and "PATHWAYS - Updated Scoping Plan."

Draft 2022 scoping plan: [Documents](https://ww2.arb.ca.gov/our-work/programs/ab-32-climate-change-scoping-plan/2022-scoping-plan-documents) and [Spreadsheet](https://ww2.arb.ca.gov/sites/default/files/2022-05/2022-draft-sp-PATHWAYS-data-E3.xlsx). See “BAU Reference” in the "Emissions" tab.
