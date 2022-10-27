---
id: soil-depth-sampling
version: 1.0.1
date: 06-17-2021
title: Depth matters for soil carbon accounting
authors:
  - Eric Slessarev
  - Jane Zelikova
  - Joe Hamman
  - Danny Cullenward
  - Jeremy Freeman
color: orange
card: soil-depth-sampling
background: articles/011/tillage
quickLook: Why depth is important for soil carbon sampling, and how to avoid key mistakes
summary: Estimating soil carbon based on samples is tricky to get right. We explored the role of sampling depth when estimating soil carbon, to show why it matters, and how to avoid common pitfalls.
icon: articles/011/tillage-small
components:
  - name: Depth
    src: ./components/depth/index.js
  - name: Density
    src: ./components/density/index.js
  - name: Country
    src: ./components/country/index.js
---

Agricultural soils have lost a vast amount of carbon to the atmosphere due to human activities,<Cite id='sanderman.2017'/> contributing to climate change. Scientists and policy makers are now debating whether putting some of this carbon back in the ground would be an effective climate change mitigation strategy.<Cite id='minasny.2017'/>

At the federal level, policymakers at the US Department of Agriculture are [considering approaches](https://www.federalregister.gov/documents/2021/03/16/2021-05287/notice-of-request-for-public-comment-on-the-executive-order-on-tackling-the-climate-crisis-at-home) for crediting soil carbon. In California, regulators have developed a “Natural and Working Lands” [emissions inventory](https://ww2.arb.ca.gov/nwl-inventory) that includes soil carbon and have indicated they may [incorporate soil carbon](https://resources.ca.gov/Initiatives/Expanding-Nature-Based-Solutions) into an upcoming climate policy planning process. For these efforts to succeed, however, we need rigorous and effective measurement approaches.

The problem is that measuring soil carbon isn’t straightforward. Several choices are involved, especially related to depth. How deep should soil be sampled? How should sampling depth affect carbon accounting?

Here we explore this issue through synthesis of published data and simulation, focusing on no-till agriculture as a case study. We make the case that best-practices for carbon accounting will require soil sampling that encompasses the full crop-rooting zone, which is often deeper than the the minimum of 30&nbsp;cm currently recommended by the [IPCC](https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html) and the 30&nbsp;cm (or less) required by [several](https://www.climateactionreserve.org/wp-content/uploads/2020/10/Soil-Enrichment-Protocol-V1.0.pdf) [recent](http://www.fao.org/3/cb0509en/cb0509en.pdf) [soil](https://www.planvivo.org/Handlers/Download.ashx?IDMF=02b5473f-b80c-471d-95af-cde6fda375ea) [carbon](https://storage.googleapis.com/nori-prod-cms-uploads/Nori_Croplands_Methodology_1_2_5435488110/Nori_Croplands_Methodology_1_2_5435488110.pdf) [protocols](https://regen-registry.s3.amazonaws.com/Methodology+for+GHG+and+Co-Benefits+in+Grazing+Systems.pdf). Best practices will also require accounting in terms of soil mass, rather than soil volume.

To learn why, read on.

## Background

No-till farming was developed and promoted in the mid-20th century as an erosion control measure.<Cite id='moldenhauer.1983'/> Under conventional tillage, soil is broken up and mixed mechanically. In no-till farming, soil disturbance is minimized and crop residues are left on the soil surface. Reducing or eliminating tillage improves water infiltration rates and protects against wind and water erosion. Reducing tillage also improves soil structure, allowing “aggregates” (intact clumps of soil) to form when they otherwise would have been broken into smaller pieces.<Cite id='li.2019'/> Aggregates are often carbon rich, and are thought to have a role in protecting organic matter from decay.<Cite id='chaplot.2015'/>

Although this suggests that eliminating or reducing tillage might be a way to increase the overall amount of carbon stored in soil, the relationship between tillage and soil carbon storage remains a heavily debated topic.<Cite id='baker.2007'/> No fewer than 11 synthesis papers published in the past five years have addressed the relationship between tillage and soil carbon storage.<Cite ids={['xiao.2020','haddaway.2017','sun.2020', ,'mondal.2020','du.2017','meurer.2018','ogle.2019','li.2020','nunes.2020','nicoloso.2021','bai.2019']}/> These papers each analyzed data from hundreds of individual studies. While the synthesis papers analyzed many of the same studies, they reached a range of conclusions. Some have concluded that tillage has no statistically detectable effect on overall soil carbon storage, while others have identified positive effects or indicated that tillage effects depend on other factors such as climate and soil type

Sampling depth is likely a key source of the disagreement. It has two main effects, which we call the “carbon redistribution effect” and “density change effect”. We’ll describe each in turn.

## The carbon redistribution effect

Tillage mixes the top layer of soil, commonly called the “plow layer” in an agricultural field. In the case of moldboard plowing, which is one of the more disruptive conventional tillage practices, the plow layer is typically 25-30 cm deep (roughly 10-12&nbsp;in). Mixing the soil with a plow buries carbon-rich crop residues throughout the plow layer. If no-till methods are adopted, less carbon is buried deep in the plow layer and more carbon builds up at the soil surface instead. The resulting pattern is complex: relative to conventional tillage, no-till nearly always increases soil carbon in the top 5-10&nbsp;cm (2-4&nbsp;in), but can also reduce the amount of soil carbon stored at greater depths.

We illustrate this pattern in Figure 1, which shows data from six papers that each compared conventional tillage with no-till across hundreds of individual experiments. All reported changes in soil organic carbon using relative units: they show the difference in the amount of carbon under conventional tillage versus no-till relative to the amount of carbon under conventional tillage. While these relative values do not tell us how much carbon was lost or gained by the soil in absolute terms, they are easy to understand and compare across studies.

<Figure>
  <Depth />
  <FigureCaption number={1}>
    Reported effect sizes for conversion to no-till as a function of depth from
    six synthesis papers, in order from left to right: Bai et al. (2019), Mondal
    et al. (2020), Xiao et al. (2020), Nunes et al. (2020), Du et al. (2017),
    and Angers et al. (2008). Relative carbon increases under no-till are shown
    in orange, while losses are shown in gray. The number above each chart shows
    the value for that dataset at the position of the horizontal line. Du et al.
    (2017) and Angers et al. (2008) reported geometric mean effect sizes; the
    remaining studies reported arithmetic mean effect sizes.
  </FigureCaption>
</Figure>

The impact of tillage on soil carbon seems to depend on the environment. In some contexts – colder, wetter climates, for instance – increased carbon at the surface and reduced carbon at depth tend to offset each other. In warmer and drier environments, reduced carbon storage at depth seems to be less common and the overall effect of no-till on carbon storage may be positive. These conclusions depend on how climate and soil type are taken into account across studies, however, so it is not surprising that different papers have found different answers.

Increases in soil carbon at the surface do not always reflect what happens deeper in the soil, regardless of whether no-till leads to net carbon storage. This is a key lesson because total effects added up across the whole soil profile are what matter for climate mitigation.

Very shallow sampling (e.g. 15&nbsp;cm) is likely to overestimate carbon storage benefits from no-till agriculture. Sampling to the IPCC-recommended minimum depth of 30&nbsp;cm is likely to reduce the error, given that the plow layer typically extends 25-30&nbsp;cm deep and therefore a 30&nbsp;cm sampling depth will pick up more of the overall effect. However, the majority of the 11 studies cited above found statistically detectable reductions in soil carbon under no-till relative to conventional tillage at depths greater than 30&nbsp;cm, suggesting that the carbon redistribution effect can extend below the typical lower boundary of the plow layer. One possible explanation is that tillage encourages rooting below 30 cm, particularly in colder climates, and therefore adoption of no-till farming reduces carbon inputs from deep rooting.

For all this complexity, one thing is clear: it is hard to evaluate the total effect of no-till agriculture on soil organic carbon if sampling stops at 30&nbsp;cm. One older paper that reported effects in terms of absolute carbon units suggests that 0.9 tCO₂ / ha (95% confidence interval +/- 0.55) might be lost between 30 and 40 cm on average.<Cite id='luo.2010'/> This value appears consistent with more recent estimates specific to cool temperate climates, although it may not apply well in warmer climates. The tillage experiments that sampled deeper than 30&nbsp;cm are only a small subset of the total number of experiments (roughly 25% or less across papers). Sampling to depths greater than 30&nbsp;cm in future studies could help to answer these questions and reduce the risk that carbon benefits of no-till are overestimated. Without prescribing an exact depth, we suggest best practice is to sample the full rooting depth of the crop being surveyed (canonically, 1&nbsp;m).<Cite ids={['olson.2015','lal.2018']}/>

## The density change effect

Soil density leads to a second depth-related effect on net carbon storage. Like carbon redistribution, this effect can overestimate carbon storage under no-till relative to conventional tillage. This potential source of bias is easy to correct for with the right sampling approach, though few soil carbon protocols currently account for it.

Understanding the density change effect requires a little background on how soil carbon is counted. We generally want to know how much carbon is stored per unit land area (the “carbon stock”). In the case of soil, this also requires defining the depth. For instance, a sampling protocol might report carbon storage in tCO₂ / ha over the interval 0-30&nbsp;cm. While final numbers are often reported relative to surface area alone, implicitly they refer to the amount of carbon in a volume of soil (i.e., a certain depth of soil). The amount of carbon in this volume is calculated by multiplying the carbon content of the soil (weight of carbon per weight of soil) by the soil density (weight per volume).

This method of accounting can create biases because it depends on both the soil carbon content and the soil density. Changes in soil density can affect estimates of carbon storage, even without a change in the amount of carbon stored in the landscape. Shifts between conventional tillage and no-till are a classic example of this accounting problem.

Tillage breaks up the soil structure, essentially “fluffing up” the soil and reducing its density. Conversion to no-till allows the soil particles to settle into a denser structure. As a result, the plow layer of no-till soils is on average roughly 2-3% denser than the plow layer of tilled soils.

The difference in soil density under no-till versus conventional tillage can affect carbon stock estimates. We illustrate this in Figure 2. On the left, a field is sampled to a fixed depth of 30 cm and carbon stocks are calculated at that depth. After conversion to no-till, the density of the plow layer increases, shifting the soil surface downwards slightly. If the same volume (or depth) of soil is then collected, soil particles that would have been left out before are now included, leading to a larger carbon stock estimate. This larger carbon stock estimate would be entirely due to changing the frame of reference for sampling.

<Figure>
  <Density />
  <FigureCaption number={2}>
    Conversion to no-till agriculture increases soil density in the plow layer.
    If a fixed sampling depth is used, more soil is counted. Failing to account
    for this artifact results in extra carbon even if the actual carbon stock
    remains unchanged.
  </FigureCaption>
</Figure>

This potential measurement artifact is easy to avoid. Soil scientists have devised a method for reporting carbon stocks based on soil mass instead of soil volume.<Cite ids={['gifford.2003','wendt.2013']}/> Using this “equivalent soil mass” accounting requires taking soil samples at multiple depth intervals. These intervals can be analyzed separately or combined in pre-calculated amounts to reduce analysis costs.<Cite id='virto.2012'/> The equivalent soil mass method uses a mathematical function to weight the data from different depth intervals, yielding an estimate of the carbon stored in a given mass of soil within an area of land. The extra mathematical step makes this method slightly more complicated, but it doesn’t require new equipment or significantly increase costs.

A subset of the papers on no-till and soil carbon have explicitly compared conventional accounting and equivalent soil mass accounting. They found that the effect of no-till is smaller when equivalent soil mass accounting is used. Thus, failing to incorporate this correction could overestimate the effects of no-till.

## A scaling exercise

These kinds of potential biases might seem small. And in terms of tCO₂ / ha, they are. But some soil carbon market proponents are considering crediting carbon gains over very large spatial scales — a [recent Indigo Ag project initiated](https://thereserve2.apx.com/mymodule/reg/prjView.asp?id1=1459) under the Climate Action Reserve’s Soil Enrichment protocol spans 1.9 million ha, for example. At this scale, small biases can add up to big effects. (We note that full project documentation is not yet available for this effort. Under the Climate Action Reserve protocol, projects are only required to collect samples up to 30&nbsp;cm. It’s also [unclear whether public documentation will include sufficient information](https://carbonplan.org/research/soil-carbon-comment) to evaluate the methodological rigor of the project’s approach to soil sampling.)

To illustrate the potential for sampling depth issues to impact crediting outcomes, we simulated the impact of not accounting for density changes if soil carbon crediting based on fixed-depth sampling to 30 centimeters was applied across all croplands in the USA (about 142 million ha). For this simplified analysis, we used USDA SSURGO maps<Cite id='ssurgo.2016'/> and CropScape data<Cite id='boryan.2011'/> to estimate carbon stocks in cultivated land as a function of depth, and simulated the change in density that might arise from a hypothetical conversion from till to no-till. The increase in density means that an equivalent soil sample would encounter slightly more soil mass (and carbon) at the bottom of the interval. We assessed the magnitude of error in reported soil carbon gains that would occur without correcting for this change.

We ran three simulations corresponding to low, medium, or high magnitudes of error. In the medium case — a 3% increase in density over the top 20 cm — failing to account for density would lead to over-reporting of true soil carbon gains of 367 million tCO₂, equivalent to 58% of the [total annual emissions from the US agricultural sector](https://www.epa.gov/ghgemissions/inventory-us-greenhouse-gas-emissions-and-sinks-1990-2019) in 2019.

<Figure>
  <Country />
  <FigureCaption number={3}>
    Simulating the potential scale of a measurement artifact related to density.
    The color of each dot shows the scale of the potential error in units of
    tCO₂ / ha. The three scenarios correspond to an increase of 1% of density in
    the top 10 cm, 3% in the top 20 cm, or 5% in the top 30 cm, which result in
    a low, medium, or high magnitude of error, respectively, if density is not
    corrected for. If applied across all available land, the total magnitude of
    error under the three scenarios would be 61 million tCO₂, 367 million tCO₂,
    or 913 million tCO₂.
  </FigureCaption>
</Figure>

This calculation is meant to be illustrative, not conclusive. It is unlikely that 100% of US croplands would enroll in carbon programs crediting no-till practices, and presumably at least some would use measurement techniques that account for the density change effect. The SSURGO data we used also do not contain information about tillage, so our calculations do not directly simulate conversion to no-till. Albeit highly approximate, our analysis illustrates how a seemingly small measurement artifact can add up to a lot of mistakenly credited carbon over a large land area.

## Managing the costs of deep sampling

We recognize that sampling deeply and using the equivalent soil mass approach makes soil sampling for carbon quantification more costly. We think these extra costs are necessary to achieve high-quality estimates, and the challenge lies in designing sampling efforts that balance the benefits of deep sampling against the costs within an overall sampling budget. Optimizing this trade-off might involve collecting shallow samples at a large number of locations across the landscape, accompanied by a smaller number of locations where soil is sampled below 30 centimeters. But some amount of deep sampling seems essential to determining whether changes in deep soil carbon are occurring. The need for more extensive deep sampling may depend further on how large these changes are relative to changes at the surface.

Fortunately, equivalent mass accounting can be applied with relatively small additional costs. While the equivalent mass approach is often applied in research contexts where a large number of depth increments are sampled, Wendt and Hauser (2013) developed a simplified approach that requires collecting a minimum of two samples in the field that are later combined in pre-calculated proportions and analyzed as a single sample to quantify the soil carbon content. This method requires slightly more sample handling than collecting a single 0-30&nbsp;cm sample, but it avoids doubling laboratory costs.

## Concluding thoughts

We have explored two ways that sampling depth affects the quality of soil carbon measurements, using the example of conversion to no-till agriculture. In both cases, we demonstrated how using the wrong measurement approach — overly shallow or fixed-depth sampling — could overestimate climate benefits.

While these risks are important to understand and address, we want to end with some more optimistic thoughts.

First, the primary purpose of no-till agriculture is erosion control. For this reason, no-till is already widely adopted across the USA.<Cite id='claasen.2018'/> Even if the carbon sequestration benefits from conservation agriculture practices like no-till are uncertain or potentially overestimated, these practices can be broadly beneficial for maintaining soil health and ecosystem services. The challenges of robust carbon accounting shouldn’t get in the way of adopting these practices where they have clear and direct environmental benefits. Carbon doesn’t need to be the primary metric for measuring the success of no-till agriculture, and might even be more appropriately considered a co-benefit.

Second, the issues raised above certainly do not rule out the overall potential climate benefits of no-till. Rather, they indicate that more science is needed to provide a high-confidence answer. With only one exception, the papers we cited used paired experimental designs, where carbon storage under no-till is compared to conventional tillage at a single point in time. This experimental design can quantify differences in soil carbon storage, but it cannot fully quantify net climate benefits.<Cite id='olson.2014'/> Doing so requires more information: initial carbon measurements, estimates of methane and nitrous oxide emissions, and a life cycle analysis that considers fossil fuel emissions associated with management.<Cite id='olson.2014b'/> Together, such data can demonstrate the potential climate benefits of no-till and related practices.

Soil carbon measurements that sample deeper than 30 cm and use equivalent mass accounting are a critical component of any high-integrity soil carbon accounting — but far from the only piece of the puzzle.

<Endnote label='Brief methods' divider>

For the data synthesis (Figure 1) we digitized figures from six published papers that summarized the relative effect of no-till relative to conventional tillage (as defined in each paper). We converted data reported as ratios into percentages, and in two cases where the lower boundary of the deepest sampling interval was not defined we set it equal to one meter.

For the spatial simulation (Figure 3), we used maps provided by the USDA NRCS SSURGO database to estimate carbon stocks as a function of depth. We randomly sampled points from 50 km x 50 km grid cells across the USA (500 points per cell), and then extracted carbon stock data from SSURGO where land was classified as cultivated based on the USDA NASS CropScape data layer for 2016-2020. For each soil map unit within this sample, we related cumulative soil carbon stocks to soil depth using a cubic spline function (see [R code](https://github.com/carbonplan/soil-depth-sampling) for details).

Once we had these data (26,560 individual soil map units), we simulated the density change effect by assuming one of three scenarios: a 1% increase in the density of the top 10 cm of soil, a 3% increase of the top 20cm, or a 5% increase of the top 30cm. These were selected to bracket the average effect from conversion to no-till. For each cell, we estimated the mean error arising from conventional accounting given these changes, in units of tCO₂ / ha, and then multiplied the error at each cell by the area and added to obtain a total estimate.

</Endnote>

<Endnote label='Credits'>

Eric developed the initial concept for the analysis with input from Danny and Jeremy. Eric performed all analyses and wrote the first draft of the article. Jeremy and Eric designed and developed the figures. All authors contributed to writing the article. The authors thank Dan Liptzin for helpful feedback.

Please cite as:

E Slessarev, J Zelikova, J Hamman, D Cullenward, J Freeman (2021) “Depth matters for soil carbon accounting” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/soil-depth-sampling](https://carbonplan.org/research/soil-depth-sampling)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan received [funding from the Preston-Werner Foundation](https://carbonplan.org/funding) to support research that could inform the role of natural and working lands in California’s scoping plan.
CarbonPlan and the authors are solely responsible for the content of this writeup, which does not represent the views of any other individuals or organizations.

[Eric Slessarev](https://eslessarev.wordpress.com/) is a post-doctoral researcher at Lawrence Livermore National Laboratory. Writing and analysis contributed by Eric were performed under the auspices of the U.S. Department of Energy by Lawrence Livermore National Laboratory under Contract DE-AC52-07NA27344.

Reference herein to any specific commercial products, process, or service by trade name, trademark, manufacturer, or otherwise, does not necessarily constitute or imply its endorsement, recommendation, or favoring by the U.S. government or the Lawrence Livermore National Security, LLC. The views and opinions of authors expressed herein do not necessarily state or reflect those of the U.S. government or the Lawrence Livermore National Security, LLC, and shall not be used for advertising or product endorsement purposes.

Article text and figures made available under a [CC-BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/). Implementation of interactive visualizations made available under an [MIT license](https://github.com/carbonplan/research/blob/main/LICENSE).

</Endnote>
