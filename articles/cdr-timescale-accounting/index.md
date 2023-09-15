---
version: 1.0.0
title: Comparing carbon removal approaches that act over different timescales
authors:
  - Claire Zarakas
  - Grayson Badgley
  - Freya Chay
color: pink
date: 09-14-2023
summary: How should we compare carbon removal approaches that work on different parts of the carbon cycle at different timescales? We explore how understanding equilibration dynamics helps us compare different carbon removal approaches.
quickLook: Explaining time and carbon cycle dynamics across carbon removal methods
card: cdr-timescale-accounting
background: articles/023/clocks-blended
icon: articles/023/clocks-small-final
components:
  - name: TimeSeries
    src: ./components/time-series.js
  - name: TimeHorizon
    src: ./components/time-horizon.js
  - name: TableRecommendations
    src: ./components/table-recommendations.js
---

Defining a ton of carbon dioxide removal (CDR) seems straightforward – it requires taking a ton of CO₂ out of the air and storing it somewhere safely. [Direct air capture](https://carbonplan.org/research/cdr-verification) (DAC) easily maps onto this definition: removing 1 ton of CO₂ from the atmosphere and storing it underground yields 1 ton of CDR.

But defining a ton of CDR can become surprisingly tricky for technologies that don’t _directly_ pull CO₂ from the atmosphere, and instead remove atmospheric CO₂ by altering land and ocean processes. We are often asked questions about how to compare CDR approaches that differ in [permanence](https://carbonplan.org/research/ton-year-explainer), [measurability](https://carbonplan.org/research/cdr-verification-explainer), and the timescale over which removal occurs.

In this explainer, we outline how to compare CDR approaches that remove carbon from the atmosphere over different timescales. Thinking about CDR impacts over time can be disorienting because effects on atmospheric CO₂ depend on several equilibration processes that occur simultaneously. We can measure and reason about these dynamics using models and other scientific tools. But when we start comparing CDR effectiveness in applied settings, it can sometimes be challenging to tease these dynamics apart.

This explainer aims to make equilibration dynamics less confusing, and to help navigate some core conceptual issues around CDR accounting. We expect it to be practically relevant to current policy questions around how to credit CDR activities in carbon markets and how to gauge the potential scale of different CDR approaches.

## A primer on equilibration dynamics

Throughout this explainer, we use [direct air capture](https://carbonplan.org/research/cdr-verification) (DAC) and [direct ocean removal](https://carbonplan.org/research/cdr-verification/direct-ocean-removal) (DOR) as examples to illustrate what needs to be taken into account when comparing carbon removal approaches that affect the atmosphere on different timescales.<Sidenote>DOR may also be referred to as direct ocean carbon capture (DOC).</Sidenote> DAC uses machines to pull CO₂ out of the air, while DOR uses machines to pull CO₂ out of the ocean. Once the carbon is pulled from ocean water through DOR, that leaves space for atmospheric CO₂ to take its place. At first glance, DAC and DOR sound similar: both approaches capture and store CO₂ using machines. The key difference is that DAC _directly_ removes CO₂ from the atmosphere, while DOR removes CO₂ from the surface ocean and _indirectly_ removes carbon from the atmosphere.

Comparing DAC and DOR allows us to explore two factors that determine how carbon removal impacts the atmosphere. First, there can be delays between the time at which people do something to affect the carbon cycle and when atmospheric carbon removal ultimately happens (i.e., delays to removal). Second, whenever carbon is removed from the atmosphere, the rest of the global carbon cycle responds which ultimately feeds back on atmospheric CO₂ concentrations (i.e., carbon cycle feedbacks). It can be challenging to disentangle these two equilibration dynamics because they happen at the same time and can interact with each other. But if you can separate them and address each in turn, you can more clearly reason about the consequences of various CDR approaches.

Below, we walk through each of these dynamics in more detail, using a simple climate model to illustrate how they play out for DAC and DOR.

### Delays to removal

Some CDR approaches, like DAC, have an instantaneous relationship between deployment and atmospheric carbon removal. Approaches like DOR, on the other hand, exhibit a delay, triggering processes that remove CO₂ from the atmosphere over longer timescales. We refer to the time lag between the CDR activity and the actual reduction of atmospheric CO₂ as the “delay to removal.”

When DOR removes CO₂ from the surface ocean, it has not yet achieved carbon removal. Instead, it can take months or years to remove carbon from the atmosphere as the ocean reabsorbs CO₂ via [air-sea gas exchange](https://carbonplan.org/research/cdr-verification/docs/components/asg).

We can illustrate this delay using Hector, a simple climate model.<Cite id='hector'/> In Figure 1, we use a modified version of Hector to show how removing 1 GtCO₂ from the atmosphere via DAC and 1 GtCO₂ from the ocean via DOR results in different trajectories of atmospheric carbon removal over time.<Sidenote>In practice, accounting for CDR requires considering the net carbon removal from the atmosphere, incorporating the CO₂ emissions from a project’s energy use and materials. For the purposes of this explainer, we assume 1 GtCO₂ of DAC and DOR already accounts for lifecycle emissions. We also assume that both DAC and DOR successfully and permanently store removed CO₂.</Sidenote> In this simplified illustration, we isolate the impact of delays to removal and ignore large scale carbon cycle feedbacks.

<Figure>
  <TimeSeries feedbacks='off' />
  <FigureCaption number={1}>
    Cumulative removal of atmospheric CO₂ in response to removing 1 GtCO₂ from
    the atmosphere via <Purple>direct air capture</Purple> versus removing 1
    GtCO₂ from the ocean via <Pink>direct ocean removal</Pink>. The faster the
    air-sea equilibration occurs, the faster DOR takes up atmospheric CO₂ and
    the more DOR resembles DAC. Here, the atmospheric removal from DOR is
    calculated as the cumulative ocean carbon uptake under constant
    pre-industrial CO₂ concentrations without accounting for any carbon cycle
    feedbacks. {'  '}
  </FigureCaption>
</Figure>

As you can see in Figure 1, the more quickly and completely the surface ocean reabsorbs CO₂, the more DOR (pink) resembles DAC (purple) from the standpoint of the atmosphere.<Sidenote>The rate of air-sea equilibration actually depends on [several factors](https://doi.org/10.1002/2014GB004813) including wind speed, mixed layer depth, and carbonate chemistry. Here, we modify the rate of air-sea equilibration by varying wind speed in the model. This allows us to simulate the timescales of CO₂ drawdown found in more sophisticated modeling studies, but we would not expect wind speed to have as large an impact in a more sophisticated model.</Sidenote> The completeness of air-sea gas equilibration is a function of the rate of air-sea exchange and also surface residence times (how long CO₂-depleted water stays in contact with the atmosphere). If CO₂-depleted water is exported from the surface ocean to the deep ocean before it reabsorbs carbon from the atmosphere, the anticipated CO₂ drawdown will not happen until that water comes back to the surface, which could take up to 1,000 years.

In practice, air-sea equilibration rates and surface residence times are highly localized. This means that the effectiveness of DOR is location dependent and can be optimized by strategic deployment. If deployed in an optimal location, it is possible for DOR to be as effective as DAC and to fully equilibrate with the atmosphere within a year. But the reality is likely to be slower in many locations.<Cite ids={['bach.2023', 'he.2023']}/> For the remainder of this explainer, we use Hector’s default assumptions, which lead global-scale DOR to reabsorb 80% of of the initial CO₂ removal from the surface ocean after about four years. This is useful for illustrating the delay to removal dynamic, which applies to many CDR approaches and can be even more complex for other [open-system approaches](https://carbonplan.org/research/cdr-verification/enhanced-weathering). But we want to emphasize that this simple modeling approach would not be appropriate to quantify project outcomes or to set the quantitative standard for how to compare DAC and DOR.

### Carbon cycle feedbacks

Regardless of whether or not a CDR approach exhibits delays to removal, global carbon cycle feedbacks affect the net atmospheric response to the carbon removal activity over time. This is because the global carbon cycle is a collection of interconnected reservoirs – the atmosphere, ocean, land, and geosphere – that are continually passing carbon back and forth. Whenever we add CO₂ to the atmosphere, or take it out, the rest of the carbon cycle responds.

For example, burning fossil fuels moves carbon from the geosphere into the atmosphere. However, the CO₂ we emit into the atmosphere doesn’t all stay there. As the atmosphere equilibrates with other carbon reservoirs, a large share of emitted CO₂ is taken up by the land and surface ocean over the next decades to centuries. Over longer timescales (i.e., 1,000+ years), about a quarter of fossil CO₂ emissions remain in the atmosphere.<Cite id='joos.2013'/>

Likewise, when a CDR project removes carbon from the atmosphere, an analogous process occurs. Over time, the reduction in atmospheric CO₂ concentrations that results from CDR is compensated for by natural outgassing of CO₂ from ocean and land carbon reservoirs. These carbon cycle feedbacks occur across all CDR approaches, with their magnitude depending on the rate of ongoing emissions, the atmospheric CO₂ concentration, and global mean temperature.<Cite id='ipcc.ar6.chp5'/>

In Figure 1, we showed results from a model of DAC and DOR that ignored global carbon cycle feedbacks. In Figure 2, we show how carbon cycle feedbacks affect the net atmospheric response to DOR and DAC by running Hector with a coupled carbon cycle. For context, we also show the net atmospheric response to an emission pulse.

<Figure>
  <TimeSeries windSpeed='default' timeHorizon={100} emissions />
  <FigureCaption number={2}>
    Net atmospheric CO₂ response, including carbon cycle feedbacks, of removing
    1 GtCO₂ from the atmosphere via <Purple>direct air capture</Purple> versus
    removing 1 GtCO₂ from the ocean via <Pink>direct ocean removal</Pink>. By
    comparison, 1 GtCO₂ of <Grey>fossil emissions</Grey> would trigger carbon
    cycle feedbacks roughly equal and opposite to DAC. The magnitude of carbon
    cycle feedbacks is a function of atmospheric CO₂ concentration and global
    temperature.{' '}
  </FigureCaption>
</Figure>

With carbon cycle feedbacks, the initial atmospheric CO₂ removal from DAC (purple) is partially offset by natural outgassing of CO₂ from ocean and land carbon pools.<Cite ids={['ipcc.ar6.chp5', 'nerd.note']} /> The outcome for DOR (pink) is slightly more complex because two equilibration processes occur simultaneously: atmospheric CO₂ drawdown in response to the initial removal of CO₂ from surface ocean (i.e., local to regional delays to removal) and the global carbon cycle feedbacks in response to those changes in atmospheric CO₂ (i.e., global-scale carbon cycle feedbacks). These two dynamics combine to produce the modeled change in atmospheric CO₂.

If DAC and DOR remove the same amount of carbon from the atmosphere, it’s reasonable to assume that they will trigger near identical carbon cycle feedbacks. However, this assumption might not hold if a CDR approach modified or interacted differently with carbon cycle feedbacks when deployed at scale. For example, some research has found that the ocean outgases faster in response to afforestation than the biosphere outgasses in response to ocean alkalinity enhancement.<Cite id='sonntag.2018'/> These sorts of differences would require special consideration when making comparisons across CDR approaches. We anticipate future research will clarify the extent to which these types of discrepancies emerge in carbon cycle feedbacks and how to deal with them across approaches.

## Making comparisons

Delays to removal and carbon cycle feedbacks both determine how CDR interventions influence atmospheric CO₂ over time. However, when quantifying CDR outcomes and making comparisons between CDR approaches, it’s helpful to think about these equilibration dynamics separately. We have three recommendations to guide fair comparisons:

<Figure>
  <TableRecommendations />
</Figure>

Below, we explore how these recommendations apply to making CDR comparisons in market and policy contexts.

### Comparisons in a market context

In a market context where actors receive “credit” for their activities — leaving aside whether or not such systems are a useful way to fund CDR — we recommend dealing with delays to removal by only crediting CO₂ removal after it has already occurred. Leading market actors already operate in an _ex-post_ world where CDR is “delivered” not at the time of the CDR activity but rather at the time of atmospheric carbon removal.<Sidenote>[Frontier](https://frontierclimate.com/), for example, only pays for tons via offtake agreements if and when tons are delivered.</Sidenote> This means that for any year following deployment, credit should be given only for the marginal amount of atmospheric removal that has occurred during that year. For the example in Figure 1, the DAC deployment would immediately yield 1 GtCO₂, whereas the DOR deployment would yield 0.36 GtCO₂ in the first year, an additional 0.23 GtCO₂ in the second year, and so on.

Additionally, we recommend that carbon cycle feedbacks that are shared across all CDR approaches should not be included in the quantification of CDR if the purpose is to mint credits that can be used in emissions accounting. As long as CDR is used to compensate for ongoing, hard-to-abate emissions in a net-zero framework, excluding carbon cycle feedbacks would be consistent with existing frameworks for fossil fuel emissions accounting. When accounting for emissions, one ton of emissions describes the anthropogenic flux of CO₂ into the atmosphere, rather than the net atmospheric response after carbon cycle feedbacks have played out. When comparing CDR with emissions, one ton of CDR should similarly describe the initial removal flux from the atmosphere.<Sidenote>From a carbon cycle perspective, emissions and CDR are fungible only if they happen at the same time. Emissions and removals that are separated in time can exhibit asymmetrical carbon cycle and climate responses, such that more than one ton of CDR would be needed to compensate for one ton of emissions. See [Zickfeld et al. (2021)](https://doi.org/10.1038/s41558-021-01061-2).</Sidenote>

If some CDR approaches modify or interact differently with carbon cycle feedbacks when deployed at large scales, further work will be needed to determine appropriate comparisons. For example, the Kanzaki et al. (2023) approach of modeling the fully coupled carbon cycle response of enhanced weathering in comparison to DAC would capture any carbon cycle responses that are unique to enhanced weathering and not shared across all CDR approaches. We expect that normalizing across such differences would be the responsibility of those developing standards and governance around CDR crediting.

In practice, all of these recommendations rest heavily on rigorous [monitoring, reporting, and verification](https://carbonplan.org/research/cdr-verification-explainer) (MRV). MRV standards and systems of governance are needed to ensure that communities working on different CDR approaches are quantifying tons of carbon removal as consistently as possible. Until such standards exist, we encourage CDR buyers to use _ex-post_ crediting and encourage CDR projects to publicly document their MRV approaches — including their modeling choices and whether and how they account for carbon cycle feedbacks. We anticipate that increased transparency will lead to more consistent norms across different communities of practice.

### Comparisons in a policy context

The policy context differs from the market context because policy decisions sometimes require a forward-looking (i.e., _ex-ante_) perspective, focusing less on what has already happened and more on what will happen in the future. This introduces more complexity when it comes to comparing CDR approaches with different timescales of removal.

Figure 3 explores two issues that require careful navigation when comparing CDR approaches in a forward-looking context, using the same example of large-scale deployment of DAC and DOR.

First, comparisons require normalizing across different timescales of atmospheric carbon removal. In Figure 3, you can use the slider to see how the choice of a time horizon changes the apparent efficacy of DOR in comparison to DAC. The longer the time horizon, the less near-term differences in atmospheric outcomes matter, which makes CDR approaches with different delays to removal look more similar.

Second, you need to choose what metric to compare at any given time horizon. Two potential options include the cumulative removal flux or the net change in atmospheric CO₂, as shown in Figure 3. The cumulative removal flux is the total carbon removed from the atmosphere (as quantified at the time of removal) without taking into account any carbon cycle feedbacks, and the net change in atmospheric CO₂ reflects the atmospheric response with global carbon cycle feedbacks included. A fair comparison must either compare cumulative removal fluxes from DAC and DOR without taking into account carbon cycle feedbacks (i.e., dark lines in Figure 3), or compare the net atmospheric impact of DAC and DOR after carbon cycle feedbacks play out (i.e., light lines).

<Figure>
  <TimeHorizon />
  <FigureCaption number={3}>
    The choice of time horizon influences the apparent efficacy of removing 1
    GtCO₂ from the atmosphere via <Purple>direct air capture</Purple> versus
    removing 1 GtCO₂ from the ocean via <Pink>direct ocean removal</Pink>.
    Darker shades indicate the cumulative removal flux (i.e., carbon cycle
    feedbacks off), and lighter shades indicate the net change in atmospheric
    CO₂ (i.e., carbon cycle feedbacks on). {'  '}
  </FigureCaption>
</Figure>

Deciding how to normalize impacts over time is inherently subjective, and it can significantly impact the extent to which policy incentives favor different CDR approaches.<Sidenote>This issue of normalizing over time isn't a new problem for climate policy — in fact, it shares many of the same challenges found in ongoing and often contentious discussions about how to fairly compare the global warming potential (GWP) of greenhouse gases that have different intensities and lifetimes.</Sidenote> For example, imagine a deployment tax credit paid out at the time of CDR deployment (for DOR, when carbon is removed from the ocean) rather than when atmospheric removal occurs. In this context, the shorter the time horizon of comparison, the more this type of tax credit would favor DAC over DOR.

Comparisons could also be unfair if they do not treat carbon cycle feedbacks consistently across methods, for example, if different communities of practice converge on different (often implicit) norms for modeling. Some communities run emissions-driven simulations (i.e., including carbon cycle feedbacks), while others run concentration-driven simulations (i.e., carbon cycle feedbacks ignored). These types of inconsistencies could unintentionally skew decision making in a policy context. Imagine a policymaker comparing an economically-oriented DAC feasibility study that does not account for carbon cycle feedbacks with a climate modeling study that quantifies the net atmospheric response of a large-scale DOR deployment using emissions-driven simulations. Comparing numbers from these two studies would count carbon cycle feedbacks against DOR but not against DAC, potentially leading policymakers to overestimate how much more effective DAC is compared to DOR.

## Conclusion

Scientists, governments, and startups are exploring a wide range of approaches for removing carbon from the atmosphere, which will require fair comparisons of different approaches. Above all else, it's critical that comparisons across CDR pathways treat delays to removal and carbon cycle feedbacks with transparency and consistency.

If you're interested in learning more about the modeling approach we used here, be sure to [check out our extended methods and code on GitHub](https://github.com/carbonplan/normalizing-cdr-accounting). Please reach out to us with any questions or comments!

<Endnote label='Acknowledgements'>

Thanks to Matt Long, Alicia Karspeck, and David Ho from [[C]Worthy](https://cworthy.org/) for helpful comments on drafts of this article. Thanks to Kalyn Dorheim and Ben Bond-Lamberty at the Pacific Northwest National Laboratory, the developers of Hector, for feedback on our experimental design.

</Endnote>

<Endnote label='Credits'>

Claire performed the analysis. Claire, Freya, and Grayson wrote the article. Claire and Kata designed the figures.

Please cite this web article as:

C Zarakas, G Badgley, F Chay (2023) “Comparing carbon removal at different timescales" CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/cdr-timescale-accounting](https://carbonplan.org/research/cdr-timescale-accounting)</span>

</Endnote>

<Endnote label='Terms'>
  This work was [funded in part](https://carbonplan.org/funding) by grants from
  the Patrick J. McGovern Foundation and ClimateWorks. Article text and figures
  made available under a [CC-BY 4.0 International
  license](https://creativecommons.org/licenses/by/4.0/).
</Endnote>
