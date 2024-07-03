---
version: 1.0.0
title: The first offset credits approved by a major integrity program don’t make the grade
authors:
  - Grayson Badgley
  - Freya Chay
date: 07-03-2024
summary: Initial results from the ICVCM assessment process highlight the challenges of reliably identifying high-quality offset credits.
color: yellow
card: icvcm-landfill-additionality
components:
  - name: AnnotatedProject
    src: ./components/annotated-project.js
  - name: Summary
    src: ./components/summary.js
---

The global carbon market is in the midst of a crisis of [trust](https://doi.org/10.1126/science.ade3535) and [integrity](https://www.newyorker.com/magazine/2023/10/23/the-great-cash-for-carbon-hustle). And for the last four years, the Integrity Council for the Voluntary Carbon Market (ICVCM) has promised a way forward out of that crisis. The ICVCM represents a major effort to create a labeling system that identifies high-quality carbon credits so that buyers can participate in the market with renewed confidence.

Unfortunately, the first [credit quality labels](https://icvcm.org/assessment-status/) released by the ICVCM raise concerns about whether this effort can provide the quality assurance the market desperately wants and needs.

We analyzed fourteen carbon offset projects credited under the Climate Action Reserve’s [US Landfill Protocol Version 6.0](https://www.climateactionreserve.org/how/protocols/waste/us-landfill/), which the ICVCM has now approved for its quality label. By comparing crediting data from the Climate Action Reserve with landfill gas collection data from the US Environmental Protection Agency, we found that nearly 50 percent of the credits issued under this protocol are likely non-additional. These credits do not represent high-quality outcomes for the climate.

While our analysis explores a small subset of landfill projects, the focus of this commentary is on the ICVCM’s assessment process, itself. So much effort has gone into establishing the ICVCM as a point of oversight for the offsets industry as a whole. It is important to know how well that oversight is playing out. Landfills provide a window for studying these broader, market-wide dynamics. We conclude that those planning to rely on the ICVCM quality label should proceed cautiously; the ICVCM process may not be set up to reliably separate the wheat from the chaff.

## High-quality labels on low-quality credits

The ICVCM has laid out a two-part process for assessing integrity in the voluntary carbon market. Both parts are guided by a set of quality standards called the Core Carbon Principles (CCPs). First, carbon crediting programs are evaluated on criteria such as governance and transparency.<Sidenote>The ICVCM uses the broader term “carbon crediting program” in their process documents. Functionally, this term refers to organizations like Verra or the Climate Action Reserve, and is more or less synonymous with the term “carbon offset registry.”</Sidenote> Programs approved in this round of evaluation become “CCP-Eligible.” Second, categories of credits are evaluated on criteria such as additionality and permanence. Individual credit categories approved in this round become “CCP-Approved.” Programs that are CCP-Eligible have the option to label their credits as CCP-Approved as an indication of the ICVCM’s quality assessment if those credits are issued within an approved credit category. Although all major crediting programs have been deemed CCP-Eligible, the ICVCM has only approved two credit categories so far: Ozone Depleting Substances and Landfill Gas Capture and Utilization.

As stated in the ICVCM’s Core Carbon Principles, assessing additionality is a key part of determining approval for these credit categories.<Sidenote>See Criteria 8.1 to 8.10 in the ICVCM’s [Assessment Framework v1.1](https://icvcm.org/wp-content/uploads/2024/02/CCP-Book-V1.1-FINAL-LowRes-15May24.pdf).</Sidenote> Additionality is the requirement that the climate benefits represented by an offset would not have occurred without access to carbon offset financing. Paying for offsets should change climate outcomes, rather than simply maintaining business-as-usual.

The problem is the ICVCM has labeled seemingly non-additional landfill credits as CCP-Approved.

Consider the Resource Recovery Landfill ([CAR516](https://carbonplan.org/research/offsets-db/projects/CAR516)) project in Cherryvale, Kansas, which receives offsets for operating a system that collects and combusts methane emitted from decomposing garbage. Offsets are awarded to landfill projects because burning methane converts that gas to CO₂, which is considered less harmful to the atmosphere than the methane would have been. But the crediting data for this project show a suspicious pattern. After receiving credits for operating its gas collection system from 2006 to 2011 (Figure 1, green bar), the Resource Recovery Landfill stopped filing the paperwork necessary to receive offset credits and fell into a period of dormancy.<Sidenote>We show data between 2010 and 2022, which are the years for which EPA gas collection data are available. Some landfills, including the Resource Recovery Landfill, started operating gas collection systems and receiving offset credits prior to 2010.</Sidenote> Then, in 2022, the project suddenly started receiving credits again (Figure 1, yellow bar).<Sidenote>We’re referencing years in which the project activity was credited (sometimes referred to as “vintage year”), rather than years in which credits were issued or in which paperwork was filed. In the case of CAR516, the project came out of dormancy with paperwork filed in 2024, which resulted in the issuance of post-dated credits for vintage year 2022.</Sidenote>

<Figure sx={{ '& figcaption span': { display: 'inline' } }}>
  <AnnotatedProject />
  <FigureCaption number={1}>
    Annotated time series of <Green>initial credit issuance</Green>,{' '}
    <Yellow>renewed credit issuance</Yellow>, and the operation of{' '}
    <Blue>gas collection and combustion systems</Blue> from the US Environmental
    Protection Agency at the Resource Recovery Landfill (CAR516). The
    availability of carbon credits has no effect on the operation of the
    landfill’s gas collection system, raising questions about the project’s
    claimed additionality and the utility of the ICVCM’s assessment process.
    CAR516 first received credits in 2006 (not shown).
  </FigureCaption>
</Figure>

If the credits issued to Resource Recovery truly represented additional climate benefits that were enabled by carbon finance, you would expect that a ten-year gap in credit issuance would have some effect on the landfill’s operation of its gas collection system. Instead, data collected by the Environmental Protection Agency (EPA) shows that the Resource Recovery Landfill consistently operated its gas collection throughout the pause in crediting, from 2012 to 2021 (Figure 1, blue bar).<Sidenote>The EPA’s [Facility Level Information on Greenhouse gases Tool](https://ghgdata.epa.gov/ghgp/main.do) makes available a vast amount of data on a landfill-by-landfill basis.</Sidenote> In fact, the Resource Recovery system actually _expanded_ during that period. EPA data show the gas collection system growing from 19 to 25 gas extraction wells during the project’s gap in crediting.

To be clear, the fact that Resource Recovery’s gas collection system ran continuously is a good thing for the planet. In addition to reducing methane emissions, collecting and treating landfill gas can help reduce smells and other environmental side effects associated with operating a landfill. But offsets must be used to spur new climate action — not just reward existing actions. Resource Recovery, and other landfill gas projects like it, claim that in the absence of regulation and without carbon finance, methane would be released to the atmosphere unabated. The gap in crediting shows this is not the case and strongly indicates that the second wave of credits Resource Recovery received is non-additional.

It turns out that many of the other landfill projects enrolled under the Climate Action Reserve (CAR) US Landfill Protocol Version 6.0 mirror this pattern. Of the fourteen projects that have been credited under the protocol, six have crediting gaps of three years or longer. In all cases, EPA data shows continual operation of the methane destruction systems at these landfills (Figure 2). And at four of the landfills, the methane destruction systems expanded during the crediting gap.

<Figure sx={{ '& figcaption span': { display: 'inline' } }}>
  <Summary />
  <FigureCaption number={2}>
    Time series of <Green>initial credit issuance</Green>,{' '}
    <Yellow>renewed credit issuance</Yellow>, and the operation of{' '}
    <Blue>gas collection and combustion systems</Blue> for six landfills
    credited under the Climate Action Reserve’s US Landfill Protocol Version
    6.0. All projects have a crediting gap of at least three years, with some
    gaps as long as ten years. The lack of crediting, combined with the
    continuation of gas collection, is inconsistent with the concept of
    additionality.
  </FigureCaption>
</Figure>

Roughly 0.84 million credits have been issued under CAR’s US Landfill Protocol Version 6.0, all of which are now eligible for the ICVCM’s CCP-Approved label. More than 0.41 million of these credits represent a second wave of non-additional crediting to the six projects with large crediting gaps shown in Figure 2. On a protocol basis, that works out to 49.3 percent over-crediting.<Sidenote>For context, the ICVCM [reports](https://icvcm.org/integrity-council-announces-first-high-integrity-ccp-labelled-carbon-credits-as-assessments-continue/) that 27 million credits are currently CCP-Approved. This number includes both ozone depleting substances and landfill credits. We have not evaluated any other protocols or projects within these approved credit categories and cannot speak to their quality.</Sidenote>

In reading through CAR’s protocol, we trace the origin of this over-crediting to a minor change first introduced in the preceding version of CAR’s landfill protocol, [Version 5.0](https://www.climateactionreserve.org/wp-content/uploads/2019/07/U.S._Landfill_Project_Protocol_V5.0.pdf). After years of minimal project development under Version 4.0 of the protocol, CAR revised its rules to i) allow projects to receive credits for twenty years, as opposed to just ten years and ii) provide a way for previously lapsed projects to submit minimal paperwork and start receiving credits again. Later, Version 6.0 added the option for a third crediting period, theoretically allowing projects to receive credits for up to 30 years. There are at least 10 other landfill projects enrolled under Version 5.0 of the CAR landfill protocol that have crediting gaps of three or more years. While these projects support the interpretation that a change in the protocol allowed for the observed non-additional crediting patterns, they are excluded from our analysis as Version 5.0 of CAR’s landfill protocol wasn’t included in the ICVCM’s initial list of eligible protocols in the category of landfill gas.

## What this tells us about the ICVCM process

The approval of hundreds of thousands of likely non-additional credits as “CCP-Approved” points to a larger problem with the ICVCM’s approach for identifying and labeling high-quality credits. We don’t want to speculate too much about a process we aren’t involved with, but we suspect the principal problem stems from the ICVCM’s goal of reviewing and approving whole categories, which could make them less likely to dig into the specific attributes of individual projects. The ICVCM emphasized this distinction in a set of “[informal board observations](https://icvcm.org/wp-content/uploads/2024/06/ICVCM_Board-Observations-for-LFG.pdf)” released with their initial approval of protocols within their Landfill Gas Capture and Utilization category, writing: “Mitigation activity-level assessment is outside the
scope of the ICVCM assessment process, which focusses [_sic_] on programs and categories (types of carbon credits).”

Here we see the limits to that “high level” approach – evaluating protocols alone is not enough to determine credit quality. The quality of individual projects can vary within a protocol. The quality of an offset credit flows not only from the protocol it abides by and the transparency of the registry it is listed under, but also from the specific details of the individual project’s implementation.

And the risk for divergence between the specifics of a project and the generalities of programs and protocols will only grow as the ICVCM moves to approve other credit categories. That’s because judging the quality of landfill-related credits should be easier than nearly every other type of offset credit on the market. The change from methane to CO₂ can be measured directly at the landfill, without relying on complicated measurements or algorithms. Landfill credits do not depend on understanding and monitoring global ecological systems or regional political outcomes, the way forest offset projects do. And, in the case of US landfills, we have rich reporting data from the EPA that makes it straightforward to test assumptions about additionality and observe real outcomes of how landfill gas systems operate. If easy-to-spot, low-quality landfill credits are being given ICVCM gold stars, it’s difficult to imagine how buyers can trust the ICVCM’s labels on more controversial credit types, like [improved forest management](https://www.bloomberg.com/features/2020-nature-conservancy-carbon-offsets-trees/) and [avoided tropical deforestation](https://www.theguardian.com/environment/2023/jan/18/revealed-forest-carbon-offsets-biggest-provider-worthless-verra-aoe).

That’s not to say there aren’t merits to the ICVCM’s broader efforts. Their assessment process has already led to real improvements in market transparency. For example, Criterion 9.4 of the ICVCM Assessment Framework requires that crediting programs “make publicly available information on the pooled buffer reserve contents, including origin
of carbon credits[.]” After that criterion was published, [the American Carbon Registry](https://acr2.apx.com/myModule/rpt/myrpt.asp) began to make information about the specific credits placed in its buffer pool available. Previously, the registry had simply disclosed the total size of its buffer pool. Becoming “CCP-Eligible” required that ACR change its disclosure practices and, because of that change, we now know the exact composition of the program’s buffer pool. This is meaningful progress in market transparency and we’re hopeful that the ICVCM continues to use its influence and position in the market to make further incremental improvements.

Rather than dismiss the ICVCM based on this analysis, we urge market participants to adjust their expectations about what the ICVCM assessment process can deliver. As demonstrated by this small collection of landfill credits, the “CCP-Approved” label is not an unambiguous signal of credit quality.

<Endnote label='Credits' divider>

Grayson performed the analysis and wrote the article with Freya. Kata Martin designed the figures.

Please cite as:

G Badgley and F Chay (2024) “The first offset credits approved by a major integrity program don’t make the grade” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/icvcm-landfill-additionality](https://carbonplan.org/research/icvcm-landfill-additionality)</span>

</Endnote>

<Endnote label='Terms'>

This work was [funded in part](https://carbonplan.org/funding) by grants from the Patrick J. McGovern Foundation. No one except the authors exercised control over the research process or products. The authors are solely responsible for the content of this commentary, which does not reflect the views of any other individuals or organizations.

Article text and figures made available under a [CC BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/). The [code](https://www.github.com/carbonplan/icvcm-landfill-additionality) underlying this commentary is made available under an [MIT license](https://choosealicense.com/licenses/mit/).

</Endnote>
