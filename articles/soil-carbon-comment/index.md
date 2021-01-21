import Article from '../../components/article'
import Reference from '../../components/reference'
import PullQuote from '../../components/pull-quote'
import SectionBreak from '../../components/section-break'
import TaggedLink from '../../components/tagged-link'
import Table from './components/table'
import Heading from './components/heading'

export const meta = {
  id: 'soil-carbon-comment',
  number: 1,
  color: 'orange',
  title: 'Getting soil carbon right',
  authors: ['Danny Cullenward', 'Joseph Hamman', 'Jeremy Freeman'],
  date: '06-01-2020',
  background: 'article-001/soil.png',
  summary:
    'Why the science of soil carbon quantification is complicated, and why getting the details right matters for soil carbon protocols.',
}

export const sidenotes = {
  1: {
    offset: -170,
    number: 1,
    authors: 'J. Sanderman & J. A. Baldock',
    year: 2010,
    title:
      'Accounting for soil carbon sequestration in national inventories: a soil scientist’s perspective',
    journal: 'Environmental Research Letters',
    url: 'https://doi.org/10.1088/1748-9326/5/3/034003',
  },
  2: {
    offset: -50,
    number: 2,
    authors: 'C. Poeplau & A. Don',
    year: 2014,
    title:
      'Carbon sequestration in agricultural soils via cultivation of cover crops – A meta-analysis',
    journal: 'Agriculture, Ecosystems and Environment',
    url: 'https://doi.org/10.1016/j.agee.2014.10.024',
  },
  3: {
    offset: 50,
    number: 3,
    authors: 'M. F. Cotrufo et al.',
    year: 2018,
    title:
      'Soil carbon storage informed by particulate and mineral-associated organic matter',
    journal: 'Nature Geoscience',
    url: 'https://doi.org/10.1038/s41561-019-0484-6',
  },
  4: {
    number: 4,
    offset: 62,
    authors: 'K. Paustian et al.',
    year: 2017,
    title:
      'Field‐ and farm‐scale assessment of soil greenhouse gas mitigation using COMET‐Farm',
    journal: 'Agronomy Monographs',
    url: 'https://doi.org/10.2134/agronmonogr59.c16',
  },
  5: {
    number: 5,
    offset: 160,
    authors: 'E. E. Campbell & K. Paustian',
    year: 2015,
    title:
      'Current developments in soil organic matter modeling and the expansion of model applications: a review',
    journal: 'Environmental Research Letters',
    url: 'https://doi.org/10.1088/1748-9326/10/12/123004',
  },
  6: {
    offset: 135,
    number: 6,
    authors: 'B. van Wesemael et al.',
    year: 2011,
    title:
      'How can soil monitoring networks be used to improve predictions of organic carbon pool dynamics and CO2 fluxes in agricultural soils?',
    journal: 'Plant and Soil',
    url: 'https://doi.org/10.1007/s11104-010-0567-z',
  },
  7: {
    offset: 250,
    number: 7,
    authors: 'A. Orgiazzi et al.',
    year: 2017,
    title:
      'LUCAS Soil, the largest expandable soil dataset for Europe: a review',
    journal: 'European Journal of Soil Science',
    url: 'https://doi.org/10.1111/ejss.12499',
  },
  8: {
    offset: 310,
    number: 8,
    authors: 'P. Smith et al.',
    year: 2019,
    title:
      'How to measure, report and verify soil carbon change to realize the potential of soil carbon sequestration for atmospheric greenhouse gas removal',
    journal: 'Global Change Biology',
    url: 'https://doi.org/10.1111/gcb.14815',
  },
  9: {
    offset: 0,
    number: 9,
    authors: 'B. Haya et al.',
    year: 2019,
    title:
      'Managing Uncertainty in Carbon Offsets: Insights from California’s Standardized Approach',
    journal: 'Climate Policy (in press)',
    url:
      'https://law.stanford.edu/publications/managing-uncertainty-in-carbon-offsets-insights-from-californias-standardized-approach/',
  },
}

<Heading>Getting soil carbon right</Heading>

There are good reasons to be [excited](https://carbon180.org/leading-with-soil) about better soil management practices for carbon removal. Agricultural practices that increase soil carbon storage have the potential to provide benefits both for farmers and ranchers and for the global climate. In turn, working with the agricultural sector could help engage people and organizations that haven’t been the focus of most climate action to date. The complexities of soil carbon quantification, however, pose challenges for designing financial crediting systems.

This post provides context for a comment letter we submitted to the Climate Action Reserve concerning one such effort, its draft [Soil Enrichment Protocol](https://www.climateactionreserve.org/how/protocols/soil-enrichment/). We were proud to work with our collaborators [Dr. Grayson Badgley](https://www.gbadgley.com/) (a member of the expert workgroup for this protocol and an expert in remote sensing) and [Dr. Jane Zelikova](https://carbon180.org/team) (Chief Scientist at Carbon180, Research Scientist at the University of Wyoming, and an expert in climate change science), who joined the letter.

Below, we review why quantifying soil carbon is so challenging and summarize our concerns with respect to the technical details of the draft protocol. We also emphasize the conflict of interest presented by the fact that the protocol was funded and drafted by a company, [Indigo Ag](https://www.indigoag.com/), that intends to use the protocol to generate carbon credits.

## Why soil carbon is challenging

Agricultural practices such as adding cover crops, changing from conventional tillage to no-tillage, or applying soil amendments, have the potential to both improve crop health and remove additional carbon dioxide from the atmosphere. The challenge is that these effects are hard to measure. Accurate quantification relies on physical sampling and soil carbon content measurements, but soil carbon content varies substantially across soil depth, individual plots, spatial locations within a plot (even at the scale of a few meters), and time. <Reference color={meta.color} data={sidenotes[1]}/> <Reference color={meta.color} data={sidenotes[2]}/> <Reference color={meta.color} data={sidenotes[3]}/> Future changes in land management practices can also reverse gains. Addressing that variability requires careful sampling methods, baseline estimation, meta analysis, and interpretation and projection that is guided, but not replaced, by models. <Reference color={meta.color} data={sidenotes[4]}/><Reference color={meta.color} data={sidenotes[5]}/>

Compared to forests, soil carbon science hasn’t benefited from decades of extensive public data collection and model verification. In the US, for example, the Forest Service has been operating its national [Forest Inventory and Analysis program](https://www.fia.fs.fed.us/about/about_us/index.php) since 1930, producing a wealth of public information that can directly guide efforts to manage and quantify forest carbon. Several soil monitoring networks around the world are underway to help bridge this gap, <Reference color={meta.color} data={sidenotes[6]}/><Reference color={meta.color} data={sidenotes[7]}/> but considerable uncertainty and much future work remains. <Reference color={meta.color} data={sidenotes[8]}/>

Forest carbon quantification has also benefited from advances in remote sensing technology, with air and satellite-based methods providing increasingly accurate insights into above-ground forest carbon stocks. In contrast, while accurately inferring soil carbon from remote measurement could become feasible in the future, physical samples are required for high resolution estimates today. Remote sensing for soil is an active area of research, and will require extensive benchmarking, calibration, and validation with public data.

Any protocol for soil carbon crediting needs to start by appreciating the complexity of the science, and progress will require coordination around public data, sharing of methods, and transparency.

## Our comments

Given the enormous challenges in designing a carbon offset protocol to quantify and credit soil carbon storage, we were interested to see the Climate Action Reserve take this problem on. We reviewed the draft protocol and highlight two sets of issues here. See our <TaggedLink action='PDF' category='downloads' href='https://carbonplan-assets.s3.amazonaws.com/docs/Soil-Carbon-Comment-Letter-05-18-2020.pdf'>comment letter</TaggedLink> for details and check out comments posted by other groups at the [protocol website](https://www.climateactionreserve.org/how/protocols/soil-enrichment/).

### Conflict of interest

<PullQuote color={meta.color}>
  Success requires independence between the development of the rules and their
  application to specific projects or companies
</PullQuote>

Normally, the idea behind third-party carbon offset standards is that an independent body develops technical methods and verification processes. Those methods give buyers confidence that the credited climate benefits meet rigorous standards. (In practice, this approach has always been complicated by the fact that verification is typically paid for by the very projects that seek to generate credits.) Success requires independence between the development of the rules and their application to specific projects or companies.

Unfortunately, that’s not the case here. Indigo Ag paid the Climate Action Reserve to develop the protocol and contributed to drafting its requirements. Not only did Indigo Ag shape the protocol, but the protocol’s design, as we discuss below, allows users like Indigo Ag to pick their own sampling methods and model calculations — subject to the approval of the Climate Action Reserve, which was paid by Indigo Ag to develop the protocol in the first place. The protocol doesn’t even require independent verifiers to collect independent soil samples or reproduce projects’ modeled climate benefits.

As a result, there’s very little that’s independent about the proposed protocol.

### Problems and recommendations

Our technical comments focused on four issues — additionality, model selection, sampling and verification, and permanence — many of which are especially concerning given the conflict of interest raised above.

<Table />

## Why do we care?

<PullQuote color={meta.color}>
  Protocols and standards must represent the most accurate approaches to
  calculating climate benefits
</PullQuote>

Scientific integrity is at the core of our mission. With growing interest in public and private markets for climate solutions, protocols and standards must represent the most accurate approaches to calculating climate benefits — especially in areas like soil carbon that will likely require public policy support in the years ahead.

Private companies are of course welcome to market proprietary solutions, and we appreciate that some exciting areas of carbon removal are developing under confidential terms. We hope that, when ready, they bring these solutions into the public to demonstrate reliability and rigor.

Meanwhile, it’s one thing for a company to sell proprietary technology to private clients, but an entirely different matter for a company to hold out a proprietary technology or approach as having third-party approval or broad scientific validation. When organizations make public claims about the performance of their projects or adequacy of their protocols, we have an interest in making sure those claims match the facts — and that those projects and standards contribute to a better public understanding of the field of climate solutions.

## Alternative approaches

Carbon offsets are particularly challenging because they require effectively perfect calculations — even one ton of over-crediting causes a buyer’s claim of carbon neutrality to fall short. <Reference color={meta.color} data={sidenotes[9]}/>

Perfection is a tall order in the face of conceptually complicated and empirically fraught problems like leakage and additionality. Achieving these standards is difficult even when the quantification science is mature and readily applied to carbon offset projects. In the case of soil carbon, where comprehensive measurement is challenging and there are few long-term public data sets from which to extrapolate trends, that task is even harder.

But carbon credits aren’t the only way to support soil carbon. An alternative might be to think about soil carbon as a public investment, where funds are used to support beneficial changes in land management and agricultural practices but not used to claim precise carbon benefits. In contrast to an offsets-oriented paradigm, perfection isn’t required for public investment — especially not if soil carbon is a co-benefit that helps justify financial support.

Meanwhile, any efforts built around carbon offset credits should be transparent, subject to third-party verification, and capable of thorough validation by financially independent organizations.

<SectionBreak />

## Updates

### 08-25-2020

After reviewing an updated version of the draft protocol, we submitted a second <TaggedLink action='PDF' category='downloads' href='https://carbonplan-assets.s3.amazonaws.com/docs/Soil-Carbon-Comment-Letter-08-25-2020.pdf'>comment letter</TaggedLink> on remaining concerns and additional issues.

<SectionBreak />

## Credits

Danny led the effort to write the comment letters and drafted the first version of this article. All authors contributed to writing the comment letters and the article. Collaborators Jane Zelikova and Grayson Badgley contributed to the comment letters, but were not involved in writing this article.

## Terms

CarbonPlan received no financial support for this work and has no financial conflicts of interest with the Climate Action Reserve or Indigo Ag.

### Questions? Interested in collaborating on these problems? Email us at [hello@carbonplan.org](mailto:hello@carbonplan.org)

export default ({ children }) => <Article meta={meta}>{children}</Article>
