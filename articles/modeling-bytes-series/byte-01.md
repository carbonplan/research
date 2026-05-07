---
version: 1.0.0
date: 05-07-2026
title: The role of reactive transport models in enhanced weathering today
authors:
  - Tyler Kukla
  - Freya Chay
quickLook: A primer on reactive transport models and their role in EW.
components:
  - name: Authors
    src: ./components/authors.js
  - name: Decisions
    src: ./components/decisions.js
  - name: Figure
    src: '@carbonplan/components'
  - name: Table
    src: '@carbonplan/components'
  - name: FigureCaption
    src: '@carbonplan/components'
slug: modeling-bytes-01-primer
---

# {title}

<Authors authors={authors} color={color} />

The Modeling Bytes series examines decisions that matter when using models to estimate enhanced weathering outcomes. Most posts in this series are quite technical, so to make the series more accessible we’re starting with a brief introduction to reactive transport models (RTMs) — the family of models we focus on throughout. This post covers what RTMs are, and the role we think they should play in enhanced weathering (EW) today.

## So, what are RTMs?

True to their name, reactive transport models simulate chemical reactions and fluid transport. These coupled processes underpin the many systems where RTMs are applied, including: soil formation, chemical weathering, geothermal reservoirs, geological carbon sequestration, bioremediation, industrial waste management, contaminant transport, and groundwater quality. RTMs have been used in these contexts for decades, but we’ve only recently started applying them to EW.

Beyond the basic requirements that RTMs include reaction and transport processes, the best way to understand these models is not by trying to describe what they _are_, but by unpacking what they can be set up to do. That’s because RTMs are highly flexible. Modelers can make dozens of decisions to use the same model for vastly different applications — across topics, or within EW. Figure 1 shows some of these decisions, grouped by which stage of model setup they relate to: domain, forcings, spinup, reactions, and transport.

<Figure>
  <Decisions />
  <FigureCaption number={1}>
    Some examples of consequential RTM set up decisions. Domain refers to the
    physical space and time conditions the model simulates; forcing refers to
    the external inputs that the system responds to; spinup refers to how the
    model represents the initial domain conditions; and reactions and transport
    refer to how the model represents chemistry and fluid transport,
    respectively. Click any box for an expanded description.
  </FigureCaption>
</Figure>

To date, most EW RTM work has been done with a handful of different models (Table 1), though the list is growing. Critically, the model you choose constrains the decision space laid out above. For example, SMEW is zero-dimensional but the code is easy to modify and customize; CrunchFlow has extensive options for reaction kinetics and uses a very fast and accurate numerical solver; and MIN3P has sophisticated soil hydrology, well-suited for event-scale infiltration and groundwater coupling.

<Figure>
  <Table
    columns={6}
    start={[1, [1, 3, 3, 3]]}
    width={[
      [6, 2, 2, 2],
      [6, 4, 4, 4],
    ]}
    data={[
      ['Model', 'Key EW references'],
      [
        'ARTEMIS (with PHREEQC)',
        <Link href='https://doi.org/10.5194/egusphere-2025-5823'>
          Taylor et al. preprint
        </Link>,
      ],
      [
        'ATS (with PFLOTRAN)',
        <Link href='https://doi.org/10.22541/essoar.177306640.07468031/v1'>
          Shaheen et al. preprint
        </Link>,
      ],
      ['CrunchFlow', 'Maher and Rogers, in prep.'],
      [
        'Geochemist’s workbench',
        <Link href='https://doi.org/10.21203/rs.3.rs-3851603/v1'>
          Khalidy et al. preprint
        </Link>,
      ],
      [
        'PHREEQC',
        <>
          <Link href='https://doi.org/10.1111/gcb.15089'>
            Kelland et al. (2020)
          </Link>
          ; <Link href='https://doi.org/10.1016/j.apgeochem.2021.105023'>
            Lewis et al. (2021)
          </Link>; <Link href='https://doi.org/10.3389/fclim.2022.869456'>Vienne et al. (2022)</Link>
        </>,
      ],
      [
        'SCEPTER',
        <>
          <Link href='https://doi.org/10.5194/gmd-15-4959-2022'>
            Kanzaki et al. (2022)
          </Link>
          ; <Link href='https://doi.org/10.5194/gmd-17-4515-2024'>Kanzaki et al. (2024)</Link>
        </>,
      ],
      [
        'SMEW',
        <>
          <Link href='https://doi.org/10.1029/2024MS004224'>
            Bertagni et al. (2025)
          </Link>
          ; <Link href='https://doi.org/10.1029/2025WR041479'>Anand et al. (2026)</Link>
        </>,
      ],
      [
        'T&C SMEW',
        <Link href='https://doi.org/10.1111/gcb.70650'>
          Zhang et al. (2025)
        </Link>,
      ],
      [
        'TOUGHREACT',
        <Link href='https://doi.org/10.1038/s41598-023-36113-4'>
          Deng et al. (2023)
        </Link>,
      ],
      [
        <>Beerling model</>,
        <>
          <Link href='https://doi.org/10.1038/s41586-020-2448-9'>
            Beerling et al. (2020)
          </Link>
          ; <Link href='https://doi.org/10.1038/s41586-024-08429-2'>Beerling et al. (2025)</Link>
        </>,
      ],
      [
        <>
          Cipolla model
          <br />
          (precursor to SMEW)
        </>,
        <>
          <Link href='https://doi.org/10.1016/j.advwatres.2021.103934'>
            Cipolla et al. (2021a)
          </Link>
          ; <Link href='https://doi.org/10.1016/j.advwatres.2021.103949'>Cipolla et al. (2021b)</Link>
        </>,
      ],
    ]}
    index={false}
    sx={{
      '& a': { color: 'grey' },
      '& tr:not(:first-of-type) td:not(:first-of-type)': { color: 'grey' },
      '& tr:first-of-type td': {
        textTransform: 'uppercase',
        letterSpacing: 'smallcaps',
        fontFamily: 'heading',
        fontSize: [2, 2, 2, 3],
      },
      '& tr:first-of-type td:first-of-type': {
        display: ['none', 'block', 'block', 'block'],
      },
    }}
  />
</Figure>

In other words, RTMs are less like a single tool you can just pick up and use, and more like a toolbox with many options for tackling different projects. Figuring out how to use them effectively for EW requires an iterative process — applying the models, learning about EW itself, and identifying where modeling approaches need refinement. We are still in the early stages of that process.

## Using RTMs to learn

The flexibility inherent to RTMs makes them ideal tools for basic research and learning, which we see as their primary role in EW today. Practitioners can develop and test theories by adding layers of complexity, piece-by-piece, within a single, internally consistent framework. In this way, RTMs can help us build a theoretical foundation for EW that holds across scales — connecting the dissolution of micron-scale dust in soils, to alkalinity export through a catchment, and ultimately the storage of carbon in the ocean.

We don’t have that coherent theoretical framework in EW today, but RTMs are already helping us learn. They’re providing extra context for field data,<Cite ids={['bertagni.2025', 'green.2024', 'kelland.2020', 'vienne.2022']} /> unpacking how key geochemical interactions play out, <Cite ids={['cipolla.2022', 'deng.2023', 'kanzaki.2025']} /> and helping us understand what it might take to do EW at scale.<Cite ids={['baek.2023', 'beerling.2020', 'beerling.2025']} /> But to continue making these learning efforts effective, we also need to better understand the RTMs themselves.

## The path forward

If we eventually want to use RTMs to confidently simulate real-world outcomes, there is a lot of work ahead.

First, we need to develop RTMs to capture more of the complexity of EW. Soil biogeochemistry is messy, and EW simulations today make some drastic simplifications. For example, almost all EW RTM studies to date have used spatial domains defined in zero or one dimension — a point or a column of soil — rather than higher dimensions capable of resolving lateral flow paths. They also typically represent just the top ~20-100 cm of the soil column, capturing where alkalinity is generated but not how it’s exported and stored. Studies often make further simplifications, such as fixed rates of baseline alkalinity production<Cite id='cipolla.2021a' hide={[false]} /> or soil respiration,<Cite id='beerling.2020' hide={[true]} /> and tunable parameters that collapse numerous complex processes to a single value.<Cite id='bertagni.2025' hide={[true]} /> On the one hand, these simplifications are necessary — we learn by adding complexity one layer at a time. But they also show us how far we have to go. Bridging the gap between models and real-world complexity, or even justifying the simplifications, will require significant investment in model development.

Second, we need to scrutinize model decisions and develop field-wide norms to guide how we set up EW simulations. Today, almost all consequential modeling choices rest on individual experts’ judgment. But in more mature fields, they draw from a shared body of work. For example, Earth system model parameterizations for stomatal conductance or atmospheric convection rest on numerous research papers establishing which choices are acceptable for the problem at hand. Such a body of work stress-tests the options and surfaces the tradeoffs and uncertainties that are otherwise implicit, or overlooked. This foundation benefits the whole field: it makes it easier to justify model choices and to contextualize results across studies.

The Modeling Bytes series is one attempt to contribute to this foundation-building effort. As the iterative process of applying, learning, and refining EW models continues, we expect things to change. [Mistakes](https://carbonplan.org/research/modeling-bytes-02-roughness) will be discovered and corrected. Model setups will grow more sophisticated and increasingly grounded in emerging field-wide norms. Since this process is only just beginning, we encourage anyone relying on RTM outputs to treat the carbon removal estimates they produce as provisional. We hope this primer, and the posts that follow, give you better tools for evaluating what EW models can and can’t yet tell us.

<Endnote label='Credits' divider>

Tyler and Freya wrote the article. Kata Martin designed the figure. Grayson Badgley provided feedback on the text.

Please cite as T Kukla and F Chay (2026) “The role of reactive transport models in enhanced weathering today.” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/modeling-bytes-01-primer](https://carbonplan.org/research/modeling-bytes-01-primer)</span>

</Endnote>

<Endnote label='Terms'>

CarbonPlan’s work on this article was supported by a grant from the Chan Zuckerberg Initiative DAF, an advised fund of Silicon Valley Community Foundation.

Article text and figures are made available under a [CC BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

</Endnote>
