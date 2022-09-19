---
date: 09-19-2022
title: CDR Verification Framework — Methods
card: cdr-verification-explainer
quickLook: TK
back: /research/cdr-verification-explainer
slug: cdr-verification-methods
components:
  - name: Figure
    src: '@carbonplan/components'
  - name: Table
    src: '@carbonplan/components'
  - name: TableCaption
    src: '@carbonplan/components'
  - name: UncertaintyDimensions
    src: ./components/uncertainty-dimensions.js
  - name: VCLTable
    src: ./components/vcl-table.js
---

# CDR Verification Framework — Methods

A system for CDR MRV must produce robust, quantitative estimates of net carbon removal and storage durability for different CDR pathways. Since CDR pathways are diverse in their approach and maturity, the tools available to make those estimates vary greatly — as do their associated uncertainties.

With the aim of contributing to a solid foundation for future conversations about CDR MRV, Frontier and CarbonPlan collaborated to develop an [interactive tool](https://carbonplan.org/research/cdr-verification) that allows users to explore the quantification capacity and key uncertainties we see in different CDR pathways today. The interactive tool currently includes our assessment of six CDR pathways:

- Direct air capture (DAC)
- Biomass carbon removal and storage (BiCRS)
- Enhanced weathering
- Ocean alkalinity enhancement (OAE)
- Terrestrial biomass sinking
- Ocean biomass sinking

We chose these pathways based on approaches that are currently a part of [Stripe’s permanent CDR portfolio](https://stripe.com/climate). This is not an exhaustive set of long-duration CDR approaches, and we hope to assess additional CDR pathways in the future.

For each CDR pathway, we identified components of the process that must be quantified via an MRV process to estimate the net carbon removal or storage durability achieved. For each component, we identified the current “best practice” approach to quantification, characterized the associated uncertainty, and reflected our perspective on who should be responsible for improving quantification methods and reducing uncertainty over time.

We rolled up our element-level assessment of uncertainty into a pathway Verification Confidence Level (VCL) rating, which represents our high-level assessment of how confidently outcomes from a particular CDR pathway can be quantified using the best methods and tools available today. VCLs range from 1, which represents the most uncertain pathway, to 5, which indicates a high-confidence outcome.

Read our [explainer](carbonplan.org/research/cdr-verification-explainer) for a summary of the key takeaways and tensions that emerged from the process of building this tool. Read [Frontier’s post](http://frontierclimate.com/writing/quantifying-delivered-cdr) to learn how they are incorporating lessons into their upcoming purchase cycles.

## Uncertainty mapping — Framework

Robust quantification of carbon removal and storage durability is critical for understanding the real-world outcomes and performance of different CDR approaches over time. Ideally, CDR outcomes would be quantified within a broader MRV system that sets clear standards and facilitates trustworthy data acquisition and reporting. In the absence of such a system, it is important that both CDR projects and CDR buyers work toward high-quality quantification approaches.

The goal of our uncertainty mapping is to systematically identify (1) what needs to be quantified to estimate net carbon removal and carbon storage durability, (2) what can be measured or modeled today to make those estimates, and (3) what uncertainties remain even when relying on the best available quantification approaches. Since CDR pathways are diverse in approach and maturity, the tools available to make key quantitative estimates vary greatly — as do their associated uncertainties.

With input from more than 30 CDR companies, external scientific experts, and system actors, we identified a set of quantification components for each CDR pathway that govern estimates of net carbon removal and storage durability.

No quantification approach can perfectly estimate real-world outcomes because all measurements and models are subject to uncertainty. Some approaches to quantification are characterized by low uncertainty, and accordingly support a relatively high-confidence understanding of real-world outcomes. Other approaches are characterized by higher uncertainty, and do much less to constrain our understanding. As a result, a rigorous quantification approach should characterize uncertainty alongside estimates of key outcomes.

Drawing from the best quantification approaches available today, we characterized the uncertainty associated with each component along three dimensions — each of which is explored in further detail below.

<Figure>
  <UncertaintyDimensions />
</Figure>

Throughout the uncertainty mapping, we distinguish between CDR pathways, CDR approaches, and CDR projects. Within a CDR pathway like ocean alkalinity enhancement, there may be several distinct approaches — for example, introducing alkalinity directly into the ocean in an aqueous form or through mineral dissolution. Similarly, there may be multiple projects trying to implement a given CDR approach in the real world using different execution strategies. Our uncertainty mapping primarily applies to CDR approaches, meaning that it describes the range in which projects are likely to operate, but it does not directly characterize the uncertainty related to any particular project. We try to indicate clearly where project execution strategies may create meaningful differences in uncertainty characterization.

### 01 — Uncertainty impact

The first dimension we considered was the extent to which the uncertainty associated with a given component could impact the final estimate of carbon removal or storage duration. We classified the potential uncertainty impact of each component as having a negligible (<1%), low (1-5%), medium (5-20%), high (20-50%), or very high (>50%) potential impact. In some cases, project-level choices made within a single CDR pathway could notably change uncertainty estimates — for example, choosing among several potential biomass feedstocks or storage strategies might substantially increase or decrease uncertainty. In such cases, we assigned a range of potential impacts.

Note that this metric represents a combination of both how wide a component’s uncertainty bounds are (assuming the best practice quantification approach is followed) as well as how important the component is to the overall calculation of carbon removal or storage durability. For example, a highly uncertain component could have a low uncertainty impact if it plays a minor role in determining net carbon removal. Conversely, if the component plays a major role, it could have a relatively high uncertainty impact even if it can be estimated with only modest uncertainty.

### 02 — Uncertainty type

The second dimension we considered was the type of unknown underlying a given quantification uncertainty. We identified three uncertainty types which we think provide intuition about the kinds of efforts needed to reduce uncertainty over time.

Execution uncertainties relate to the execution or operation of a project, its reporting, or its calculations. In most cases, execution uncertainty pertains to how well we know what was done — for example, how many tons of macroalgae grew or how much CO₂ was injected for geologic storage? These drivers of uncertainty can often be mitigated through careful deployment of existing tools and practices.

Scientific uncertainties arise from an incomplete understanding of the processes or ecosystem responses associated with a quantification component — for example, how much alkalinity is transferred to deeper ocean waters before resulting in atmospheric CO₂ removal? Generally, scientific uncertainties require broader research efforts to develop new understanding or tools.

Counterfactual uncertainties arise from assumptions about what would have happened in the absence of a project. Since a counterfactual can never be observed directly, this uncertainty depends on how well we can bound counterfactual scenarios that may change over time — for example, what would have happened to a biomass feedstock if it wasn’t used for CDR?

### 03 — Uncertainty responsibility

Finally, we labeled each component to indicate our perspective on who should be primarily responsible for reducing the associated uncertainty.

In cases where uncertainty depends on a project’s operational choices or could be appropriately addressed through project-specific R&D efforts, we assigned project responsibility. In cases where reducing uncertainty requires broader scientific research or cross-project coordination that cannot (or should not) be carried out by a single project, we assigned system responsibility.

With the system responsibility classification, our intent is not to imply that projects can ignore these uncertainties, but rather to emphasize that some differentiation exists between developing deployment capacity and working on the fundamental science. We believe fundamental science should be shared across the field rather than being the responsibility or intellectual property of a single project. Incentive systems, in turn, must be thoughtfully designed to encourage project contributions to reducing system uncertainties.

## Uncertainty mapping — Methodological decisions

In addition to outlining the framework we used to map uncertainty across the pathways, we wanted to highlight a few methodological decisions that we think are important for interpreting our results.

### Considering ecosystem or community impacts

In this uncertainty mapping exercise, we focused on the specific steps required from CDR MRV to establish net carbon removal and permanence outcomes. This is only one part of the analytical challenge, however. A CDR procurement effort should also account for impacts on ecosystems and communities, especially when evaluating the scalability of different CDR pathways. For example, the impact of sinking biomass in the ocean on benthic communities requires evaluation, as do the ecosystem impacts of ocean alkalinity enhancement and heavy metal toxicity or fine silicate dust exposure risks from enhanced weathering on agricultural fields. Our work does not incorporate these considerations, but could be used as part of a broader analytical framework.

### Normalizing net carbon removal to atmospheric outcomes

Quantifying net carbon removal requires a standard frame of reference. Across our work here we defined net carbon removal specifically as the net mass of CO₂ removed from the atmosphere. The alternative framing we considered, but ultimately disfavored, was defining net carbon removal as the net mass of CO₂ moved from the fast carbon cycle to the slow carbon cycle. As explained further below, this decision affects the quantification of some pathways, particularly ocean biomass sinking.

When we burn fossil fuels, we move carbon that was part of the slow carbon cycle (geosphere) into one part of the fast carbon cycle (atmosphere). Fossil emissions increase the [total amount of carbon in the atmosphere for millennia](https://www.annualreviews.org/doi/abs/10.1146/annurev.earth.031208.100206), with impacts including long-term warming and ocean acidification. Accordingly, some define net carbon removal based on moving carbon in the reverse direction — from the fast carbon cycle back into the slow carbon cycle.

This fast-to-slow framing offers a number of advantages. Notably, it provides valuable intuition about what permanent CDR achieves, and why it’s different from approaches that manage the fast carbon cycle by storing carbon temporarily in soils or trees.

The fast-to-slow framing also simplifies the quantification of net carbon removal for certain CDR pathways. For example, macroalgae removes carbon from the surface ocean as it grows. If that macroalgae sinks to depth, the embodied carbon is transferred from the fast carbon cycle (surface ocean) to the slow carbon cycle (deep ocean). With a fast-to-slow framing, the quantification is relatively straightforward and doesn’t need to account for [complex air-sea gas exchange](https://meetingorganizer.copernicus.org/EGU22/EGU22-4699.html) dynamics, which govern how removing carbon from the surface ocean affects atmospheric carbon concentrations. (It’s also worth noting that there is some fuzziness about what counts as slow, given that the [ocean circulates globally](https://oceanservice.noaa.gov/education/tutorial_currents/05conveyor2.html) on the order of 1000 years — that’s significantly longer than carbon stays put in trees or soils, but much shorter than the atmospheric impacts of fossil carbon emissions.)

Despite the attractive qualities of the fast-to-slow framing, we think it’s important to normalize the quantification of net carbon removal to atmospheric outcomes for all CDR pathways. In the fast carbon cycle, carbon is partitioned between reservoirs like the atmosphere, the surface ocean, and terrestrial vegetation — all of which exchange carbon flows through a variety of mechanisms. If one perturbs any of these reservoirs, it takes time for the other reservoirs to equilibrate. Since the primary function of CDR in the foreseeable future is compensating for ongoing, hard-to-abate emissions in a net-zero framework, we think it is most appropriate to normalize claimed outcomes to the atmosphere. In other words, we think CDR “compensation” claims are only appropriate if one emits a ton of CO₂ into the atmosphere and takes a ton back out of the atmosphere and stores it for a reasonably comparable duration.

In addition to affecting ocean biomass sinking, this framing also has implications for approaches where an upfront action results in removals over time — like enhanced weathering — and for biomass carbon removal and storage (BiCRS) approaches that rely on biomass feedstocks. In the case of enhanced weathering, normalizing to atmospheric outcomes means that credited removals should accumulate over time based on the weathering curve of applied minerals. For BiCRS, credited removals should reflect the counterfactual decay time of biomass feedstock.

We recognize that understanding the role of carbon removal in the context of temperature management or cleaning up historic emissions requires a consideration of the partitioning dynamics between fast-cycle reservoirs. It also requires consideration of potential trade-offs between taking carbon out of the atmosphere versus other parts of the fast carbon cycle, which may, for example, represent trade-offs between temperature and ocean acidification benefits. For the time being, however, we encourage others to similarly quantify net carbon removal with respect to atmospheric outcomes for all CDR pathways to enable comparability and interpretability of claimed outcomes in the context of net-zero frameworks.

### Considering avoided emissions and temporary carbon removal benefits

Some CDR pathways might provide climate co-benefits that are not permanent carbon removal. For example, the application of basalt for enhanced weathering on agricultural fields could reduce the use of agricultural lime or fertilizer, thereby avoiding the associated emissions, and could also reduce N₂O emissions from applied fertilizer. Alternatively, the basalt application could impact soil carbon outcomes via changes to plant or microbial productivity. In our uncertainty mapping, we identify and characterize potential sources of avoided emissions or fast-cycle carbon removal associated with a CDR pathway.

It is clear to us that avoided emissions or temporary removals that are co-benefits of long-duration CDR activities should not be counted as supplemental permanent carbon removals. In the case of avoided emissions, we considered: (1) allowing avoided emissions to be weighed against a portion of a project’s life cycle emissions (e.g., allowing reductions in lime application to cancel out some of the emissions from grinding and spreading basalt), or (2) excluding avoided emissions co-benefits from the calculation of net carbon removal altogether.

It is not clear to us which option is preferable in cases where the avoided emissions are clearly quantifiable. In this mapping, we err on the side of excluding them from the accounting to be conservative. In cases where the avoided emissions are uncertain, we think they should be excluded from the calculation for conservativeness. Similarly, we advise that temporary carbon removals — such as enhanced soil carbon storage — be excluded from the calculation of permanent net carbon removals, though we have no objection to their separate monetization.

### Consistency around secondary impacts

A failure to consider larger system impacts has the potential to skew the perceived benefits of CDR pathways. We hope to avoid this by promoting an expansive view that includes both direct and indirect effects of each CDR pathway. For example, we think the potential for indirect land use change must be considered for any approach that relies on a biomass feedstock. Similarly, we think the secondary energy system impacts of new energy demand must be considered for energy intensive approaches like DAC or electrochemical OAE.

### Navigating counterfactuals

When considering project MRV, the issue of counterfactuals is both challenging and important. In our uncertainty mapping, we include emissions associated with potential secondary effects of CDR activities. For example, if a biomass feedstock currently serves a function that will need to be replaced (e.g., being tilled into the field to provide soil nutrients), we think the emissions associated with the replacement (e.g., additional fertilizer application) must be included in the quantification of net carbon removal achieved. However, we recognize that these secondary effects rely on a counterfactual assumption about what would have happened in the absence of the CDR activities.

In general, we focus on counterfactuals about existing uses and their associated secondary effects rather than potential uses in the future. For example, we think agricultural feedstocks for biomass carbon removal and storage (BiCRS) should be evaluated based on their current utilization (e.g., for animal feed or soil nutrients) rather than potential future uses that are not normally practiced today (e.g., use in alternative bioenergy applications). We recognize that the counterfactual for existing utilization should also be flexible to be reevaluated in the future if prevailing practices change.

## Verification Confidence Levels (VCLs)

To summarize the uncertainty mapping, we developed the Verification Confidence Level (VCL) metric. The VCL range for each pathway assesses the extent to which net carbon removal and durability can be confidendently quantified using the best approaches available today. We hope the field will work together to shift these VCL ranges to the right over time, and in the process, determine which CDR approaches should scale.

Our analysis of a pathway’s component uncertainties directly determines its VCL range. Specifically, we determine a pathway’s VCL by counting the number of components with a medium, high, or very high uncertainty impact.

<Figure>
  <VCLTable />
</Figure>

Constructing the VCL based on the count of medium, high, or very high uncertainties does mean that pathways with more steps are more likely to receive a low VCL. If the component uncertainties are independent, we think this is an appropriate outcome. For example, the chain of uncertainties within the ocean biomass sinking pathway are unlikely to be correlated — the uncertainty around macroalgae cultivation is not correlated to the uncertainty around air-sea gas exchange. In contrast, this construction could be problematic if component uncertainties are correlated. For example, in BiCRS, the uncertainties associated with the counterfactual feedstock storage, counterfactual feedstock use, and indirect land use change are all a function of the choice of feedstock — and therefore the presence of multiple uncertainty components could bias VCL assignments to this pathway downward.

Most pathways are associated with a range of VCLs, rather than a single VCL, due to the diversity of approaches within a given pathway. To continue the example used above, an ocean alkalinity enhancement (OAE) project could introduce alkalinity directly (e.g., via aqueous NaOH) or in a mineral form that has to dissolve to release alkalinity (e.g., olivine). The dissolution and precipitation dynamics of the mineral approach lead to significant uncertainty about how much alkalinity is actually introduced to the surface ocean and therefore how much carbon removal occurs. As a result, we classify mineral-based OAE as VCL 1-2, direct alkalinity addition as VCL 3, and the OAE pathway as a whole as VCL 1-3. A pathway-level VCL does not guarantee that individual projects within that pathway are executing on best practice quantification approaches. For example, even though OAE is classified as VCL 2-3, an OAE project could fail to carefully characterize their alkalinity additions and functionally be at VCL 1.

Like the uncertainty mapping, the pathway VCL ranges represent a current snapshot of the field that will change over time through research and innovation. Investing in low-VCL pathways to reduce uncertainties will help enable the development of novel CDR approaches with high potential. In short, we think a low VCL should be a barrier to scaling, but not a barrier to exploration.

## Feedback & updates

All of the content associated with this tool is publicly available and hosted on GitHub, and we welcome feedback on all aspects of our work.

CarbonPlan and Frontier plan to continue collaborating to update this tool on at least an annual basis moving forward. We will use these periodic updates to reflect changes within pathways that are already included in the tool as the field evolves. We also hope to add pathways to the tool, like the mineralization of mine tailings, biochar, direct ocean capture, and terrestrial biomass burial.

Of course, we are committed to fixing any mistakes! If you identify a specific issue with our uncertainty characterization or pathway diagrams, please send us an email at hello@carbonplan.org. The uncertainty mapping reflects our independent analysis of the current state of the field, but we always have more to learn. If we got something wrong when we last updated the tool, we will fix it as quickly as possible.

If you identify a general issue with our methods or the tool, please send us an email at hello@carbonplan.org. We are committed to updating and improving this framework over time, and will gladly consider suggestions or engage with potential collaborators.

## Acknowledgments

At multiple points in the process, we have received important input and feedback from external experts, including CDR companies, scientists, and other CDR ecosystem actors. Any remaining mistakes or mischaracterizations are the authors’ sole responsibility.

<Figure>
  <Table
    columns={[3, 3, 3, 3]}
    start={[
      [1, 1, 1, 1],
      [1, 2, 2, 2],
    ]}
    width={[
      [3, 1, 1, 1],
      [3, 2, 2, 2],
    ]}
    data={[
      [
        'CDR Companies',
        'Charm, Ebb, Eion, Future Forest, Heirloom, Running Tide',
      ],
      [
        'Scientific Experts',
        'Bill Collins (LBNL), David Ho (University of Hawaiʻi at Mānoa), Fabiano Ximenes (NSW Government), Jens Hartmann (Institut für Geologie), Kate Maher (Stanford), Matt Long (NCAR), Newsha Ajami (LBNL), Pura Bithakre (LBNL), Sarah Saltzer (Stanford), Sophie Gill (University of Oxford), Susana García López (Heriod-Watt University)',
      ],
      [
        'Ecosystem Actors',
        'Antonius Gagern (Additional Ventures), Benjamin Tincq (Marble), Clea Kloster (Lowercarbon Capital), Dai Ellis, David Keith (Harvard Kennedy School / Carbon Engineering), Jamie Collins (Environmental Defense Fund), John Sanchez (Lowercarbon Capital), Marcelo Lejeune (Marble), Max Tuttman (Ad Hoc Group), Peter Minor (Carbon 180), Ryan Orbuch (Lowercarbon Capital)',
      ],
      [
        'MRV Companies',
        'Elizabeth Troein (Exponential), Mowgli Holmes (Submarine)',
      ],
    ]}
  />
</Figure>

## Terms

The contents of this tool are made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/), which means that you may share or adapt the data or diagrams so long as you provide attribution (see the full license for details). The code powering this website is released under an [MIT license](https://github.com/carbonplan/cdr-verification/blob/main/LICENSE).

Please cite this tool as:

F Chay, J Klitzke, Z Hausfather, K Martin, J Freeman, D Cullenward (2022) “CDR Verification Framework” CarbonPlan [carbonplan.org/research/cdr-verification](carbonplan.org/research/cdr-verification)

Please cite this methods doc as:

F Chay, J Klitzke, Z Hausfather, K Martin, J Freeman, D Cullenward (2022) “CDR Verification Framework — methods” CarbonPlan [carbonplan.org/research/cdr-verification-methods](carbonplan.org/research/cdr-verification-methods)
