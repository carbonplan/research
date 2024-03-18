---
version: 1.0.0
title: Monitoring the global carbon market with OffsetsDB
authors:
  - Grayson Badgley
  - Anderson Banihirwe
  - Kata Martin
color: purple
date: 03-08-2024
card: offsets-db-explainer
background: articles/024/drawers
icon: articles/024/drawers-small
summary: Information about carbon offset projects and credits is spread across the internet, making it hard to compare up-to-date data from different sources. Our new, regularly updated database harmonizes offset data from several sources, helping make the offsets market more transparent.
quickLook: OffsetsDB makes it easier to investigate carbon offset projects and credits
links:
  - label: Database tool
    href: /research/offsets-db
  - label: Methods
    href: /research/offsets-db-methods
  - label: Download data
    href: https://offsets-db-data.readthedocs.io/en/latest/data-access.html
components:
  - name: Diagram
    src: ./components/diagram.js
  - name: SummaryTable
    src: ./components/summary-table.js
  - name: TimeSeries
    src: ./components/time-series.js
---

Spend enough time browsing carbon offset data and you’re bound to turn up something surprising. Last year, we noticed that Rivian, the electric car company, was developing [a carbon offset project](https://carbonplan.org/research/offsets-db/projects/VCS3735). That seemed weird to us, since we thought Rivian primarily sold cars, not carbon. When we dug into the project’s documentation, we discovered a worrisome arrangement where consumers would buy cars and pay to charge them, but Rivian would take all the credit, in the form of offsets.

Carbon offset data might seem like dry, bureaucratic paperwork. But dig around and you can find stories that show who benefits from offsets, what trends are shaping the way credits are bought and sold, and how the regulatory structure works — or, more often, doesn’t work. The Rivian case was especially concerning to us because it demonstrated how polluting companies might claim “net zero” by riding on the backs of conscientious consumers. Showing this documentation to journalists [helped bring public awareness](https://www.technologyreview.com/2023/06/12/1074410/rivian-hopes-to-earn-carbon-credits-for-its-home-ev-chargers/) to this unpleasant possibility.

The massive growth of the carbon offsets industry demands equally massive oversight. Researchers, regulators, journalists, and consumers need to be able to investigate how offsets work. Unfortunately, that’s been a challenge. Data on offsets are scattered across the internet, usually in formats that can’t be easily compared. While several [important](https://gspp.berkeley.edu/research-and-impact/centers/cepp/projects/berkeley-carbon-trading-project/offsets-database), [ongoing](https://climateactiondata.org/) efforts have worked to improve data accessibility, no existing resource automatically harmonizes up-to-date offsets data and makes it public. And it’s impossible to regulate an industry without the capacity to monitor it.

To address this problem, we're releasing OffsetsDB, an offsets database that is updated daily. OffsetsDB consolidates and standardizes data about offset projects and offset credits issued by five of the largest offset registries: American Carbon Registry, Architecture for REDD+ Transactions (ART), Climate Action Reserve, Gold Standard, and Verra's Verified Carbon Standard (VCS). These five registries represent the lionshare of the voluntary offset credits transacted globally. As of today, OffsetsDB contains information on more than 9,000 individual offset projects that have been issued more than 2.1 billion offset credits. Each credit represents one ton of carbon dioxide equivalent (tCO₂e), which these projects claim to have either removed from the atmosphere or avoided emitting.

We built OffsetsDB to enhance the transparency and oversight of the global offsets market. OffsetsDB organizes offsets data and makes it instantly accessible. The database should make it easier to both answer simple questions with up-to-date data (e.g., "how many offset credits have come from forest projects?") and perform more complicated analyses required for systematic study and oversight of the offsets market.

## Data sources

Carbon offset registries are organizations (mostly nonprofits) that maintain information about offset projects around the world. These registries act as the standard setters and administrators of the global carbon market. They're responsible for writing the rules about what qualifies as an offset, they help verify that offset projects are following those rules, and, most importantly, they maintain publicly accessible databases that track the status of all offset credits.

When an offset credit is created, or "issued" in carbon market parlance, the credit shows up in a registry database. When a company offsets their emissions, they do that by permanently removing credits from the carbon market, a process known as “retirement.” This shows up in the registry databases, indicating that the retired credit can no longer be sold, traded, or used again. Registries provide the critical service of openly and publicly tracking credits to ensure that each offset is only used once.

While the general role of offset registries is straightforward, each registry uses different formats to organize the data about the projects and credits it administers. Those differences make it difficult to systematically compare projects and credits across registries.
Many differences are straightforward and cosmetic, like using a different name to refer to the same value. For example, one registry's database might refer to the total number of credits issued as “Total Credits Issued”, whereas another registry might use the term “Credits Verified.” Making comparisons across these two registries requires normalizing for these differences in naming conventions. Similar normalizations are required for differences in data formats. One registry might report key dates using the format year-month-day, while another might use day-month-year.

Other differences require a deeper understanding of the vagaries of each particular registry. For example, if you [download raw crediting data from Verra](https://registry.verra.org/app/search/VCS) and sum up all the issuances and retirements, you'll find that some projects have retired more credits than they've been issued. It turns out that Verra allows projects to issue credits on a rolling basis. In practice, this means that raw data downloaded from Verra contains incomplete information about the issuance of individual tranches of credits. Sometimes, the first time we see credits in the publicly recorded data is on their retirement. To account for this, we infer issuances from a Verra-provided aggregate value, “Total Vintage Quantity,” as opposed to taking the sum of the incomplete issuance events recorded in the data.

OffsetsDB provides a harmonized dataset that accounts for these differences. We accomplish this using an automated pipeline to download registry data and apply a set of data transformations to achieve consistency (Figure 1).

<Figure>
  <Diagram />
  <FigureCaption number={1}>
    Schematic describing the steps involved in generating OffsetsDB. First, we
    download raw project and credit data from five of the largest offset
    registries. We then apply various normalizations to the raw data to make
    data consistent across registries. Finally, we upload the processed data,
    where users can either download the data or explore the data using an online
    database tool.
  </FigureCaption>
</Figure>

Many of our [previous](https://carbonplan.org/research/forest-offsets-explainer) [projects](https://carbonplan.org/research/toucan-crypto-offsets) on offsets have addressed these sorts of data issues in a one-off, ad hoc manner. Downloading and cleaning raw data, handling edge cases, and otherwise making data analysis-ready represented a substantial fraction of our work. We also know that many other researchers and analysts have confronted the same challenges, suggesting a lot of reinvention. OffsetsDB should help make it easier for researchers, regulators, and journalists to ask questions about offsets and quickly find answers.

## What we're releasing

Our release of OffsetsDB contains four distinct pieces, all of which facilitate improved oversight of the global carbon market.

First, we're releasing the data itself. Users can download the fully processed and harmonized dataset in two formats, comma-separated values (CSV) and Parquet. If you're partial to working with spreadsheet software, like Excel, you'll probably want to download the CSV files. From there, you can filter, sort, and PivotTable to your heart's content. Analysts working with tools like R and Python can also use CSV, but we strongly encourage that you give Parquet a try. Parquet contains rich metadata that offers several quality of life improvements over CSV. Without going into too many technical details, one nice thing about Parquet files is that they contain extra information about column data types, meaning data are loaded using the appropriate data type (e.g., in Python, dates are parsed to `datetime`). This makes it even easier to get started analyzing the data.

Second, we're releasing [an online database tool](https://carbonplan.org/research/offsets-db) that allows anyone to easily explore OffsetsDB from their browser. Projects can be searched by name, registry, project type, country, and protocol. This means when you read about an offsets project in the news, you don't need to know which registry it came from. You can just enter the project's name or country into the OffsetsDB tool and learn more about it, confident that you’ll be seeing up-to-date information. You can also navigate to a standalone page for each project. These pages contain additional project-level information, including a record of issuances and retirements and links to the underlying registry website if you want to dive deeper into the documentation.

<Figure>
  <SummaryTable />
  <FigureCaption number={2}>
    Summary statistics describing the current scope of OffsetsDB.
  </FigureCaption>
</Figure>

Third, we have an [Updates](https://carbonplan.org/research/offsets-db/updates) page that documents recent changes in the market. Some of the entries are generated automatically, highlighting both new projects and also projects that have recently retired a significant number of credits. We also use this page to manually track projects that have appeared in the news, research reports, and academic publications. Documenting the relationship between specific projects and outside reporting should help offset buyers, researchers, and regulators quickly track down relevant third-party information about projects. Going forward, we plan to augment Updates with our own commentary and observations. The design behind Updates was heavily inspired by Molly White's outstanding [Web3 is Going Just Great](https://web3isgoinggreat.com/).

Fourth, we're [releasing the code](https://github.com/carbonplan/offsets-db-data) that generates OffsetsDB under an open source license. That means anyone can study the decisions and assumptions that go into producing each and every value within the database.<Sidenote>We have opted not to share the code for downloading registry data. This represents a small portion of the codebase. We have tried to implement this step carefully and responsibly, but if used improperly these scripts could throttle registry servers and potentially cause problems. How exactly we do this step should also have negligible consequences for the subsequent data processing. Thus, for now, this one part of the codebase remains private.</Sidenote> Transparency provides several advantages. First, it allows anyone to review our code and identify errors. While we've done our best to test and validate OffsetsDB, mistakes happen. Openly publishing the code that generates OffsetsDB maximizes the likelihood that those mistakes are quickly identified and rectified in a transparent manner. Second, open methods mean anyone can submit suggestions and code to enhance and extend OffsetsDB. We're hopeful that OffsetsDB will provide a central location for collecting data about the global offsets market and minimize the need for individuals to invent their own approaches for processing raw offsets data.

## The benefits of automation

From the outset, we designed OffsetsDB to reflect the dynamic nature of the global offsets market. New projects continually come online and credits are issued, canceled, and retired on a daily basis. Two features of OffsetsDB help us track these dynamics.

First, automation lets us update OffsetsDB every day, yielding a daily archive of the global offsets market. Daily updates ensure that anyone visiting OffsetsDB gets a fresh view of the market.<Sidenote>For technical reasons, we currently download Gold Standard data manually. This means OffsetsDB won’t always get updated on the weekend. We hope to improve this step in the future.</Sidenote> If a project is under time-sensitive scrutiny for any reason, OffsetsDB also makes it easy to track day-to-day changes. For example, Kariba, the now disgraced offset project [profiled in _The New Yorker_ last October](https://www.newyorker.com/magazine/2023/10/23/the-great-cash-for-carbon-hustle), has continued to retire credits despite being put “On Hold” by Verra. Since the publication of that exposé, [more than 250,000 credits have been retired](https://carbonplan.org/research/offsets-db/projects/VCS902). It's shocking to think that these low-quality credits are still being used to make offsetting claims. OffsetsDB makes this sort of indiscretion easy to follow in real time.

Second, the daily snapshots enabled by automation will allow us to more accurately characterize how the offsets market changes over time — something that has not yet been well-documented. We're especially interested in better characterizing key dates around project development. This will make it easier to track and discover trends in the types of projects under development, something that gets less public attention than annual records (e.g., [“a record number of offsets were retired in 2023”](https://about.bnef.com/blog/carbon-offset-demand-hits-record-in-2023-off-huge-december/)) or trends in credit issuances and retirements.

<Figure>
  <TimeSeries />
  <FigureCaption number={3}>
    Cumulative number of projects listed under three Climate Action Reserve
    protocols. Tracking new projects as they enter the development pipeline
    should enable more rapid study of emerging trends within the global carbon
    market, long before credits are issued.
  </FigureCaption>
</Figure>

Take, for example, the Climate Action Reserve's [Mexico Forest Protocol](https://www.climateactionreserve.org/how/protocols/ncs/mexico-forest/). In just five years, the protocol has seen the development of nearly 230 projects. What's more impressive is the rate at which new projects have been added to the program (Figure 3). During 2022, 99 projects came online – more than eight new projects a month, on average. Contrast that against CAR's [U.S. Landfill Protocol](https://www.climateactionreserve.org/how/protocols/waste/us-landfill/) and its [U.S. Livestock Protocol](https://www.climateactionreserve.org/how/protocols/waste/us-livestock/), which have each enrolled a total of 126 and 69 projects, respectively, since they got started back in 2007. Neither of those older protocols managed to expand at anywhere near the rate of CAR's Mexico Forest program on a monthly basis, either. Paying attention to patterns in project development, as opposed to just looking at credits, should allow researchers and regulators to more rapidly identify emerging trends in the market, enabling more forward-looking oversight.

Unfortunately, we've found that only the Climate Action Reserve reliably reports project listing dates, the date when projects first appear in the registry. In the future, automation will allow OffsetsDB to partially address this deficiency. Rather than relying on registries reporting projects' listing dates, we can instead infer listing dates by looking at the difference between daily snapshots — the first time we see a project in the data, we know its listing date. Of course, this strategy only works for projects that start _after_ we began collecting data for OffsetsDB, meaning there will still be missing dates in the historical record. In the long term, we expect daily snapshots will allow us to document all sorts of interesting changes in the market and its composition that might have otherwise gone unnoticed.

Finally, the combination of automation and public data and code helps set OffsetsDB apart from existing datasets available for tracking offsets. Many existing data products, such as [AlliedOffsets](https://alliedoffsets.com/), are proprietary and require a fee to use, even if they are kept up-to-date. Closed data and methods might make good business sense, but it makes these tools ill-suited for ongoing market oversight. Another important product, Berkeley's [Voluntary Registry Offsets Database](https://gspp.berkeley.edu/research-and-impact/centers/cepp/projects/berkeley-carbon-trading-project/offsets-database), is fully public and represents a careful effort to harmonize data from multiple registries, from which we have taken inspiration.<Cite id='so.2023'/> However, it is only updated a few times a year and released via an Excel spreadsheet. The [Climate Action Data Trust](https://climateactiondata.org/) also has an open, regularly updated database that launched near the end of last year. Their database, however, only includes registries that establish a partnership with the platform. Among the registries that issue voluntary offset credits, only Verra and Global Carbon Council have currently chosen to participate. OffsetsDB bridges the gap by being an open and automated database that actively sources available project and credit data and makes that information available for download and through a web-based interface.

## Ways to use OffsetsDB

To help get started, the following table outlines some possible use cases for the various products related to OffsetsDB.

<Figure>
  <Table
    index={false}
    columns={[2, 5, 5, 5]}
    start={[
      [1, 1, 1, 1],
      [1, 2, 2, 2],
      [2, 4, 4, 4],
    ]}
    width={[
      [2, 1, 1, 1],
      [1, 2, 2, 2],
      [1, 2, 2, 2],
    ]}
    data={[
      [
        <Box key='who' sx={{ display: ['none', 'inherit'] }}>
          Who are you?
        </Box>,
        <Box key='what'>
          <Box sx={{ display: ['inherit', 'none'] }}>
            Who are you and what do you want to do?
          </Box>
          <Box sx={{ display: ['none', 'inherit'] }}>
            What do you want to do?
          </Box>
        </Box>,
        'Next steps',
      ],

      [
        'Consumer',
        'I read about an offset project in the news and want to know more about the project.',
        <>
          Visit the <Link href='https://carbonplan.org/research/offsets-db'>OffsetsDB web tool</Link>{' '}
          where you can search and explore project data directly in your web browser.
        </>,
      ],
      [
        'Researcher',
        'I want to build an analytical model to better understand patterns in the types of offsets that are retired over time.',
        <>
          <Link href='https://offsets-db-data.readthedocs.io/en/latest/data-access.html'>
            Download the data
          </Link>{' '}
          and start working through your analysis with whatever software you prefer.
        </>,
      ],
      [
        'Journalist',
        'I am investigating an offset project.',
       <>
        Search for specific projects and check the <Link href='https://carbonplan.org/research/offsets-db/updates'>Updates feature</Link>{' '}

for a timeline of activity. You can also access more records through our link to the underlying registry website for the project.

</>,
]
]}
/>

</Figure>

In the months to come, we plan to add more data and annotations to OffsetsDB, with an initial focus on recording the listing dates of new projects based on the first date they appear in registry data. We're also excited to add additional, project-level categorizations to more fully reflect the diversity of offset projects participating in the market. This will allow tailored searches for specific types of projects, like REDD+ or dairy digesters, that go beyond the current ability to filter by protocol categories. You can follow our progress on [GitHub](https://github.com/carbonplan/offsets-db-data).

<Endnote label='Credits' divider>

Grayson, Anderson, and Kata led the development of OffsetsDB. Shane helped in designing the database tool interactive graphics. Header image (modified) by [Jack Krzysik](https://unsplash.com/photos/green-and-white-cardboard-boxes-r1oeiXFHQIY) on [Unsplash](https://unsplash.com/).

Please cite this article as:

G Badgley, A Banihirwe, K Martin (2024) “Monitoring the global carbon market with OffsetsDB" CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/offsets-db-explainer](https://carbonplan.org/research/offsets-db-explainer)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan received a grant from the Patrick J. McGovern Foundation to support this work. The authors are solely responsible for the content of this write-up, which does not reflect the views of the Patrick J. McGovern Foundation, or any other individuals or organizations.

Article text and figures made available under a [CC-BY 4.0 International](https://creativecommons.org/licenses/by/4.0/) license. Associated [analysis package](https://github.com/carbonplan/offsets-db-data) and [web tool](https://github.com/carbonplan/offsets-db-web) made available under an [MIT license](https://github.com/carbonplan/offsets-db-web/blob/main/LICENSE). Data associated with OffsetsDB is subject to additional [terms of data access](https://github.com/carbonplan/offsets-db-data/blob/main/TERMS_OF_DATA_ACCESS).

</Endnote>
