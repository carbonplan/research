---
version: 1.0.0
title: Does enhanced weathering work? We’re still learning.
authors:
  - Tyler Kukla
  - Tim Jesper Suhrhoff
  - Shane Loeffler
  - Kata Martin
  - Freya Chay
date: 3-18-2024
summary: There are lots of carbon removal estimates for enhanced weathering in the scientific literature, but making sense of them is hard. We synthesized these estimates to clarify the current state of the science and grapple with its limitations.
quickLook: A synthesis of carbon removal estimates from the enhanced weathering literature
color: grey
card: enhanced-weathering-fluxes
background: articles/025/slovenia
icon: articles/025/slovenia-small
components:
  - name: ErwEstimates
    src: ./components/erw-estimates.js
  - name: ScatterChart
    src: ./components/scatter-chart.js
  - name: ErwEfficiencies
    src: ./components/erw-efficiencies.js
  - name: Diagram
    src: ./components/diagram.js
  - name: SpatialBoundary
    src: ./components/spatial-boundary.js
  - name: TemporalBoundary
    src: ./components/temporal-boundary.js
  - name: HatchingKey
    src: ./components/hatching-key.js
---

Just spread crushed up rock over a field, wait for it to dissolve, and (hopefully) atmospheric CO₂ will be sequestered. Enhanced rock weathering for carbon dioxide removal seems simple enough. And its simplicity as a climate solution is understandably garnering [media](https://heatmap.news/podcast/shift-key-episode-4-enhanced-rock-weathering) [attention](https://www.bbc.com/news/science-environment-65648361): it doesn’t require a lot of new technology; the infrastructure for crushing, transporting, and spreading rock already exists; and there is a lot of land, especially farm land, available to scale it up quickly.

But physical infrastructure is not the only thing that determines whether enhanced rock weathering is feasible. Scientists and carbon removal companies are still figuring out how quickly we can expect spreading rock to result in carbon removal, and how the scale of that removal compares to the emissions produced by the project itself. And there is unlikely to be a universal answer.

That’s because enhanced rock weathering outcomes [depend on a wide range of variables](https://carbonplan.org/research/ew-quantification-explainer), and what results in net carbon removal in one setup might not work everywhere else. Moreover, important aspects of the carbon cycle and its intersection with weathering remain poorly understood, and there is still a lack of widespread agreement about the right way to count how much carbon gets removed. These challenges can make carbon removal estimates from enhanced weathering studies hard to interpret. It’s tempting to treat these results as answers that tell us if enhanced weathering works at scale. But doing so misses the nuance that makes the estimates more limited — and, arguably, more useful.

To provide context on the existing science, we drew on a [public database](https://tinyurl.com/ERWlit) of enhanced weathering research papers to compile more than 100 carbon removal estimates and the factors that influence them. The removal estimates span four orders of magnitude and represent a wide range of analytical and operational choices. Below, we discuss four patterns that illustrate why care should be taken when interpreting these estimates or using them to make broader inferences about enhanced weathering’s efficacy. While enhanced weathering might seem easier than other carbon removal approaches logistically, quantifying its impact on the atmosphere is far from straightforward.

## What we did

We compiled carbon removal estimates from the existing enhanced weathering literature and collected associated data to help characterize how the underlying studies are alike or different. The resulting dataset is downloadable as a [CSV file](https://carbonplan-carbon-removal.s3.amazonaws.com/enhanced-weathering-fluxes/v1.0/dataset.csv) with [metadata](https://carbonplan-carbon-removal.s3.amazonaws.com/enhanced-weathering-fluxes/v1.0/metadata.csv).

<Figure>
  <Diagram />
  <FigureCaption number={1}>
    Summary of the key variables we gathered to characterize each enhanced
    weathering carbon removal estimate in the dataset.
  </FigureCaption>
</Figure>

The starting point for this compilation was Tim Jesper Suhrhoff’s [public database](https://tinyurl.com/ERWlit) of enhanced rock weathering papers. In our analysis, we included the terrestrial and agricultural papers and preprints from that database that were available online on or before January 2024, and we filtered them by three key criteria. First, the paper presents a carbon removal estimate that can be interpreted in terms of a carbon flux (i.e., a mass of carbon removed per area per time).<Sidenote>Papers that present results as emissions per unit of CO₂ removed (e.g., [Lefebvre et al., 2019](https://doi.org/10.1016/j.jclepro.2019.06.099) or mass of CO₂ removed per mass of soil (e.g., [Haque et al., 2019](https://pubs.acs.org/doi/10.1021/acsomega.8b02477)) were excluded.</Sidenote> Second, the underlying experiment explicitly accounts for the rock weathering process rather than modeling the result of assumed weathering.<Sidenote> Studies that sidestep the weathering process were excluded, including modeling studies that calculate the carbon transport capacity of rivers (e.g., [Zhang et al., 2022](https://aslopubs.onlinelibrary.wiley.com/doi/full/10.1002/lno.12244)) and studies that calculate weathering based on the potential removal capacity of a feedstock (e.g., [Jia et al., 2022](https://doi.org/10.1016/j.resconrec.2021.105910)).</Sidenote> Third, the estimate reflects carbon removal that is directly caused by chemical weathering of the rocks, and not indirect removal from the impact of weathering on organic carbon stocks.<Sidenote> See, for example, [Goll et al., 2021](https://doi.org/10.1038/s41561-021-00798-x) and [Taylor et al., 2021](https://doi.org/10.5194/bg-18-169-2021), which include biomass changes in their removal estimate. These were excluded because the durability of such biomass storage is debated.</Sidenote> These constraints narrowed the original database of 174 papers down to 32, with most papers containing multiple carbon removal estimates under different conditions.

For each estimate, we used a set of qualitative and quantitative characteristics to describe the underlying experiment (Figure 1), including the type of estimate (model, laboratory, or field study), the time horizon of analysis, and details about the rock application (such as the feedstock type, particle diameter, and application rate).<Sidenote>Where available, we also recorded the specific surface area of the feedstock.</Sidenote> Additionally, we noted how carbon removal calculations were influenced by two key accounting choices: the "removal threshold" defining where in the soil or watershed carbon is considered removed from the atmosphere, and the "accounting boundary" indicating if the estimate considers potential inefficiencies from upstream, weathering site, or downstream processes.

Wherever possible, our compilation reflects data as it was directly reported in the papers we analyzed.<Sidenote>In some cases, we used a [graphclick software](https://apps.automeris.io/wpd/) to extract the relevant information and noted it in the compilation.</Sidenote> However, there are a few areas in which we did extra work to harmonize the presentation of results.

First, we converted all estimates to the common units of tons of CO₂ removed per hectare per year (tCO₂ / ha / yr). For papers that presented a removal flux in different units (e.g., kgCO₂ / m² / yr), the conversion is straightforward. In rare cases, the paper presented only a carbon removal rate (e.g., tCO₂ / yr), but we were able to convert the rate to a flux by accounting for the spatial footprint of the experiment. More commonly, a paper presented removal in terms of the mass per area (e.g., tCO₂ / ha), in which case we converted the result to mass per area per year by accounting for the duration of the experiment. Such extrapolation can lead to anomalously high annual fluxes for experiments run over a short time interval since weathering rates are often highest in the first weeks of an experiment.<Cite ids={['amann.2022', 'vanderkloot.2023', 'wood.2023']} /> In the dataset, out of 116 total data points, there are 10 estimates with a time horizon of less than 3 months and 35 span less than 6 months.

For each removal estimate, we also noted the maximum potential carbon removal per ton of rock based on its geochemistry. For studies that did not report maximum potential removal, we derived it from the chemical composition of the rock using the modified Steinour equation presented in Renforth (2012).<Cite ids={['renforth.2012', 'sidenote.1']} /> Although there are multiple ways to perform this calculation, we chose this approach for consistency with the majority of papers that did report maximum potential carbon removal. Where needed, we used the maximum removal as an upper bound on our extrapolations (for example, when extrapolating sub-annual studies to annual rates).

Altogether, the compiled data provide a snapshot of the carbon removal estimates currently scattered across the literature, along with a basic framework for identifying the similarities and differences in the underlying studies.

## What we found

The most striking result is that the compiled carbon removal estimates span more than four orders of magnitude (Figure 2). This massive span could be explained by a number of factors. Distinct climate and environmental conditions will certainly affect carbon removal outcomes, though in global models that simulate these factors, the variability in removal is generally much smaller (within ~1 order of magnitude).<Cite ids={['beerling.2020', 'baek.2023']} /> Another factor that could explain the spread is the diversity of experimental designs.

<Figure>
  <ErwEstimates />
  <FigureCaption number={2}>
    This histogram shows carbon removal flux estimates that span more than four
    orders of magnitude. Estimates in the “none” <HatchingKey /> category are
    consistent with no removal, meaning the removal estimate or its uncertainty
    bound is not strictly positive.
  </FigureCaption>
</Figure>

Many decisions that go into designing an enhanced weathering study influence the resulting carbon removal estimates. For example, lab experiments are often optimized for fast dissolution, but this is much harder to do in a field study where inefficiencies can be more prevalent.<Cite id='calabrese.2022' /> Similarly, the type of rock and its grain size might be determined by what’s readily available for field studies, but the “virtual” rocks in model-based studies have no such constraints. Through this lens, the variability in Figure 2 indicates that enhanced weathering studies are exploring many approaches to expand the body of knowledge. That is useful. But it also means care is required when drawing more general conclusions from any one estimate. Below, we walk through the experimental details that could explain some of this variability, and offer four takeaways to help shape the way we interpret and talk about the enhanced weathering literature.

### 01 — Not all estimates report successful carbon removal

Since rock weathering is a natural process known to take carbon out of the atmosphere over geologic timescales, it’s easy to assume that enhanced rock weathering will do the same thing, just faster. However, as noted in Figure 2, some of the estimates we compiled don’t actually report carbon removal. In twelve out of 116 cases, the estimate or its uncertainty range is consistent with zero removal — or even net emissions. For some estimates, that happens because the weathering signal was too small or the analytical precision was too low.<Cite ids={['haque.2020', 'larkin.2022', 'deng.2023', 'dietzen.2023', 'welbel.2023', 'buckingham.2024']} /> In others, the signal appears in some but not all measured variables and a model is used to derive the final carbon removal estimate.<Cite ids={['kelland.2020', 'vienne.2022']} /> Less common, the carbon removal from weathering is not enough to outweigh the emissions from conducting the project.<Cite ids={['rinder.2021', 'taylor.2021', 'sidenote.2']} />

These “null results” are a minority of compiled estimates, but the bias toward publishing positive results<Cite id='fanelli.2012' /> tells us they should not be ignored. Detecting a signal above the noise and balancing project emissions with carbon removal are likely to present real challenges for enhanced weathering deployments, and these problems require different solutions.<Cite ids={['rinder.2021', 'reershemius.2023a', 'reershemius.2023b', 'wolf.2023']} hide={[true, false, false, false]} /> Improving measurement approaches or making the weathering signal bigger may address signal-to-noise issues in some contexts. And ensuring that removals outweigh upstream emissions requires site-specific life-cycle assessment, which may reveal that certain setups are not feasible. These challenges affect different components of enhanced weathering operations and, as it stands, they have no simple solution.

### 02 — Carbon removal efficiency can be low on short timescales

Rocks applied for enhanced weathering often dissolve slowly or incompletely. Based on the chemistry of the rock and the quantity applied, we compared each estimate’s maximum potential carbon removal against the carbon removal observed by the study.<Sidenote>“Maximum potential removal” assumes (near) perfect efficiency. It does not account for any emissions associated with the project activity, nor any natural processes except degassing of CO₂ from rivers and oceans as accounted for in the Renforth, (2012) equation.</Sidenote> Higher “removal efficiency” occurs when a larger fraction of the rock has weathered and upstream or downstream losses (if accounted for) are small. Because rocks weather over time, the removal efficiency depends on how much time has passed since the rock was applied.

Figure 3 shows the removal efficiency for each estimate within one year of application. We focused on the annual efficiency to offer a common temporal baseline and because most studies apply rock each year. We also calculated efficiency based on the duration of each study (see the [dataset](https://carbonplan-carbon-removal.s3.amazonaws.com/enhanced-weathering-fluxes/v1.0/dataset.csv)), and the results are very similar. With either framing, we found that the estimated carbon removal was often less than 10% of the maximum potential removal — and many estimates were well below 1%. The efficiency would be even lower if we did not account for the 15% loss in the maximum potential calculation.<Cite id='sidenote.1' hide={[true]} />

<Figure>
  <ErwEfficiencies>
    <FigureCaption number={3}>
      The efficiency of enhanced weathering carbon removal, defined as the
      percentage reported compared to the project’s theoretical maximum carbon
      removal. This efficiency is shown for each estimate as a single bar.
      Switch from a %%linear%% to %%logarithmic%% scale to see the lowest
      efficiency estimates in more detail.
    </FigureCaption>
  </ErwEfficiencies>
</Figure>

The most efficient estimates are those where the largest fraction of material weathers. These usually involve laboratory conditions or models designed for fast dissolution that have not yet been replicated in the field.<Cite ids={['deng.2023', 'rinder.2021', 'dietzen.2018', 'haque.2023', 'khalidy.2023']} hide={[true, true, false, false, false]} /> Meanwhile, studies with lower efficiency estimates have noted that only a small fraction of the applied material dissolves each year, with dissolution continuing for years to decades after application.<Cite ids={['baek.2023', 'cipolla.2021', 'vink.2023']} hide={[true, false, false]} /> Across the dataset, the speed at which rock dissolves is a primary limitation on the carbon removal efficiency.

These time dynamics primarily impact _how fast_ carbon gets removed, rather than _how much_. On the one hand, this could be viewed positively: for studies reporting low efficiency, there could be a long tail of unobserved carbon removal. On the other hand, speed matters, both from the perspective of the climate and from the perspective of enhanced weathering companies. Slow dissolution may cause financial strain if companies spend money to spread rock but get paid when atmospheric carbon removal occurs. Moreover, if credits are issued based on models that inaccurately capture slow dissolution, the credits' removal claim could fail to reflect real atmospheric outcomes. Slow dissolution also means that annual rock application could be unsustainable if unweathered material builds up with time. Such buildup might impact soil hydrology, limit weathering efficiency, and result in soil pH increasing above desired levels. Avoiding these consequences could mean less carbon removal compared to published estimates that assume long-term annual application despite incomplete weathering.<Cite ids={['beerling.2020', 'baek.2023', 'kantzas.2022']} hide={[true, true, false]} />

### 03 — Studies represent a wide range of operational decisions

Operational decisions like choosing a rock application rate or grain size come with trade-offs. Applying a lot of rock and grinding it very finely both tend to increase annual carbon removal fluxes — this has been documented across a number of studies.<Cite ids={['baek.2023', 'haque.2020', 'deng.2023', 'dietzen.2023', 'rinder.2021', 'tenBerge.2012']} hide={[true, true, true, true, true, false]} /> But sourcing more rock and grinding it more finely both cost more money and, critically, also use more energy and produce more upfront deployment emissions.<Cite ids={['renforth.2012', 'bond.1961a', 'bond.1961b', 'moosdorf.2014', 'strefler.2018', 'zhang.2023']} hide={[true, false, false, false, false, false]} /> And even if total weathering fluxes increase, applying more rock can result in lower efficiency, causing a smaller fraction of the total rock applied to weather each year. Enhanced weathering deployments therefore have to balance how much carbon they remove with the emissions resulting from these operational decisions.

Focusing on these variables highlights a limitation of our approach — aggregating the data makes it difficult to compare the carbon removal estimates to any one variable, like particle size, while controlling for everything else. Different experimental conditions will mask the well-documented effects of particle size and application rate found in more controlled studies.

In Figure 4, you can explore how the compiled carbon removal estimates relate to the particle diameter and the application rate of the rock. The scattered data demonstrate that these are not the only variables that affect enhanced weathering outcomes. Others, like soil conditions, climate, rock type, and more, contribute to the variability. That’s not to say the effects of particle size and application rate are absent. Indeed, the highest removal fluxes generally use finer particles and higher application rates, and finer particles also correspond with the highest removal efficiencies (not shown). But confounding variables clearly cannot be ignored, making removal estimates hard to directly compare to each other on the basis of just one or two variables alone.

<Figure>
  <ScatterChart>
    <FigureCaption number={4}>
      Scatterplot of estimated carbon removal compared to the
      %%particle_diameter%% and the %%application_rate%% of the applied rock.
      These plots aggregate many different experimental conditions, masking the
      importance of particle size and application rate in controlled settings.
      Nonetheless, the highest removal fluxes generally have smaller particle
      sizes and higher application rates, indicating these decisions can open
      the door to more carbon removal in the right conditions. Switch between
      %%linear%% or %%logarithmic%% scale to further explore the data.
    </FigureCaption>
  </ScatterChart>
</Figure>

Another caveat of our analysis is that many scientific studies don’t reflect common field practices, in part because they don’t have the same economic optimization challenges as a real deployment. For example, all estimates with application rates exceeding 1,000 tons / ha / yr come from laboratory experiments where powdered rock was added to some form of weathering reactor. At such small scales, it is reasonable (and useful) to probe end-member conditions such as extreme rock application rates. But recent field trials have applied much less rock — around 40-50 tons per hectare per year, which amounts to a layer about a couple of millimeters thick. And even these application rates could be considered high by some. Farmers that use crushed limestone to manage soil pH often apply 1-10 tons per hectare, or less.<Cite ids={['mamo.2009', 'mallarino.2013', 'goulding.2016', 'tripney.2021']} />

At this stage, it is too early to know how much of the extreme variation in Figure 4 will be reflected in real enhanced weathering deployments. Models and laboratory studies are inherently limited in their ability to represent field conditions. Meanwhile, field estimates make up less than 20 percent of the compiled data, and industry constraints could lead to deployment choices that are very different from the academic literature. Extrapolating industry-wide outcomes from the current science cannot yet be done with confidence — there’s support for nearly any answer. This limitation underpins the importance of making data from early deployments publicly available.

### 04 — Studies use diverse definitions of “removal”

The studies we analyzed all report an estimated carbon removal flux, but they don’t always agree on how to define it. This is not surprising. There aren’t yet widely accepted standards around carbon accounting in the enhanced weathering community and, even if there were, it might not be appropriate for academic studies to use them. In many cases, how a study counts carbon removal will hinge on its analytical methods — lab, field, and modeling studies may each track carbon differently over space and time. Because studies use diverse accounting approaches, the carbon removal results they report cannot always be directly compared to each other.

All enhanced weathering studies make choices about potential inefficiencies they will consider in their estimation of carbon removal. We represent this choice via the accounting boundary (Figure 5). Most of the estimates we compiled do _not_ reflect upstream emissions or downstream inefficiencies. They focus strictly on carbon removed from weathering alone (the “none” group), or inefficiencies that occur at the weathering site, such as chemical reactions that release carbon or fail to sequester it (the “local” group). A handful of studies account for these local inefficiencies and then go a step farther. Some incorporate either observed or estimated effects of downstream processes in rivers and oceans (the “downstream + local” group). Theoretically, these processes could increase or decrease net carbon removal depending on the specific environment in question, but many studies simply apply a ~15% haircut to account for potential downstream losses of captured carbon. Very few studies incorporated the upstream emissions associated with sourcing and applying the rock (the “upstream + local” group). Including them would strictly decrease the reported net carbon removal achieved.

Notably, none of the studies we analyzed tracked carbon mechanistically across the entire downstream reach. Some studies that did not meet our selection criteria do attempt to assess CO₂ leakage in rivers and oceans, but each study usually only looks at one component of the weathering-transport-storage cascade. A clear, mechanistic source-to-storage tracking approach for weathering products has yet to emerge.

<Figure>
  <SpatialBoundary />
  <FigureCaption number={5}>
    Carbon removal estimates use a wide range of spatial boundaries when
    accounting for processes that decrease net removal. Some estimates include
    no inefficiencies (“none”), some only consider local losses that occur at
    the site where the rock weathers (“local only”), some also account for
    project activities that happen before the rock is spread (“upstream +
    local”), and some account for the carbon losses that can occur after the
    carbon leaves its weathering site (“downstream + local”).
  </FigureCaption>
</Figure>

The boundary decision that seems to have the largest effect is where the carbon must go — or how disconnected it should be from the atmosphere — before it counts as removed. We refer to this as the “removal threshold.” This boundary matters because we usually consider the carbon to be durably removed<Sidenote>“Durable” in this context means the carbon remains out of the atmosphere for a long time, usually more than 1,000 years. </Sidenote> when it reaches the ocean. But it can take years or decades<Cite id='kanzaki.2024p' /> to get there, and most studies don’t wait that long. On shorter time horizons, you’re likely to count more carbon at the soil than in the ocean.

In Figure 6, we map different removal thresholds onto the carbon removal estimates. These thresholds can be thought of as different signposts the carbon crosses as it moves from the atmosphere to its final storage reservoir. Some estimates count the carbon as removed at the first step, the moment it leaves the atmosphere and enters the soil (the “soil” group). Some wait until it has leached beneath some shallow depth (the “shallow” group), or a deeper threshold defined here as greater than 50 cm (the “deep” group). Others wait for the carbon to reach the nearest stream or river (the “river” group). In most cases this decision is based on the study design — it’s not a normative indication of when the removal _should_ count. Many of the shallow estimates, for example, are laboratory experiments that measure the chemistry of water after it leaches out of a shallow weathering reactor. Many of the soil estimates are from models where it is easy to track soil carbon and its exchange with the atmosphere.

Nonetheless, the estimates that count the carbon once it is exported from the deep soil are among the lowest removal estimates in the dataset (Figure 6). That’s because, in the short time horizon of most studies, very little of the dissolved atmospheric carbon makes it that deep.<Cite ids={['deng.2023', 'cipolla.2021']} hide={[true, true]} /> For example, Cipolla et al., (2021)<Cite id='cipolla.2021' hide={[true]} /> found that about 1,000 times more carbon entered the soil due to enhanced weathering compared to what leached below 80 cm depth over five years. They only counted the leached carbon because it’s less connected to the atmosphere and to topsoil that is heavily influenced by agriculture, so it’s more likely to stay removed. Of course, local factors can increase how quickly carbon moves through the soil. The sole river estimates come from Larkin et al., (2022),<Cite id='larkin.2022' hide={[true]}/> which attempted to measure removal in stream discharge from steep catchments with high water infiltration rates. These factors tend to help carbon move through the soil faster, though Larkin et al. only detected net carbon removal at one of their three sites.

<Figure>
  <TemporalBoundary />
  <FigureCaption number={6}>
    There is no single definition for when we count the carbon as removed. This
    histogram shows the carbon removal estimates with a dropdown menu to group
    them by their removal threshold. “Soil” means the carbon is counted as soon
    as it exits the atmosphere, “shallow” means it surpasses a set depth in the
    column that is less than 50 cm, “deep” means it surpasses 50 cm, and “river”
    means the carbon is exported to a river or stream before it’s counted. The
    “deep” threshold contains many of the lowest estimates in the dataset.
  </FigureCaption>
</Figure>

One boundary decision that separated a small number of estimates involves what _kind_ of carbon counts. Most studies counted the carbon that was dissolved in water since that’s the carbon that (hopefully) ends up being durably stored in the ocean. But some studies also counted the carbon that ended up forming solid carbonate minerals in the soil, arguing that this is a durable reservoir, too.<Cite ids={['haque.2020', 'vienne.2022', 'haque.2023', 'khalidy.2023', 'guo.2023']} hide={[true, true, true, true, false]} /> Debate continues as to whether this solid carbonate is durable. Its effects on carbon removal depend on many factors, including whether it dissolves later and by the same chemical pathway; whether the field gets a lot of fertilizer; and whether the project itself creates the conditions for the carbonate to stay undissolved. These challenges, and many others, are still being investigated. For now, it’s notable that even basic questions like “what kind of carbon counts?” have no simple answer.

## Takeaways

Stepping back, it’s clear that we are still in the early stages of learning about enhanced weathering. As results continue to roll in, we would encourage caution when interpreting carbon removal estimates in the literature.

As this analysis illustrates, estimates of carbon removal from enhanced weathering studies embed significant variability into analytical approaches and the details of rock application. There is also significant variability connected to the accounting frameworks used to define what counts as carbon removal and when. But, at this stage we believe this diversity is a feature of the scientific literature, not a flaw. It means researchers have the flexibility to design projects to fit their expertise and, consequently, that more conditions get studied. In the face of vast uncertainty around which deployment conditions are reasonable, which methods are best, and how removal should be counted, even a deep dive into the literature is unlikely to surface a single best answer.

Today, any estimate — no matter how well it captures the challenges of real enhanced weathering deployments — will be limited both by known-unknowns and potential unknown-unknowns. Some are related to challenges like downstream losses, <Cite ids={['michalopoulos.1995', 'knapp.2022', 'rahman.2023']} /> the role of biology,<Cite ids={['brantley.2011', 'liu.2018', 'vicca.2022']} /> and the impact of enhanced weathering on natural weathering processes.<Cite ids={['bach.2024']} /> All of these factors clearly require more research. Today’s experiments are fundamental to building the body of work that we need to understand how and where enhanced weathering works. But, at least for now, major caveats come with any given answer.

Moving forward, we hope research starts to more systematically disentangle the observed variability and reconcile carbon removal estimates across lab, field, and modeling studies. Doing so will require industry and scientific research to progress in step, and for all results — including null results — to be shared openly. We recommend that data sharing be more formally established as a basic expectation for any enhanced weathering deployment, and look forward to supporting continued efforts to make public data more accessible and interpretable.

<Endnote label='Credits' divider>

Tyler performed the analysis and wrote the first draft of the article. Jesper developed the underlying database of enhanced weathering papers. Jesper and Freya helped write and edit the article. Tyler, Shane, Kata, and Freya designed the figures, and Shane and Kata built them.

Please cite as:

T Kukla et al. (2024) “Does enhanced weathering work? We’re still learning.” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/enhanced-weathering-fluxes](https://carbonplan.org/research/enhanced-weathering-fluxes)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan’s work on this explainer was supported by a [grant](https://carbonplan.org/funding) from the Patrick J. McGovern Foundation. No one except the authors exercised control over the research process or products. The authors are solely responsible for the content of this article, which does not reflect the views of any other individuals or organizations.

Article text, figures, and underlying data made available under a [CC BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

</Endnote>
