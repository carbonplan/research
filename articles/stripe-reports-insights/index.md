import Article from '../../components/article'
import Question from './components/icons/question'
import Check from './components/icons/check'
import Ex from './components/icons/ex'
import Exclamation from './components/icons/exclamation'
import Permanence from './components/permanence'
import Table from './components/table'
import Metrics from './components/metrics'

export const meta = {
  id: 'stripe-reports-insights',
  summary: 'Project reports and lessons learned from analyzing proposals for Stripe’s 2020 Negative Emissions Purchase',
  quotes: [
    {
      position: 850,
      text: 'We are making all our analysis, methods, and commentary from our process public'
    },
    {
      position: 3400,
      text: 'The complexity of carbon removal solutions across so many technologies presents a challenge for any one organization to evaluate'
    },
    {
      position: 1700,
      text: 'Evaluating additionality is difficult because the counterfactual scenario against which climate benefits are calculated can only be estimated, never observed'
    }
  ]
}

# Insights from our first set of project reports

At CarbonPlan we evaluate carbon removal projects, programs, and technologies. We believe that carbon removal (or “negative emissions”) will play an important role in addressing the climate crisis, but that success requires a culture of rigor, transparency, and accountability. For us, getting the details right matters — as it does for the many inventors, scientists, entrepreneurs, and activists who work to make climate solutions a reality. 

In March 2020, we partnered with Stripe to perform our first independent analysis of carbon removal projects. As part of its [Negative Emissions Purchase](), Stripe solicited a wide range of project proposals, and to help encourage transparency in the field, they required that all proposals be made public. We received early access to these proposals to perform an  independent analysis, the results of which we are releasing to launch our public database of project reports.

We are grateful to Stripe for prioritizing transparency, and to the many organizations and individuals who prepared these public applications. Making this information available offers the broader climate community a chance to grow and improve over time.

This article summarizes our major takeaways from this effort. For additional detail, check out our [project reports](/reports) and the [terms of our engagement](#terms-of-engagement) with Stripe. Please note that this is independent work that only represents CarbonPlan’s views, not those of Stripe or any other organizations. 

## What we did

We performed an independent analysis of the 24 project proposals Stripe received. Faced with a wide range of projects spanning everything from soil carbon management to direct air capture, we took a broad, comparative approach. 

Our goals were to harmonize metrics and concepts across a range of projects; to analyze and validate claims made by projects where possible based on the best available science and data; and to better understand challenges and opportunities facing organizations seeking climate solutions. As a result of our focus on cross-cutting issues, we played a different role than the domain experts who  governments and companies typically engage to evaluate project proposals in specific subject-matter areas.

We are making all our analysis, methods, and commentary from our process public because we want our reports to help all interested organizations — researchers, project proponents, sponsor organizations — learn about the field and improve outcomes in future iterations. While we appreciate that confidential analysis is common (and sometimes necessary) in climate programs, it can also reduce transparency and lead to duplicate work. Our work aims to address both challenges, and to that end, we’re committed to growing and improving our public database of project reports over time.

Making our work public is also an opportunity to reflect on what can and cannot be said with confidence in the complex space of carbon removal. The gaps we’ve identified will help us develop open source methods for more detailed analyses of projects and technologies in future programs.

### How we analyzed projects

After multiple rounds of internal discussion, the CarbonPlan team decided on seven harmonized metrics for analyzing and comparing projects:

<Metrics/>

For the first four metrics — mechanism, volume, negativity, and permanence — we attempted to  independently validate projects’ claims. For each of these metrics, we gave projects a <Check closed={true}/> when we could validate their claims with reasonable confidence, a <Question closed={true}/> when we couldn’t, and an <Ex closed={true}/> when we found credible information that contradicted project proposals.

For the fifth criterion, cost, we report what projects offer. We decided not to evaluate this criterion because the price at which a project offers its product speaks for itself, at least in terms of total cost. The stated price in terms of $/tCO2, however, depends on other factors, including the precision of the project’s estimated volume, additionality, and transparency. Because no project earned top scores on all of these metrics, we advise readers to be cautiously skeptical of self-reported prices in terms of $/tCO2. Where possible, we indicated whether projects’ stated costs were commensurate with projects of a similar type.

The last two metrics — additionality and transparency — reflect our best judgment about these cross-cutting issues of project quality. 

Along with summary metrics, the reports include “notes” with detailed information taken directly from project proposals as well as “comments” with our analysis and interpretation for each metric. In a few instances, we flagged a project with an <Exclamation closed={true}/> on these items to indicate an important issue warranting further examination. 

A critical point for the first metric — mechanism — is that some projects do not currently remove carbon dioxide from the atmosphere. Rather, some avoid emissions that would otherwise occur, including by sourcing and transforming existing biogenic or industrial emissions into more stable storage. These projects are still included in our database, and were presumably included in Stripe’s program, because they all could, in the future, become a component of a carbon removal system. For example, a project could begin sourcing CO2 from direct air capture rather than from an industrial waste stream. We try to clearly point out each of these cases in our reports, and we plan to more thoroughly explain this distinction in a future post.

See our [methods](/reports/methods) for full details on our approach.

## Our key takeaways

There’s a lot of information in our [project reports](/reports). We’ll summarize three insights here. 

### More questions than answers

Perhaps the most important finding is how often we found ourselves unable to confidently, independently validate projects’ claims.

Nearly all projects ended up with at least one <Question closed={true}/> with patterns that vary by project and metric. Most projects clearly identified their carbon removal mechanism(s), but we assigned a <Question closed={true}/> for nearly all claimed volumes. Only a handful of projects ended up with a <Check closed={true}/> for the majority of metrics, as well as high scores on either additionality or transparency. 

<Table/>

The <Question closed={true}/> is the most common result because it's our default stance. We replaced a <Question closed={true}/> with a <Check closed={true}/> or <Ex closed={true}/> only when we had a reasonable basis for independently evaluating a claim. As a result, a <Question closed={true}/> should not be interpreted as a criticism: all it reflects is our inability to confidently validate a claim on the basis of the project application and our independent research efforts. 

Over time, we intend to develop our capacity to reach more definitive answers across our metrics. We also offer suggestions below for how future procurement processes can elicit more useful information from projects for the purpose of analysis. Fundamentally, however, the complexity of carbon removal solutions across so many technologies presents a challenge for any one organization to evaluate. 

### The permanence gap

Our second insight relates to the role of “permanence,” which is the timeframe over which carbon removed from the atmosphere stays put in some other reservoir, such as in soils, forests, or minerals. 

Carbon dioxide remains active in the atmospheric carbon cycle for hundreds to thousands of years. Because CO2 pollution today is effectively permanent over the time scale of civilization, the climate benefits of carbon removal strategies depend on their permanence.  

The projects we analyzed clustered into two distinct groups: those with permanence horizons that match the scale of the climate problem, and those that don’t. For example, projects seeking to store CO2 underground in geologic reservoirs or in stable mineralized form have a plausible claim to carbon removal on the scale of 1000 years or more. Biochar projects, too, are likely to retain a significant fraction of their carbon in stable form for hundreds of years or more. In contrast, others that seek to store carbon in soils or forests tend to claim much shorter time horizons — some as few as one year, but more commonly between 10 and 100 years. 

<Permanence/>

Projects with shorter permanence horizons may have significant value. Many are associated with important environmental co-benefits to water quality, agricultural productivity, or species conservation. Shorter carbon removal commitments can also buy time to scale up more permanent solutions — although the challenge of adding to tomorrow’s decarbonization burden is no comfort, given the scale and rate of change already required. 

Whether temporary storage options can be made reliable over longer periods of time turns on whether permanence risks are predominantly physical or socioeconomic. We are optimistic that physical risks can be reasonably well characterized by rigorous science. For example, projects storing carbon in forests need to promise that these carbon stocks will remain. Quantitative analysis can help predict the vulnerability of a specific location or species in a changing climate for risk factors like fire, drought, or insect-related tree deaths. 

In contrast, socioeconomic risks present a more vexing challenge. Long-term commitments to carbon storage in forests or soils require restricting landowner actions to prevent future changes to timber harvesting regimes or soil management practices. Many projects use long-term contracts — some for as long as 100 years — but over these kinds of timeframes there are significant risks of default or bankruptcy. 

Permanent carbon storage in these systems ultimately depends on the political and economic stability of private contracts and government policy regimes operating over long time horizons. While few human institutions — public or private — have achieved these kinds of results, coordinated large-scale programs have the potential to mitigate some of these concerns if they start by recognizing the challenges of past efforts and engaging all relevant stakeholders. 

### Evaluation strategies depend on program motivation

Our third and final insight concerns the motivation behind carbon removal. Is the goal to offset emissions that can’t be reduced, or to support technology with the potential for impacts at scale? The two goals are often in tension and require different metrics for evaluation. 

Carbon offsetting focuses on the climate credit to be gained from an investment in a specific project. Climate benefits, in turn, are claimed relative to a counterfactual scenario — that is, what would happen without the investment. Without a clear showing that there is a causal link between a prospective investment and a change in behavior, an offset might not produce real climate benefits and a buyer looking to assert a claim of carbon neutrality won’t get what she paid for. 

Evaluating additionality is difficult because the counterfactual scenario against which climate benefits are calculated can only be estimated, never observed. To facilitate evaluation, analysis needs to focus on specific claims about projects’ counterfactual scenarios, competing alternatives, and the detailed economics of projects’ technologies, associated commodity markets, and main competitors. 

If this sounds like a lot, it is! Unfortunately, the history of project-level additionality claims is not a positive story. Project proponents know the most about their own activities, including how feasible their work might be without outside investment — an information asymmetry that can reduce transparency. We analyzed several cases where additionality appears to be a significant concern and provide commentary to describe the issues we encountered. As a result of the complexity of evaluating additionality risks, we believe sponsor organizations should be skeptical about third parties that claim to automatically resolve this problem with proprietary methods. 

The second motivation, technological change, is different. These investments are primarily concerned with unlocking the potential for solutions at scale. To assess this potential, a sponsor organization should center its questions around the performance of a given technology, benchmarks to measure its anticipated improvements, and how investment can unlock either new entry markets or a path to cost reductions. 

A long-term investment orientation can help avoid some of the most challenging features of carbon offsets. Additonality is essential to justify a carbon offset, but not particularly relevant to accelerating technological change. In fact, the more a technology proponent can say about what it has recently accomplished as a justification for what it aims to do next, the better — yet describing a prospective investment on the basis of what was recently accomplished is a major red flag in the world of offsets and additionality. 

We are mindful that different organizations might adopt different paradigms, or even pursue multiple approaches in parallel. Low scores on additionality are not a concern when the purpose is to advance technology, but should be a primary consideration if the goal is carbon offsetting. 

## Lessons for future procurements

We end with two brief thoughts about what comes next. 

### Sponsor organizations: Focus project procurements 

The blessing and the curse of carbon removal is that no one strategy is like another. The wide range of technologies and approaches presents challenges for analysis and evaluation. 

We recommend that, where possible, procurement programs should focus on specific technologies or sectors of carbon removal. While some data can be collected from all kinds of projects, the most important issues depend on specific technology performance characteristics or socioeconomic contexts. 

If an organization wants to look broadly across multiple sectors, parallel tracks with distinct proposal requirements might be preferable to an open call. A focus on land management projects, for example, would need a targeted solicitation designed with a distinct set of  stakeholders in mind, including land owners, project developers, and experimental scientists carefully characterizing both benefits and risks. A land-focused solicitation would look different from a program on mineralization and geologic sequestration not only because project evaluation would require different information, but also because applicants would have distinct backgrounds, expertise, and capacity. In general, a more focused process will elicit better data and enable richer analysis.

### CarbonPlan: Develop new methods for project areas 

To improve our own analysis capabilities,, we are developing open source methods for evaluating projects on a technology-by-technology basis in close collaboration with the academic community. Examples include models of direct air capture project cost and scale (with Jennifer Wilcox) and models for evaluating forest carbon removal potential and physical reversal risks (with Bill Anderegg). These kinds of detailed models will enable more systematic analysis and comparison within and across project categories, as well as identify information sponsors could collect from proposals to facilitate comparison and evaluation. 

## Terms of engagement

CarbonPlan and Stripe entered into an agreement in which Stripe shared the project proposals it received in response to its 2020 Negative Emissions Purchase in advance of their public release. CarbonPlan was compensated by Stripe for our time. We provided feedback to Stripe on both individual projects and overall program design, but our work was independent and Stripe did not exercise any control over it. CarbonPlan is solely responsible for the content of its project reports and this writeup, which do not necessarily reflect the views of Stripe or any other other organizations.  

export default ({ children }) => <Article meta={meta}>{children}</Article>
