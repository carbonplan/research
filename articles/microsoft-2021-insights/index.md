---
id: microsoft-2021-insights
version: 1.1.0
date: 03-17-2021
title: Insights from analyzing a new round of carbon removal projects
authors:
  - Freya Chay
  - Danny Cullenward
  - Joseph Hamman
  - Jeremy Freeman
color: secondary
quickLook: Project reports and lessons learned from analyzing proposals for Microsoft's 2021 Carbon Removal procurement
background: articles/007/sign
card: microsoft-2021-insights
summary: We analyzed project proposals submitted for Microsoft's 2021 Carbon Removal Purchase. Read this article or explore our updated database of project reports for our takeaways and lessons learned.
icon: articles/007/sign-small
links:
  - label: Database tool
    href: /research/cdr-database
components:
  - name: InlineCheck
    src: ../../components/inline-check.js
  - name: Distributions
    src: ./components/distributions.js
  - name: Metrics
    src: ./components/metrics.js
  - name: Numbers
    src: ./components/numbers.js
  - name: Oxford
    src: ./components/oxford.js
  - name: Validation
    src: ./components/validation.js
---

CarbonPlan analyzes carbon removal projects and programs because we believe these activities will play an important role in addressing the climate crisis. In 2020, we began building a publicly accessible [database](https://carbonplan.org/research/cdr-database) of carbon dioxide removal project reports. The purpose of this database is to help engender a culture of openness, transparency, and accountability for those participating in the field of carbon removal.

We previously summarized [our insights](https://carbonplan.org/research/stripe-2020-insights) from analyzing 24 proposals submitted in response to [Stripe’s first carbon removal purchase](https://stripe.com/blog/first-negative-emissions-purchases). We are now releasing a major update to our database, adding analysis of 161 proposals submitted in response to [Microsoft’s 2021 carbon removal purchase](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4MDlc). We also took this opportunity to redesign the [web interface](https://carbonplan.org/research/cdr-database) for improved performance and usability.

This article summarizes key takeaways from our new analysis. Please note that our work represents only CarbonPlan’s views, not those of Microsoft or any other organizations. Although we did this analysis using our unrestricted funding, Microsoft AI for Earth supports CarbonPlan’s work on [other projects](https://carbonplan.org/funding).

## What we did

In early 2020, Microsoft announced a [commitment to purchase carbon removal](https://blogs.microsoft.com/blog/2020/01/16/microsoft-will-be-carbon-negative-by-2030/) with the goal of reaching net negativity by 2030. In response to a July 2020 [call for carbon removal projects](https://blogs.microsoft.com/on-the-issues/2020/07/21/carbon-negative-transform-to-net-zero/), Microsoft received at least 189 proposals. Combined, these projects offered a total removal volume of 165 million tCO₂ — though as we will discuss below, it was difficult to validate volumes, and some projects claimed to perform carbon removal while actually avoiding emissions. Microsoft reviewed the proposals with help from Carbon Direct and Winrock International, and [ultimately purchased](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4MDlc) projects offering more than 1.3 million tCO₂ of carbon removal.

We received early access to these now-public proposals to perform our independent analysis. We evaluated 161 of 189 proposals, excluding 28 because of missing, incomplete, or duplicative information (see Figure 1).

<Figure>
  <Numbers />
  <FigureCaption number={1}>
    Summary numbers across the project proposals we analyzed. All fractions are
    expressed in terms of volume (which is in units of tCO₂).
  </FigureCaption>
</Figure>

While existing registries and protocols purport to standardize aspects of carbon removal procurement, we were struck by the enormous diversity of proposals. 16 registries and 45 unique protocols were represented — and still, less than 30% of projects had any affiliation with a registry or protocol. As [highlighted by Carbon Direct](https://carbon-direct.com/responsible-carbon-removal-means-putting-science-first/), we also found that the existence of registry listings did not reliably predict project quality one way or the other, although projects on registries were likely to feature more public project documentation than those that were not.

Using the public proposals, project websites, registry listings, and published literature, we analyzed each of the 161 proposals on the basis of [seven harmonized metrics](https://carbonplan.org/research/cdr-database/methods).

<Figure>
  <Metrics />
</Figure>

Metric validation is done on the basis of project proposals, which may or may not reflect reality; we do not purport to verify what projects claim, only to analyze the consistency and validity of the claims themselves. Volume in particular, must be interpreted with care because applicants appear to have made different, diverging assumptions around what numbers to report. We saw offers of volumes already generated, volumes to be generated in the coming year, and volumes to be generated over the next decade or more. This variety, which we attempt to document in the database notes and comments, reflects the complex reality of what projects are attempting to achieve on the ground — a reality that buyers must understand to make responsible decisions. As a result, the numbers should not be compared on an apples-to-apples basis without paying close attention to the details.

Distributions of volume and permanence across projects reveal familiar patterns, with notable categorical distinctions (Figure 2). Forest and soil projects tend to have the largest volumes and the lowest permanence, though we again caution that volumes should not be taken at face value. Permanence is generally higher for biomass projects, and 1000+ years or more is common for mineralization and direct air capture. Volumes claimed for these categories vary widely, depending on whether projects proposed prototypes in progress, speculative future plans, or something in between. All three direct air capture projects, in particular, proposed scaling up existing deployments and thus offered very large volumes.

<Figure>
  <Distributions />
  <FigureCaption number={2}>
    Distributions of volume (above) and permanence (below) across six project
    categories: <Green>forests</Green>, <Orange>soil</Orange>,{' '}
    <Yellow>biomass</Yellow>, <Teal>ocean</Teal>, <Grey>mineralization</Grey>,{' '}
    <Purple>direct air capture</Purple>. Each circle represents a project, and
    curves show the distribution using a kernel density estimate. Values reflect
    project proposals and may not necessarily be accurate or realistic.
  </FigureCaption>
</Figure>

To help guide interpretation of these metrics, we validate with a <InlineCheck/> the mechanism, volume, negativity, and permanence of each project if we can independently confirm claims with reasonable confidence, based on the best available science, data, and public documentation. Where we don’t feel confident about validation, we simply report the project claim without giving it a <InlineCheck/>. In the case of additionality (would the claimed climate benefits occur without the project?) and specificity (was there enough information for us to perform our analysis?) we assign a qualitative score on a scale of 1 to 3.

For this update to our database, we have also included a cross-cutting project score on a 5-point scale. This score integrates our efforts to validate projects across all metrics, with 1 point each for validation of mechanism, volume, negativity, and permanence. We then add 1 point for a perfect score on additionality, or subtract 1 point for the lowest score on additionality.

Finally, because Microsoft did not ask projects to make their prices public, we did not include or analyze this metric for this batch of projects.

## Takeaways

We learned a lot performing this analysis, both from the content of the proposals and from the process of evaluating them. Here we summarize a few key takeaways.

### It’s still hard to say much with confidence

In our previous round of analysis, we often found ourselves unable to confidently and independently validate projects’ claims. That was also the case here (see Figure 3).

<Figure>
  <Validation />
  <FigureCaption number={3}>
    Fraction of validated projects across five metrics and six project
    categories: <Green>forests</Green>, <Orange>soil</Orange>,{' '}
    <Yellow>biomass</Yellow>, <Teal>ocean</Teal>, <Grey>mineralization</Grey>,{' '}
    <Purple>direct air capture</Purple>. Each bar shows the fraction of projects
    (from 0 to 1) in that category for which we were able to validate the given
    metric. In the case of additionality, which uses a 3 point scale, validation
    here is defined as a score of at least 2.
  </FigureCaption>
</Figure>

The missing information tended to vary by project category.

Forest projects were the largest group on offer, with proposals that were diverse in size, geography, and type. We were unable to validate most forest projects’ volume claims because we couldn’t infer a carbon removal rate (tCO₂/ha/yr) to compare with ecological data, often because volumes were not clearly parameterized by time or area. It was also difficult to distinguish claims of carbon removal from claims of avoided emissions — a key issue we discuss in more detail below.

Soil projects were even more challenging because they frequently lacked specificity about the actual interventions used to achieve carbon removal, beyond general categories such as “regenerative agriculture” or “improved grazing.” While there are some established pathways that increase soil organic carbon (SOC) through agricultural practices, rangeland management, and ecosystem restoration, the scale of potential impact varies based on the specifics of implementation, and also varies across space, time, and soil depth. Far more detail around SOC quantification is needed for validation — including modeling approach, sampling schedule, and sampling depth.

For biomass projects, volume validation was complex because of important nuances in lifecycle emissions accounting associated with our mechanism and negativity metrics. All biomass projects offered carbon removal, but from a narrow lifecycle perspective, we categorize them as avoiding CO₂ emissions from waste biomass that would otherwise decompose or combust. For that reason, validating volume requires information about the material produced — which was often thoroughly characterized — and also a comparison to the counterfactual decay rate of feedstocks. The latter is a tricky but important accounting step that we hope to help work more on in the future. The biomass category also featured BECCS projects, where the lack of [lifecycle emissions data](https://cdrprimer.org/read/chapter-4) made it difficult for us to validate negativity. Because this metric relates gross carbon removal to gross emissions, it is important for any project with the potential to create substantial emissions.

Negativity is similarly critical for direct air capture (DAC) projects, which may or may not achieve net-negativity depending on their emissions. Detailed disclosure requirements and standardized lifecycle assessment methods would help validate this metric more consistently. DAC projects varied along another key dimension: whether captured carbon will be used for enhanced oil recovery (EOR). This practice, in which captured CO₂ is reinjected to extract additional crude oil, raises critical questions around both negativity and additionality: Does EOR make the DAC project economically viable without additional carbon payments? If so, are additional carbon payments inducing a switch from EOR to geologic storage without EOR? What are the implications for the baseline scenario against which the carbon payment scenario is credited? Lastly, greater clarity is needed about project participation in compliance policy mechanisms like the [Low Carbon Fuel Standard (LCFS)](https://ww2.arb.ca.gov/our-work/programs/low-carbon-fuel-standard). Because the LCFS is a compliance program, any private claims to carbon removal that are “stacked” on top of LCFS credits issued to a project raise double-counting concerns.

Mineralization projects fell into two categories: surface mineralization with olivine, and CO₂ utilization in building materials like concrete and manufactured limestone. Validation of volumes for surface mineralization would benefit from clearer reporting on timelines, process models, and assumptions used to estimate cumulative carbon removals. Validation of utilization projects would benefit from reporting standards that differentiate CO₂ utilization from climate benefits generated by displacing conventional processes. Standards also need to distinguish between utilization of waste CO₂ (which is an avoided emission) and atmospheric CO₂ (which is carbon removal).

<PullQuote>
  Today's private markets are not supplying the level of disclosure required to
  fully vet these efforts, which makes screening more difficult and expensive
  for those seeking quality outcomes.
</PullQuote>

Ocean projects received no validation on volume or negativity because public data on efficacy are still pending, a situation that reflects the nascent stage of this category. We validated the mechanism for ocean projects that relied on known principles or past pilots, which here only included projects growing kelp and sinking it into the deep ocean. In our view, these low validation rates reflect the potential to learn more, rather than provide a criticism of current reporting quality.

Across all metrics and categories, our ability to validate project claims depends on access to public information, which was often lacking. From our perspective, a buyer that cares about quality must solicit sufficient information to enable a skeptical analysis. This means asking category-specific questions and getting projects to “show their work.” We recognize this is a big lift, both for buyers (which need to solicit the information) and projects (which need to share it). But without stronger disclosures, it’s almost impossible for companies — or the public — to know with confidence whether these activities are working. Today’s private markets are not supplying the level of disclosure required to fully vet these efforts, which makes screening more difficult and expensive for those seeking quality outcomes. More complete disclosures with higher standards for data quality, in turn, would make procurement easier for buyers.

### Permanent carbon removal is hard to find

Permanence is a critical dimension when considering carbon removal. Carbon dioxide emissions create an effectively permanent climate problem, so carbon removal needs to provide durable and ideally permanent storage. The recently proposed [Oxford Taxonomy of Offsets](https://www.smithschool.ox.ac.uk/publications/reports/Oxford-Offsetting-Principles-2020.pdf) distinguishes projects based on their mechanism (avoided emissions or carbon removal) and the permanence of any applicable carbon storage (short or long duration). The framework encourages buyers seeking to offset their emissions to shift their procurement decisions toward Type 5 (long duration carbon removal) as much as possible — and only after making deep cuts to existing emissions.

<Figure>
  <Oxford />
  <FigureCaption number={4}>
    Categorizing projects using the Oxford Taxonomy. Fractions falling into each
    category are expressed in terms of volume relative to the set purchased by
    Microsoft. Fractions were similar when expressed relative to the full set of
    proposals. Durations of “short” and “long” storage do not have strict
    definitions in the Oxford Taxonomy, so we assumed a threshold of 500 years
    to separate the categories.
  </FigureCaption>
</Figure>

Microsoft’s RFP solicited carbon removal, so it nominally considered only Types 4 and 5. The project proposals, however, included avoided emissions and carbon removal each with both short- and long-lived storage (Types 2 through 5).

Adding further confusion, a large number of proposals claimed to offer only the carbon removal portion (Type 4) of climate benefits from activities that produce both avoided emissions and carbon removal (Types 2 and 4). These claims, however, were nearly impossible to validate, so we consider these cases as a separate hybrid category. Most such proposals involved improved forest management (IFM), a practice in which forest harvest schedules are nominally changed to result in more forest growth and fewer emissions, but which has been [criticized as non-additional](https://www.bloomberg.com/features/2020-nature-conservancy-carbon-offsets-trees/).

Our most striking observation is that, of the projects that were proposed — and ultimately purchased — there are very few Type 5 tons (see Figure 4). In addition, the challenge of distinguishing Type 2 and Type 4 projects calls for a standardized disclosure paradigm, as we discuss more below.

### Systemic reporting challenges

To ensure integrity and additionality as the carbon removal field grows, transparent accounting and disclosure standards must become the norm. We were rarely able to ascertain with confidence what a project had already sold or promised to others — a particularly problematic finding given the prevalence of projects that produce both Type 2 and Type 4 tons. Buyers that want to secure a project’s Type 4 tons (carbon removal) need to have confidence that sellers are tracking and marketing their Type 2 tons (avoided emissions) separately. No one is independently doing that tracking today, so buyers must rely on private contracting to deliver their preferred outcomes. This gives sellers an informational advantage when marketing Type 4 tons to buyers and as global demand for carbon removal increases, creates an incentive for projects to exaggerate or double-count removal claims.

Additionally, because most credits on offer were not clearly vintaged, some projects offer carbon benefits that were generated years (or even decades) before the point of sale. Establishing industry standards around transparent accounting — including the ability to track carbon benefits produced and sold each year — could go a long way to addressing this challenge as markets scale.

There was even less information available for a host of critical governance and justice concerns. How are relevant stakeholders engaged? What are the impacts on local communities, land use, and connected ecosystems? What are key uncertainties associated with the proposal, and who stands to bear the environmental or economic burden if things go wrong? The pathway to improving transparency and accountability on these issues remains unclear, but starting these conversations and beginning to surface answers is critical to the future of the field.

## Conclusion

Our hope is that as we collectively learn about the landscape of carbon removal projects, the highest-quality projects will stand out, and the community will converge more quickly on the best solutions. We thank Microsoft and the participating projects for contributing to this ecosystem by making detailed project proposals public.

Moving forward, we recommend that both buyers and sellers demand standardized, public systems for disclosure and accounting. At a minimum, disclosure requirements should specify the vintage of all carbon benefits produced, track the shares that have been sold, and distinguish avoided emissions from carbon removal.

As we learn more, CarbonPlan will continue to develop and share methods for evaluating projects in close collaboration with the scientific community. We will also continue to expand our database of public reports to help keep the ecosystem pointed towards the highest-quality outcomes.

<Endnote label='Credits' divider>

Freya led data analysis and wrote the first draft of the article. Joe and Jeremy designed and built the data architecture and web tools. All authors contributed to analyzing the data and writing the article.

Please cite as:

F Chay, D Cullenward, J Hamman, J Freeman (2021) “Insights from analyzing a new round of carbon removal projects” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/microsoft-2021-insights](https://carbonplan.org/research/microsoft-2021-insights)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan received no specific financial support for this work, although Microsoft is supporting CarbonPlan’s research on [other topics](https://carbonplan.org/funding). Microsoft provided CarbonPlan with early access to now-public proposals for the purpose of this analysis. CarbonPlan received no access to information about projects beyond what Microsoft has made publicly available. Microsoft did not exercise any control over this work, nor did they use this information in their decision making. CarbonPlan is solely responsible for the content of its project reports and this writeup, which do not represent the views of Microsoft or any other other organizations.

Article text and figures made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/). Implementation of the [CDR Database](https://github.com/carbonplan/cdr-database) made available under an [MIT license](https://github.com/carbonplan/cdr-database/blob/main/LICENSE). Contents of the CDR Database made available under a [CC-BY 4.0 International](https://creativecommons.org/licenses/by/4.0/) license.

</Endnote>
