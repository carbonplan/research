---
version: 1.0.0
title: A critique of NCX’s carbon accounting methods
authors:
  - Danny Cullenward
  - Freya Chay
  - Grayson Badgley
date: 01-31-2022
summary: We review concerns with NCX’s use of discounted ton-year accounting methods to credit short-term timber harvests delays.
card: ton-year-ncx
color: pink
components:
  - name: TableHundred
    src: ./components/table-hundred.js
  - name: TableThousand
    src: ./components/table-thousand.js
links:
  - label: Explainer article
    href: /research/ton-year-explainer
---

In parallel to the release of our [ton-year accounting research article](https://carbonplan.org/research/ton-year-explainer), we decided to raise concerns about one of the companies ([NCX](https://ncx.com)) that plans to use its own version of ton-year accounting to issue carbon credits through a forthcoming protocol [under development](https://ncx.com/learning-hub/our-verified-carbon-standard-concept-note-approval/) with Verra. In the course of our research, we came to realize that NCX’s approach presents two significant issues that speak directly to the climate-equivalence claims being made. This post documents our concerns in detail in the hope that NCX improves its approach going forward.

## How we got here

Over the last year, our team has noticed a growing interest in ton-year accounting methods. A few months ago, we decided to launch a project to better understand and then communicate how they work. Our goal was to explain the theory and application of these methods, drawing briefly on recent examples where ton-year accounting has been put into practice to illustrate the key concepts.

We had hoped that it would be straightforward to describe real-world examples and move on. In the case of NCX, however, the task of replicating their published equivalence ratios turned out to be much more complicated — and controversial.

If you don’t know what an equivalence ratio is, please take a minute to check out [our ton-year explainer article](https://carbonplan.org/research/ton-year-explainer) before reading on. In brief, the equivalence ratio describes how many tons of CO₂ need to be temporarily stored to justify an additional ton of CO₂ emitted to the atmosphere today under a given set of assumptions. For example, NCX’s current white paper asserts that 30.8 tons of CO₂ held for one year is equivalent to emitting an additional ton of CO₂ today. A higher equivalence ratio means that more temporary storage is needed to make a given claim; a lower ratio requires less.

Because the equivalence ratio sets the value of temporary carbon storage, it’s important to understand the underlying methods and make sure they align with marketing claims. Using our [open source implementation](https://github.com/carbonplan/ton-year) of two published ton-year accounting methods, we initially reproduced numbers that were very close to the equivalence ratios published in NCX’s [current](https://f.hubspotusercontent20.net/hubfs/9337776/Papers/Forests%20and%20Carbon_A%20Guide%20for%20Buyers%20and%20Policymakers_SilviaTerra2020_v0.4.pdf) (version 0.5) and [previous](https://ncx.com/wp-content/uploads/2021/06/Forests-and-Carbon_A-Guide-for-Buyers-and-Policymakers_SilviaTerra2020_v0.4-2-1.pdf) (version 0.4) white papers. But close isn’t perfect, so we reached out to NCX for additional information.

We appreciate NCX’s willingness both to share [additional documentation](https://www.researchsquare.com/article/rs-966946/v1) for their current methods and to engage with us over email and on a call with their academic co-authors. Based on a constructive exchange with NCX and the materials they helpfully provided, we were able to [precisely replicate](https://github.com/carbonplan/ton-year/blob/main/notebooks/ncx-equivalency.ipynb) the equivalence ratio used in NCX’s current (version 0.5) white paper.

Although we were able to replicate NCX’s calculations, we were unable to find common ground about how to interpret their methods. We felt the need to express public concern about these points because we believe we have identified two significant issues, both of which relate to NCX’s use of discount rates. The first is that NCX’s use of a discount rate in ton-year accounting contradicts its marketing claims about delivering “equivalent climate impacts.” The second concerns NCX’s choice of a discount rate parameter, which is inconsistent with the evidence they cite to justify their choice.

## Discounting the climate

As noted above, we were able to replicate NCX’s equivalency factor using the standard Lashof ton-year accounting method — but with a twist.

In contrast to standard ton-year accounting methods, NCX’s approach employs a discount rate when translating current and delayed CO₂ emissions into ton-years. Just like a discount rate in economic cost-benefit analysis, the effect of discounting in a ton-year context is to reduce the calculated present value of future costs and benefits.

According to NCX’s methods, the total impact of 1 tCO₂ emitted today (at time t=0) over the next 100 years (up through year t=100) is 53.07 ton-years. However, if we apply a discount rate of 3.3% to the same impulse response function, then the total impact falls to 18.69 ton-years. Similarly, the undiscounted ton-year impact of a 1 tCO₂ emission delayed by one year (at time t=1) and integrated up to the same point (t=100) is 52.66 ton-years; at a discount rate of 3.3%, the impact is 18.07 ton-years. (These numbers come directly from a [spreadsheet](https://assets.researchsquare.com/files/rs-966946/v1/cf614da4396dfc82d2c09172.xlsx) NCX prepared as part of a recent academic preprint; we confirmed with NCX that this spreadsheet describes their published equivalence ratio.)

Tables 1 and 2 report these values for a timeframe of 100 years and 1000 years, respectively. The tables also show how the difference in ton-year impacts between emissions at time t=0 and t=1 translates into the ton-year benefit of delay. The equivalence ratio is calculated by dividing the ton-year impact of an emission at t=0 by the ton-year benefit of delay.

<Figure>
  <TableHundred />
  <TableCaption number={1}>Calculations for a 100-year timeframe.</TableCaption>
</Figure>

<Figure>
  <TableThousand />
  <TableCaption number={2}>
    Calculations for a 1000-year timeframe.
  </TableCaption>
</Figure>

As you can see, the equivalence ratio expands more than tenfold (from 129.61 to 1322.20) when undiscounted physical impacts are compared across 100- and 1000-year timeframes, respectively. In contrast, when using discounted impacts, the equivalence ratio is almost constant across these two distinct timeframes (30.08 versus 30.81).

These kinds of patterns will no doubt be familiar to readers with a background in economics or finance. Economic discounting is a standard way to express future costs and benefits in net present value terms, and even very small discount rates — such as 1% or above — make costs 100 years or more in the future look very small today.

Our concern with discounting isn’t this fundamental economic logic, which is sound in the context of economic analysis, but what it means in the context of physical climate impacts. We describe two significant problems below.

## Problem 01 — Marketing claims

The first issue concerns the relationship between discounting and ton-year accounting.

As explained in our research article, ton-year accounting balances cumulative radiative forcing over a specified time horizon. Although that concept isn’t the only issue that should concern us from a climate perspective — and might not even be the right place to start — it is a definition based on physical climate equivalency.

Using a positive discount rate undermines any claim to physical equivalency because the effect of discounting is to discount the actual warming impacts expected in the future as a matter of economics, not physics. As a result, physically identical emissions that occur one year apart are treated as having different effects solely because of a change in timing, not atmospheric impact.

A shift in framing from physics to economics is no small matter. Despite relying on a distinctly economic framework, NCX broadly advertises its approach as delivering a physical climate equivalence. For example, its current (version 0.5) white paper states:

> “Applying a 3.3% discount rate, we find that 1 ton of CO₂e … is equal to 30.8 ton-years today. Mathematically, removing 30.8 ton-years from the atmosphere today achieves the same impact as 1 ton CO₂e. So, removing and storing 30.8 tons CO₂ for one year, this year, has an equivalent climate impact to removing 1 ton CO₂e, or 1 “permanent” ton.
>
> <br />
> <br />
> [...]
> <br />
> In summary, a targeted short-term IFM strategy not only offers equivalence to
> “permanent tons” of impact, but does so with greater flexibility in terms of
> storage and with greater assurance against reversals.”

That’s not correct; the _physical_ climate benefits of delaying 30.8 tCO₂ by one year are strictly less than the benefit of permanently avoiding 1 tCO₂ emitted today. Instead, what NCX’s calculations show is that, under a precise set of economic assumptions, the expected _economic value_ of a 1-year delay in emitting 30.8 tCO₂ is equivalent to the expected _economic value_ of emitting 1 tCO₂ today.

We don’t want to belabor the point here, but NCX puts these potentially misleading “equivalent climate impact” claims front and center on [its website](https://ncx.com/ncx/). We worry that these kinds of claims are likely to mislead offset buyers, who typically expect that offset credits cancel out the climate impacts of their own emissions — not the economically discounted costs of those emissions.

## Problem 02 — Discounting assumptions

The second issue relates to NCX’s choice of a discount rate.

To be clear, our concern isn’t with the concept of using discount rates as a general matter. Climate economists use discount rates to represent future costs and benefits in net present value calculations, a well-established practice we wrote about [here](https://carbonplan.org/research/permanence-calculator-explainer). We think that more work needs to be done in this field to develop a robust scientific framework for valuing the benefits of temporary storage, and any such effort needs to include economic discounting.

Nor is our concern with the fundamentally normative nature of discount rates. Economists and philosophers have debated discounting for years (see [here](https://doi.org/10.1146/annurev-environ-020420-042100) and [here](https://philpapers.org/rec/JPADVP)), and if one thing is clear from extensive discussions within and between these communities, it’s that any decision to discount — including a decision _not_ to discount — comes down to moral and normative choices.

The issue here isn’t the lack of consensus about discounting. Rather, we think that the specific method by which NCX selected its 3.3% discount rate is internally inconsistent.

To understand our concern, it’s important to know that NCX isn’t using a conventional discount rate, but rather something distinct — what they call a “net discount rate.” NCX begins with a conventional economic framework in which future costs and benefits are compared against one another and discounted back to net present value (or “real”) terms. But the 3.3% discount rate used to calculate NCX’s equivalency ratio isn’t a real discount rate; instead, NCX defines it as the difference between the real discount rate and the expected rate at which climate damages increase over time.

In formal terms, NCX’s model assumes the climate damages grow at an exponential rate (called “g”) and should be discounted using a real discount rate (called “r”). Because the climate damage function and the discount rate both take an exponential form, the product of these two factors is governed by a net discount rate (called “λ”) that is defined as the difference between the real discount rate and the growth rate of climate damages (such that λ = r - g). If the discount rate is larger than the rate at which climate damages increase, then λ is positive; if climate damages grow at a rate that is faster than the discount rate, λ is negative.

Under these assumptions, NCX argues, one can calculate the equivalence ratio of a 1-year delay in emissions based only on the net discount rate (λ) (see Equation 3 [here](https://www.researchsquare.com/article/rs-966946/v1)). NCX’s reported equivalence ratio of 30.8 is based on a _net_ discount rate (λ) of 3.3%.

Our concern has to do with how NCX justified this number. NCX’s [current white paper](https://f.hubspotusercontent20.net/hubfs/9337776/Papers/Forests%20and%20Carbon_A%20Guide%20for%20Buyers%20and%20Policymakers_SilviaTerra2020_v0.4.pdf) (version 0.5, page 19) argues that there is a “significant consensus” about the use of a 3.3% discount rate, citing a [very interesting study](https://doi.org/10.5194/esd-9-1013-2018) from Sarofim & Giordano. Using a conventional climate economic framework, Sarofim & Giordano show how a common method for converting the climate impacts of methane into CO₂-equivalent units — known as a [100-year global warming potential](https://en.wikipedia.org/wiki/Global_warming_potential) — implies a 3.3% _real_ discount rate. We think this paper provides a compelling line of evidence that is consistent with the use of a 3.3% _real_ discount rate (r), but that is not how NCX is using it. Instead, NCX uses this paper to assert that the _net_ discount rate (λ) should be 3.3%.

This choice can be interpreted in one of two ways, both of which call into question the integrity of NCX’s current equivalence ratio.

One interpretation is that NCX intended to set both the real discount rate (r) and net discount rate (λ) to the same value, 3.3%. In that case, NCX’s choice of λ would be perfectly consistent with the evidence in the Sarofim & Giordano study they cite. But this interpretation also requires that the growth of climate damages (g) is _zero_ — in other words, it assumes that climate damages are constant. We do not think that is a credible position to take under any circumstances.

The alternative interpretation doesn’t inspire any more confidence. It may well be that credible arguments can be made to support a choice of real discount rates (r) and growth rates in the damage function (g) such that the difference between these terms (λ) remains at NCX’s selected level, 3.3%. For example, if climate damages grow at 3% (g) and NCX uses a real discount rate of 6.3% (r), then the net discount rate (λ) remains unchanged 3.3%.

The problem with this position is that it contradicts NCX’s explicit reasoning. NCX cites evidence that supports the choice of a _real_ discount rate of 3.3%. In order for NCX to make an argument that supports a _net_ discount rate of 3.3% and acknowledges that climate damages will increase over time, NCX would have to pick a higher real discount rate and contradict their initial assessment that a real discount rate of 3.3% represents a “significant consensus” among the expert community.

If a higher discount rate can be justified and clearly communicated, then so be it. But so far these details have escaped critical attention in the world of ton-year accounting, even though the potentially arbitrary nature of this choice has major consequences on the fundamental climate claims being made.

## Doing better in unregulated markets

Our point in raising these two objections isn’t to quibble. Far from it. These complex and esoteric details matter a great deal to the fundamental climate claims NCX makes — as well as to the claims others might make in the future.

On a 100-year timeframe, NCX’s decision to use a 3.3% discount rate reduces by a factor of 4 the number of tons they must procure to make a climate equivalence claim; on a 1000-year timeframe, discounting reduces the need 100-fold. That’s a huge shift to make on the basis of what is, at best, an incomplete analysis.

No doubt one response to this criticism will be the standard line in the voluntary carbon markets: “critics can’t let the perfect be the enemy of the good.” The problem with this position — aside from higher emissions — is that unregulated carbon markets have no governance system to review claims and make changes over time. Instead, critical technical choices are left up to private parties, like NCX, that have a direct profit motive to sell more offset credits for a given volume of temporary carbon storage.

We decided to explain our objections at length and in public because NCX has put itself forward as a company that responds to the problems of the legacy forest carbon offsets market. For example, NCX’s website [favorably cites](https://ncx.com/learning-hub/our-verified-carbon-standard-concept-note-approval/) critical reporting from [Bloomberg Green](https://www.bloomberg.com/news/features/2021-04-05/a-top-u-s-seller-of-carbon-offsets-starts-investigating-its-own-projects) as well as coverage of CarbonPlan’s recent study in [ProPublica/MIT Technology Review](https://www.propublica.org/article/the-climate-solution-actually-adding-millions-of-tons-of-co2-into-the-atmosphere). We hope that NCX will rise to the occasion here and substantiate the reputation they seek.

Let us be the first to acknowledge that what’s missing from this conversation is a robust economic framework for valuing the physical climate consequences of temporary carbon storage. What NCX has put forward misses the mark. We recognize that our criticism doesn’t provide a solution, and we intend to return to this topic in future work to help address what is a clear and growing gap in today’s carbon markets.

Meanwhile, we hope that NCX will acknowledge the challenges with its current methodology and commit to improvements going forward.

## Update — Feb 04 2022

NCX posted a [response](https://ncx.com/learning-hub/ncx-response-to-carbonplan-critique/) on February 3, but as of this writing has not yet engaged with the substance of our critique.
