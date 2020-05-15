module.exports = {
  "type": "ProjectCollection",
  "projects": [
    {
      "type": "Project",
      "name": "Climeworks",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 1.0,
          "notes": "Removes carbon from the atmosphere using a solid chemical sorbent. Carbon dioxide from that process is geologically sequestered in mineral form.",
          "comment": "",
          "removal": 1.0,
          "avoided": 0.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 50.0,
          "units": "tCO2",
          "rating": 1.0,
          "notes": "Volume based on the annual capacity of a pilot plant in Iceland commissioned in October 2017. Larger-scale plants are under construction that may have larger volume.",
          "comment": "Scale of volume is commensurate with published sorbent technology. Technology can be deployed on a modular basis."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.9,
          "units": "",
          "rating": 0.0,
          "notes": "Claims total emissions are 0.1 tCO2 for every 1 tCO2 removed.",
          "comment": "Minimal justification provided, and detailed assessment in collaboration with research group is pending publication. Low ratio likely depends on availability of low-carbon energy in Iceland.",
          "removal": 1.0,
          "emissions": 0.1,
          "kind": "ratio"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 1000.0,
          "units": "years",
          "rating": 1.0,
          "notes": "",
          "comment": "Successful mineralization produces reliable, effectively permanent carbon storage."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 2.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Counterfactual not applicable. Project is already fully subscribed, so any new investments are better construed as investments in future projects rather than fully additional procurements."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 767.5,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Commensurate with other early stage DAC costs on a $/tCO2 basis. Could be independently verified as a function of technology parameters and energy sources."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Basic technology is well understood through both demonstrations and published litearture. Publications on LCA are pending. No publications or public datasets on specific approaches are available."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "dac",
        "mineralization"
      ],
      "id": "STRP01",
      "description": "Direct air capture and mineralization.",
      "location": {
        "name": "Iceland",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "CarbonCure",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 1.0,
          "notes": "Captured industrial CO2 source is mineralized to create building materials. Project also reduces emissions associated with conventional concrete production.",
          "comment": "From a narrow lifecycle perspective, project only avoids CO2 emissions because it sources CO2 from a waste stream. From a broad perspective, the same technology would form a carbon removal pathway if coupled to a biogenic CO2 emissions source or a direct air capture facility.",
          "removal": 0.0,
          "avoided": 1.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 60000.0,
          "units": "tCO2",
          "rating": 0.0,
          "notes": "Volume reflects 200 cement production facilities using the technology. Every 1 tCO2 used is corresponds to 0.85 tCO2 mineralized and 44.45 tCO2 avoided by reducing conventional concrete production emissions from 0.26 tCO2 / m3 to 0.22 tCO2 / m3.",
          "comment": "Reporting 60000 tCO2 as an estimate of current annual volume. Total volume combines utilization and avoided emissions from reducing conventional concrete production. Based on ratios provided in LCA, we infer 1126 total tCO2 utilitized and 58874 tCO2 avoided, though we have not validated this breakdown based on specific project parameters."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.824,
          "units": "",
          "rating": 1.0,
          "notes": "Claims 0.85 tCO2 mineralized and 0.15 tCO2 emitted for every 1 tCO2. Reported ratio of 0.9967 also includes an additional 44.45 tCO2 in avoided emissions arising from its product replacing conventional concrete.",
          "comment": "For consistency, we recompute negativity only for the carbon utilization component, yielding a lower number. LCA boundary conditions are well specified, and several third-party audits of the LCA analysis have been performed.",
          "removal": 0.85,
          "emissions": 0.15,
          "kind": "ratio"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 1000.0,
          "units": "years",
          "rating": 1.0,
          "notes": "",
          "comment": "Successful mineralization produces reliable, effectively permanent carbon storage."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "Counterfactual not specified.",
          "comment": "Cement will already be purchased and used separate from its carbon removal benefits. The carbon removal benefits are being offered separately, albeit for the first time for this company."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 100.0,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Amount charged specifically for carbon removal is arbitrarily set to incentize utilization of the product, which is already economically favorable."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "No publications on primary techology available, but references to several third-party LCAs are provided and available upon request."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "mineralization",
        "materials"
      ],
      "id": "STRP02",
      "description": "Carbon reductions in concrete.",
      "location": {
        "name": "North America",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Nori Harborview Farms",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 0.0,
          "notes": "Broker that facilitates removal of carbon from the atmosphere by incentivizing changes in agricultural practices that increase sequestration in soils.",
          "comment": "Nori is looking only at established soil carbon removal pathways, but has not specified which ones are used in this project. Nori only identifies that the project uses its Nori Croplands methodlogy, and Section 2.3 of Version 1.1 specifies five potential categories of cropland-related soil carbon management.",
          "removal": 1.0,
          "avoided": 0.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 14011.0,
          "units": "tCO2",
          "rating": 0.0,
          "notes": "Volume based on a single supplier, Harborview Farms, which includes 27 plots totaling 14011 tCO2. Volumes calculated using USDA COMET-Farm model, using project-level data collected by Nori. The Nori platform offers a larger portfolio of projects, but they are not considered here.",
          "comment": "Project locations are specified and COMET-Farm is a publicly available tool, but volumes are difficult to independently validate without more transparency around practices applied at project sites, model parameters used, or complete plot details."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": "N/A",
          "units": "",
          "rating": 0.0,
          "notes": "No data provided, but high likelihood it will vary across projects. Claimed guarantee that negativity will be greater than 0.",
          "comment": "Emissions information ought to be available in the COMET-Farm model outputs, but cannot be reproduced as model parameters are not publicly available.",
          "removal": "N/A",
          "emissions": "N/A",
          "kind": "N/A"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 10.0,
          "units": "years",
          "rating": 1.0,
          "notes": "Mentions that projects may continue to store carbon beyond the contract horizon.",
          "comment": "Soil carbon storage can last for decades or more, but it can also be reversed by changes to land use or management practices. Nori requires a 10-year contractual commitment from its projects, which is a reasonable timeframe given bankruptcy and default risks. We report the minimum of the contractual agreement and the biogephysical reality."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 0.0,
          "units": "",
          "rating": "",
          "notes": "Counterfactual not specified.",
          "comment": "Changes to land management practices not specified. Significant co-benefits to land managers claimed alongside climate benefits offered for sale. The Nori Croplands methodology requires additionality, but does not specify how it is determined how to independently identify or validate additionality claims."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 16.5,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Set by the supplier and includes a 10% fee to Nori as broker. Commensurate with (or lower than) existing soil carbon project cost estimates."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Volume and LCA methods based on the public and published COMET-Farm model, but specific project parameters are not made public so analysis and quantification cannot be reproduced."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "soil",
        "broker"
      ],
      "id": "STRP03",
      "description": "Increasing soil carbon sequestration and soil health.",
      "location": {
        "name": "USA",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "IndigoAg",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 0.0,
          "notes": "Broker that facilitates removal of carbon from the atmosphere by incentivizing changes in agricultural practices that increase sequestration in soils.",
          "comment": "Difficult to assess projects' specific removal mechanisms without more transparency. Multiple established soil carbon removal pathways exist, but none are specified in public proposal.",
          "removal": 1.0,
          "avoided": 0.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 550000.0,
          "units": "tCO2",
          "rating": -1.0,
          "notes": "Range of 100k-1M tCO2 based on potential participants in program.",
          "comment": "We report the average of the range. Validation of volume would at a minimum require information on specific projects, and values are only plausible under a significant scale of participation. Carbon crediting methodology from Verra not specified, and carbon crediting methodology from Climate Action Reserve has not been finalized and is in preliminary public review as of this writing."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": "N/A",
          "units": "",
          "rating": 0.0,
          "notes": "No data provided.",
          "comment": "Nothing to say without more information.",
          "removal": "N/A",
          "emissions": "N/A",
          "kind": "N/A"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 100.0,
          "units": "years",
          "rating": -1.0,
          "notes": "Carbon offsets produced under Climate Action Reserve or Verified Carbon Standard protocols require 100-year commitments.",
          "comment": "Soil carbon storage can be reversed by changed land practices. Payment schemes could provide an incentive to prevent reversals, but no information is available about the duration of contractual or other legal obligations to maintain soil carbon practices. Project cites two protocol development processes ongoing at the Climate Action Reserve and Verra, only one of which is available for public comment. 100-year contracts raise significant quesions around bankruptcy and default risks."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 0.0,
          "units": "",
          "rating": "",
          "notes": "Counterfactual not specified.",
          "comment": "Changes to land management practices not specified. Significant co-benefits to land managers claimed alongside climate benefits offered for sale."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 20.0,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Includes 75% for farmers and 25% for monitoring, reporting, and verification work. Cost to farmers is commensurate with (or lower than) existing soil carbon project cost estimates, but justification of monitoring costs are not provided."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 0.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "No information or data on specific projects are publicly available, and methods and protocols are either not publicly available or currently under review."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "soil",
        "broker"
      ],
      "id": "STRP04",
      "description": "Rgenerative farming practices for soil carbon sequestration.",
      "location": {
        "name": "Mid-West and Southern USA",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Biorecro",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 0.0,
          "notes": "Facilitates late-stage BECCS projects, which avoid emissions from biogenic carbon sources and instead capture it for geologic sequestration in rocks' pore space.",
          "comment": "BECCS is a well established technology but project does not provide any specifics on biomass, capture, or sequestration implementation.",
          "removal": 1.0,
          "avoided": 1.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 50000.0,
          "units": "tCO2",
          "rating": 0.0,
          "notes": "Volume appears to be sourced from multiple BECCS projects.",
          "comment": "No public details available on any specific projects, but overall volume reasonable given technology. No specifics available to distinguish relative amounts of removal vs avoided emissions."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.9,
          "units": "",
          "rating": 0.0,
          "notes": "Range expected to vary across sites from 0.9 to 0.995.",
          "comment": "No information provided on specific projects. Based on available data, lifecycle emisisons do not include injection, and appear to exclude biogenic CO2 emissions not captured from production process. Possible uses for enhanced oil recovery would affect overall lifecycle emissions. Lacking more details, we report the lowest, most conservative ratio.",
          "removal": "N/A",
          "emissions": "N/A",
          "kind": "N/A"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 1000.0,
          "units": "years",
          "rating": 0.0,
          "notes": "",
          "comment": "Successful geologic sequestration produces reliable, effectively permanent carbon storage. However, geologic storage stability depends on sound management practices, and project provides no specifics on approach."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "Counterfactual not specified.",
          "comment": "No detail provided. BECCS projects are likely additioinal, but additionality depends on the economics of any applicable tax credits or policy incentives."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 99.0,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Cost commensurate with existing estimates for BECCS."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 0.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "No data on specific projects. Basic technology well understood, but no data or publications on specific approaches, and no references or third-party analyses for LCA."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "biomass",
        "broker"
      ],
      "id": "STRP05",
      "description": "Supporting bio-energy with carbon capture and storage.",
      "location": {
        "name": "North America / Europe",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Carbo Culture",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 1.0,
          "notes": "Avoids emissions from decomposing biomass resources and transforms them into long-lived biochar materials.",
          "comment": "From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. More broadly, the same mechanism forms a carbon removal pathway when coupled to biomass production.",
          "removal": 0.0,
          "avoided": 1.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 56.0,
          "units": "tCO2",
          "rating": 0.0,
          "notes": "Demonstration project in California's central valley, converting walnut shell waste into biochar.",
          "comment": "Volume is based on producing 16.89 tC of biochar with fraction C of at least 85%. For consistency with other biochar projects, volume is reduced to 90% because permanence assumes the duration over which at least 90% of volume will remain. Further validation of volume would require knowing the decay rates of the feedstock."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.965,
          "units": "",
          "rating": 0.0,
          "notes": "Biogenic CO2 emissions are excluded from ratio.",
          "comment": "Few details provided on LCA.",
          "removal": "N/A",
          "emissions": "N/A",
          "kind": "N/A"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 152.0,
          "units": "years",
          "rating": 1.0,
          "notes": "Claims 100 years or more.",
          "comment": "Permanence of biochar depends on chemical composition, storage conditons, and other factors. Using the reported O:C ratio of 0.08 we estimate 152 years as the duration during which 90% of biochar C remains."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "Counterfactual is dumping walnut shells on ground or burning in biomass electricity plant.",
          "comment": "Feedstock is walnut shells that are otherwise dumped on the ground or on roads, e.g. for dust reduction purposes. No analysis provided of competing uses for feedstock."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 1000.0,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Notably higher than other biochar projects without clear justification."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 0.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Minimal public data on project specifics and no publications or public data on underlying process."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "biomass",
        "biochar"
      ],
      "id": "STRP06",
      "description": "Turning woody biomass waste into biochar.",
      "location": {
        "name": "Central Valley, CA, USA",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Droneseed",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 1.0,
          "notes": "Drone technology accelerates reforestation to remove carbon from atmosphere for sequestration in forests.",
          "comment": "",
          "removal": 1.0,
          "avoided": 0.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 31027.0,
          "units": "tCO2",
          "rating": 1.0,
          "notes": "Volume based on a pilot project in the Pacific Northwest, East. Volume stated as computed using Climate Action Reserve's Climate Forward Reforestation Forecast Methodology Version 1.0, which appears in this case to use direct projections based on USFS yield tables for Ponderosa Pine. Claim is 510 tCO2 in the first year (2020), 31026 tCO2 in 51 years (the project lifetime), and 64031 tCO2 over 100 years.",
          "comment": "We independently validated for consistency with U.S. Forest Service yield tables, assuming Ponderosa Pine in Pacific Northwest, East and project size of 211 ha. Assumes reforestation approach works as effectively as assumed, for which there is not yet published data."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 1.0,
          "units": "",
          "rating": 1.0,
          "notes": "Claims 8.60 tCO2 emissions for drone fleet operation and transport, all of which are incurred in the first year of the project.",
          "comment": "Boundary conditions are well specified and drone-related emissions are thoroughly documented. For consistency, we recomputed negativity ratio using the 51-year project lifetime carbon removal estimate of 31,027 tCO2, rather than the removal projected only in 2020.",
          "removal": 31027.0,
          "emissions": 8.6,
          "kind": "project"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 51.0,
          "units": "years",
          "rating": 0.0,
          "notes": "Claims 51 years with potential economic incentives for longer durations.",
          "comment": "Physical risks are unknown as exact location is unknown, but could be large given coarse location in the Pacific Northwest. Socioeconomic risks are significant due to the risk of default or bankruptcy on this time horizon. In addition, because funds will be used to reforest another, unspecified project, there is uncertainty as to the landowner committments and associated risks for this particular project. See our comment on additionality for additional discussion."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 0.0,
          "units": "",
          "rating": -2.0,
          "notes": "Counterfactual is reforesting manually or not at all.",
          "comment": "This project can reasonably be considered an investment in a new technology to lower the cost of reforestation and aforestation. As an investment in a specific quantity of carbon removal, however, it raises important concerns. Although we were able to validate the expected volume for this project, we identified a significant risk of double-counting. The project explicitly disclaims that it is not offering the tons associated with the described project, which Droneseed suggests the landowner may attempt to separately monetize using a carbon offset protocol. Instead, Droneseed specifically notes that any funds raised would go toward the development of future afforestation projects. Any future projects would also be subject to double-counting risks, as the pattern is capable of being repeated without additional clarification."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 8.23,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Costs of $500.20/tCO2 were reported using only the carbon removal of 510 tCO2 expected in 2020, but an estimated 31,026 tCO2 will be removed over the project lifetime. For consistency, we have adjusted the reported $/tCO2 to reflect the total expected benefits across the project's lifetime."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Details are provided on plan and process, but no publications or public data are available on the technology and its performance in reforestation projects."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "forests",
        "reforestation"
      ],
      "id": "STRP07",
      "description": "Reforestation using drone swarms and seed enablement.",
      "location": {
        "name": "WA, USA",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Pachama Rip's Redwoods and Guanare",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 1.0,
          "notes": "Supports verification and evaluation of forest projects, avoiding emissions due to forest loss and removing atmospheric carbon for sequestration in forests and forest products.",
          "comment": "",
          "removal": 1.0,
          "avoided": 1.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 165850.0,
          "units": "tCO2",
          "rating": 0.0,
          "notes": "Volume is the total of two exemplar projects, Rip's Redwoods and Guanare. The Pachama platform offers a larger portfolio of projects, but they are not considered here.",
          "comment": "Sequestration rates of 16 and 26 tCO2 / ha / year for Rip's Redwoods and Guanare, respectively, are broadly commensurate with published literature. Some additional details (e.g. stand age) would be required for a more precise comparison. No evidence provided for specific utility of advanced monitoring methods for improving volume estimates."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.19,
          "units": "",
          "rating": 0.0,
          "notes": "Claims a range of 0.19 to 0.59 across exemplar projects.",
          "comment": "Self-reported value appears unreasonably low, but not enough data is provided for validation. We report the lowest, most conservative ratio; based on project type, however, we would expect a much higher ratio.",
          "removal": "N/A",
          "emissions": "N/A",
          "kind": "N/A"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 46.0,
          "units": "years",
          "rating": 0.0,
          "notes": "Claims 60 years from 2006 for Guanare and 100 years from 2013 for Rip's Redwoods.",
          "comment": "We report the minimum across the estimated permanence for the underlying projects (46 and 97), relative to the year of the proposal (2020). Physical risks are mixed with wildfire are high for Guanare, [unknown for Rip's Redwoods]. Socioeconomic risks are significant due to the risk of default or bankruptcy on this time horizon."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 0.0,
          "units": "",
          "rating": -2.0,
          "notes": "Counterfactual scenarios specified for both projects.",
          "comment": "Guanare afforestation project began in 2006, and thus future carbon removals are already assured under these historical land management practices. Rip's Redwood project already credited for standing carbon stock above regional baseline, which indicates a promise not to harvest normally and therefore raises questions about the additionality of ongoing carbon removal credits."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 8.0,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Cost commensurate with similar forest projects."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 2.0,
          "units": "",
          "rating": -2.0,
          "notes": "",
          "comment": "Basic project characteristics described in detail. No public or published materials on proprietary quantification methods are available, but these methods also do not appear relavant to the stated project carbon removal claims."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "forests",
        "broker"
      ],
      "id": "STRP08",
      "description": "Reforestation projects with verification and monitoring.",
      "location": {
        "name": "Uruguay & CA, USA",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Ocean-based Climate Solutions",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 0.0,
          "notes": "Removes carbon from atmosphere via sequestration in phytoplankton and transport of phytoplankton biomass to deep ocean.",
          "comment": "Novel early-stage technology with pilot demonstrations still in progress. Dissolved carbon storage in deep oceans raises potential long-term carbon cycle and ocean acidification questions.",
          "removal": 1.0,
          "avoided": 0.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 693.0,
          "units": "tCO2",
          "rating": 0.0,
          "notes": "Demonstration project to be deployed offshore California or Hawaii. Project volume based on expected carbon removal over five years.",
          "comment": "Difficult to assess volume due to early stage of technology."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.995,
          "units": "",
          "rating": 0.0,
          "notes": "Reported ratio based on project materials, transportation, and business overhead, totaling 3.6854 tCO2 of emissions for 697 tCO2 removed.",
          "comment": "Project emissions specified in detail, but difficult to validate because technology is early-stage and experimental.",
          "removal": 697.0,
          "emissions": 3.6854,
          "kind": "project"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 1000.0,
          "units": "years",
          "rating": 0.0,
          "notes": "Claims a maximum of 5000, but with unknown reductions due to the potential for outgassing.",
          "comment": "Carbon dioxide removed to lower ocean depths can be stable for millenia, but may affecty ocean acidity and be exposed to surface-atmosphere interactions. Unlike geologic storage this stock has an implied end date for effectivess, albeit a potentially very distant one."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 2.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Counterfactual not applicable. The only reason to implement a project like this is to generate climate benefits, and no such projects are operating today."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 336.07,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "No cost comparisons available due to uniqueness of technology."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Reasonably thorough description of technology with references, but no publications or public data on demonstration projects."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "ocean",
        "phytoplankton"
      ],
      "id": "STRP09",
      "description": "Wave-powered upwelling/downwelling for carbon\u200b sequestration.",
      "location": {
        "name": "Pacific Ocean (offshore of CA)",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Soil Value Exchange",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 0.0,
          "notes": "Broker that facilitates removal of carbon from the atmosphere by incentivizing changes in agricultural practices that increase sequestration in soils.",
          "comment": "Multiple established soil carbon removal pathways exist, but specific mechnaisms for individual projects are not detailed in public proposal.",
          "removal": 1.0,
          "avoided": 0.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 33000.0,
          "units": "tCO2",
          "rating": 0.0,
          "notes": "Specific projects not identified. Claimed volume reflects 10-30 plots totaling 13355 ha with an average of 2.5 tCO2 / ha / year.",
          "comment": "Lack of detail on projects raises questions about overall volume, but claimed rate of 2.5 tCO2 / ha / year is commensurate with existing literature and models."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.5,
          "units": "",
          "rating": 0.0,
          "notes": "Reported ratio only provisional, with amended results to be determined in a future study.",
          "comment": "No clear connection expressed between detailed, project-level expectations and promised future study. Net LCA impacts depend crucially on methane emissions from livestock and no GWP conversion information reported.",
          "removal": "N/A",
          "emissions": "N/A",
          "kind": "N/A"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 10.0,
          "units": "years",
          "rating": 1.0,
          "notes": "Claims 1000+ years in the abscence of behavioral changes.",
          "comment": "Soil carbon storage can be reversed by changed land management practices. Soil Value Exchange requires 10-year contractual commitments, so we report the minimum of the contractual agreement and the biogeophysical reality."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 0.0,
          "units": "",
          "rating": "",
          "notes": "Counterfactual could include conventional grazing and intensive feedlot grazing, but no projects identified and no historical practices identified at specific project sites.",
          "comment": "Not enough information available about participating projects and their past practices to confirm."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 30.0,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Cost appears to include payments to farmers and monitoring, veritification, and reporting, but no breakdown is specified."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 0.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "No public details on projects, no public or published details on planned quantification methods."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "soil",
        "broker"
      ],
      "id": "STRP10",
      "description": "Regenerative land management.",
      "location": {
        "name": "",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "GreenSand",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 1.0,
          "notes": "Project leverages rainwater to weather ground olivine spread on land. Depending on sediment transfer, olivine weathering can result in alkalization of runoff and/or formation of carbonate precipitates, both of which remove carbon from the atmosphere.",
          "comment": "Not known over relavant time scales whether final form of carbon is carbonate precipitates or dissolved bicarbonate.",
          "removal": 1.0,
          "avoided": 0.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 1000.0,
          "units": "tCO2",
          "rating": 0.0,
          "notes": "Timeframe over which expected volume of carbon reductions occurs is not stated.",
          "comment": "Few details available on specific deployment plan. Based on public details from other deployments on project website, expected weathering for all GreenSand deposits since 2007 totals 306 tCO2. Given the $/tCO2 cost of project, it is likely that the claimed volume is over a longer time horizon than a single year."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.74,
          "units": "",
          "rating": 0.0,
          "notes": "Reported ratio for exemplar project based on 2,880 tCO2 removed, 750 tCO2 emitted. LCA also references 509 tCO2 avoided, but avoided emissions are otherwise not considered as part of the project description.",
          "comment": "For consistency, we recompute negativity only for the carbon removal component, yielding a lower number. Detailed analysis only available for one exemplar project, so uncertainty remains for full project portfolio.",
          "removal": 2880.0,
          "emissions": 750.0,
          "kind": "project"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 1000.0,
          "units": "years",
          "rating": 1.0,
          "notes": "",
          "comment": "Successful mineralization produces reliable, effectively permanent carbon storage."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 0.0,
          "units": "",
          "rating": "",
          "notes": "Counterfactual is using alternative rocks without carbon removal benefits.",
          "comment": "Olivine sand will already be purchased and used separate from its carbon removal benefits. The carbon removal benefits are offered separately via certificates."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 35.0,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Cost at the lower end relative to existing approaches. Appears to mainly reflect mining activity and logistics."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Several project details (including locations and durations) are publicly available."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "mineralization",
        "materials"
      ],
      "id": "STRP11",
      "description": "CO2 removal with olivine.",
      "location": {
        "name": "Netherlands",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "SilviaTerra",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 1.0,
          "notes": "Facilities removing carbon from the atmosphere by extending time between forest harvests, avoiding emissions due to harvests and sequestering additional carbon in forests and forest products.",
          "comment": "",
          "removal": 1.0,
          "avoided": 1.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 15000000.0,
          "units": "tCO2",
          "rating": 0.0,
          "notes": "Volume extrapolated from a pilot implementation in 6 counties in Pennsylvania. Projects in 2020 will be sourced from 11 southern US states. Supply will be allocated via an auction.",
          "comment": "Volume estimates will be relatively straightforward to confirm via stocking estimates as a result of the 1-year project duration. However, the plausibility of total volume depends on the number of particpants."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.999,
          "units": "",
          "rating": 1.0,
          "notes": "Emissions estimates based soley on the operations of the small office team that will run the program and a field team that periodically verify project conditions.",
          "comment": "No reason to consider additional emissions given program design.",
          "removal": 1000.0,
          "emissions": 1.0,
          "kind": "ratio"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 1.0,
          "units": "years",
          "rating": 1.0,
          "notes": "Claims that carbon removal from a one-year contract can last up to 10 years as a result of supply chain effects in the timber industry.",
          "comment": "Because SilviaTerra uses an annual contracting model, we report 1 year."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "Counteractual is active forest product harvest.",
          "comment": "By shifting to a ton-year accounting framework, SilviaTerra intends to avoid additionality concerns by measuring actual carbon stored each year. However, other factors, such as exogenous shifts in timber markets, can still affect additionality considerations with respect to forest harvest decisions. Proprietary methods for measurement and verification against field plots were not available at the time of this proposal."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 15.0,
          "units": "$/tCO2-year",
          "rating": "",
          "notes": "",
          "comment": "SilviaTerra uses a ton-year accounting that reflects the cost per tCO2 stored per year. Thus, assuming constant price, a contract to store 1 tCO2 for 1 year at $15/tCO2-year would cost $15 and a contract to store 1 tCO2 for 100 years would cost $1,500."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Reasonably thorough description of program design, but no public details on specific projects or methods for project quantification or selection are currently available."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "forests",
        "avoided conversion"
      ],
      "id": "STRP12",
      "description": "Forest carbon rental markets.",
      "location": {
        "name": "Southern USA",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Breadtree Farms",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 1.0,
          "notes": "Project integrates tree crops and grazing livestock as silvopasture systems, to sequester carbon in both soil and aboveground biomass.",
          "comment": "Planting of chestnut trees is clearly specified, but other aspects of practices to enhance soil carbon remain vague.",
          "removal": 1.0,
          "avoided": 0.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 56.0,
          "units": "tCO2",
          "rating": 0.0,
          "notes": "Volume estimated from calculations using USDA COMET-Planner model (56 tCO2). A higher volume was also provided in parallel using Eric Toensmeier's The Carbon Farming Solution (140 tCO2). Project has 3.2 current ha and intends to add 4.9 ha.",
          "comment": "We report the lower value offered because it is based on a method that includes a broader range of lifecycle emissions and because the project used the lower volume number to calculate project costs. While COMET-Farm is a publicly available tool, volumes are difficult to independently validate without model parameters used. Overall rate of 11.4 tCO2 / ha is commensurate with existing litearture."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.982,
          "units": "",
          "rating": 0.0,
          "notes": "Reported ratio based on emissions from on-site tractor use and employee transportation, totaling 1.04 tCO2 for 56 tCO2 removed.",
          "comment": "Calculation of tractor and transportation emissions are reasonable. Project ratio is consistent with other reforestation projects, but lifecycle boundaries are not explicit. Specifically, no detail provided on methane emissions from livestock expansion and/or any soil carbon benefits.",
          "removal": 56.0,
          "emissions": 1.0,
          "kind": "project"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 30.0,
          "units": "years",
          "rating": 0.0,
          "notes": "Claims 30 to 100 years.",
          "comment": "We report 30 as the minimum of the claimed range. Physical risks are low based on location. Socioeconomic risks are significant due to the risk of default or bankruptcy on this time horizon, but could be mitigated if the project buys and restricts its lands instead of leasing them."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 0.0,
          "units": "",
          "rating": "",
          "notes": "Counterfactual not specified.",
          "comment": "No analysis available in public materials."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 4.14,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Rather than use the reported cost of $100, for consistency with other forest projects, we estimate a cost over the 30 year project lifetime using the provided rate of $1416.43 / ha and the information on provide size and volume."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Methods publicly described and shapefiles for locations provided, but COMET-Planner model parameters and life cycle boundaries are not available."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "forests",
        "agroforestry"
      ],
      "id": "STRP13",
      "description": "Conversion of annual cropland to sheep/chestnut silvopasture.",
      "location": {
        "name": "Johnsonville, NY, USA",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Ecoera",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 1.0,
          "notes": "Avoids emissions from decomposing biomass resources and transforms them into long-lived biochar materials.",
          "comment": "From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.",
          "removal": 0.0,
          "avoided": 1.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 4500.0,
          "units": "tCO2",
          "rating": 0.0,
          "notes": "Biochar produced from established production facility.",
          "comment": "Volume is based on producing 1746.66 tC of biochar with fraction C of 78%. For consistency with other biochar projects, volume is reduced to 90% because permanence assumes the duration over which at least 90% of volume will remain. Further validation of volume would require knowing the decay rates of the feedstock."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.984,
          "units": "",
          "rating": 1.0,
          "notes": "Reported ratio based on 0.046 tCO2 emitted for 2.79 tCO2 stored, with reported emissions including electricity for pre-treatment, transport, and electricity for pyrolysis. Project uses low-carbon electricity from the Nordic grid for pelletizing and pyrolysis.",
          "comment": "Analysis required by Puro is pending but not yet completed. Boundary conditions well specified and LCA components detailed and referenced.",
          "removal": 2.7885,
          "emissions": 0.0455,
          "kind": "ratio"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 760.0,
          "units": "years",
          "rating": 1.0,
          "notes": "Claims 500 to 4000 years.",
          "comment": "Permanence of biochar depends on chemical composition, storage conditons, and other factors. Using the reported O:C ratio of 0.039 we estimate 760 years as the duration over which 90% of biochar C remains."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "Counterfactual not specified.",
          "comment": "Feedstock is agricultural (seed) waste. No analysis provided of competing uses for feedstock."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 100.0,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Cost is commensurate with other biochar projects."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Reasonable details provided on project specifics, uses public analysis as required by Puro for LCA, but no Puro third-party analysis statement available."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "biomass",
        "biochar"
      ],
      "id": "STRP14",
      "description": "Biochar production through pyrolysis.",
      "location": {
        "name": "South Sweden",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Finnish Log House Industry Association",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 1.0,
          "notes": "Avoids emissions from decomposing biomass and sequesters carbon in laminated wood building materials. May also avoid emissions that would come from producing other materials.",
          "comment": "From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.",
          "removal": 0.0,
          "avoided": 1.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 25000.0,
          "units": "tCO2",
          "rating": 1.0,
          "notes": "Volume sourced from multiple facilities across Finland to produce laminated lumber from kiln-dried pine and spruce. Claims an annual production capacity of 40000 tCO2. Project is based on the Puro platform.",
          "comment": "Species and composition of wood and wood products are well characterized."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.776,
          "units": "",
          "rating": 1.0,
          "notes": "Reported ratio based on 0.16 tCO2 emissions for 0.71 tCO2 stored. Boundary conditions include raw materials through production stage. Excludes transport of finished materials and construction-related emissions.",
          "comment": "Analysis performed by third-party with public details, as required by Puro. Boundary conditions well specified and LCA components detailed and referenced.",
          "removal": 0.71,
          "emissions": 0.159,
          "kind": "ratio"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 50.0,
          "units": "years",
          "rating": 1.0,
          "notes": "Claims 50 to 200 years.",
          "comment": "Wood carbon stored in building materials is more durable than in forests. Nevertheless, we report 50 as the minimum of the claimed range."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 0.0,
          "units": "",
          "rating": "",
          "notes": "Counterfactual is either decomposing biomass resources or using to generate heat or electrical energy.",
          "comment": "No specific analysis available."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 20.0,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Difficult to assess cost without more information on building material market, but comparable with similar projects."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Public documentation on LCA is available with third-party analysis as required by Puro, but few public details on manufacturing process."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "biomass",
        "materials"
      ],
      "id": "STRP15",
      "description": "Laminated log production from lumber with CO2 sequestration.",
      "location": {
        "name": "Finland",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Ekovilla",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 1.0,
          "notes": "Avoids emissions from decomposing biomass and sequesters carbon in wood-based blown fiber used for insulation.",
          "comment": "From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.",
          "removal": 0.0,
          "avoided": 1.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 21847.0,
          "units": "tCO2",
          "rating": 1.0,
          "notes": "Volume sourced from multiple facilities across Finland. Project is based on the Puro platform.",
          "comment": "Carbon content of wood products well characterized."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.935,
          "units": "",
          "rating": 1.0,
          "notes": "Reported ratio based on 0.087 tCO2 emissions for 1.34 tCO2 stored. Includesraw materials through production stage. Excludes transport of finished materials and construction-related emissions.",
          "comment": "Analysis performed by third-party with public details, as required by Puro. Boundary conditions well specified and LCA components detailed and referenced.",
          "removal": 1.34,
          "emissions": 0.087,
          "kind": "ratio"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 50.0,
          "units": "years",
          "rating": 1.0,
          "notes": "Claims 50 to 400 years.",
          "comment": "Wood carbon stored in building materials is more durable than in forests. Nevertheless, we report 50 as the minimum of the claimed range."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 0.0,
          "units": "",
          "rating": "",
          "notes": "Counterfactual not specified.",
          "comment": "Existing industry has been in produciton since the 1980s, so the production of insulation doesn't seem contingent on carbon incentives."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 21.5,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Difficult to assess cost without more information on building material market, but comparable with similar projects."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Public documentation on LCA is available with third-party analysis as required by Puro, but few public details on manufacturing process."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "biomass",
        "materials"
      ],
      "id": "STRP16",
      "description": "Net-negative wood products.",
      "location": {
        "name": "Kouvola, Finland",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Carbofex",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 1.0,
          "notes": "Avoids emissions from biomass resources and transforms them into long-lived biochar materials.",
          "comment": "From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.",
          "removal": 0.0,
          "avoided": 1.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 2250.0,
          "units": "tCO2",
          "rating": 0.0,
          "notes": "Volume sourced from a biochar facility in Finland. Project is based on the Puro platform.",
          "comment": "Volume is based on producing 681.20 tC of biochar with fraction C of 92%. For consistency with other biochar projects, volume is reduced to 90% because permanence assumes the duration over which at least 90% of volume will remain. Further validation of volume would require knowing the decay rates of the feedstock. Also, note that the referenced Puro verification reports a rate of 3.1 tCO2 stored for 1 t of biochar rather than 3.4 tCO2, which would imply a C fraction of 85% rather than 92%."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.95,
          "units": "",
          "rating": 1.0,
          "notes": "Reported ratio based on 0.17 tCO2 emitted for 3.4 tCO2 stored. Includes fossil emissions for transporation and pyrolosis. Excludes 1.69 tCO2 emissions from biogenic sources, and does not include transporation to customer.",
          "comment": "Analysis performed by third-party with public details, as required by Puro. Boundary conditions well specified and LCA components detailed and referenced.",
          "removal": 3.4,
          "emissions": 0.17,
          "kind": "ratio"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 1000.0,
          "units": "years",
          "rating": 1.0,
          "notes": "Claims 100 to 5000 years.",
          "comment": "Permanence of biochar depends on chemical composition and storage conditons. Using the reported O:C ratio of 0.021 we estimate 1520 years as the duration during which 90% of biochar C remains."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "Counterfactual not specified.",
          "comment": "Feedstock is residual wood (thinnings). No analysis provided of competing uses for feedstock."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 100.0,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Cost is commensurate with other biochar projects."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 2.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Reasonable details provided on project specifics, public documentation on chemical composition and LCA is available, with third-party analysis as required by Puro."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "biomass",
        "biochar"
      ],
      "id": "STRP17",
      "description": "Biochar and carbon negative energy.",
      "location": {
        "name": "Tampere, Finland",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Vandersanden",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 1.0,
          "notes": "Captured industrial CO2 source is mineralized to create building materials. Project also reduces emissions associated with conventional concrete production.",
          "comment": "From a narrow lifecycle perspective, project only avoids biogenic CO2 emissions. From a broad perspective, the same mechanism forms a carbon removal pathway when coupled to biomass production.",
          "removal": 0.0,
          "avoided": 1.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 10.0,
          "units": "tCO2",
          "rating": 0.0,
          "notes": "Volume based on initial production of 100 t of underlying product. Project is based on the Puro platform.",
          "comment": "Early stage technology is difficult to independently evaluate."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.2,
          "units": "",
          "rating": 0.0,
          "notes": "Claims a range of possible ratios from 0.2 to 0.6 but provides no specifics, noting the process can be adjusted to produce different levels of carbon removal relative to emissions.",
          "comment": "Analysis required by Puro is pending but not yet completed. Lacking more detail we report the lowest, most conservative ratio.",
          "removal": "N/A",
          "emissions": "N/A",
          "kind": "N/A"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 1000.0,
          "units": "years",
          "rating": 1.0,
          "notes": "Claims complete permanence. Mentions resesarch partner for analysis, but no specifics provided.",
          "comment": "Successful mineralization produces reliable, effectively permanent carbon storage."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 2.0,
          "units": "",
          "rating": "",
          "notes": "Counterfactual not specified.",
          "comment": "Project involves initial production from carbon sequestering building materials using relatively expensive CO2 inputs (\u20ac75/tCO2)."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 20.0,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Difficult to assess cost without more information on market."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 0.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Few project details are provided and most appear to be pending future third-party analysis as required by Puro."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "mineralization",
        "materials"
      ],
      "id": "STRP18",
      "description": "Producing bricks and slips by carbonation.",
      "location": {
        "name": "Finland",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Future Forest",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 1.0,
          "notes": "Removes carbon from atmosphere for sequestration in forest and soil carbon stocks, and avoids emissions from lost forest carbon.",
          "comment": "Reforestration of degraded lands is clearly specified, but other aspects of practices to enhance soil carbon remain vague.",
          "removal": 1.0,
          "avoided": 1.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 6380.0,
          "units": "tCO2",
          "rating": 0.0,
          "notes": "Volume projected for one year on a 174 ha land project in Scotland. Claimed breakdown of total volume includes 18.3 - 25.7 tCO2 / ha / year for above ground biomass, 7.3 - 25.7 tCO2E / ha / year for soil carbon, and 11 - 22 tCO2 / ha / year for biochar.",
          "comment": "Project provides references for forest growth rates, though claimed rates of tCO2 / ha / year are on the higher end of published estimates. Estimates for soil carbon difficult to validate without more specifics on planned management practices or site properties."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.995,
          "units": "",
          "rating": 0.0,
          "notes": "Emission calculations based on one-time planting and fencing emissions amortized over 60 years. Various ongoing operations including raising pigs and transporation.",
          "comment": "Boundary conditions and emission sources well specified, and consistent with similar projects. However, claimed carbon removal benefits are on the high end of published estimates, so may inflate the values reported here.",
          "removal": 6380.0,
          "emissions": 29.72,
          "kind": "project"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 60.0,
          "units": "years",
          "rating": 0.0,
          "notes": "Claims 100 to 1000 years.",
          "comment": "Project involves both forests and soil carbon. We report 60 years rather than 100 as 60 is mentioned as a minimum specifically for forests. Physical risks are low based on location. Socioeconomic risks are significant due to the risk of default or bankruptcy on this time horizon. Socioeconomic risks could be reduced, as land is owned by project proponent and proponent has indicated the possibility of permanently restricting land use."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 0.0,
          "units": "",
          "rating": "",
          "notes": "Counterfactual not specified, but appears to involve \"degraded\" land remaining degraded.",
          "comment": "No specific analysis provided."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 20.0,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Costs driven by land price, tree costs, and labour. Commensurate with similar projects."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Reasonably thorough description of project and site, but additional public materials would be useful (e.g. shapefiles, species composition)."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "forests",
        "reforestation"
      ],
      "id": "STRP19",
      "description": "Reforestation offset model.",
      "location": {
        "name": "Scotland",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Carbon Sequestration Inc",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 0.0,
          "notes": "Avoids biomass emissions by burying wood waste in covered pits.",
          "comment": "Technology has not been vetted in practice nor explored carefully in the scientific literature. Pilot pit has yet to be constructed. From a broad lifecycle perspective, successful deployment would form a carbon removal pathway when coupled to biomass production. From a narrow, project-specific lifecycle perspective, project would only avoids biogenic CO2 emissions.",
          "removal": 0.0,
          "avoided": 1.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 71019.0,
          "units": "tCO2",
          "rating": 0.0,
          "notes": "Volume based on loblolly pine waste (slash) to be stored in partially above-ground sealed pits. Total claimed volume reflects pit capacity of 71019 tCO2.",
          "comment": "Could be plausible if sufficient slash volume can be obtained. Additionally depends on validation of pit design."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.904,
          "units": "",
          "rating": 0.0,
          "notes": "Reported ratio based on both transporation and operations, totaling 6,804 tCO2 emitted for 71,019 tCO2 stored.",
          "comment": "Relatively few details provided and no serious analysis of the potential for emissions to leak from pit.",
          "removal": 71019.0,
          "emissions": 6804.0,
          "kind": "project"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 100.0,
          "units": "years",
          "rating": -1.0,
          "notes": "Claims 99% of carbon is permanent at 100 years and 88% is permanent at 100 years.",
          "comment": "Pits are partially above-ground. Risks of emission leakage or anaerobic decomposition not addressed comprehensively."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "Counterfactual not specified.",
          "comment": "No commercial value to storing wood waste in pits. However, no analysis provided of alternative feedstock uses such as bioenergy."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 42.5,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Costs based on purchase of slash ($5), transportation ($5), chipping ($10), pit construction ($10.50), and verification ($12.00)."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "No publications on technique other than a speculative research proposal, and no demonstration projects."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "biomass",
        "burial"
      ],
      "id": "STRP20",
      "description": "Carbon sequestration via logging and wood burial.",
      "location": {
        "name": "East Texas, USA",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Bluesource Doe Mountain",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 1.0,
          "notes": "Avoids emissions from forest loss and removes carbon from the atmosphere for sequestration in forest carbon.",
          "comment": "",
          "removal": 1.0,
          "avoided": 1.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 631845.0,
          "units": "tCO2",
          "rating": 1.0,
          "notes": "Improved forest management project on 8485 acres on state-owned land in Tennessee. Project is projected to generate 770543 tCO2 beneifts over 20 years, the dominant majority of which (545254 tCO2 or 71%) are avoided emissions from forest harvesting. An 18% risk buffer pool is set aside to mitigate against potential reversals, producing a net expected removal of 631845 tCO2. No specific method for calculating forest carbon benefits identified. Buffer pool calculated using American Carbon Registry methods.",
          "comment": "Estimates of 166.7 tCO2 / ha for standing stock and 2.9 tCO2 / ha / year for future growth fall within a highly plausible range based on USFS yield tables."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 1.0,
          "units": "",
          "rating": 1.0,
          "notes": "Reported ratio based on 40.7 tCO2 emitted for 631,845 tCO2 claimed. Project-level emissions mainly reflect monitoring. Removal used in ratio includes deduction of 18% buffer pool.",
          "comment": "High ratio is consistent with similar projects. Project-level emissions are well-specified and forest carbon stocks are readily calculated.",
          "removal": 631845.0,
          "emissions": 40.7,
          "kind": "project"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 40.0,
          "units": "years",
          "rating": 0.0,
          "notes": "Claims 82% likelihood of permanent storage.",
          "comment": "Project appears to occur over 40 year period, so we report that as the permanence. Physical risks are low based on location. Socioeconomic risks are significant due to the risk of default or bankruptcy on this time horizon. Land is owned by state-chartered entity in Tennessee, which may present a different contractual default risk but which is also required to conserve the land for multiple uses. See our comment on additionality."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 0.0,
          "units": "",
          "rating": -2.0,
          "notes": "Counterfactual is harvest of most forest carbon over the period 2018-2021.",
          "comment": "By the end of 2020, 56% of total project climate benefits will have been earned via avoided harvest. Thus, the project has already committed to avoid harvest and therefore the expected carbon removal in later years is already assured. As a result, the entire project appears to be offering climate benefits that have already been promised to other buyers. Land is owned by a state-charted entity that is statutorily obligated to protect the land for multiple uses, of which timber is only one."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 8.0,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Costs commensurate with similar projects."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 2.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Significant project information available from multiple public sources (Stripe Climate 2020 proposal and American Carbon Registry). Shapefiles could not be found."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "forests",
        "avoided conversion"
      ],
      "id": "STRP21",
      "description": "Protecting forest carbon stock.",
      "location": {
        "name": "Mountain City, TN, USA",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -81.851,
            36.442
          ]
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Rizome",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 1.0,
          "notes": "Project removes carbon from atmosphere for sequestration in bamboo and bamboo building materials.",
          "comment": "",
          "removal": 1.0,
          "avoided": 0.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 19700.0,
          "units": "tCO2",
          "rating": 0.0,
          "notes": "Volume based on a 1000 ha pilot, using an unspecified Verified Carbon Standard protocol for calculations. Total includes both 15680 tCO2 based on reforestation and 4020 tCO2 based on storage of existing culms.",
          "comment": "Inferred rate of 15.7 tCO2 / ha / year for the first year of growth is high, but within the range of published allometric estimates for other bamboo species. Given large potential variability due to regional conditions, further validation would require ground measurements and/or the project-referenced VCS biomass methodology to be released in 2021."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.98,
          "units": "",
          "rating": 0.0,
          "notes": "Minimal information reported.",
          "comment": "Difficult to evaluate without more specific information. Lack of detail on the manufacturing process raises questions about the high ratio. Frequent harvests may affect emissions due to harvesting.",
          "removal": "N/A",
          "emissions": "N/A",
          "kind": "N/A"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 50.0,
          "units": "years",
          "rating": 1.0,
          "notes": "Project projects permanence of 80 years for bamboo clumps and 50-100 years for engineered wood products.",
          "comment": "We report 50 as the minimum of the claimed range. For standing bamboo forests, physical risk to fire may be low, but other physical and socioeconomic risks apply on this time horizon. Wood carbon stored in bamboo products, however, will be more durable than in bamboo forests."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 0.0,
          "units": "",
          "rating": "",
          "notes": "Counterfactual not specified. Project appears to target degraded land and suggests alternative land uses, such as native forest plantations, might be feasible but would produce lower overall carbon removal services due to bamboo's extremely high annual productivity.",
          "comment": "Project claims that bamboo building materials have reached parity with conventional wood products. This suggests bamboo planting may not require climate policy incentives. No analysis of competing economics of conventional wood products, alternative land management options."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 10.0,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Costs commensurate with other forest projects, but building material production component is not clearly specified."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 0.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Few project details provided, especially around engineered lumber products, and project refers to VCS standard that has yet to be released."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "forests",
        "materials"
      ],
      "id": "STRP22",
      "description": "Bamboo reforestation and engineered lumber.",
      "location": {
        "name": "Philippines",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Project Vesta",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 1.0,
          "notes": "Project leverages wave power to enhance weathering of olivine spread on beaches. Olivine weathering primarily results in ocean alkalization, which removes carbon from the atmosphere.",
          "comment": "Some uncertainty around whether final form of carbon is dissolved bicarbonate or carbonate precipitates.",
          "removal": 1.0,
          "avoided": 0.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 200.0,
          "units": "tCO2",
          "rating": 1.0,
          "notes": "Volume projected based on total crushed olivine supply to pilot project site.",
          "comment": "Given the stated ratio of 1.25 tCO2 removed per 1 tCO2 of olivine, we infer 160 t of olivine used. Assuming that amount is procured, the volume is plausible."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.961,
          "units": "",
          "rating": 0.0,
          "notes": "Reported ratio based on 0.049 tCO2 for 1.25 tCO2 removed, including energy for mining, milling, and\ntransport. Higher negativity ratio than other mineralization projects is due to using wave energy to displace secondary and tertiary grinding of olivine to small particles needed for carbon removal.",
          "comment": "Boundary conditions well specified and references documented. Project emissions are well characterzied, but reported number depends on the successful use of waves for secondary and tertiary grinding. Because technology is new, we cannot independently validate this claim.",
          "removal": 1.25,
          "emissions": 0.049,
          "kind": "project"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 1000.0,
          "units": "years",
          "rating": 1.0,
          "notes": "Claims 100k - 100M years.",
          "comment": "Successful mineralization produces reliable, effectively permanent carbon storage."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 2.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Counterfactual not applicable. Project would only be pursued for carbon removal purposes. No intrinsic commerical value."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 50.0,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Costs commensurate with similar projects."
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 2.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Project details provided in public proposal with several public white papers and references. Further detail could be provided in the future through pubilc data on pilot deployments."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "mineralization",
        "ocean"
      ],
      "id": "STRP23",
      "description": "Accelerating olivine weathering with wave power for CO2 removal.",
      "location": {
        "name": "Caribbean",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    },
    {
      "type": "Project",
      "name": "Charm Industrial",
      "metrics": [
        {
          "type": "Metric",
          "name": "mechanism",
          "value": "",
          "units": "",
          "rating": 1.0,
          "notes": "Project procures bio-oil, which is converted from biomass via fast pyrolysis. That bio-oil is pumped into an underground waste disposal well for geological storage.",
          "comment": "Both components of the process are well established, and their combination has been proposed but not yet performed. From a narrow lifecycle perspective, project only avoids CO2 emissions by sourcing bio-oil that would otherwise be burned producing CO2 emissions. From a broad perspective, the biomass and bio-oil production coupled to injection forms a carbon removal pathway. Geological sequestration capacity could become a constraint at larger scales.",
          "removal": 0.0,
          "avoided": 1.0
        },
        {
          "type": "Metric",
          "name": "volume",
          "value": 10000.0,
          "units": "tCO2",
          "rating": 1.0,
          "notes": "Volume based on the amount of bio-oil that will be procured for inejection. Bio-oil production is stated as a limiting factor.",
          "comment": "Given the stated ratio of 1.55 tCO2 for 1 t of bio-oil, we infer 6452 t of bio-oil will be procured, with a C fraction of 0.42. Assuming that amount is procured, the volume is plausible."
        },
        {
          "type": "Metric",
          "name": "negativity",
          "value": 0.781,
          "units": "",
          "rating": 0.0,
          "notes": "Reported ratio based on 0.34 tCO2 emitted for 1.55 tCO2 sequestered, including emissions due to bio-oil production, transporation to well, and injection.",
          "comment": "Comprehensive LCA is pending analysis via independent consultant. Boundary conditions for process are well specified and numbers derived from plausible, though still approximate, sources.",
          "removal": 1.55,
          "emissions": 0.34,
          "kind": "ratio"
        },
        {
          "type": "Metric",
          "name": "permanence",
          "value": 1000.0,
          "units": "years",
          "rating": 1.0,
          "notes": "Claims 300M based on permanence of existing crude oil in the same geological formation (Permian Basin).",
          "comment": "Successful geological injection produces reliable, effectively permanent carbon storage."
        },
        {
          "type": "Metric",
          "name": "additionality",
          "value": 1.0,
          "units": "",
          "rating": "",
          "notes": "Competing uses of bio-oil assumed to be burning for energy, but no specific analysis provided. Some possibility that procurement of bio-oil will expand production.",
          "comment": "Competing uses of bio-oil assumed to be burning for energy, but no specific analysis provided."
        },
        {
          "type": "Metric",
          "name": "cost",
          "value": 600.0,
          "units": "$/tCO2",
          "rating": "",
          "notes": "",
          "comment": "Costs based on bio-oil procurement (72%), transport (18%) and injection (10%)"
        },
        {
          "type": "Metric",
          "name": "transparency",
          "value": 2.0,
          "units": "",
          "rating": "",
          "notes": "",
          "comment": "Project specifies process and plan in detail, and both the process components and their combination are based on existing demonstrations and published literature. Further detail could be provided in the future through public data on pilot deployments."
        }
      ],
      "geometry": {
        "type": null
      },
      "tags": [
        "biomass",
        "injection"
      ],
      "id": "STRP24",
      "description": "Geological sequestration of bio-oil",
      "location": {
        "name": "CA, USA",
        "geometry": {
          "type": null
        }
      },
      "program": {
        "name": "Stripe 2020 Negative Emissions Purchase",
        "url": "https://stripe.com/climate"
      }
    }
  ]
}