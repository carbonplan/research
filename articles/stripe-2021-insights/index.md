---
id: stripe-2021-insights
version: 1.0.0
date: 05-26-2021
title: New lessons from reviewing carbon removal proposals
authors:
  - Freya Chay
  - Jane Zelikova
  - Danny Cullenward
  - Joseph Hamman
  - Jeremy Freeman
color: secondary
card: stripe-2021-insights
background: articles/010/curve
quickLook: Project reports and lessons learned from analyzing proposals for Stripe's Spring 2021 Carbon Removal procurement
summary: We analyzed project proposals submitted for Stripe's Spring 2021 Carbon Removal Purchase. Read this article or explore our updated database of project reports for our takeaways and lessons learned.
icon: articles/010/curve-small
links:
  - label: Database tool
    href: /research/cdr-database
components:
  - name: InlineCheck
    src: ../../components/inline-check.js
  - name: Distributions
    src: ./components/distributions/index.js
  - name: Numbers
    src: ./components/numbers.js
  - name: Price
    src: ./components/price/index.js
---

CarbonPlan began building a public [database](https://carbonplan.org/research/cdr-database) of carbon dioxide removal proposal analyses in 2020. We’ve previously published insights from our analysis of [Stripe’s 2020 purchase](https://carbonplan.org/research/stripe-2020-insights) and [Microsoft’s 2021 purchase](https://carbonplan.org/research/microsoft-2021-insights). We are now updating the database to include an analysis of 23 new proposals submitted in response to [Stripe’s Spring 2021 carbon removal purchase](https://stripe.com/newsroom/news/spring-21-carbon-removal-purchases).

We continue to analyze carbon removal projects because we believe these activities play an important role in addressing the climate crisis. As the field evolves, we hope this database contributes to a culture of openness, transparency, and accountability for those participating in the field of carbon removal and climate action more broadly.

This article summarizes key takeaways from our new analysis. Please note that our work represents only CarbonPlan’s views, not those of Stripe or any other organizations. We helped design Stripe’s 2021 carbon removal application process with funding from Stripe, but Stripe made purchase decisions independent of what we report here.

## A new application

Early in 2021, we collaborated with Stripe to design a [new carbon removal application](https://carbonplan.org/research/carbon-removal-application), drawing on lessons learned from previous rounds of project solicitation and proposal analysis. Most notably, the new application is designed to solicit category-specific information that is needed to better evaluate what carbon removal projects are actually proposing. Validation and comparison across projects’ claims also requires getting projects to show the work behind topline metrics like volume and permanence, thereby surfacing key assumptions and enabling more accurate interpretation.

The new carbon removal application features a set of general questions relevant to all project categories, accompanied by category-specific supplements that seek additional detail. The application materials currently include supplements for Direct Air Capture (DAC), Biomass, Surface Mineralization, Oceans, Geologic Injection, and CO₂ Utilization. Projects complete one or more supplements according to their approach. The project [Climeworks](http://climeworks.com), for example, would fill out the DAC supplement and the Geologic Injection supplement; [Charm Industrial](https://charmindustrial.com/) would fill out the Biomass supplement and the Geologic Injection supplement; [CarbonCure](http://carboncure.com) would fill out the Utilization supplement; and [Project Vesta](http://projectvesta.org) would fill out the Surface Mineralization supplement and the Ocean supplement.

<PullQuote>
  The application is open source and available for re-use and iteration
</PullQuote>

We think this design helps buyers flexibly solicit more relevant and detailed project information. We also hope it strikes a balance between soliciting thorough information and not creating an unreasonable burden for projects who apply. Of course, there is always room for improvement! The application is open source and [available on GitHub](https://github.com/carbonplan/carbon-removal-application) for re-use and iteration.

## Project analysis

We received early access to the 26 proposals submitted in response to Stripe’s Spring 2021 solicitation using the new application. Following the same approach from our review of the Stripe 2020 and Microsoft 2021 proposals, we analyzed all but three that fell outside our scope.

We excluded one proposal that presented a mechanism to reduce total radiative forcing without directly interacting with the carbon cycle. Although reducing radiative forcing would produce climate benefits, we considered this out of scope. Two other proposals presented large-scale, theoretical visions of how carbon removal could be achieved, but felt incomparable with what were otherwise more concrete and immediate proposals, and were thus excluded.

Because [Stripe’s purchase criteria](https://stripe.com/blog/first-negative-emissions-purchases#criteria-table) identify >1000 year carbon storage as a key target, the fraction of projects across categories differed from what we’ve seen previously. Notably, there were no forest or soil projects proposed in this solicitation. Volumes were also lower, and prices higher.

<Figure>
  <Numbers />
  <FigureCaption number={1}>
    Summary numbers across the project proposals we analyzed. All fractions are
    expressed in terms of volume (in units of gross tCO₂).
  </FigureCaption>
</Figure>

Using the [now-public proposals](https://github.com/stripe/carbon-removal-source-materials), project websites, and published literature, we analyzed each proposal on the basis of [seven harmonized metrics](https://carbonplan.org/research/cdr-database/methods).

Below we show distributions of two key metrics, volume and permanence, in an interactive where you can compare the three batches of proposals we’ve evaluated thus far. Compared to previous rounds, Permanence values are higher (due to Stripe’s criteria) and volumes are generally lower (likely due to limited supplies that meet these strict criteria).

<Figure>
  <Distributions />
  <FigureCaption number={2}>
    Distributions of volume (above) and permanence (below) across six project
    categories: <Green>forests</Green>, <Orange>soil</Orange>,{' '}
    <Yellow>biomass</Yellow>, <Teal>ocean</Teal>, <Grey>mineralization</Grey>,{' '}
    <Purple>direct air capture</Purple>. Each circle represents a project, and
    curves show the distribution using a kernel density estimate. Permanence
    values and volumes reflect proposal claims, and are not necessarily accurate
    or realistic. You can compare volume and permanence distributions between
    the RFPs we’ve analyzed using the toggle in the upper left.
  </FigureCaption>
</Figure>

As a reminder, volume claims vary widely depending on project stage and assumed delivery timelines, and are reported here on a gross basis that does not reflect projects’ own greenhouse gas emissions. We attempt to document nuances in the database notes and comments. Volumes should not be compared directly without paying careful attention to project details.

This is the second time Stripe proposals have included public offer prices expressed as $/net tCO₂ removed. In this round, the negotiated purchase prices for a subset of chosen projects were also released. For consistency across projects and RFPs, we report the offer price rather than the purchase price. We recognize, however, that purchase prices are fundamentally the signal of interest, and we reflect these data in our notes and comments. Although purchase price gives a more accurate depiction of market outcomes, we decided that reporting purchase price could introduce bias in comparisons with projects that, for whatever reason, were not chosen and therefore did not engage in any subsequent price negotiations.

Below we show the distributions of our price and volume metrics in an interactive where you can compare the two batches of Stripe proposals.

<Figure>
  <Price />
  <FigureCaption number={3}>
    Comparing price vs volume for all projects from the 2020 and 2021 Stripe
    RFPs. You can compare results using the toggle in the upper left. Only
    projects with an overall rating of 2 or higher are shown, so as to ensure a
    minimal degree of robustness in the data. All values are self-reported and
    should be interpreted with care. Due to reporting inconsistencies, volumes
    are shown as gross removal (tCO₂) whereas prices are shown as net negative
    removal (offered $/net tCO₂). For the Stripe 2021 RFP data, where we had
    estimates of net removal, we confirmed overall trends were similar using
    those values instead.
  </FigureCaption>
</Figure>

The data show a shift toward lower volumes and higher prices, which would seem consistent with Stripe’s strong requirements around permanence. As we obtain more public data on CDR prices, more analysis of price trends and learning curves will become possible.

## Handling novel approaches

We were excited by the strong presence of novel carbon removal approaches, which are a testament to the creativity of the growing carbon removal community.

<PullQuote>
  We were excited by the strong presence of novel carbon removal approaches
</PullQuote>

The prevalence of novel approaches means that we need to start distinguishing between projects that propose research into a novel idea with inherent uncertainty, and projects with an established operation that can offer specific volumes of carbon removal.

Our analytical framework, and all the procurement processes we have analyzed, have been structured around buying and selling tons of carbon removal. Demonstrating demand via a purchase agreement can be [important for early-stage projects](https://grist.org/climate-energy/lucky-charm/), but forcing projects in the middle of early-stage research to pitch a sale of volume presents some challenges.

First, a volume-sale framework does not necessarily solicit the kinds of information needed to identify a robust research approach. At minimum, evaluating research requires seeing a clear presentation of testable hypotheses and planned experimental approaches.

Second, evaluating novel research may require a different orientation toward uncertainty. In our analysis, we currently give a <InlineCheck/> for a metric if we can independently confirm a proposal’s claim with reasonable confidence. An early-stage project with active research questions may — quite reasonably — be difficult to validate because there’s simply not enough science or data. But within our current framework the lack of a <InlineCheck/> conflates the inherent uncertainty of an open research question with potentially concerning questions about the validity of a more mature project. Ideally early-stage proposals containing open research questions would be distinguished upstream and subject to separate evaluation.

If the private sector continues to support early-stage carbon removal projects — as opposed to, say, government-funded research programs — we recommend buyers and grantors develop parallel solicitation and funding structures tailored to early-stage projects with open research questions.

## A rising tide of ocean projects?

Of the 26 proposals analyzed, seven interact directly with the ocean, mainly through novel approaches. In comparison, ocean projects accounted for just one of 24 proposals in the first Stripe 2020 RFP, and four of 189 proposals in the Microsoft 2021 RFP.

The ocean proposals can be categorized broadly as either interacting with the ocean’s organic carbon cycle (e.g. growing macroalgae and sinking into the deep ocean) or interacting with the ocean’s inorganic chemistry (e.g. forcing carbonate precipitation or filtering dissolved CO₂ from seawater).

Permanence with ocean projects is especially complicated.

Carbon storage in the deep ocean has a much longer permanence horizon than carbon storage in forests or soils. In addition, carbon storage in the deep ocean does not depend on human choice — no maintenance is required and carbon gains cannot be reversed due to changing priorities or incentives over time.

That said, deep ocean storage does not achieve the permanence of mineralization or geologic storage. Fundamentally, storing biogenic carbon in the deep ocean kicks the can down the road — after hundreds to thousands of years, most of that carbon will resurface to enter the atmosphere.

If implemented carefully and robustly, this form of intermediate permanence could play a unique role in the carbon removal landscape, especially given the vast potential scale of these projects. However, there are major uncertainties associated with deep ocean carbon storage. It is likely that deployment at scale will face different challenges than current prototypes. We don’t know all that much about the underlying dynamics of carbon flux into the deep ocean, or the potential impacts of exporting large quantities of carbon into benthic ecosystems. Plus, the deep ocean is tricky to study and monitor.

As interest grows in ocean CDR, we believe it will be critical to ensure that the research into efficacy and impacts keeps up with the rate and scale of deployment.

## Conclusion

We are once again grateful to Stripe and participating projects for contributing to the ecosystem of transparency, accountability, and community learning by making all application materials and detailed project proposals public. We are also glad to see that others, like Shopify, are providing [more transparency](https://cdn.shopify.com/static/sustainability/How-to-Kick-Start-the-Carbon-Removal-Market_Shopifys-Playbook.pdf) around their own processes.

Moving forward, we hope the open source application materials developed here provide a jumping-off point for future improvement of carbon removal solicitations. If feasible, we would encourage buyers and grantors to develop parallel solicitation and purchase structures for early-stage projects with open research questions.

We also have a favor to ask of you! CarbonPlan will continue to develop and share methods for evaluating carbon removal solutions in collaboration with the scientific community. If you have found value in this work – either the database of public reports or the summary articles – we’d be grateful to hear what you have used, or additional features or products you might find useful. Reach out at hello@carbonplan.org or on twitter [@carbonplanorg](https://twitter.com/carbonplanorg).

<Endnote label='Credits' divider>

Freya led data analysis and wrote the first draft of the article. All authors contributed to analyzing the data and writing the article. Joe and Jeremy designed and built the data architecture and web tools.

Please cite as:

F Chay, J Zelikova, D Cullenward, J Hamman, J Freeman (2021) “New lessons from reviewing carbon removal proposals” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/stripe-2021-insights](https://carbonplan.org/research/stripe-2021-insights)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan received [funding from Stripe](https://carbonplan.org/funding) to support the development of the new, open source carbon removal application referenced in this article and used by Stripe for their 2021 carbon removal solicitation. Stripe provided CarbonPlan with early access to now-public proposals for the purpose of this analysis. CarbonPlan received no access to information about projects beyond what Stripe has made publicly available. Stripe did not exercise any control over this work, nor did they use this information in their decision making. CarbonPlan received [funding from ClimateWorks](https://carbonplan.org/funding) to support the analysis of the technological carbon removal proposals. The rest of the work was supported through our unrestricted funding. CarbonPlan is solely responsible for the content of its project reports and this writeup, which do not represent the views of ClimateWorks, Stripe, or any other other organizations.

Article text and figures made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/). Implementation of the [CDR Database](https://github.com/carbonplan/cdr-database) made available under an [MIT license](https://github.com/carbonplan/cdr-database/blob/main/LICENSE). Contents of the CDR Database made available under a [CC-BY 4.0 International](https://creativecommons.org/licenses/by/4.0/) license.

</Endnote>
