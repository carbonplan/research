---
version: 1.2.0
date: 07-15-2021
title: A buyer’s guide to soil carbon offsets
authors:
  - Jane Zelikova
  - Freya Chay
  - Jeremy Freeman
  - Danny Cullenward
color: orange
card: soil-protocols-explainer
background: articles/012/crop
quickLook: Lessons learned from a systematic review of 14 protocols for soil carbon offsets
summary: We systematically reviewed protocols used to credit soil carbon in voluntary markets. Explore our database of protocols or read the article for key takeaways.
icon: articles/012/crop-small
links:
  - label: Database tool
    href: /research/soil-protocols
  - label: Update blog post
    href: /blog/soil-protocols-added
  - label: Response to Gold Standard
    href: /research/soil-protocols-explainer-gold-standard-response
components:
  - name: MetricHistogram
    src: ./components/metric-histogram.js
  - name: MetricTable
    src: ./components/metric-table.js
  - name: RecommendationTable
    src: ./components/recommendation-table.js
  - name: ScoreSummary
    src: ./components/score-summary.js
  - name: TimelineSummary
    src: ./components/timeline-summary.js
---

Voluntary carbon markets are [ramping up efforts](https://grist.org/agriculture/us-carbon-removal-capture-offset-forests-farms-trees-soil/) to credit soil carbon removal, with [federal lawmakers](https://www.politico.com/news/2021/06/24/senate-farmers-carbon-agriculture-496029) and [state regulators](https://ww2.arb.ca.gov/resources/documents/nwl-implementation-draft) eager to follow suit.

Most of the enthusiasm centers on agricultural practices like reducing tillage intensity, planting cover crops, and improving grazing management. These practices have the potential to simultaneously increase soil health, reduce greenhouse gas emissions, and enhance carbon sinks — a seemingly win-win solution.

Improving soil health and ecosystems is unequivocally positive. But determining when certain agricultural practices actually increase carbon stocks, and how to measure and credit their gains, remains <Link href='/research/soil-depth-sampling'>exceedingly complex</Link>. The efficacy of soil carbon interventions depends on local climate conditions, land management history, and soil characteristics. Soil carbon, meanwhile, varies substantially over time, space, and depth. On top of that, any changes in soil carbon occur slowly, which makes it difficult to reliably track changes once new practices are implemented.

A number of protocols for crediting soil carbon have emerged to tackle this complexity. Some were developed by third-party offset registries like Verra and Gold Standard, while others come from new companies like Nori and the Regen Network. Each protocol specifies the detailed rules under which projects claim credits that can be sold to buyers. More than a dozen protocols exist, and they vary across key dimensions like scientific rigor, additionality, and durability. As a result, getting to the bottom of what these different protocols require is not an easy task.

To help address the opacity in today’s market, we systematically reviewed 14 soil carbon protocols on 33 technical dimensions.<Cite id='protocols.added'/> We focused on protocols that were publicly available and could be used to certify or issue credits for soil carbon removal — activities that draw carbon out of the atmosphere and sequester it in soil. We excluded protocols still in development or that credit solely on the basis of avoided emissions.

Our findings reveal that robust crediting of soil carbon is hard and that none of the existing protocols is doing enough to guarantee good outcomes. While this conclusion doesn’t mean that all projects are generating low-quality credits, the lack of rigorous standards makes it hard to ensure good climate outcomes in the voluntary market. Buyers that care about quality must screen candidate projects themselves, while developers of high-integrity projects must compete against those who might take advantage of lax standards. The additional due diligence required today could limit the role soil carbon can play in effective climate strategy and highlights the need for systematic market reforms.

## What we did

We reviewed publicly available voluntary market protocols used to credit activities affecting soil organic carbon (or SOC, which we call soil carbon here for brevity) and tracked 33 separate protocol attributes. We developed four metrics that collectively help determine whether the credits generated under each protocol would lead to quantifiable, additional soil carbon removal.

<MetricTable />

Each metric includes a set of descriptive attributes that together inform a qualitative score on a scale from 1 to 3. Based on four individual metric scores, we assigned each protocol an overall rating from 1 to 5. We also harmonized metadata for each protocol, categorized which agricultural practices were included, and produced a timeline showing the relationship between project activity, crediting, verification, and claimed permanence. The full results, including comments and references for all dimensions we evaluated, are available as an [interactive table](/research/soil-protocols) as well as downloadable [CSV](https://storage.googleapis.com/carbonplan-soil-protocols/CarbonPlan-Soil-Protocols.csv) or [JSON](https://storage.googleapis.com/carbonplan-soil-protocols/CarbonPlan-Soil-Protocols.json) files.

In the chart below, we summarize our results by showing scores for rigor, additionality, durability, and safeguards, alongside our overall rating across the full set of protocols.<Cite id='figure.update'/>

<Figure>
  <MetricHistogram />
  <FigureCaption number={1}>
    Summary table of our results. Each protocol is a row. The first four columns
    show scores along four individual metrics (each on a scale from 1 to 3) and
    the final column shows the overall rating (on a scale from 1 to 5). For more
    details, check out the [interactive version](/research/soil-protocols) of
    this table. Abbreviations: Grazing (G), Compost (C) Improved Agriculture
    (IA), Sustainable Agriculture (SA), Fire + Grazing (FG)
  </FigureCaption>
</Figure>

Before describing our results, it is useful to highlight two methodological challenges we faced. The first concerns the different greenhouse gas emissions and carbon cycle processes involved in this area. Most of the protocols we reviewed credit some combination of carbon removal and avoided emissions, including CO₂ emissions unrelated to soil carbon (e.g. tractor use), and in some cases other greenhouse gases like N₂O and CH₄ that result from fertilizer use, grazing animals, or anaerobic decomposition.<Cite id='avoided.comment'/> No protocols track carbon removal and avoided emissions separately, so buyers looking to focus exclusively on carbon removal must decipher this distinction themselves.

Another challenge followed from the breadth of protocol applicability. The protocols we reviewed apply to a range of geographies and a wide variety of land management practices, including cropping, tillage, grazing, managing agricultural inputs, and other agricultural practices that affect soil carbon stocks. Protocols with broad applicability generally involve a level of methodological abstraction and user optionality. The combination of opaque rules and multiple pathways to satisfying protocol requirements makes it difficult to determine what requirements are actually in place, and therefore what buyers can expect as guaranteed outcomes.

In the sections below, we describe our cross-cutting, metric-by-metric observations. For each metric, we start by explaining how we arrived at our scores.

## Rigor

Our rigor metric analyzes the scientific integrity and methodological robustness of soil carbon quantification.

<ScoreSummary id='rigor' />

In our view, robust soil carbon crediting requires empirical measurements. But we repeatedly found protocols relying partially or completely on modeling to quantify and credit soil carbon gains. Only 3 of 14 protocols require direct sampling as the basis for issuing soil carbon credits (which we call “empirical crediting”). Others require sampling to calibrate or parameterize models, but not to issue credits. Several protocols do not require sampling at all, relying exclusively on models to estimate soil carbon changes and issue credits.

This pattern is concerning because models are imperfect analogs when it comes to soil carbon. They rely on a number of assumptions which may not be applicable in specific contexts and can lead to incorrect predictions of soil carbon outcomes.<Cite ids={['sanderman.2010', 'ogle.2007']} /> For example, models routinely make assumptions about the persistence and accrual of soil carbon over time, including that it increases linearly, that fields are in a state of equilibrium, and that proxy measurements like remote sensing can accurately conceptualize ecosystem processes. The most rigorous models still use measurements for calibration, and thus depend on high-quality sampling approaches.

Where sampling is required in today’s protocols, the quality requirements are generally poor. With only a few exceptions, protocols fail to require rigorous stratification, sampling randomization, adequate sampling density to encompass the within-site variation, and <Link href='/research/soil-depth-sampling'>sampling beyond the top 30cm</Link> to include the entire volume of soil impacted by agricultural activities. Even protocols with the highest rigor scores still have weaknesses — BCarbon’s protocol, for example, does not provide specific guidance on sampling depth, and it does not track additional greenhouse gases, leaving open the possibility of boosting local soil carbon gains with external amendments like fertilizer without properly accounting for their emissions.

Notably, two of the three protocols with robust sampling requirements — Verra Soil and BCarbon — reference or adopt a common protocol module from 2012, Verra’s Estimation of Stocks in the Soil Carbon Pool (VMD0021). Another, Gold Standard, does not require sampling, but when projects choose sampling the protocol suggests using the same Verra module. This pattern demonstrates that the voluntary carbon markets identified a reasonably rigorous sampling standard almost a decade ago, prior to the more recent surge in soil carbon credit interest. Nevertheless, sampling standards have generally fallen since then, potentially reflecting a mismatch between sampling costs and market prices.

## Additionality

Our additionality metric evaluates a protocol’s approach to crediting only those projects that take new actions, rather than those that have already adopted or could independently adopt beneficial management practices.

<ScoreSummary id='additionality' />

We found that buyers cannot rely on any of the protocols to ensure additionality. Only one protocol (Verra’s 2020 Improved Agriculture protocol) adequately protects against large-scale non-additional crediting, but even it does not provide sufficient assurance of project additionality.<Cite id='grist.comment'/>

A majority of the protocols apply or replicate the much-criticized Clean Development Mechanism additionality standards,<Cite id='schneider.2009'/> including the Verra Improved Agriculture protocol. A few protocols, like Nori, Regen Network, and BCarbon, simply do not address additionality at all. In other cases, protocols appear to be designed to create the false appearance of rigorous additionality tests. For example, Verra’s Improved Agriculture protocol requires projects to identify peer-reviewed evidence of “barriers” to their deployment, but then provides example citations that could substantiate barriers to any agricultural practice changes — effectively providing an answer to its own question.

In a similar vein, the Climate Action Reserve’s protocol (CAR Soil) features a convoluted test that enables projects to treat all practices as additional. This protocol uses a common practice approach to additionality that defines activities below an adoption threshold as additional, and those above it as non-additional. The protocol uses a high threshold (50% adoption), which is evaluated on a county level; such a high threshold risks crediting existing practices that are already quite common by any conventional measure, but which nevertheless satisfy the CAR Soil threshold. Other protocols use lower thresholds (5-20%) when automatically designating projects as additional on this basis. Although the CAR Soil protocol defines practices with a greater than 50% adoption as non-additional, it nevertheless allows projects to credit those same practices if they are combined with other practices that featured a less-than-50% adoption rate. Thus, projects that combine multiple practices can easily avoid the superficial prohibition on commonly adopted practices — an outcome that, in our view, creates the [false appearance of an additionality standard](/research/soil-carbon-comment).

The lack of meaningful additionality testing across all the protocols we analyzed highlights the need for buyers to consider additionality carefully in their deliberations. We recommend that buyers specifically ask sellers for information about the nature of the practices being credited, including how common they are in a project’s immediate locality and what evidence the seller has about how credits helped induce a change in land management decisions.<Cite id='additionality.comment'/>

Beyond explicit additionality tests, how a protocol treats the timing of activity adoption and crediting has important implications for additionality outcomes. Consider the example of a land manager who adopted a beneficial management practice change some 10 or 15 years in the past. If the protocol allows a land manager to earn credit for her earlier change, it might compensate “early adopters” but would do so at the expense of offset credit additionality because paying someone for a change they adopted in the distant past does not change soil carbon outcomes.

To help visualize how key project milestones impact crediting, we created a timeline for each protocol that shows when an eligible activity could have been implemented relative to project registration, and for what period soil carbon changes can be credited. Here we show two hypothetical timelines representing typical and more rigorous approaches.

<Figure>
  <TimelineSummary />
  <FigureCaption number={2}>
    Hypothetical timelines showing when eligible activities could be implemented
    relative to the start of project implementation. The typical case we
    observed allows for a long period of backdating (above) whereas a more
    rigorous timeline restricts this window (below).
  </FigureCaption>
</Figure>

In the typical timeline, relevant activities can be implemented 5 to 10 years prior to project registration — something we found in 10 of 14 protocols. Some protocols allow projects to earn “back-credits” for the entirety of that historical period; others restrict the crediting window while still allowing older practice changes to earn credits going forward. If a buyer wants confidence that their purchase creates climate benefits that would not have happened otherwise, either type of backdating raises concerns.

The logistics of registering and crediting projects makes it impossible to instantaneously recognize changes in land management practice, so a modest amount of backdating can be justified. To establish a causal relationship between carbon financing and climate benefits, however, any delay should be minimized.

We note that not all buyers need to be concerned with additionality. If a government program seeks to compensate land managers for their beneficial practices, including paying “early adopters” who had already changed course, then additionality is not necessarily a relevant concept. But for companies or governments that want to justify ongoing emissions with offset credits, additionality is a critical issue. Unfortunately, none of the protocols feature an adequate additionality test, which means the task of screening for projects that deliver additional climate benefits is left entirely to the buyer.

## Durability

Our durability metric evaluates how the protocol considers risk to carbon storage permanence and implements strategies to mitigate those risks.

<ScoreSummary id='durability' />

Fossil carbon emissions have atmospheric effects that last for hundreds to thousands of years. Effective carbon removal needs to <Link href='/research/permanence-calculator-explainer'>confront this physical reality</Link>, but many strategies, including soil carbon, are vulnerable to potential reversals — where the carbon that is removed is released to the atmosphere again. No intervention in an agricultural system can guarantee outcomes over hundreds of years, but we can look to the permanence required by protocols and the protections they provide to ensure outcomes over those time horizons.

We did not find any protocols that achieved a high bar for durability, which requires both a long permanence period and robust risk management provisions. Only one of the protocols (CAR Soil) requires a permanence period approaching 100 years, but its risk management provisions are relatively weak. The other protocols adopt permanence periods between 8 and 40 years.

Of the protocols with shorter permanence periods, risk management protections are also generally weak. One protocol (Nori) has no explicit protections. The majority of protocols adopt general registry rules for risk analysis and mitigation, which typically involve projects setting aside a number of credits in a registry-managed <Link href='/research/offset-project-fire'>buffer pool</Link> that can be drawn down to account for “reversals” (or carbon loss) over time.

Buffer pool contributions are determined by a variety of approaches across the protocols. Ironically, the highest mandatory buffer pool contribution we observed comes from the simplest approach: Gold Standard requires projects to contribute credits equal to 20% of their claimed benefits to its buffer pool, with no project-specific consideration of risk. On the more complex end of the spectrum, all Verra protocols require projects to rate risk across 50 categories, which typically results in a 10-15% buffer contribution. ACR protocols similarly require projects to rate risk across up to 8 categories, resulting in a 8-16% buffer contribution. The CAR Soil protocol takes a slightly different approach, featuring a simple lookup table that results in a 5-17% buffer contribution.

Notably, the buffer contributions did not clearly correlate with claimed permanence horizons. In other words, a 10-year permanence claim and a 100-year permanence claim could both end up ensured by a 10% buffer contribution. This inconsistency implies that either permanence estimates or buffer contributions have been calculated incorrectly — and possibly both.

In two cases (Gold Standard and ACR), registry rules allow a project to satisfy its buffer pool contribution requirement with credits from another project. This scheme enables credits from older or lower-quality projects to fulfill buffer pool obligations. Given the [surplus credits available in the market](https://trove-intelligence.com/), flexible contribution rules raise concerns about buffer pools’ efficacy, regardless of their size.

Our main takeaway on durability is that the numbers parametrizing risk mitigation measures are not the result of particularly clear or empirical considerations of risks. Rarely, if ever, are risks calibrated to a project’s particular region or agricultural context, including the distinct socioeconomic factors and contractual risks that are relevant for landowners. Farmers and ranchers frequently go bankrupt, but buyers will find nothing in the protocols that provides an evidence-based system for addressing the risk that soil carbon promises go under when agricultural businesses do, too.

## Safeguards

Our safeguards metric looks at the adequacy of protocol requirements to protect the interests of landowners, communities, and the local environment.

<ScoreSummary id='safeguards' />

Only two of the protocols reviewed (Gold Standard and Plan Vivo) included requirements around landowner protections, data privacy, or community engagement.<Sidenote>Our original analysis failed to identify a registry-wide Gold Standard safeguards policy, as explained further [here](/research/soil-protocols-explainer-gold-standard-response). As a result, we assigned a score of 1/3 to Gold Standard. After reviewing the document we missed, we assigned a score of 3/3 to Gold Standard. In addition, although we had correctly identified the components of Plan Vivo's safeguards, we assigned a score of 2/3 instead of the 3/3 our rubric required. We regret both errors.</Sidenote> Most are simply silent. In a couple of cases, protocols gesture towards these issues with recommendations or plans for future engagement, but these provisions are far from robust and lack specificity.

As researchers without deep expertise in social and local environmental safeguards, we hesitate to say what should be required or how to ensure that standards deliver more than a box-checking exercise. Nevertheless, the common absence of even superficial standards was notable in a sector where land use decisions can have profound impacts on communities and local environments.

## Conclusions

In the vast majority of cases, the standards set by these protocols cannot be used to provide confidence around project quality. Buyers can’t rely on existing protocols to know whether a project was rigorously credited, and sellers can’t invoke or rely on the status quo rules to demonstrate quality. The question of defining a good project must be answered, instead, outside of the voluntary market’s formal rules.

<PullQuote>
  Buyers can’t rely on existing protocols to know whether a project was
  rigorously credited
</PullQuote>

To be clear, we didn’t analyze individual projects here. It’s entirely possible that individual projects credited under these protocols perform far better than the minimum bar set by a given protocol. On the other hand, it’s also possible for projects to exploit ambiguities in otherwise seemingly rigorous components of a protocol. Our core finding is that buyers must analyze individual projects to determine whether they meet a reasonable definition of quality, since none of the protocols provides adequate assurances.

One of our most striking results is that most protocols set a low bar on soil sampling quality, which we consider essential to issuing robust carbon credits. One possible explanation is that choosing to not require robust sampling reduces project costs and therefore increases the likelihood of market uptake, especially when buyers are unaware of or relatively unconcerned with credit quality. The risk, of course, is that not sampling, or sampling poorly, leads to a higher probability of issuing credits that do not represent real carbon removal.

We have a three-step recommendation for buyers or to anyone else looking to fund carbon removal projects involving soil.

<Figure>
  <RecommendationTable />
</Figure>

Depending on their goals, we suggest that buyers also pay careful attention to distinguishing carbon removal from avoided emissions. Many of the protocols credit reductions in multiple greenhouse gases (such as avoided methane or nitrous oxide emissions), yet we have not found any evidence that registries distinguish carbon removal and avoided emissions in the credits they issue. We recommend that buyers who seek to specifically procure carbon removal ask projects to distinguish the share of total credits attributable to carbon removal from overall emission reductions. This information can be used to discount the carbon removal benefit of an individual credit.<Cite id='crediting.example' />

Buyers might also want to screen for additional risks that were either ignored or incompletely handled by the protocols. For example, the application of external amendments such as compost and fertilizer can boost local soil carbon gains, but then requires lifecycle analysis that accounts for imported organic carbon (in the case of compost or manure applications) as well as pollution from nitrogen runoff and nitrous oxide emissions (in the case of fertilizer use). Similarly, the application of pesticides and herbicides raises pollution concerns. Because only a handful of protocols included plausibly adequate lifecycle methods to address impacts from external inputs, and none addressed pollution from fertilizers or pesticides and herbicides, we recommend that buyers develop standardized questions to assess these areas of concern.

We acknowledge that our review sets a high bar for what a protocol should achieve. On our scale, a perfect rating would require top scores on permanence, durability, and additionality, and the inclusion of multiple environmental or social safeguards. Given the complexity and uncertainty associated with soil carbon removal, we believe that is the appropriate bar for respecting scientific integrity and ensuring climate action is real. None of the protocols we reviewed achieves it today. In light of this finding, we have suggested ways buyers can adopt the more rigorous components of currently available market standards while conducting additional due diligence to ensure credit purchases meet a higher bar.

More optimistically, we hope our analysis helps clear the path for individual projects that seek to deliver higher-quality outcomes. Screening for such projects will be time-consuming, and rigorous sampling and quantification will be expensive. But that’s the true cost of robust climate action — and until the standards in voluntary markets improve, it’s a cost that buyers who care about quality must bear.

<Endnote label='Update' divider>

On October 13th, 2021 we updated our database with analysis of three additional protocols. Two are from Australia and one is from Alberta, Canada. Although they were designed by governments, their credits can also be used by voluntary actors. The results of that analysis are described in a separate [blog post](/blog/soil-protocols-added).

</Endnote>

<Endnote label='Credits'>

The author team collectively developed and implemented the project. Jane led the analysis of soil carbon sampling and modeling. Freya and Danny led the analysis of additionality and durability. All authors contributed to the data collection, analysis, and writing of the article. Thanks to Oriana Chegwidden for helpful feedback.

Please cite as:

J Zelikova, F Chay, J Freeman, D Cullenward (2021) “A buyer’s guide to soil carbon offsets” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/soil-protocols-explainer](https://carbonplan.org/research/soil-protocols-explainer)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan received [funding from Microsoft](https://carbonplan.org/funding) to support the analysis of these protocols. Microsoft did not exercise any control over this work. CarbonPlan and the authors are solely responsible for the content of the analysis and this writeup, which do not represent the views of any other organizations or individuals.

Article text and figures made available under a [CC-BY 4.0 International](https://creativecommons.org/licenses/by/4.0/) license. Implementation of [soil protocols database](https://github.com/carbonplan/research/tree/main/tools/soil-protocols) made available under an [MIT license](https://github.com/carbonplan/research/blob/main/LICENSE). Content of soil protocols database made available under a [CC-BY 4.0 International](https://creativecommons.org/licenses/by/4.0/) license.

</Endnote>
