---
id: forest-risks-explainer
date: 05-20-2021
title: Risks to forest carbon in a changing climate
authors:
  - Oriana S. Chegwidden
  - William R L Anderegg
  - Grayson Badgley
  - Danny Cullenward
  - John A. Abatzoglou
  - Jeffrey A. Hicke
  - Anna T. Trugman
  - Jeremy Freeman
  - Joseph J. Hamman
color: red
quickLook: A detailed look at the disturbance risks to forest carbon under future climate conditions
background: articles/009/forest-fire-red
card: forest-risks-explainer
summary: Forests in the United States are already at risk from wildfire, drought, and insects, and climate change is making it worse. We combined satellite and ecological data with climate models to project future risks to forest carbon. Along with the paper, we are releasing open data, open software, and an interactive web map.
version: 1.0.0
icon: articles/009/forest-fire-small-red
links:
  - label: Publication
    href: https://doi.org/10.1111/ele.14018
  - label: Map tool
    href: /research/forest-risks
components:
  - name: RiskMaps
    src: ./components/risk-maps/index.js
  - name: RiskTrajectories
    src: ./components/risk-trajectories/index.js
---

Climate change, with its hotter summers and drier atmosphere, is poised to exacerbate the wildfires, insect outbreaks, and drought conditions that already threaten forests in the United States.<Cite id='seidl.2017'/> We set out to analyze these risks, with the goal of supporting data-driven decisions about the role forests can play in climate policy.

Forests are a key part of the global carbon cycle, sequestering carbon dioxide and storing it in the biomass of trees. Unfortunately, that sequestered carbon is only kept from the atmosphere while trees remain alive. When trees die, most of the carbon they sequestered is released back into the atmosphere, either immediately (e.g. during a fire) or slowly (e.g. through decomposition following drought or insect-related mortality).

While disturbance processes play key roles in healthy forest ecosystems,<Cite id='attiwill.1994'/> rising tree mortality risks can severely limit forests' ability to sequester carbon over long timescales.<Cite ids={['kurz.2008', 'wang.2021']}/> In some forests, disturbance risks could become so severe as to turn a net sink of carbon into a source.<Cite ids={['hubau.2020', 'holland.2019']}/>

Better characterizing risks to forests can help us understand the role of forests in climate change mitigation and target key areas for adaptation and conservation. In this article and the accompanying [map tool](https://carbonplan.org/research/forest-risks) we summarize the results of [a collaborative study](https://doi.org/10.1111/ele.14018) in which we used statistical models to predict increases in climate-sensitive risks throughout the 21st century. Our results highlight how the resilience of US forest carbon management depends critically on global greenhouse gas emission scenarios. Reducing global emissions lowers risks, whereas higher emissions make forest carbon storage highly uncertain — especially in regions like the western US.

## Climate change exacerbates risks

We analyzed the historical relationship between climate conditions and three key forest risks — fire, drought, and insects — by combining satellite and ecological data with climate and hydrologic variables representing water availability. We then used the resulting statistical models to produce spatial maps of projected risks of these disturbances through the end of the 21st century.

We projected risks to forests based on three future climate scenarios (“shared socioeconomic pathways” or SSPs)<Cite id='riahi.2017'/> using data from the Coupled Model Intercomparison Project Phase 6 (CMIP6).<Cite id='eyring.2016'/> These scenarios incorporate socioeconomic and climate factors to describe different future levels of emissions and subsequent climate change.

<Figure>
  <Table
    columns={6}
    start={[
      [1, 1, 1, 1],
      [1, 3, 3, 3],
    ]}
    width={[
      [6, 2, 2, 2],
      [6, 4, 4, 4],
    ]}
    index={true}
    data={[
      [
        'SSP2-4.5 (low)',
        'A more optimistic scenario that models emissions declining beginning mid-century, though they remain net-positive throughout the 21st century',
      ],
      [
        'SSP3-7.0 (medium)',
        'Emissions increases through the 21st century, similar to current expectations for global emissions given current policy commitments',
      ],
      [
        'SSP5-8.5 (high)',
        'A scenario in which world governments fail to enact significant climate policy and aggressively exploit conventional fossil energy resources',
      ],
    ]}
  />
</Figure>

Although SSP2-4.5 is the lowest emissions scenario we include, it is considered “middle-of-the-road” in terms of the [full suite of scenarios](https://gmd.copernicus.org/articles/13/3571/2020/) and still results in warming that exceeds the limits set by the Paris Agreement. Note that there is significant uncertainty as to the likelihood of some of these scenarios given current trends, but together they offer a view at the range of future outcomes.

Our full high-resolution results can be browsed in a live [web mapping tool](https://carbonplan.org/research/forest-risks). The interactive graphic below shows a downsampled version that helps build intuition for our study’s results. The figure includes the three risk factors alongside a projection of forest biomass. For any of the three risk factors, you can change the threshold at which impacts appear on the map, raising or lowering the level of risk. In addition, you can select the climate scenario and scroll through time at 10-year steps between 2010 and 2090.

Note that projected "risk" here means slightly different things for the different forms of disturbance. Fire risk represents the probability of at least one moderate or high severity fire within a 20 year period. Drought and insect risks represent the expected mortality (as a fraction) over a 20 year period related to each of the factors. While qualitatively comparable, full harmonization would require further assumptions about the fraction of biomass lost in fires and expected background levels of mortality.

<Figure>
  <RiskMaps />
  <FigureCaption number={1}>
    Risks to forests projected through the 21st century. <Orange>Fire</Orange>
    risk represents the probability of at least one moderate or high severity fire
    within a twenty year period. <Pink>Drought</Pink> and <Blue>insect</Blue>
    risks represent the expected mortality (as a fraction) related to each of
    the factors. Adjusting the sliders next to each panel raises or lowers the
    threshold for when a pixel will appear, denoting a location at or exceeding
    that risk level. The <Green>biomass</Green> map shows, as a reference,
    locations with an estimated biomass of at least 1 tC/ha in 2020. Pan through
    years (lower right) or change emissions scenario (lower left) to see risks
    change.
  </FigureCaption>
</Figure>

Historically, areas with high wildfire risk (regions covered with orange dots) are predominantly in the mountains of the western US, especially California, the northern Rocky Mountains, and the southwest. Areas of high mortality for insects and drought were generally in the Rocky Mountains of Idaho, Montana, and Colorado.

But these risks aren’t static.

Fire risk increases dramatically throughout the 21st century. For example, by moving the year slider to the right, we see that by 2090, under SSP3-7.0, almost the entire western US, as well as much of the midwest and southeast, exhibits some risk of wildfire (>5% chance of burning within a 20 year period as indicated by the vertical slider at left). Under higher emissions scenarios we project an even higher risk. For example, selecting (at lower left) the high emissions scenario (SSP5-8.5) or the lower emissions scenario (SSP2-4.5) causes the fire-prone regions in 2090 to either expand or shrink.

Insects and drought are less sensitive to climate than fire, though still worsen throughout the 21st century. Drought risks are projected to increase across broad swaths of the intermountain and southwestern US, California, and western Texas, and insect risks are projected to grow across the Rocky Mountains in the intermountain western US, Sierra Nevada mountains in California, and parts of the northern midwest.

Our insect and drought models were partially limited by noisy observational forest plot data. We made the conservative decision to project future climate sensitivities only in regions where we could establish robust historical relationships. As a result, we are likely underestimating the sensitivity of these risks to a changing climate.

## Risk profiles vary by region

In the future, all US-averaged risks are projected to increase in severity throughout the 21st century. Changes depend substantially on emissions scenario, with modeled increases by 2090 ranging from 4-14x for fire and 1.3-1.8x for drought and insects. However, the severity of the risk change will depend on location, which you can explore in the interactive graphic below.

<Figure>
  <RiskTrajectories />
  <FigureCaption number={2}>
    Trajectory of risks under three future climate change emissions scenarios:
    <Red>SSP5-8.5 (high)</Red>, <Yellow>SSP3-7.0 (medium)</Yellow>, and
    <Teal>SSP2-4.5 (low)</Teal>. Averaging risks regionally (upper left) reveals
    how risks depend on location. The ensemble mean of 6 global climate models
    is dark while light traces indicate each individual ensemble member.
    Historical period shown in gray.
  </FigureCaption>
</Figure>

The west coast, which is already beleaguered by fire risk, has the potential to experience intense growth in risk such that by 2090 fire risk could exceed 50% in the high emissions scenario. By the end of the century, the historically low-fire risk southeast could have levels of fire risks similar to the present-day west coast. Increases in drought mortality are most striking in the southwest, where climate change could increase drought mortality by about 3x. As mentioned above, projections are more uncertain for drought and insect mortality, and vary depending on the decade and the underlying individual climate model (with individual model scenarios shown in pale traces, compared to the multi-model mean shown with thicker lines).

## Cutting emissions matters

Higher emissions scenarios, which include both higher temperatures and more extreme changes to precipitation patterns, project higher risks to forests across our results. Fire risk at the end of the century, in particular, is 3x lower under the low emissions scenario compared to the high emissions scenario. Reducing forest risk is thus yet another motivation for the already urgent need to cut emissions as soon as possible.

The link between global emissions and forest risks matters because forests have been proposed as a potential climate change mitigation strategy. While forests certainly provide carbon removal in many regions currently, their efficacy will likely be limited by the increasing risks described above. Due to this unfortunate chain of circumstances, the ability of forests to mitigate climate change will itself become more limited as climate change gets worse.

## Adaptation will be necessary

While our results stress the importance of reducing emissions, they offer a sobering lesson about the degree to which forest risks will increase irrespective of what climate action we take now. Considering just fire over the next 30 years, risks averaged over the US are projected to increase by a factor of 3x by 2050 regardless of emissions scenario — increases that are already being felt in the western US.<Cite id='abatzoglou.2016'/> With higher risks in the pipeline, our results underscore the importance of both rapid emissions mitigation to reduce risks as much as possible, but also adaptation planning to help limit damages from increasingly at-risk forests.

## Why open science

This research leveraged a growing ecosystem of powerful, cloud-based open source tools, enabling both speed and reproducibility.<Cite id='abernathey.2021'/> As we refined the underlying downscaled climate data, we were able to repeatedly rerun the model fitting and projections end-to-end, which would have been prohibitively resource-intensive without cloud-scale computing. All of our [software](https://doi.org/10.5281/zenodo.4741329) and the resulting [data products](https://doi.org/10.5281/zenodo.4741333) are available in public cloud storage, and all of our analysis relied on curated, publicly available datasets like the [Forest Inventory Analysis](https://www.fia.fs.fed.us/) and the [Monitoring Trends in Burn Severity](https://www.mtbs.gov/) datasets. All future projections, in particular, relied on public results from the international CMIP6 climate modeling community, which were uploaded to publicly-accessible cloud storage as part of the [Pangeo project](https://pangeo-data.github.io/pangeo-cmip6-cloud/).

As with all of our work, we aim to improve these methods and models over time, as we and others work on and better understand these problems. For an issue as important to the public as understanding future climate risk, we hope to keep demonstrating the value of doing the work in the open.

<Endnote label='Brief methods' divider>

Our work is described in detail in our [publication](https://doi.org/10.1111/ele.14018). Here we describe some of our methods in brief. Projections are based upon simulations from the Coupled Model Intercomparison Project Phase 6 (CMIP6). We used results from six global climate models (GCM) and unless otherwise stated all results reflect the multi-model mean. We produced risk projections on a 4km equal area grid for all regions in the continental US that were at least 50% forested in 2016 based on the [National Land Cover Database](https://www.mrlc.gov/data/nlcd-land-cover-conus-all-years). Depending on the risk, we produced either monthly (fire) or decadal (insects and drought) projections. We then aggregated projections to create rolling 20-year means of disturbance risk.

Our approach has a number of important limitations. First, these projections do not include any negative feedbacks — periods of low risk followed by disturbances — and thus likely overpredict risk integrated over long time scales. Second, these projections assume static forest composition and distribution over time, and thus do not include feedbacks between disturbances and subsequent forest growth. Third, they do not explicitly include any interactions among risks.

The underlying observational disturbance datasets are also a limiting factor, especially for insect and drought models, where we conservatively predict static risks for forest types where we could not establish robust historical models. The drought and insect projections may additionally underestimate risk because they do not account for non-linear impacts or novel pests and pathogens.

A more detailed description of our approach is available in the Methods and Datasets section of our [publication](https://doi.org/10.1111/ele.14018). All of our results are publicly available in [a Zenoodo archive](https://doi.org/10.5281/zenodo.4741333) or on Microsoft Azure (see our [dataset documentation](https://github.com/carbonplan/forest-risks#data-products)). We conducted the entire project under version control with the code freely accessible on GitHub to reproduce the [results](https://github.com/carbonplan/forest-risks) and [web map](https://github.com/carbonplan/forest-risks-web).

</Endnote>

<Endnote label='Credits' divider>

This work was highly collaborative, with all team members playing critical roles. Oriana led the fire modeling and helped develop the downscaled climate data, and Bill and Anna led the drought and insect modeling. Grayson developed the FIA processing pipeline and helped review the modeling work. Danny helped guide the framing and connections to policy. John and Jeff provided critical insights on the fire and drought / insect models, respectively. Jeremy implemented early versions of the models and helped guide the project. Joe architected the climate downscaling and technical infrastructure and helped guide the project as a whole. Oriana and Jeremy designed the web graphics. All authors contributed to reviewing the analysis and writing the article.

A journal article on this work has been published at Ecology Letters and can be cited as:

W R L Anderegg, O S Chegwidden, G Badgley, A T Trugman, D Cullenward, J A Abatzoglou, J A Hicke, J Freeman, J Hamman (2022) “Future climate risks from stress, insects and fire across US forests” Ecology Letters [doi:10.1111/ele.14018](https://doi.org/10.1111/ele.14018)

Please cite this web article as:

O S Chegwidden, W R L Anderegg, G Badgley, D Cullenward, J A Abatzoglou, J A Hicke, A T Trugman, J Freeman, J Hamman (2021) “Risks to forest carbon in a changing climate” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/forest-risks-explainer](https://carbonplan.org/research/forest-risks-explainer)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan received a grant from Microsoft AI for Earth to support this work. Microsoft did not exercise any control over the output. The authors are solely responsible for the content of this writeup, which does not reflect the views of Microsoft or any other individuals or organizations.

[William R.L. Anderegg](http://www.anderegglab.net/) is a professor at the University of Utah, [Grayson Badgley](https://www.gbadgley.com) is a Postdoctoral Scientist at Black Rock Forest and Columbia University, [Jeffrey A. Hicke](https://webpages.uidaho.edu/~jhicke/) is a professor at the University of Idaho, [John A. Abatzoglou](http://www.climatologylab.org/) is a professor at UC Merced, and [Anna Trugman](http://trugmanlab.geog.ucsb.edu) is a professor at UC Santa Barbara.

Article text and figures made available under a [CC-BY 4.0 International](https://creativecommons.org/licenses/by/4.0/) license. Implementation of interactive visualizations made available under an [MIT license](https://github.com/carbonplan/research/blob/main/LICENSE). Associated [analysis package](https://github.com/carbonplan/forest-risks) made available under an [MIT license](https://github.com/carbonplan/forest-risks/blob/main/LICENSE). Associated [map explorer](https://github.com/carbonplan/forest-risks-web) made available under [MIT license](https://github.com/carbonplan/forest-risks-web/blob/main/LICENSE).

</Endnote>
