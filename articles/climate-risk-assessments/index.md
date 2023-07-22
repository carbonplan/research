---
version: 1.0.0
title: A summary report on climate-related financial risk assessment
authors:
  - Oriana Chegwidden
  - Jeffrey Fralick
  - Sadie Frank
date: 07-18-2023
summary: We held an expert convening to identify shortcomings and opportunities when evaluating financial risks to electric utilities from extreme heat.
quickLook: Findings from an expert convenings on extreme heat and the electricity sector
card: climate-risk-assessments
background: articles/020/sun-alt
icon: articles/020/sun-small
components:
  - name: DataSources
    src: ./components/data-sources.js
  - name: FlowChart
    src: ./components/flow-chart.js
  - name: InlineSecondaryCode
    src: ./components/inline-secondary-code.js
color: yellow
---

Federal agencies, municipalities, and private companies are increasingly seeking information about the financial risks arising from the physical impacts of climate change. Across the United States, physical climate hazards, such as fires, droughts, and floods, have already taken a significant financial toll.<Cite id='ncei.2023' /> In 2022 alone, there were 18 events that together caused a total of $165 billion in damages. Entities are taking steps in response: governmental institutions around the globe are [proposing](https://www.sec.gov/news/press-release/2022-46) and [issuing](https://finance.ec.europa.eu/capital-markets-union-and-financial-markets/company-reporting-and-auditing/company-reporting/corporate-sustainability-reporting_en#:~:text=EU%20law%20requires%20all%20large,on%20people%20and%20the%20environment.) climate-related financial standards; non-governmental organizations have set forth voluntary frameworks for climate-related financial risk disclosure;<Sidenote>See, for example, the [Task Force on Climate-Related Financial Disclosures (TCFD)](https://www.fsb-tcfd.org/).</Sidenote> and policy efforts are emerging to better identify climate risks to the financial system and overall economy.<Sidenote> For example, in 2021, President Biden issued [Executive Order 14030 (EO 14030)](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/20/executive-order-on-climate-related-financial-risk/) to direct certain financial regulatory agencies to take steps to integrate climate-related financial risk into areas such as market regulation and financial stability. Later that year, the Financial Stability Oversight Council released its [Report on Climate-Related Financial Risk](https://home.treasury.gov/system/files/261/FSOC-Climate-Report.pdf), which identified climate risk as an [“emerging and increasing threat”](https://home.treasury.gov/news/press-releases/jy0426) to U.S. financial stability and recommended that financial regulators evaluate whether existing assessment, disclosure, and risk management frameworks need to be updated or enhanced to include the consideration of climate-related financial risk.</Sidenote>

The physical risks of climate change<Sidenote>Climate-related financial risk assessments can include transition risk (i.e., the risks associated with societal responses to a changing climate, such as climate-related shifts in legislation, regulation, technology, and consumer preferences) as well as physical risk (i.e., the risks associated with weather and climate hazards). Here, we focus solely on physical risk.</Sidenote> can be either acute (e.g., short-lived weather events like hurricanes) or chronic (e.g., changes in baseline conditions, like rising sea levels).<Cite id='condon.2021' /> Estimating physical climate risk exposure for a particular entity — an industry, city, or business — requires an interdisciplinary process that encompasses climate science, economics, and finance, and spans multiple timescales and geographies.

## A collaborative workshop series

To better understand this diversity, the Environmental Defense Fund (EDF), the Initiative on Climate Risk and Resilience Law (ICRRL), and CarbonPlan hosted a [joint workshop](https://files.carbonplan.org/Physical-Risk-Workshop-Summary-Report.pdf) in May of 2022 on the use of physical climate information in the financial sector.

The workshop convened former regulators and domain experts across multiple communities of practice — physical climate science modeling, economics, financial risk, law, and public policy — to discuss: (1) if and how physical risk information was currently being used; and (2) current gaps, challenges, and concerns with the use of physical risk information. A key takeaway from this workshop was the need for better translation of physical climate science concepts across disciplines and more robust frameworks to guide the analytical process of risk assessment, corroborating a recent call for a new profession of “climate translation.”<Cite id='fiedler.2021' />

In the Fall of 2022, we explored this key takeaway further via a workshop series focused on extreme heat and electric utilities. The goal of these sessions was two-fold: (1) to map, in as much detail as possible, how climate data was being used throughout the analytical process of a physical climate-related financial risk assessment; and (2) to identify opportunities to improve the process of estimating and evaluating climate risk.

This report summarizes outcomes of the Fall workshops and, in particular, highlights the discussions centered around how climate-related financial risk assessments are currently conducted. This report also collates community concerns and identifies opportunities for improvement in the process of conducting and using climate-related financial risk assessments.<Sidenote> We note that this summary joins a variety of related approaches, inquiries, and guides. For example, the TCFD offers [guidance](https://www.fsb-tcfd.org/recommendations/) on assessing climate-related financial risk.</Sidenote>

## Focusing on the electric sector

Physical climate risks are relevant to the entire United States economy. Any given company is subject to specific physical risks and will be exposed to particular harms, depending on the type and location of its physical assets, infrastructure, workers, and supply chain partners.<Cite id='condon.2021' hide />

To narrow scope, the workshop focused on a particular case study about the financial risk to one sector (electric utilities) impacted by one climatic hazard (extreme heat). This focus area was chosen for two reasons.

First, electric utilities serve an important public function through the provision of essential services. Power outages pose serious health consequences, such as temperature-related illness or disruption of care for individuals who rely on electricity-dependent medical equipment.<Cite ids={['casey.2020','note.nerc']} /> Electric utilities have increasingly been impacted by extreme weather events, causing tragic loss of life and significant economic and health consequences. [For example](https://www.mckinsey.com/industries/electric-power-and-natural-gas/our-insights/why-and-how-utilities-should-start-to-manage-climate-change-risk), in 2017, Hurricane Harvey’s strong winds and record-breaking catastrophic flooding knocked down or damaged more than 6,200 distribution poles and 850 transmission structures across Houston, Texas. In California, an [investigation](https://www.theverge.com/2019/5/15/18626819/cal-fire-pacific-gas-and-electric-camp-fire-power-lines-cause) by the California Department of Forestry and Fire Protection found that the Camp Fire – California’s deadliest and most destructive wildfire on record – was caused by electrical transmission lines owned and operated by the Pacific Gas and Electric Company (PG&E).<Sidenote>PG&E [filed for Chapter 11 bankruptcy](https://www.washingtonpost.com/business/2019/01/29/pge-nations-biggest-utility-company-files-bankruptcy-after-california-wildfires/) following the 2017 and 2018 wildfire seasons.</Sidenote> More broadly, according to the [Fourth National Climate Assessment](https://nca2018.globalchange.gov/), utility infrastructure designed for historical climate conditions is more vulnerable to future weather extremes driven by climate change. Preparation for these changes, while crucial, also has associated costs. According to [recent estimates](https://www.mckinsey.com/industries/electric-power-and-natural-gas/our-insights/why-and-how-utilities-should-start-to-manage-climate-change-risk), preparing a typical Southeastern utility for the impacts of climate change will cost between $700 million and $1 billion.

Second, extreme heat has a direct relationship to utility operations. [For example](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7749027/#R11), higher temperatures not only increase electricity demand to provide cooling, but also lower the ability of transmission lines to efficiently carry power, increasing the likelihood of reliability issues, such as rolling blackouts, during prolonged heat events (e.g., heat waves).

## Soliciting perspectives

We solicited insights from more than 50 experts, including during the May 2022 workshop and through several sessions in Fall 2022. Experts represented five primary communities of practice: climate science, energy system modeling, energy economics, financial risk, and energy law and policy.<Sidenote>Each interdisciplinary workshop was convened under Chatham House Rule, meaning that we and others can freely describe the information exchanged, but without attribution to specific individuals.</Sidenote> The first workshop was structured around two sessions: (1) the current use of physical climate risk information; and (2) strategies to address gaps, challenges, and concerns that were identified from the first session. Following the first workshop, participants expressed interest in connecting to share domain expertise and to develop a more detailed understanding of how climate information is used throughout the climate-related financial risk assessment process.

From August through September of 2022, we held five small group sessions to further understand how different communities of practice conduct climate-related financial risk assessments. We also conducted a series of one-on-one interviews with experts not directly represented in one of the five primary communities listed above (e.g., insurance, asset management). In December 2022, we convened a final synthesis workshop with experts from each small group session to share interim results and receive feedback.

Our summary of patterns, gaps, and recommendations is restricted to the perspectives shared by participants in the convenings. Thus, while we attempted to sample a broad range of viewpoints, this report is not meant to be comprehensive. For example, our analysis may not be representative of all utilities, as they vary in size, geographic location, and physical assets. We also spoke primarily with utilities that have already taken significant action to address climate risks and that have, as a result, developed a model of the analytical process behind climate-related financial risk assessments<Sidenote>Financial risk assessments follow a separate (but complementary) process to that of the climate vulnerability assessments that some utilities have completed. For example, Consolidated Edison (ConEd) conducted a [study](https://www.coned.com/-/media/files/coned/documents/our-energy-future/our-energy-projects/climate-change-resiliency-plan/climate-change-vulnerability-study.pdf) evaluating its present-day infrastructure, design specifications, and procedures against expected climate changes to better understand its vulnerability to climate-driven risks following Hurricane Sandy.</Sidenote>, and we had more participants from academia than from industry.<Sidenote> As an example, we talked with academic researchers who study insurance and utility financial decision-making, but did not speak with any employees of insurance companies or enterprise risk management.</Sidenote>

## Conceptual model

We synthesized participant feedback and learnings from the workshops into a conceptual model (Figure 1) that documents the key actors (represented as boxes) involved in the physical climate-related financial risk assessment process, the kinds of information (number labels on arrows) each actor uses or produces, and participant concerns about that flow of information. Because this type of risk assessment is an emerging exercise, our goal was to develop a high-level map of the current analytical process and to identify strengths and potential areas for improvement.

<Figure>
  <FlowChart />
  <FigureCaption number={1}>
    The process and actors contributing to a climate-related financial risk
    assessment. Toggle between tabs to see the{' '}
    <InlineSecondaryCode>INFORMATION</InlineSecondaryCode> shared between
    communities, as well as their main{' '}
    <InlineSecondaryCode>CONCERNS</InlineSecondaryCode>. Click the numbered
    circles to reveal more detail. A solid arrow indicates an “effective”
    transfer of information that could be confirmed by multiple actors (e.g.,
    one community referenced using information generated by a different
    community). A dashed arrow indicates that a participant shared information
    but was unsure of its influence (e.g., in the case of risk assessments
    influencing regulatory decisions), and a dashed circle denotes that we were
    unable to confirm details about the kind of information being transferred.
  </FigureCaption>
</Figure>

## Key current challenges in the climate risk assessment process

Within the framing of our conceptual model, we identified three patterns that characterize challenges participants currently see in the analytic process of conducting a climate-related financial risk assessment.

### 01 — Actors use different sources of climate information

Workshop participants characterized two modes of engaging with climate information. The first, covering the left-most boxes of Figure 1, involves direct engagement between a utility and domain experts from either the climate science or energy system modeling communities. These relationships support the analysis and interpretation of publicly available climate products, including the Coupled Model Intercomparison Project (CMIP) datasets and summary reports (e.g., National Climate Assessment). This kind of engagement is the key contributor to the climate vulnerability assessments provided to, and filed before, regulators.

In contrast, the remainder of Figure 1 depicts little direct engagement with climate and/or energy experts. While these actors (e.g. financial researchers, insurance companies, ratings agencies) also ingest publicly available summary reports, the core analytical process leverages proprietary data from private companies. When using the private analytics products, the financial actors have little to no direct engagement with climate science expertise.

Actors across multiple communities of practice indicated that climate information was valuable, but that specific areas of improvement would be helpful. Many indicated that more standardization across data sources would be useful, given that different sources can project different climate risks. Climate scientists cited their concerns about potential misapplications of climate data products (e.g., due to inadequate spatial and/or temporal resolution). Financial actors expressed related interest in publicly available tools, but said they defaulted to products from private analytics providers (e.g., climate risk scores), which they found more accessible.<Sidenote>Recently, there has been rapid growth of these private analytics providers as [companies increasingly assess climate risks](https://prospect.org/economy/2023-04-12-rise-climate-rating-agencies/) to their business. Many of these providers offer asset-level climate information (e.g., localized to a building at a specific street address) in a format and scope designed for financial applications. Because of their business model, climate risk scores are [typically developed in “black box” settings](https://www.nature.com/articles/s41558-020-00984-6) using proprietary methods that commonly [lack peer review or independent verification](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4396826).</Sidenote> Several financial actors in the workshops expressed some hesitation in fully relying on the climate information from these analytics providers due to a lack of transparency around their methods.

<Figure>
  <DataSources />
  <FigureCaption number={2}>
    Reported sources of climate information used across each community of
    practice. The Climate Science, Energy System Modeling, and Energy Economics
    communities of practice reported using raw climate model output and
    reanalysis data for their analysis, while Financial Risk and Energy Law and
    Policy communities of practice reported a reliance on peer-reviewed
    literature for their climate information and/or third-party scores.
  </FigureCaption>
</Figure>

### 02 — Institutional inertia can constrain full integration of available data

Capacity constraints and institutional inertia can impact the utilization of climate data. For example, utility staff in the workshops reported often using historical climate data rather than future projections, because the latter tend to require more substantial resources to access and understand. Legal experts and former regulators also highlighted that agencies, particularly local public utility commissions (PUCs), may have capacity constraints and rely on longstanding norms – all of which suggests that they could benefit from additional, dedicated resources. While a more holistic, systemic approach is likely needed to ensure that physical risk assessment is comprehensively integrated across utilities — for example, through the enforcement of risk assessment requirements — alleviating capacity and resource concerns could be additionally useful.<Cite id='webb.2021' />

### 03 — Need for more standardized approach to goal-setting

A final consistent theme was the importance and under-representation of goal setting, including the identification of potentially differing objectives. Starting with clear goals can help ensure selection of appropriate data. Well-structured goal setting can also help clarify what risk means for different actors and who ultimately bears financial risk. For example, a financial analyst may seek to understand the likelihood of a loss of investment principal, a utility may seek to reduce the likelihood of blackouts, and a utility customer may seek reliable service and affordable energy rates. All of these actors experience the same extreme event, and all have an interest in a durable, functioning utility system, but they bear the costs differently and view risk through the lens of their particular mission, role, and authority. Multiple workshop participants suggested that in this case study, electricity customers could ultimately bear most, if not all, of the financial risk because of the way utility revenues and costs are structured (e.g., costs are passed on to the customer through rate increases).

## Recommended interventions for key gaps

Participants were asked to identify key gaps within the current climate-related financial risk assessment process that could be addressed by scientific, regulatory, or operational interventions. Here we describe three key gaps and associated recommendations.

### 01 — Where scientific research could help

Several areas emerged where additional scientific research could improve the risk assessment process. First, participants noted that evaluating risks to a singular asset or utility in isolation (e.g., analyzing a utility’s individual resilience) is easier compared to performing a broader systems analysis (e.g., analyzing a utility’s resilience within the context of the grid). Participants also noted that although climate projections can enable long-term planning, their underlying uncertainties, particularly regarding future policy developments, are not always fully captured. Even when models do evaluate uncertainty, it may not be well understood through the analytical chain. Additionally, participants highlighted that global climate models may underestimate climate damages because they do not account for comprehensive financial impacts. Any modeling effort that ignores a hazard effectively sets the risk of that hazard to zero, a concern that corroborates recent academic literature on so-called “missing climate risks.”<Cite id='rising.2022' /> All of the above concerns would benefit from increased investment in scientific research aimed toward producing high-resolution, publicly available data products and open-source methods.

### 02 — Where regulatory guidance and intervention could help

Participants identified several areas where regulatory activity could help evolve the risk assessment process. Some utility regulators may lack the tools and expertise needed to effectively digest climate change information, in part due to under-developed assessments of system-level vulnerabilities to physical climate risks. However, some participants indicated that this may be a temporary concern, and that regulatory bodies would begin incorporating vulnerability assessments into their decision-making process.

Participants also noted that many regulatory bodies currently provide limited guidance on what kinds of climate data should be used or avoided. For example, the energy systems community highlighted inconsistencies in the choice of emissions scenario, or how to even make that selection (e.g., RCP4.5 or RCP8.5). Some advocated for top-down recommendations from regulators (e.g., through governmental or coordinated decision-making), while others recommended selecting scenarios on a case-by-case basis depending on the outcomes and/or thresholds relevant to the system in question. As another example, financial participants expressed caution around relying on proprietary, black-box climate information, while at the same time acknowledging that these products may provide value, particularly since the data is formatted in ways that are familiar and usable for analysis. While participants often disagreed on specific recommendations, they generally agreed that regulators could help alleviate discrepancies in the risk-assessment process by providing guidance to better standardize and improve analysis.

### 03 — Where operational advances could help

Energy and utility representatives noted that while climate science is increasingly sophisticated and granular, operationalizing that science necessarily takes time to implement. As a concrete example, utilities typically rely on a baseline reference period of historical climate information to understand how their system has handled observed stresses to demand, generation, and transmission. The scientific community agrees that an older (e.g., mid-late 20th century) period is less representative of the current climate (e.g., extreme heat events have intensified). However, updating that selected period in operations can be challenging, as can incorporating projections of future climate conditions.<Sidenote> As an example of a success story, we noted one hydropower utility that shifted the historical period they use for evaluating operations from the 1929-2008 timeframe to 1989–2018 for streamflow calculations. Incorporating climate change information into [water management decision-making](https://www.science.org/doi/10.1126/science.1151915) has been a topic of conversation for decades. For challenges specific to the electric sector, see Box 5 in Webb et al above.</Sidenote>

Energy modelers additionally noted a need for more coordination between system planners and executives/financial decision makers. Separately, financial actors highlighted concerns about data constraints and the potential misuse of data by private analytics providers. Energy economists noted a similar pattern, citing that both downstream users and commissioners of climate risk assessments often underestimate the amount of work needed to interpret climate datasets and make them usable, increasing the likelihood of misuse. These concerns may result in otherwise avoidable errors during the utility planning and risk assessment processes, and are likely best addressed through deeper, iterative engagement with actors throughout the analytic chain.

## Relevance to other sectors

Many of the observations and insights in this report are specific to the case of electric utilities and extreme heat. We suspect, however, that the two competing forms of climate data usage we observed — financial actors using private data products and academic and advocacy actors using publicly available data products — may reappear in other sectors. We also anticipate that the three areas of potential intervention — scientific, regulatory, and operational — may apply more broadly. Similar assessments in other sectors could prove useful. We recommend that any such future work identifies precisely who bears financial risks for climate impacts, and provides clarity around the varied and often conflicting goals of different actors involved in climate-related financial risk assessments.

<Endnote label='Acknowledgments' divider>

We want to thank the more than 50 participants in our convenings for sharing their expertise and time. We thank Michael Panfil, Stephanie Jones, Aurora Barone, Eleanor Dyan Garcia, Danny Cullenward, and Jeremy Freeman for helpful feedback and guidance. Julie Vano and Jordan Kern provided meaningful informal review.

</Endnote>

<Endnote label='Credits'>

Oriana, Jeff, and Sadie planned and executed the workshops, analyzed the collected insights, and wrote the article.

Please cite this web article as:

O Chegwidden, J Fralick, S Frank (2023) “A summary report on climate-related financial risk assessment" CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/climate-risk-assessments](https://carbonplan.org/research/climate-risk-assessments)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan received [no specific financial support](https://carbonplan.org/funding) for this work.

Article text and figures made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

</Endnote>
