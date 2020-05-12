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
  summary: 'Project reports and lessons learned from our first external engagement for Stripe’s 2020 Negative Emissions Purchase',
  quotes: [
    {
      position: 700,
      text: 'We are making our analysis, methods, and commentary public'
    },
    {
      position: 2900,
      text: 'The complexity of carbon removal solutions across so many technologies presents a challenge for any one organization to evaluate'
    },
    {
      position: 1200,
      text: 'Permanent carbon storage in these systems ultimately depends on the political and economic stability of private contracts and government policy regimes operating over long time horizons'
    }
  ]
}

# Insights from our first set of project reports

One of our core focus areas at CarbonPlan is evaluating carbon removal projects, programs, and technologies. We believe that carbon removal and negative emissions will play an important role in addressing the climate crisis, but that success requires a culture of transparency and accountability. For us, getting the details right is critical — as it is for the many inventors, entrepreneurs, and activists who work to make climate solutions a reality. 

In March 2020, we partnered with Stripe for our first external engagement to help evaluate proposals for a first round of funding under their [Negative Emissions Purchase](). Notably, Stripe agreed at the start of its process to make its proposals public — a decision that allowed us to begin building a public database of reports. We are grateful to the organizations and individuals who took the time to prepare these public applications, which offer the broader climate community a chance to grow and improve over time.

This article describes what we did and what we learned in the process. For additional detail, check out our [project reports](https://carbonplan.org/reports) and the [terms of our engagement](#terms-of-engagement) with Stripe. Please note that this work represents CarbonPlan’s views, and not necessarily those of Stripe or any other organizations. 

## What we did

We reviewed 24 individual project proposals in parallel to a group of subject-matter experts Stripe retained to help evaluate the field. What we did was similar to these expert reviewers in many respects, but with two key differences.

First, we decided to tackle the full set of proposals, not just those from particular technology areas. Governments and companies usually engage experts for feedback when evaluating proposals, but most experts weigh in on only a subset of domains. We aimed to complement the effort of Stripe’s reviewers by taking a broad, comparative approach to identify issues emerging across the field. Our goals were to better understand the challenges facing organizations that are looking for climate solutions and identify opportunities for improvement.

Second, we are making our analysis, methods, and commentary public. In a typical climate program, outside experts provide exclusively confidential feedback. We appreciate the benefits of confidential advising and understand that it may be necessary in some contexts, but it can also fragment knowledge, reduce transparency, and lead to duplicate work. Our reports are different. Rather than provide one-time confidential feedback to improve a single procurement process, we want our reports to help all interested organizations — including researchers, project proponents, and sponsor organizations — improve outcomes in future iterations. To that end, we’re committed to growing and improving our public database of project reports over time.

Making our work public is also an opportunity to reflect on what can and cannot be said with confidence in a complex climate program focused on carbon removal and negative emissions. The gaps we’ve identified will help us develop open source methods for performing detailed analyses of project and technology attributes in future procurement processes.

### How we evaluated projects

After multiple rounds of internal review, the CarbonPlan team decided to collect and aggregate data from project proposals across seven different metrics:

<Metrics/>

For the first four metrics — mechanism, volume, negativity, and permanence — we also evaluated whether we could independently validate projects’ claims. For each of these metrics, we gave projects a <Check closed={true}/> when we could validate their claims with reasonable confidence, a <Question closed={true}/> when we couldn’t, and an <Ex closed={true}/> when we found credible information that contradicted project proposals.

For the fifth criterion, cost, we report what projects offer. We decided not to evaluate this criterion because the price at which a project offers its product speaks for itself, at least in terms of total cost. The stated price in terms of $/tCO2, however, depends on other factors, including the precision of estimated volume, additionality, and transparency. Because no project earned top marks on all of these metrics, we advise readers to be cautiously skeptical of self-reported prices in terms of $/tCO2. Where possible, we indicated whether projects’ stated costs were commensurate with projects of a similar type.

The last two metrics — additionality and transparency — reflect our best judgment about cross-cutting issues of project quality. 

Along with summary graphics, the reports include “notes” with detailed information taken directly from project proposals as well as “comments” with our analysis and interpretation for each criterion. In a few instances, we flagged a project with an <Exclamation closed={true}/> on these items to indicate an important issue warranting further examination. 

See our [methods documentation](https://carbonplan.org/reports/methods) for full details on our approach.

## Our big take-aways

There’s a lot of information in the [project reports](https://carbonplan.org/reports). We’ll summarize three major insights here. 

### More questions than answers

Perhaps the most important finding is how often we found ourselves unable to confidently validate projects’ claims.

All projects ended up with at least one <Question closed={true}/> with patterns that vary by project and criterion. Most projects clearly identified their carbon removal mechanism(s), but we assigned a <Question closed={true}/> for nearly all claimed volumes. Only a handful of projects ended up with a <Check closed={true}/> for the majority of metrics, as well as high scores on either additionality or transparency. 

<Table/>

The <Question closed={true}/> is the most common result because it's our default stance. We replaced a <Question closed={true}/> with a <Check closed={true}/> or <Ex closed={true}/> only when we had a reasonable basis for independently evaluating a claim. As a result, a <Question closed={true}/> should not be interpreted as a criticism: all it reflects is our inability to confidently validate a claim on the basis of the project application and our independent research efforts. 

Over time, we intend to develop our capacity to reach more definitive answers across our metrics. We’ll also offer suggestions below for how future procurement processes can elicit more useful information from projects, some of which might have more to share than they disclosed in their application to Stripe. Fundamentally, however, the complexity of carbon removal solutions across so many technologies presents a challenge for any one organization to evaluate. 

## The permanence gap

Our second insight relates to the importance of permanence — that is, the timeframe over which carbon removed from the atmosphere stays put in some other reservoir, such as in soils, forests, or minerals. 

Carbon dioxide remains active in the atmospheric carbon cycle for hundreds to thousands of years. Because CO2 pollution today is effectively permanent over the time scale of civilization, the climate benefits of carbon removal strategies depend on their permanence.  

Climate programs focusing on carbon removal strategies need to carefully consider permanence. One way to do this is to focus procurement processes on technology areas with comparable permanence timeframes, which in turn can be matched the sponsor’s climate objectives. Alternatively, if a procurement includes a broad set of projects with significantly different permanence characteristics, then sponsors need to find a way to compare issues like volume and cost across fundamentally different time horizons. 

The projects we analyzed clustered into two distinct groups: those with permanence horizons that match the scale of the climate problem, and those that don’t. For example, projects seeking to store CO2 underground in geologic reservoirs or in stable mineralized form have a plausible claim to carbon removal on the scale of 1000 years or more. Biochar projects, too, are likely to retain a significant fraction of their carbon in stable form for hundreds of years or more. In contrast, others that seek to store carbon in soils or forests tend to claim much shorter time horizons — some as few as one year, but more commonly between 10 and 100 years. 

<Permanence/>

Projects with shorter permanence horizons may have significant value. Many are associated with important environmental co-benefits to water quality, agricultural productivity, or species conservation. Shorter carbon removal commitments can also buy time to scale up more permanent solutions — although the challenge of adding to tomorrow’s decarbonization burden is no comfort, given the scale and rate of change already required. 

Whether temporary storage options can be made reliable over longer periods of time turns on whether permanence risks are predominantly physical or socioeconomic. We are optimistic that physical risks can be reasonably well characterized by rigorous science. For example, projects storing carbon in forests need to promise that these carbon stocks will remain. Quantitative analysis can help predict the vulnerability of a specific location or species in a changing climate for risk factors like fire, drought, or insect-related tree deaths. 

In contrast, socioeconomic risks present a more vexing challenge. Long-term commitments to carbon storage in forests or soils require restricting landowner actions to prevent future changes to timber harvesting regimes or soil management practices. Many projects use long-term contracts — some for as long as 100 years — but over these kinds of timeframes there are significant risks of default or bankruptcy. 

Permanent carbon storage in these systems ultimately depends on the political and economic stability of private contracts and government policy regimes operating over long time horizons. Few human institutions — whether private or public — have achieved these kinds of results.

## Evaluation strategies depend on program motivation

Our third and final insight concerns the motivation behind carbon removal. Is the goal to offset emissions that can’t be reduced, or to support technology with the potential for impacts at scale? The two goals are often in tension and require different metrics for evaluation. 

Carbon offsetting focuses on the climate credit to be gained from an investment in a specific project. Climate benefits, in turn, are claimed relative to a counterfactual scenario — that is, what would happen without the investment. Without a clear showing that there is a causal link between a prospective investment and a change in behavior, an offset might not produce real climate benefits and a buyer looking to assert a claim of carbon neutrality won’t get what she paid for. 

Evaluating additionality is difficult because the counterfactual scenario against which climate benefits are calculated can only be estimated, never observed. To facilitate evaluation, procurement processes need to focus on specific claims about projects’ counterfactual scenarios, competing alternatives, and the detailed economics of projects’ technologies, associated commodity markets, and main competitors. 

If this sounds like a lot, it is! Unfortunately, the history of project-level additionality claims is not a positive story. Project proponents know the most about their own activities, including how feasible their work might be without outside investment — an information asymmetry that can reduce transparency. We identified a number of instances in our reports where additionality appears to be a significant concern and provided commentary to describe the issues we encountered. As a result of the complexity of evaluating additionality risks, we believe sponsor organizations should be skeptical about third parties that claim to automatically resolve this problem with proprietary methods. 

The second motivation, technological change, is different. These investments are primarily concerned with unlocking the potential for solutions at scale. To assess this potential, a sponsor organization should center its questions around the performance of a given technology, benchmarks to measure its anticipated improvements, and how investment can unlock either new entry markets or a path to cost reductions. 

A long-term investment orientation can help avoid some of the most challenging features of carbon offsets. Additonality is essential to justify a carbon offset, but not particularly relevant to accelerating technological change. In fact, the more a technology proponent can say about what it has recently accomplished as a justification for what it aims to do next, the better — yet describing a prospective investment on the basis of what was recently accomplished is a major red flag in the world of offsets and additionality. 

We are mindful that different organizations might adopt different paradigms, or even pursue multiple approaches in parallel. Low scores on additionality are not a concern when the purpose is to advance technology, but should be a primary consideration if the goal is carbon offsetting. 

## Lessons for future procurements

We end with two brief thoughts about what comes next. 

### Sponsor organizations: Focus project procurements 

The blessing and the curse of carbon removal is that no one strategy is like another. The wide range of technologies and approaches presents challenges for evaluation. 

We recommend that, where possible, procurement programs should focus on specific technologies or sectors of carbon removal. While some data can be collected from all kinds of projects, the most important issues depend on specific technology performance characteristics or socioeconomic contexts. 

If an organization wants to look broadly across multiple sub-sectors, parallel tracks with distinct proposal requirements might be preferable to an open call. The more focused the scope of each process, the better information it will elicit.

### CarbonPlan: Develop open source methods for project areas 

To help inform more future procurements, we are developing open source methods and models for evaluating project proposals on a technology-by-technology basis in close collaboration with the academic community. Examples include models of direct air capture project cost and scale (with Jennifer Wilcox) and models for evaluating forest carbon removal potential and physical reversal risks (with Bill Anderegg). These kinds of detailed models will enable sponsor organizations to compare projects more systematically, as well as identify what kinds of information sponsors could collect from proposals to facilitate project evaluation. 

## Terms of engagement

CarbonPlan and Stripe entered into an agreement in which Stripe shared the project proposals it received in response to its 2020 Negative Emissions Purchase in advance of their public release. CarbonPlan was compensated by Stripe for our time. We provided feedback to Stripe on both individual projects and overall program design, but Stripe did not exercise any control over our work. CarbonPlan is solely responsible for the content of its project reports and this writeup, which do not necessarily reflect the views of Stripe or any other other organizations.  

export default ({ children }) => <Article meta={meta}>{children}</Article>
