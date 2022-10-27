---
id: stripe-2020-insights
version: 1.1.0
color: secondary
title: Insights from our first project reports
authors:
  - Danny Cullenward
  - Joseph Hamman
  - Jeremy Freeman
date: 05-18-2020
card: stripe-2020-insights-gray
background: articles/000/road
quickLook: Project reports and lessons learned from analyzing proposals for Stripe’s 2020 Negative Emissions Purchase
summary: We analyzed project proposals submitted for Stripe's 2020 Negative Emissions Purchase. Read this article or explore our database of project reports for our main takeaways and lessons learned.
icon: articles/000/road-small
links:
  - label: Database tool
    href: /research/cdr-database
components:
  - name: InlineCheck
    src: ../../components/inline-check.js
  - name: Metrics
    src: ./components/metrics.js
  - name: Permanence
    src: ./components/permanence.js
  - name: Table
    src: ./components/table.js
---

At CarbonPlan we analyze carbon removal projects, programs, and technologies. We believe that carbon removal (or "negative emissions") will play an important role in addressing the climate crisis, and we want to help engender a culture of openness, transparency, and accountability. Our hope is that sharing data and insights can benefit the field as a whole — to complement the work of the inventors, scientists, entrepreneurs, and activists who are making climate solutions a reality.

In March 2020, we partnered with Stripe to perform our first independent analysis of carbon removal projects. As part of its [Negative Emissions Purchase](http://stripe.com/blog/first-negative-emissions-purchases), Stripe solicited a wide range of project proposals, and to help encourage transparency in the field, they required that all proposals be made public. We received early access to these now-public proposals to perform an independent analysis, the results of which we are releasing to launch our public database of project reports.

We are grateful to Stripe for encouraging transparency, and to the many organizations and individuals who took the time to prepare these public applications. Making this information available to all offers the broader climate community a chance to grow and improve over time.

This article summarizes our major takeaways from our analysis. For additional detail, check out our [project reports database](https://carbonplan.org/research/cdr-database) and the [terms of our engagement](#terms-of-engagement) with Stripe. Please note that this is independent work that represents only CarbonPlan’s views, not those of Stripe or any other organizations.

## What we did

We performed an independent analysis of the 24 project proposals. Faced with a wide range of projects spanning everything from soil carbon management to direct air capture, we took a broad, comparative approach.

Our goals were to harmonize metrics and concepts across a range of projects; to analyze and validate claims made by projects where possible, based on the best available science and data; and to better understand challenges and opportunities facing organizations seeking climate solutions. As a result of our focus on cross-cutting issues, we played a different role than the domain experts whom governments and companies typically engage to evaluate project proposals in specific subject-matter areas.

<PullQuote>
  We are making public all analysis, methods, and commentary from our process
</PullQuote>

We are making public all analysis, methods, and commentary from our process because we want our reports to help all interested organizations — including researchers, project proponents, sponsor organizations — learn about the field and improve outcomes in future iterations. While we appreciate that confidential analysis is common (and sometimes necessary) in climate programs, it can also reduce transparency and lead to duplicate work. Our work aims to address both challenges, and to that end, we’re committed to growing and improving our public database of project reports over time.

Making our work public is also an opportunity to reflect on what can and cannot be said with confidence in the complex and nascent space of carbon removal. The gaps we’ve identified will help us and others develop open source methods for more detailed analyses of projects and technologies in future programs, and we welcome feedback on our process.

### How we analyzed projects

After multiple rounds of internal discussion, the CarbonPlan team decided on seven harmonized metrics for analyzing and comparing projects:

<Figure>
  <Metrics />
</Figure>

For the first four metrics — mechanism, volume, negativity, and permanence — we attempted to independently validate projects’ claims. We gave projects a <InlineCheck/> when we could validate a claim with reasonable confidence. Where we didn’t feel confident about validating claims, we left the entry blank, generally erring on the side of caution and respectfulness. We also indicated what kind of additional information would be useful in comments. As we develop better methods, and as we and the community learn more about these and other projects, we expect to be able to validate more claims with confidence.

An additional key point for the first metric — mechanism — is that some projects do not currently remove carbon dioxide from the atmosphere. Rather, some avoid emissions that would otherwise occur, including by sourcing and transforming existing biogenic or industrial emissions into more stable storage. These projects could all become a component of a carbon removal system in the future, however. For example, a project that sequesters CO₂ from an industrial waste stream today could begin sourcing CO₂ from direct air capture or biogenic energy tomorrow. We try to clearly point out each of these cases in our reports, and we plan to more thoroughly explore this nuanced distinction in a future post.

For the fifth metric — price — we report what projects offer. We did not attempt to validate this metric because the price at which a project offers its product speaks for itself, at least in terms of total price. The stated price in terms of $/tCO₂ depends on several other factors, however, including projects’ estimated volume. We encourage readers to interpret these data in the context of other project attributes.

The last two metrics — additionality and specificity — reflect our attempt to qualitatively assess these cross-cutting issues. The importance of additionality depends on the motivation for funding. As discussed further below, this metric is less important when funding decisions are oriented around encouraging innovation, rather than carbon offsetting. Specificity reflects the degree to which there is enough detail in project proposals, publications, or other materials to validate the rest of our metrics.

Along with summary metrics, the reports include “notes” with detailed information taken directly from project proposals as well as “comments” with our analysis and interpretation.

See our [methods](https://carbonplan.org/reports/methods) for full details on our approach.

## Our key takeaways

There’s a lot of information in our [project reports](https://carbonplan.org/reports). We’ll summarize three insights here.

### More questions than answers

Perhaps the most important finding is how often we found ourselves unable to confidently and independently validate metrics.

We were able to assign a <InlineCheck/> for many projects on mechanism, for which we generally have existing published literature and data, and in several cases also on permanence. We were less often able to assign a <InlineCheck/> on volume or negativity, reflecting the additional complexity of these dimensions.

<Figure>
  <Table />
  <FigureCaption number={1}>
    Each column is a metric, and each row shows our ratings for an individual
    project. Colors represent project categories: <Green>forests</Green>,{' '}
    <Orange>soil</Orange>, <Yellow>biomass</Yellow>,{' '}
    <Purple>direct air capture</Purple>, <Grey>mineralization</Grey>, and{' '}
    <Teal>ocean</Teal>. Click the arrow in each row to see the report for that
    project.
  </FigureCaption>
</Figure>

<PullQuote>
  The complexity of carbon removal solutions across so many technologies
  presents a challenge for any one organization to evaluate
</PullQuote>

The absence of a <InlineCheck/> should not necessarily be interpreted as a critique. Most of the time, it reflects a lack of information or certainty. Over time, we intend to develop our capacity to reach more definitive answers across our metrics, and hope that as a community we learn more about the science and data underlying these projects. We also offer suggestions below for how future procurement processes can elicit more useful information from projects for the purpose of analysis. Fundamentally, however, the complexity of carbon removal solutions across so many technologies presents a challenge for any one organization to evaluate.

## The permanence gap

Our second insight relates to the role of “permanence,” which is the timeframe over which carbon removed from the atmosphere stays put in some other reservoir, such as in soils, forests, or minerals.

Carbon dioxide remains active in the atmospheric carbon cycle for hundreds to thousands of years. Because CO₂ pollution today is effectively permanent over the time scale of civilization, the climate benefits of carbon removal strategies depend on their permanence.

The projects we analyzed clustered into two distinct groups: those with permanence horizons that match the scale of the climate problem, and those that don’t. For example, projects seeking to store CO₂ underground in geologic reservoirs or in stable mineralized form have a plausible claim to carbon removal on the scale of 1000 years or more. Biochar projects, too, are likely to retain a significant fraction of their carbon in stable form for hundreds of years or more. In contrast, others that seek to store carbon in soils or forests tend to claim much shorter time horizons — some as few as one year, but more commonly between 10 and 100 years.

<Figure>
  <Permanence />
  <FigureCaption number={2}>
    Each point shows the price and permanence for an individual project. Colors
    represent project categories: <Green>forests</Green>, <Orange>soil</Orange>,{' '}
    <Yellow>biomass</Yellow>, <Purple>direct air capture</Purple>,{' '}
    <Grey>mineralization</Grey>, and <Teal>ocean</Teal>.
  </FigureCaption>
</Figure>

Whether temporary storage can be made reliable over longer time periods turns on whether permanence risks are physical or socioeconomic. We are optimistic that physical risks can be well characterized by rigorous science. For example, projects storing carbon in forests need to promise that these carbon stocks will remain. Quantitative analysis can help predict the vulnerability of a specific location or species in a changing climate for risk factors like fire, drought, or insect-related tree mortality.

Socioeconomic risks present a more vexing challenge. Long-term commitments to carbon storage in forests or soils require restricting landowner actions to prevent future changes to timber harvesting regimes or soil management practices. Many projects use long-term contracts — some for as long as 100 years — but over these timeframes there are significant risks of default or bankruptcy.

Permanent carbon storage in these systems ultimately depends on the political and economic stability of private contracts and government policy regimes operating over long time horizons. Coordinated large-scale programs could potentially meet this ambition if they start by recognizing the challenges faced by past efforts and engaging all relevant stakeholders.

## Evaluation strategies depend on program motivation

Our third and final insight concerns the motivation behind carbon removal. Is the goal to offset emissions that can’t be reduced, or to support technology with the potential for impacts at scale? The two goals are often in tension and require different metrics for evaluation.

Carbon offsetting focuses on the climate credit to be gained from an investment in a specific project. Climate benefits, in turn, are claimed relative to a counterfactual scenario — that is, what would happen without the investment. Without a clear demonstration of a causal link between a prospective investment and a change in behavior, an offset might not produce real climate benefits and a buyer looking to assert a claim of carbon neutrality won’t get what she paid for.

Evaluating additionality is difficult because the counterfactual scenario against which climate benefits are calculated can only be estimated, never observed. To facilitate evaluation, analysis needs to focus on specific claims about a project's counterfactual scenarios, competing alternatives, and the detailed economics of its technologies, associated commodity markets, and main competitors.

If this sounds like a lot, it is! Unfortunately, the history of project-level additionality claims is not a positive story. Project proponents know the most about their own activities, including how feasible their work might be without outside investment — an information asymmetry that can reduce transparency. We analyzed several cases where additionality appears to be a significant concern and provide commentary to describe the issues we encountered. Because additionality is so complicated, we believe that rigorous assessment requires careful analysis, extensive data, and transparency.

<PullQuote>
  A long-term investment orientation can help avoid some of the most challenging
  features of carbon offsets
</PullQuote>

The second motivation, technological change, is different. These investments are primarily concerned with unlocking the potential for solutions that could work at scale. To assess this potential, a sponsor organization could center its questions around the performance of a given technology, benchmarks to measure its anticipated improvements, and how investment can unlock either new entry markets or a path to cost reductions.

A long-term investment orientation can help avoid some of the most challenging features of carbon offsets. Additonality is essential to justify a carbon offset, but not particularly relevant to accelerating technological change. In fact, the more a technology proponent can say about what it has recently accomplished as a justification for what it aims to do next, the better — yet describing a prospective investment on the basis of what was recently accomplished is a red flag in the world of offsets and additionality.

We are mindful that different organizations might adopt different paradigms, or even pursue multiple approaches in parallel. Low scores on additionality are not a concern when the purpose is to advance technology, but high scores should be a primary consideration if the goal is carbon offsetting.

## Lessons for future procurements

We end with two brief thoughts about what comes next.

### Sponsor organizations: Focus project procurements

The blessing and the curse of carbon removal is that no one strategy is like another. The wide range of technologies and approaches presents challenges for analysis and evaluation.

We recommend that, where possible, procurement programs should focus on specific technologies or sectors of carbon removal. While some data can be collected from all projects, the most important issues depend on specific technology performance characteristics or socioeconomic contexts, and some comparisons may only be possible within a category.

If an organization wants to look broadly across multiple sectors, parallel tracks with distinct proposal requirements might be preferable. A focus on land management projects, for example, would need a targeted solicitation designed with input from land owners, project developers, and experimental scientists carefully characterizing both benefits and risks. Such a program would look different not only because project evaluation would require different information, but also because applicants would have distinct backgrounds, expertise, and capacity.

### CarbonPlan: Develop new methods for project areas

To improve our own analysis capabilities, we are developing open source methods for evaluating projects on a technology-by-technology basis in close collaboration with the academic community. Examples include models of direct air capture project cost and scale (with Jennifer Wilcox) and models for evaluating forest carbon removal potential and physical reversal risks (with Bill Anderegg). These kinds of models will enable more systematic analysis and comparison within and across project categories, as well as identify information that sponsors could collect from proposals to facilitate comparison and evaluation.

<Endnote label='Credits' divider>

Danny wrote the first draft of the article. Joe and Jeremy designed and implemented the graphics. All authors contributed to analyzing the data and writing the article.

Please cite as:

D Cullenward, J Hamman, J Freeman (2020) “Insights from our first project reports” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/stripe-2020-insights](https://carbonplan.org/research/stripe-2020-insights)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan and Stripe entered into an agreement in which Stripe shared the project proposals it received in response to its 2020 Negative Emissions Purchase in advance of their public release. We provided feedback to Stripe on its program and were compensated by Stripe for our time. Our work was independent and Stripe did not exercise any control over it. CarbonPlan is solely responsible for the content of its project reports and this writeup, which do not represent the views of Stripe or any other other organizations.

Article text and figures made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/). Implementation of the [CDR Database](https://github.com/carbonplan/cdr-database) made available under an [MIT license](https://github.com/carbonplan/cdr-database/blob/main/LICENSE). Contents of the CDR Database made available under a [CC-BY 4.0 International](https://creativecommons.org/licenses/by/4.0/) license.

</Endnote>
