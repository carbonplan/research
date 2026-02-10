---
date: 02-10-2026
title: Open climate risk FAQ
color: red
quickLook: FAQ for the Open Climate Risk platform
back: /research/climate-risk-explainer
slug: climate-risk-faq
card: climate-risk-explainer
components:
  - name: FactorsTable
    src: ./components/factors-table.js
---

# FAQ

<Box
  sx={{
    color: 'secondary',
    '& p': { fontSize: [2, 2, 2, 3] },
    '& a': { color: 'secondary', '&:hover': { color: 'primary' } },
  }}
>
  Here we offer responses to frequently asked technical questions about the
  [Open Climate Risk](/research/climate-risk) map tool. Many of these questions
  are answered in the explainer article “[Making climate risk data
  open](/research/climate-risk-explainer)” or its accompanying [methods
  page](/research/climate-risk-fire-methods) and [technical
  documentation](https://docs.carbonplan.org/ocr). We synthesized key responses
  here to further support accessibility.
</Box>

## 01 — What do the risk scores actually represent?

The risk scores report the expected risk of loss for a hypothetical building in a given year. The risk scores are categorical, from 0-10, with each score representing a range of risk values. For example, if a building has a risk score of 6, then there is an estimated 0.1-0.2% chance of loss in a given year. (See [here](https://docs.carbonplan.org/ocr/en/latest/methods/fire-risk/score-bins.html/) for more information on how we developed the breakpoints between scores.) The risk estimate combines two metrics: the probability that the building burns in a year (the “burn probability” or BP), and the consequence for a hypothetical structure if it burns (the “conditional risk to potential structures” or cPRPS), which considers factors such as fire intensity. There are two key caveats to keep in mind. First, the risk to potential structures metric leaves some room for interpretation. In addition to the annual risk of loss, it has also been described as the expected change in value (see our [methods](/research/climate-risk-fire-methods) for more detail). Second, a risk score applies to a hypothetical structure — it does not account for specific details such as the building materials.

## 02 — What are some features that your model accounts for?

A key feature of our model lies in how we calculate the yearly burn probability on developed lands. Our model relies on [results](https://www.fs.usda.gov/rds/archive/products/RDS-2025-0006/_metadata_RDS-2025-0006.html) from FSim, a process-based wildfire model with data for wildlands. We needed to estimate the burn probability on adjacent, developed lands in order to calculate the risk to specific buildings. [Previous work](https://doi.org/10.2737/RDS-2020-0016-2) did this by “oozing” the burn probability data in a circle around each wildland pixel to the adjacent ones. We wanted our model to account for the fact that wildfires spread from wildlands to developed regions primarily from wind-blown embers. We did that by figuring out where the wind blows on high fire-weather days, and then spreading the burn probability in those directions. We also built on previous work by repeating this process for burn probability estimates under climate change, while, crucially, keeping the wind effects and vegetation/fuels map fixed. See our [explainer article](/research/climate-risk-explainer) and [methods](/research/climate-risk-fire-methods) for more detail.

## 03 — What are some shortcomings of your model?

We highlight several scientific shortcomings of our model in the limitations section of our [methods](/research/climate-risk-fire-methods). Conceptually, our risk model also is limited by not accounting for many dimensions of risk. Here are several highly important factors that could influence the actual fire risk of a given location, but are not considered in our model.

<FactorsTable />

## 04 — Why do some buildings right next to each other have different risk scores?

Local landscape conditions, such as the variation among trees, shrubs, and pavement, can vary significantly from one place to another, especially where development abuts wildlands. While those changes can appear gradual in person, our input data average them into 30-meter pixels (about the size of a baseball diamond), which can create sharp boundaries from one pixel to another. Those sharp boundaries in vegetation lead to sharp boundaries in one of the data layers that the risk score depends on — the “conditional risk to potential structures” (cRPS) — which then affects the final risk scores. Because each building’s risk score is assigned based on the closest pixel, buildings that straddle these sharp boundaries can have very different risk scores. See [some figures](https://docs.carbonplan.org/ocr/en/latest/methods/fire-risk/compare-risk-rasters.html/) showing examples of this in our technical documentation. We also describe the causes and consequences of these edge effects in greater detail in the limitations section of our [methods](/research/climate-risk-fire-methods).

## 05 — Why do some areas show decreasing risk in the future? Doesn’t climate change make wildfires worse?

On average, wildfires are expected to get worse in the future as climate change makes land warmer and drier, but the effects won’t be the same everywhere. Some regions are likely to get wetter in a warmer world, which could counterbalance the effect of warming and cause future burn probability to decrease. See the limitations section of our [explainer](/research/climate-risk-explainer), as well as Question 06 below, for more information. (Note that the only component of the risk score that changes in the future scenario is the burn probability — the conditional risk to potential structures, or cRPS, stays the same). More locally, some decreases in future risk could be random. The burn probability values are calculated from tens of thousands of simulated years with randomly selected weather and fire ignition patterns. That’s enough years to get coherent, regional-scale trends in burn probability. But it’s still possible to see a more localized decrease in future risk if some pixels burned less frequently by chance.

## 06 — What climate scenarios are used for future risk projection?

Future risk data rely on climate model simulations spanning the years 2040-2054 in a high-carbon emissions scenario. Specifically, the fire model, FSim, was run using future climate data based on six climate models from the CMIP5 ensemble, following the RCP8.5 emissions pathway. The present-day risk estimates are based on the climate for the period 2004-2018. We used these simulations directly from the U.S. Forest Service. See [here](https://www.fs.usda.gov/rds/archive/catalog/RDS-2025-0006) for more information on these results.

## 07 — How is this different from other risk models?

We’ve compared our estimates with those from the [Wildfire Risk to Communities](https://www.wildfirerisk.org) effort, which inspired our approach, as well as the CAL FIRE [Fire Hazard Severity Zones](https://osfm.fire.ca.gov/what-we-do/community-wildfire-preparedness-and-mitigation/fire-hazard-severity-zones). We are more similar to each than either is to each other. This is likely because our methods share similarities with those of both CAL FIRE and WRC, while they have less in common with each other (see the Comparison section of our [explainer](/research/climate-risk-explainer) for more details). We do not know how we compare with private models, whether numerically or in design, given the often proprietary nature of the estimates from private companies. We welcome any opportunity to compare our estimates with others.
