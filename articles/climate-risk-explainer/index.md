---
date: 02-10-2026
title: Making climate risk data open
authors:
  - Oriana Chegwidden
  - Chris Allen
  - Tracy Aquino Anderson
  - Anderson Banihirwe
  - Jeremy Freeman
  - Raphael Hagen
  - Tyler Kukla
  - Shane Loeffler
  - Kata Martin
color: red
summary: We’re releasing Open Climate Risk, a platform which transparently provides present-day and future wildfire risks for buildings across the contiguous United States.
quickLook: Building-level wildfire risks for now and the future, across the United States.
background: articles/033/street
icon: articles/033/street-small
card: climate-risk-explainer
components:
  - name: OverviewMap
    src: ./components/overview-map.js
  - name: CountyMap
    src: ./components/county-map.js
  - name: WindComparison
    src: ./components/wind-comparison.js
  - name: SummaryTable
    src: ./components/summary-table.js
links:
  - label: Map tool
    href: /research/climate-risk
  - label: Methods
    href: /research/climate-risk-fire-methods
  - label: FAQ
    href: /research/climate-risk-faq
  - label: Download data
    href: https://docs.carbonplan.org/ocr/en/latest/access-data.html
---

How likely is it that wildfire will destroy a home? That a storm surge will flood a community? Or that a heat wave will overwhelm an emergency room? When faced with questions like these, high-quality climate risk assessments help us make better decisions. But who has access to risk data, and how do we know it’s high quality?

The private sector understands the need for climate risk data. Recently, the Boston Consulting Group estimated private equity investment opportunities in the climate and resilience adaptation market will grow from $0.5 trillion to $1.3 trillion per year by 2030, and identified climate intelligence solutions as the subsector expected to grow the most quickly.<Cite id='oehling.2025' /> The public is also starting to draw connections between the estimation of risk and its consequences for everyday people, most clearly when it comes to insurance availability and cost. In states that elect insurance commissioners, and where climate change is most obvious, some of these elections have become proxies for [public frustration over rising premiums](https://grist.org/elections/climate-impacts-put-insurance-commissioner-races-in-the-spotlight).

Yet despite the consequence of climate risk estimates, and the number of analytics firms producing them, almost none of this data is available to the public.<Cite id='condon.2023' /> You can type an address into Redfin and get a handful of climate risk scores, but you can’t see how those scores were calculated, or download data for a county. Your tax dollars may have funded the creation of the base datasets that an analytics company uses in its wildfire risk model, but for your local government to use the model to protect your neighborhood, they likely have to sign a restrictive contract with a company, and pay a significant fee. As legal scholar Madison Condon summarizes, “The climate risk information available to individual citizens and municipalities &mldr; is limited and expensive to access.”<Cite id='dawkins.2023' />

Access isn’t the only problem. Closed-door risk assessments are also difficult to evaluate or trust. A consistent finding in the few published comparisons of risk providers, including our own [work](https://carbonplan.org/research/climate-risk-comparison), is that different providers frequently assign significantly different levels of risk to the same location.<Cite ids={['hain.2021', 'schubert.2024']} /> The Global Association of Risk Providers (GARP) pointed to the problem clearly when they found that, across 13 companies, “leading vendors can deliver strikingly different results.”<Cite id='paisley.2025' /> Without knowing a risk product’s underlying methods, and how it compares to others, it’s hard to know whether it is appropriate for any given use. And without open model intercomparison, the science driving risk estimation is slow to advance.

Open Climate Risk is the first fully open option for building-level climate risk estimates in the United States, starting with wildfire risk. It is intended to be a usable dataset, a model for intercomparison, and a demonstration of the kind of transparency that could enable rapid, important improvements in climate risk estimation across providers. To create our open source wildfire model, we began with publicly available base datasets, then developed and applied a scientific model for projecting risk of loss from wildfire. Anyone can inspect the dataset and methods that underpin our estimates. We’ve also created a fully open map tool that allows users to explore, download, and analyze the dataset. We’ve released all of this under open software licenses, which apply in perpetuity: this means the data and code, once accessed, can be used freely forever.

In this explainer, we describe what Open Climate Risk does, how we built it, and how it compares to other efforts. We share how to access all of the underlying data and modeling, and explain why this transparency matters. We also discuss our next steps for the platform, and gesture towards a broader vision for public access to risk data. But first, we need to introduce climate risk and risk modeling.

## What is climate risk

Studies about climate risk attempt to assess the projected impacts of climate change, commonly within the frame of present-day risks, as compared to risks under a future scenario (e.g., mid-century, 2 °C of global warming).<Sidenote>Climate risk is often grouped into two categories: physical risk (assessing the impacts of climate change) and transition risk (assessing the impact of the transition away from fossil fuels). This effort focuses exclusively on physical risk.</Sidenote> There are three main components of any risk assessment: hazard, exposure, and vulnerability.<Cite id='dawkins.2023' /> The risk of a certain impact — say, the loss to a structure from wildfire<Sidenote>This effort focuses on risk from fires originating in wildlands, as opposed to fires starting within the built environment.</Sidenote> — is the product of (1) the probability of a wildfire; (2) the exposure of a structure to a wildfire; and (3) a structure’s vulnerability, which can depend on factors as diverse as nearby vegetation and building materials.

There is no inherently correct way to quantify the hazard and vulnerability,<Sidenote>Structure exposure can be more straightforward to assess thanks to rich datasets about building footprints. In this effort we consider any building coincident with a non-zero burn probability to be exposed.</Sidenote> so any such effort requires a wide range of decisions, particularly when trying to account for climate change.<Cite id='fiedler.2021' /> For example, the [downscaling algorithm](https://carbonplan.org/research/cmip6-downscaling-explainer), choice of global climate models (GCMs), and choice of vegetation map could all influence the estimate of wildfire risk in a given region and for a given timeframe. Ideally, methods decisions are guided by what is most appropriate for the question at hand, but often they are determined just by the datasets and methods available. These decisions invariably influence results, and potentially impart significant limitations on the climate risk assessment. As a result, transparency of methods is critical for understanding any climate risk estimate.

## What we’re releasing

Open Climate Risk is a fully open, free to access platform that allows you to explore climate risks at the scale of individual buildings across the contiguous United States (CONUS). The open license we assigned to the data and code is irrevocable. This is in contrast to organizations that sell risk assessments, as well as those which, even if structured as nonprofit organizations or government entities, do not release data or code under a permissive, open license.

Open Climate Risk, in this initial release, provides estimates of wildfire risk to structures under both current and future climate conditions. The platform includes three main components — an interactive map tool, the dataset that powers the tool, and the code used to produce the dataset. The dataset and code are [open source](https://github.com/carbonplan/ocr), meaning that others can both check our work and build upon it. The [map tool](/research/climate-risk) allows you to look up the wildfire risk to individual buildings by address, compare that building against others nearby, and examine regional patterns of wildfire risk.

<Figure>
  <OverviewMap />
  <FigureCaption number={1}>
    Risk of loss to potential structures across the U.S. under current and
    future climates. Brighter colors indicate higher risk. Risk increases in the
    future across the western and central U.S. At this country-wide scale, the
    values here largely reflect those in Riley et al. (2025), which covered
    wildlands across the country.
    <Cite id='riley.2025' />
  </FigureCaption>
</Figure>

The map tool also reveals underlying components of risk that explain where a building’s score came from. You can download, and freely use, the underlying risk estimates displayed in the tool, whether for buildings or as gridded maps. We’ve also taken steps to make the input datasets that went into our analysis easy to work with in the cloud. Finally, we provide a set of aggregated data — available in both CSV and GeoJSON — that characterize wildfire risk over states, counties, census tracts, and census blocks to support applications at a variety of scales.

<Figure>
  <SummaryTable />
  <TableCaption number={1}>
    Our dataset covers buildings across the contiguous United States and is
    fully inspectable, whether in the map tool or via downloads, for follow-on
    analyses.
  </TableCaption>
</Figure>
## How we built our wildfire model

We developed the Open Climate Risk wildfire model to be reproducible and reliant on only free, publicly available input data. Our wildfire model [methods](/research/climate-risk-fire-methods) extend previous work by the United States Forest Service (USFS) and the Wildfire Risk to Communities (WRC) project<Cite id='scott.2024' />, incorporating a new technique for estimating wildfire risk to the built environment. The wildfire model relies on four input datasets:

- Riley et al. (2025) — An annual burn probability raster dataset at 270 m resolution, produced by the USFS. It includes burn probability data for present day (circa 2011) and future (circa 2047) climates based on landscape (e.g., vegetation type) conditions for the end of 2020. The data is only available for wildland areas, with all other land (e.g., built environment) considered “non-burnable” in their modeling framework.<Cite id='riley.2025' />
- Rasmussen et al. (2023) — An hourly meteorological raster dataset at 4 km resolution. It includes wind speeds, wind direction, temperature, and specific humidity — variables used to estimate how burn probability could spread from burnable wildlands to adjacent “non-burnable” land.<Cite id='rasmussen.2023' />
- Scott et al. (2024) — A conditional risk to potential structures (cRPS) raster dataset based on vegetation conditions for the end of 2022 at 30 m resolution. cRPS is a metric for potential damage of a wildfire to a generic structure based on factors such as fire intensity. The dataset was produced as part of the WRC project.<Cite id='scott.2024' />
- Overture Maps Foundation buildings dataset — A global vector dataset including the ~156 million buildings we used in the contiguous United States.<Cite id='overture.2025' />

We chose these datasets because we were committed to building a platform based entirely on publicly available data. These are the best available public datasets, and most exist thanks to support from the federal government.

As noted above, a climate risk model is the result of numerous methodological decisions. The art in making those decisions lies in determining what aspects of the risk we want to model, and what information we have available to drive the model. We chose to mostly rely on existing methods for calculating wildfire risk, building on the WRC project.<Cite id='scott.2024' hide /> Their dataset, developed in partnership by the USFS, the for-profit company [Pyrologix](https://pyrologix.com/) and the nonprofit organization [Headwaters Economics](https://headwaterseconomics.org/), quantifies wildfire risk using cRPS and burn probability data. To our knowledge, it is the only publicly available high-resolution, present-day fire product for CONUS.

We built on the existing WRC product in three ways. First, we expanded the dataset to include future risk estimates, relying on an updated burn probability dataset for present and future climates.<Cite id='riley.2025' hide />

Second, we extended the original burn probability data, which in Riley et al. (2025) was only available in wildlands, into developed areas using a new technique that accounts for the role of wind in spreading wildfire. Wind is a key driver of wildfire spread, carrying embers that present fire risk beyond wildlands, sometimes far ahead of the flame front. Hot, dry, and windy conditions (“fire weather”) can cause wildfires to expand faster than communities can manage them, and the prevalence of these conditions has led wildfire growth rates to more than double across the western U.S. between 2001 and 2020.<Cite id='balch.2024' /> We found the wind directions on these high fire weather days, and used them to “spread” burn probability from wildlands to developed areas that fell outside the domain of Riley et al. (2025).

The fine-scale directionality of winds during fire weather is understudied, and has not previously been integrated into any public CONUS-scale present or future wildfire risk product. The state of California gave credence to this theory in their use of directionality to model risk in CAL FIRE’s Fire Hazard Severity Zone map, which we use in an intercomparison with our dataset, described below.<Cite id='calfire.2024' />

To create a risk map, we then multiplied our updated burn probability data by the cRPS layer from the WRC project (without any adjustment). The result is a 30 meter gridded raster of risk to potential structures (RPS) for CONUS.

Finally, and as a third enhancement of the WRC dataset, we intersected the RPS raster with the Overture dataset to estimate RPS for 156 million buildings across the country. We display those values in the map tool, and make them searchable via address using a nearest-neighbor lookup.

<Figure>
  <WindComparison />

  <FigureCaption number={2}>
Comparing the risk from Scott et al. (2024) and our method for the area around Griffith Observatory in Los Angeles. The risk of loss (i.e., RPS) maps differ between the two datasets, with wind preferentially spreading risk southeast for our dataset while the Scott et al. approach spreads risk uniformly. Streets data from <Link href="https://www.openstreetmap.org/copyright">OpenStreetMap</Link>.
  </FigureCaption>
</Figure>

In addition to providing maps of wildfire risk, we developed a risk scoring system based on the distribution of risk estimates for the buildings in the dataset. The categorical, threshold-based scores range from zero (0% risk of loss) to ten (greater than 3% risk). As in the WRC project, the breakpoints between scores follow a pseudo-geometric pattern, such that the count of buildings in each score bin is smaller than the score below it. This system helps to distinguish differences in scores in both high-risk and low-risk areas. It is worth noting that scoring systems are entirely arbitrary and without standards. While it can be a helpful tool for interpretation, there is no scientific significance of any scoring system.

<Figure>
  <CountyMap />
  <FigureCaption number={3}>
    The count or percentage of buildings with a risk score of 8 or more (i.e.,
    RPS over 0.5%) in each county, representing the burden of at-risk building
    stock across the country. Counts are shown for both current and future
    climates. When shifting from the current to future, spikes both grow, and
    newly appear, across the western and central U.S., indicating an increasing
    burden with climate change. Counties with fewer than 1,000 buildings meeting
    the risk threshold are masked for clarity.
  </FigureCaption>
</Figure>

## Limitations of our wildfire model

All models have limitations, and understanding those constraints is key to interpreting and using climate risk data appropriately. Limitations determine what decisions a model can reasonably inform: they provide a path for making models better, and they affect who “wins” or “loses” when decisions are made based on a model’s results. That’s why it’s so important for climate risk model limitations to be communicated openly, not just revealed to paying clients behind closed doors.

There are four broad limitations that matter for understanding our wildfire risk data. First, our wildfire risk estimates do not account for any building-specific information beyond location. That means, for example, that if a structure you’re looking at has any fire-mitigation features, its true risk could be less than what you see in the platform. We did not incorporate information about structures into our model because, while analytics firms and insurance companies may own datasets on building-specific mitigation, none are publicly available for CONUS. This means that we express our estimates in terms of relative risks in value (i.e., %), and not actual value estimates (e.g., dollars).

Second, our model is focused on wildfire risk and we do not account for the significant ways in which urban fires differ from wildfires.<Cite id='calkin.2023' /> Specifically, we do not incorporate how fire spreads from building to building, a critical factor in urban conflagrations. This process is most important in dense communities with homes ~6-10 feet apart, where the ignition of a single home is almost guaranteed to ignite others.<Cite id='maranghides.2022' /> Capturing these processes, as well as how fire transitions from wildlands to the built environment, will require extensive investment in urban conflagration models, and the field remains nascent. <Cite id='thompson.2025b'/>

Third, as described in our [methods](/research/climate-risk-fire-methods), the cRPS data carries some edge effects that influence our final RPS values. You’ll see these most prominently in places with patchy vegetation, like [Pasadena, CA](https://carbonplan.org/research/climate-risk?lat=34.17351&lng=-118.12967&zoom=13.78), where sharp boundaries in the underlying, 30 meter gridded data may not reflect the real spatial structure of risk. More developed and extensible response functions could help minimize these effects (see the Limitations section of our [methods](/research/climate-risk-fire-methods)
for greater detail).

Finally, our model results come from a narrow set of modeling options, some of which are a few years out of date. They’re based on a single wildfire model, a single emissions scenario, climate data from just six GCMs, and vegetation data from the early 2020s. That means our results are highly sensitive to the underlying model decisions, and they don’t account for recent vegetation changes, such as those caused by recent wildfires, that could reduce fuels and wildfire risk. We incorporated a satellite layer to make current vegetation easier to visualize. With additional model simulations, we could better understand the uncertainty of the current modeling setup.

All wildfire risk models have limitations, and when a wildfire risk tool is also a revenue-generating product, there are strong incentives for keeping the details proprietary, inhibiting scientific development. In the case of Open Climate Risk, we invite inspection and critiques — it’s through this open discourse that wildfire models improve.

## How our estimates compare with others

There is no ground truth in the science of modeling risk estimation. So, our confidence comes from model and data intercomparison studies. We compared our data both to historical wildfire observations, and two available public wildfire products.

We first evaluated whether we are appropriately assigning areas of high and low risk by comparing our burn probability data to historical burn areas. Following Moran et al. (2025), we used the [Interagency Wildland Fire Perimeter History dataset](https://data-nifc.opendata.arcgis.com/datasets/nifc::interagencyfireperimeterhistory-all-years-view/about) from the National Interagency Fire Center to identify pixels which have been previously burned, then compared burn probability distributions in burned and unburned pixels.<Cite ids={['nifc.2025', 'moran.2025']} /> Across the entire CONUS domain, burned pixels had a higher mean and median burn probability than unburned pixels, indicating that our relative burn probabilities are generally consistent with historical burns. This same finding held when we repeated the analysis for only the non-wildland pixels outside of the Riley et al. (2025) domain, where we created original burn probabilities. In those pixels as well, burn probabilities were higher in places that historically burned, providing some validation for our wind-driven spread approach. Additional information about this benchmarking analysis can be found in our [technical documentation](https://docs.carbonplan.org/ocr/en/latest/methods/fire-risk/benchmarking.html/).

This first analysis evaluated only historically burned areas, but we provide data for the entire country. So to evaluate our wildfire risk estimates more holistically, we compared them to two other public fire risk datasets in order to understand where they align and diverge: (1) the Scott et al. (2024) dataset that our work builds on; and (2) the CAL FIRE Fire Hazard Severity Zones dataset.<Cite id='calfire.2024' hide /> Scott et al. (2024) follows methods very similar to ours, with the biggest exception being how risk is spread to developed lands. CAL FIRE’s methods differ substantially from ours, but do include a representation of wind-driven spread. This comparison assesses risk values at the level of individual buildings — which intentionally focuses the analysis on developed lands, where our methods differ most significantly from Scott et al. (2024).

We find generally good agreement with the Scott et al. (2024) dataset, with a few important differences. Across the entire country, the average census-tract level correlation at individual buildings was 0.79, with an absolute bias of 0.0002% RPS, indicating general agreement. Compared to Scott et al. (2024), our approach projects higher risk in a few notable regions — the east slopes of the Cascades in Washington and Oregon, the mountain foothills in southern California, and the Texas panhandle. These analyses have practical significance for users: areas with lower correlation are places where the choice of a risk dataset has a greater consequence.

<Figure>
 <Table
    columns={6}
    start={[
      [1, 1],
      [3, 4],
      [5, 6],
    ]}
    width={[
      [2, 3],
      [2, 2],
      [2, 2],
    ]} 
    data={[
      ['Comparison (CONUS-wide)', 'Correlation', 'Bias'],
      ['Scott et al. (2024) vs. CarbonPlan', 0.79, '0.0002%'],
    ]}
    index={false}
    sx={{'& tr:first-of-type td': {
      textTransform: 'uppercase',
      letterSpacing: 'smallcaps',
      fontFamily: 'heading',
      fontSize: [2, 2, 2, 3],
    }}}
  />

  <TableCaption number={2}>
Comparing our estimates of risk to potential structures (RPS) with those from Scott et al. (2024). While our approaches are similar, methodological differences in developed areas are reflected in the correlation, and a small bias at the building scale. 
  </TableCaption>
</Figure>

Comparing our data, as well as the data of Scott et al. (2024), to CAL FIRE’s dataset is different for two reasons. First, CAL FIRE estimates hazard severity, not risk, so we decided to compare them against our burn probability estimates, instead of our RPS values. <Sidenote>According to their documentation, CAL FIRE’s estimates of hazard severity incorporate aspects of intensity (i.e., flame length), which is captured by the cRPS component of our risk model. So, while burn probability seemed more analogous to their hazard severity estimates, we repeated our comparisons for our RPS values for thoroughness.</Sidenote> Second, the CAL FIRE estimates are categorical, not continuous values, complicating the use of a correlation statistic. We instead calculate the Kendall’s Tau (or 𝜏) for buildings within every census tract in the state.<Sidenote>Kendall’s Tau tests for concordance of data, asking: how similarly do two datasets rank areas on a scale from low to high? In other words, given values at two locations, do the two datasets agree which location is higher or lower? Kendall’s Tau ranges from -1 to 1, with 1 indicating perfect concordance, and -1 indicating total discordance. We used this same test in our [previous climate risk comparisons](https://carbonplan.org/research/climate-risk-comparison).</Sidenote> In making this comparison, we assume that the CAL FIRE hazard severity scale and our burn probability estimates are comparable, and that each scale would similarly arrange low and high values. We think this is a reasonable assumption given the similar attributes that each dataset relies upon (e.g., high-resolution vegetation maps, dynamic fire model) and ignores (e.g., building attributes, landscape management).

<Figure>
 <Table
    columns={6}
    start={[1, 5]}
    width={[4, 2]}
    data={[
      ['Comparison (California-wide)', 'Kendall’s Tau'],
      ['CAL FIRE vs. CarbonPlan', 0.19],
      ['CAL FIRE vs. Scott et al. (2024)', 0.15],
      ['Scott et al. (2024) vs. CarbonPlan', 0.21],
    ]}
    index={false}
    sx={{'& tr:first-of-type td': {
      textTransform: 'uppercase',
      letterSpacing: 'smallcaps',
      fontFamily: 'heading',
      fontSize: [2, 2, 2, 3],
    }}}
  />

  <TableCaption number={3}>
 As in Table 1, comparing our burn probability estimates with those from Scott et al. (2024) and CAL FIRE’s Fire Hazard Severity Zones. Because CAL FIRE’s estimates are categorical, we use Kendall’s Tau instead of correlation. Our estimates are more similar to both Scott et al. (2024) and CAL FIRE’s than either is to each other.
  </TableCaption>
</Figure>

Overall, our estimates aligned better with those of both Scott et al. (2024) and CAL FIRE (𝜏=~0.2), than either’s did to each other (𝜏=0.15). This stronger pairwise agreement with our dataset could be explained by the fact that our approach has similarities with both. For example, we share input datasets and genealogy with Scott et al. (2024), and yet also, like CAL FIRE, we incorporate local wind direction. In contrast, the approaches of Scott et al. (2024) and CAL FIRE are more distinct.

Our comparison to other data reveals that there can be large and important differences in estimated wildfire risk across products — especially across major ecological gradients like the eastern rainshadow of the Cascades. We welcome contributions to our intercomparison, as we expect that comparisons across more datasets will help us hone in on areas of particular disagreement, and develop the research questions to reconcile them.

## What’s next

There is reason for urgency in improving wildfire models, and democratizing access to high quality risk estimates. Fortunately, more data exists on wildfire. Unfortunately, most of it is owned by risk analytics providers that largely keep their data and models private, stymying public comparisons. Intercomparison is a primary way to evaluate a model's results — a model that has not been thoroughly evaluated should not be trusted as a basis for decision-making about current or future risk. Moreover, whether a model is developed by the government, a nonprofit, or a private company, it needs evaluation to improve. Scientific understanding of wildfire risk advances faster through intercomparison, and is slower, and more expensive, if each provider must develop numerous, distinct, black box models independently.

In many ways, wildfire modeling, particularly for the built environment, is still in an early stage of development. For our approach, as well as others’, more developed response functions and extensible urban conflagration models are both promising avenues of future research (see the Limitations section of our [methods](/research/climate-risk-fire-methods)
for greater detail). Overall, the field is challenged by its interdisciplinary nature — requiring expertise from fire science, ecology, geography, building science, urban planning, and emergency management.<Cite id='thompson.2025b' /> As climate risk models, both of wildfire and other hazards, grow more sophisticated, they'll also need detailed building-scale data, which raises important questions about who will collect that data, how it will be collected, and whether it will be public.

Currently, the trend in climate risk analytics is towards greater privatization of data and methods. Open Climate Risk is a decisive move in the opposite direction, towards both public access to risk data and robust model intercomparison. One potential outcome of Open Climate Risk is that someone with access to a proprietary wildfire risk model for CONUS will conduct a comparison with our data, and publish the results, including their own building-level risk estimates, openly. Since our codebase is totally open, these comparisons could jumpstart an iterative cycle of community-driven model development. We could incorporate risk estimates from different researchers or companies into the platform to facilitate a better understanding of uncertainty. We might also, depending on resources, expand Open Climate Risk to other hazards, and catalyze intercomparison and model improvement for those climate impacts as well.

If you use, or want to use, climate risk assessments in your community, we hope that Open Climate Risk will be helpful to you in multiple ways. First, you can readily access data for the buildings in your county, census tract, or census block. These estimates can also provide you with a point of comparison, and basis for asking questions about evaluation, if you purchase a dataset from a private company. Second, you can join detailed datasets about your community to Open Climate Risk’s dataset, to support tailored analyses. We are excited to hear about efforts like these, how our platform could improve, and how we might partner with local groups in developing customized datasets to answer specific questions.

If you are a researcher, policymaker, or advocate, we hope Open Climate Risk can be both a direct source of data and a demonstration of why open data matters. By building a radically open climate risk platform, we’ve shone light on the many small, yet consequential, decisions that are made along the way in developing building-level risk estimates. In the U.S., the quality of climate risk models is an increasingly grave and urgent matter. Whether at a national, state, or local level, risk estimates guide decisions on how to adapt to climate change, and where to allocate resources. These decisions are limited by the quality of the models available to the public. As we launch Open Climate Risk, we hope that its free, transparent data will help communities and individuals better understand, and plan for, the risks they face.

<Endnote label='Credits' divider>

Oriana Chegwidden wrote the explainer with support from Tracy Aquino Anderson and Tyler Kukla, and the following team (listed alphabetically): Chris Allen, Grayson Badgley, Anderson Banihirwe, Jeremy Freeman, Raphael Hagen, Becky Hurst, Shane Loeffler, Kata Martin, Claire Zarakas. Oriana, Grayson, Tyler, and Jeremy contributed to methods development and evaluation. Oriana, Anderson, and Raphael implemented the methods in software. Shane and Kata developed the map tool. Kata project managed our interdisciplinary team. Crystal Raymond of the Western Fire and Forest Resilience Collaborative provided helpful guidance. We’re also grateful to the more than twenty external reviewers who provided informal feedback on early versions of the platform.

Header image (modified) by [Erik Mclean](https://unsplash.com/photos/aerial-view-of-people-walking-on-street-during-daytime-cQFNLvMUWKA) on [Unsplash](https://unsplash.com/).

Please cite as O Chegwidden et al. (2026) “Making climate risk data open.” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/climate-risk-explainer](https://carbonplan.org/research/climate-risk-explainer)</span>

</Endnote>

<Endnote label='Terms'>

This work was supported in part by a grant from the Patrick J. McGovern Foundation. This work generally, and Figure 3 specifically, is based on analysis that uses information from the [Overture Maps buildings database](https://docs.overturemaps.org/guides/buildings/#14/32.58453/-117.05154/0/60), which is made available here under the [Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/).

Article text and Figure 1 are made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/). Figures 2 and 3 are made available under an [Open Database License](https://opendatacommons.org/licenses/odbl/1-0/).

</Endnote>
