---
version: 1.0.0
title: Quantifying enhanced weathering
authors:
  - Iris Holzer
  - Noah Sokol
  - Eric Slessarev
  - Kata Martin
  - Freya Chay
color: grey
date: 09-11-2023
summary: We introduce a new tool that lets users explore methods for quantifying net carbon removal from enhanced weathering.
quickLook: A new tool for exploring the methods behind enhanced weathering MRV
card: ew-quantification-explainer
background: articles/022/rock
icon: articles/022/rock-small
components:
  - name: PhasesTable
    src: ./components/phases-table.js
  - name: ProtocolsMethods
    src: ./components/protocols-methods.js
links:
  - label: Interactive tool
    href: /research/ew-quantification
---

Researchers, companies, and policymakers are [directing](https://frontierclimate.com/portfolio?pathway=enhanced_weathering) [more](https://carbonherald.com/microsoft-makes-first-enhanced-weathering-co2-removal-purchase-from-undo/) [attention](https://heatmap.news/economy/carbon-dioxide-removal-industry-biden) toward enhanced weathering on agricultural fields as a low-cost and easy-to-implement approach to carbon dioxide removal (CDR). Although spreading rocks on fields might sound straightforward, demonstrating that it actually removes carbon from the atmosphere is [surprisingly complex](/research/cdr-verification/enhanced-weathering).

Here, we introduce a [new tool](/research/ew-quantification) that catalogs quantitative methods which could contribute to enhanced weathering measurement, reporting, and verification (MRV).<Sidenote>The acronym MRV can also be defined as "measurement, reporting, and verification.” Some also refer to MMRV, "measurement, monitoring, reporting, and verification.” Broadly, MRV is a system for quantifying key outcomes and communicating the methods on which they rest in a clear and trustworthy manner.</Sidenote> This tool allows users to explore variables that can affect or respond to enhanced weathering in different parts of the system, and how these variables could be quantified.

A tool like this is important because scientists and CDR companies are actively experimenting with a wide variety of approaches to MRV for enhanced weathering. In short, we are still learning exactly when and where enhanced weathering will be effective, and how to reliably measure its efficacy. For those who do not research geochemistry or enhanced weathering full-time, it can be overwhelming to track these experiments and interpret what different quantitative methods actually reveal about the complex effects of enhanced weathering on the global carbon cycle. We hope this tool helps users make sense of the evolving landscape of ideas and evidence.

In this article, we explain the contents of the new tool in more detail. We also illustrate how the tool could be used to interpret approaches to enhanced weathering MRV. Specifically, we wanted to know what quantitative methods today’s MRV protocols require, and how those requirements account for full-system responses to enhanced weathering. We record our findings for the Puro and Carbon Standards International protocols below alongside a characterization of a recent academic preprint from Beerling et al. (2023), and link to relevant entries in the new tool to provide extra context.

## Context

Enhanced weathering speeds up the chemical reactions between rocks, water, and air that naturally remove CO₂ from the atmosphere.<Cite id='hartmann.2013'/> Typically this process entails spreading crushed rock on soils or beaches. In the context of this post, and the new tool described below, we focus specifically on enhanced weathering in agricultural soils. There has been particular interest in this approach because it could be deployed using existing agricultural infrastructure and might also provide additional benefits to crops and soil.<Cite ids={['beerling.2018','kantzas.2022']}/>

Quantifying the effectiveness of enhanced weathering is complicated partly because the path from rock application to long-term carbon storage involves a series of interconnected processes that can span large spatial scales and unfold over long periods of time. At a high level, we can categorize this complexity into five phases that affect net carbon removal.

<Figure>
  <PhasesTable />
</Figure>

Accounting for these phases requires a lot of decision making with no single right answer. Practitioners must decide which parts of the system will be measured versus modeled, whether to measure soil, water, gas fluxes or some combination thereof, and how to design the timing and location of the measurements to account for the dynamism of the system. Enhanced weathering MRV must also tease apart how any observed changes relate to baseline conditions and changes from the baseline that would have happened in the absence of enhanced weathering.

Together, these layers of complexity can make it overwhelming to try to understand if a given MRV approach is making the right measurements in the right places and adequately accounting for net carbon removal.

## A new tool

One persistent challenge around enhanced weathering MRV is the lack of common understanding about what different quantitative methods — measurements, models, and forms of record keeping — can actually tell us about net carbon removal. To try to bring more clarity, we cataloged quantitative methods that could play a role in enhanced weathering MRV and characterized how they might be used to determine carbon fluxes across the different phases of enhanced weathering.

This tool is available [online](/research/ew-quantification) as well as via a downloadable [CSV](/research/ew-quantification/quant-methods.csv) or [JSON](/research/ew-quantification/quant-methods.json) file with all of the contents.

Each entry in the tool connects two pieces of information: a variable that may influence or respond to enhanced weathering, and a set of quantitative methods that can be used to generate data on the variable. For clarity, throughout the rest of this article, any mention of a variable is followed by (v) and any mention of a method is followed by (m). For example, rock mineralogy (v) is commonly measured using methods like x-ray diffraction (XRD) (m) or quantitative evaluation of minerals by scanning electron microscopy (QEMSCAN) (m).

To build intuition about how specific quantitative methods inform an overall estimate of net carbon removal, we map each entry to one or more of the phases of enhanced weathering: rock application, initial weathering, field processes, watershed transport, and ocean storage. We indicate how relevant the entry is to accounting for a given enhanced weathering phase using four qualitative tags:

<Figure>
  <Table
    columns={[6]}
    start={[[1], [1, 3, 3, 3]]}
    width={[
      [6, 2, 2, 2],
      [6, 4, 4, 4],
    ]}
    data={[
      [
        'Essential',
        'Provides data that should be included in all enhanced weathering MRV approaches.',
      ],
      [
        'Primary',
        'Provides data that could play a central role in estimating net carbon removal, contingent on the overall MRV approach chosen. Multiple primary measurements will likely be needed to validate the observed weathering signal.',
      ],
      [
        'Secondary',
        'Provides data that complements essential and primary data, or usefully constrains the system.',
      ],
      [
        'Extra',
        'Provides data on potential side effects or provides coverage of unknown unknowns.',
      ],
    ]}
    borderTop={false}
    borderBottom={false}
  />
</Figure>

As an illustration of this relevance mapping, rock mineralogy (v) is essential to measure during rock application because it informs carbon removal potential and reveals the fraction of rock that is likely to weather quickly. We would therefore expect any rigorous MRV approach to include methods such as XRD (m) or QEMSCAN (m) that are capable of precisely characterizing rock mineralogy.

As another example, many variables could potentially provide primary evidence of initial weathering, including but not limited to measuring changes to cations (v), dissolved inorganic carbon (v), or total alkalinity (v) leaving the field. Given the current state of experimentation and scientific understanding, we would expect a rigorous MRV approach to rely on multiple primary measurements which independently validate the observed weathering signal.

When assigning relevance tags, we focused on how individual enhanced weathering projects are likely to approach MRV. Functionally, this means that in the tool, the methods associated with the watershed transport and ocean storage phases are solely model-based rather than measurement-based. In most cases, projects will have to use models to account for these phases because of the large spatial and temporal scales over which they operate. These spatial and temporal scales pose practical challenges to direct measurement and, at least at small scales of deployment, make it difficult or impossible to identify a signal from the noise. Building well-constrained models to account for watershed transport and ocean storage will require validation with empirical measurements. However, responsibility for this empirical validation will likely be shared across the scientific and practitioner community rather than owned by a single project.

Each entry in the tool can be expanded to access further information about the variable and the corresponding methods. This information includes our notes and comments, key references, and four qualitative descriptors:

<Figure>
  <Table
    columns={[6]}
    start={[[1], [1, 3, 3, 3]]}
    width={[
      [6, 2, 2, 2],
      [6, 4, 4, 4],
    ]}
    data={[
      [
        'Transient',
        'Is the variable a transient phenomenon that requires near-continuous monitoring to understand outcomes over time?',
      ],
      [
        'Type',
        'Are the quantitative methods described measurements, models, or a form of record keeping?',
      ],
      [
        'Category',
        'Are the quantitative methods described applied to rock, soil, water, gas, crops, environmental conditions, management practices, or some combination?',
      ],
      [
        'Impacts',
        'Which non-carbon impacts could be informed by the generated data, if any?',
      ],
    ]}
    borderTop={false}
    borderBottom={false}
  />
</Figure>

Throughout the tool, we focus on quantitative methods that can help estimate net carbon removal. However, understanding the non-carbon impacts of enhanced weathering, both positive and negative, will also be needed to guide decision-making. Under the ‘Impacts’ descriptor and in the notes and comments, we indicate methods that could be used to characterize the following non-carbon impacts: industrial development, silicate inhalation, heavy metal accumulation, agricultural inputs, crop health, soil health, soil biology, and freshwater biology. A more complete treatment of these potential impacts in enhanced weathering MRV would likely involve methods that do not appear in the tool.

## Using the tool

We think the tool developed here will be most useful to those interpreting different approaches to enhanced weathering MRV, either as proposed by CDR companies, used in scientific studies, or encoded in the protocols that codify a standard for “acceptable” MRV.

For example, two public protocols for enhanced weathering MRV have been proposed: one from [Puro](https://puro.earth/#) and the other from [Carbon Standards International](https://www.carbon-standards.com/en/company). To illustrate how the tool could be useful, Table 1 lists the quantitative methods required by each protocol across the different phases of enhanced weathering, and links to the relevant entries in the new tool. As additional context, we also list the quantitative methods used in a recent academic preprint from Beerling et al.<Cite id='beerling.2023'/> to estimate the carbon removal potential of applying basalt to agricultural fields in the midwestern United States. To be clear, this preprint does not claim to present a full approach to enhanced weathering MRV, but rather illustrates one set of methods used to quantify results from a scientific field trial.

<Figure>
  <ProtocolsMethods />
  <TableCaption number={1}>
    This table documents what quantitative methods are required by the two
    public enhanced weathering protocols available today — the [Puro Enhanced
    Rock Weathering Methodology
    v1.0](https://7518557.fs1.hubspotusercontent-na1.net/hubfs/7518557/Supplier%20Documents/ERW%20methodology.pdf)
    and the Carbon Standard International (CSI) [Global Rock C-Sink Guideline
    v0.9](https://www.carbon-standards.com/docs/adda3fe63b4f158fa7dbc98aeac5e775_Global_Rock_C-Sink_guideline.pdf).
    The quantitative methods used by [Beerling et al., 2023
    (preprint)](https://arxiv.org/pdf/2307.05343.pdf) to estimate carbon removal
    potential from an enhanced weathering field trial are included for extra
    context. ‘N/A’ indicates that an enhanced weathering phase is not accounted
    for by the MRV approach described.
  </TableCaption>
</Figure>

This mapping is not meant to be an exhaustive analysis of the MRV approaches described, but it hopefully captures the diversity of approaches seen today, the inconsistent coverage of enhanced weathering phases, and the challenges in comparing the different quantitative methods used. We hope resources like the one introduced here will assist with the necessary learning, interpretation, and evaluation of protocols yet to be developed.

## Moving forward

As this work hopefully makes clear, our understanding of enhanced weathering for carbon removal — and how to measure it — is still nascent. Moving forward, it will be critical for researchers and practitioners to continue experimenting and sharing results openly.

It will also be important to design MRV standards that maintain a rigorous basis in evolving science and support ongoing experimentation. To date, there have only been two public attempts at codifying enhanced weathering MRV standards. These ‘first-pass’ attempts are useful, but our view is that existing protocols are not yet sufficient to guarantee rigorous outcomes. We hope the next generation of enhanced weathering standards will be specific about acceptable combinations of quantitative methods, clear about where measurements stop and theory begins, and explicit about complexities that are not yet adequately addressed. With thoughtful governance to support experimentation and incorporate developing science, such protocols could directly contribute to the evolution of MRV in this field.

We hope the tool presented here provides a useful reference for where our knowledge about quantitative methods for enhanced weathering MRV stands today, and we look forward to supporting efforts to develop future standards. As always, we welcome your feedback on this article or the new tool at hello@carbonplan.org.

<Endnote label='Credits' divider>

Freya wrote the first draft of the article. Iris, Kata, and Freya led the development of the tool. All authors contributed to developing the underlying concepts, reviewing the tool, and editing the article. The authors thank Dan Maxbauer and Tyler Kukla for helpful feedback.

Please cite this web article as:

Holzer et al. (2023) “Quantifying enhanced weathering" CarbonPlan <span style={{overflowWrap: 'break-word'}}>https://carbonplan.org/research/ew-quantification-explainer</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan received [no specific financial support](https://carbonplan.org/funding) for this work. CarbonPlan and the authors are solely responsible for the content of this writeup, which does not represent the views of any other individuals or organizations.

[Iris Holzer](https://es.ucsb.edu/people/iris-holzer) is an Assistant Teaching Professor of Environmental Studies at the University of California, Santa Barbara. [Eric Slessarev](https://eeb.yale.edu/people/faculty/eric-slessarev) is an Assistant Professor of Ecology and Evolutionary Biology at Yale University. [Noah Sokol](https://people.llnl.gov/sokol1) is a Staff Scientist at Lawrence Livermore National Laboratory. Writing and analysis contributed by all authors was performed in their personal capacity under contract with CarbonPlan.

Article text and figures made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

</Endnote>
