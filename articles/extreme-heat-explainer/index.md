---
version: 1.0.0
title: Modeling extreme heat in a changing climate
authors:
  - Oriana Chegwidden
  - Jeremy Freeman
date: 09-05-2023
summary: We developed a new dataset that models the impacts of humid heat with fully public data and code, describing risks now and projecting them into the future.
quickLook: New data and open methods for modeling humid heat
card: extreme-heat-explainer
background: articles/021/sweat
icon: articles/021/sweat-small
links:
  - label: Code and data
    href: https://github.com/carbonplan/extreme-heat
  - label: 'Press coverage #1'
    href: https://www.washingtonpost.com/climate-environment/interactive/2023/extreme-heat-wet-bulb-globe-temperature/
  - label: 'Press coverage #2'
    href: https://www.washingtonpost.com/climate-environment/interactive/2023/pakistan-extreme-heat-health-impacts-death/
components:
  - name: Small
    src: ./components/small.js
  - name: HeatCalculator
    src: ./components/heat-calculator.js
  - name: BiasCorrection
    src: ./components/bias-correction.js
  - name: DaysOver
    src: ./components/days-over.js
  - name: CityMap
    src: ./components/city-map.js
color: yellow
---

If it wasn’t clear before the summer of 2023 that climate change is raising temperatures, it better be clear now. This past July broke the record for the [hottest month ever measured](https://www.nasa.gov/press-release/nasa-clocks-july-2023-as-hottest-month-on-record-ever-since-1880). And that was before a life-threatening heat dome [boiled large swaths of the US Midwest](https://www.nbcnews.com/science/science-news/extreme-heat-dome-midwest-temperatures-hot-weather-rcna101153) in August.

As extreme heat becomes commonplace, people need to know when and where it will occur. But modeling and predicting heat is complicated. Temperature on its own doesn’t tell the whole story. For example, when it’s hot you sweat, and the water evaporates to cool you down. But if there’s too much moisture in the air (high humidity), that cooling effect can stop working. The amounts of sunlight and wind also matter (the former heats you up, and the latter cools you down).<Sidenote>While wind generally has a cooling effect, at very high temperatures, wind can increase the heat transfer to a body, as opposed to away from it.</Sidenote> These parameters vary from minute to minute. And they vary geographically, often at fine spatial scales, especially within cities where human activity and infrastructure trap heat.

We want to help planners and the public navigate this complicated science by producing actionable data that will make it easier to understand the risks. As part of a [collaborative project with _The Washington Post_](https://www.washingtonpost.com/climate-environment/interactive/2023/extreme-heat-wet-bulb-globe-temperature/), we developed a new dataset modeling extreme heat under a changing climate. We built on a foundation of academic work, aiming to combine the best pieces of several existing methods and datasets to produce something new, albeit with several assumptions and approximations. And we’re making all of our data, methods, and code [fully public](https://github.com/carbonplan/extreme-heat).

In this explainer we describe how and why we developed the new dataset, and provide details on our methods, assumptions, and results.

## Choosing a metric

Many different metrics capture how we experience the combined effects of temperature, humidity, and other factors, and [they all say something slightly different](https://fivethirtyeight.com/features/heat-index-temperature/) about the risks. Among them, the wet-bulb globe temperature (WBGT) is probably the most widely used, especially in international contexts. Originally developed under the US military to monitor heat illness,<Cite id='yaglou.1957'/> WBGT combines four key variables — temperature, humidity, solar radiation,<Sidenote>Solar radiation captures the warming effects of sunlight. It typically ranges from 300&nbsp;W/m² (noon on a sunny day in the winter) to 600&nbsp;W/m² (noon on a cloudy day in the summer) to 900&nbsp;W/m² (noon on a sunny day in the summer).</Sidenote> and wind — into a single number. Safety thresholds for that number have been developed in the context of athletic training, strenuous work (particularly outdoors), and other activities.

While the units of WBGT are familiar (degrees Celsius or Fahrenheit), the scale may not be, with even moderately high values still posing substantial risk. The [Occupational Safety and Health Administration](https://www.osha.gov/heat-exposure/hazards) (OSHA), for example, says that strenuous work at a WBGT of 25&nbsp;ºC (77&nbsp;ºF) or higher poses a risk of heat-related illness. When WBGT is over 32&nbsp;ºC (89.6&nbsp;ºF) a short period of outdoor work, even by a healthy individual, risks illness or death.<Sidenote>In 2021 President Biden [instructed OSHA](https://www.whitehouse.gov/briefing-room/statements-releases/2021/09/20/fact-sheet-biden-administration-mobilizes-to-protect-workers-and-communities-from-extreme-heat) to draft an extreme heat standard, but it is [taking years to develop](https://www.washingtonpost.com/business/2023/07/14/heat-workers-osha-protections/).</Sidenote> The calculator below (Figure 1) can help build intuition for how different variables together determine WBGT. Use it to confirm, for example, that with low humidity (10%), light wind (1&nbsp;m/s), and moderate radiation (500&nbsp;W/m²), a WBGT of 32&nbsp;ºC (89.6&nbsp;ºF) requires a blazingly hot temperature of 45&nbsp;ºC (113&nbsp;ºF). Despite the unintuitive scale, WBGT accounts for more physical variables than alternatives like the [heat index](https://www.weather.gov/ama/heatindex) or [Humidex](https://www.ccohs.ca/oshanswers/phys_agents/humidex.html), and therefore provides a more detailed window into the risks of heat stress.<Sidenote> There is much discussion in the public health literature about the [relative importance](https://ehp.niehs.nih.gov/doi/10.1289/EHP11807) of humidity in determining health outcomes. We hope that our research can help support that work.</Sidenote>

<Figure>
  <HeatCalculator />
</Figure>

Measuring WBGT directly requires [specialized instrumentation](https://en.wikipedia.org/wiki/Wet-bulb_globe_temperature#/media/File:Bio-environmental_prepares_for_summer_110411-F-BQ904-001.jpg), but approximations to WBGT can be derived from meteorological or climate model data.<Cite id='liljegren.2008'/> The most complete, physically realistic calculations require data with high temporal resolution — ideally hourly or at least sub-daily — for several climate variables.<Cite ids={['lemke.2012','kong.2022']}/> Various approximations are possible, as we’ll discuss more below, and their efficacy has been systematically compared.<Cite id='kong.2022' hide/>

## Assumptions and approximations

We wanted to work at a high spatial resolution to capture fine-scale geographic details. ​​For that reason, we turned to a [downscaled](https://carbonplan.org/research/cmip6-downscaling-explainer) dataset for our historical and future climate simulations, specifically the [Global Daily Downscaled CMIP6 Projections from NASA Earth Exchange](https://www.nccs.nasa.gov/services/data-collections/land-based-products/nex-gddp-cmip6) (hereafter “NEX-GDDP”).<Cite ids={['thrasher.2021', 'thrasher.2022']}/> This dataset is based on the latest generation of climate models,<Cite id='eyring.2016'/> and covers land areas over the globe at ~25&nbsp;km resolution with projections for multiple emissions scenarios and ~30&nbsp;global climate models (GCMs).<Sidenote>Although we recently generated a collection of [downscaled CMIP6 datasets](https://carbonplan.org/research/cmip6-donwscaling) ourselves, we did not use those datasets here because they do not include some of the necessary variables required for modeling WBGT</Sidenote>

While it has a high spatial resolution, the NEX-GDDP climate projections are only available at a daily time step, and only include a subset of the variables required for estimating WBGT. Thus, we had to make three key simplifying assumptions.

First, as in some other literature,<Cite id='schwingshackl.2021'/> we started by calculating “WBGT in the shade” by assuming mean radiant temperature is equal to air temperature, neglecting any solar radiation components and using a fixed 0.5 m/s wind speed. This “in the shade” version underestimates the full impacts of extreme heat, especially for people who cannot access shade, but it greatly simplifies the calculations. To capture those impacts, we developed a post-hoc adjustment to approximate conditions in the sun (see below).

Second, we assumed that maximum daily WBGT occurs at the same time as maximum daily temperature, which is built into the Stull formulation that we used for our calculations.<Cite ids={['stull.2011', 'brimicombe.2022']}/> In past work this assumption was found to hold reasonably well when calculating a different humid heat metric, maximum daily heat index, at a variety of weather stations across the continental United States.<Cite id='dahl.2019'/>

Third, we used specific humidity, daily maximum temperature, and pressure to approximate minimum daily relative humidity, and assumed that it co-occurs with maximum temperature.<Cite hide={[true, false, false]} ids={['dahl.2019', 'raymond.2020', 'tuholske.2021']}/> This avoids what would otherwise be a substantial bias were we to combine mean daily relative humidity, as is available directly in the NEX-GDDP product, with daily maximum temperature.

## Incorporating heat island effects

Climate models on their own do not account for the [“urban heat island” effect](https://www.epa.gov/heatislands), whereby human activity and infrastructure in urban areas increases temperatures and traps heat for longer compared to outlying areas. To incorporate these effects and other fine-scale features not present in climate model data even after downscaling, we used a bias-correction procedure. This procedure resolves differences between the climate model data and data from a more detailed reference historical time series, and then makes sure that future projections also reflect that level of detail.

As a target for bias-correction, we used the UHE-Daily dataset.<Cite hide id='tuholske.2021'/> The UHE-Daily dataset includes city-level daily estimates of maximum WBGT in the shade, based on CHIRTS-Daily,<Cite id='funk.2019'/> a ~5 km gridded product which is a combination of reanalysis, station observations, and infrared satellite-based temperature.<Sidenote>Note that the UHE-Daily WBGT in the shade values were estimated via a formulation from Bernard and Iheanacho (2015) that calculates it from the heat index; while technically a different calculation, it essentially estimates the same quantity.</Sidenote> To perform the bias-correction, we used the quantile delta method<Cite id='cannon.2015'/> as implemented in the [xclim](https://xclim.readthedocs.io/en/stable/) package. Across all cities, the bias-correction was robust (see Extended Methods); Figure 2 shows data from four example cities with and without bias-correction.

<Figure>
  <BiasCorrection />
</Figure>

## Adjusting for the sun

As mentioned above, due to limitations in data availability and temporal resolution, we calculated an “in the shade” version of WBGT that does not account for solar radiation and wind. Some previous studies have approximated WBGT in the sun by adding a constant (e.g., 3&nbsp;ºC), but this adjustment is an oversimplification.<Cite hide id='kong.2022'/>

Although we could not do a complete calculation of WBGT in the sun, we were able to leverage existing comparisons to make a more fine-grained adjustment. Helpfully, Kong and Huber systematically compared the differences between WBGT in the sun and shade across a range of weather conditions.<Cite hide id='kong.2022'/> We used their results to develop a simple linear model that takes as input daily surface downwelling shortwave radiation (hereafter “solar radiation”) and wind speed and returns an adjustment. For example, given a solar radiation of 500&nbsp;W/m² and a wind speed of 2&nbsp;m/s, the model returns an adjustment of +2.8&nbsp;ºC (+5.0&nbsp;ºF).

We obtained daily estimates of solar radiation and wind from the same downscaled climate data used in the rest of our analysis, and we used them as inputs into the linear model to produce a time- and space-varying adjustment. In practice, the adjustment ranged from +1.1 to +4.5&nbsp;ºC (+2.0 to +8.1&nbsp;ºF), depending on the location and the day.<Sidenote>Range reported as 1st to 99th percentile across locations and days of the adjustments made within the month of the year with the highest WBGT in the shade for each location.</Sidenote>

<Figure>
  <DaysOver />
</Figure>

Our estimated values for WBGT in the sun are always higher, so for any given threshold temperature, more days a year will exceed that threshold when considering values in the sun compared to values in the shade. Using Figure 3, you can build intuition for the difference by exploring how changing the threshold influences the exceedances for both the shade and sun. It's particularly concerning when WBGT exceeds a dangerously high threshold even in the shade, because finding shade is often the first line of defense in escaping dangerous heat.

## Comparison to other results

To evaluate and validate our analytical choices, we compared our results to two other datasets that also estimated WBGT globally during a historical period.

First we compared our estimates to those reported by Kong and Huber,<Cite hide id='kong.2022'/> which used more detailed WBGT calculations based on hourly data, though that data was too coarse to account for heat island effects. Our results were broadly similar in both spatial pattern and magnitude. Quantitatively, across all cities in our dataset, our estimates were on average +0.80&nbsp;ºC higher (50% confidence interval: +0.07 to +1.62). The differences likely reflect in part the assumptions and approximations we made in calculating WBGT compared to a more complete, physically realistic implementation. They may also reflect the fact that we bias-corrected to UHE-Daily, whereas the Kong and Huber estimates were based on ERA5, which has been shown to underestimate temperature compared to the data underlying UHE-Daily.<Cite ids={['funk.2019', 'verdin.2020']} hide={[true, false]}/>

We also compared our results to those from the [Climate Change Heat Impact and Prevention (CHIP)](http://climatechip.org/your-area-climate-data) project, which estimates WBGT using [CRU observational data](https://crudata.uea.ac.uk/cru/data/hrg/index.htm#current), and includes estimates both in the shade and in the sun. Across 18 example cities, our estimates in the shade were on average +0.21&nbsp;ºC higher (50% confidence interval: -0.45 to +0.49) and our estimates in the sun were higher by +0.56&nbsp;ºC (50% confidence interval: -0.18 to +1.25). Here as well, the differences could be due both to our different assumptions as well as the use of UHE-Daily as a reference dataset.

It’s reassuring that these results are all generally similar within ±1&nbsp;ºC, despite substantial differences in methods and approximations. In many locations, we think it’s likely that our estimates are slightly higher because they appropriately reflect the role of urban heat islands as captured by the CHIRTS-Daily and UHE-Daily products,<Cite hide id='tuholske.2021'/> but further work will be required to tease these factors apart.

## What we’re releasing

We applied the above analysis to projections from 26 global climate models (GCMs) for both a historical period (1985-2014) and two future periods (2020-2039 and 2040-2059) under one moderate emissions scenario (SSP2-4.5).<Sidenote>By only using one future scenario, our analysis does not account for any activities that might either more effectively mitigate, or further aggravate, human-caused climate change. Also, our analysis maintains historical urban heat island effects into the future, and so does not account for any adaptive measures that cities or neighborhoods might implement to reduce heat island effects, such as improving tree cover.</Sidenote> It would have been computationally prohibitive to run the analysis on a full 5&nbsp;km raster grid, so we instead extracted time series of all variables from within ~15,300&nbsp;urban centers<Cite id='florczyk.2019'/> (primarily derived from the [Global Human Settlement](https://ghsl.jrc.ec.europa.eu/datasets.php) project) and also from within ~24,000&nbsp;climatically-similar geographic regions covering the globe from the Climate Impact Lab.<Cite id='rode.2021'/>

The map in Figure 4 shows the urban centers. One immediately clear, and worrisome, trend is that historically only South Asia and the Middle East experienced many days exceeding 32&nbsp;ºC (89.6&nbsp;ºF) in the sun, but by 2050 that level of heat will become even more frequent there, and increasingly commonplace elsewhere.

<Figure>
  <CityMap />
</Figure>

We’ve made all the input and output datasets public, alongside documented open source code that implements the analysis. For convenience, we’ve made the results available in multiple formats with varying levels of summarization, including: full time series of WBGT in the shade and in the sun over historical and future periods for each GCM; medians across climate models; and summary tables showing, for each city, the number of days likely to exceed a range of different WBGT thresholds.<Sidenote>Our use of medians across an ensemble of climate models makes our results more robust to the
“[hot model problem](https://www.nature.com/articles/d41586-022-01192-2)”</Sidenote> See our [GitHub](https://github.com/carbonplan/extreme-heat) repository for links to all datasets and documented code.

## Looking forward

There’s an active community working on this problem — both on how to estimate heat from climate data, and how to understand and plan for the impacts extreme heat will have on public health and societal infrastructure. This new dataset is just one contribution to that broad effort.

The ideal heat dataset would have high resolution in both space and time, capturing fine-scale geographic detail and heat island effects, and also fully accounting for all variables on a sub-daily time scale. As discussed above, we made advances on spatial resolution, but as a trade off, we relied on daily data and had to make several assumptions and approximations. New downscaled datasets with more input variables, combined with further computational efficiency and scale, could help avoid some of these approximations, and improve resolution on both dimensions. We would be excited to pursue future work in these directions, ideally in collaboration with others.

Even estimating WBGT at high resolution doesn’t tell the full story about the risks of extreme heat to human health. Factors like access to cooling, ability to shift outdoor work hours to avoid heat, cardiac health, age, and clothing all affect the experience of heat — and all vary by socioeconomic status — so the same WBGT value will be experienced differently by different people. Fully characterizing these risks remains an active area of work at the intersection of climate science and public health.

We hope this explainer revealed some of the complexity in modeling extreme heat, and how [choices around datasets and analyses](https://carbonplan.org/blog/climate-risk-metadata) matter. As this kind of data increasingly becomes the basis for decisions — which could impact millions of people’s lives and trillions of dollars — we need full transparency to enable public accountability. Alongside the dataset itself, we hope this work provides an example for how to model climate impacts in the open.

<Endnote label='Acknowledgements'>

Thanks to Drew Shindell, Matthew Huber, Luke Parsons, Joe Hamman, Zeke Hausfather, Robert Rohde, Jared Rennie, Shruti Nath, Tord Kjellstrom, Shouro Dasgupta, and Benjamin Zaitchik for providing informal review and feedback on the methods used to approximate wet-bulb globe temperatures. Thanks to Joshua Batson for figure suggestions. Thanks to Cascade Tuholske and Pete Peterson for providing access to the gridded fields from Tuholske et al. (2021). Thanks to Qinqin Kong and Matthew Huber for providing access to data from Kong and Huber (2022) for validation. Climate scenarios used were from the NEX-GDDP-CMIP6 dataset, prepared by the Climate Analytics Group and NASA Ames Research Center using the NASA Earth Exchange and distributed by the NASA Center for Climate Simulation (NCCS).

</Endnote>

<Endnote label='Credits'>

Oriana led the research and implemented the analysis, which was also shaped by _Washington Post_ climate journalist Niko Kommenda and colleagues. Oriana and Jeremy together developed the methods, reviewed and analyzed the data, designed the figures, and wrote this article.

Please cite this web article as:

O Chegwidden & J Freeman (2023) “Modeling extreme heat in a changing climate” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/modeling-extreme-heat](https://carbonplan.org/research/extreme-heat-explainer)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan received [no specific financial support](https://carbonplan.org/funding) for this work.

Article text and figures made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

</Endnote>

## Extended methods

<Small>Here we provide further details on some of our methods.</Small>

<Small>_Bias-correction implementation._ We constructed a unique bias-correction
  model for every region of analysis and GCM, training each model on the
  1985-2014 period (“historical”) and then applying each model to the full
  1985-2059 time series. Bias-correction forces modeled projections to inherit
  the distribution of the UHE-Daily dataset, including both desirable features
  (e.g., that it captures urban heat island effects and fine-scale geographic
  features) and any limitations (e.g., that it also estimates “WBGT in the
  shade” at a daily time resolution, and that its derivation relies on dew point
  and surface pressure estimates from different reanalysis products). We used a
  rolling monthly QDM approach to capture the variance in biases and climate
  sensitivities throughout the year, and avoid artifacts due to month
  boundaries. We used 100 quantiles in developing each bias-correction model to
  better account for changes at the extremes.</Small>

<Small>_Bias-correction validation._ To quantify the stability of the
  bias-correction, for a sample GCM (ACCESS-CM2) we compared the change in
  annual maximum WBGT — future (2020-2039) minus historical (1984-2015) —
  between the raw WBGT estimates and the bias-corrected versions. In other
  words, we compared the climate change signal before and after bias-correction.
  Bias-correction has the potential to significantly disrupt or distort these
  change signals, given its flexibility in fitting a different model for each
  city and potential for extrapolation near the tails of the distribution, but
  change signals were stable for the 80th, 90th, and 95th percentiles, and for
  the annual maximum (coefficients of determination when using the raw change to
  predict the bias-corrected change were 0.87, 0.87, 0.84, 0.45). This stability
  further indicates that our results are robust to artifacts potentially arising
  from the application of bias-correction to quantities derived from the
  NEX-GDDP climate dataset which has also been bias-corrected.</Small>

<Small>_Sun adjustment model._ We leveraged Figure S12 from Kong and Huber (2022),
  which reports the difference between shade and sun WBGT across a range of
  weather conditions. From this figure, we excluded the leftmost (0&nbsp;W/m²)
  and top (0.13&nbsp;m/s) bins, and within each of the four&nbsp;remaining bins
  of solar radiation and wind speed we selected the contour corresponding to an
  air temperature of 35&nbsp;ºC (95&nbsp;ºF) and 50% relative humidity. We then
  used those 16&nbsp;points to develop a linear model that produces an
  adjustment for any given solar radiation and wind speed value. For example,
  given a solar radiation of 500&nbsp;W/m² and a wind speed of 2&nbsp;m/s, the
  model returns an adjustment of +2.5&nbsp;ºC (+4.5&nbsp;ºF). Input values
  beyond the ranges of 300-900&nbsp;W/m² or 0.5-3&nbsp;m/s were clipped to the
  minimum and maximum adjustment.</Small>

<Small>_Sun adjustment application._ We accessed daily estimates of solar radiation
  and wind from the same downscaled GCM data used in the rest of our analysis.
  For wind speed, we used the daily average wind speed to represent the wind
  speed at the time of maximum WBGT. For solar radiation, we first disaggregated
  the average daily solar radiation data into hourly data using the
  [metsim](https://metsim.readthedocs.io/en/develop/) package to identify a
  daily maximum. Note that the disaggregation process assumes that whatever
  cloud cover has reduced the solar radiation on each day is constant throughout
  the day; in other words, we do not capture any sub-daily variation in cloud
  cover. To account for the fact that temperatures typically peak a few hours
  after midday's maximum sunlight,
  <Cite id='parsons.2021' /> we scaled the maximum solar radiation by 75% to get
  a daily value. Finally, we used these daily values of solar radiation and wind
  speed as inputs into the linear model described above to produce a time- and space-varying
  adjustment for each day and location. We added that adjustment to the WBGT in the
  shade to yield a WBGT in the sun. Note that this sun adjustment uses coarser (~25&nbsp;km)
  data compared to the finer-scale (~5&nbsp;km) UHE-Daily data that we used for bias-correction.
  While solar radiation values would likely be similar at both scales, we acknowledge
  that finer-scale wind data could capture variations in roughness that are not captured
  as well at ~25&nbsp;km.</Small>

<Small>_Pressure calculations._ As in Raymond et al (2020) we assumed standard
  pressure, though we adjusted it according to elevation
  <Cite id='tozer.2019' /> and mean daily temperature following Chavaillaz et al
  (2019).</Small>

<Small>_Calendars._ Many GCMs do not use the standard Gregorian calendar (e.g., leap
  years) for their modeling. Instead, some follow a 365-day calendar, ignoring
  leap years, and some use a 360 day calendar, which is reflected in the
  NEX-GDDP-CMIP6 downscaled projections. For all of our analysis, we converted
  projections from any non-standard calendar to the Gregorian calendar using the
  `convert_calendar` method in `xarray`, and linearly interpolated to “gap fill”
  the additional days. This gap-filling was performed after spatial aggregation.</Small>

<Small>_Regional analysis._ While our primary analysis focused on cities, we also
  applied the same analysis to data averaged within
  ~24,000&nbsp;climatically-similar geographic regions covering the globe.
  Within these regions, we weighted the averaging by 2030&nbsp;population
  estimates
  <Cite id='schiavina.2023' /> to emphasize inhabited areas, and we excluded urban
  centers so we could separately estimate impacts on urban and non-urban populations.
  For computational feasibility, we performed spatial averaging on the input data
  before all other calculations (including bias-correction) rather than after; especially
  in larger regions with dispersed populations this order of operations may cause
  statistical biases, but those biases are likely to be small given that the regions
  were defined to be climatically uniform.</Small>

<Small>_Validation implementation_. For comparisons with Kong and Huber (2022), we
  used one sample GCM (CanESM5) for the historical period, and averaged our data
  to exactly match their results, which reported the average daily maximum WBGT
  in the sun within the hottest month for every location. Note that the time
  ranges between the two analyses differ slightly: our historical data span
  1984-2014 whereas the data from Kong and Huber (2022) span 1990-2019. For
  comparisons with the [Climate Change Heat Impact and Prevention
  (CHIP)](http://climatechip.org/your-area-climate-data) website, the full
  dataset was not available, so we manually extracted monthly average time
  series of daily maximum WBGT in the shade and in the sun for 18 example
  cities, and compared them to our results, again using one sample GCM
  (CanESM5). Here too the time ranges differ slightly; our historical data span
  1984-2014, whereas the data from CHIP span 1980-2020.</Small>
