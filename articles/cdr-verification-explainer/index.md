---
id: cdr-verification-explainer
version: 1.0.0
date: 09-19-2022
color: pink
title: Verification Confidence Levels for carbon dioxide removal
authors:
  - Freya Chay
  - Joanna Klitzke
  - Zeke Hausfather
  - Kata Martin
  - Jeremy Freeman
  - Danny Cullenward
quickLook: A new tool for exploring quantification capacity and uncertainty across CDR pathways
summary: We developed an interactive tool to map quantification capacity and uncertainty across CDR pathways. Read this article, explore the interactive tool, or read Frontier’s post to learn more.
icon: articles/019/tape-small
background: articles/019/tape
card: cdr-verification-explainer
components:
  - name: PathwayDiagram
    src: ./components/pathway-diagram.js
  - name: UncertaintyDimensions
    src: ./components/uncertainty-dimensions.js
  - name: VCLChart
    src: ./components/vcl-chart.js
  - name: VCLTable
    src: ./components/vcl-table.js
  - name: Equation
    src: ./components/equation.js
links:
  - label: Interactive tool
    href: /research/cdr-verification
  - label: Methods
    href: /research/cdr-verification-methods
  - label: Frontier post
    href: http://frontierclimate.com/writing/quantifying-delivered-cdr
---

The growth and integrity of permanent carbon dioxide removal (CDR) will require developing robust approaches to measurement, reporting, and verification (MRV).<Sidenote>The acronym MRV can also be defined as "monitoring, reporting, and verification." Some also refer to MMRV, "measurement, monitoring, reporting, and verification."</Sidenote> High-quality MRV should produce trustworthy, quantitative estimates of real-world outcomes, and communicate those findings and the methods underlying them in a consistent and transparent manner.

To date, investments in CDR, including via the [purchase of carbon credits](https://www.cdr.fyi/), have happened without standardized MRV approaches. This hasn’t necessarily slowed down innovation — early-stage CDR projects have been operating on small scales, and early-stage buyers have invested time and resources into project-level diligence and bespoke verification. However, a more systematic approach to CDR MRV [will be needed](https://carbonplan.org/research/cdr-scale-barriers) in the years ahead to track the performance of different CDR approaches and maintain high-quality standards as the market grows. This need is widely recognized, with a growing body of [publications](https://doi.org/10.1080/14693062.2022.2094308), [white papers](https://oceanvisions.org/our-programs/macroalgaeresearchframework/), [conferences](https://www.us-ocb.org/marine-co2-removal-workshop/), [funding calls](https://www.additionalventures.org/initiatives/climate-action/oae-research-award/), and [company-led efforts](https://charmindustrial.com/blog/our-path-towards-monitoring-reporting-and-verification) aimed at advancing the conversation.

To help inform CDR MRV efforts moving forward, Frontier and CarbonPlan collaborated on an [interactive tool](https://carbonplan.org/research/cdr-verification) that maps out the key uncertainties associated with quantifying net carbon removal and storage durability outcomes for six CDR pathways:

- Direct air capture
- Biomass carbon removal and storage
- Enhanced weathering
- Ocean alkalinity enhancement
- Terrestrial biomass sinking
- Ocean biomass sinking

Together we also developed a metric called the Verification Confidence Level (VCL), which summarizes our uncertainty mapping for each pathway and represents our confidence that carbon removal outcomes can be accurately quantified using the best scientific understanding, measurement, and modeling approaches available today.

Below, we explain the uncertainty mapping and VCL metric in more detail and share key takeaways and tensions that will inform our work moving forward. Alongside this explainer, read [Frontier’s post](http://frontierclimate.com/writing/quantifying-delivered-cdr) to learn how Frontier is incorporating lessons from this work into their purchasing strategy.

## Uncertainty mapping

Robust quantification of carbon removal and storage durability is critical for understanding the real-world outcomes and performance of different CDR approaches over time. Ideally, CDR outcomes would be quantified within a broader MRV system that sets clear standards and facilitates trustworthy data acquisition and reporting. In the absence of such a system, it is important that both CDR projects and CDR buyers work toward high-quality quantification approaches.

The goal of our uncertainty mapping is to systematically identify (1) what needs to be quantified to estimate net carbon removal and carbon storage durability, (2) what can be measured or modeled today to make those estimates, and (3) what uncertainties remain even when relying on the best available quantification approaches. Since CDR pathways are diverse in approach and maturity, the tools available to make key quantitative estimates vary greatly — as do their associated uncertainties.

With input from more than 30 CDR companies, external scientific experts, and system actors,<Sidenote>See the full list of parties who gave input in [our methods](/research/cdr-verification-methods#acknowledgments). Any errors remain our sole responsibility.</Sidenote> we identified a set of quantification components for each CDR pathway that governs estimates of net carbon removal and storage durability.

<Figure>
  <PathwayDiagram />
  <FigureCaption number={1}>
    An example pathway annotated with numbered quantification components. These
    components represent discrete parts of the CDR process that must be
    quantified in order to estimate <Orange>drawdown</Orange>,{' '}
    <Yellow>emissions</Yellow>, and <Pink>durability</Pink>.
  </FigureCaption>
</Figure>

No quantification approach can perfectly estimate real-world outcomes because all measurements and models are subject to uncertainty. Some approaches to quantification are characterized by low uncertainty, and accordingly support a relatively high-confidence understanding of real-world outcomes. Other approaches are characterized by higher uncertainty, and do much less to constrain our understanding. As a result, a rigorous quantification approach should characterize uncertainty alongside estimates of key outcomes.

Drawing from the best quantification approaches available today, we characterized the uncertainty associated with each component along three dimensions — each of which is explored in further detail below.

<Figure>
  <UncertaintyDimensions />
</Figure>

Throughout the uncertainty mapping, we distinguish between CDR pathways, CDR approaches, and CDR projects. Within a CDR pathway like ocean alkalinity enhancement, there may be several distinct approaches — for example, introducing alkalinity directly into the ocean in an aqueous form or through mineral dissolution. Similarly, there may be multiple projects trying to implement a given CDR approach in the real world using different execution strategies. Our uncertainty mapping primarily applies to CDR approaches, meaning that it describes the range in which projects are likely to operate, but it does not directly characterize the uncertainty related to any particular project. We try to indicate clearly where project execution strategies may create meaningful differences in uncertainty characterization.

### 01 — Uncertainty impact

The first dimension we considered was the extent to which the uncertainty associated with a given component could impact the final estimate of carbon removal or storage duration. We classified the potential uncertainty impact of each component as having a negligible ({'<'}1%), low (1-5%), medium (5-20%), high (20-50%), or very high ({'>'}50%) potential impact. In some cases, project-level choices made within a single CDR pathway could notably change uncertainty estimates — for example, choosing among several potential biomass feedstocks or storage strategies might substantially increase or decrease uncertainty. In such cases, we assigned a range of potential impacts.

Note that this metric represents a combination of both how wide a component’s uncertainty bounds are (assuming the best practice quantification approach is followed) as well as how important the component is to the overall calculation of carbon removal or storage durability. For example, a highly uncertain component could have a low uncertainty impact if it plays a minor role in determining net carbon removal. Conversely, if the component plays a major role, it could have a relatively high uncertainty impact even if it can be estimated with only modest uncertainty.

### 02 — Uncertainty type

The second dimension we considered was the type of unknown underlying a given quantification uncertainty. We identified three uncertainty types that we think provide intuition about the kinds of efforts needed to reduce uncertainty over time.

Execution uncertainties relate to the execution or operation of a project, its reporting, or its calculations. In most cases, execution uncertainty pertains to how well we know what was done — for example, how many tons of macroalgae grew or how much CO₂ was injected for geologic storage? These drivers of uncertainty can often be mitigated through careful deployment of existing tools and practices.

Scientific uncertainties arise from an incomplete understanding of the processes or ecosystem responses associated with a quantification component — for example, how much alkalinity is transferred to deeper ocean waters before resulting in atmospheric CO₂ removal? Generally, scientific uncertainties require broader research efforts to develop new understanding or tools.

Counterfactual uncertainties arise from assumptions about what would have happened in the absence of a project. Since a counterfactual can never be observed directly, this uncertainty depends on how well we can bound counterfactual scenarios that may change over time — for example, what would have happened to a biomass feedstock if it wasn’t used for CDR?

### 03 — Uncertainty responsibility

Finally, we labeled each component to indicate our perspective on who should be primarily responsible for reducing the associated uncertainty.

In cases where uncertainty depends on a project’s operational choices or could be appropriately addressed through project-specific R&D efforts, we assigned project responsibility. In cases where reducing uncertainty requires broader scientific research or cross-project coordination that cannot (or should not) be carried out by a single project, we assigned system responsibility.

With the system responsibility classification, our intent is not to imply that projects can ignore these uncertainties, but rather to emphasize that some differentiation exists between developing deployment capacity and working on the fundamental science. We believe fundamental science should be shared across the field rather than being the responsibility or intellectual property of a single project. Incentive systems, in turn, must be thoughtfully designed to encourage project contributions to the reduction of system uncertainties.

## Verification Confidence Levels (VCLs)

To summarize the uncertainty mapping, we developed the Verification Confidence Level (VCL) metric. The VCL range for each pathway assesses the extent to which net carbon removal and durability can be confidently quantified using the best approaches available today. We hope the field will work together to shift these VCL ranges to the right over time, and in the process, carefully consider the trade-offs different CDR approaches present between uncertainty, cost, and potential for scale.

<Figure>
  <VCLChart />
  <FigureCaption number={2}>
    The Verification Confidence Level (VCL) metric represents our confidence
    that carbon removal and storage durability outcomes can be accurately
    quantified using the best scientific understanding, measurement, and
    modeling approaches available today. Each CDR pathway is associated with a
    range of VCLs, which captures differences between potential approaches
    within each pathway and the associated quantification uncertainties.
  </FigureCaption>
</Figure>

Our analysis of a pathway’s component uncertainties directly determines its VCL range. Specifically, we determine a pathway’s VCL by counting the number of components with a medium, high, or very high uncertainty impact.

<Figure>
  <VCLTable />
</Figure>

Most pathways are associated with a range of VCLs, rather than a single VCL, due to the diversity of approaches within a given pathway. To continue the example used above, an ocean alkalinity enhancement (OAE) project could introduce alkalinity directly (e.g., via aqueous NaOH) or in a mineral form that has to dissolve to release alkalinity (e.g., olivine). The dissolution and precipitation dynamics of the mineral approach lead to significant uncertainty about how much alkalinity is actually introduced to the surface ocean and, therefore, how much carbon removal occurs. As a result, we classify mineral-based OAE as VCL 1-2, direct alkalinity addition as VCL 3, and the OAE pathway as a whole as VCL 1-3. A pathway-level VCL does not guarantee that individual projects within that pathway are executing on best practice quantification approaches. For example, even though OAE is classified as VCL 2-3, an OAE project could fail to carefully characterize their alkalinity additions and functionally be at VCL 1.

Like the uncertainty mapping, the pathway VCL ranges represent a current snapshot of the field that will change over time through research and innovation. Investing in low-VCL pathways to reduce uncertainties will help enable the development of novel CDR approaches with high potential. In short, we think a low VCL should be a barrier to scaling, but not a barrier to exploration.

## Takeaways and tensions

Although this work focused on the quantification of carbon management outcomes, a system for high-quality MRV will also need to grapple with a broader set of questions. Critically, our uncertainty mapping does not include uncertainties related to broader impacts on ecosystems or communities — dimensions which must inform decisions to invest in and scale CDR approaches. A [code of conduct](https://www.agu.org/-/media/Files/Learn-About-AGU/AGU-Climate-Intervention-Ethical-Framework.pdf) could be one mechanism to ensure these dimensions are adequately addressed in research and deployment. In addition, a system for CDR MRV must navigate important governance questions about who should do what — and with which incentives — to maintain a trustworthy system over time.

Below, we share three additional takeaways and tensions that will inform our ongoing thinking about the unique challenges of designing a system for CDR MRV.

### 01 — Incorporating uncertainty into the framing of deliveries

In order to normalize our understanding of real-world outcomes across CDR pathways, an MRV process must include a robust characterization of uncertainty. Furthermore, this uncertainty must be incorporated directly into the framing of claimed outcomes. This is not a new idea — carbon offset registries often apply an uncertainty deduction when issuing carbon credits. However, such deductions are not used consistently in the permanent CDR space today and will be critical to get right given the diversity of approaches.

Because the efficacy of different CDR approaches will be measured in part using cost per ton of carbon removed, clear expectations around how that metric incorporates uncertainty will be critical for comparability and consistency. We suggest cost per ton should be reported as:

<Equation />

Ideally, each component of the above equation would be reported separately in addition to the top-level cost per ton metric.

### 02 — Differentiating between “ton mode” and “exploration mode”

As carbon markets, MRV capacity, and novel CDR approaches evolve in tandem, it will be critical to clearly differentiate between “ton mode” and “exploration mode” — that is, to distinguish between claimed outcomes that are reasonably reliable for carbon accounting purposes and those that are more aspirational in nature.

In general, it is reasonable to credit projects for outcomes that can be quantified with high certainty.<Sidenote>Note that there is a separate conversation to be had about whether or not supporting CDR through credit-based mechanisms makes sense in the long run.</Sidenote> As certainty decreases, however, we have two concerns.

First, because uncertainty should be factored into any credited tons, determining the total number of tons credited to a project will increasingly turn not on observational insights, but on a representation of quantification uncertainty.

Second, when quantification of outcomes is highly uncertain, the characterization of uncertainty itself becomes more uncertain. Under these conditions, crediting tons is potentially problematic as an incorrect understanding of a fundamental piece of the system could inappropriately credit a significant number of tons. While our VCL metric doesn’t explicitly estimate the risk of these “unknown unknowns,” we believe that the risks are correlated with the VCL metric.

How to draw the line between ton mode and exploration mode is inescapably subjective, so it will likely be challenging to set up a sharp threshold between the two. We hope our VCL metric can [help inform](http://frontierclimate.com/writing/quantifying-delivered-cdr) these decisions.

Ultimately, we believe buyers should match their goals to the level of uncertainty in each CDR pathway. If one aims to justify carbon accounting claims with purchased tons, it is more appropriate to purchase from high-VCL pathways that are ready for “ton mode.” Buying from low-VCL pathways in “exploration mode” can be a high-leverage strategy to help the ecosystem develop, but the goal should be supporting projects that contribute to our collective understanding of the efficacy and safety of early-stage approaches — not purchasing credits to make carbon accounting claims.

### 03 — Differentiating between project- and system-level responsibilities

In our uncertainty mapping, we characterized different components as either project or system responsibilities. Ideally, differentiating between these responsibilities will allow projects to focus their resources on uncertainties for which they have applicable expertise, and encourage them to contribute to larger system efforts for which results should be shared across the field.

This differentiation also means that system actors need to mobilize and coordinate around some big open questions. Challenges include facilitating sufficient investment, thoughtfully prioritizing investment across different pathways, and figuring out how to incentivize and reward project-level contributions to system-level questions. There is a clear need for well-funded academic and industry partnerships that can enable higher quantification confidence at lower cost, including through long-term experiments that reduce pathway uncertainties. This is particularly true for pathways like enhanced rock weathering and ocean-based technologies, for which net carbon removals cannot be precisely measured at this time.

Another system responsibility is the development of structures — organizations, standards, or otherwise — that facilitate high-quality CDR MRV on an ongoing basis. To ensure correct incentives, we think it is important that these structures are not set up by projects — which means other system actors will need to contribute, financially and otherwise, to make this ecosystem a reality.

## What comes next?

There’s a lot of work left to do when it comes to CDR MRV. We’re excited to see a community forming around this topic, and we hope this work contributes to the conversation.

With a shared vision and commitment to high-integrity outcomes, we hope it will be possible to create a CDR ecosystem that (1) is transparent about uncertainty and ensures that climate claims made publicly are true, (2) supports innovation and exploration, (3) does not scale approaches until there is confidence about their efficacy and safety, (4) incentivizes efforts that reduce project- and system-level uncertainties over time, and (5) avoids performative compliance and incorporates learning quickly. A systematic approach to characterizing the readiness of MRV across CDR pathways will be necessary to get there.

In the near term, we recognize that buyers, CDR companies, and scientific experts will have to work together to fill the gaps. You can [read more in their post](http://frontierclimate.com/writing/quantifying-delivered-cdr) about how Frontier — as a leading early buyer — will incorporate learnings from this assessment into their purchasing approach.

In the medium term, there might be a role for a new, independent, third-party organization to establish MRV best practices and coordinate verification efforts across different pathways. There may also be a role for third-parties with deep expertise and capacity in specific pathways to provide more targeted measurement, modeling, and/or auditing services. These roles could potentially be filled by nonprofits, for-profits, or government agencies — but in any configuration it will be critical to avoid conflicts of interest.

Moving forward, both of our teams look forward to continued engagement on this topic. We plan to update this tool on at least an annual basis — both to reflect changes within pathways that are already included in the tool, as well as to add pathways like the mineralization of mine tailings, biochar, direct ocean capture, and terrestrial biomass burial. As always, we invite your feedback at any point along the way.

We will also be looking for opportunities to support the conversation through webinars, discussion forums, conferences, and more. Please be in touch if you are interested in collaborating.

<Endnote label='Credits' divider>

Freya, Joanna, and Zeke led the uncertainty mapping and development of the VCL framework, with support from Frontier and CarbonPlan team members. Freya wrote the first draft of the article. All authors contributed to the analysis and to writing the article. Kata built the web tool with help from Jeremy and Raphael Hagen.

This work was informed by the input and feedback from more than [30 external parties](/research/cdr-verification-methods#acknowledgments), including independent scientists, CDR companies, and other ecosystem actors. The authors are solely responsible for any remaining mistakes or omissions.

Please cite as:

F Chay, J Klitzke, Z Hausfather, K Martin, J Freeman, D Cullenward (2022) “Verification Confidence Levels for carbon dioxide removal” CarbonPlan [https://carbonplan.org/research/cdr-verification-explainer](https://carbonplan.org/research/cdr-verification-explainer)

</Endnote>

<Endnote label='Terms'>

CarbonPlan and Frontier collaborated on this work using their own individual funding resources. CarbonPlan used unrestricted funding from Additional Ventures to support our engagement, and previously provided modest paid consulting services associated with Stripe’s [first two purchase rounds in 2020 and 2021](https://carbonplan.org/funding). The authors are solely responsible for the content of the analysis and this write-up, which do not represent the views of any other organizations or individuals.

Article text and figures are made available under a CC-BY 4.0 International license. Implementation of the uncertainty mapping tool is made available under an MIT license. Uncertainty mapping content is made available under a CC-BY 4.0 International license.

</Endnote>
