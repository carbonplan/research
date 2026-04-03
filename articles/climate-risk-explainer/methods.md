---
date: 02-10-2026
title: Open climate risk wildfire methods
quickLook: The scientific methods underpinning the Open Climate Risk dataset and map tool.
back: /research/climate-risk-explainer
slug: climate-risk-fire-methods
card: climate-risk-fire-methods
components:
  - name: Table
    src: '@carbonplan/components'
  - name: Figure
    src: '@carbonplan/components'
  - name: FigureCaption
    src: '@carbonplan/components'
  - name: GapFilling
    src: ./components/methods/gap-filling.js
  - name: Wind
    src: ./components/methods/wind.js
  - name: Spreading
    src: ./components/methods/spreading.js
  - name: Blurring
    src: ./components/methods/blurring.js
---

# Methods

Here we describe the methods we used to produce Open Climate Risk’s 30-meter spatial resolution gridded dataset of fire risk for the conterminous United States (CONUS) under both present-day and future climate conditions. We also explain how we sample that dataset to estimate risk for approximately 156 million buildings across CONUS. Both the raster and the building-level risks can be explored in an accompanying [interactive map tool](/research/climate-risk). All the datasets are downloadable, with access information detailed in our [technical documentation](https://docs.carbonplan.org/ocr). Our approach both relies on and extends a set of methods and data previously released by the Wildfire Risk to Communities Project, a collaboration involving the United States Forest Service (USFS), [Pyrologix](https://pyrologix.com/), and [Headwaters Economics](https://headwaterseconomics.org/).

## Input datasets

Our approach relies on four input datasets:

- Riley et al. (2025) — An annual burn probability raster dataset at 270 m resolution, produced by the USFS. It includes burn probability data for present day (circa 2011) and future (circa 2047) climates based on landscape (e.g., vegetation type) conditions for the end of 2020. The data is only available for wildland areas, with all other land (e.g., built environment) considered “non-burnable” in their modeling framework.<Cite id='riley.2025' />
- Rasmussen et al. (2023) — An hourly meteorological raster dataset at 4 km resolution. It includes wind speeds, wind direction, temperature, and specific humidity — variables used to estimate how burn probability could spread from burnable wildlands to adjacent “non-burnable” land.<Cite id='rasmussen.2023' />
- Scott et al. (2024) — A conditional risk to potential structures (cRPS) raster dataset based on vegetation conditions for the end of 2022 at 30 m resolution. cRPS is a metric for potential damage of a wildfire to a generic structure based on factors such as fire intensity. The dataset was produced as part of the WRC project.<Cite id='scott.2024' />
- Overture Maps Foundation buildings dataset — A global vector dataset including the ~156 million buildings we used in the contiguous United States.<Cite id='overture.2025' />

## Validation datasets

- [Scott et al. (2024)](https://doi.org/10.2737/RDS-2020-0016-2)<Cite id='scott.2024' hide /> — A 30 m raster of risk to potential structures (RPS) for present day (end of 2022). The data is available for all of CONUS.
- [Cal Fire _Fire Hazard Severity Zones (2024)_](https://osfm.fire.ca.gov/what-we-do/community-wildfire-preparedness-and-mitigation/fire-hazard-severity-zones)<Cite id='calfire.2024' /> — A vector of hazard zones with three levels of hazard severity (moderate, high, very high), with all other areas considered without hazard. The data is available for the state of California.

## Summary of approach for spreading burn probabilities into non-wildland areas

Existing estimates of burn probability produced by Riley et al. (2025) only include estimates for “wildland areas.”<Cite id='riley.2025' hide /> Other land types — such as urban and suburban areas — are treated as “non-burnable” in their approach. Most developed land in the wildland urban interface is outside of their domain, so it is not possible to quantify fire risk to individual homes using their data without further processing.

Scott et. al (2024) addressed this problem by spreading (referred to in their documentation as “oozing”) burn probabilities from an earlier version of the Riley dataset.<Cite id='scott.2024' hide /> That approach used a static spreading function. The California Department of Forestry and Fire Protection (CAL FIRE), adopted a [related approach](https://osfm.fire.ca.gov/what-we-do/community-wildfire-preparedness-and-mitigation/fire-hazard-severity-zones) when developing its Fire Hazard Severity Zones by taking into account historical wind patterns and accounting for the production and accumulation of embers entering non-wildland areas.<Cite id='calfire.2024' hide />

Our approach, which we applied to all of CONUS, accounts for historical wind conditions, but does not explicitly account for ember production or transport. As such, it can be viewed mostly as a modification of Scott et al. (2024), while stopping short of the more process-based approach developed by CAL FIRE. Where Scott et al. (2024) adopted a fixed radius spreading function, we modified the shape of our spreading function based on the prevalent wind direction under fire-weather conditions from the historical period. This allowed us to transfer burn probability estimates from Riley et al. (2025), which exist only for wildland regions, to non-wildland environments.

## Detailed approach to spreading burn probabilities

Our approach for spreading burn probabilities into non-wildland areas has four steps: initial gap filling; calculating the distribution of wind directions under severe fire-weather conditions; creating a wind-informed extrapolation function; and finally, applying a localized smoothing to soften spatial artifacts.

### 01 — Initial gap filling

<Figure>
  <GapFilling />
  <FigureCaption number={1}>
    The first step in processing BP involves filling in gaps where the original
    Riley et al. (2025) study did not provide estimates. Data here shown for a
    sample region around Marshall, Colorado, the site of a devastating fire in
    2021.
  </FigureCaption>
</Figure>

We began by filling gaps in the underlying Riley et al. (2025) burn probability dataset that i) are one pixel in size, and ii) are surrounded on four sides by valid burn probability estimates. This removed checkerboard features from the underlying dataset, while preserving distinct wildland/non-wildland edges.

### 02 — Calculating wind distributions for each pixel under fire-weather conditions

<Figure>
  <Wind />
  <FigureCaption number={2}>
    The 270 m burn probability from Riley et al. (2025) is disaggregated to a 30
    m resolution. Then, for each pixel we determine the distribution of wind
    directions under fire-weather conditions, as determined from Rasmussen et
    al. (2023).
    <Cite id='rasmussen.2023' hide />
  </FigureCaption>
</Figure>

We used meteorological reanalysis data to calculate the distribution of prevailing winds under fire-weather conditions.<Cite id='rasmussen.2023' hide /> First, we calculated the hourly Fosberg Fire Weather Index (FFWI) for the period of 1979 to 2022, using temperature, relative humidity, and wind speed components _u_ and _v_.<Cite id='fosberg.1978' /> Then, for every 4 km pixel, we calculated the 99<sup>th</sup> percentile of FFWI and extracted the wind direction for all hours exceeding that threshold (hereinafter referred to as “fire-weather wind direction”). We then binned the fire-weather wind directions into the eight cardinal and ordinal directions and created a distribution of fire-weather wind directions for each pixel (i.e., the total weight across all eight wind directions sums to one).

### 03 — Spreading burn probability according to wind direction

<Figure>
  <Spreading />
  <FigureCaption number={3}>
    We spread the burn probability by passing it three times iteratively through
    a filter informed by the fire-weather wind directions, resulting in steps
    01, 02, and 03 above. Finally, we substituted back in any valid estimates
    from Riley et al. (2025) producing step 04 above.
  </FigureCaption>
</Figure>

For every 30 m pixel, we began by creating eight oval-shaped blurring filters, one for each cardinal and ordinal direction. The oval shape mimics the elliptical wavelets of Richards (1990).<Cite id='richards.1990' /> The oval is positioned such that the pixel in question is located ~510 m along the major axis. The vertex of the oval closest to the given pixel extends beyond the pixel, in the direction opposite of the prevailing wind.

After laying out the eight ovals circling each pixel, we calculated the weighted mean burn probability of all 30 m pixels from Riley et al. (2025) that fall under our wind-informed ovals. The contribution of each oval filter is weighted by the relative frequency of that wind direction within the fire-weather wind direction data. We repeated this process for each pixel three times, resulting in a spread of non-zero burn probability into non-burnable areas up to a maximum of ~1.5 km. We only used this approach to adjust the burn probability of pixels categorized as having a burn probability of zero — namely, non-burnable lands — in our gap-filled version of the Riley et al. (2025) dataset. This means we did not adjust the burn probabilities calculated by Riley et al. (2025).

### 04 — Localized blurring

<Figure>
  <Blurring />
  <FigureCaption number={4}>
    We applied a localized blurring using a Gaussian filter to resolve sharp
    edge effects.
  </FigureCaption>
</Figure>

As a final step, we applied a small (~300 m radius) Gaussian kernel to locally blur the burn probability raster. This resolved sharp spatial artifacts, especially in areas where the prevailing winds blow from developed areas toward high burn probability wildland areas, which tended to create sharp edges upon replacement with the original wildland burn probability values from Riley et al. (2025).

## Incorporating consequence of fire

As in the WRC project, the cRPS variable represents the conditional net value change for a hypothetical (i.e., generic) structure at a given pixel if it were to burn — or the consequence of fire to the structure. The metric integrates both modeled fire intensities and the impact on a hypothetical structure given a pixel’s local vegetation. It does not account for any building-specific information, like construction materials, which could affect the building’s response to burning. We use the cRPS dataset directly from the public USFS archive without modification and so inherit both its strengths and its weaknesses. We describe the origin of the dataset here to support transparency, and offer context for the What’s next section of the [explainer](/research/climate-risk-explainer).

As outlined in Scott et al. (2024), the WRC project includes wildfire intensity data for every 30 m modeled burnable pixel across CONUS. The first step in estimating consequence is to extract, for each 30 m pixel in the modeled domain, the distribution of six modeled flame-length probabilities (FLP). Each FLP denotes the fraction of the time during a fire when that pixel’s flames were of a certain length class, and the six FLPs sum to one. For example, FLP1 denotes the probability of flames under two feet, while FLP6 denotes the probability of flames exceeding 12 feet in length.

Scott et al. (2024) then calculate the cRPS based on the proportion of fires in each FLP multiplied by the relative change in value (in this case exclusively loss) that a fire of each flame-length would impart. For a given flame-length class, the response by a building depends on the vegetation — trees cause the highest loss, then shrubs, then grasses. Loss values span 10% (for grasses in FLP1) to 100% (for trees in FLP6). For example, if only the highest flame lengths occur in a given pixel (that is, its FLP6 value is 1.0 and all other FLP’s are 0), and the pixel’s vegetation class is tree, then the cRPS value is 100% loss. In the more common case where multiple FLPs are greater than zero at a given pixel, cRPS is the expected loss of each FLP class for the pixel’s vegetation, weighted by the individual FLP values. See Scott et al. (2024) for the complete response function of vegetation- and flame-length-specific losses.

Because the six FLPs sum to 1.0, and the responses are bounded from 10% to 100%, cRPS in vegetated layers is also bounded from 10% to 100%. In this framework, response functions only exist for vegetated pixels, and any developed pixels are essentially assigned zero loss, resulting in a 0 cRPS value. As a final step, the WRC project spread the cRPS layer into developed areas like they did for BP, but without decay.

## Calculating risk

In alignment with the Wildfire Risk to Communities project (Scott et al. 2024), we interpret wildfire risk in a pixel as the combination of (1) the likelihood of that pixel burning, and (2) the consequence to a potential structure if that pixel were to burn.<Cite id='brown.2024' /> This conceptual model is similar to equations outlined in Finney (2005)<Cite id='finney.2005' /> and Scott et al. (2013),<Cite id='scott.2013' /> as well as those outlined by other standards bodies like the ISO<Cite id='iso.2018' /> and NIST.<Cite id='jtfti.2012' />

As in Scott et al. (2024), we combine information about both the burn probability (BP) and the consequence of a fire in a given pixel (cRPS) as:

> RPS = BP \* cRPS

In this equation RPS is the expected annual risk of loss to potential structures in a given pixel, BP is the annual probability of the pixel burning, and cRPS is the conditional risk to potential structures if that pixel were to burn. BP is a unitless quantity with a theoretical domain from 0 to 1. In practice, however, BP spans a much smaller range. Scott et al. (2013) notes that BP is typically small, and Riley et al. (2025) reports 0.26 as the maximum BP value across CONUS. cRPS is a percentage, ranging from 0% to 100%. Accordingly, RPS is a percentage ranging from 0% to 100%, though its effective range is heavily constrained by the range of BP, and in our case is effectively capped at 26%.

Interpreting RPS can be confusing. It represents the expected relative risk of loss in a given year, accounting both for the frequency and magnitude of a loss event. As an example, a very unlikely event can be risky if it would cause significant damage. Conversely, a relatively benign event can still be risky if it is very likely to occur.

Risk is often defined in absolute terms of actual value (e.g., dollars), as opposed to relative expected value change. For example, the field of quantitative risk assessment uses the concept of annualized loss expectancy (ALE). Representing the expected loss (in actual value, e.g., dollars) in a given year, the ALE requires knowing actual values of exposed assets. Unfortunately, we are unaware of any comprehensive and open dataset that includes the value of individual buildings. Lacking that data, we report RPS as relative (percentage) losses of a given asset’s value.

We calculated risk for every pixel in CONUS, regardless of the presence of a structure. This extended coverage supports, for example, analysis in zones of proposed development, or in areas which have been developed since the input datasets were finalized, with the caveat that extensive development could invalidate the underlying cRPS and BP data.

## Risk to score mapping

To aid interpretability, we converted continuous values of RPS into a categorical risk score on a scale from 0 to 10. Any RPS value of 0 was cast to a score of 0 and any non-zero risk score has a non-zero RPS value in the dataset. We crafted the score bins by calculating percentiles of RPS values for ~156 million buildings in the Overture Maps Foundation building dataset (see below). The breakpoints between bins grow increasingly clustered at higher RPS values, such that there are ~10,000,000 buildings with score of 2, but only ~2,500 buildings with score of 10. This pseudo-geometric design allows us to distinguish among risk values across the highly heterogeneous domain where risk values span multiple orders of magnitude. The approach mimics that of the WRC project, though they used five categories of risk and calculated their percentiles across all lands, as opposed to buildings.

## Building-level risk

We intersected the 30 m RPS raster with the footprints of individual buildings contained within the [Overture Maps Foundation buildings dataset](https://docs.overturemaps.org/guides/buildings/#14/32.58453/-117.05154/0/60). We assigned each building a risk value based on the nearest pixel within our RPS dataset to the centroid of each building. We note that previous work has shown that small decisions about spatial joins with risk maps can have an outsized influence on the final result.<Cite id='paisley.2025' />

## Limitations and paths forward

We describe several shortcomings and related areas of future work both below and in the Limitations section of our [explainer](/research/climate-risk-explainer). First, the lack of building-to-building fire spread in our approach may lead to underestimates of risk, especially in dense urban areas. There are a handful of existing models of how fire spreads from home to home. A recently-developed graph-based model is, to our knowledge, the only existing example that includes building-to-building spread in their representation of urban conflagrations.<Cite id='chulahwat.2024' /> However, it requires a rich and detailed dataset of building attributes, and thus has only been applied over a handful of communities where that data was available. In the absence of a CONUS-wide dataset of building attributes, we were unable to implement a building-to-building spread model. Further, to our knowledge, this model has only been applied in the context of recreating damage from historical events, and thus does not yet account for how risk might change in the future. As far as we know, the scientific community has yet to develop a statistical risk model within the urban environment and apply it for projections CONUS-wide. This area of research is ripe for interdisciplinary innovation by climate and fire scientists alike.

The edge effects in the cRPS data are also a path for future inquiry. They emerge because the cRPS data comes from a model that assigns some parts of urban and wildland areas as “non-burnable.” Roads in wildland regions, or isolated tree patches in cities, create sharp boundaries with non-burnable land that, when represented on a 30 m grid, may not reflect real boundaries in risk. As we mention in the explainer, homes in [Pasadena, CA](https://carbonplan.org/research/climate-risk/?lat=34.17351&lng=-118.12967&zoom=13.78) are intermittently labeled with risk, but the patchiness might go away if our model accounted for fire spread between homes. The WRC project accounts for some of these sharp boundaries by spreading the cRPS data from wildlands into communities. But their approach spreads cRPS without decay, which sometimes results in sharp boundaries at the terminus of the oozing, as it does in [Burbank, CA](https://carbonplan.org/research/climate-risk/?lat=34.18169&lng=-118.28200&zoom=12.00). Both types of edge effects — from non-burnable boundaries and oozing without decay — are ingested into our RPS layer, which can result in neighboring buildings being assigned very different risk scores.

Further research could aim to develop a response function describing the consequence of fire for non-vegetated areas, like homes and roads. These functions could also reflect varying degrees of home hardening, which has been shown to promote home survivability. This would essentially fill in the areas currently classified as “unburnable.” Developing the response functions would likely require contributions from building sciences. Applying them would require high resolution, nationwide datasets about the built environment.

## Displaying data in our map tool

Within our map tool, we made buildings searchable by address using [HERE Maps](https://www.here.com/). First, we get the latitude and longitude for a user-provided address (“geocoding”). We then return the risk information of whatever building within the Overture buildings dataset is nearest to those coordinates.

The building-level data is also visible in the map tool alongside the underlying 30 m RPS raster. The result is an interface that enables searching for risk across CONUS at the address level. The inclusion of both raster and building datasets side-by-side supports the interrogation of building risk assignments, as well as risk information in undeveloped areas where developments might be proposed. The map tool also displays summary statistics for several types of geographic areas: census block, census tract, and county, which helps contextualize an individual building’s risk score. Finally, in addition to the one-year RPS value, the map tool displays the risk, assuming at least one burn over 15- and 30-year time horizons.

We provide building-level RPS estimates, including spatial subsets of the data, for [download](https://docs.carbonplan.org/ocr/en/latest/access-data.html) in CSV, GeoParquet, and GeoPackage formats. Downloads of spatially-aggregated data (e.g., data for all census tracts across CONUS) include summary statistics (e.g., median score across buildings), as well as the count of buildings within each risk score in each summary region.
