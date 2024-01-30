---
version: 1.0.1
title: Ethanol carbon capture and storage isn’t carbon removal
authors:
  - Freya Chay
  - Kata Martin
date: 12-04-2023
summary: The voluntary carbon market is gearing up to sell corn ethanol CCS projects as carbon removal because they store biogenic CO₂. We explain why this logic falls short.
color: yellow
card: ethanol-cdr-claims
components:
  - name: Schematics
    src: ./components/schematics.js
---

The voluntary carbon market is lurching toward buying and selling credits from corn ethanol carbon capture and storage (CCS) projects. As recent indications, [NextGen CDR](https://www.nextgencdr.com/) and an [ethanol CCS project](https://summitcarbonsolutions.com/) in the midwest made a [$30 million purchase agreement](https://www.bloomberg.com/news/articles/2023-04-26/carbon-credit-deal-targets-us-pipeline-to-remove-corn-based-ethanol-emissions), and the offset registries [Gold Standard](https://www.goldstandard.org/our-work/innovations-consultations/methodology-biomass-fermentation-carbon-capture-and-geologic) and [Verra](https://verra.org/methodologies/methodology-for-carbon-capture-and-storage/) have released draft methodologies under which such projects could be credited.

All signs indicate the intention to credit corn ethanol CCS as carbon dioxide removal (CDR). The problem is, corn ethanol CCS doesn't actually remove CO₂ from the atmosphere.

Activities labeled as carbon removal must yield the physical climate service they claim to provide. The role of carbon removal in global temperature stabilization plans is to “undo” unavoidable or historic CO₂ emissions. For an activity to be called carbon removal today, it must therefore have the capacity to reduce absolute atmospheric CO₂ concentrations.

Proponents assert that retrofitting corn ethanol facilities with CCS is carbon removal because it stores CO₂ that was originally captured from the atmosphere via photosynthesis. However, this carbon storage is contingent upon the continued production of ethanol, and even with carbon capture, today’s ethanol production as a whole _adds_ greenhouse gases to the atmosphere. No matter how you do the math, this system couldn’t be used to reduce the total quantity of CO₂ in the atmosphere and therefore should not be called carbon removal. Mislabeling activities like corn ethanol carbon capture muddles the definition of carbon removal and risks diverting investment from developing the carbon removal capacity the world needs.

### Ethanol with carbon capture doesn’t remove carbon from the atmosphere

Producing corn ethanol is demonstrably a net-emitting process (Figure 1, baseline).<Cite id='epa.2022' /> Corn removes CO₂ from the atmosphere as it grows, but about a third of that CO₂ is re-emitted when the corn is fermented to produce ethanol fuel, and the rest returns to the atmosphere when the ethanol is ultimately combusted. The process emits additional greenhouse gasses during corn production, through building and operating the ethanol plant, and via transportation of both the corn and the ethanol. Furthermore, dedicating agricultural land to corn ethanol production can result in land-use change by reducing food crop availability and increasing the conversion of land to agricultural use.<Sidenote>For context, over [35 percent](https://afdc.energy.gov/data/10339) of the corn produced in the US today is used to make corn ethanol.</Sidenote>

Retrofitting an ethanol plant with carbon capture technology only captures a portion of emissions associated with producing corn ethanol. Most commonly, CCS retrofits capture and store the biogenic CO₂ that is emitted during the fermentation process (Figure 1, retrofit).<Sidenote>Some researchers [have explored](https://doi.org/10.1021/acs.est.2c04784) process and fuel interventions to further reduce the carbon intensity of ethanol production. However, these interventions do not represent common practice today, nor do they represent the ethanol CCS projects currently being proposed.</Sidenote> Viewed narrowly, such a retrofit achieves net carbon storage — a CCS system can store more carbon than is emitted in its installation and operation (Figure 1, narrow). However, because achieving that carbon storage is contingent upon the continued production of ethanol, the retrofit functionally avoids a portion of the existing facility’s emissions rather than removing carbon from the atmosphere.

<Figure>
  <Schematics />
  <FigureCaption number={1}>
    A simplified schematic of corn ethanol production with and without carbon
    capture and storage (CCS). Biogenic CO₂ removals and emissions are shown in
    yellow. Other emissions, including from the combustion of fossil fuels and
    application of fertilizer, are shown in pink. Viewed narrowly, the CCS
    retrofit results in net storage of biogenic CO₂. However, even with CCS, the
    system as a whole remains a net-emitting process.
  </FigureCaption>
</Figure>

To put numbers to this problem, we can turn to the academic literature that estimates the “carbon intensity” of corn ethanol. These estimates represent a [long history](https://www.volts.wtf/p/whats-going-on-with-biofuels#details) of scientific and political disagreement about how to account for the life cycle emissions of corn ethanol, largely centered around the direct and indirect land-use change caused by introducing a new source of demand for corn.<Cite ids={['searchinger.2008', 'fargione.2008']} /> This debate deserves careful attention in its own right, but here we want to emphasize that across the wide range of estimated carbon intensities, corn ethanol with CCS remains a net-emitting process (Table 1).

<Figure>
 <Table
    columns={[6]}
    start={[[1], [1, 3, 3, 3],  [4, 5, 5, 5]]}
    width={[
      [6, 2, 2, 2],
      [3, 2, 2, 2],
      [3, 2, 2, 2],
    ]}
    data={[[
      '',
      'Ethanol emissions (gCO₂e / MJ)',
      'Ethanol + CCS emissions (gCO₂e / MJ)',
    ],
    [

      'Lewandrowski et al. (2020)',
      '51.74',
      '16.74',
    ], [

      'GREET model (2020)',
      '53.6',
      '18.6',
    ],
    [

      'Lark et al. (2021)',
      '90.3',
      '55.3',
    ]
    ]}
    borderTop={false}
    borderBottom={false}

/>

<TableCaption number={1}>
   Across the range of estimated corn ethanol carbon intensities, corn ethanol with CCS remains a net emitting process. The table shows the carbon intensity estimates from [Lewandrowski et al. 2020](https://doi.org/10.1080/17597269.2018.1546488) (Table A2, BAU 2022), the [GREET model 2020](https://www.osti.gov/doecode/biblio/43903) (default values), and [Lark et al. 2022](https://www.pnas.org/doi/10.1073/pnas.2101084119) (Table 2, GREET + Lark). We calculate impact of a CCS retrofit that captures the CO₂ from the fermentation based on the [USDA assumption](https://www.usda.gov/sites/default/files/documents/CA-LCFS-Incentivizing-Ethanol-Industry-GHG-Mitigation.pdf) that a maximum of 35 gCO₂ could be captured / MJ ethanol produced.
  </TableCaption>
</Figure>

Since a CCS retrofit cannot operate independently from the underlying ethanol production, it is necessary to look at the system as a whole to determine whether or not carbon removal is achieved from the standpoint of the atmosphere. Despite disagreement about the carbon intensity of corn ethanol, there are currently no credible estimates indicating that corn ethanol with CCS can achieve net carbon removal in the absence of significant changes to the ethanol production process.

### Accounting rules don’t change atmospheric realities

Rigorous accounting rules must ensure that anything called carbon removal could be used to reduce the total amount of CO₂ in the atmosphere. This test does not alone determine whether or not a project merits investment; it’s a tool to check if the things we are currently calling carbon removal could actually play the role we need them to play in a net-zero world.

It’s worrying that the emerging rules for crediting ethanol CCS projects run counter to this fundamental logic about what should — or should not — be called carbon removal. For example, Gold Standard’s draft [biomass fermentation methodology](https://www.goldstandard.org/our-work/innovations-consultations/methodology-biomass-fermentation-carbon-capture-and-geologic) purports to issue carbon dioxide removal credits, but would allow ethanol CCS projects to use a narrow accounting boundary in which only the marginal emissions associated with the retrofit must be taken into account (Figure 1, narrow). Verra’s draft [CCS+ methodology framework](https://verra.org/wp-content/uploads/2023/06/CCS-Methodology-Public-Consultation-Draft.pdf) does not yet include the rules for crediting ethanol CCS, but similarly indicates that the emissions associated with the existing facility will not be fully included in the project boundary.

While these rules could be appropriate for calculating the immediate carbon impact of a CCS retrofit, they do not provide a sufficient basis for claiming that the retrofit achieves net carbon removal. If biogenic CO₂ storage is inextricably linked to the ongoing operation of a larger emitting process, it is avoiding emissions — not removing carbon from the atmosphere.

This logic has implications beyond corn ethanol. CCS retrofits on pulp and paper mills, bioenergy plants, and biohydrogen plants have all been proposed as avenues for capturing and storing biogenic CO₂. But as the corn ethanol CCS example shows, biogenic CO₂ storage is not equivalent to net carbon removal. Understanding if any of these projects results in net carbon removal requires evaluating the full system, not just the retrofit. There are no easy, generalizable rules for defining the “full system” boundaries for biomass-based projects. At a minimum, we recommend that carbon removal claims for CCS retrofits be based on the assessment boundary that would be used if building an equivalent facility from the ground up.

### Why clarity around carbon removal matters

Public and private investments in carbon removal are meant to help catalyze an industry that will be required to stabilize global temperatures. But growing private sector demand and targeted policy support for carbon removal will increasingly incentivize projects to label their activities as “carbon removal” wherever possible. There are three reasons to continue to draw a sharp boundary around what is and is not carbon removal.

First, blurring the definition of carbon removal could introduce unfair competition. For example, one [economic impact assessment](https://puc.sd.gov/commission/dockets/HydrocarbonPipeline/2022/HP22-002/JMullerExhB.pdf) of an ethanol CCS pipeline project in the midwest contemplated accessing incentives from 45Q, LCFS, and the voluntary carbon market, and assumed they would sell their carbon credits for $15 / tCO₂. This low cost could severely undercut legitimate carbon removal projects that are currently selling for hundreds of dollars a ton.

Second, mislabeling activities as carbon removal could distort our sense of progress toward developing the carbon removal capacity we need. The NextGen agreement to purchase credits from an ethanol CCS project this spring was [touted](https://www.bloomberg.com/news/articles/2023-04-26/carbon-credit-deal-targets-us-pipeline-to-remove-corn-based-ethanol-emissions#xj4y7vzkg) as representing a “quarter of all certified carbon removals to date” — which is misleading since corn ethanol with CCS does not actually achieve net carbon removal. This is just one purchase representing a fraction of the [currently](https://summitcarbonsolutions.com/get-the-facts/) [proposed](https://wolfcarbonsolutions.com/about-wolf/) corn ethanol CCS projects in the US. It’s easy to imagine mislabeled carbon removals from this sector alone introducing significant confusion about progress and contributions toward our overall carbon removal capacity.

Finally, mislabeling avoided emission projects could distort an honest evaluation of what makes such a project worthwhile — or not. Investing in avoided emissions has real value; the world has a lot of emissions to eliminate! But these projects present a unique set of challenges. For example, research shows that CCS retrofits in the US fossil power sector incentivized by 45Q could actually _increase_ greenhouse gas emissions by extending the lifetime of fossil fuel power plants.<Cite id='grubert.2023' /> Similarly perverse outcomes could arise if CCS investments provide economic, social, or regulatory license for continued operation or expansion of corn ethanol production. Investment in avoided emission projects are important, but must be evaluated with careful attention to their role within a broader decarbonization strategy.

It is absolutely possible that investing in avoided emissions projects today could help drive down costs or establish infrastructure for future carbon removal projects that rely on similar technology. That might justify directing carbon removal dollars toward such projects today, but it’s not an argument for mislabeling them. Maintaining a sharp definition around carbon removal isn’t just about accuracy; it will support smarter public and private investment across all project types.

Barring major changes to the process of corn ethanol production, CCS retrofits on corn ethanol facilities do not result in carbon removal. We urge standard setters to reconsider how these projects are described, and recommend that carbon removal buyers steer clear of these credits.

<Endnote label='Credits' divider>

Freya authored the commentary. Freya and Kata developed the figures.

Please cite as:

F Chay and K Martin (2023) “Ethanol carbon capture and storage isn’t carbon removal” CarbonPlan <span style={{overflowWrap: 'break-word'}}>[https://carbonplan.org/research/ethanol-cdr-claims](https://carbonplan.org/research/ethanol-cdr-claims)</span>

</Endnote>

<Endnote label='Acknowledgements'>

Thanks to Zeke Hausfather and Randy Spock, who participated in early conversations that shaped the ideas in this commentary and provided comments on the text.

The authors are solely responsible for any mistakes or omissions.

</Endnote>

<Endnote label='Terms'>

This work was supported by a grant from the Patrick J. McGovern Foundation. No one except the authors exercised control over the research process or products. The authors are solely responsible for the content of this commentary, which does not reflect the views of any other individuals or organizations.

Article text and figures made available under a [CC BY 4.0 International license](https://creativecommons.org/licenses/by/4.0/).

</Endnote>
