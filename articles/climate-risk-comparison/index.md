---
date: 08-09-2024
title: Climate risk companies don’t always agree
authors:
  - Oriana Chegwidden
  - Maggie Koerth
  - Jeremy Freeman
color: secondary
card: climate-risk-comparison
background: articles/026/signs
icon: articles/026/signs-small
invert: true
summary: Models broadly agree that climate change is affecting risks. But when it comes to assessing danger for individual addresses, the results can differ significantly.
quickLook: A comparison of address-level fire and flood risk assessments
components:
  - name: SummaryTable
    src: ./components/summary-table.js
  - name: RegionSummary
    src: ./components/region-summary.js
---

You might assume that buying a climate risk assessment means buying a singular truth. Unfortunately, that’s not the case. Climate risk assessments<Sidenote>Climate risks are often categorized as either physical (associated with the impacts of climate change) or transition (associated with the transition away from fossil fuels). This article exclusively considers physical climate risks.</Sidenote> reflect a long [chain of modeling](https://carbonplan.org/research/climate-risk-assessments) and a variety of [scientific and technical decisions](https://carbonplan.org/blog/climate-risk-metadata). While there’s, of course, agreement that the planet is warming, when it comes to predicting specific impacts in specific locations, there’s no one correct projection.

Scientists have long been familiar with spread among climate projections, and have found ways to make predictions while accounting for uncertainty.<Cite ids={['rising.2022']}/>
But a growing [industry of climate analytics companies](https://carbonplan.org/research/data-financial-risk) claims to [provide consumers](https://www.politico.com/news/2021/03/16/climate-change-murky-models-476316) with simple, easily interpretable predictions of the future. Consumers, both individuals and organizations, increasingly use these data to plan for a changing climate. When searching for homes on Realtor.com, for example, you can [see scores for fire, flood, and heat risk](https://mediaroom.realtor.com/2024-03-13-Realtor-com-R-Equips-Consumers-with-More-Data-to-Evaluate-the-Potential-Impacts-of-Climate-Risks-on-Their-Home), provided by the company First Street.<Sidenote>First Street has roots as a nonprofit organization, but in February 2024 announced [a new corporate structure](https://firststreet.org/press/first-street-announces-new-structure-investment-partners-and-advisor) as a Public Benefit Corporation.</Sidenote> Corporate or governmental organizations use risk information to develop adaptation plans, guide investment decisions, or conform with the growing need for climate risk disclosure, whether voluntary or [mandated](https://www.sec.gov/news/press-release/2024-31).

There has been little published independent assessment of the [climate risk industry](https://prospect.org/economy/2023-04-12-rise-climate-rating-agencies/). Previous descriptions of the market have been mostly qualitative<Cite ids={['carlin.2024']}/> or coarse<Cite ids={['hain.2021']}/> in their analysis, and other researchers have drawn attention to this gap.<Cite ids={['fiedler.2021', 'condon.2023']}/> Anecdotally, we know agencies and companies are conducting their own comparisons — Fannie Mae, for example, reportedly spent several years evaluating and comparing [multiple climate risk companies](https://www.nationalmortgagenews.com/news/fannie-mae-climate-risk-analytics-provider-revealed) including Jupiter Intelligence and First Street. But little is public about such processes. Most recently, a team of researchers — two of whom have a stake in the risk company Zeppelin Floods — compared their flood risk estimates for Los Angeles with those from First Street and found substantial disagreement.<Cite ids={['schubert.2024']}/> Without resolving which model is right or wrong, the discrepancies raise questions about the consistency of predictions across the industry more broadly.

Consumers have the right to know where these numbers come from, how consistent or inconsistent they are across companies, and whether companies are sufficiently acknowledging uncertainty in their estimates.

## A simple data request to companies

To better understand what exactly risk companies offer and how assessments vary across them, we played the role of the consumer, [requesting risk estimates](https://github.com/carbonplan/climate-risk-comparison/blob/main/CarbonPlan-Data-Request.pdf) for a sample of addresses from nine different analytics companies. The specific role we played was that of a planner tasked with identifying buildings exposed to climate hazards (either for the US Postal Service or the New York City Department of Education).<Sidenote>We did not offer payment for the data. We made clear why we were asking for it and how we intended to use it. You can read our data request we sent companies on Github.</Sidenote> We limited our request so as to minimize burden on companies and respect any concerns about sharing large amounts of proprietary information. Specifically, we asked for historical and future risk scores from 342 locations: fire risk for 128 post office locations in California and flood risks for 214 post office and public school locations in New York. This request ought to have been easy to fulfill, with data files small enough for email and requiring minimal documentation. We hoped that, as a nonprofit acting in the interest of the public, any company confident in its assessments would happily provide us with the data.

## Meager industry participation

The analytics companies we contacted ranged from large, established firms to small shops. Our first surprise was that, of all nine, only two companies shared data and documentation: the US company Jupiter Intelligence and the Australian company XDI (part of The Climate Risk Group). Both were helpful and forthcoming with data and documentation, all of which can be found [in our GitHub repository](TK Github link).

<Figure>
  <SummaryTable />
  <TableCaption number={1}>
    Consumers of climate risk analyses have a right to know what they are buying
    and how assessments might vary between companies. But few companies
    responded or chose to participate in this limited data review.
  </TableCaption>
</Figure>

Four companies explicitly declined to participate, including prominent firms Verisk and First Street.<Sidenote>First Street declined to participate while reminding us that their data was available on RiskFactor.com. But usage and reproduction of data across multiple addresses from RiskFactor.com appeared to be prohibited by that site’s terms of service. We followed up with a request for permission to use the data in our study, but First Street has not responded to that follow-up email.</Sidenote> Some of those who declined cited concerns about how their data would be presented or evaluated. Others declined without providing a reason. Three others never responded.<Sidenote>Riskthinking.AI replied to our initial email, asking to set up a phone call but failed to reply to subsequent attempts to set up the call.</Sidenote>

<Figure>
  <Table
    columns={[6]}
    start={[[1], [4]]}
    index={false}
    width={[[3], [3]]}
    data={[
      [
        <Box
          as='span'
          key='company'
          sx={{
            fontFamily: 'heading',
            letterSpacing: 'smallcaps',
            textTransform: 'uppercase',
          }}
        >
          Company
        </Box>,
        <Box
          as='span'
          key='response'
          sx={{
            fontFamily: 'heading',
            letterSpacing: 'smallcaps',
            textTransform: 'uppercase',
          }}
        >
          Response
        </Box>,
      ],
      ['Jupiter Intelligence', 'Agreed to participate'],
      ['XDI', 'Agreed to participate'],
      ['First Street', 'Declined'],
      ['Verisk', 'Declined'],
      ['Climate Check', 'Declined'],
      ['Zesty.ai', 'Declined'],
      ['Riskthinking.AI', 'No response'],
      ['Carbon4 Finance', 'No response'],
      ['Climate-X', 'No response'],
    ]}
  />
  <TableCaption number={2}>
    Out of nine companies we contacted with our data request, two chose to
    participate.
  </TableCaption>
</Figure>

## Aligning two assessments

The data from Jupiter and XDI are based on different analyses and use different definitions and systems for scoring risk. Just like the consumers we were mimicking, we did our best to compare the risk assessments using the scores as provided. That comparison relied on two key assumptions.

First, we assumed it was reasonable to pair together sets of scores from different companies, even though the specific risks are calculated and defined differently. XDI’s risk score is based on the value of assets at risk,<Sidenote>”Value at risk” is defined, per the XDI documentation, as an asset’s overall potential damage caused by each climate-related hazard as a proportion of the total asset value.</Sidenote> while Jupiter’s are based on hazard metrics like annual probability of wildfire or 100-year flood depth. The companies also differed in their future scenarios: XDI used RCP8.5 from CMIP5 while Jupiter used SSP5-8.5 from CMIP6, and while similar, the two scenarios are not the same.<Cite ids={['chen.2021']}/> Additionally, one uses a three-point scale and the other a five-point scale.<Sidenote>Both companies provided some additional data alongside risk scores, but we focused our analysis on the scores, as they were the most clearly comparable metric across the companies.</Sidenote>

Second, we assumed that even though we could not compare the absolute values from each company, we could assess each of their relative rankings of scores. Specifically, we used a non-parametric [rank correlation statistic](https://en.wikipedia.org/wiki/Kendall_rank_correlation_coefficient) called “Kendall’s Tau” (or 𝜏) that assesses the ordinal association between two quantities.<Sidenote>We specifically used the “b” variant of Kendall’s rank correlation as implemented in the SciPy Python module. Repeating all analyses using the “c” variant yielded qualitatively similar results, albeit with even lower values, indicating more discordance. We report the results for the “b” variant as its handling of ties (i.e., in a comparison between the relative ranking of two locations, the score for one company is the same for both) makes it more appropriate for our data.</Sidenote> The 𝜏 value ranges from -1 to 1; if two sets of rankings are independent it will be 0, and if the rankings are identical 𝜏 will be 1, even if one set is systematically higher than another on an absolute scale. In other words, if Jupiter skewed higher in its estimates than XDI, but for any pair of locations the two still had the same relative ranking, 𝜏 would be 1. Values greater than 0 but less than 1 indicate some amount of discordance, with lower numbers implying more inconsistency.<Sidenote>Negative values of 𝜏 indicate an opposite ranking, but we found no negative values in this study.</Sidenote> For each comparison, we report both the value of 𝜏 itself, which captures the strength of the relationship, as well as the results of a statistical test (a p-value) for whether 𝜏 is greater than 0.

Below we describe the results of this analysis for each of three case studies.

### Case Study #1: Fire risk in California

Across 128 locations in California, coarse spatial patterns of risk were broadly similar during the historical period (ca. 1995), with higher risk in the wooded central Sierras (see map in Figure 1). However, a direct comparison of rankings showed significant, but only weak, consistency (𝜏=0.25 ± 0.07, p=0.0019). That value of 𝜏 implies more similarity than if scores were completely independent, but also a substantial amount of discordance. The relationship between the scores is visualized in Figure 1 in a slopegraph, where scores from XDI and Jupiter for each location are connected by sloped lines. Lines angled up to the right indicate Jupiter scored a location with higher risk than XDI (and vice versa for lines sloped down). Crossing lines occur whenever the ranking of risk is not consistent between the two companies.

Data from both companies agreed that climate change would exacerbate fire risk in many locations. By 2100, risks increased in 30 percent of locations for Jupiter, 33 percent of locations for XDI, and 12 percent of locations for both, implying only partial agreement on where risks would increase.<Sidenote>Many locations, especially for Jupiter, may not show an increase because the risk is already at the company’s highest risk level, which, of course, depends on how risk categories are defined. If we restrict the analysis to locations below the highest risk level according to both companies (leaving only 56 locations), we find that risks increase for Jupiter in 63 percent of locations compared to 38 percent for XDI.</Sidenote> The overall consistency of scores in 2100 was significant, but weak (𝜏=0.22 ± 0.07, p=0.0082), just as in the historical period.

<Figure>
  <RegionSummary region='ca' />
  <FigureCaption number={1}>
    Fire risk scores for 128 locations in California from two climate analytics
    companies, XDI and Jupiter. Risk scores are ordinal: XDI uses a three-tier
    scale and Jupiter uses a five-tier scale. The slopegraph at right compares
    the company risk scores for each location (XDI at left, Jupiter at right).
    Thicker lines indicate more locations with the given relationship. Any time
    lines cross it means the relative ranking differs. Company scores are
    compared for historical and future time periods separately.
  </FigureCaption>
</Figure>

### Case Study #2: Coastal inundation in New York City

Risk estimates for flooding include three types: coastal inundation from the sea, surface water (e.g., extreme local precipitation), and riverine flooding (e.g., a river overtopping its banks). We decided to focus on coastal flooding in New York City, given the city’s exposure to future sea level rise. A challenge with this comparison was that, in the historical period, only 3 percent of locations for XDI had a risk above the lowest category, which we’ll call “above-lowest risk.” In contrast, 27 percent of locations for Jupiter had above-lowest risk. This finding itself suggests disagreement, although it somewhat arbitrarily depends on the thresholds used by companies to define risk categories. But when barely any locations have above-lowest risk for one or both companies, comparisons of ranking become unstable and hard to interpret, and so we don’t report the value of 𝜏.

When we looked to 2100, however, risks increased in both datasets, going up in 53 percent of locations for Jupiter, 23 percent for XDI, and in 21 percent of locations according to both companies. As more locations had above-lowest risk, it became more reasonable to compare rankings, and here we found evidence for consistency (𝜏=0.55 ± 0.06, p\<0.0001). This consistency was largely driven by the coarse spatial pattern of locations near the coast having higher risk for both companies. Note, however, that a 𝜏 of 0.55 is still far less than the value of 1 that we would expect if they were perfectly consistent.

<Figure>
  <RegionSummary region='nyc' />
  <FigureCaption number={2}>
    Coastal inundation risk scores for 90 locations in New York City from two
    climate analytics companies, XDI and Jupiter. Risk scores are ordinal: XDI
    uses a three-tier scale and Jupiter uses a five-tier scale. The slopegraph
    at right compares the company risk scores for each location (XDI at left,
    Jupiter at right). Thicker lines indicate more locations with the given
    relationship. Any time lines cross it means the relative ranking differs.
    Company scores are compared for historical and future time periods
    separately.
  </FigureCaption>
</Figure>

### Case Study #3: Flooding in New York State

For the rest of New York State, we focused on surface water flooding and riverine flooding, given the limited number of coastal locations. For both companies, very few locations had above-lowest risk in these categories. For riverine flooding, the fractions were 7 percent for Jupiter and 22 percent for XDI in the historical period, increasing to 9 percent and 32 percent in 2100. And for surface water flooding they were only 12 percent and 2 percent for the historical period, remaining unchanged in 2100. Given these low frequencies, rank comparisons were not particularly robust or useful. We did find evidence for consistency in the case of riverine flooding in 2100, where the fraction of above-lowest risk was highest (𝜏=0.19 ± 0.09, p=0.03), though 𝜏 here was still low. Together, these results suggest that the two companies are broadly similar in considering the risk of flooding low in most locations. However, in the rare cases where risk is above-lowest, there is only minimal consistency.

<Figure>
  <RegionSummary region='nystate' />
  <FigureCaption number={3}>
    Risk scores for two kinds of flooding for 124 locations in New York State
    from two climate analytics companies, XDI and Jupiter. Risk scores are
    ordinal: XDI uses a three-tier scale and Jupiter uses a five-tier scale. The
    slopegraph at right compares the company risk scores for each location (XDI
    at left, Jupiter at right). Thicker lines indicate more locations with the
    given relationship. Any time lines cross it means the relative ranking
    differs. Company scores are compared for historical and future time periods
    separately.
  </FigureCaption>
</Figure>

## Key takeaways

### 01 - Industry is not invested in transparency

While our analysis is informative, it only scratches the surface due to limited data availability. Indeed, what is perhaps most striking about this endeavor is how little data we received. Despite making a narrow request in the interest of the public, only two of nine companies were willing to share data. While we appreciate their participation, we are left wondering what the results would have been if we had been able to look at data from more companies. Would we have found even more striking examples of discordance, perhaps worrisomely correlated with other factors like socioeconomic patterns? Or would we have found convergence among most companies with just a handful of outliers? We can’t say.

### 02 - Broad regional agreement can mask asset-level variation

Comparing companies revealed some broad patterns of similarity. For example, Jupiter and XDI both showed higher fire risk in the central Sierras in California compared to other areas in the state, and both showed that fire risk in California and coastal inundation risk in New York City will increase with climate change. But a detailed comparison of rankings at the level of individual addresses showed only modest consistency and many systematic differences. These discrepancies suggest that any rigorous comparison of risk assessments must be done at the level of individual assets, not at the level of zip codes or census tracts. This distinction will become increasingly important as society bases more and more decisions on asset-level risk data.

### 03 - More data needed to explain the variation

We had to make several assumptions to compare risks across companies. Most importantly, we assumed that the companies’ calculated risks were comparable for each of the hazards, despite their using different methods as described in their [documentation](https://github.com/carbonplan/climate-risk-comparison). The different results between the two companies could, in principle, be explained by these methodological differences. For example, Jupiter bases its historical fire risk estimates on the US Forest Service’s Wildfire Risk to Communities dataset, and they incorporate climate change effects by assessing changes in temperature and vapor pressure deficit. In contrast, XDI drives their hazard model using the hot-dry-windy index, along with an empirical ignition probability model and estimates of tree cover and economic activity. For the climate change signal, Jupiter uses CMIP6 while XDI uses CMIP5, downscaled via the CORDEX project. But while these methodological differences may in part explain the differing results, it would take a more thorough, systematic comparison to be sure. And that would require more complete datasets and documentation of all analysis steps, ideally in the form of open source code — none of which is currently accessible to the public. This exercise illustrates how information about methods and more standardized metrics are critical for comparing and interpreting risk assessments, an issue [we’ve written about previously](https://carbonplan.org/blog/climate-risk-metadata).

## Differences among companies impact the consumer

Given the uncertainty inherent in climate and hazard modeling, it’s not surprising that different companies produce different estimates of risk. We saw differences in the overall fraction of locations above certain low-risk thresholds, as well as in the relative ranking of risk categories. The former in part reflects how companies define thresholds, but could still be a source of confusion for a downstream consumer. The latter depends only on ranking, not on thresholds, and therefore implies more fundamental disagreement. Together, these differences matter enormously to those who might use the data, and ignoring them invites the potential for misuse.

Typical consumers of climate risk data include insurance companies setting rates or publicly-traded companies disclosing risk. An insurance company, for example, might provide a climate risk assessment to a regulator, or a regulated company might include their risk in a financial disclosure. If those companies accessed multiple, differing climate risk assessments, like the two we examined here, they might choose to report the assessment most in their financial interest. They could select higher-risk estimates to justify premium rate hikes, for example, or select lower-risk estimates to assuage concerns from potential investors — all under the fiction that these numbers are absolute facts.

Less nefarious, but still hugely consequential, is the potential impact of differing risk assessments on public institutions that need to allocate investments according to risk. For example, New York City government officials must choose where to site infrastructure to best defend against the growing threat of coastal inundation. Relying on one risk company over another could result in substantially different investment decisions, and potentially maladaptive choices. These concerns also extend to individual homeowners. Climate risk estimates are available on real estate websites and they [influence home buying behavior](https://www.redfin.com/news/redfin-users-interact-with-flood-risk-data/). Erroneous patterns in these data could have unintended adverse consequences for the public, making rigorous evaluation and transparency critical.

## Public comparisons in the public interest

As public financing increasingly flows toward climate adaptation, risk estimates from analytics companies are likely to affect billions of lives and trillions of dollars. If the climate risk industry continues in the private sector, without any requirements for transparency, black box models that cannot be compared will become the norm across many industries, including housing and insurance. We believe a public option should be widely available as an alternative, building on products like the National Risk Index and public catastrophe models.<Cite ids={['condon.2023']}/> Otherwise, the public sector itself will have no choice but to purchase climate risk assessments from private companies. Public products can act as benchmarks, help hold private efforts accountable, and ensure that everyone has access to information about present-day and future climate risks.

In the meantime, we urgently need a nationwide, multi-hazard, asset-level comparison of private climate risk companies. Analogous to the multinational Coupled Model Intercomparison Project (CMIP),<Sidenote>The CMIP effort, supported by the World Climate Research Programme, compares climate models and helps the global scientific community understand uncertainty and model (dis)agreement.</Sidenote> an asset-level, multi-hazard, nationwide comparison effort could help us understand the spread and validity within the growing market of climate risk products. The data underlying such a comparison must be comprehensive, and the results and methods must be publicly released, full stop. If companies will not voluntarily submit to such comparisons — and based on our experience, we have good reason to think they will not — then it must be required by regulation.

<Endnote label='Credits'>

Oriana and Maggie designed the study, Oriana and Jeremy analyzed the data, and all authors contributed to the article. Kata Martin designed the figures. The authors thank Sadie Frank for helping to identify this topic as a worthwhile area of research and for conversations that helped inspire this study. The authors also thank Andrew Bennett and Kristy Dahl for informal external review. Header image (modified) by [Javier Allegue Barros](https://unsplash.com/photos/silhouette-of-road-signage-during-golden-hour-C7B-ExXpOIE) on [Unsplash](https://unsplash.com/).

Please cite this web article as:

O Chegwidden, M Koerth, & J Freeman (2024) “Climate risk companies don’t always agree” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/risk-provider-comparisons](https://carbonplan.org/research/risk-provider-comparisons)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan received [no specific financial support](https://carbonplan.org/funding) for this work.

Article text and figures made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

</Endnote>
