---
id: fire-forests-inventories
version: 1.0.0
date: 03-30-2022
title: Fire, forests, and greenhouse gas inventories in California
authors:
  - Oriana Chegwidden
  - Grayson Badgley
  - Sadie Frank
  - Danny Cullenward
color: yellow
quickLook: Megafires likely make California forests a net source of carbon dioxide emissions
background: articles/015/abacus
card: fire-forests-inventories
summary: Should policymakers track net greenhouse gas emissions across the energy and lands sectors, and if so, how? We explored the complex choices required to account for forests and power plants in the same emissions inventory.
icon: articles/015/abacus-small
components:
  - name: FireEmissions
    src: ./components/fire-emissions.js
  - name: GHGInventory
    src: ./components/ghg-inventory.js
  - name: GHGSeries
    src: ./components/ghg-series.js
  - name: NetEffect
    src: ./components/net-effect.js
  - name: NetSeries
    src: ./components/net-series.js
---

Policymakers are increasingly interested in natural ecosystems’ ability to store carbon in land-based sinks, such as trees and soil. Preserving or enhancing carbon sinks like forests or ranchlands is seen by many as a key way to lock up carbon that would otherwise contribute to increased warming. The fact that natural sinks store carbon has led some governments to explore the use of carbon sinks in their economy-wide planning — for instance, to achieve an emission reduction target or net-zero goal.

If natural carbon sinks are going to contribute to climate policy goals, governments must calculate how much carbon is stored year-over-year in natural sinks. This accounting is managed through greenhouse gas inventories, which track units of CO₂-equivalent emitted from or sequestered by various sectors of the human economy and natural world. Greenhouse gas inventories almost always include CO₂ emissions from fossil fuel use, as energy-related CO₂ emissions constitute the primary source of greenhouse gas emissions from human activity. In addition to the energy-related CO₂ emissions, many governments also track emissions and carbon storage in the land sector — but some do not.

California’s greenhouse gas inventory offers a useful case study in the challenges of designing accounting methods that align with state policy goals. The state’s [official inventory](https://ww2.arb.ca.gov/ghg-inventory-data) is used to track progress with legally binding emissions reduction requirements for 2020 and 2030, but currently excludes the land sector. This means that the state’s official climate policy tracking system is indifferent to both the potential for [land-based carbon storage](https://ww2.arb.ca.gov/nwl-inventory) as well as the [significant emissions from wildfires](https://ww2.arb.ca.gov/wildfire-emissions).

That indifference could change, as state policymakers move ahead with efforts to link climate mitigation efforts across the land and energy sectors. In response to an [executive order](https://www.gov.ca.gov/wp-content/uploads/2020/10/10.07.2020-EO-N-82-20-.pdf) from Governor Gavin Newsom, state agencies including the Natural Resources Agency (CNRA) and the Air Resources Board (CARB) were directed to develop a strategy for California’s natural and working lands that is expected to feed into the state’s comprehensive climate change [scoping plan process](https://ww2.arb.ca.gov/our-work/programs/ab-32-climate-change-scoping-plan/scoping-plan-meetings-workshops). As the state pursues a goal of carbon neutrality by 2045, carbon that is expected to be sequestered in the land sectors reduces the need to promote emission reductions from the rest of the state’s economy.

In effect this strategy implies, without fully specifying, an emissions accounting structure that unifies the land and energy sectors into one central inventory. Forests, however, are rather unlike a power plant. Corporate management and regulation in the power sector, for example, can induce steady emissions reductions that are readily estimated on an annual basis. In contrast, whether or not a forest captures or emits carbon dioxide depends on factors outside of the control of government regulators — for instance, [interannual variability from forest stressors like droughts, insects, and wildfires](https://carbonplan.org/research/forest-risks-explainer).

As a result, the net contribution of forests can vary widely depending on the time period over which one looks. A forest that acts as a carbon sink one year can quickly become a major source of emissions the next year. Crucially, fires can cause drastic emissions spikes with unpredictable patterns over time, as evidenced by the 2020 and 2021 wildfire seasons.

We decided to explore how different technical methods for recording the net contribution of forest emissions affects what gets reported in California’s greenhouse gas inventory. This question, it turns out, is a lot harder to assess than we initially expected, with results that are highly dependent on methodological choices.

## California’s existing greenhouse gas inventories

California maintains two distinct greenhouse gas accounting systems: an inventory that tracks emissions from human-derived (or “anthropogenic”) sources like power plants and transportation, and a land-sector inventory that tracks the carbon stored in forests, rangelands, farms, wetlands, coast, deserts, and urban greenspace.

The state's anthropogenic inventory for 2000-2019 is shown in the figure below. Emissions have gradually decreased since the early 2000s, due primarily to the 2008 financial crisis and subsequent reductions in the electricity sector from coal power contract divestment and a shift toward renewable energy.<Cite id='mastrandrea.2020'/>

<Figure>
  <GHGInventory />
  <FigureCaption number={1}>
    Yellow line shows emissions from anthropogenic greenhouse gas inventory as a
    function of time. Gray horizontal line shows the AB 32 2020 limit for
    comparison.
  </FigureCaption>
</Figure>

Notably, by 2017 emissions had fallen below the state’s 2020 target, demonstrating the successful implementation of California’s initial suite of climate policies. While the state’s reductions have exceeded expectations, they are still small relative to emission totals. Emissions have fallen by about 10% over the last decades, and are required to fall an additional 40% below the 2020 limit by 2030.

In contrast to the anthropogenic emissions inventory, California’s land-sector inventory tracks the CO₂ drawn from the atmosphere and sequestered in tree trunks, leaves, stems, and soils. Due to the extensive acreage of these lands they can store a lot of carbon: as of 2014 estimates, the plants and soil of statewide forests and other natural lands hold about 5340 million metric tons of carbon.<Cite id='carb.2020'/>

Combining these disparate inventories requires bridging the gap between human-caused fossil fuel emissions and largely naturally-driven carbon fluxes between ecosystems and the atmosphere. Notably, there is no single, objectively correct way to do this. Rather, significant scientific questions must be addressed when splicing the two inventories together.
We decided to focus on calculations of the net carbon flux from California’s forests. We then use recent fire emissions datasets to update those numbers and provide a sneak peek at what updated flux estimates might look like — and whether California’s forests are a net source or sink of carbon emissions.

## The central role of methods

As evidenced in the literature, reasonable differences in methodological choices can influence whether California’s forests appear to be a net carbon source or sink. The calculated net effect of California’s forests on the carbon budget depends on three key definitions: (1) the part of the land being analyzed (e.g., all natural lands, forests excluding foliage, etc.), (2) the chosen methods for calculating the forests’ gross sources and sinks, and (3) the time period(s) used for the calculations. We’ll go through each of these steps in turn to lay the foundation for the kinds of decisions that influence land-sector accounting.

As a technical aside, we will use units of million (metric) tons of CO₂ to align with standard practices in greenhouse gas inventories. However, we note that the broader forest and climate community often reports results in units of Tg C (1 teragram of carbon), so we will convert results drawn from the literature into million metric tons of CO₂. A teragram of carbon is equal to about 3.67 million tons of CO₂, as CO₂ has a molecular weight about 3.67 times greater than carbon while million tons and teragrams are equivalent units.

### What part(s) of the land will you study?

Estimates of carbon fluxes depend on what part of the natural landscape you are discussing. For example, one could assess the carbon fluxes from all wildland ecosystems (e.g. all land outside of crops and urban areas) and derive whether those lands are a net source or sink. Alternatively, one could restrict the analysis to just trees without foliage (i.e. just the woody parts like trunks and branches). This decision will change the scope of the analysis.

For the purposes of this article we will focus on the carbon balance in forests and compare estimates from the literature that best align with that definition. While a complete analysis would include lands not under tree cover, we justify our focus on forests since they hold 90% of the state’s aboveground carbon.<Cite id='gonzalez.2015'/>

### What net emissions approach will you use?

A forest ecologist can calculate a forest carbon flux of in a variety of different ways. In a 2019 paper, UC Berkeley researcher Tim Holland and colleagues offered a window into the options.<Cite id='holland.2019'/> The authors assessed two previous studies that independently calculated the net carbon flux from California’s forests and arrived at opposite results. The first, Gonzalez et al. (2015), used remotely-sensed land cover class analysis (Landfire) and found that trees in California’s forests were a source of 176 million tons of CO₂ in the 9 years between 2001 to 2010, or just under 20 million tons of CO₂ per year.<Cite id='gonzalez.2015'/> In contrast, the second study, Christensen et al. (2017), used in situ forest stock inventory estimates from the [Forest Inventory and Analysis (FIA) program](https://www.fia.fs.fed.us/) and concluded that California’s forests have been a net sink of 24 million tons of CO₂ per year.<Cite id='christensen.2017'/> These findings are based on standing live trees assessed by the AB 1504 California Forest Ecosystem and Harvested Wood Product Carbon Inventory, which is updated annually. The latest iteration for the [2019 reporting period](https://bof.fire.ca.gov/media/beddx5bp/6-final_forest_ecosys_hwp_c_2019_feb2021_all_ada.pdf) attributed to forests a net sink of 13 million tons of CO₂ per year.

Holland et al. then noted shortcomings of each approach and proposed a hybrid inventory-remote sensing method. By standardizing assumptions across the two earlier papers using their hybrid methods, they concluded that California’s forests operate as a more modest carbon sink, sequestering 16.5 million tons of CO₂ per year.

Overall, depending on experimental methods, scientists disagree about whether California’s forests have been a net sink or source over the last few decades. Each of these methods results in a different number associated with the net effect of California’s forests. One can argue for the varying merits of the different approaches, but ultimately each offers a reasonable assessment of the net effect of California’s forests on the state’s carbon emissions.

### What time period will you use for your analysis?

Forest inventories are collected over multi-year windows. Specifically, the forest inventories referenced above are based on two different five-year windows separated by 10 years. The origin of these long time periods, from a practical standpoint, is that getting a high quality, representative sample of trees is time- and resource-intensive. Simultaneously, the method aligns with how forests work: sampling a broad swath of trees and then comparing with an inventory 10 years later helps the estimate be robust to interannual variability in forest losses. However, when there is dramatic variability — such as megafires in the 2020 and 2021 fire seasons — even a 10-year estimate can be sensitive. This is of particular relevance since wildfire risks are [projected to increase](www.carbonplan.org/research/forest-risks-explainer) in the future due to climate change. We note that the issue of time periods is less relevant for anthropogenic systems, where changes in emissions are usually slower and far less dramatic than, for example, the order-of-magnitude difference between low- and high-fire years.

## California in the era of megafires

California’s unprecedented 2020 and 2021 fire seasons raise additional questions about forests’ net carbon balance. Although the California Air Resources Board (CARB) tracks wildfire emissions using its own official methods, those data are lagged and only feature results through the 2020 fire season — with no results yet for 2021.

To get a sneak peek of how both the 2020 and 2021 fire seasons might affect the outlook for net forest carbon emissions, we used the near real time satellite-based measurement technique developed by NASA’s [Global Fire Emissions Database](https://www.globalfiredata.org/) (GFED). GFED produces satellite-derived wildfire emissions estimates at monthly intervals at a 0.25° resolution. We used this product to subset emissions within California, shown in solid red. We then compared the GFED estimates with those from CARB for the available years in the figure below. CARB’s estimates of wildfire CO₂ emissions, shown in dashed red, are based upon a variety of datasets including vegetation fuel maps and fire models.

<Figure>
  <FireEmissions />
  <FigureCaption number={2}>
    Comparison of fire emissions estimates over time from Global Fire Emissions
    Database (GFED) (solid red) and the California Air Resources Board (CARB)
    (dashed red).{' '}
  </FigureCaption>
</Figure>

This comparison isn’t perfect, but it is useful. We assume that any fire emissions detected by GFED within California correspond to wildfire emissions, which could inaccurately count a small number of controlled burns as wildfires. We also used the `regionmask` [Python package](https://regionmask.readthedocs.io/en/stable/) for extracting California, which could include edge effects around the state boundary as every 0.25° is either included or excluded based upon whether a majority of the cell is within the state boundary.

As the figure indicates, however, the two methods track one another well in most years. In some years, like 2004, the CARB estimates exceeded those made by GFED, while in 2018 the reverse occurred. Both estimates show clearly that fire emissions have a high interannual variability — some fire seasons are relatively modest (e.g., 2005), whereas others are more severe (e.g., 2008). Crucial to the point of our article though, both datasets show that the emissions in the last two years were higher than anything witnessed in the earlier part of the 20-year record. GFED estimates that fires released 161 million tons of CO₂ in 2021, equivalent to about 40% of the state’s most recent emissions inventory from 2020. (The full impact will be even worse, as fires also kill trees without burning them; these dead or dying trees are effectively [“committed” emissions](https://carbonplan.org/blog/climate-trace-release) that are not included in these numbers, but which will show up in the future as dead trees decompose or burn later.)

### How do bad fire years affect accounting?

The high variability of fire emissions means that a relatively “good” year in fire emissions (like 2019) could be followed by a very “bad” year (like 2020). The ups-and-downs result in individual years having a large impact on the bottom line. And record fires in 2020 and 2021 aren’t reflected in even slightly older studies that estimate net carbon emissions in California’s forests.

To preview how recent bad fire years might influence calculations of California’s forests’ net effect, we defined a simple model as follows:

```
net_emissions = fire_emissions - residual_sink
```

Given different estimates of net emissions (from the literature) and fire emissions (from GFED or CARB) we inferred a residual sink, or the amount of CO₂ assumed to be sequestered by California’s forests every year.

<Figure>
  <NetEffect />
  <FigureCaption number={3}>
    Inferring updated net emissions from historical data. The toggles let you
    specify a dataset for estimating historical net emissions, and a dataset for
    fire emissions. The model uses the appropriate historical period (shown on
    the left) to infer a residual sink based on the fire emissions and net
    emissions during that time period. That residual sink estimate is then used
    to predict net emissions over future time periods (middle and right).
  </FigureCaption>
</Figure>

To step through an example, Holland et al (2019) calculated that forests were a net sink of about 16.5 million tons of CO₂ per year for the period 2007-2016 (leftmost yellow bar in Figure 3). We then subtracted out the average annual fire emissions from the same 10-year period (leftmost red bar) to infer an annual average estimate for California forest’s residual sink. This sink includes predominantly the carbon sequestered through forest growth, which we assume remains constant through time. In ecological terms the sink can be thought of as the “net ecosystem production,” while ignoring harvest and leaching terms. We also assume that the sink is constant in time, though in reality we know that there will be variations due to climate and disturbance patterns. While an on-the-ground inventory estimate of carbon stocks would provide a more robust analysis, this back-of-the-envelope analysis provides a rapid assessment of what megafires might mean for the net carbon flux in California’s forests.

Now in possession of that inferred sink, we can substitute in average annual fire emissions for other time periods and derive different net emissions estimates for different time periods. For example, we can explore a different baseline of 2001-2010, by (1) assuming the residual sink constant, and (2) substituting in fire emissions for the period 2001-2010 to calculate that California forests sequestered on average about 20 million tons of CO₂ per year over 2001-2010. Using the same approach, we can use 2011-2020 as the baseline to calculate California’s forests as a net source of about 6 million tons of CO₂ per year. Thus, the time period of analysis can make a huge difference. Notably, because the existing literature doesn’t include bad fire years like 2020 and 2021, we expect any updates to provide sobering estimates of emissions from California’s forests.

Toggling among different estimates of net and fire emissions in Figure 3 reveals different inferred residual sinks. Note that in choosing a different net emissions dataset, the time period of fire emissions updates (as denoted with a changing time period label under the leftmost bar chart of Figure 3). Choosing a different net emissions or fire emissions dataset can have a strong impact on the inferred sink. Notably, Gonzalez et al. (2015) estimated that California’s forests were a net emissions source, and so the inferred residual sink is positive.

Substituting in the fire emissions from the 2001-2010 baseline period, the choice of input datasets can influence whether forests are a source or a sink. However, switching to a 2011-2020 baseline we see California’s forests becoming a stronger net emissions source.

### How sensitive are the answers to the baseline period?

We can repeat the time-period substitutions of the middle and rightmost bar charts of Figure 3 for each 10-year baseline period between 2009 and 2021. When repeated for each of the four net emissions datasets above, we arrive at Figure 4, which shows a series of net emission results for forests through time. By toggling the options in Figure 3 we can create 8 different net emissions estimates for each baseline period (2001-2010 middle panel, 2011-2020 rightmost panel). Each period’s eight estimates are then plotted on Figure 4 at their last year (e.g. 2001-2010 is plotted at 2010).

<Figure>
  <NetSeries />
  <FigureCaption number={4}>
    Inferring net emissions over time and across parameter combinations. The
    same model and procedure from Figure 3 is used here, but net emissions are
    inferred from rolling 10-year time windows. Each point represents a
    combination of source datasets (4 options for net emissions, 2 options for
    fire data). The time for each point is the end of the corresponding 10-year
    window. Only GFED fire data is available for 2021, so there are four points
    rather than 8.{' '}
  </FigureCaption>
</Figure>

Figure 4 demonstrates two important findings. Broadly, the choice of baseline period does not matter much during the first 20 years of the 21st century. For that period, California’s forests are largely believed to be a net carbon sink (with the exception of calculations based upon Gonzalez et al. (2015)). However, the megafires of 2020 and 2021 cause an uptick in the net forest effect in the 2011-2020 time period. When including 2021, forests appear to be a net emissions source regardless of model choices.

### Combining California’s inventories

We can finally combine the different traces from Figure 4 with the anthropogenic GHG inventory from Figure 1. By summing them we produce the orange traces in Figure 5. We highlight the combination of the official AB 1504 net emissions estimates and the latest CARB fire estimates with a dashed line. Including the 2020 fire season increases the combined inventory across all methodological choices. Adding 2021 pushes the inventory back above the state’s 2020 emissions limit, set by AB 32.

<Figure>
  <GHGSeries />
  <FigureCaption number={5}>
    Combining greenhouse gas inventories. Anthropogenic inventory emissions
    replotted from Figure 1 (yellow line). The greenhouse gas inventory is
    summed with an estimate of net emissions under different parameter
    combinations to infer emissions incorporating forests (orange lines). The
    net estimates are averaged within 10-year rolling windows, as in Figure 4.
    The parameter combination corresponding to AB 1504 (for net emissions) and
    CARB (for fire data) is shown with a dashed line.
  </FigureCaption>
</Figure>

## Insights for policymakers

Controlling the combined effects of greenhouse gas emissions from human activities and the carbon stocks found across managed and wild lands presents major challenges. While most energy-related emissions can be tracked on an annual basis, land-sector emissions are far more variable and subject to many forces — including climate change — that are outside of policymakers’ direct control. Harmonizing these different accounting regimes requires difficult choices for which there are no easy answers.

Precisely because the energy- and land-sector emissions are so different, it’s important to ask whether one should combine inventories in the first place. One reason not to is that a combined inventory doesn’t help policymakers track the impact of their efforts any better than disaggregated inventories. After all, an integrated inventory can create misleading interpretations. The increase in wildfire emissions tells us very little about the success of clean electricity policy or mobile source emission standards, and vice versa. But even if policymakers choose to separate these sectors for the purposes of tracking compliance with economy-wide policy targets, they will nevertheless still need to understand how the impacts of the land sector affect the extent of climate mitigation they seek from the rest of the economy.

Indeed, we anticipate that when the California Department of Forestry and Fire Prevention inventories are eventually updated to include 2021 data, they could indicate that forests in California have become a net source of emissions. But that calculation will likely depend on the time period of analysis and the underlying methods. As a result, we believe that policymakers should be clear about the methods and datasets they use when claiming the sequestration potential of forests. And policymakers should recognize that many of the most concerning drivers of wildfire are expected to increase going forward. At minimum, megafire years should be included when developing policy, as they can inform conservative estimates of forests’ contributions to total greenhouse gas fluxes.

Many of the challenges discussed here reflect the fact that existing tools are insufficient to quantify net forest carbon sequestration on an annual basis. This limits our ability to accurately track year-over-year changes in forest carbon flux. In lieu of annual observations, estimating average sequestration relies on choosing a baseline time period in the face of considerable variability, deep uncertainty, and growing climate risks. Averaging across distinct time periods can change the answer to whether forests are a source or a sink — but may ultimately be the best way to think about land sector emissions.

Finally, these observations suggest policymakers may want to consider different priorities for forests in a changing climate. When planning for the contribution that forests in the western United States could make to economy-wide climate targets, for example, policymakers might benefit from focusing more on robust plans for fire management instead of extrapolating historical rates of carbon sequestration and hoping for the best. Ultimately, climate policy requires deep cuts in fossil fuel CO₂ emissions as well as a sound strategy for managing the land sector. The question is whether, in the face of growing climate risks, efforts to store more carbon in the land sector should justify higher emissions elsewhere in the economy. Our analysis suggests that western forests’ capacity to deliver on such a promise is contingent at best.

<Endnote label='Credits'>

Oriana developed the analysis with input from Sadie, Grayson, and Danny. All authors contributed to writing the article. Thanks to Jeremy for help designing and implementing figures.

Please cite as:

O Chegwidden, G Badgley, S Frank, D Cullenward (2022) “Fire, forests, and greenhouse gas inventories in California” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/fire-forests-inventories](https://carbonplan.org/research/fire-forests-inventories)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan received [funding from the Preston-Werner Foundation](https://carbonplan.org/funding) to support research that could inform the role of natural and working lands in California’s scoping plan.
CarbonPlan and the authors are solely responsible for the content of this writeup, which does not represent the views of any other individuals or organizations.

Article text and figures made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/). Implementation of interactive visualizations made available under an [MIT license](https://github.com/carbonplan/research/blob/main/LICENSE). Associated [analysis code](https://github.com/carbonplan/fire-forests-inventories) made available under [MIT license](https://github.com/carbonplan/fire-forests-inventories/blob/main/LICENSE).

</Endnote>
