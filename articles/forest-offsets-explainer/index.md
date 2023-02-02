---
id: forest-offsets-explainer
date: 04-29-2021
title: Systematic over-crediting of forest offsets
authors:
  - Grayson Badgley
  - Jeremy Freeman
  - Joseph Hamman
  - Barbara Haya
  - Anna Trugman
  - William R L Anderegg
  - Danny Cullenward
color: green
quickLook: Statistical and ecological analysis reveals crediting errors in California's forest carbon offsets program
card: forest-offsets-explainer
background: articles/008/ash
summary: California's forest offset program is worth over $2 billion. We analyzed detailed public records to show how statistical flaws in the program's design have led to over-crediting — at a scale of tens of millions of tCO₂ and hundreds of millions of dollars.
version: 1.0.0
icon: articles/008/ash-small
links:
  - label: Publication
    href: https://doi.org/10.1111/gcb.15943
  - label: Map tool
    href: /research/forest-offsets-crediting
  - label: Press coverage
    href: https://www.propublica.org/article/the-climate-solution-actually-adding-millions-of-tons-of-co2-into-the-atmosphere
  - label: FAQ
    href: /research/forest-offsets-explainer-faq
components:
  - name: SummaryResults
    src: ./components/summary-results/index.js
  - name: ProgramOverview
    src: ./components/program-overview/index.js
  - name: AnalysisExplanation
    src: ./components/analysis-explanation/index.js
  - name: ProjectAnalysis
    src: ./components/project-analysis/index.js
  - name: SouthernCascades
    src: ./components/southern-cascades/index.js
  - name: Triangle
    src: ./components/triangle.js
---

Carbon offsets are widely used by individuals, corporations, and governments to mitigate their greenhouse gas emissions. Because offsets effectively allow pollution to continue, however, they must reflect real climate benefits.

To better understand whether these climate claims hold up in practice, we performed a comprehensive evaluation of California's forest carbon offsets program — the largest such program in existence, worth more than $2 billion. Our analysis of crediting errors demonstrates that a large fraction of the credits in the program do not reflect real climate benefits. The scale of the problem is enormous: 29% of the offsets we analyzed are over-credited, totaling 30 million tCO₂e worth approximately $410 million.

<Figure>
  <SummaryResults />
  <FigureCaption number={1}>
    Summary of results from our analysis of crediting error, in terms of net
    over-crediting, percentage relative to the projects we analyzed, and value
    in dollars assuming a credit value of $13.67. Each credit represents 1
    tCO₂e. Ranges report 5th and 95th percentiles of a bootstrapped distribution
    forming a 90% confidence interval.
  </FigureCaption>
</Figure>

This article provides an overview of how we identified crediting errors in California's offsets program. For a deeper dive on our methods and analysis, you can read [the paper](https://doi.org/10.1111/gcb.15943). To better understand its implications, you can read [a story](https://www.propublica.org/article/the-climate-solution-actually-adding-millions-of-tons-of-co2-into-the-atmosphere) by Lisa Song (ProPublica) and James Temple (MIT Technology Review) that covers and contextualizes our findings. Finally, you can browse [an interactive online map](https://carbonplan.org/research/forest-offsets-crediting) of the projects we analyzed, or download the open source [data](https://doi.org/10.5281/zenodo.4630712) and [code](https://github.com/carbonplan/forest-offsets) that underlies our analysis.

## Background

Carbon offset programs issue credits to projects that purport to avoid greenhouse gas emissions or remove carbon dioxide from the atmosphere. For example, an oil refinery that is subject to an emissions limit might purchase an offset credit issued to a forest owner who agrees to reduce or delay a timber harvest. The refinery can then pollute more, claiming the avoided forest emissions as compensation.

California’s offsets program plays a central role in the state's prominent cap-and-trade program. While it is open to many kinds of offset projects, most credits come from forest projects, which can take place anywhere in the continental United States and southern Alaska. You might think these projects involve growing new forests, but the vast majority instead involve a practice called "improved forest management" (IFM). An IFM project claims to increase forest carbon storage through changes in existing forest management practices, such as increasing the length of timber harvest rotations.

<Figure>
  <ProgramOverview />
  <FigureCaption number={2}>
    California's forest carbon offsets program by the numbers. Each credit is
    worth 1 tCO₂e. We analyzed 65 IFM projects for which sufficient public data
    were available, totaling 102 million upfront IFM credits. These represent
    about two-thirds of all forest offsets, and about one half of California’s
    entire offsets program.
  </FigureCaption>
</Figure>

The critical aspect of California’s forest offsets program is that it awards large volumes of credits at the start of a project when carbon stocks exceed regional averages. These "upfront" credits to IFM projects are responsible for more than half of the total carbon offsets program, and more than two-thirds of all forest credits.

How are these credits awarded? Projects provide "baseline" scenarios that are meant to represent the average amount of carbon that would remain under a typical harvest scenario. The difference between the initial carbon and this baseline determines the credits awarded. To prevent unrealistic baseline scenarios, the protocol requires that the average carbon stored in a baseline scenario stays above a value called "common practice," which is defined by the average regional carbon stocks from putatively similar forest types.

<Figure>
  <AnalysisExplanation />
  <FigureCaption number={3}>
    IFM projects are awarded upfront credits based on the difference between
    "initial carbon" stocks and the 100-year projected "baseline average." Under
    protocol rules, baseline averages cannot be lower than common practice.
    Thus, erroneously low estimates of common practice can lead to
    over-crediting.
  </FigureCaption>
</Figure>

As it happens, about 90% of projects report baseline averages that are equal to or within just 5% of the minimum common practice number. Thus, crediting is determined almost entirely by the value of common practice — and if common practice is set too low, that means projects are getting excess credits that do not reflect real climate benefits.

## Analysis of crediting error

To investigate potential crediting errors, we developed a [novel dataset](https://doi.org/10.5281/zenodo.4630684) by digitizing public offset project records, most of which currently exist only as PDFs and, to our knowledge, have never been comprehensively analyzed. These records contain each forest project’s tree species composition.

To test the integrity of California's program, we asked how well each project’s common practice number represents typical carbon stocks for similar forests. As explained further below, the California program uses broad, regional averages that fail to distinguish between species. In contrast, our new database allowed us to estimate typical carbon outcomes across only those forests with similar species. If common practice is set too low, that implies over-crediting; and if it is too high, that implies under-crediting.

We found evidence that the vast majority of projects were over-credited: for these projects, common practice values are systematically low because they reflect averages based on dissimilar species types. As a result, projects received more credits than they would have under a more ecologically accurate and robust definition of common practice.

For example, in the “Southern Cascades” region of California, the common practice numbers used in the program average together temperate, carbon-dense forest types like Douglas Fir (<i>Pseudotsuga menziesii</i>, average 122.5 tCO₂ / acre) and Tanoak (<i>Notholithocarpus densiflorus</i>, average 192.4 tCO₂ / acre) with less-carbon-dense forest types that occupy more arid niches, like Ponderosa pine (<i>Pinus ponderosa</i>, average 60.4 tCO₂ / acre).<Cite id='carbon.units'/>

Comparing project carbon against this average causes projects like [ACR189](https://carbonplan.org/research/forest-offsets-crediting?id=ACR189), which is located in Northern California and is composed primarily of Douglas fir (26% of basal area) and Tanoak (49% of basal area), to receive substantial credits simply due to a mismatch between the species in the project and the species included in the regional average. If we instead compare ACR189 against Douglas Fir and Tanoak — a more ecologically robust comparison — we find the project was over-credited by 135,869 tCO₂e (90% CI: 85,481-185,917 tCO₂e), or 50.1% (90% CI: 31.5-68.6%) of its total credits.<Cite id='confidence.intervals'/>

But ACR189 wasn’t an exception. We found this same pattern over and over again.

To quantify these errors systematically, we replaced projects’ common practice numbers with an independent, species-specific estimate. We then used the protocol rules to recalculate how many credits each project should have received using this more ecologically robust approach. (We also checked to make sure we could accurately reproduce the most recent common practice numbers and the number of credits projects actually received, in order to be confident in our ability to estimate any over- or under-crediting.)

<Figure>
  <ProjectAnalysis />
  <FigureCaption number={4}>
    We estimate crediting error by re-calculating the number of credits that
    would have been awarded to forest offset projects with a more ecologically
    robust measure of common practice. The extent of crediting error is shown as
    a percent of each project's total credits (top) and in units of tCO₂e
    (middle). For comparison we also show the total credits awarded to the
    project (bottom). Use the menu to sort by the different metrics, and select
    individual bars to see more info for that project.
  </FigureCaption>
</Figure>

Our analysis relied on the [digitized project records](https://doi.org/10.5281/zenodo.4630684) described above, as well as public data from the US Forest Service [Forest Inventory Analysis](https://www.fia.fs.fed.us/) program and the open source [rFIA package](https://github.com/hunter-stanke/rFIA). Our methods are described in detail in [the paper](https://doi.org/10.1111/gcb.15943) and all of the [code](https://github.com/carbonplan/forest-offsets) and [additional data](https://doi.org/10.5281/zenodo.4630712) underlying our analysis is open source and fully reproducible.

Across the program as a whole, we estimate net over-crediting of 30 million tCO₂e total (90% CI: 20.5 to 38.6 million tCO₂e) or 29.4% of the credits we analyzed (90% CI: 20.1 to 37.8%). At recent market prices of $13.67 per offset credit,<Cite id='market.transfers'/> these excess credits are worth $410 million (90% CI: $280 to $528 million) — and likely more, as market prices would rise if market regulators took steps to correct for over-crediting.

A key feature of our study is that it does not depend on counterfactual analysis. In general, offsets must reflect “additional” climate benefits above and beyond what is expected under business-as-usual conditions. Claims about the [additionality](https://www.bloomberg.com/features/2020-nature-conservancy-carbon-offsets-trees/) of [entire projects](https://www.earthisland.org/journal/index.php/magazine/entry/carbon-conundrum) are important to consider but difficult to evaluate quantitatively because counterfactual scenarios cannot be observed directly. In contrast, our analysis uses revealed program outcomes to directly estimate crediting errors.

## The problem with averages

The fundamental challenge with awarding upfront offset credits lies in defining an ecologically robust point of comparison. The California program aggregates forest data across both species and geographic regions, creating ecologically inappropriate points of comparison for awarding most of the credits in the program. Our results suggest that these protocol incentives have led to widespread “adverse selection”, with projects preferentially located in forests where carbon stocks naturally exceed those coarse, regional averages.

This is best illustrated in the spatial pattern of projects in the Southern Cascades region described above. This "supersection" — the California program’s term for the large regions over which carbon averages are calculated — is actually composed of three smaller subregions. The subregion on the western edge features relatively wet, carbon-dense forests. But this subregion is combined with two others, which have drier and less-carbon-dense forests. Because the common practice averages across all three subregions, an "average" forest in the western subregion is automatically eligible for upfront credits — simply due to a [statistical artifact](https://en.wikipedia.org/wiki/Modifiable_areal_unit_problem), and without creating any real benefits to the climate. Almost all of the supersection’s projects cluster within this area, where they benefit from a statistical error and inappropriately enable regulated polluters to increase their emissions.

<Figure>
  <SouthernCascades />
  <FigureCaption number={5}>
    In the Southern Cascades supersection, three subregions (or "ecosections")
    with distinct local carbon patterns were averaged together to yield a common
    practice number that distorts ecological reality. The number in each
    subregion shows the relative carbon compared to the supersection average, in
    units of tCO₂ per acre. The western-most carbon-rich subregion (
    <Green>green</Green>) contains almost all of this supersection’s offset
    projects <Triangle />, which earn credits simply by having forests with
    higher carbon levels than the supersection average. Select a project{' '}
    <Triangle /> to see details including ID, developer, and our estimate of
    crediting error.
  </FigureCaption>
</Figure>

While the Southern Cascades is an extreme example, any form of averaging creates an opportunity for adverse selection. Biogeographers have long understood the challenge of drawing firm boundaries around ecological regions or categories of species. While boundaries help communicate with outside audiences, border regions are complex areas where the characteristics of separate regions interact. Any program based on such boundaries must be continually reviewed to ensure the kind of adverse selection described here is not taking place.

## Why this matters

Rather than improve forest management to store additional carbon, ecological and statistical flaws in California’s offsets program create incentives to generate credits that do not reflect real climate benefits. Our work shows that these concerns have manifested in practice at a large and systemic scale. Looking more broadly, our results illustrate how protocols with easily exploitable rules can undermine policy objectives and highlight the need for stronger governance in carbon offset markets — based on rigorous, transparent, and independent science.

It’s important to note that while some of the problematic outcomes we document likely reflect intentional strategies to take advantage of poorly designed program rules, our results don’t assume or depend on market participants’ intentions. It doesn't matter whether landowners or project developers intended to take advantage of these rules, or simply benefited from them without awareness.

While our analysis is critical and the results are disappointing, we believe forward progress only begins by understanding our mistakes — so that we can do better in the future.

## Why open science

Our approach to both conducting and releasing this work fully embraces the growing trend toward open science, which differs from traditional academic research.

We are sharing our work now, as a preprint, rather than waiting months or years for publication in a peer-reviewed journal. We are taking this approach both to address an urgent set of policy-relevant concerns and so that we discuss these issues in the open, rather than behind closed academic doors.

In order to bring this discussion into the open right away, we are making all of our materials fully public and reproducible: the [digitized project database](https://doi.org/10.5281/zenodo.4630684), all [additional data](https://doi.org/10.5281/zenodo.4630712) used throughout our analysis, [code to generate figures](https://github.com/carbonplan/forest-offsets-paper) from those data, and the [complete code base](https://github.com/carbonplan/forest-offsets) used for our analysis. At any point now or in the future, the entire community is welcome to review our work on its merits. We look forward to further improving our analysis based on the criticisms and collaborations that come from open science. If you have feedback, please open an issue on our [GitHub repository](https://github.com/carbonplan/forest-offsets/issues).

We are also committed to subjecting our work to critical review from our peers. We have incorporated review in several ways prior to public release and are taking additional steps moving forward. First, we implemented our own round of independent review with domain experts. Second, we shared early versions of our work with two journalists who, in the process of developing [their own story](https://www.propublica.org/article/the-climate-solution-actually-adding-millions-of-tons-of-co2-into-the-atmosphere), asked independent researchers for comment and asked us questions raised by feedback from affected parties — including the California Air Resources Board, as well as nonprofit organizations, project developers, and individual landowners that participate in the program. Although an adversarial review process involving program beneficiaries and conducted with journalists as intermediaries is different from a traditional journal publication process, we believe its quality control was just as good if not better. Finally, we have also submitted our work to an academic journal and are committed to seeing it subjected to that form of peer review.

It is precisely on issues of such critical importance to the public where we believe this open, transparent approach to science and government accountability matters most.

<Endnote label='Credits' divider>

Grayson, Danny, Jeremy, and Joe designed the research; Grayson digitized the project report data; Grayson, Danny, Jeremy, Joe, and Barbara performed the research and analyzed the data; all authors contributed to interpreting the results and writing the paper. Jeremy developed the interactive graphics with input from Jonny Black of [Ordinary Things](https://ot.studio/).

A journal article on this work is published at Global Change Biology and can be cited as:

G Badgley, J Freeman, J Hamman, B Haya, A T Trugman, W R L Anderegg, D Cullenward (2021) “Systematic over-crediting in California’s forest carbon offsets program” Global Change Biology [doi:10.1111/gcb.15943](https://doi.org/10.1111/gcb.15943)

Please cite this web article as:

G Badgley, J Freeman, J Hamman, B Haya, A T Trugman, W R L Anderegg, D Cullenward (2021) “Systematic over-crediting of forest offsets” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/forest-offsets-explainer](https://carbonplan.org/research/forest-offsets-explainer)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan received a grant from Microsoft AI for Earth to support the portion of work that involved digitization of offset project records. All other research design and data analysis was performed using CarbonPlan's unrestricted funding. No one except the authors of the paper exercised control over the research process or products. The authors are solely responsible for the content of this writeup, which does not reflect the views of any other individuals or organizations.

[Grayson Badgley](https://www.gbadgley.com) is a Postdoctoral Scientist at Black Rock Forest and Columbia University, [Barbara Haya](https://gspp.berkeley.edu/faculty-and-impact/faculty/barbara-haya) is a Research Fellow and Director of the Berkeley Carbon Trading Project at UC Berkeley, [Anna Trugman](http://trugmanlab.geog.ucsb.edu) is a professor at UC Santa Barbara, and [William R.L. Anderegg](http://www.anderegglab.net/) is a professor at the University of Utah.

Article text and figures made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

</Endnote>
