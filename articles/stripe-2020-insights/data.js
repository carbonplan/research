module.exports = {
  type: 'ProjectCollection',
  projects: [
    {
      type: 'Project',
      name: 'Climeworks',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Removes carbon from the atmosphere using a solid chemical sorbent. Captured carbon dioxide is geologically sequestered in mineral form.',
          comment: '',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 50.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Volume based on the annual capacity of a pilot plant in Iceland commissioned in October 2017. Larger-scale plants are under construction that may offer more volume.',
          comment:
            'Scale of volume is commensurate with published sorbent technology. Technology can be deployed on a modular basis.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.9,
          units: '',
          rating: 0.0,
          notes:
            'Claims total emissions are 0.1 tCO2 for every 1 tCO2 removed.',
          comment:
            'Detailed assessment in collaboration with research group is pending publication. Low ratio likely depends on availability of low-carbon energy in Iceland.',
          removal: 1.0,
          emissions: 0.1,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: '',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'The only reason to implement a project like this is to generate climate benefits. New investments may relate to future deployments rather than current procurements.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 767.5,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: 'Reported value is the average of the range $735-800.',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Basic technology is well understood through both demonstrations and published litearture. Publications on LCA are pending. Publications or public datasets on specific approaches are not yet available.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['dac', 'mineralization'],
      id: 'STRP001',
      description: 'Direct air capture and mineralization.',
      location: {
        name: 'Iceland',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'CarbonCure',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Captured industrial CO2 source is mineralized to create building materials. Project also reduces emissions associated with conventional concrete production.',
          comment:
            'From a narrow lifecycle perspective, project only avoids CO2 emissions because it sources CO2 from a waste stream. From a broad perspective, the same technology would form a carbon removal pathway if coupled to a biogenic CO2 emissions source or a direct air capture facility.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 60000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Volume reflects 200 cement production facilities using the technology. Every 1 tCO2 used is corresponds to 0.85 tCO2 mineralized and 44.45 tCO2 avoided by reducing conventional concrete production emissions from 0.26 tCO2 / m3 to 0.22 tCO2 / m3.',
          comment:
            'Reporting 60000 tCO2 as an estimate of current annual volume. Total volume combines utilization and avoided emissions from reducing conventional concrete production. Based on ratios provided in LCA, we infer 1126 total tCO2 utilitized and 58874 tCO2 avoided. Validating this breakdown would require more specific project parameters.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.824,
          units: '',
          rating: 1.0,
          notes:
            'Claims 0.85 tCO2 mineralized and 0.15 tCO2 emitted for every 1 tCO2. Reported ratio of 0.9967 also includes an additional 44.45 tCO2 in avoided emissions arising from its product replacing conventional concrete.',
          comment:
            'For consistency, we recompute negativity only for the carbon utilization component, yielding a lower number. LCA boundary conditions are well-specified, and several third-party audits of the LCA analysis have been performed.',
          removal: 0.85,
          emissions: 0.15,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: '',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Cement will already be purchased and used separate from its carbon removal benefits. The carbon removal benefits are being offered separately, albeit for the first time for this company.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 100.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment:
            'Amount charged specifically for carbon removal is explicitly set to incentivize utilization of the product, which may already be economically favorable based on project description.',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Publications on specific techology are not yet available, but references to several third-party LCAs are provided and may be available upon request.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['mineralization', 'materials'],
      id: 'STRP002',
      description: 'Carbon reductions in concrete.',
      location: {
        name: 'North America',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Nori Harborview Farms',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Broker facilitates atmospheric carbon removal by providing an incentive to adopt agricultural practices that increase carbon sequestration in soils.',
          comment:
            "Multiple established soil carbon removal pathways exist, including five referenced in the Nori Croplands methodology (Section 2.3 of Version 1.1). According to independent verification by Aster Global, Inc. available on Nori's website, this specific project is practicing no till and planting directly into a living winter cover crop.",
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 14011.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Volume based on a single supplier, Harborview Farms, which includes 27 plots totaling 14011 tCO2. Volumes calculated using USDA COMET-Farm model, using project-level data collected by Nori. The Nori platform offers a larger portfolio of projects, but they are not considered here.',
          comment:
            'Project locations are specified and COMET-Farm is a publicly available tool. Validating volume further would require knowing model parameters used, having more complete plot details, and knowing more about project duration.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes:
            'No data provided, but high likelihood it will vary across projects. Claimed guarantee that negativity will be greater than 0.',
          comment:
            'Emissions information ought to be available in the COMET-Farm model outputs, but cannot be reproduced as model parameters are not available.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 10.0,
          units: 'years',
          rating: 1.0,
          notes:
            'Mentions that projects may continue to store carbon beyond the contract horizon.',
          comment:
            'Soil carbon storage can last for decades or more, but it can also be reversed by changes to land use or management practices. Nori requires a 10-year contractual commitment from its projects, which is a reasonable timeframe given bankruptcy and default risks. We report the minimum of the contractual agreement and the biogeophysical claim.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Changes to land management practices not specified. Significant co-benefits to land managers claimed alongside climate benefits offered for sale. The Nori Croplands methodology requires additionality, but does not specify how it is determined how to independently identify or validate additionality claims.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 16.5,
          units: '$/tCO2',
          rating: '',
          notes:
            'Set by the supplier and includes a 10% fee to Nori as broker.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Several project details (e.g. plot locations) are available. Volume and LCA methods are based on the public and published COMET-Farm model. Specific parameters used for model are not public, limiting ability for independent analysis and quantification.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['soil', 'broker'],
      id: 'STRP003',
      description: 'Increasing soil carbon sequestration and soil health.',
      location: {
        name: 'USA',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
        {
          date: '05-20-2020',
          note: 'Updated mechanism validation based on notes from project website.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Indigo Ag',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Broker facilitates atmospheric carbon removal by providing an incentive to adopt agricultural practices that increase carbon sequestration in soils.',
          comment:
            'Multiple established soil carbon removal pathways exist, but validating project mechanisms would require specific project details.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 550000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Range of 100k-1M tCO2 based on potential participants in program.',
          comment:
            'We report the average of the range. Validation of volume would at a minimum require information on specific projects, and values are only plausible under a significant scale of participation, for example, 0.5M ha of farmland at a rate of 1 tCO2 / ha / yr.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 'N/A',
          units: '',
          rating: 0.0,
          notes: 'No data provided.',
          comment: '',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 100.0,
          units: 'years',
          rating: 0.0,
          notes:
            'Claims that offsets issued under Climate Action Reserve or Verra protocols require 100-year commitments.',
          comment:
            'Soil carbon storage can be reversed by changed land management practices. Project claims that offset protocols ensure permanence on a 100-year timeframe, but of the protocols mentioned, only one is public in draft form (Climate Action Reserve) and it does not require projects to make legally-binding contracts for 100 years.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Changes to land management practices not specified. Significant co-benefits to land managers claimed alongside climate benefits offered for sale.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 20.0,
          units: '$/tCO2',
          rating: '',
          notes:
            'Includes 75% for farmers and 25% for monitoring, reporting, and verification work.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'No information or data on specific projects are publicly available, and methods and protocols are either not publicly available or currently under review.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['soil', 'broker'],
      id: 'STRP004',
      description:
        'Regenerative farming practices for soil carbon sequestration.',
      location: {
        name: 'Midwest and Southern USA',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Biorecro',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            "Broker facilitates BECCS projects, which avoid emissions from biogenic carbon sources and instead capture it for geologic sequestration in rocks' pore space.",
          comment:
            'BECCS is a well-established technology. Project acts as a broker, rather than deploying a particular technology or process, so specific mechanisms could vary across sites.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 50000.0,
          units: 'tCO2',
          rating: 0.0,
          notes: 'Volume appears to be sourced from multiple BECCS projects.',
          comment:
            'Overall volume reasonable given technology. Further validation, including distinguishing relative amounts of removal vs avoided emissions, would require more specifics on individual projects in portfolio.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.9,
          units: '',
          rating: 0.0,
          notes: 'Range expected to vary across sites from 0.9 to 0.995.',
          comment:
            'Based on available project information, lifecycle emisisons do not include injection, and appear to exclude biogenic CO2 emissions not captured from production process. Possible uses for enhanced oil recovery would affect overall lifecycle emissions. Lacking more details, we report the lowest, most conservative ratio.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 0.0,
          notes: '',
          comment:
            'Successful geologic sequestration produces reliable, effectively permanent carbon storage. However, geologic storage stability depends on sound management practices, which could vary by specific project sites.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'BECCS projects are likely additioinal, but specifics depend on the economics of any applicable tax credits or policy incentives.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 99.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Basic technology is well understood. Few data on specific projects or deployment sites available in proposal or on project website. No references or third-party analyses available yet for LCA.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['biomass', 'broker'],
      id: 'STRP005',
      description: 'Supporting bio-energy with carbon capture and storage.',
      location: {
        name: 'North America / Europe',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Carbo Culture',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from decomposing biomass resources and transforms them into long-lived biochar materials.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. More broadly, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 56.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            "Demonstration project in California's central valley, converting walnut shell waste into biochar.",
          comment:
            'Volume is based on producing 16.89 t of biochar with at least 85% C by mass. For consistency with other biochar projects, volume is decreased by 10% because permanence assumes the duration over which 90% of volume will remain. Further validation of volume would require knowing the decay rates of the feedstock.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.965,
          units: '',
          rating: 0.0,
          notes: 'Biogenic CO2 emissions are excluded from ratio.',
          comment:
            'Boundary conditions are well-specified and process described. Full LCA is pending several additional details.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 680.0,
          units: 'years',
          rating: 1.0,
          notes: 'Claims 100 years or more.',
          comment:
            'Using the reported O:C ratio of 0.08 and a simple published model we estimate 680 years as an approximate duration during which 90% of biochar C remains. This should be considered approximate, as permanence is only weakly correlated with composition, and likely depends on the storage environment and other factors.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes:
            'Counterfactual is dumping walnut shells on ground or burning in biomass electricity plant.',
          comment:
            'Feedstock is walnut shells that are otherwise dumped on the ground or on roads, e.g. for dust reduction purposes. Further analysis would require knowing competing uses for feedstock.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 1000.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Reasonable details are provided on project specifics. Additional documentaiton on LCA and other certification may be available upon request.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['biomass', 'biochar'],
      id: 'STRP006',
      description: 'Turning woody biomass waste into biochar.',
      location: {
        name: 'Central Valley, CA, USA',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Droneseed',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Drone technology accelerates reforestation to remove carbon from atmosphere for sequestration in forests.',
          comment: '',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 31027.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            "Volume based on a pilot project in the Pacific Northwest, East (USFS designation). Volume stated as computed using Climate Action Reserve's Climate Forward Reforestation Forecast Methodology Version 1.0, which appears in this case to use direct projections based on USFS yield tables for Ponderosa Pine. Claim is 510 tCO2 in the first year (2020), 31026 tCO2 in 51 years (the project lifetime), and 64031 tCO2 over 100 years.",
          comment:
            'We independently validated against USFS yield tables, assuming Ponderosa Pine in Pacific Northwest, East and project size of 211 ha. Assumes reforestation approach works as effectively as assumed, including seedling survival rates, for which public data or publications are not yet available.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 1.0,
          units: '',
          rating: 1.0,
          notes:
            'Claims 8.60 tCO2 emissions for drone fleet operation and transport, all of which are incurred in the first year of the project.',
          comment:
            'Boundary conditions are well-specified and drone-related emissions are thoroughly documented. For consistency, we recomputed negativity ratio using the 51-year project lifetime carbon removal estimate of 31,027 tCO2, rather than the removal projected only in 2020.',
          removal: 31027.0,
          emissions: 8.6,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 51.0,
          units: 'years',
          rating: 0.0,
          notes:
            'Claims 51 years with potential economic incentives for longer durations.',
          comment:
            'Physical risks are unknown as exact location is unknown, but could be large given coarse location in the Pacific Northwest. Socioeconomic risks are significant due to the risk of default or bankruptcy on this time horizon. In addition, because funds will be used to reforest another project, there is uncertainty as to the landowner committments and associated risks. See our comment on additionality for additional discussion.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: '',
          notes: 'Counterfactual is reforesting manually or not at all.',
          comment:
            'This project can be considered an investment in a new technology to lower the cost of reforestation, with funding likely going to future reforestation projects. As an investment in a specific quantity of carbon removal, however, there are then concerns about double-counting, as the landowner may attempt to separately monetize the same carbon benefits using a carbon offset protocol, and this pattern could repeat in future iterations.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 8.23,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment:
            "Costs of $500.20/tCO2 were reported using only the carbon removal of 510 tCO2 expected in 2020, but an estimated 31,026 tCO2 will be removed over the project lifetime. For consistency, we have adjusted the reported $/tCO2 to reflect the total expected benefits across the project's lifetime.",
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Details are provided on plan and process, but no publications or public data are available on the new technology and its performance in reforestation projects.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['forests', 'reforestation'],
      id: 'STRP007',
      description: 'Reforestation using drone swarms and seed enablement.',
      location: {
        name: 'WA, USA',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: "Pachama Rip's Redwoods and Guanare",
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Projects avoids emissions by avoiding forest loss and removes atmospheric carbon for sequestration in forests and forest products.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 165850.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            "Volume is the total of two exemplar projects, Rip's Redwoods and Guanare. The Pachama platform offers a larger portfolio of projects, but they are not considered here.",
          comment:
            "Claimed sequestration rates of 16 and 26 tCO2 / ha / yr for Rip's Redwoods and Guanare, respectively, are on the high end of published literature. Additional details on project (e.g. stand ages) and more information on proprietary quantification methods would be useful for validating volume.",
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.19,
          units: '',
          rating: 0.0,
          notes: 'Claims a range of 0.19 to 0.59 across exemplar projects.',
          comment:
            'Self-reported value appears unreasonably low, but not enough data is provided for validation. We report the lowest, most conservative ratio. Based on project type, however, we would expect a much higher ratio.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 46.0,
          units: 'years',
          rating: 0.0,
          notes:
            "Claims 60 years from 2006 for Guanare and 100 years from 2013 for Rip's Redwoods.",
          comment:
            "We report the minimum across the estimated permanence for the underlying projects (46 and 97), relative to the year of the proposal (2020). Physical risks are mixed with wildfire are high for Guanare, and low to moderate for Rip's Redwoods. Socioeconomic risks are significant due to the risk of default or bankruptcy on this time horizon.",
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: '',
          notes: 'Counterfactual scenarios specified for both projects.',
          comment:
            "Guanare project began in 2006, and thus future carbon removals are already assured under these historical land management practices. Rip's Redwood project already credited for standing carbon stock above regional baseline, which indicates a promise not to harvest normally and therefore raises questions about the additionality of ongoing carbon removal credits.",
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 8.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment: 'Basic project characteristics are described in detail.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['forests', 'broker'],
      id: 'STRP008',
      description: 'Reforestation projects with verification and monitoring.',
      location: {
        name: 'Uruguay & CA, USA',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Ocean-based Climate Solutions',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Removes carbon from atmosphere via sequestration in phytoplankton and transport of phytoplankton biomass to deep ocean.',
          comment:
            'Novel early-stage technology with pilot demonstrations in progress. Dissolved carbon storage in deep oceans raises potential long-term carbon cycle and ocean acidification questions.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 693.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Demonstration project to be deployed offshore California or Hawaii. Project volume based on expected carbon removal over 5 years.',
          comment:
            'Difficult to assess volume due to early stage of technology.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.995,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio based on project materials, transportation, and business overhead, totaling 3.6854 tCO2 of emissions for 697 tCO2 removed.',
          comment:
            'Project emissions specified in detail, but difficult to validate because technology is early-stage and experimental.',
          removal: 697.0,
          emissions: 3.6854,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 0.0,
          notes:
            'Claims a maximum of 5000, but with unknown reductions due to the potential for outgassing.',
          comment:
            'Carbon dioxide removed to lower ocean depths can be stable for millennia, but may affect ocean acidity and be exposed to surface-atmosphere interactions. Unlike geologic storage this stock has an implied end date for effectiveness, albeit a potentially very distant one.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'The only reason to implement a project like this is to generate climate benefits, and no such projects are operating today.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 336.07,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Reasonably thorough description of technology with references. Specific publications or public data on demonstration projects not available.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['ocean', 'phytoplankton'],
      id: 'STRP009',
      description:
        'Wave-powered upwelling/downwelling for carbon\u200b sequestration.',
      location: {
        name: 'Pacific Ocean (near CA)',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Soil Value Exchange',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Broker facilitates atmospheric carbon removal by providing an incentive to adopt agricultural practices that increase carbon sequestration in soils.',
          comment:
            'Multiple established soil carbon removal pathways exist. Specific mechnaisms for individual projects are not detailed.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 33000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Specific projects not identified. Claimed volume reflects 10-30 plots totaling 13355 ha with an average of 2.5 tCO2 / ha / year.',
          comment:
            'Claimed rate of 2.5 tCO2 / ha / yr is broadly commensurate with a range from existing literature and models. Few project specific details are available to validate volume further.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.5,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio provisional based on several referenced publications, with amended results to be determined in a future study.',
          comment:
            'Connection between existing references, project plans, and future study not clear. Net LCA impacts depend on methane emissions from livestock and no GWP conversion information reported.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 10.0,
          units: 'years',
          rating: 1.0,
          notes: 'Claims 1000+ years in the abscence of behavioral changes.',
          comment:
            'Soil carbon storage can be reversed by changed land management practices. Soil Value Exchange requires 10-year contractual commitments, so we report the minimum of the contractual agreement and the biogeophysical claim.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes:
            'Counterfactual could include conventional grazing and intensive feedlot grazing, but no projects identified and no historical practices identified at specific project sites.',
          comment: 'Participating projects and their past practices unknown.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 30.0,
          units: '$/tCO2',
          rating: '',
          notes:
            'Cost appears to include payments to farmers and monitoring, veritification, and reporting, but no breakdown is specified.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'No details available on specific projects. Protocol is under development but not yet available.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['soil', 'broker'],
      id: 'STRP010',
      description: 'Regenerative land management.',
      location: {
        name: '',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'GreenSand',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project leverages rainwater to weather ground olivine spread on land. Depending on sediment transfer, olivine weathering can result in alkalization of runoff and/or formation of carbonate precipitates, both of which remove carbon from the atmosphere.',
          comment:
            'Not known over relavant time scales whether final form of carbon is carbonate precipitates or dissolved bicarbonate.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 1000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Timeframe over which expected volume of carbon reductions occurs is not stated.',
          comment:
            'Few details available on specific deployment plan. Based on public details from other deployments on project website, expected weathering for all GreenSand deposits since 2007 totals 306 tCO2. Given the $/tCO2 cost of project, it is likely that the claimed volume is over a longer time horizon than a single year.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.74,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio for exemplar project based on 2,880 tCO2 removed, 750 tCO2 emitted. LCA also references 509 tCO2 avoided, but avoided emissions are otherwise not considered as part of the project description.',
          comment:
            'For consistency, we recompute negativity only for the carbon removal component, yielding a lower number. Detailed analysis only available for one exemplar project, so we are uncertain about the full project portfolio and the specific proposal we analyzed.',
          removal: 2880.0,
          emissions: 750.0,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: '',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes:
            'Counterfactual is using alternative rocks without carbon removal benefits, at least when olivine is purchased for use as gravel.',
          comment:
            'Olivine can be purchased and used separate from its carbon removal benefits, but can also be purchased separately only for carbon removal.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 35.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Basic technology is reasonably well-described in the published literature. Several project details (including locations and durations) are publicly available.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['mineralization', 'materials'],
      id: 'STRP011',
      description: 'CO2 removal with olivine.',
      location: {
        name: 'Netherlands',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'SilviaTerra',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Facilitates atmospheric carbon removal by extending time between forest harvests, avoiding emissions due to harvests and sequestering additional carbon in forests and forest products.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 15000000.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Volume extrapolated from a pilot implementation in 6 counties in Pennsylvania. Projects in 2020 will be sourced from 11 southern US states. Supply will be allocated via an auction.',
          comment:
            'Volume will be relatively straightforward to confirm via stocking estimates as a result of the 1 year project duration. Plausibility of large total volume depends on the number of particpants.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.999,
          units: '',
          rating: 1.0,
          notes:
            'Emissions estimates based soley on the operations of the small office team that will run the program and a field team that periodically verify project conditions.',
          comment:
            'No reason to consider additional emissions given program design.',
          removal: 1000.0,
          emissions: 1.0,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1.0,
          units: 'years',
          rating: 1.0,
          notes:
            'Claims that carbon removal from a one-year contract can last up to 10 years as a result of supply chain effects in the timber industry.',
          comment:
            'Because SilviaTerra uses an annual contracting model, we report 1 year.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: 'Counteractual is active forest product harvest.',
          comment:
            'By shifting to a ton-year accounting framework, SilviaTerra intends to avoid additionality concerns by measuring actual carbon stored each year. However, other factors, such as exogenous shifts in timber markets, can still affect additionality considerations with respect to forest harvest decisions. Proprietary methods for measurement and verification against field plots are not yet available.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 15.0,
          units: '$/tCO2-year',
          rating: '',
          notes: '',
          comment:
            'SilviaTerra uses a ton-year accounting that reflects the cost per tCO2 stored per year. Thus, assuming constant price, a contract to store 1 tCO2 for 1 year at $15/tCO2-year would cost $15 and a contract to store 1 tCO2 for 100 years would cost $1,500.',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Reasonably thorough description of program design. Details on specific projects or methods for project quantification or selection are not yet publicly available.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['forests', 'avoided conversion'],
      id: 'STRP012',
      description: 'Forest carbon rental markets.',
      location: {
        name: 'Southern USA',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Breadtree Farms',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project integrates tree crops and grazing livestock as silvopasture systems, to sequester carbon in both soil and aboveground biomass.',
          comment:
            'Planting of chestnut trees is clearly specified. Other practices that will be used to enhance soil carbon are are less clear.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 56.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            "Volume estimated from calculations using USDA COMET-Planner model (56 tCO2). A higher volume was also provided in parallel using Eric Toensmeier's The Carbon Farming Solution (140 tCO2). Project has 3.2 current ha and intends to add 4.9 ha.",
          comment:
            'We report the lower value offered because it is based on a method that includes a broader range of lifecycle emissions and because the project used the lower volume number to calculate project costs. While COMET-Farm is a publicly available tool, validating volume would require knowing model parameters used. Overall rate of 11.4 tCO2 / ha / yr is high if only including above ground biomass, but may be plausible given broader considerations.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.982,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio based on emissions from on-site tractor use and employee transportation, totaling 1.04 tCO2 for 56 tCO2 removed.',
          comment:
            'Calculation of tractor and transportation emissions appear reasonable. Project ratio is consistent with other reforestation projects, but lifecycle boundaries are not explicit. Specifically, no detail provided on methane emissions from livestock expansion and/or any soil carbon benefits.',
          removal: 56.0,
          emissions: 1.0,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 30.0,
          units: 'years',
          rating: 0.0,
          notes: 'Claims 30 to 100 years.',
          comment:
            'We report 30 as the minimum of the claimed range. Physical risks are low based on location. Socioeconomic risks are significant due to the risk of default or bankruptcy on this time horizon, but could be mitigated if the project buys and restricts its lands instead of leasing them.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment: 'No specific analysis available.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 4.14,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment:
            'Rather than use the reported cost of $100, for consistency with other forest projects, we estimate a cost over the 30 year project lifetime using the provided rate of $1416.43 / ha and the information on provide size and volume.',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Methods publicly described and shapefiles for locations provided. Model parameters for COMET-Planner and life cycle boundaries are not yet available.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['forests', 'agroforestry'],
      id: 'STRP013',
      description:
        'Conversion of annual cropland to sheep/chestnut silvopasture.',
      location: {
        name: 'Johnsonville, NY, USA',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Ecoera',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from decomposing biomass resources and transforms them into long-lived biochar materials.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 4500.0,
          units: 'tCO2',
          rating: 0.0,
          notes: 'Biochar produced from established production facility.',
          comment:
            'Volume is based on producing 1746.66 t of biochar with 78% C by mass. For consistency with other biochar projects, volume is decreased by 10% because permanence assumes the duration over which 90% of volume will remain. Further validation of volume would require knowing the decay rates of the feedstock.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.982,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio based on 0.046 tCO2 emitted for 2.79 tCO2 stored, with reported emissions including electricity for pre-treatment, transport, and electricity for pyrolysis. Project uses low-carbon electricity from the Nordic grid for pelletizing and pyrolysis.',
          comment:
            'Analysis required by Puro is pending but not yet completed. Boundary conditions well-specified and LCA components detailed and referenced. Minor permanence adjustment made for consistency with other biochar projects.',
          removal: 2.50965,
          emissions: 0.0455,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 869.0,
          units: 'years',
          rating: 1.0,
          notes: 'Claims 500 to 4000 years.',
          comment:
            'Using the reported O:C ratio of 0.039 and a simple published model, we estimate 760 years as an approximate duration over which 90% of biochar C remains. This should be considered approximate, as permanence is only weakly correlated with composition, and likely depends on the storage environment and other factors.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Feedstock is agricultural (seed) waste. Further analysis would require knowing competing uses for feedstock.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 100.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Reasonable details provided on project specifics, and uses public analysis as required by Puro for LCA. Third-party audit is pending.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['biomass', 'biochar'],
      id: 'STRP014',
      description: 'Biochar production through pyrolysis.',
      location: {
        name: 'South Sweden',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Finnish Log House Industry Association',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from decomposing biomass and sequesters carbon in laminated wood building materials. May also avoid emissions that would come from producing other materials.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 25000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Volume sourced from multiple facilities across Finland to produce laminated lumber from kiln-dried pine and spruce. Claims an annual production capacity of 40000 tCO2. Project is based on the Puro platform.',
          comment:
            'Species and composition of wood and wood products are well-characterized. Volume appears plausible assuming the given procurement.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.776,
          units: '',
          rating: 1.0,
          notes:
            'Reported ratio based on 0.16 tCO2 emissions for 0.71 tCO2 stored. Boundary conditions include raw materials through production stage. Excludes transport of finished materials and construction-related emissions.',
          comment:
            'Analysis performed by third-party with public details, as required by Puro. Boundary conditions well-specified and LCA components detailed and referenced.',
          removal: 0.71,
          emissions: 0.159,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 50.0,
          units: 'years',
          rating: 1.0,
          notes: 'Claims 50 to 200 years.',
          comment:
            'Wood carbon stored in building materials is more durable than in forests. We report 50 as the minimum of the claimed range, which is plausible based on existing literature.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes:
            'Counterfactual is either decomposing biomass resources or using to generate heat or electrical energy.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 20.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Public documentation on LCA is available with third-party analysis as required by Puro, but few public details on manufacturing process.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['biomass', 'materials'],
      id: 'STRP015',
      description:
        'Laminated log production from lumber with CO2 sequestration.',
      location: {
        name: 'Finland',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Ekovilla',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from decomposing biomass and sequesters carbon in wood and paper-based blown fiber used for insulation.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 21847.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Volume sourced from multiple facilities across Finland. Project is based on the Puro platform.',
          comment:
            'Carbon content of insulation products well-characterized. Volume appears plausible assuming the given procurement.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.935,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio based on 0.087 tCO2 emissions for 1.34 tCO2 stored. Includes raw materials through production stage. Excludes transport of finished materials and construction-related emissions.',
          comment:
            'Analysis performed by third-party with public details, as required by Puro. Boundary conditions generally well-specified and LCA components detailed and referenced. Paper products form a key component of the feedstock material, so it would be useful to characterize any emissions associated with their production.',
          removal: 1.34,
          emissions: 0.087,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 50.0,
          units: 'years',
          rating: 0.0,
          notes: 'Claims 50 to 400 years.',
          comment:
            'Wood carbon stored in building materials is likely more durable than in forests, but less is known about the specific blown loose wool materials described here. We report 50 as the minimum of the claimed range, but are unable to validate the duration with confidence.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Existing industry has been in production since the 1980s, so the production of insulation does not seem contingent on carbon incentives.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 21.5,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Public documentation on LCA is available with third-party analysis as required by Puro, but few public details on manufacturing process.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['biomass', 'materials'],
      id: 'STRP016',
      description: 'Net-negative wood products.',
      location: {
        name: 'Kouvola, Finland',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Carbofex',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from biomass resources and transforms them into long-lived biochar materials.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 2250.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Volume sourced from a biochar facility in Finland. Project is based on the Puro platform.',
          comment:
            'Volume is based on producing 681.20 t of biochar with 92% C by mass. For consistency with other biochar projects, volume is decreased by 10% because permanence assumes the duration over which 90% of volume will remain. Further validation of volume would require knowing the decay rates of the feedstock. Also, note that the referenced Puro verification reports a rate of 3.1 tCO2 stored for 1 t of biochar rather than 3.4 tCO2, which would imply a C fraction of 85% rather than 92%.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.944,
          units: '',
          rating: 1.0,
          notes:
            'Reported ratio based on 0.17 tCO2 emitted for 3.4 tCO2 stored. Includes fossil emissions for transporation and pyrolosis. Excludes 1.69 tCO2 emissions from biogenic sources, and does not include transporation to customer.',
          comment:
            'Analysis performed by third-party with public details, as required by Puro. Boundary conditions well-specified and LCA components detailed and referenced. Minor permanence adjustment made for consistency with other biochar projects.',
          removal: 3.06,
          emissions: 0.17,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 807.0,
          units: 'years',
          rating: 1.0,
          notes: 'Claims 100 to 5000 years.',
          comment:
            'Using the reported O:C ratio of 0.021 and a simple published model, we estimate 1520 years as an approximate duration during which 90% of biochar C remains. This should be considered approximate, as permanence is only weakly correlated with composition, and likely depends on the storage environment and other factors.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Feedstock is residual wood (thinnings). Further analysis would require knowing competing uses for feedstock.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 100.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Reasonable details provided on project specifics, public documentation on chemical composition and LCA is available, with third-party analysis as required by Puro.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['biomass', 'biochar'],
      id: 'STRP017',
      description: 'Biochar and carbon negative energy.',
      location: {
        name: 'Tampere, Finland',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Vandersanden',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Captured industrial CO2 source is mineralized to create building materials. Project also reduces emissions associated with conventional concrete production.',
          comment:
            'From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 10.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Volume based on initial production of 100 t of underlying product. Project is based on the Puro platform.',
          comment:
            'Early stage of technology makes it difficult to independently evaluate volume.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.2,
          units: '',
          rating: 0.0,
          notes:
            'Claims a range of possible ratios from 0.2 to 0.6 but provides no specifics, noting the process can be adjusted to produce different levels of carbon removal relative to emissions.',
          comment:
            'Analysis required by Puro is pending but not yet completed. Lacking more detail we report the lowest, most conservative ratio.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes:
            'Claims complete permanence. Mentions resesarch partner for analysis, but no specifics provided.',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Project involves initial production from carbon sequestering building materials using relatively expensive CO2 inputs (\u20ac75/tCO2).',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 20.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Several third-party analyses as required by Puro are still pending and not yet available.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['mineralization', 'materials'],
      id: 'STRP018',
      description: 'Producing bricks and slips by carbonation.',
      location: {
        name: 'Finland',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Future Forest',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Removes carbon from atmosphere for sequestration in forest and soil carbon stocks, and avoids emissions from lost forest carbon.',
          comment:
            'Reforestration of degraded lands is clearly specified, but other aspects of practices to enhance soil carbon remain vague.',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 6380.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Volume projected for one year on a 174 ha land project in Scotland. Claimed breakdown of total volume includes 18.3 - 25.7 tCO2 / ha / year for above ground biomass, 7.3 - 25.7 tCO2E / ha / year for soil carbon, and 11 - 22 tCO2 / ha / year for biochar.',
          comment:
            'Project provides references for forest growth rates, though claimed rates of tCO2 / ha / yr are on the high end of published estimates. Estimates for soil carbon difficult to validate without more specifics on planned management practices or site properties.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.995,
          units: '',
          rating: 0.0,
          notes:
            'Emission calculations based on one-time planting and fencing emissions amortized over 60 years. Various ongoing operations including raising pigs and transporation.',
          comment:
            'Boundary conditions and emission sources well-specified, and consistent with similar projects. Claimed carbon removal benefits are on the high end of published estimates, which may explain the high value reported here.',
          removal: 6380.0,
          emissions: 29.72,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 60.0,
          units: 'years',
          rating: 0.0,
          notes: 'Claims 100 to 1000 years.',
          comment:
            'Project involves both forests and soil carbon. We report 60 years rather than 100 as 60 is mentioned as a minimum specifically for forests. Physical risks are low based on location. Socioeconomic risks are significant due to the risk of default or bankruptcy on this time horizon. Socioeconomic risks could be reduced, as land is owned by project proponent and proponent has indicated the possibility of permanently restricting land use.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes:
            'Counterfactual not specified, but appears to involve "degraded" land remaining degraded.',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 20.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Reasonably thorough description of project and site, but additional public materials would be useful for analysis (e.g. shapefiles, species composition).',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['forests', 'reforestation'],
      id: 'STRP019',
      description: 'Reforestation offset model.',
      location: {
        name: 'Scotland',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Carbon Sequestration Inc',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 0.0,
          notes:
            'Avoids biomass emissions by burying wood waste in covered pits.',
          comment:
            'Technology has not been vetted in practice nor explored carefully in the scientific literature. Pilot pit has yet to be constructed. From a broad lifecycle perspective, successful deployment would form a carbon removal pathway when coupled to biomass production. From a narrow, project-specific lifecycle perspective, project would only avoid biogenic CO2 emissions.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 71019.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Volume based on loblolly pine waste (slash) to be stored in partially above-ground sealed pits. Total claimed volume reflects pit capacity of 71019 tCO2.',
          comment:
            'Total volume could be plausible if sufficient slash volume can be obtained. Additionally depends on validation of pit design.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.904,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio based on both transporation and operations, totaling 6,804 tCO2 emitted for 71,019 tCO2 stored.',
          comment:
            'Relatively few details provided. Serious analysis required around the potential for emissions to leak from pit.',
          removal: 71019.0,
          emissions: 6804.0,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 100.0,
          units: 'years',
          rating: 0.0,
          notes:
            'Claims a range of 88% carbon permanent at 100 years to 99% permanent at 100 years.',
          comment:
            'Pits are partially above-ground. Risks of emission leakage or anaerobic decomposition not addressed comprehensively.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'No commercial value to storing wood waste in pits. Further analysis would require knowing competing uses for feedstock.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 42.5,
          units: '$/tCO2',
          rating: '',
          notes:
            'Costs based on purchase of slash ($5), transportation ($5), chipping ($10), pit construction ($10.50), and verification ($12.00).',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 0.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Only publication on technique is a speculative research proposal. No demonstration projects yet.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['biomass', 'burial'],
      id: 'STRP020',
      description: 'Carbon sequestration via logging and wood burial.',
      location: {
        name: 'East Texas, USA',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Bluesource Doe Mountain',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Avoids emissions from forest loss and removes carbon from the atmosphere for sequestration in forest carbon.',
          comment: '',
          removal: 1.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 631845.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Improved forest management project on 8485 acres on state-owned land in Tennessee. Project is projected to generate 770543 tCO2 beneifts over 20 years, the dominant majority of which (545254 tCO2 or 71%) are avoided emissions from forest harvesting. An 18% risk buffer pool is set aside to mitigate against potential reversals, producing a net expected removal of 631845 tCO2. No specific method for calculating forest carbon benefits identified. Buffer pool calculated using American Carbon Registry methods.',
          comment:
            'Estimates of 166.7 tCO2 / ha for standing stock and 2.9 tCO2 / ha / yr for future growth fall within a highly plausible range based on USFS yield tables.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 1.0,
          units: '',
          rating: 1.0,
          notes:
            'Reported ratio based on 40.7 tCO2 emitted for 631,845 tCO2 claimed. Project-level emissions mainly reflect monitoring. Removal used in ratio includes deduction of 18% buffer pool.',
          comment:
            'High ratio is consistent with similar projects. Project-level emissions are well-specified and forest carbon stocks are readily calculated.',
          removal: 631845.0,
          emissions: 40.7,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 40.0,
          units: 'years',
          rating: 0.0,
          notes: 'Claims 82% likelihood of permanent storage.',
          comment:
            'Project appears to occur over 40-year period, so we report that as the permanence. Physical risks are low based on location. Socioeconomic risks are significant due to the risk of default or bankruptcy on this time horizon. Land is owned by state-chartered entity in Tennessee, which may present a different contractual default risk compared to fully private parties but which is also required to conserve the land for multiple uses. See our comment on additionality.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 0.0,
          units: '',
          rating: '',
          notes:
            'Counterfactual is harvest of most forest carbon over the period 2018-2021.',
          comment:
            'By the end of 2020, 56% of total project climate benefits will have been earned via avoided harvest. Thus, the project has already committed to avoid harvest and therefore the expected carbon removal in later years is already assured. As a result, the project appears to be offering climate benefits that have already been promised to other buyers. Land is owned by a state-charted entity that is statutorily obligated to protect the land for multiple uses, of which timber is only one.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 8.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Significant project information available from multiple public sources (Stripe Climate 2020 proposal and American Carbon Registry), although digital shapefiles could not be found.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['forests', 'avoided conversion'],
      id: 'STRP021',
      description: 'Protecting forest carbon stock.',
      location: {
        name: 'Mountain City, TN, USA',
        geometry: {
          type: 'Point',
          coordinates: [-81.851, 36.442],
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Rizome',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project removes carbon from atmosphere for sequestration in bamboo and bamboo building materials.',
          comment: '',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 19700.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Volume based on a 1000 ha pilot, using an unspecified Verified Carbon Standard protocol for calculations. Total includes both 15680 tCO2 based on reforestation and 4020 tCO2 based on storage of existing culms.',
          comment:
            'Inferred rate of 15.7 tCO2 / ha / yr for the first year of growth is high, but within the range of published allometric estimates for other bamboo species. Given large potential variability due to regional conditions, further validation would require ground measurements and/or the project-referenced VCS biomass methodology to be released in 2021.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.98,
          units: '',
          rating: 0.0,
          notes: 'Minimal information reported.',
          comment:
            'Difficult to evaluate without more information. Lack of detail on the manufacturing process raises questions about the high ratio. Frequent harvests may affect emissions.',
          removal: 'N/A',
          emissions: 'N/A',
          kind: 'N/A',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 50.0,
          units: 'years',
          rating: 1.0,
          notes:
            'Project projects permanence of 80 years for bamboo clumps and 50-100 years for engineered wood products.',
          comment:
            'We report 50 as the minimum of the claimed range. For standing bamboo forests, physical risk to fire may be low, but other physical and socioeconomic risks apply on this time horizon. Wood carbon stored in bamboo products, however, will be more durable than in bamboo forests.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 1.0,
          units: '',
          rating: '',
          notes:
            "Counterfactual not specified. Project appears to target degraded land and suggests alternative land uses, such as native forest plantations, might be feasible but would produce lower overall carbon removal services due to bamboo's extremely high annual productivity.",
          comment:
            'Project claims that bamboo building materials have reached parity with conventional wood products. This suggests bamboo planting may not require climate policy incentives. No analysis available of competing economics of conventional wood products or alternative land management.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 10.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 1.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Reasonably thorough description of project plan. Few details avaialble around engineered lumber products. Project refers to VCS standard that has yet to be released.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['forests', 'materials'],
      id: 'STRP022',
      description: 'Bamboo reforestation and engineered lumber.',
      location: {
        name: 'Philippines',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Project Vesta',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project uses wave power to enhance weathering of olivine spread on beaches. Olivine weathering primarily results in ocean alkalization, which removes carbon from the atmosphere.',
          comment:
            'Some uncertainty around whether final form of carbon is dissolved bicarbonate or carbonate precipitates.',
          removal: 1.0,
          avoided: 0.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 200.0,
          units: 'tCO2',
          rating: 0.0,
          notes:
            'Volume projected based on total crushed olivine supply to pilot project site.',
          comment:
            'Assuming the stated ratio of 1.25 tCO2 removed per 1 tCO2 of olivine, we infer 160 t of olivine will be procured. That ratio likely an upper bound, and in genreal some uncertainty remains around the actual volume of carbon removal that is likely with this approach, requiring further work to validate.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.961,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio based on 0.049 tCO2 for 1.25 tCO2 removed, including energy for mining, milling, and transport. Higher negativity ratio than other mineralization projects is due to using wave energy to displace secondary and tertiary grinding of olivine to small particles needed for carbon removal.',
          comment:
            'Boundary conditions well-specified and references documented. Project emissions are well-characterzied, but reported number depends on the successful use of waves for secondary and tertiary grinding, and on the claimed ratio of 1.25 tCO2 removed for 1 t of olivine, which is an upper bound. Thus, while the estimate is plausible, some uncertainty remains.',
          removal: 1.25,
          emissions: 0.049,
          kind: 'project',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes: 'Claims 100k - 100M years.',
          comment:
            'Successful mineralization produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Project would only be pursued for carbon removal purposes. No intrinsic commerical value.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 50.0,
          units: '$/tCO2',
          rating: '',
          notes: '',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Project details provided in public proposal with several public white papers and references. Further detail could be provided in the future through public data on pilot deployments.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['mineralization', 'ocean'],
      id: 'STRP023',
      description:
        'Accelerating olivine weathering with wave power for CO2 removal.',
      location: {
        name: 'Caribbean',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
      ],
    },
    {
      type: 'Project',
      name: 'Charm Industrial',
      metrics: [
        {
          type: 'Metric',
          name: 'mechanism',
          value: '',
          units: '',
          rating: 1.0,
          notes:
            'Project uses bio-oil converted from biomass via fast pyrolysism and then pumped into an underground waste disposal well for geological storage.',
          comment:
            'Both components of the process are well established, and their combination has been proposed but not yet performed. Project claims bio-oil purchased is in excess capacity from supplier, and that the source sawdust would have otherwise decomposed. From a narrow lifecycle perspective, the project avoids CO2 emissions because the source sawdust from which the bio-oil was procured would have decomposed, resulting in biogenic CO2 emissions. From a broad perspective, coupling biomass production, bio-oil production, and underground injection forms a carbon removal pathway. Geological sequestration capacity could become a constraint at larger scales.',
          removal: 0.0,
          avoided: 1.0,
        },
        {
          type: 'Metric',
          name: 'volume',
          value: 10000.0,
          units: 'tCO2',
          rating: 1.0,
          notes:
            'Volume based on the amount of bio-oil that will be procured for inejection. Bio-oil production is stated as a limiting factor.',
          comment:
            'Given the stated ratio of 1.55 tCO2 for 1 t of bio-oil, we infer 6452 t of bio-oil will be procured. Assuming that amount is procured, the volume is plausible.',
        },
        {
          type: 'Metric',
          name: 'negativity',
          value: 0.773,
          units: '',
          rating: 0.0,
          notes:
            'Reported ratio based on 0.34 tCO2 emitted for 1.55 tCO2 sequestered, including emissions due to bio-oil production, transporation to well, and injection.',
          comment:
            'Comprehensive LCA is pending analysis via independent consultant. Boundary conditions for process are well-specified and numbers derived from plausible, though approximate, sources.',
          removal: 1.53,
          emissions: 0.347,
          kind: 'ratio',
        },
        {
          type: 'Metric',
          name: 'permanence',
          value: 1000.0,
          units: 'years',
          rating: 1.0,
          notes:
            'Claims 300M based on permanence of existing crude oil in the same geological formation (Permian Basin).',
          comment:
            'Successful geological injection produces reliable, effectively permanent carbon storage.',
        },
        {
          type: 'Metric',
          name: 'additionality',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Project claims bio-oil is purchased from supplier\u2019s unused, excess capacity, so would not have been used as a fossil fuel replacement. Project also claims that the source sawdust would have otherwise decomposed and would not have been used as a fossil fuel replacement. The high cost for the pilot project and the lack of inherent commercial value provide evidence of additionality. Some possibility that at larger scales bio-oil procurement would result in future expanded bio-oil production or that the future acquisition of biological feedstocks would compete with fossil fuel displacement.',
        },
        {
          type: 'Metric',
          name: 'cost',
          value: 600.0,
          units: '$/tCO2',
          rating: '',
          notes:
            'Costs based on bio-oil procurement (72%), transport (18%), and injection (10%)',
          comment: '',
        },
        {
          type: 'Metric',
          name: 'specificity',
          value: 2.0,
          units: '',
          rating: '',
          notes: '',
          comment:
            'Project specifies process and plan in detail, and both the process components and their combination are based on existing demonstrations and published literature. Further detail could be provided in the future through public data on pilot deployments.',
        },
      ],
      geometry: {
        type: null,
      },
      tags: ['biomass', 'injection'],
      id: 'STRP024',
      description: 'Geological sequestration of bio-oil',
      location: {
        name: 'CA, USA',
        geometry: {
          type: null,
        },
      },
      source: {
        name: 'Stripe 2020 Negative Emissions Purchase',
        license: 'CC-BY-4.0',
        url: 'https://github.com/stripe/negative-emissions-source-materials',
      },
      revisions: [
        {
          date: '05-18-2020',
          note: 'First release.',
        },
        {
          date: '05-30-2020',
          note: 'Updated comment on mechanism, and updated comment and increased score on additionality, after project developer identified a mistake in how the report described information about the counterfactual.',
        },
      ],
    },
  ],
}
