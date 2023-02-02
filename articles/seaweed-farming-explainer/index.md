---
id: seaweed-farming-explainer
version: 1.0.0
date: 03-16-2022
color: teal
title: Mapping seaweed farming potential
authors:
  - Julianne DeAngelo
  - Steven Davis
  - Benjamin Saenz
  - Isabella Arzeno-Soltero
  - Matthew Long
  - Christina Frieder
  - Kristen Davis
  - Kata Martin
  - Freya Chay
  - Jeremy Freeman
  - Joseph Hamman
card: seaweed-farming-explainer
background: articles/014/seaweed
quickLook: A new tool for exploring seaweed-based CDR and biomass products
summary: We developed an interactive tool for mapping the potential of seaweed farming for carbon removal and biomass products. Read this article, explore the interactive map, or read the associated preprints to learn more.
icon: articles/014/seaweed-small
links:
  - label: Map tool
    href: /research/seaweed-farming
  - label: 'Preprint #1'
    href: https://doi.org/10.31223/X5PG9V
  - label: 'Preprint #2'
    href: https://doi.org/10.31223/X52P8Z
  - label: Followup blog post
    href: /blog/seaweed-farming-clarifications
components:
  - name: CostCalculator
    src: ./components/cost-calculator/index.js
  - name: GrowthChart
    src: ./components/growth-chart/index.js
  - name: SummaryMap
    src: ./components/summary-map/index.js
---

Meeting global climate goals will require drastic reductions in fossil CO₂ emissions as well as gigaton-scale removal of CO₂ from the atmosphere.<Cite ids={['gasser.2015', 'deangelo.2021']} /> Farmed seaweed (macroalgae) may help on both fronts: it may reduce emissions by substituting for more emissions-intensive energy and agricultural products, or it may be sunk into the deep sea as a form of carbon dioxide removal (CDR) (also referred to as carbon sequestration). In contrast to other biomass-based energy or carbon management strategies, pathways involving seaweed would not require land, fresh water, or macronutrient fertilizers.

To contribute to such climate goals, seaweed farming would have to expand tremendously, and in turn contend with large uncertainties in the productivity of different types of seaweed in different places, the net costs of farming, the magnitude of emissions avoided or carbon sequestered, and the potential for undesirable ecological impacts. Seaweed production costs depend largely on the costs of capital (e.g. boats, anchors, buoys, structural rope), seeded cultivation line, and harvesting, all of which could potentially span a wide range of reported values.<Cite ids={['van den burg.2016', 'correa.2016', 'camus.2019', 'capron.2020']} />

In the case of seaweed carbon removal, the carbon removed by sinking seaweed does not remain sequestered permanently, since large-scale ocean circulation might cause much of the carbon to resurface after a few hundred years.<Cite id='siegel.2021' /> It is also unclear what fraction of seaweed carbon is ultimately removed from the atmosphere given dynamics of air-sea fluxes and downstream effects on biological productivity.<Cite ids={['bach.2021', 'harrison.2018']} /> These potential inefficiencies and uncertainties need to be considered when assessing the viability of sinking seaweed as a scalable carbon removal strategy.

Similarly, potential avoided emissions from seaweed will depend on the type and source of agricultural products being displaced. For example, growing soybeans releases considerable quantities of non-CO₂ GHGs on average; using farmed seaweed to displace soy protein in animal feed could avoid 0.7 tons of CO₂e GHGs per ton of dry seaweed that would have otherwise been emitted by producing soybeans.<Cite id='hong.2021' /> The size of the market for seaweed-derived products will further depend on demand and reliable market values for such seaweed-based products.

The productivity, costs, and potential climate benefits of seaweed farming are spatially heterogeneous and scale-dependent, and it is important to evaluate the key sensitivities and trade-offs relevant to investors and decision-makers. We have developed coupled biophysical and technoeconomic models to begin answering these questions. Here we explain those models and the interactive tool we built to make them more accessible. We also discuss key insights and priorities for future research. For a deeper dive into our technoeconomic model and analysis, you can try the [map explorer tool](https://carbonplan.org/research/seaweed-farming) or read the [paper](https://doi.org/10.1038/s41477-022-01305-9).

## Technoeconomic model

The cost of each potential end-use for farmed seaweed depends on the cost to produce the seaweed and, in the case of GHG emissions mitigation, the market value of seaweed-derived products. We estimate the net cost of seaweed-related climate benefits by first estimating all costs and emissions related to seaweed farming, up to and including the point of harvest at the farm location, then estimating costs and emissions related to the transportation and processing of harvested seaweed, and finally estimating the market value of seaweed products and either carbon sequestered or GHG emissions avoided.

Technoeconomic model variables include (1) farming costs and emissions (e.g. capital cost, harvest costs), (2) for carbon removal, the fraction of seaweed carbon that is replaced by an equivalent amount of atmospheric carbon in the mixed layer (“atmospheric removal fraction”), and the fraction of sunk seaweed carbon sequestered for > 100 years in the deep sea, and (3) for GHG emissions mitigation, the net cost and net emissions of seaweed transported and converted into a product.

Once we know how much it costs to grow seaweed in a given area, we can divide that cost by the amount of seaweed grown there to calculate the net cost per ton of seaweed. We use results from a newly developed seaweed growth model, G-MACMODS, to estimate annual seaweed yield per area (either in tons of carbon or tons of dry weight biomass per km² per year).<Cite id='arzeno-soltero.2022' />

G-MACMODS is a nutrient-constrained, biophysical macroalgal growth model with inputs of temperature, nitrogen, light, flow, wave conditions, and amount of seeded biomass. In the model, seaweed takes up nitrogen from seawater, and that nitrogen is held in a stored pool before being converted to structural biomass via growth. Seaweed biomass is then lost via mortality, which includes breakage from variable ocean wave intensity. The model takes into account farming intensity (sub-grid-scale crowding) and employs a conditional harvest scheme, where harvest is optimized based on growth rate and standing biomass. The G-MACMODS model includes four seaweed types: temperate brown (e.g. Macrocystis, Saccharina), temperate red (e.g. Porphyra), tropical brown (e.g. Sargassum), and tropical red (e.g. Eucheuma). For our technoeconomic modeling, we use the seaweed type that produces the most biomass annually in each ocean grid cell.

The core behavior of the model is demonstrated in Figure 1, which shows the primary output variables in a small set of example spatial locations. By varying the inputs and seeing changes in the outputs you can build some intuition for the model’s behavior.

<Figure>
  <CostCalculator />
  <FigureCaption number={1}>
    Interactive calculator for exploring the costs of growing seaweed alongside
    its potential climate benefits for seaweed sinking or biomass products.
    Circles on the map can be selected to populate biophysical parameters for
    each location. Sliders adjust the values of technoeconomic parameters used
    by the model. Values at the top report the production cost, the climate
    benefit, and the removal cost (for sinking) or mitigation cost (for
    products), which can be obtained as the production cost divided by the
    climate benefit (less product value in the case of mitigation cost).
  </FigureCaption>
</Figure>

## Assumptions and caveats

Our model results should be interpreted in the context of several key assumptions that, on balance, mean scaling up these approaches in practice would be even more challenging than our modeling suggests.

Our model currently assumes only existing markets for seaweed uses: we assume that seaweed could be sold for the market price of the good(s) it replaces, but we do not assume any carbon price that might incentivize carbon removal. We also assume that seaweed could be grown anywhere that the growth model allows and do not constrain our model by geopolitical boundaries such as exclusive economic zones (EEZs). Farming costs are modeled assuming longline (tropical brown, tropical red, temperate brown) or net (temperate red) array-based seaweed cultivation. The transport scheme in our model assumes that seaweed farming boats would travel the shortest sea-route distance between points.

Apart from the mechanized conversion process to seaweed products, the model does not include the cost or emissions associated with any activities after the seaweed is delivered to port, such as land transport of seaweed to distribution facilities. Our model also assumes that seaweed is farmed everywhere that the G-MACMODS growth model allows (i.e., it does not assume any extra space between plots/lines for boat travel).

For these reasons, most costs in practical applications would likely be higher, and thus our model should be interpreted as providing an approximate lower bound on cost.

Even if these economic and biophysical uncertainties could be minimized, it is highly unlikely that seaweed would be farmed at scales approaching even 1% of the world’s oceans (for ease of comparison, 1% of the ocean is an area equivalent to about 2x the size of Alaska). Moreover, the ecological impacts of intensive seaweed farming at the scales necessary to reach gigaton-scale climate benefits are unclear and potentially prohibitive.

Given these scale constraints, our model should not be used to extrapolate the climate benefit potential of growing seaweed across entire oceans. Rather, it is best suited to local spatial exploration, for identifying promising regions and/or markets for seaweed farming, and quantifying potential benefits from farming in those regions and markets.

## Mapping tool

With the goal of spatial exploration and local evaluation in mind, we developed an [interactive mapping tool](/research/seaweed-farming) that allows for detailed exploration of the model parameter space and comparison of spatially explicit costs for seaweed farming.

With the tool, users can adjust individual parameters across ranges of uncertainty and see how they impact the cost of seaweed CO₂ sequestration (sinking) or avoided GHG emissions (products) across the globe. The tool includes descriptions for each model variable, as well as the option to query smaller regions and view local summary statistics. There is also an option to mask out major shipping lanes and Marine Protected Areas (MPAs) in the maps, as we anticipate that seaweed farming in these locations would be particularly difficult (or potentially impossible). All input data and maps (such as seaweed growth, distance to nearest port, preferred seaweed type) are also available for individual inspection, to help build intuition for how these inputs contribute to the derived results.

## Key insights

Our model and tool help highlight important targets for research and innovation. Biophysical factors such as death and exudation rates are not well-established and may substantially alter projected seaweed yields;<Cite id='arzeno-soltero.2022' /> regional biogeochemical and Earth system feedbacks could similarly undermine the efficacy of sinking seaweed carbon; and low or narrow demand for seaweed products could limit the potential to offset land-use and fossil GHG emissions. Finally, although some seaweed innovators are focused on farm designs that reduce labor and transportation costs, our results suggest that the keys to low production costs are seeded line and basic farm equipment like boats, buoys, and anchors.

Even if seed and capital costs are minimized, seaweed-based CDR seems likely to be more expensive than alternatives like direct air capture, and it is not clear that there are viable and large markets for seaweed products. These factors, combined with the challenges inherent to verification and monitoring as well as the potential for ecosystem disruption, suggest that expansion of seaweed cultivation should be approached with caution.

<Figure>
  <SummaryMap />
  <FigureCaption number={2}>
    Estimated costs of using farmed seaweed for carbon removal (sinking) or
    avoiding GHG emissions (feed, food, fuel). Maps show optimistically low net
    costs (5<sup>th</sup> percentile) from ambient nutrient simulations.
  </FigureCaption>
</Figure>

## Looking ahead

Future work should focus on targeted research and development of large-scale seaweed farms in the most economically-feasible locations to further reduce uncertainties. In particular, the biophysical uncertainty surrounding the atmospheric removal fraction (the amount that growing and sinking seaweed reduces atmospheric CO₂) must be resolved to appropriately assess and validate seaweed as a negative emissions strategy. Among the economic uncertainties, reducing uncertainty in the availability and size of markets for seaweed products is especially important, and reducing uncertainty in the cost of capital and seeded line through deployment of more large farms will help clarify the economic potential of seaweed farming at scales relevant to the global carbon budget. Additionally, the seaweed farming industry would have to expand at unprecedented rates for seaweed to provide gigaton-scale climate benefits annually, as shown in Figure 3.

<Figure>
  <GrowthChart />
  <FigureCaption number={3}>
    Growth of seaweed farming required to reach 2030 and 2050 goals of 1 Gt CO₂e
    annually for sinking and biomass products. For reference, 350K km² is
    approximately 0.1% of the world’s oceans.
  </FigureCaption>
</Figure>

Producing seaweed in the lowest-cost areas to reach 1 Gt CO₂e of emissions avoided or 1 Gt CO₂ removal by 2050 would entail the area farmed to increase by roughly 13% or 17% per year, respectively, compared to the 2000-2018 seaweed farming industrial growth rate of 6%. Achieving the same level of climate benefits from seaweed by 2030 increases the implied expansion rate of farms to roughly 44% or 60% per year for emissions avoided or carbon removed, respectively.

The outlook for a massive scale-up of seaweed climate benefits is thus decidedly murky, but we hope our model and our interactive mapping tool provide insight for decision-makers and researchers who might be considering seaweed farming as part of a more comprehensive emissions reduction or carbon removal strategy.

<Endnote label='Credits' divider>

Julianne and Steven developed the underlying technoeconomic model with their collaborators Benjamin Saenz, Isabella Arzeno-Soltero, Christina Frieder, Matthew Long, and Kristen Davis. Julianne and Steven worked closely with Kata, Jeremy, and Joe on the development of the interactive web map, with input from Freya, Lydia Kapsenberg and Antonius Gagern. Kata implemented the model and article figures in JavaScript with assistance from Jeremy and Joe on design and implementation. Joe developed the data processing pipeline. All authors contributed to writing the article.

Please cite as:

J DeAngelo, S Davis, B Saenz, I Arzeno-Soltero, M Long, C Frieder, K Davis, K Martin, F Chay, J Freeman, J Hamman (2022) “Mapping seaweed farming potential for CDR and biomass products” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/seaweed-farming-explainer](https://carbonplan.org/research/seaweed-farming-explainer)</span>

</Endnote>

<Endnote label='Terms'>

The University of California, Irvine and CarbonPlan received a grant from the ClimateWorks Foundation to support this work. ClimateWorks did not exercise any control over the output. Julianne DeAngelo is a Ph.D. Candidate at the University of California, Irvine (UCI). Steven Davis and Kristen Davis are professors at UCI. Ben Saenz is the principal contractor at Biota.earth. Isabella is a postdoctoral researcher at UCI. Matt Long is a scientist at NCAR.

Article text and figures made available under a [CC-BY 4.0 International](https://creativecommons.org/licenses/by/4.0/) license. Implementation of interactive visualizations made available under an [MIT license](https://github.com/carbonplan/research/blob/main/LICENSE). Associated [map explorer](https://github.com/carbonplan/seaweed-farming-web) made available under [MIT license](https://github.com/carbonplan/seaweed-farming-web/blob/main/LICENSE).

</Endnote>
