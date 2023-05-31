---
date: 06-30-2022
title: Open data and tools for multiple methods of global climate downscaling
authors:
  - Oriana Chegwidden
  - Raphael Hagen
  - Kata Martin
  - Max Jones
  - Anderson Banihirwe
  - Cindy Chiao
  - Sadie Frank
  - Jeremy Freeman
  - Joseph Hamman
color: secondary
summary: Downscaled datasets form the basis of climate impacts and risk analysis, but there are many ways to downscale. We’re releasing data and tools for this foundational step in the climate change planning process.
quickLook: A new release of global downscaled climate data spanning multiple downscaling methods
card: cmip6-downscaling-explainer
background: articles/017/magnifier
icon: articles/017/magnifier-small
links:
  - label: Map tool
    href: /research/cmip6-downscaling
  - label: Policy brief
    href: /research/data-financial-risk
components:
  - name: DownscaledData
    src: ./components/downscaled-data.js
  - name: Ecosystem
    src: ./components/ecosystem.js
  - name: Downscaling
    src: ./components/downscaling.js
---

Climate change will impact nearly every sector of society. Governments, advocacy groups, and corporations are increasingly confronting the need for robust estimates of climate-related risks and uncertainties. Planners and regulators are incorporating future climate information into their decision-making. The United States, for example, conducts a [National Climate Assessment](https://nca2018.globalchange.gov/) (NCA) every four years which informs its [Climate Adaptation and Resilience Plans](https://www.sustainability.gov/adaptation/), and the Securities and Exchange Commission has [proposed mandating public disclosure of climate-related risk](https://www.sec.gov/news/press-release/2022-46). Internationally, the Intergovernmental Panel on Climate Change (IPCC) releases [global assessments](https://www.ipcc.ch/report/ar6/wg2/) of projected future impacts of climate change on human, physical, and ecological systems.

Climate impact and risk assessments rely critically on global climate models (GCMs). However, projections from GCMs in raw form are rarely directly usable in impact assessments, because, for example, they are too coarse in spatial scale or contain persistent biases. A process called “downscaling” produces datasets that are spatially and temporally tuned for detailed projection of climate impacts and risks. There are a variety of downscaling approaches, each involving complex analytical workflows, and the choice of downscaling algorithm can strongly influence the resulting climate projections.<Cite id='lopez.2020'/>

We are releasing a new global downscaled climate data product spanning multiple downscaling methods, alongside an interactive mapping tool for inspecting, exploring, and comparing the data. Our release includes four downscaling algorithms run globally for the first time on the latest generation of climate projections from the Coupled Model Intercomparison Project Phase 6 (CMIP6), which forms the basis of reports from the IPCC. Our data product adds to a growing collection of downscaling algorithms and datasets, including recent releases from [NASA-NEX](https://www.nasa.gov/nex/gddp) and the [Climate Impact Lab](https://planetarycomputer.microsoft.com/dataset/group/cil-gdpcir). Together with our fully [open source analyses](https://github.com/carbonplan/cmip6-downscaling) and [map tool](/research/cmip6-downscaling), we hope this release enables important comparisons and evaluation of this critical step in climate impacts analysis.

<Figure>
  <DownscaledData />
  <FigureCaption number={1}>
    Raw Global Climate Model (GCM) and downscaled temperature data side-by-side
    for an example summer day in the 2080s. Values are maximum near-surface
    temperature. Moving the slider to the right shows sample output from the
    MRI-ESM2-0 climate model at a ~125 km resolution. Moving the slider to the
    left reveals the same output downscaled via the GARD-MV method at ~25 km
    resolution. The spatial resolution increases, revealing mountain ranges and
    coastlines that were not visible in the coarse GCM data.
  </FigureCaption>
</Figure>

In this article, we explain what downscaling is and why it matters, the key contributions of our first data release, and how we expect the data and tools to be used.

## The role of downscaling

Projections of future climate are often derived using global climate models (GCMs)<Sidenote>GCMs are increasingly referred to as Earth System Models (ESMs), though we use the term GCM in this article.</Sidenote>. GCMs are scientific models that simulate the earth’s climate as a whole, including oceans, atmosphere, and land. They are intended to capture continental scale climatological patterns, and are shown to capture broad patterns from meteorological observational datasets of the 20th century. These GCMs provide well-tuned sandboxes for testing the effect of different future greenhouse gas emissions on the planet’s climate.

By construction, GCMs subdivide the planet into pixels and yield a projection of the future climate for each pixel on every day. Depending on the GCM, a pixel might be ~1-2 deg on a side, or about 100-200 km at the equator.

There are two key barriers to the immediate use of raw GCM data within a risk estimation framework. First, the spatial resolution is too coarse for direct use in many applications. For example, a 100 km pixel in a GCM may be assigned a single elevation, when it actually includes a mountain range or coastline. Temperature can vary dramatically across these topographies which the GCMs’ coarse scale would miss. Precipitation patterns are similarly influenced by such topographic patterns.

Second, the GCMs are designed to capture global patterns, but they are not expected to reproduce observed climate patterns in any particular location. As a result, they will perform better in some locations and worse in others, and the magnitude and direction of any “biases” will differ across GCMs. This issue matters especially in downstream applications that are sensitive to specific thresholds. For example, predicting snowpack requires knowing when temperatures are above or below freezing (0 degrees celsius). If the temperature at a given location hovers around 0 degrees, a small bias could dramatically impact predictions. Similarly, GCMs have long struggled to accurately capture the number of wet days each year, a statistic that is important in many agricultural and hydrologic applications.<Cite id='dai.2006'/>

These barriers do not make GCMs useless. On the contrary, global climate simulations contain invaluable information for predicting the planet’s future response to elevated greenhouse gasses. However, to use that information for more granular impact assessment, bias-corrected higher resolution data is needed.

Scientists employ a process called “downscaling” to translate coarse resolution climate projections into higher resolution climate data at a scale that resolves the most influential climatic variations and removes biases with respect to historical observations. In general terms, statistical downscaling involves “training” a model on the statistical relationship between a GCM and an observational dataset over a historical period, and then applying that model to generate future predictions.<Sidenote>Statistical downscaling is distinct from “dynamical” downscaling, which instead involves running a numerical weather model to derive climate variables.</Sidenote> The downscaled data can then provide an input into downstream impact models and risk assessment (Figure 2).

<Figure>
  <Ecosystem />
  <FigureCaption number={2}>
    Downscaling is an intermediate climate data processing step between the
    global climate model and an impact model. By combining the GCM output with a
    reference dataset including meteorological observations, downscaling creates
    climate projections that are better aligned with the real world.
  </FigureCaption>
</Figure>

While the broad goals of downscaling are easy to define, there are many different methods with distinct strengths which can be matched to the desired application of the downscaled data. Downscaling methods include several steps (see Table 1) where influential choices need to be made, including the form of bias correction, whether to use one or multiple predictor variables, and the incorporation of regional climate patterns (see “Different algorithms” below). All of these decisions can affect the resulting downscaled dataset, and the resulting differences propagate through follow-on impacts models, creating uncertainty around projections. For example, this cascading uncertainty has been explored extensively within the context of water resources.<Cite ids={['khan.2006', 'chen.2013', 'wootten.2017', 'chegwidden.2019']}/> Differences between methods are often most pronounced when projecting climatic extremes, such as intense precipitation<Cite id='lopez.2020' hide/> or heat waves.<Cite id='wootten.2017' hide/> Differences between methods can be further magnified when downscaled datasets are ingested into downstream impacts models. It is thus critical for the climate impacts community to be able to access a variety of downscaled datasets and to compare their suitability for a desired application.

## What we’re releasing

We are releasing a new collection of downscaled datasets produced from multiple statistical downscaling methods, alongside a companion [map tool](/research/cmip6-downscaling) to explore the data. We used climate change simulations from up to six global climate models from CMIP6 and three different future emissions scenarios, and we applied four different downscaling methods: MACA<Cite id='abatzoglou.2011'/>, DeepSD,<Cite id='vandal.2017'/> and two implementations of GARD<Cite id='gutmann.2022'/> (Table 1). We chose to run a modest number of GCMs and scenarios, and instead focused on developing, testing, and implementing multiple downscaling methods. There is no one correct downscaling method, and we do not suggest any of our implementations is an optimal dataset. Rather, we hope our focus on methodological diversity complements existing efforts, and will help the research and applications communities evaluate uncertainties associated with downscaled data products.

Our datasets include projections of daily maximum and minimum temperature and precipitation through the end of the 21st century for the entire globe at a 0.25 degree resolution (approximately 25 km x 25 km).<Sidenote>The MACA method was not implemented over Antarctica</Sidenote> We trained all models on the ERA5 reanalysis product.<Cite id='hersbach.2020'/> In the theme of open data development, we welcome feedback from the scientific community so as to guide future improvements. We anticipate releasing updates to expand or refine the collection of datasets.

<Figure>
  <Table
    index={false}
    columns={[5, 6, 6, 6]}
    start={[
      [1, 1, 1, 1],
      [1, 2, 2, 2],
      [2, 3, 3, 3],
      [3, 4, 4, 4],
      [4, 5, 5, 5],
      [5, 6, 6, 6],
    ]}
    width={[[5, 1, 1, 1], [1], [1], [1], [1], [1]]}
    data={[
      [
        'Name',
        'Single- or multi-variate',
        'Spatial patterns',
        'No. runs',
        'Training dataset',
        'Source',
      ],
      ['BCSD', 'Single', 'No', '~175', 'GMFD', 'NEX'],
      ['QDM + QPLAD', 'Single', 'No', '110', 'ERA5', 'CIL'],
      ['GARD-SV', 'Single', 'No', '20', 'ERA5', 'This release'],
      ['GARD-MV', 'Multi', 'No', '3', 'ERA5', 'This release'],
      ['MACA', 'Single', 'Yes', '5', 'ERA5', 'This release'],
      ['DeepSD', 'Multi', 'Yes', '8', 'ERA5', 'This release'],
    ]}
  />
  <TableCaption number={1}>
    Many downscaling algorithms exist. Here we list the downscaling
    implementations for CMIP6 available thus far with temperature and
    precipitation data, specifying whether they are single-variate or
    multi-variate, whether they account for spatial patterns, the total number
    of runs (across all GCMs, scenarios, and ensemble members) and whether the
    data are part of this release. Our dataset collection also includes a
    bias-corrected version of DeepSD identified as DeepSD-BC in the mapping
    tool. Global BSCD data was released by NASA-NEX and global QDM + QPLAD data
    was released by the Climate Impact Lab. Note that the QDM + QPLAD data,
    while also trained on ERA5, was trained on a different ERA5 time period from
    the others.{' '}
  </TableCaption>
</Figure>

Because the data are quite large — multiple terabytes for the complete collection — we also built a new interactive mapping tool that makes them explorable and comparable directly in a web browser, hopefully lowering the barrier of entry for those interested in exploring or working with the data. The map tool shows downscaled data alongside the raw (coarse) CMIP6 data. We expect this tool to be particularly useful for orienting users in space and time, facilitating model and variable selection, and accelerating quality control within and across models and downscaling methods. We also hope it enables a wider audience to explore patterns in the data and identify opportunities for future improvement.

Below, we highlight three of our key contributions in more detail.

### 01 — Different algorithms

As discussed above, different algorithms produce different downscaled climate change projections (Figure 3). To date, the uncertainty associated with choice of downscaling methods has received less attention than other physical modeling steps in climate impacts (e.g. uncertainties associated with GCM selection). Systematic comparisons have been made for downscaled CMIP5 data products,<Cite ids={['sunyer.2015', 'werner.2016', 'mullan.2015', 'tabari.2020']}/> but most comparisons have been local or regional in scale, and the community has not yet been able to assess downscaling sensitivities for CMIP6. To help support such comparisons, we focused on implementing multiple algorithms (Table 1), which differ in three important ways.

<Figure>
  <Downscaling />
  <FigureCaption number={3}>
    Downscaling is a two-step process. First, we train a model that transforms
    global climate model data so as to produce downscaled data that optimally
    matches selected attributes of a reference dataset over a historical period
    (“training”). Second, we use that model to generate downscaled data in the
    future (“prediction”).
  </FigureCaption>
</Figure>

First, methods differ in the variables they use for training and inference. For example, BCSD<Cite id='wood.2004'/> uses a single-variate approach, in which the model predicts the same variable (e.g. precipitation) on which it was trained. In contrast, the Ensemble Generalized Analog Regression Downscaling (En-GARD) model can use any number of time-varying climatological or biogeophysical variables. We implemented<Sidenote>We refer to our implementation as “GARD” because we have not included the Ensemble element of the mode</Sidenote> two variants of GARD: (1) a single-variate implementation and (2) a multi-variate implementation which uses zonal and meridional winds along with the target variable as predictors. As yet another example, DeepSD method can incorporate additional variables, like elevation, as time-invariant features.

Second, downscaling methods incorporate varying levels of spatial information. Some methods, like BCSD, only use local GCM information, whereas others use larger regional patterns. MACA, for example, constructs a final, fine-scale product informed by coarse-scale weather patterns from the reference dataset. Similarly, DeepSD learns generalized spatial patterns based on observational and topographic data using a computer vision approach. The consequences of these choices for specific applications will require extensive analysis and comparison.

Third, methods range in their maturity, from established to experimental. BCSD was introduced in the early 2000s and has been used in a range of local and global applications; MACA was introduced 10 years later and has also become well-accepted due to some notable improvements around spatial patterns (discussed above) and extreme events. The other methods, especially DeepSD, are more recent and experimental and require more development and testing for real-world application.

### 02 — Transparency

The downscaled datasets we are releasing here are accompanied by the [open source code](https://github.com/carbonplan/cmip6-downscaling) that we used to produce them. This transparency is important for two reasons: First, it allows a broader community to evaluate the results and provide feedback. Second, it enables a better understanding of methodological assumptions and caveats that may be relevant when choosing data for climate impact assessment. We hope this work can be used as an example of how large-scale climate datasets can be developed in the open: contributing to open source packages and developing within open codebases, and creating publicly available datasets fully inspectable in a web browser.

### 03 — Information equity

Making downscaled climate data globally equitable requires both having comprehensive coverage across regions and methods, and ensuring data is as accessible as possible. Historically, downscaled data has been most readily available in North America and Europe, and outside of those regions there are especially few examples of multiple downscaled datasets available for comparison. Alongside other recent efforts, we hope that the robust global coverage and multiple methods in this release help enable global and regional applications that make use of downscaled climate data. Regarding accessibility, we recognize that working with these data, let alone producing them, still demands significant computing resources. Through our map tool, we hope to lower the barrier to basic exploration and evaluation of the data, but recognize that more complex use cases continue to require significant technical capacity (see Table 2).

## Comparisons to existing work

There is a growing landscape of CMIP6 climate data sources, and we hope that our release both complements these data products and helps facilitate easy comparisons among them. Our four downscaled datasets join two other releases of global CMIP6 downscaled data: a BCSD implementation from NASA Earth Exchange (NEX) Global Daily Downscaled Projections and a quantile-mapping based approach<Cite id='cannon.2015'/> conducted by the Climate Impact Lab. The NEX dataset notably includes additional variables not included in either this release or the CIL release, including relative humidity, specific humidity, surface wind, and downwelling shortwave and longwave radiation. The NEX and CIL datasets also include a larger set of GCMs and scenarios than we have released here. Given that all of these datasets are now publicly accessible, there is an opportunity to systematically compare them. We note, however, that the NEX product used a different training dataset — GMFD rather than ERA5 — so comparing it to the other downscaled datasets reflects both the difference in algorithm and the difference in training data, which can have a substantial impact on both historical and future projections.

Thus far we have only considered “statistical” downscaling methods, but efforts are also underway to develop dynamically-downscaled data (e.g. the [CORDEX initiative](https://cordex.org/)). That approach relies on using GCM outputs as boundary conditions to a higher resolution weather model and involves an entirely different set of modeling decisions than what we have discussed above.

## How these data can be used

In the following table, we detail how you might use these data and tools depending on your goals.

<Figure>
  <Table
    index={false}
    columns={[2, 5, 5, 5]}
    start={[
      [1, 1, 1, 1],
      [1, 2, 2, 2],
      [2, 4, 4, 4],
    ]}
    width={[
      [2, 1, 1, 1],
      [1, 2, 2, 2],
      [1, 2, 2, 2],
    ]}
    data={[
      ['Who are you?', 'What do you want to do?', 'Next steps'],
      [
        'Data Explorer',
        'I want to inspect and compare datasets at different temporal and spatial scales, through both maps and time series.',
        <span>
          Visit our <Link href='/research/cmip6-downscaling'>map tool</Link>{' '}
          where you can explore the data directly in your web browser.
        </span>,
      ],
      [
        'Methods Developer',
        'I want to inspect your downscaling methods, and either try to reproduce them or implement a change.',
        <span>
          Visit our{' '}
          <Link href='https://github.com/carbonplan/cmip6-downscaling'>
            GitHub repository
          </Link>{' '}
          where the analysis code and all routines to reproduce the datasets are
          publicly available.
        </span>,
      ],
      [
        'Impacts Modeler',
        'I want to subset the full dataset to develop an impact model in my preferred coding environment. I might want to download the data locally, or I might want to work in the cloud.',
        <span>
          Try our{' '}
          <Link href='https://github.com/carbonplan/cmip6-downscaling/blob/main/notebooks/accessing_data_example.ipynb'>
            sample Jupyter notebook
          </Link>{' '}
          where we show you how you can access the data, perform example
          analytics, and download a subset.
        </span>,
      ],
      [
        'Impacts Analyst',
        'I want to obtain projections for a specific climate impact, such as extreme heat or flood and fire risk.',
        'These data are unlikely to meet your needs because they only include basic climate variables. Downstream modeling will be required for specific impacts analysis.',
      ],
    ]}
  />
  <TableCaption number={2}>
    How different audiences might want to engage with this data.
  </TableCaption>
</Figure>

## What comes next

We hope that this release furthers the ability of the climate impacts community to consider the consequences associated with choosing downscaling methods or downscaled datasets. We particularly acknowledge researchers in domains dependent on extreme events, where these choices are especially significant.

Looking ahead, we are eager for others to explore these downscaling implementations and datasets. We anticipate expanding the collection of datasets along several dimensions — additional downscaling methods, more GCMs and scenarios, alternative observational datasets — pending community feedback. We plan to continue exploring how to make these data accessible to all, and finding ways to leverage them in new applications.

<Endnote label='Credits' divider>

Oriana wrote the article, with support from Jeremy, Kata, Joe, and Sadie. Oriana, Cindy (now at Meta), Max, and Joe implemented the downscaling methods. Raphael executed the dataset production. Kata and Jeremy created the map tool and article figures. John Abatzoglou (UC Merced) and Ethan Gutmann (NCAR) advised on the implementation of MACA and En-GARD, respectively.

O Chegwidden, R Hagen, K Martin, M Jones, A Banihirwe, C Chiao, S Frank, J Freeman, J Hamman (2022) “Open data and tools for multiple methods of global climate downscaling" CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/cmip6-downscaling-explainer](https://carbonplan.org/research/cmip6-downscaling-explainer)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan received a grant from Microsoft AI for Earth to support this work. Funding from NASA (award no. 80NSSC21M0065) also contributed to this work. Microsoft and NASA did not exercise any control over the output. The authors are solely responsible for the content of this write-up, which does not reflect the views of Microsoft, NASA, or any other individuals or organizations.

Article text and figures made available under a [CC-BY 4.0 International](https://creativecommons.org/licenses/by/4.0/) license. Implementation of interactive visualizations made available under an [MIT license](https://github.com/carbonplan/research/blob/main/LICENSE). Associated [analysis package](https://github.com/carbonplan/cmip6-downscaling) made available under an [MIT license](https://github.com/carbonplan/cmip6-downscaling/blob/main/LICENSE). Associated [map explorer](https://github.com/carbonplan/cmip6-web) made available under [MIT license](https://github.com/carbonplan/cmip6-web/blob/main/LICENSE).

</Endnote>
