---
version: 1.0.0
title: Analyzing initial offset disclosures under California’s AB1305
authors:
  - Grayson Badgley
  - Freya Chay
  - Kata Martin
color: purple
date: 10-30-2024
summary: Beginning in January, California law AB1305 will require companies to disclose which offsets they use. An analysis of early data, voluntarily released before the law takes effect, demonstrates that these disclosures are powerful, but also highlights the opportunity for improvements around discoverability and usability.
quickLook: Early disclosures demonstrate the power of transparency, but also highlight the opportunity for improvements around discoverability and usability.
fileId: 1NqoJQFkjn7mRx-j-yU4ISba_L9XquvrdKHWhhdjLH_I
icon: articles/028/binders-small
background: articles/028/binders
card: ab1305-initial-disclosures
components:
  - name: SummaryTable
    src: ./components/summary-table.js
links:
  - label: AB1305 Database
    href: /research/ab1305-initial-disclosures-database
  - label: Download data
    href: https://carbonplan-ab1305-initial-disclosures.s3.us-west-2.amazonaws.com/ab1305-raw-data.csv
---

Carbon offsets play a major role in corporate climate claims, but it can be hard to track down the details. When an airline claims that you can “[fly carbon neutral](https://www.qantas.com/us/en/qantas-group/sustainability/our-planet/carbon-offsetting.html),” what exactly happens when you check the “buy offsets” box?

Information about corporate offset use is currently piecemeal and patchwork. You might find information about offset use in [corporate sustainability reports](https://www.apple.com/environment/pdf/Apple_Environmental_Progress_Report_2024.pdf) or voluntary [CDP disclosures](https://www.cdp.net/en). And with some technical chops, you might be able to track down relevant data by combing through [offset registries](https://registry.goldstandard.org/credit-blocks?q=&page=1) or the [convoluted reports](https://ww2.arb.ca.gov/our-work/programs/cap-and-trade-program/cap-and-trade-program-data) companies are sometimes obligated to submit to regulators. But more often than not, the public has no reliable way to determine which offsets back up corporate climate claims.

More transparency is finally coming for a subset of the market. In 2023, California adopted [AB1305](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB1305), a first-of-its-kind bill that requires companies operating in the state to disclose their voluntary use of carbon offsets, and the role those offsets play in supporting public climate claims.<Sidenote>AB1305 also establishes disclosure requirements for entities that market or sell voluntary carbon offsets.</Sidenote> AB1305 will go into full effect in January 2025, but a handful of companies have already posted AB1305-compliant disclosures online. We tracked down 25 of these early disclosures and transcribed their [data](https://carbonplan.org/research/ab1305-initial-disclosures-database).

We were left with two primary takeaways. First, while AB1305 disclosures are a clear improvement over the status quo, they are not easy to find or use. Most of the early AB1305 disclosure documents were difficult to locate online, many were incomplete or contained errors, and almost all were in a PDF format that required tedious data entry before analysis was possible. While the content of disclosures often dominates policy discussions, it is just as important to specify process requirements, such as data formats, to ensure that disclosures are accessible and actionable.

Second, despite these challenges, these disclosures contained useful evidence of companies using low-quality, discredited offsets to make public carbon neutrality claims. AB1305 makes the links between companies and the offset credits they use unambiguous and transparent, a combination that we hope will promote accountability across the carbon market.

### 01 – Discoverability and data format

AB1305 provides few requirements about _how_ disclosures must be made, stipulating only that the required information be “disclose[d] on the entity’s internet website.” This means a company can choose where and how to post their disclosures. Disclosure documents aren’t submitted to a central authority and there are no schema or formatting requirements. Both of these decisions put the onus on researchers, regulators, and other interested parties to track down and process disclosures made under AB1305.

We stumbled across our first AB1305 disclosure while researching an offset project for an unrelated analysis. After entering the project’s ID number into Google, one of the search results linked to an AB1305 disclosure form. Curious, we started looking for other disclosures by searching for variants of the _exact_ phrase “AB1305” and various keywords like “Verra” and “Gold Standard.” We found 25 disclosure documents with information on offsets. You can take a look at the data using this [online viewer](https://carbonplan.org/research/ab1305-initial-disclosures-database) or [download](https://carbonplan-ab1305-initial-disclosures.s3.us-west-2.amazonaws.com/ab1305-raw-data.csv) the data if you want to dive deeper.

<Figure>
  <SummaryTable />
</Figure>

Most of the disclosures we found were PDF documents, all of which had unique formatting. To display and analyze the data, we manually transcribed each disclosure into a common format. Needless to say, this was a tedious process. While we recognize the value of AB1305 for promoting transparency in the carbon market, we’re concerned about the effort that will be required to process the full set of AB1305 disclosures once the law goes into full force in 2025. Simply finding the disclosures, let alone transcribing the data, will be a major undertaking — and one that any interested party will have to do on their own.

### 02 — Errors and missing data

In addition to the challenge of discovering and transcribing disclosures, we also encountered difficulties interpreting the disclosures we did find. More than half of the offset project entries in the disclosures we analyzed were missing at least one of the eight pieces of information required by AB1305:

<Figure>
  <Table
    columns={[10]}
    start={[[1], [2]]}
    width={[[1], [9]]}
    data={[
      ['1', 'The name of the business entity selling the offset.'],
      ['2', 'The name of the offset registry or program.'],
      ['3', 'The project identification number.'],
      ['4', 'The project name as listed in the registry or program.'],
      [
        '5',
        'The offset project type, including whether the offsets purchased were derived from a carbon removal, an avoided emission, or a combination of both.',
      ],
      ['6', 'The offset project site location.'],
      [
        '7',
        'The specific protocol used to estimate emissions reductions or removal benefits.',
      ],
      [
        '8',
        'Whether there is independent third-party verification of company data and claims listed.',
      ],
    ]}
  />
</Figure>

Of the 25 disclosures we found, just six contained all the required information on each offset project disclosed. In many cases, we were able to fill in the blanks by inferring things like a project’s protocol from the project’s disclosed identification number. Once AB1305 kicks into full force, and firms have more experience with the process, we hope these sorts of errors will disappear. Sometimes, however, the disclosures were so sparse or inaccurate that we couldn’t fill in the blanks. For example, Uber disclosed offsets it used from Qantas, the Australian airline, that simply includes a link to what appears to be [Qantas' sustainability page](https://www.qantas.com/au/en/qantas-group/sustainability/our-planet/carbon-offsetting.html) — no project name, identification number, or other details were provided.

There were other inaccuracies and errors that we couldn’t resolve. Autodesk reported using credits from the Titas gas leak reduction project in Bangladesh ([VCS2930](https://carbonplan.org/research/offsets-db/projects/VCS2930)). Examining the project’s retirement data, however, reveals only three retirements have been made in the project’s history and each of those are attributed to Boeing. Perhaps Autodesk used credits from an earlier version of the project ([VCS2478](https://carbonplan.org/research/offsets-db/projects/VCS2478))? Or is the publicly reported retirement data from Verra incomplete or inaccurate in some way? Without more information, it’s hard to tell what’s going on here.

Perhaps more importantly, it’s not clear if anyone is responsible for identifying these types of errors. Nor is it clear who would be responsible for correcting them. Enforcement of AB1305 comes through the lawsuits brought by California’s Attorney General and “by a district attorney, county counsel, or city attorney.” In other words, we should expect enforcement to mostly operate retroactively, when the appropriate authorities move to bring a lawsuit. It’s hard to imagine these authorities taking steps to correct small errors or working with companies to resolve discrepancies. As such, it’s probably best to assume that AB1305 data will contain errors and omissions, and take that fact into account when working with the data.

### 03 — Insight into offset use

Even this small initial sample shows that mandatory disclosures have the potential to improve accountability and market oversight.

For example, more than 30 percent of companies making an early disclosure under AB1305 used credits generated by projects using the [ACM0002 offset protocol](https://cdm.unfccc.int/methodologies/DB/XB1TX7TAZ6SLWM9B7BC67THHVD16JV), “Grid-connected electricity generation from renewable sources.” That’s notable because ACM0002 is often viewed as an outdated protocol that generates [low-quality credits](https://www.bloomberg.com/news/features/2024-10-24/carbon-offsets-see-falling-demand-but-cop29-may-open-new-market?srnd=phx-green). As evidence of its low standing, the ICVCM — an industry-driven integrity effort — deemed the vast majority of credits generated by ACM0002 as [failing](https://icvcm.org/carbon-credits-from-current-renewable-energy-methodologies-will-not-receive-high-integrity-ccp-label/) to meet the organization’s minimum quality standards. By unequivocally linking company claims to offsets generated under AMC0002, the disclosures enable researchers, regulators, journalists, and consumers to apply evidence about protocol quality when evaluating corporate claims.

The disclosures also reveal the use of particularly controversial offset projects. For example, Disney disclosed the use of credits from the Alto Mayo project ([VCS944](https://carbonplan.org/research/offsets-db/projects/VCS944)) as part of its net-zero strategy. In recent years, this project has come under increased scrutiny. Scientists studying Alto Mayo have argued that it employs [overly pessimistic](https://doi.org/10.1126/science.ade3535) estimates of [future rates of deforestation](https://www.zeit.de/wirtschaft/2023-01/co2-certificates-fraud-emissions-trading-climate-protection-english/komplettansicht#chapter), which results in significant over-crediting. In addition, journalists have [documented](https://www.source-material.org/armed-men-disney-forest-carbon-offsetting-destroyed-homes/) [growing](https://www.bloomberg.com/graphics/2020-disney-peru-deforestation/) [animosity](https://www.theguardian.com/environment/2023/jan/18/forest-communities-alto-mayo-peru-carbon-offsetting-aoe) between project proponents and local communities that have historically relied on the Alto Mayo forest for their livelihoods.

AB1305 disclosures provide a clearer understanding of the types and quality of offsets that companies are using. While mandatory disclosures are unlikely to change offset-use behavior on their own, they do empower the public to scrutinize corporate climate claims more rigorously. Over time, we hope this translates into more accountability and increased pressure for companies to stop using flawed offsets.

## Recommendations

AB1305, without a doubt, improves on the status quo of minimal and piecemeal disclosure around offset use. It’s especially notable that the push for these disclosures is coming from outside the market itself. As it currently stands, each individual offset program and registry has different requirements and norms around disclosure. Absent some sort of external force like AB1305, there’s no guarantee disclosure would be adopted across an array of ever-proliferating standards, programs, and registries. AB1305 establishes a minimum bar of what responsible offset disclosure looks like.

There remains, however, significant room for improvement when it comes to the discoverability and usability of the data. Those challenges could be addressed with relatively minor amendments to the existing law. And, in fact, lawmakers have already contemplated returning to AB1305 to improve the clarity and process of required disclosures.<Sidenote>See [AB2331](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB2331), which proposed clarification to some technical definitions and modifications to streamline the disclosure process for companies.</Sidenote> A future amendment bill could, for example, enhance discoverability by requiring disclosures to follow a strict naming convention or contain a common phrase (e.g., “This document has been posted to our website in compliance with California State law AB1305.“), which would make it trivial to find documents using “exact phrase” searches. Such a requirement would impose minimal burden on entities preparing disclosures, while greatly improving the discoverability — and therefore the impact — of these legally mandated disclosures.

<Endnote label='Credits' divider>

Grayson collected, transcribed, and analyzed the disclosure documents. Grayson and Freya wrote the article. Kata led the development of the data viewer. Header image (modified) by [Beatriz Pérez Moya](https://unsplash.com/photos/a-stack-of-thick-folders-on-a-white-surface-XN4T2PVUUgk) on [Unsplash](https://unsplash.com/).

Please cite this article as:

Badgley et al. (2024) “Analyzing initial offset disclosures under California’s AB1305” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/ab1305-initial-disclosures](https://carbonplan.org/research/ab1305-initial-disclosures)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan received a grant from the Patrick J. McGovern Foundation to support this work. The authors are solely responsible for the content of this write-up, which does not reflect the views of the Patrick J. McGovern Foundation, or any other individuals or organizations.

The article text, figure, and data viewer are made available under a [CC BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

</Endnote>
