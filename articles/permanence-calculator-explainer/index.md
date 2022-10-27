---
id: permanence-calculator-explainer
version: 1.0.0
color: pink
title: The cost of temporary carbon removal
authors:
  - Danny Cullenward
  - Joseph Hamman
  - Jeremy Freeman
date: 12-09-2020
card: permanence-calculator-explainer
background: articles/005/leaf
quickLook: How to compare the long-term cost of temporary and permanent carbon removal
summary: We built an interactive tool to help compare the long-term cost of temporary and permanent carbon removal. Read this article or try the calculator tool to learn about the methods and implications.
icon: articles/005/leaf-small
links:
  - label: Calculator tool
    href: /research/permanence-calculator
  - label: ClimateWorks post
    href: https://www.climateworks.org/blog/addressing-critical-challenges-in-carbon-dioxide-removal/
components:
  - name: Parameters
    src: ./components/parameters.js
  - name: Scenario
    src: ./components/scenario.js
---

Carbon removal costs are everywhere in climate discussions — this project costs $10, that one costs $200. Policymakers and corporate planners look to metrics to inform their decisions, and cost per ton of carbon dioxide ($/tCO₂) has become a near-universal unit of measure.

But are all tons the same?

The answer, unfortunately, is no. Especially when it comes to carbon removal, the duration of carbon storage — what we call a project’s “permanence” in our [reports](https://carbonplan.org/reports) — is a critical variable missing from standard $/tCO₂ metrics.

Addressing the duration of carbon storage is crucial to ensure that climate solutions match the scale of the climate problem. CO₂ emissions from fossil fuel use impact the atmosphere for hundreds to thousands of years.<Cite id='archer.2009'/> Removing CO₂ from the atmosphere counteracts the warming effects of historical or hard-to-avoid emissions, but only so long as the removal is permanent. Temporary removals, in contrast, have only temporary effects. (For more about the underlying carbon cycle interactions, see [our article](/research/carbon-removal-mechanisms).)

When two carbon removal projects each claim a $/tCO₂ cost, directly comparing their costs doesn’t tell a complete story if one has a temporary duration and the other is permanent. Because simple cost metrics don’t value permanence, choosing the least-cost option can bias decisions in favor of temporary carbon removals.

Over the past few months, we’ve received several questions from companies looking to procure carbon removal and normalize the cost of competing projects with different storage durations. For example, how should one compare a $20/tCO₂ soil carbon project that promises to lock up CO₂ for 10 years with a $700/tCO₂ direct air capture and geological sequestration project that promises effectively permanent carbon storage?

Some helpful academic thinking on these questions exists,<Cite ids={['herzog.2003', 'kim.2008', 'costa.2000']}/> but we haven’t been able to point anyone to a simple tool that illustrates and facilitates the comparisons that decision makers need to make.

So we <Link href={'/research/permanence-calculator'}>built one</Link>.

As we explain below, our calculator shows how the initial cost of a temporary carbon removal can be far smaller than the total cost of achieving permanent climate benefits. By analogy to the decision of whether to rent an apartment or buy a house — which the New York Times analyzed in a [“rent versus buy” calculator](https://www.nytimes.com/interactive/2014/upshot/buy-rent-calculator.html) that inspired this project — we want to know if continued temporary removal (“rent”) is more or less expensive than procuring permanent removal today (“buy”). By putting temporary and permanent carbon removal options on equal footing, our calculator shows how to make a transparent and balanced comparison of competing climate strategies.

## Calculator basics

Our calculator lets you compare the permanence-adjusted costs of different carbon removal strategies based on a set of input parameters.

<PullQuote>
  The calculator normalizes projects with different temporal dimensions into
  long-term strategies that achieve comparable climate benefits
</PullQuote>

The core calculation is the net present value of a series of carbon removal decisions over a 1000-year period. We model a decision-maker seeking to achieve permanent climate benefits, whether by paying directly for permanent CO₂ removal today, by sequentially renewing temporary carbon removal projects over the full 1000 years, or by sequentially renewing temporary projects for a user-specified period of time before switching to a permanent alternative.

To begin, we assume that temporary removal projects are renewed at the end of each project period. The user can leave this choice as a default, in which case the permanence-adjusted cost of a temporary project is calculated as the net present value of this series of repeated investments over 1000 years. Alternatively, the user can select a point in time at which the investment switches from a temporary to a permanent carbon removal strategy, similar to the shift recommended by the recent [Oxford principles for net zero carbon offsetting](https://www.ox.ac.uk/news/2020-09-29-oxford-launches-new-principles-credible-carbon-offsetting). This approach might be desirable, for example, based on the relative costs of different strategies today and the belief that permanent costs might fall in the future.

Whatever the user’s preferred strategy for achieving permanence, we then compare the initial cost of the temporary removal option to the permanece-adjusted project cost — that is, the amount that must be budgeted today to implement the user’s strategy for achieving permanence over time. In this way, the calculator normalizes projects with different temporal dimensions into long-term strategies that achieve comparable climate benefits.

The model depends on several adjustable parameters.

<Parameters />

Before walking through what the calculator can teach us, we’ll discuss some of the key parameters in more detail.

### Discount rate

A net present value framework translates costs that arise in future years into present-year terms by discounting the future costs according to an exponentially compounding discount function. When discount rates are small — either zero, or close to zero — future costs remain large in present-day terms. For example, the 2006 [Stern Review on the Economics of Climate Change](https://www.lse.ac.uk/granthaminstitute/publication/the-economics-of-climate-change-the-stern-review/) famously used a discount rate of 1.5% and made a case for aggressive climate action in part on that basis. When discount rates grow past a few percentage points, however, even large costs from tomorrow’s climate impacts appear small in present-day terms.

Net present value calculations are ethically and philosophically fraught in the context of climate change economics because they impose value judgments about the welfare of future generations and assume that wealth today will become greater wealth tomorrow.<Cite ids={['kelleher.2018', 'drupp.2018']}/> Choosing a discount rate that resembles typical, real-world interest rates minimizes the net present value of costs imposed on people living in the future. For example, under a 10% discount rate, a climate impact that causes $1 million worth of damage in 100 years costs about $73 in net present terms. Many people would say that it isn’t ethical for an individual today to become $73 richer if the result is that someone in 100 years experiences a $1 million loss, but that’s effectively what an economic discounting framework says is rational: if that $73 earns a reliable 10% per year, it’ll fully cover the $1 million damage bill that comes due in 100 years.

These dynamics naturally lead to the concern that people will act selfishly today and harm the generations of tomorrow, just as has been the case with greenhouse gas pollution since the industrial revolution. A related concern is that people might pursue cheap and temporary carbon removal today on the promise of investing in more expensive and effective approaches tomorrow — but when tomorrow comes, there’s no guarantee of following through.

Although most discount rates effectively downplay harms to future generations, they nevertheless tell us something useful: what saving a certain sum of money today would produce in terms of future wealth. You can think of a net present value calculation as a way of determining how much money should be set aside today to cover a cost tomorrow, such as the ongoing costs of renewing a temporary carbon removal strategy. The total cost of pursuing a temporary carbon removal strategy will be higher than the initial project cost precisely because additional procurements will be needed at the end of every project cycle, up until the point where the decision-maker switches to a permanent carbon removal project instead (if ever).

We don’t aim to resolve the challenging debates around the role of discount rates and their ethical implications, other than to flag that any discussion of timeframes of 100 years or more necessarily implicates these complex issues. The discount rate is a critical factor in determining permanence-adjusted project costs and it’s one where ethical values are just as important as technical considerations, if not more so.

### Project risks

We have included a project risk factor that reflects the possibility that many temporary carbon removal projects can experience a “reversal” when carbon that is stored is released back into the atmosphere — such as a fire that impacts a forest offset project, or a change in land management practice that allows carbon in soil to escape.

Some carbon offsets protocols include mechanisms to insure against these types of losses, but in practice [many](https://carbonplan.org/research/soil-carbon-comment) appear to be [inadequate](https://carbonplan.org/research/offset-project-fire). In our calculator, a risk of zero implies either that there are no such risks or that they are perfectly accounted for in the temporary project’s cost, which could reflect a variety of explicit insurance mechanisms. We also let users explore the implications of non-zero reversal risks.

When a project experiences a reversal, the model procures a new temporary carbon removal project and continues with the same strategy as before — possibly leading to additional project failures in the future. Each reversal increases total costs because it shifts the project renewal cycle forward in time, imposing costs earlier than expected. In turn, shifting costs earlier leads to higher present-day costs because those earlier nominal costs are discounted less relative to later costs.

We implement the project risk probabilistically, through an independent Bernoulli sample every year in a given calculator scenario. For a given set of parameters, we run the model 50 times and report the mean and standard deviation, reflecting the range of potential outcomes depending on the observed sequence of failures. (Other than this project risk variable, the model is entirely deterministic.)

The calculator assumes that temporary and permanent carbon removal projects are comparable in all other respects — that both options represent real, additional, and high-quality climate benefits that go beyond business-as-usual conditions. We emphasize that many real-world comparisons do not meet this standard — due to concerns around additionality or leakage, for example — but we wanted to build a tool for comparing costs assuming high quality.

### Project costs

The calculator allows users to specify costs in two ways. The simplest is a fixed cost that doesn’t vary over time. This helps illustrate the effect of the other variables on total costs, such as the discount rate and the timing of when to switch from temporary to permanent carbon removal.

Alternatively, the user can vary costs over time, “drawing” a trajectory of costs for temporary and permanent carbon removal projects. Dynamic cost trends let users explore two critical issues.

First, many permanent carbon removal approaches are in their infancy and are projected to have lower costs over time due to ongoing investment and innovation. For example, direct air capture projects are very expensive today on a $/tCO₂ basis, but many proponents believe costs will fall significantly in the years ahead.<Cite id='keith.2018'/> When a project is expensive today but could become considerably cheaper tomorrow, there could be significant economic value in waiting out those changes — and thus, delaying a transition to permanent approaches could be cost-effective. On the other hand, a wait-and-see approach does little to help bring those costs down. That’s a problem because early investment in climate mitigation plays a critical role in reducing total costs.<Cite id='daniel.2019'/>

Second, many temporary removal approaches are cheap today, but one might expect those costs to rise, not fall, over time. Consider high-quality forest projects that establish a clear case for additionality and feature low risks from fires, droughts, and other disturbances. In today’s market, many of these projects feature low prices. But as more and more decision-makers look to invest in carbon removal and insist on higher levels of quality, prices could easily rise as demand begins to outstrip high-quality supply. In that case, the user might want to explore the implications of rising temporary project costs, rather than falling costs from technological progress.

We emphasize that the calculator does not make any assumptions about these cost trends — rather, the user can input scenarios and explore the implications.

## Example scenarios

To illustrate how the calculator can help evaluate real-world conditions, we review some example scenarios here. Given all the parameters in the model, these examples won’t cover all relevant issues — but they should help build intuition about the underlying behavior.

### Starting simple

The simplest scenario is one in which we repeatedly purchase temporary 10-year projects for the entire time horizon of the model (1000 years) without ever switching to permanent removal, with a 0% discount rate and 0% project risk.

<Scenario
  projectDuration={10}
  switchingTime={'N/A'}
  discountRate={0}
  projectRisk={0}
  temporaryCost={[20, 20, 20, 20, 20, 20]}
  permanentCost={['N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A']}
  netPresentValue={2000}
/>

In this extreme case, the total amount we need to budget is simply the time horizon divided by the project duration times the cost of each project — here $2000/tCO₂, which is much larger than the cost of a single project. If we modify this scenario slightly to consider a switch to $500 permanent carbon removal at 100 years, the total cost clocks in lower, at $700/tCO₂.

<Scenario
  projectDuration={10}
  switchingTime={100}
  discountRate={0}
  projectRisk={0}
  temporaryCost={[20, 20, 20, 20, 20, 20]}
  permanentCost={[500, 500, 500, 500, 500, 500]}
  netPresentValue={700}
/>

Because the discount rate is set to zero, these scenarios calculate the cumulative expenditures required for climate permanence. In other cases, temporal discounting will reduce the net present value of the cost of these strategies and make temporary carbon removal more appealing.

### Temporal discounting

The discount rate is one of the most important variables affecting long-term economic analysis. To give a sense of its importance, we’ll show the effect of varying the discount rate for a temporary carbon removal project, analogous to some current soil carbon credit programs.

Consider a set of sequential investments in a 10-year temporary project that has a fixed cost of $20/tCO₂, with a transition after 100 years to a permanent project that has a fixed cost of $500/tCO₂. We’ll assume the temporary carbon project has a 3% risk of failure each year.

To estimate the costs of this climate strategy, we’ll look at two representative discount rates — 2% and 9%. Some researchers have argued that a 2% discount rate is appropriate for use in climate policy analysis,<Cite id='emmerling.2019'/> although this rate is lower than most market-based interest rates today. In contrast, a 9% discount rate is inappropriate for public policy analysis but more closely resembles the private cost of capital that some corporations use to allocate investments over time.

With a 2% discount rate, the cost of a permanent climate solution based on this 10-year temporary project would be about $175/tCO₂ in net present value terms — almost six times higher than the project’s upfront price of $20/tCO₂.

<Scenario
  projectDuration={10}
  switchingTime={100}
  discountRate={2}
  projectRisk={3}
  temporaryCost={[20, 20, 20, 20, 20, 20]}
  permanentCost={[500, 500, 500, 500, 500, 500]}
  netPresentValue={175}
  netPresentValueError={10}
/>

Meanwhile, the same investment pattern would cost about $39/tCO₂ with a 9% discount rate — about twice the upfront project cost.

<Scenario
  projectDuration={10}
  switchingTime={100}
  discountRate={9}
  projectRisk={3}
  temporaryCost={[20, 20, 20, 20, 20, 20]}
  permanentCost={[500, 500, 500, 500, 500, 500]}
  netPresentValue={39}
  netPresentValueError={6}
/>

The estimates are so different because the same investment pattern appears more costly today when tomorrow’s costs are discounted less. In both cases, there is a big difference between the nominal price of the temporary carbon removal project and the full cost of a strategy that relies on these projects to deliver permanent climate benefits — with the full costs clocking in at two to six times the upfront project cost.

### Saturation and technological change

One reason to blend temporary and permanent carbon removal projects in a portfolio is the fact that today’s project costs are likely to change over time. We’ll consider the same 10-year project discussed above and set the temporary project costs to ramp up over time on the assumption that the market for high-quality projects saturates. In this scenario, the demand for these projects goes up but the supply can’t keep pace, so prices rise.

If we assume that temporary project costs rise linearly from $20/tCO₂ to $70 over 100 years, the cost of the same carbon removal strategy will rise to about $265/tCO₂.

<Scenario
  projectDuration={10}
  switchingTime={100}
  discountRate={2}
  projectRisk={3}
  temporaryCost={[20, 30, 40, 50, 60, 70]}
  permanentCost={[500, 500, 500, 500, 500, 500]}
  netPresentValue={265}
  showSparklines={true}
  netPresentValueError={16}
/>

That’s higher than the initial cost projection of $175/tCO₂ evaluated above, but not as high as the project cost trajectory might suggest. A more modest cost increase reflects the fact that the scenario’s discount rate causes future costs to be smaller in net present value terms.

We can also model the effect of technological change in permanent carbon removal strategies. Many of these approaches are in their infancy today but could plausibly become cheaper tomorrow. Keeping the same saturation assumptions we made for temporary project costs, we can layer on a set of cost reductions for the permanent project, decreasing linearly from $500 to $125 over 100 years. When both cost curves are analyzed together, the climate strategy now has a cost of about $212/tCO₂ — closer to the first scenario we discussed.

<Scenario
  projectDuration={10}
  switchingTime={100}
  discountRate={2}
  projectRisk={3}
  temporaryCost={[20, 30, 40, 50, 60, 70]}
  permanentCost={[500, 425, 350, 275, 200, 125]}
  netPresentValue={212}
  showSparklines={true}
  netPresentValueError={19}
/>

The effect of falling technology costs only manifests at the end of 100 years, when this scenario switches from a temporary to a permanent carbon removal project. (The user can vary when this switch occurs, such that the pace and not just the final extent of technological change matters for total costs.)

### Ton-year accounting

Finally, we’ll use the calculator to evaluate a different approach to carbon removal, known as “ton-year” accounting. Ton-year accounting revolves around single-year commitments to carbon removal, where a project agrees to take an action to store CO₂ for one year and must be paid again the next year to continue retaining the CO₂. For this reason, some refer to ton-year accounting as “renting” carbon storage — as opposed to buying it through a permanent storage project.

To get a sense of the economics, we’ll consider a 1-year project that costs $10/tCO₂, with a 0% project risk, a switch to permanent removal at 100 years, and a 2% discount rate. (Project risk has no effect in our model for 1-year projects because projects are renewed each year, whether or not the model calculates a reversal.) Under these assumptions, maintaining a ton-year investment strategy over a 100-year period would cost $509/tCO₂ in net present value terms — an expensive proposition! At a more market-based discount rate of 9% the strategy costs $121/tCO₂ — lower, but still much higher than the upfront cost.

<Scenario
  projectDuration={1}
  switchingTime={100}
  discountRate={2}
  projectRisk={0}
  temporaryCost={[20, 20, 20, 20, 20, 20]}
  permanentCost={[500, 500, 500, 500, 500, 500]}
  netPresentValue={509}
/>

This simple analysis shows how ton-year accounting is potentially appealing in private market contexts where higher discount rates apply. A ton-year accounting structure can help defray large upfront investment costs, but requires a consistent stream of smaller payments — and so the economic value depends strongly on the discount rate.

## Concluding thoughts

Simple $/tCO₂ metrics assume the climate benefits of different mitigation and carbon removal projects are comparable, but in practice, not all tons are the same. When it comes to the cost-effectiveness of carbon removal, the permanence of carbon storage is a critical yet often-overlooked factor.

Our calculator puts projects that temporarily remove CO₂ from the atmosphere on an equal footing with those that do so permanently by modeling a strategy that relies on sequential temporary projects to achieve a permanent climate benefit. By making a simple set of assumptions around project costs, project sequencing, and the applicable discount rate, it lets users calculate and compare the total cost of different climate strategies.

Notably, the full cost of relying on temporary carbon removal is higher than the upfront and relatively low cost of most temporary carbon removal projects today, with the extent of the difference dependent on key parameter choices. By making these choices explicit and transparent, the calculator helps decision-makers consistently explore the full costs of competing climate strategies across a range of assumptions.

<Endnote label='Credits' divider>

Danny developed the model and wrote the first draft of the article. Jeremy implemented the model and designed the interactive web tool. Joe provided feedback on the model. All authors contributed to writing the article. The authors thank Gernot Wagner, Frances Moore, Toly Rinberg, and Rafael Broze for helpful feedback.

Please cite as:

D Cullenward, J Hamman, J Freeman (2020) “The cost of temporary carbon removal” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/permanence-calculator-explainer](https://carbonplan.org/research/permanence-calculator-explainer)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan received a grant from the ClimateWorks Foundation to support this work. ClimateWorks did not exercise any control over the output. CarbonPlan is solely responsible for the content of this writeup, which does not necessarily reflect the views of ClimateWorks, those who provided feedback, or any other individuals or organizations.

Article text and figures made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/). Implementation of [permanence calculator](https://github.com/carbonplan/research/tree/main/tools/permanence-calculator) made available under an [MIT license](https://github.com/carbonplan/research/blob/main/LICENSE).

</Endnote>
