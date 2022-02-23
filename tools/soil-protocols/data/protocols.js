export const protocols = {
  SOIL001: {
    id: 'SOIL001',
    name: 'Gold Standard',
    entity: 'Gold Standard',
    details: {
      protocol: 'Improved Tillage Module',
      links: [
        {
          name: 'Improved Tillage Module v1.0',
          href: 'https://globalgoals.goldstandard.org/402-1-luf-agr-am-soc-module-improved-tillage/',
        },
        {
          name: 'Soil Organic Carbon Framework Methodology v1.0',
          href: 'https://globalgoals.goldstandard.org/402-luf-agr-fm-soil-organic-carbon-framework-methodolgy/',
        },
        {
          name: 'Principles and Requirements v1.2',
          href: 'https://globalgoals.goldstandard.org/101-par-principles-requirements/',
        },
        {
          name: 'GHG Emissions Reduction & Sequestration Product Requirements v2.0',
          href: 'https://globalgoals.goldstandard.org/standards/501_V2.0_PR_GHG-Emissions-Reductions-Sequestration.pdf',
        },
        {
          name: 'Land Use and Forestry Activity Requirements v1.2.1',
          href: 'https://globalgoals.goldstandard.org/standards/203_V1.2.1_AR_LUF-Activity-Requirements.pdf',
        },
        {
          name: 'Safeguarding Principles & Requirements v1.2',
          href: 'https://globalgoals.goldstandard.org/103-par-safeguarding-principles-requirements/',
        },
        {
          name: 'VMD0021 Estimation of Stocks in the Soil Carbon Pool v1.0',
          href: 'https://verra.org/wp-content/uploads/2018/03/VMD0021-Estimation-of-Stocks-in-the-Soil-Carbon-Pool-v1.0.pdf), \n[ICRAF Protocol',
        },
      ],
      parties: ['Gold Standard', 'TREES consulting'],
      status: 'No projects yet',
      projects: 'N/A',
      notes:
        'Protocol presents guidance to quantify GHG emissions from implementing conservation tillage practices. It was published in 2020. ',
      comments:
        'The Tillage Module must be read alongside several other documents to form a complete picture of this protocol. There is significant optionality in its implementation, which makes interpretation and analysis more difficult. ',
      timeline: {
        activity: [-5, 0],
        crediting: [-3, 10],
        registration: [0],
        verification: [0, 5, 10],
        permanence: [-3, 10],
      },
    },
    metrics: {
      durability: {
        score: 2,
        details: {
          buffer_pool: {
            value: 'Required',
            reference:
              'Soil Organic Carbon Framework Methodology v1.0, Section 13; GHG Emissions Reductions & Sequestration Product Requirements, Section 11.1',
            comment: '',
          },
          leakage_test: {
            value: 'Required',
            reference:
              'Soil Organic Carbon Framework Methodology v1.0, Section 13; GHG Emissions Reductions & Sequestration Product Requirements, Section 11.1',
            comment: '',
          },
          uncertainty_deduction: {
            value: 'Required',
            reference:
              'Soil Organic Carbon Framework Methodology v1.0, Section 13; GHG Emissions Reductions & Sequestration Product Requirements, Section 11.1',
            comment: '',
          },
          onsite_verification: {
            value: 'Required',
            reference:
              'Soil Organic Carbon Framework Methodology v1.0, Section 16; Principles & Requirements v1.2, Section 5.1.26',
            comment: '',
          },
          sampling_verification: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See Soil Organic Carbon Framework Methodology, Section 16 for general monitoring requirements. ',
          },
          crediting_period: {
            value: 10,
            reference: 'Improved Tillage Module v1.0, Section 4.2',
            comment:
              'The project crediting period shall be fixed ten years and cannot be renewed.',
          },
          permanence: {
            value: 10,
            reference: 'Not described',
            comment:
              'No permanence beyond the crediting period is described. See Improved Tillage Module, Section 4.2. ',
          },
          notes:
            'The project is required to contribute 20% of issued credits into the Gold Standard buffer pool, with the amount specified by an activity module. Credits from another Gold Standard certified project may be contributed to the buffer pool in leu of credits issued to the project in question. If methodology for calculating project scenario SOC change results in an uncertainty of more than 20%, an additional uncertainty deduction is applied. Protocol outlines a leakage test that is applied if project area yields decrease as documented by project owner. The crediting period is a fixed ten years and cannot be renewed. ',
          comments:
            'The buffer pool contribution can come from another Gold Standard project in lieu of credits issued to the project in question, setting up a scenario where credits from older lower-quality projects can be used to fulfill buffer pool obligations. The verification process can be entirely desk-based, with no physical site visit or sampling requirement.',
        },
      },
      practices: {
        value: { tillage: 1, cropping: 0, inputs: 0, grazing: 0, other: 0 },
        details: {
          included: {
            value: ['Tillage'],
            reference: 'Improved Tillage Module v1.0, Section 3',
            comment: 'Protocol exclusively credits reduced tillage.',
          },
          geographies: {
            value: 'Global ',
            reference: 'Implied',
            comment:
              'See Improved Tillage Module v1.0, Section 3 for general discussion of eligibility. No specific geographic limitations provided.',
          },
          cobenefits: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          notes:
            'Eligible practices include conservation tillage, or any form of minimum or reduced tillage, where residue, mulch, or sod is left on the soil surface to protect soil and conserve moisture. ',
          comments:
            'Methodology focuses entirely on conservation or reduced tillage and does not apply to the implementation of no-till practices.',
        },
      },
      additionality: {
        score: 1,
        details: {
          financial: {
            value: 'Allowed',
            reference:
              'Land Use and Forestry Activity Requirements v1.2.1, Section 3.1.16',
            comment: '',
          },
          performance: {
            value: 'Allowed',
            reference:
              'Land Use and Forestry Activity Requirements v1.2.1, Section 3.1.16',
            comment: '',
          },
          other: {
            value: 'Allowed',
            reference:
              'Land Use and Forestry Activity Requirements v1.2.1, Section 3.1.16',
            comment: '',
          },
          activity_backdating: {
            value: 5,
            reference:
              'Land Use and Forestry Activity Requirements v1.2.1, Section 3.1.14',
            comment:
              'A project must apply for Gold Standard certification within 5 years of activity start date, but may only be backcredited three years',
          },
          crediting_backdating: {
            value: 3,
            reference:
              'GHG Emissions Reduction & Sequestration Product Requirements v2.0, Section 10.2.1; Land Use and Forestry Activity Requirements v1.2.1, Section 3.1.17',
            comment:
              'A project must apply for Gold Standard certification within 5 years of activity start date, but may only be backcredited three years',
          },
          notes:
            'The protocol provides three options for demonstrating additionality, based on general Gold Standard practices rather than protocol-specific requirements. ',
          comments:
            "It is not clear that the additionality screens would functionally screen out a non-additional practice. Option (1) refers to multiple Clean Development Mechanism approaches that look to project-level financial additionality or barrier tests, some of which are no longer in effect in the CDM; Option (2) automatically qualifies projects in some low-income countries; and Option (3) provides a common practice test that projects pass if less than 5% of projects in a K\u00f6ppen climate classification region have adopted similar practices. These options are offered not in the protocol, but as part of Gold Standard's broader approach to additionality. ",
        },
      },
      rigor: {
        score: 1,
        details: {
          ghgs: {
            value: ['CO\u2082', 'N\u2082O'],
            reference:
              'Improved Tillage Module v1.0, Section 4.3 and 9; Soil Organic Carbon Framework Methodology v1.0 , Sections 4.4 and 10',
            comment:
              'The primary GHG monitored with all SOC project activities is CO\u2082. Monitoring may also include emissions from increased nitrogen fertilizer (N\u2082O), increased combustion of fossil fuels or electricity (CO\u2082), or other agrochemical emissions. GHG emissions considered insignificant (less than 5% of total emission reduction and sequestration) may be omitted from monitoring. Because methane is not explicitly included in this list and any changes in methane are likely to be insignificant under this threshold, we do not include methane on the list of included GHGs.',
          },
          bulk_density: {
            value: 'Unclear',
            reference:
              'Soil Organic Carbon Framework Methodology v1.0, Section 5.1',
            comment:
              'Only one of three quantification options requires soil sampling. Within this measurement-based approach, the approved sampling protocols appear to require bulk density measurements. (see VCS Module VMD0021, Step 3 and ICRAF Protocol, Section 3.3.3.2). ',
          },
          depth: {
            value: 'Variable',
            reference:
              'Soil Organic Carbon Framework Methodology v1.0, Annex 1; VMD0021, p.6-8',
            comment:
              'Sampling follows external protocols. Two protocols are approved, with additional protocols subject to review and approval by Gold Standard. In at least one of the currently approved protocols, required sampling depth is variable and determined via pre-sampling (see VMD0021). Minimum depth for modeling approach is not specified. ',
          },
          equivalent_soil_mass: {
            value: 'Allowed',
            reference:
              'Soil Organic Carbon Framework Methodology v1.0, Section 7.1; VCS VMD0021, Step 6.2a ',
            comment:
              'If Approach 1 (1 of 3 available approaches) is used to quantify SOC, the project may use VCS Module VMD0021, which requires the quantification of equivalent mass soil. ',
          },
          uncertainty: {
            value: 'Required',
            reference:
              'Soil Organic Carbon Framework Methodology v1.0, Section 9',
            comment: '',
          },
          baseline_type: {
            value: 'Fixed',
            reference:
              'Improved Tillage Module v1.0, Section 6.1; Soil Organic Carbon Framework Methodology v1.0, Section 6.1',
            comment:
              'The Module allows selection of one of three approaches to baseline: (1) on-site measurements, (2) use of peer-reviewed publications, and (3) IPCC default factors and reference values. In all cases, the baseline is fixed, and defined as SOC before the project start. ',
          },
          baseline_scenario: {
            value: 'Sampling allowed / Modeling allowed',
            reference:
              'Soil Organic Carbon Framework Methodology v1.0, Section 6.1',
            comment:
              'Baseline can be assessed using 1 of 3 approaches: on-site measurements, calculations, datasets, parameters and/or models from peer-reviewed publications (ensuring research results are conservative and applicable to the project site and management practice), and using default IPCC factors ',
          },
          project_scenario: {
            value: 'Sampling allowed / Modeling allowed',
            reference:
              'Improved Tillage Module v1.0, Section 7.1; Soil Organic Carbon Framework Methodology v1.0, Section 7.1',
            comment:
              'Project scenario SOC can be assessed using 1 of 3 approaches: on-site measurements, calculations, datasets, parameters and/or models from peer-reviewed publications (ensuring research results are conservative and applicable to the project site and management practice), and using default IPCC factors ',
          },
          empirical_crediting: {
            value: 'No',
            reference:
              'Improved Tillage Module v1.0, Section 7.1; Soil Organic Carbon Framework Methodology v1.0, Section 7.1',
            comment:
              'SOC can be quantified either with direct measurements (Approach 1) or using modeling approaches or default factors (Approach 2 or 3).',
          },
          sampling_approach: {
            value: 3,
            reference:
              'Soil Organic Carbon Framework Methodology v1.0, Annex 1; VCS Module VMD0021, Steps 1-4; ICRAF  Protocol, Section 2',
            comment:
              'Both approved sampling protocols (VCS VMD0021 and ICRAF) require rigorous statifiation, sampling randomization, characterization of within-site variability to determine sampling density, and calculating SOC on a mass basis with measurements to a depth that encompasses 90% of the SOC stock. Additional sampling protocols may be submitted to Gold Standard for approval. ',
          },
          model: {
            value: 'Flexible / Undefined',
            reference: 'Improved Tillage Module v1.0, Section 5.1',
            comment: '',
          },
          notes:
            'The primary GHG monitored with all SOC project activities is CO\u2082; CH\u2084 and N\u2082O monitoring is not required. The baseline scenario is defined by the land management practices during 5 years prior to the project start date, default conventional tillage. Three approaches can be used to quantify the baseline and project scenarios: (1) onsite direct measurements, (2) calculations from peer-reviewed publications or models, or (3) application of default factors (IPCC tier 1 or 2, with preference for tier 2).',
          comments:
            'Protocol allows for purely model-based crediting, but also permits empirical crediting at the discretion of users. Direct sampling is not required, but if sampling is applied, the methodology is robust. If modeling is applied, there is not enough guidance provided to ensure an appropriate modeling approach and the model used does not have to be publicly available. Not all GHG emission sources that may be affected by the project activity are included. This protocol stands out for having robust sampling requirements that are optional, and weak modeling requirements that can be used instead \u2014 potentially leading to either high or low rigor outcomes, depending on project choices. (Update: Gold Standard has indicated it is revisiting validation requirements for Approaches 2 and 3, with new rules expected in early 2022 that could require soil sampling.)',
        },
      },
      safeguards: {
        score: 3,
        details: {
          landowner_protections: {
            value: 'Yes',
            reference: 'Safeguarding Principles & Requirements',
            comment: '',
          },
          community_engagement: {
            value: 'Yes',
            reference: 'Safeguarding Principles & Requirements',
            comment: '',
          },
          data_privacy: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          notes:
            'Protocol has a generally applicable safeguards document. Our initial analysis did not identify this document, and therefore our original score (1/3) failed to account for its contents. We regret the error.',
          comments:
            'Protocol safeguards include numerous procedural and substantive standards to address landowner protections and community engagement. These standards are general rather than specific to soil carbon. We were unable to identify any privacy-related protections.',
        },
      },
      rating: { score: 2 },
    },
    revisions: [
      { date: '07-15-2021', note: 'First release.' },
      {
        date: '08-04-2021',
        note: 'Added a document for review (Safeguarding Principles). Updated the metadata comment, safeguards sub-metrics, safeguards score, and overall rating to reflect the newly included document. Updated rigor comment to reflect planned changes to sampling requirements, per direct correspondence with Gold Standard. Additional details regarding these changes can be found at https://carbonplan.org/research/soil-protocols-explainer-gold-standard-response.',
      },
    ],
  },
  SOIL002: {
    id: 'SOIL002',
    name: 'Nori',
    entity: 'Nori',
    details: {
      protocol: 'Pilot Croplands Methodology v1.2',
      links: [
        {
          name: 'Pilot Croplands Methodology v1.2',
          href: 'https://storage.googleapis.com/nori-prod-cms-uploads/Nori_Croplands_Methodology_1_2_5435488110/Nori_Croplands_Methodology_1_2_5435488110.pdf',
        },
        {
          name: 'How Nori Works v1.0.3',
          href: 'https://storage.googleapis.com/nori-prod-cms-uploads/how_nori_works_c7037d96c1/how_nori_works_c7037d96c1.pdf',
        },
        {
          name: 'Nori Data Use Policy (03/2021)',
          href: 'https://storage.googleapis.com/nori-prod-cms-uploads/NORI_DATA_USE_POLICY_456dee66d0/NORI_DATA_USE_POLICY_456dee66d0.pdf',
        },
        {
          name: 'Soil Metrics Greenhouse Gas Implementation Tool model',
          href: 'https://soilmetrics.eco/',
        },
        { name: 'COMET-Farm', href: 'http://comet-farm.com/' },
        {
          name: 'DayCent Ecosystem Model Manual',
          href: 'https://gitlab.com/soilmetrics/ggit-api-docs/-/blob/master/Daycent%20Model%20Documentation/DayCent_Manual_full_07.06.2020.pdf',
        },
      ],
      parties: ['Nori', 'Soil Metrics'],
      status: 'Credits issued',
      projects:
        "Nori sells credits on a first-in, first-out basis. See the project currently for sale on [Nori's sales platform](https://nori.com/remove-carbon). ",
      notes:
        'Protocol credits estimated changes to SOC as a result of a broad set of potential soil management and crop production practice changes. This version of the protocol was published in 2021. ',
      comments:
        'This version of the protocol applies to "pilot projects", which include all current participants in the Nori marketplace. The protocol indicates it is meant to be read alongside the "How Nori Works" manual, however the current version of the "How Nori Works" document is outdated. Overall, this protocol self-contained and easy to interpret. ',
      timeline: {
        activity: [-11, 0],
        crediting: [-5, 1],
        registration: [0],
        verification: [0, 3, 6, 9, 10],
        permanence: [-5, 10],
      },
    },
    metrics: {
      durability: {
        score: 1,
        details: {
          buffer_pool: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          leakage_test: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          uncertainty_deduction: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          onsite_verification: {
            value: 'None',
            reference: 'Pilot Croplands Methodology v1.2, Section 5.1',
            comment:
              'Furing the verification of the Project, the verifier can forego a site visit if the Primary Contact provides key pieces of evidence.',
          },
          sampling_verification: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See Pilot Croplands Methodology v1.2, Sections 3.3.2 and 5.1 for general guidance on verification.  ',
          },
          crediting_period: {
            value: 1,
            reference: 'Not described',
            comment:
              'Nori does not really use the concept of a crediting period. After initial verification, a project may sign as many NRT agreements as they would like. Each NRT agreement generates a new 10 year monitoring requirement. We represent this arrangement as a crediting period of one year, and a permanence period of 10 years. ',
          },
          permanence: {
            value: 10,
            reference: 'Pilot Croplands Methodology v1.2, Section 1.4',
            comment:
              'Nori does not really use the concept of a crediting period. After initial verification, a project may sign as many NRT agreements as they would like. Each NRT agreement generates a new 10 year monitoring requirement. We represent this arrangement as a crediting period of one year, and a permanence period of 10 years. ',
          },
          notes:
            'The protocol does not have a buffer pool, leakage deduction, or uncertainty deduction. Projects must complete a reporting process for at least 10 years after credit issuance. Verification is entirely desk-based. ',
          comments:
            'Nori appears to be developing \u2014 but has not yet implemented \u2014 an alternative insurance mechanism based on crytocurrency called the Nori Token. There are no risk management practices in the pilot phase. ',
        },
      },
      practices: {
        value: { tillage: 1, cropping: 1, inputs: 1, grazing: 0, other: 1 },
        details: {
          included: {
            value: ['Cropping', 'Inputs', 'Tillage', 'Other'],
            reference: 'Pilot Croplands Methodology v1.2, Section 2.3',
            comment: '',
          },
          geographies: {
            value: 'Continental United States',
            reference: 'Pilot Croplands Methodology v1.2, Section 2.7',
            comment: '',
          },
          cobenefits: {
            value: 'None',
            reference: 'Pilot Croplands Methodology v1.2, Section 3.4',
            comment:
              'Nori explicitly indicates its exclusive focus on carbon, and recommends tracking other co-benefits elsewhere.',
          },
          notes:
            'Any practice that can be modeled (or modeled by proxy) by approved models is eligible under this protocol. ',
          comments:
            'After demonstrating the implementation of at least one eligible activity, a project is not obligated to continue that particular practice throughout the crediting period. Any ongoing activities that maintain or increase SOC compared to the modeled baseline will result in crediting. ',
        },
      },
      additionality: {
        score: 1,
        details: {
          financial: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See Pilot Croplands Methodology v1.2, Section 2.6 for general treadment of additionality. ',
          },
          performance: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See Pilot Croplands Methodology v1.2, Section 2.6 for general treadment of additionality. ',
          },
          other: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See Pilot Croplands Methodology v1.2, Section 2.6 for general treadment of additionality. ',
          },
          activity_backdating: {
            value: 11,
            reference: 'Pilot Croplands Methodology v1.2, Section 2.5',
            comment:
              'Project must provide evidence of undertaking at least one eligible project activity on or after January 1, 2010. ',
          },
          crediting_backdating: {
            value: 5,
            reference: 'Pilot Croplands Methodology v1.2, Section 1 (p.1)',
            comment:
              'Up to 5 years of "grandfathered NRTs" are available to pilot projects. All pariticpating projects are currently pilot projects. ',
          },
          notes:
            'Protocol does not include any additionality screens, and defines additionality as any "verifiable activity or practice change." ',
          comments:
            'The protocol does not test for additionality and explicitly defines any observed outcomes as additional. Because it allows for significant activity and credit backdating, it can credit activities implemented far in advance of project registration. ',
        },
      },
      rigor: {
        score: 1,
        details: {
          ghgs: {
            value: ['None'],
            reference: 'Pilot Croplands Methodology v1.2, Section 3.1',
            comment: '',
          },
          bulk_density: {
            value: 'Estimated',
            reference: 'Implied',
            comment:
              'Protocol does not explicitly address bulk density, and does not require soil sampling. However, GGIT (the modeling tool used for quantification) relies on COMET-farm, and thus the COMET-farm treatment of bulk density. COMET-farm in turn relies on the DayCent model, which uses a default bulk density parameter if not defined by the user. (See [DayCent Ecosystem Model Manual](https://gitlab.com/soilmetrics/ggit-api-docs/-/blob/master/Daycent%20Model%20Documentation/DayCent_Manual_full_07.06.2020.pdf), Section 3.2 and Appendix 1.1). Since there is no sampling required, and no discussion of user-inputs regarding bulk density, we assume the modeling relies on default bulk density estimates. ',
          },
          depth: {
            value: '20 cm',
            reference:
              'Pilot Croplands Methodology v1.2, Section 1.1; Daycent Ecosystem Model Manual, Pg. 78',
            comment:
              'Minimum depth not explicitly stated in the protocol. However, GGIT (the modeling tool used for quantification) is based on COMET-farm, which currently models the top 20cm. ',
          },
          equivalent_soil_mass: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          uncertainty: {
            value: 'None',
            reference: 'Pilot Croplands Methodology v1.2, Section 4.3',
            comment:
              'Uncertainty quantification is not currently available from the GGIT model, but is in development for the next version. However, Nori considered uncertainty associated with projecting SOC beyond a 10-year period and chose to be conservative in NRT issuance, using the lesser of the estimated annual and the 10-year annualized average for each NRT vintage year.',
          },
          baseline_type: {
            value: 'Dynamic',
            reference: 'Pilot Croplands Methodology v1.2, Section 1.3',
            comment: '',
          },
          baseline_scenario: {
            value: 'No sampling / Modeling required',
            reference: 'Pilot Croplands Methodology v1.2, Section 1.3',
            comment: '',
          },
          project_scenario: {
            value: 'No sampling / Modeling required',
            reference: 'Pilot Croplands Methodology v1.2, Sections 1.3 and 4.3',
            comment: '',
          },
          empirical_crediting: {
            value: 'No',
            reference: 'Pilot Croplands Methodology v1.2, Section 4.3',
            comment:
              'Project quantification relies on the Soil Metric\u2019s model, Greenhouse Gas Implementation Tool (\u201cGGIT\u201d), to estimate the credititable SOC stock change. ',
          },
          sampling_approach: {
            value: 'N/A',
            reference: 'Not described',
            comment: '',
          },
          model: {
            value: 'Greenhouse Gas Implementation Tool (GGIT) / Process-based',
            reference: 'Pilot Croplands Methodology v1.2, Section 1.1',
            comment:
              'The GGIT model from Soil Metrics is not currently public, but it is based on the COMET-Farm tool and model, which are publicly available on the USDA website.',
          },
          notes:
            'The baseline scenario is dynamically modeled and weather-normalized to estimate SOC changes, based on the three years prior to the "switch date," or initial implementation of one of the eligible practices. The GGIT modeling platform provides N\u2082O, CH\u2084, and CO\u2082 estimates, but no associated uncertainty estimates. Crediting SOC is based on comparing the modeled project and baseline scenarios.',
          comments:
            "Overall, SOC crediting is not empirical and relies entirely on modeling using the GGIT model, without quantification of uncertainty or ground-truthing. The GGIT model is based on the USDA's [COMET-Farm](https://www.usda.gov/sites/default/files/documents/USDATB1939_07072014.pdf) model, which uses DayCent and up to 35 other models to estimate SOC changes with the implementation of different NRCS conservation practices. The modeled soil depth of 20cm is insufficient to capture the full effects of a range of agricultural practices on SOC. ",
        },
      },
      safeguards: {
        score: 1,
        details: {
          landowner_protections: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          community_engagement: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          data_privacy: {
            value: 'No',
            reference: 'Nori Data Use Policy ',
            comment: '',
          },
          notes:
            'Project owners maintain overship over all project data. There are no specific protections for landowners, but both landowners and non-owner operators are able to participate in the program.',
          comments:
            'Nori itself has a data privacy policy, but it does not extend to partner organizations that handle project data.',
        },
      },
      rating: { score: 1 },
    },
    revisions: [{ date: '07-15-2021', note: 'First release.' }],
  },
  SOIL003: {
    id: 'SOIL003',
    name: 'Plan Vivo',
    entity: 'Plan Vivo',
    details: {
      protocol: 'Plan Vivo',
      links: [
        {
          name: 'SHAMBA Approved Approach v2.0',
          href: 'https://www.planvivo.org/Handlers/Download.ashx?IDMF=5b30948b-26f3-4d7a-803f-0fcce593acbd',
        },
        {
          name: 'SHAMBA Methodology v1.1',
          href: 'https://shambatool.files.wordpress.com/2017/03/shamba-model-description1.pdf',
        },
        {
          name: 'Procedures Manual (2017)',
          href: 'https://www.planvivo.org/Handlers/Download.ashx?IDMF=02b5473f-b80c-471d-95af-cde6fda375ea',
        },
        {
          name: 'The Plan Vivo Standard (2013)',
          href: 'https://www.planvivo.org/Handlers/Download.ashx?IDMF=a677d7d1-ce55-4925-aeea-71b8c95caf1c',
        },
        {
          name: 'Asessing Risk and Setting the Risk Buffer',
          href: 'https://www.planvivo.org/Handlers/Download.ashx?IDMF=e4ce17d4-4283-4409-b8e4-7a1d4b101271',
        },
        {
          name: 'Plan Vivo Additionality Assessment',
          href: 'https://www.planvivo.org/Handlers/Download.ashx?IDMF=dcb2398d-9cd6-4d48-ad00-43180f251b08',
        },
        {
          name: 'Plan Vivo Approved Approaches Table',
          href: 'https://www.planvivo.org/approved-approaches',
        },
      ],
      parties: ['The Plan Vivo Foundation'],
      status: 'Projects in development',
      projects: 'N/A',
      notes:
        'Protocol consists of a collection of tools which may be used to quantify and credit soil carbon sequestration. There is no rigid template for a Plan Vivo project; beyond requirements in the Plan Vivo Standard, projects develop locally relevant systems. A single Plan Vivo project may involve a range of different activities addressing different issues, and activities can be added to over time. There are currently no projects issuing credits for soil carbon sequestration, but some projects are in the [pipeline](https://www.planvivo.org/pipeline). The central quantification tool, SHAMBA, was published as an approved approach in 2015. ',
      comments:
        'The only approved approach for quantifying emissions and removals for an agroforestry or agricultural land management project that includes soil carbon sequestration is using the SHAMBA tool. However, projects may develop their own approaches. Our review relies on the assumption that the SHAMBA tool is used, though that may not be the case for all soil carbon sequestration credited by Plan Vivo. Note that the SHAMBA tool may be used to credit a broad set of activities, including agroforestry and other tree planting, in addition to crediting changes to soil carbon sequestration. ',
      timeline: {
        activity: [-5, 0],
        crediting: [-3, 20],
        registration: [0],
        verification: [0, 5, 10, 15, 20],
        permanence: [-3, 20],
      },
    },
    metrics: {
      durability: {
        score: 1,
        details: {
          buffer_pool: {
            value: 'Required',
            reference:
              'Plan Vivo Standard, Section 6.4; Procedures Manual, Section 7; Asessing Risk and Setting the Risk Buffer ',
            comment:
              'Minimum buffer contribution represented as 10% in the Plan Vivo Standard and Procedures Manual. In the Asessing Risk and Setting the Risk Buffer, a 5% buffer contribution appears possible for a "low risk," ex-post credited project.  ',
          },
          leakage_test: {
            value: 'Required',
            reference:
              'Plan Vivo Standard, Section 6.4; Procedures Manual, Section 7; Asessing Risk and Setting the Risk Buffer ',
            comment:
              'Minimum buffer contribution represented as 10% in the Plan Vivo Standard and Procedures Manual. In the Asessing Risk and Setting the Risk Buffer, a 5% buffer contribution appears possible for a "low risk," ex-post credited project.  ',
          },
          uncertainty_deduction: {
            value: 'Required',
            reference:
              'Plan Vivo Standard, Section 6.4; Procedures Manual, Section 7; Asessing Risk and Setting the Risk Buffer ',
            comment:
              'Minimum buffer contribution represented as 10% in the Plan Vivo Standard and Procedures Manual. In the Asessing Risk and Setting the Risk Buffer, a 5% buffer contribution appears possible for a "low risk," ex-post credited project.  ',
          },
          onsite_verification: {
            value: 'Required',
            reference: 'Procedures Manual (2017), Section 6',
            comment: '',
          },
          sampling_verification: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See Procedures Manual (2017), Section 6 for general guidance on verification. ',
          },
          crediting_period: {
            value: 'Flexible',
            reference: 'Procedures Manual (2017), p.7-8',
            comment: '',
          },
          permanence: {
            value: 'Flexible',
            reference: 'Procedures Manual (2017), p.7-8',
            comment: '',
          },
          notes:
            'A minimum of 5% of credits must be contributed to the non-permanence risk buffer. Leakage is required to be addressed, but the method is not specified. The crediting and permanence periods are not defined.',
          comments:
            'There is no clear crediting period or contractual obligation to monitor for permanence. The treatment of risk as it applies to non-delivery and non-permanence of climate benefits is from multiple perspectives, including social, economic, environmental, technical, and administrative. Risk is categorized as low, medium, and high, with associated risk deductions that differ between ex-ante and ex-post projects.',
        },
      },
      practices: {
        value: { tillage: 0, cropping: 1, inputs: 1, grazing: 0, other: 1 },
        details: {
          included: {
            value: ['Cropping', 'Inputs', 'Other'],
            reference: 'SHAMBA Approved Approach v2.0, Section 1',
            comment: '',
          },
          geographies: {
            value: 'Global',
            reference: 'Plan Vivo Approved Approaches Table',
            comment:
              'While the SHAMBA Methodology documentation explictily states it is designed to work with smallholder systems in the tropics (Section 1), the website listing SHAMBA as an approved approach says it is applicable globally. ',
          },
          cobenefits: {
            value: 'Ecosystem services / Rural livelihoods',
            reference: 'The Plan Vivo Standard, Section 2',
            comment:
              'Projects must generate ecosystem service benefits through one or more of the following project intervention types: ecosystem restoration, rehabilitation, prevention of ecosystem conversion or degradation, or improved land use management; SOC benefits alone are sufficient to satisfy this requirement. Plan Vivo contemplates inclusive project development practices focused on rural livelihoods, but it is not clear what is required or how requirements are implemented. ',
          },
          notes: 'None',
          comments:
            'The SHAMBA tool documentation indicates it is meant to be used in the tropics. However, as listed in its approved approaches, Plan Vivo does not communicate clear geographic constraints on the use of the quantification tool. Ecological and community-based co-benefits are a vague prerequisite for project registration per the Plan Vivo standard, but tracking mechanisms are not abundantly clear.',
        },
      },
      additionality: {
        score: 1,
        details: {
          financial: {
            value: 'Allowed',
            reference: 'Plan Vivo Additionality Asessment, Section AA1.b',
            comment: '',
          },
          performance: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          other: {
            value: 'Required',
            reference: 'Plan Vivo Additionality Asessment, Section AA1.b',
            comment:
              'Project must prepare a written barrier analysis to address financial, social, cultural, technical, scientific or institutional barriers preventing project interventions from taking place.',
          },
          activity_backdating: {
            value: 5,
            reference: 'Procedures Manual (2017), p.20',
            comment: '',
          },
          crediting_backdating: {
            value: 3,
            reference: 'Procedures Manual (2017), p.8',
            comment: '',
          },
          notes:
            'The protocol requires a "barriers" additionality analysis that can include "financial, social, cultural, technical, scientific or institutional barriers." ',
          comments:
            'Required "barriers" additionality test is vague. Because it includes the possibility of discussing project-level financial additionality concerns, we include that concept as an "allowed" additionality test. ',
        },
      },
      rigor: {
        score: 1,
        details: {
          ghgs: {
            value: ['CH\u2084', 'N\u2082O'],
            reference: 'SHAMBA Approved Approach, Tables 1 and 2',
            comment:
              'N\u2082O from fertilizers and plant inputs, and CH\u2084 from biomass burning are accounted for. No other sources of N\u2082O or CH\u2084 are considered.',
          },
          bulk_density: {
            value: 'Estimated',
            reference: 'Implied',
            comment:
              'Neither the SHAMBA Approved Approach, the SHAMBA Methodology, nor other protocol documents mention bulk density. However, the Roth-C model is used and the inclusion bulk density in order to estimate SOC.',
          },
          depth: {
            value: '30 cm',
            reference: 'SHAMBA Methodology v1.1, Section 8.1',
            comment: '',
          },
          equivalent_soil_mass: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          uncertainty: {
            value: 'None',
            reference: 'Not described',
            comment:
              'The Plan Vivo Standard states that projects must identify and describe uncertainty, and factor it into the level of conservativeness in the accounting method (The Plan Vivo Standard (2013), Section 5.11). However, a methodology for uncertainty quantification is not provided in the standard, nor discussed in the SHAMBA quantification tool. ',
          },
          baseline_type: {
            value: 'Dynamic',
            reference: 'SHAMBA Methodology v1.1, Sections 1 and p.29',
            comment: 'Baseline is dynamic if modelled using SHAMBA. ',
          },
          baseline_scenario: {
            value: 'No sampling / Modeling allowed',
            reference: 'SHAMBA Approved Approach, Section 1',
            comment:
              'The baseline scenario can be modelled using the SHAMBA tool, or can be conservatively assumed to be zero. ',
          },
          project_scenario: {
            value: 'No sampling / Modeling required',
            reference: 'SHAMBA Approved Approach, Section 1',
            comment: '',
          },
          empirical_crediting: {
            value: 'No',
            reference: 'SHAMBA Approved Approach, Section 3',
            comment:
              'Modeling is the sole basis for quantification of SOC and credit issuance. ',
          },
          sampling_approach: {
            value: 'N/A',
            reference: 'Not described',
            comment: '',
          },
          model: {
            value: 'RothC / Process-based',
            reference:
              'SHAMBA Approved Approach, Section 3; SHAMBA Methodology v1.1, Section 2',
            comment: '',
          },
          notes:
            'GHGs accounted for in this methodology include emission sources from the application of fertilizers (N\u2082O) and biomass burning (CH\u2084 and N\u2082O). The baseline scenario may be modeled using the SHAMBA tool, or may be assumed to be zero if the baseline land use is expected to result in declining carbon stocks in soil. SOC is quantified exclusively using the SHAMBA tool, which in turn uses the RothC model to estimate SOC stocks and IPCC Tier 1 default factors to estimate emissions from other sources.',
          comments:
            'SOC crediting is not empirical and relies entirely on modeling, without rigorous quantification of uncertainty. There is no direct sampling. The modeled soil depth of 30cm is insufficient to capture the full effects of a range of agricultural practices on SOC.',
        },
      },
      safeguards: {
        score: 3,
        details: {
          landowner_protections: {
            value: 'Yes',
            reference: 'The Plan Vivo Standard (2013), Section 1',
            comment:
              'Project interventions must take place on land where smallholders and/or community groups have clear, stable land tenure, either via ownership, or user rights that enable them to commit to project interventions and >1/3 of projects are held by small landowners.',
          },
          community_engagement: {
            value: 'Yes',
            reference: 'The Plan Vivo Standard (2013), Sections 3 and 4',
            comment:
              'Projects have to directly engage and benefit smallholders and community groups',
          },
          data_privacy: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          notes:
            'Protocol has a generally applicable safeguards document that addresses landowner rights and community engagement, but not data privacy. Establishing at least two of three safeguard categories leads to a score of 3/3 points for Safeguards. Our initial score (2/3) was incosistent with this rubric. We regret the error.',
          comments:
            'Landowner protections and community engagement are pre-requisite eligibility requirements.',
        },
      },
      rating: { score: 1 },
    },
    revisions: [
      { date: '07-15-2021', note: 'First release.' },
      {
        date: '08-04-2021',
        note: 'Corrected safeguards score from a 2/3 to a 3/3 to reflect scoring rubric.',
      },
    ],
  },
  SOIL004: {
    id: 'SOIL004',
    name: 'Regen Network',
    entity: 'Regen Network',
    details: {
      protocol: 'GHG and Co-benefits in Grazing Systems',
      links: [
        {
          name: 'Methodology for GHG and Co-benefits in Grazing Systems v0.91',
          href: 'https://regen-registry.s3.amazonaws.com/Methodology+for+GHG+and+Co-Benefits+in+Grazing+Systems.pdf',
        },
        {
          name: 'GHG and Co-Benefits in Grazing Systems Credit Class v0.9',
          href: 'https://regen-registry.s3.amazonaws.com/GHG+and+Co-Benefits+in+Grazing+Systems+Credit+Class.pdf',
        },
        {
          name: 'Regen Registry Program Guide v1.0',
          href: 'https://regen-registry.s3.amazonaws.com/Regen+Registry+Program+Guide.pdf',
        },
        {
          name: 'Regen Network Soil Sampling Guide v1.5',
          href: 'https://regen-registry.s3.amazonaws.com/Soil+Sampling+Guide.pdf',
        },
      ],
      parties: ['Regen Network'],
      status: 'Credits issued',
      projects:
        "See Regen Network's [project portfolio](https://www.regen.network/buyers/).",
      notes:
        'Protocol credits changes to SOC stocks as a result of changes to grazing practices, in addition to tracking a suite of co-benefits. This version of the protocol was published in 2021.',
      comments:
        'Overall, protocol is mostly self-contained and easy to interpret. Projects credited to date have included significant deviations from the stated methodology. We analyzed the protocol as written, without considering the range of possible approved deviations.  ',
      timeline: {
        activity: [-10, 0],
        crediting: [-10, 10],
        registration: [0],
        verification: [0, 5, 10],
        permanence: [-10, 35],
      },
    },
    metrics: {
      durability: {
        score: 2,
        details: {
          buffer_pool: {
            value: 'Required',
            reference: 'Regen Registry Program Guide, Section 8.4',
            comment: 'Default 20% buffer pool contribution. ',
          },
          leakage_test: {
            value: 'Required',
            reference: 'Regen Registry Program Guide, Section 8.4',
            comment: 'Default 20% buffer pool contribution. ',
          },
          uncertainty_deduction: {
            value: 'Required',
            reference: 'Regen Registry Program Guide, Section 8.4',
            comment: 'Default 20% buffer pool contribution. ',
          },
          onsite_verification: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See Methodology for GHG and Co-Benefits in Grazing Systems v0.91 (Section 9) and Regen Registry Program Guide v1.0 (Section 9) for general discussion of verification. ',
          },
          sampling_verification: {
            value: 'None',
            reference: 'Regen Registry Program Guide v1.0, Section 9.4.1',
            comment:
              'Verification may employ random sampling \u2013 which appears to include soil sampling \u2013 but is not required to. See Methodology for GHG and Co-Benefits in Grazing Systems v0.91 (Section 9) and Regen Registry Program Guide v1.0 (Section 9) for general discussion of verification. ',
          },
          crediting_period: {
            value: 10,
            reference:
              'Methodology for GHG and Co-Benefits in Grazing Systems Credit Class v0.9, Section 2.2 and 3.4',
            comment:
              'See Methodology for GHG and Co-Benefits in Grazing Systems v0.91 (Section 9) and Regen Registry Program Guide v1.0 (Section 9) for general discussion of verification. ',
          },
          permanence: {
            value: 35,
            reference:
              'Methodology for GHG and Co-Benefits in Grazing Systems Credit Class v0.9, Section 3.4; Regen Registry Program Guide, Section 8.3.1',
            comment:
              'Protocol requires a 25 year permanence obligation in addition to the 10 year crediting period. ',
          },
          notes:
            'Projects are required to make a default 20% contribution to the buffer pool. Projects may either contribute an additional 5% to a buffer or enter into a land covenance to assure permanence. While crediting is subject to an uncertainty deduction, the exact method for calculating uncertainty is left flexible.',
          comments:
            'Protocol provides adequate default risk management. However, sampling plays a limited role in the calculations and is not independently verified. ',
        },
      },
      practices: {
        value: { tillage: 0, cropping: 0, inputs: 0, grazing: 1, other: 0 },
        details: {
          included: {
            value: ['Grazing'],
            reference:
              'Methodology for GHG and co-benefits in grazing systems v0.91, Section 1.1',
            comment: '',
          },
          geographies: {
            value: 'Global',
            reference: 'Implied',
            comment:
              'See Methodology for GHG and co-benefits in grazing systems v0.91, Section 1.1 for general discussion of eligibility. No specific geographic limitations provided.',
          },
          cobenefits: {
            value: 'Soil health /  Ecosystem health / Animal welfare',
            reference:
              'Methodology for GHG and co-benefits in grazing systems v0.91, Sections 1.3, 4, 5 and 6',
            comment: '',
          },
          notes:
            'Eligible activities include any activity approved by the Carbon Farming Initiative or the CDFA for the Healthy Soil Program related to grasslands and/or grazing. Credit issuance is based on soil carbon sequestration, but co-benefits are assessed and reported.',
          comments:
            'Protocol is currently applied only in Australia, but no geographic limitations are presented.',
        },
      },
      additionality: {
        score: 1,
        details: {
          financial: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See Methodology for GHG and Co-Benefits in Grazing Systems v0.91, Section 5.1 for a general discussion of additionality. ',
          },
          performance: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See Methodology for GHG and Co-Benefits in Grazing Systems v0.91, Section 5.1 for a general discussion of additionality. ',
          },
          other: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See Methodology for GHG and Co-Benefits in Grazing Systems v0.91, Section 5.1 for a general discussion of additionality. ',
          },
          activity_backdating: {
            value: 10,
            reference:
              'Methodology for GHG and Co-Benefits in Grazing Systems Credit Class v0.9, Section 3.3',
            comment: '',
          },
          crediting_backdating: {
            value: 10,
            reference:
              'Regen Registry Program Guide, Section 7.5.1; Methodology for GHG and Co-Benefits in Grazing Systems v0.91, 3.6.1',
            comment:
              'Crediting starts at the initial monitoring date, or the first date on which sampling data is available. ',
          },
          notes:
            'The protocol does not include any additionality screens. Activity adoption may occur up to 10 years prior to project registration. The crediting period begins anytime a baseline measurement is performed after the activity adoption. ',
          comments:
            'Protocol appears to allow up to ten years of back-crediting, given access to a ten year old baseline measurement. This raises additionality concerns. ',
        },
      },
      rigor: {
        score: 1,
        details: {
          ghgs: {
            value: ['CH\u2084', 'N\u2082O'],
            reference:
              'Methodology for GHG and Co-Benefits in Grazing Systems v0.91, Section 3.5',
            comment:
              'Emissions from livestock and fertilizer application are included. Accounting may miss fluxes such as organic matter imported from outside the project boundary.  ',
          },
          bulk_density: {
            value: 'Measured',
            reference:
              'Methodology for GHG and Co-Benefits in Grazing Systems v0.91, Section 3.2.1.1',
            comment: '',
          },
          depth: {
            value: '15 cm',
            reference:
              'Methodology for GHG and Co-Benefits in Grazing Systems v0.91, Section 3.1.4',
            comment:
              '15 cm is a recommended depth, though protocol indicates deviation may be made with justification. ',
          },
          equivalent_soil_mass: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          uncertainty: {
            value: 'Required',
            reference:
              'Methodology for GHG and Co-Benefits in Grazing Systems v0.91, Section 3.6.4',
            comment: '',
          },
          baseline_type: {
            value: 'Fixed',
            reference:
              'Methodology for GHG and Co-Benefits in Grazing Systems v0.91, Section 3.6.1',
            comment: '',
          },
          baseline_scenario: {
            value: 'Sampling required / Modeling allowed',
            reference:
              'Methodology for GHG and Co-Benefits in Grazing Systems v0.91, Sections 1.2, 3.2.1, and 3.6.1',
            comment: '',
          },
          project_scenario: {
            value: 'Sampling required / Modeling allowed',
            reference:
              'Methodology for GHG and Co-Benefits in Grazing Systems v0.91, Section 1.2 ',
            comment:
              'SOC stocks may be based on a combination of samples and remote sensing or on an intensive soil sampling effort with more classical interpolation.',
          },
          empirical_crediting: {
            value: 'No',
            reference:
              'Methodology for GHG and Co-Benefits in Grazing Systems v0.91, Section 3.3',
            comment: '',
          },
          sampling_approach: {
            value: 2,
            reference:
              'Methodology for GHG and Co-Benefits in Grazing Systems v0.91, Section 3.1',
            comment:
              'The site stratification is applied conditionally and sampling locations within strata are selected randomly. Sampling density is low in the remote sensing approach and unspecified in the sampling-only approach.',
          },
          model: {
            value: 'Flexible / Empirical',
            reference:
              'Methodology for GHG and Co-Benefits in Grazing Systems v0.91, Section 3.3.1',
            comment: '',
          },
          notes:
            'Project may model SOC stocks using satellite imagery and relatively few samples, or may perform more intensive sampling and estimate SOC stocks via interpolation. \n ',
          comments:
            'SOC crediting is not empirical and can rely entirely on modeling. Direct sampling is required, but the sampling approach is not adequately rigorous and the sampling depth of 15cm is insufficient to capture the full effects of a range of agricultural practices. There is insufficient guidance provided to ensure an appropriate modeling approach is applied, and the lack of modeling validation raises concerns about quantification rigor. The possibility of enhancing local soil carbon gains \u2013 by importing organic matter into the project area, for example \u2013 is not precluded by the SOC accounting framework. Projects credited under this protocol have exhibited significant deviations from the nominally required sampling regime, both by taking fewer samples and by estimating rather than directly measuring bulk density.',
        },
      },
      safeguards: {
        score: 1,
        details: {
          landowner_protections: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          community_engagement: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          data_privacy: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          notes: 'Protocol does not address any safeguards. ',
          comments: 'No safeguards are provided or required.',
        },
      },
      rating: { score: 1 },
    },
    revisions: [{ date: '07-15-2021', note: 'First release.' }],
  },
  SOIL005: {
    id: 'SOIL005',
    name: 'ACR Grazing',
    entity: 'American Carbon Registry',
    details: {
      protocol: 'ACR Grazing Land and Livestock Management v1.0',
      links: [
        {
          name: 'Grazing Land and Livestock Management Framework v1.0',
          href: 'https://americancarbonregistry.org/carbon-accounting/standards-methodologies/grazing-land-and-livestock-management-gllm-ghg-methodology',
        },
        {
          name: 'A-Biotic Accounting Module (2014)',
          href: 'https://americancarbonregistry.org/carbon-accounting/standards-methodologies/grazing-land-and-livestock-management-gllm-ghg-methodology',
        },
        {
          name: 'A-Smallscale Accounting Module (2014)',
          href: 'https://americancarbonregistry.org/carbon-accounting/standards-methodologies/grazing-land-and-livestock-management-gllm-ghg-methodology',
        },
        {
          name: 'A-Microscale Accounting Module',
          href: 'https://americancarbonregistry.org/carbon-accounting/standards-methodologies/grazing-land-and-livestock-management-gllm-ghg-methodology',
        },
        {
          name: 'ACR Standard v7.0',
          href: 'https://americancarbonregistry.org/carbon-accounting/standards-methodologies/american-carbon-registry-standard), \n[ACR Buffer Pool Terms and Conditions (2020)',
        },
        {
          name: 'ACR Risk Tool v1.0',
          href: 'https://americancarbonregistry.org/carbon-accounting/guidance-tools-templates',
        },
      ],
      parties: ['Winrock International'],
      status: 'Inactive',
      projects: 'N/A',
      notes:
        'Protocol credits changes to SOC and emissions as a result of grazing and land management practices. It was published in 2014 and is now inactive. No projects were credited under this protocol during its active period. ',
      comments:
        'Following publication of this analysis, ACR informed us that they had withdrawn this protocol from active use based on technical concerns about the protocol methods and/or models involved. Although no projects were credited under these standards, we continue to report our results for posterity. The overall quantification approaches and rigor depend on the location (in or outside the US) and size of the project. Small projects rely on default factors while larger projects include more complex modeling approaches. The significant optionality in its implementation makes interpretation and analysis more difficult. ',
      timeline: {
        activity: [-3, 0],
        crediting: [-3, 40],
        registration: [0],
        verification: [0, 5, 10, 15, 20, 25, 30, 35, 40],
        permanence: [-3, 40],
      },
    },
    metrics: {
      durability: {
        score: 2,
        details: {
          buffer_pool: {
            value: 'Allowed',
            reference:
              'ACR Standard v7.0, Section 5.B.3; Grazing Land and Livestock Management Methodology v1.0, Section 7; ACR Risk Tool v1.0; ACR Buffer Pool Terms and Conditions (2020)',
            comment:
              'Buffer pool contribution can come from the current project or from any other vintage held by the ACR registry or a combination of the two. All buffer contributions, deductibles, and ERT replacements (in the case of intentional reversals) may be made in ERTs of any type and vintage. In lieu of making a Buffer Pool Contribution or Reserve Account Contribution, Project Proponents may propose an insurance product for ACR approval as a risk mitigation mechanism. Insurance may be a financial product based on an actuarial analysis of project risk that considers circumstances such as the region, threats, and mitigating factors. ',
          },
          leakage_test: {
            value: 'Allowed',
            reference:
              'ACR Standard v7.0, Section 5.B.3; Grazing Land and Livestock Management Methodology v1.0, Section 7; ACR Risk Tool v1.0; ACR Buffer Pool Terms and Conditions (2020)',
            comment:
              'Buffer pool contribution can come from the current project or from any other vintage held by the ACR registry or a combination of the two. All buffer contributions, deductibles, and ERT replacements (in the case of intentional reversals) may be made in ERTs of any type and vintage. In lieu of making a Buffer Pool Contribution or Reserve Account Contribution, Project Proponents may propose an insurance product for ACR approval as a risk mitigation mechanism. Insurance may be a financial product based on an actuarial analysis of project risk that considers circumstances such as the region, threats, and mitigating factors. ',
          },
          uncertainty_deduction: {
            value: 'Allowed',
            reference:
              'ACR Standard v7.0, Section 5.B.3; Grazing Land and Livestock Management Methodology v1.0, Section 7; ACR Risk Tool v1.0; ACR Buffer Pool Terms and Conditions (2020)',
            comment:
              'Buffer pool contribution can come from the current project or from any other vintage held by the ACR registry or a combination of the two. All buffer contributions, deductibles, and ERT replacements (in the case of intentional reversals) may be made in ERTs of any type and vintage. In lieu of making a Buffer Pool Contribution or Reserve Account Contribution, Project Proponents may propose an insurance product for ACR approval as a risk mitigation mechanism. Insurance may be a financial product based on an actuarial analysis of project risk that considers circumstances such as the region, threats, and mitigating factors. ',
          },
          onsite_verification: {
            value: 'Required',
            reference:
              'ACR Standard v7.0, Section 9.C; Grazing Land and Livestock Management Methodology v1.0, Sections 9.1 and 9.7',
            comment: '',
          },
          sampling_verification: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See Standard v7.0, Section 9 and Grazing Land and Livestock Management Methodology v1.0, Section 9 for general discussion of verification.  ',
          },
          crediting_period: {
            value: 40,
            reference:
              'Grazing Land and Livestock Management Methodology v1.0, Section 5.2',
            comment:
              'The crediting period for biotic sequestration must be 40 years, but where projects also credit non-biotic-sequestration (e.g. reduced fertilizer use) those non-biotic effects must be credited on 10-year cycles. Crediting Periods may be renewed without limitation. We report a 40-year crediting period because the presence of any SOC changes would require those changes to be credited on a 40-year cycle, whether or not avoided emissions benefits are separately calculated on a shorter cycle. Although biotic sequestration requires a 40-year crediting period, baseline assumptions are revised on a 10-year cycle, such that the practical effect of a 40-year crediting period is similar to four sequential 10-year crediting periods. ',
          },
          permanence: {
            value: 40,
            reference:
              'Grazing Land and Livestock Management Methodology v1.0, Section 5.2',
            comment:
              'The minimum project term \u2013 i.e. the term over which a project is required to maintain monitor and verify SOC stocks \u2013 is 40 years. ',
          },
          notes:
            "Buffer pool contribution can come from the current project, from any other vintage held by the ACR registry, or a combination of the two. All buffer contributions, deductibles, and ACR offset credit (ERT) replacements (in the case of intentional reversals) may be made in ERTs of any type and vintage or another insurance product may be proposed as a risk mitigation mechanism at ACR's discretion. Verification requires a site visit to verify practices. Crediting Periods may be renewed without limitation, with re-assessment of the project baseline every 40 years. Monitoring by periodic (10 year) analyses of soil samples for model validation is required.",
          comments:
            'Following publication of this analysis, ACR informed us that they had withdrawn this protocol from active use based on technical concerns about the protocol methods and/or models involved. Although no projects were credited under these standards, we continue to report our results for posterity. The contribution of ACR offset credits (ERTs) of any vintage or project means buffer contributions can be made with old or poor quality ERTs that are not selling on the market, not meaningfully addressing risk associated with the specific project. Projects can get credit for positive leakage, but there are no guardrails against double-counting or inaccurate counting. ',
        },
      },
      practices: {
        value: { tillage: 1, cropping: 1, inputs: 1, grazing: 1, other: 1 },
        details: {
          included: {
            value: ['Grazing', 'Cropping', 'Inputs', 'Tillage', 'Other'],
            reference:
              'Grazing Land and Livestock Management Methodology v1.0, Sections 1.4 and 2',
            comment:
              'Any grazing land and livestock management project that affects GHG sources and pools \u2013 whether it involves feedlot operations, feed composition, changing intensity of grazing, grassland management, manure management, fertilizer management, or a range of other mitigation practices \u2013 is eligible under this methodology.',
          },
          geographies: {
            value: 'Global',
            reference: 'Implied',
            comment:
              'See Grazing Land and Livestock Management Methodology v1.0, Sections 1.4 for general discussion of applicability. No specific geographic limitations provided. ',
          },
          cobenefits: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          notes:
            'Eligible projects must be implemented on a beef or dairy livestock operation. Any grazing and land management project that affects identified GHG sources and pools is eligible under this methodology (e.g. feedlot operations, feed composition, changing intensity of grazing, grassland management, manure management, fertilizer management, or a range of other mitigation practices).',
          comments:
            'Following publication of this analysis, ACR informed us that they had withdrawn this protocol from active use based on technical concerns about the protocol methods and/or models involved. Although no projects were credited under these standards, we continue to report our results for posterity. Essentially any project that affects GHG sources and carbon pools is eligible for crediting under this protocol. Emission reductions related to livestock feed production may be creditable under this methodology if not claimed by other parties. ',
        },
      },
      additionality: {
        score: 1,
        details: {
          financial: {
            value: 'Allowed',
            reference:
              'Grazing Land and Livestock Management Methodology v1.0, Section 6.3.2',
            comment: '',
          },
          performance: {
            value: 'Required',
            reference:
              'Grazing Land and Livestock Management Methodology v1.0, Sections 6.2 and 6.3.2',
            comment: '',
          },
          other: {
            value: 'Allowed',
            reference:
              'Grazing Land and Livestock Management Methodology v1.0, Section 6.3.2 ',
            comment: '',
          },
          activity_backdating: {
            value: 3,
            reference: 'ACR Standard 7.0, Table 2',
            comment:
              "The ACR Standard generally limits projects to a 3-year backdating period, but provides for a 10-year window for projects that list within 6 months of a protocol's adoption or becoming newly eligible under a revised protocol. Because this protocol was developed in 2014 and is not yet in use, we adopt the shorter timeframe. The longer timeframe could apply if and only if the protocol is changed. ",
          },
          crediting_backdating: {
            value: 3,
            reference: 'ACR Standard 7.0, Table 2',
            comment:
              "The ACR Standard generally limits projects to a 3-year backdating period, but provides for a 10-year window for projects that list within 6 months of a protocol's adoption or becoming newly eligible under a revised protocol. Because this protocol was developed in 2014 and is not yet in use, we adopt the shorter timeframe. The longer timeframe could apply if and only if the protocol is changed. ",
          },
          notes:
            'The protocol allows projects to establish additionality by showing that practices have an adoption rate of less than 5% in "reference regions" (for "early adopters"). For projects in the United States, a reference region is an individual state; for other countries, a similar jurisdictional unit of analysis applies. Alternatively, projects can also demonstrate additionality using a combined common practice and barriers test from the general ACR Standard methodology. "Early adopter" projects are allowed to backdate activity and crediting up to 10 years, whereas all other projects can do so for a maxium of 3 years instead.  ',
          comments:
            'Following publication of this analysis, ACR informed us that they had withdrawn this protocol from active use based on technical concerns about the protocol methods and/or models involved. Although no projects were credited under these standards, we continue to report our results for posterity. Protocol differs slightly from ACR\'s Compost protocol, which applies the standard ACR additionality tests. ACR\'s grazing protocol creates the additional potential for an "a priori" or "early adopter" additionality finding based on a 5% common practice threshold. ',
        },
      },
      rigor: {
        score: 1,
        details: {
          ghgs: {
            value: ['CO\u2082', 'CH\u2084', 'N\u2082O'],
            reference:
              'Grazing Land and Livestock Management Methodology v1.0, Section 5.3',
            comment: '',
          },
          bulk_density: {
            value: 'Unclear',
            reference: 'Not described',
            comment: '',
          },
          depth: {
            value: '20 cm',
            reference:
              'A-Biotic Accounting Module, Section 2.1; A-Smallscale Accounting Module, Section 2.1; A-Microscale Supporting Documentation, Section 2.2',
            comment:
              'A-Biotic requires modeling to a minimum depth of 20 cm. A-Smallscale relies on COMET-2.0, which quantifies to a depth of 20 cm. A-Microscale uses default values for soil carbon stocks in the top 30 cm. We report the minimum.',
          },
          equivalent_soil_mass: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          uncertainty: {
            value: 'Required',
            reference:
              'ACR Standard V7.0, Section 2.B.3; A-Biotic Accounting Module (2014), Section 2.6; A-Smallscale Accounting Module (2014), p.4',
            comment: '',
          },
          baseline_type: {
            value: 'Fixed',
            reference:
              'A-Biotic Accounting Module, Section 2 (p.3 and p.5); A-Smallscale Accounting Module, Section 2; A-Microscale Supporting Documentation, Section 2.2',
            comment: '',
          },
          baseline_scenario: {
            value: 'Sampling allowed / Modeling required',
            reference:
              'A-Biotic Accounting Module, Sections 2.3 and 2.7; A-Smallscale Accounting Module, Section 2.2; A-Microscale tool, Section 2.2',
            comment:
              'The approach for defining and quantifying a baseline scenario depends on size of project and project emissions. See Grazing Land and Livestock Management Framework v1.0, Figure 1 for a decision tree guiding tool use. Small projects in the US use default IPCC Tier 1 and 2 equations from the 2006 Guidelines for Agriculture, Forestry and Other Land Use (AFOLU), and do not require physical sampling. Larger projects in the US use the A-Smallscale tool and COMET-Farm to model the baseline scenario. Projects outside the US use A-Biotic tool, which sets a fixed baseline and requires some sampling for model validation.',
          },
          project_scenario: {
            value: 'Sampling allowed / Modeling required',
            reference:
              'A-Biotic Accounting Module, Sections 2.2, 2.4 and 2.7; A-Smallscale Accounting Module, Section 2.2; A-Microscale tool, Section 2.2',
            comment:
              'The approach for quantifying the SOC in the project scenario depends on size of project and project emissions. See Grazing Land and Livestock Management Framework v1.0, Figure 1 for a decision tree guiding tool use. Small projects in the US use default IPCC Tier 1 and 2 equations from the 2006 Guidelines for Agriculture, Forestry and Other Land Use (AFOLU) that form the basis of the calculations. The tool is designed as an Excel spreadsheet, with data inputs from drowndown menus. The only quantitative data required in the biotic sequestration module is the size of the project area, in hectares (or acres). Larger projects in the US use the A-Smallscale tool and COMET-Farm. Projects outside the US use A-Biotic tool, with sample-based model validation. ',
          },
          empirical_crediting: {
            value: 'No',
            reference:
              'A-Biotic Accounting Module, Sections 2.2; A-Smallscale Accounting Module, Section 2.2; A-Microscale tool, Section 2.2',
            comment: '',
          },
          sampling_approach: {
            value: 2,
            reference:
              'Grazing Land and Livestock Management Framework v1.0, Section 9.4; A-Biotic Accounting Module, Section 2.7',
            comment:
              'Sampling is only required for model validation if using the A-Biotic tool. Strafitication is recommended but a project proponent can forego stratification if it can be justified to the registry. Sampling density is minimal, requiring samples to be taken only from one randomly stratum per site. ',
          },
          model: {
            value: 'Flexible / Empirical or Process-based',
            reference:
              'A-Biotic Accounting Module, Section 2.1; A-Smallscale Accounting Module, Section 2.1; A-Biotic Supporting Documentation, Section 2',
            comment:
              'Modeling approach depends on size of project and project emissions. Small projects in the US use default IPCC Tier 1 and 2 equations from the 2006 Guidelines for Agriculture, Forestry and Other Land Use (AFOLU) that form the basis of the calculations. Larger projects in the US use the A-Smallscale tool and/or COMET-Farm to model project emissions. Projects outside the US use A-Biotic tool, which uses an unspecified process-based model.',
          },
          notes:
            'Baseline scenario can be set based on common practice, historical trends, and scientific literature and is fixed for the duration of the crediting period. The project scenario is estimated, and must be recalculated and reported at the time of verification. Models may be used if they are approved by the methodology and/or the ACR Standard. The specific quantification methodologies applied in the baseline and project scenarios are A-Microscale, A-Smallscale, and A-Biotic, the choice of which is contingent on project size and location (A-Biotic is applicable outside the US). ',
          comments:
            'Following publication of this analysis, ACR informed us that they had withdrawn this protocol from active use based on technical concerns about the protocol methods and/or models involved. Although no projects were credited under these standards, we continue to report our results for posterity. SOC crediting is not empirical and relies entirely on modeling. Direct sampling is not required. Where sampling is used, sampling quality varies with the size of the project. Sampling depth is not specified, and other critical soil variables like bulk density or equivalent soil mass are not measured. The modeling approach and rigor varies with the size of the project, but guidance is generally insufficient to ensure an appropriate modeling approach is applied. ',
        },
      },
      safeguards: {
        score: 1,
        details: {
          landowner_protections: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          community_engagement: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          data_privacy: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          notes: 'Protocol does not address any safeguards. ',
          comments:
            'Following publication of this analysis, ACR informed us that they had withdrawn this protocol from active use based on technical concerns about the protocol methods and/or models involved. Although no projects were credited under these standards, we continue to report our results for posterity. No safeguards are provided or required.',
        },
      },
      rating: { score: 1 },
    },
    revisions: [
      { date: '07-15-2021', note: 'First release.' },
      {
        date: '08-10-2021',
        note: 'Following publication, ACR informed us that they had withdrawn this protocol from active use based on technical concerns about the protocol methods and/or models involved. Although no projects were credited under these standards, we continue to report our results for posterity. We updated the protocol status and comments on each metric to reflect protocol inacivity.',
      },
    ],
  },
  SOIL006: {
    id: 'SOIL006',
    name: 'ACR Compost',
    entity: 'American Carbon Registry',
    details: {
      protocol: 'Compost Additions to Grazed Grasslands v1.0',
      links: [
        {
          name: 'Compost Additions to Grazed Grasslands v1.0',
          href: 'https://americancarbonregistry.org/carbon-accounting/standards-methodologies/methodology-for-greenhouse-gas-emission-reductions-from-compost-additions-to-grazed-grasslands',
        },
        {
          name: 'ACR Standard v7.0',
          href: 'https://americancarbonregistry.org/carbon-accounting/standards-methodologies/american-carbon-registry-standard',
        },
        {
          name: 'ACR Buffer Pool Terms and Conditions (2020)',
          href: 'https://americancarbonregistry.org/carbon-accounting/guidance-tools-templates/tools-templates',
        },
        {
          name: 'ACR Risk Tool v1.0',
          href: 'https://americancarbonregistry.org/carbon-accounting/guidance-tools-templates',
        },
      ],
      parties: [
        'Terra Global Capital',
        'Environmental Defense Fund',
        'Marin Carbon Project',
        "UC Berkeley Professor Whendee Silver's Lab",
      ],
      status: 'Inactive',
      projects: 'N/A',
      notes:
        'Protocol accounts for the carbon sequestration and avoided GHG emissions as a result of compost additions to grazed grasslands. It was published in 2014 and is now inactive. No projects were credited under this protocol during its active period. ',
      comments:
        'Following publication of this analysis, ACR informed us that they had withdrawn this protocol from active use based on technical concerns about the protocol methods and/or models involved. Although no projects were credited under these standards, we continue to report our results for posterity. The one project ([ACR460](https://acr2.apx.com/mymodule/reg/prjView.asp?id1=460)) using this protocol is cancelled on the registry. ',
      timeline: {
        activity: [-3, 0],
        crediting: [-3, 10],
        registration: [0],
        verification: [0, 5, 10],
        permanence: [-3, 40],
      },
    },
    metrics: {
      durability: {
        score: 2,
        details: {
          buffer_pool: {
            value: 'Allowed',
            reference:
              'ACR Standard 7.0, Section 5.B.3; ACR Risk Tool 1.0; ACR Buffer Pool Terms and Conditions (2020)',
            comment:
              'Buffer pool contribution can come from the current project or from any other vintage held by the ACR registry or a combination of the two. All buffer contributions, deductibles, and ERT replacements (in the case of intentional reversals) may be made in ERTs of any type and vintage. In lieu of making a Buffer Pool Contribution or Reserve Account Contribution, Project Proponents may propose an insurance product for ACR approval as a risk mitigation mechanism. Insurance may be a financial product based on an actuarial analysis of project risk that considers circumstances such as the region, threats, and mitigating factors. ',
          },
          leakage_test: {
            value: 'Allowed',
            reference:
              'ACR Standard 7.0, Section 5.B.3; ACR Risk Tool 1.0; ACR Buffer Pool Terms and Conditions (2020)',
            comment:
              'Buffer pool contribution can come from the current project or from any other vintage held by the ACR registry or a combination of the two. All buffer contributions, deductibles, and ERT replacements (in the case of intentional reversals) may be made in ERTs of any type and vintage. In lieu of making a Buffer Pool Contribution or Reserve Account Contribution, Project Proponents may propose an insurance product for ACR approval as a risk mitigation mechanism. Insurance may be a financial product based on an actuarial analysis of project risk that considers circumstances such as the region, threats, and mitigating factors. ',
          },
          uncertainty_deduction: {
            value: 'Allowed',
            reference:
              'ACR Standard 7.0, Section 5.B.3; ACR Risk Tool 1.0; ACR Buffer Pool Terms and Conditions (2020)',
            comment:
              'Buffer pool contribution can come from the current project or from any other vintage held by the ACR registry or a combination of the two. All buffer contributions, deductibles, and ERT replacements (in the case of intentional reversals) may be made in ERTs of any type and vintage. In lieu of making a Buffer Pool Contribution or Reserve Account Contribution, Project Proponents may propose an insurance product for ACR approval as a risk mitigation mechanism. Insurance may be a financial product based on an actuarial analysis of project risk that considers circumstances such as the region, threats, and mitigating factors. ',
          },
          onsite_verification: {
            value: 'Required',
            reference: 'Standard v7.0, Section 9.C',
            comment: '',
          },
          sampling_verification: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See Standard v7.0, Section 9 for general discussion of verification. ',
          },
          crediting_period: {
            value: 10,
            reference:
              'Compost Additions to Grazed Grasslands v1.0, Section B.3',
            comment:
              'The crediting term is 10 years, with the requirement to newly validate the project plan in each crediting term. There is no limit on the number of crediting term renewals.  ',
          },
          permanence: {
            value: 40,
            reference:
              'Compost Additions to Grazed Grasslands v1.0, Section B.3',
            comment:
              'The minimum project term \u2013 i.e. the term over which a project is required to maintain monitor and verify carbon stocks \u2013 is 40 years. ',
          },
          notes:
            "Buffer pool contribution can come from the current project, from any other vintage held by the ACR registry, or a combination of the two. All buffer contributions, deductibles, and ACR offset credit (ERT) replacements (in the case of intentional reversals) may be made in ERTs of any type and vintage or another insurance product may be proposed as a risk mitigation mechanism at ACR's discretion. Verification requires a site visit to verify practices. Crediting Periods may be renewed without limitation, with re-assessment of the project baseline every 40 years. Monitoring by periodic (10 year) analyses of soil samples for model validation is required.",
          comments:
            'Following publication of this analysis, ACR informed us that they had withdrawn this protocol from active use based on technical concerns about the protocol methods and/or models involved. Although no projects were credited under these standards, we continue to report our results for posterity. The contribution of ACR offset credits (ERTs) of any vintage or project means buffer contributions can be made with old or poor quality ERTs that are not selling on the market, not meaningfully addressing risk associated with the specific project. Projects can get credit for positive leakage, but there are no guardrails against double-counting or inaccurate counting. ',
        },
      },
      practices: {
        value: { tillage: 0, cropping: 0, inputs: 1, grazing: 0, other: 0 },
        details: {
          included: {
            value: ['Inputs'],
            reference:
              'Compost Additions to Grazed Grasslands v1.0, Sections A.2 (p.4) and A.5',
            comment: '',
          },
          geographies: {
            value: 'United States',
            reference: 'Implied',
            comment:
              'This protocol does not specify a geographic eligibility, but the defintion of a required "Qualified Expert" \u2013 required for project planning \u2013 refers exclusively to U.S.-based certifications. See Compost Additions to Grazed Grasslands v1.0, p.10.',
          },
          cobenefits: {
            value: 'None',
            reference: 'Not described',
            comment:
              'Co-benefits mentioned (Compost Additions to Grazed Grasslands v1.0, p.7), but not tracked.',
          },
          notes:
            'The only eligible activity is compost addition to grazing land.',
          comments:
            "Following publication of this analysis, ACR informed us that they had withdrawn this protocol from active use based on technical concerns about the protocol methods and/or models involved. Although no projects were credited under these standards, we continue to report our results for posterity. Protocol's geographical constraint to United States is implied, not stated.",
        },
      },
      additionality: {
        score: 1,
        details: {
          financial: {
            value: 'Allowed',
            reference: 'ACR Standard v.7.0, Section 4.A',
            comment: '',
          },
          performance: {
            value: 'Required',
            reference: 'ACR Standard v.7.0, Section 4.A',
            comment: '',
          },
          other: {
            value: 'Allowed',
            reference: 'ACR Standard v.7.0, Section 4.A',
            comment: '',
          },
          activity_backdating: {
            value: 3,
            reference:
              'Compost Additions to Grazed Grasslands v1.0, Section B.3; Standard v7.0, Table 2',
            comment:
              "The ACR Standard generally limits projects to a 3-year backdating period, but provides for a 10-year window for projects that list within 6 months of a protocol's adoption or becoming newly eligible under a revised protocol. Because this protocol was developed in 2014 and is not yet in use, we adopt the shorter timeframe. The longer timeframe could apply if and only if the protocol is changed. ",
          },
          crediting_backdating: {
            value: 3,
            reference:
              'Compost Additions to Grazed Grasslands v1.0, Section B.3; Standard v7.0, Table 2 ',
            comment:
              "The ACR Standard generally limits projects to a 3-year backdating period, but provides for a 10-year window for projects that list within 6 months of a protocol's adoption or becoming newly eligible under a revised protocol. Because this protocol was developed in 2014 and is not yet in use, we adopt the shorter timeframe. The longer timeframe could apply if and only if the protocol is changed. ",
          },
          notes:
            'The protocol requires an undefined common practice test and allows a project to select one of three "barrier" tests, one of which is a project-level financial additionality test. As a result, a performance-based common practice additionality test is required and a financial additionality test is optional.',
          comments:
            'Following publication of this analysis, ACR informed us that they had withdrawn this protocol from active use based on technical concerns about the protocol methods and/or models involved. Although no projects were credited under these standards, we continue to report our results for posterity.  Because the common practice test is not defined in the protocol, its strength is arguably very weak. However, we do not yet see widespread application of compost to grazed grasslands, so the lack of a meaningful common practice test might not be particularly concerning as of this writing. ',
        },
      },
      rigor: {
        score: 1,
        details: {
          ghgs: {
            value: ['CO\u2082', 'CH\u2084', 'N\u2082O'],
            reference:
              'Compost Additions to Grazed Grasslands v1.0, Section B.2',
            comment: '',
          },
          bulk_density: {
            value: 'Measured',
            reference:
              'Compost Additions to Grazed Grasslands v1.0, Section E.1',
            comment: '',
          },
          depth: {
            value: '20 cm',
            reference:
              'Compost Additions to Grazed Grasslands v1.0, Sections E.1 and E.3',
            comment: '',
          },
          equivalent_soil_mass: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          uncertainty: {
            value: 'Required',
            reference:
              'Compost Additions to Grazed Grasslands v1.0, Section D.1',
            comment: '',
          },
          baseline_type: {
            value: 'Dynamic',
            reference:
              'Compost Additions to Grazed Grasslands v1.0, Sections C.3 and D.2',
            comment:
              "The baseline management practices are set based on at least 5 years of historical practices (including livestock stocking rates, stocking periods, and incidents of fire). Protocol's modeling guidance leaves ambiguity around how models may treat these historical practices to create a baseline scenario, but appears to require modeling of annual changes.",
          },
          baseline_scenario: {
            value: 'Sampling required / Modeling required',
            reference:
              'Compost Additions to Grazed Grasslands v1.0, Sections A.3, D.2.2, and Appendix A.2 (p. 47)',
            comment:
              'Under the baseline scenario, the model is used to simulate any on-going changes to SOC, including potential continuing loss of SOC. Soil samples are required to validate the models.',
          },
          project_scenario: {
            value: 'Sampling required / Modeling required',
            reference:
              'Compost Additions to Grazed Grasslands v1.0, Sections A.3 and D.3.2',
            comment:
              'Under the project scenario, the model is used to simulate the amount of compost carbon that is stored in recalcitrant SOC pools, and any indirect changes in SOC due to an increase in net primary production and under specific grazing management strategies. Soil samples required to validate the models.',
          },
          empirical_crediting: {
            value: 'No',
            reference:
              'Compost Additions to Grazed Grasslands v1.0, Section A.3',
            comment:
              'Although sampling is required, soil samples and field measurements validate the models that estimates SOC and are not the direct basis for credits issuance. ',
          },
          sampling_approach: {
            value: 2,
            reference:
              'Compost Additions to Grazed Grasslands v1.0, Sections B.1.3 and E.1',
            comment:
              'Stratification is required and different input model parameters are required for each stratum. During the monitoring phase, sampling is required for model validation but there is no guidance about sampling location and no requirement for randomized sampling. At least three soil samples per parcel should be taken within each stratum, to at least 0-20 cm soil depth. If the relative standard error among the three samples is greater than 20%, more samples should be taken until the relative standard error among samples within stratum is less than 20%.',
          },
          model: {
            value: 'Flexible / Empirical or Process-based',
            reference:
              'Compost Additions to Grazed Grasslands v1.0, Section D.1',
            comment: '',
          },
          notes:
            'Under the baseline scenario, the model is used to simulate any on-going changes to SOC, including potential continuing loss of SOC. Soil samples and field measurements are required to validate the models. The accounting for GHG is rigorous and includes appropriate accounting for compost sources.',
          comments:
            'Following publication of this analysis, ACR informed us that they had withdrawn this protocol from active use based on technical concerns about the protocol methods and/or models involved. Although no projects were credited under these standards, we continue to report our results for posterity. SOC crediting is not empirical and relies entirely on modeling. Direct sampling is required only for model validation. The overall sampling approach is only moderately rigorous and the sampling depth of 20cm is insufficient to capture the full effects of a range of agricultural practices. The flexibility in modeling approaches, coupled with low sampling quality, raises concerns about overall rigor. ',
        },
      },
      safeguards: {
        score: 1,
        details: {
          landowner_protections: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          community_engagement: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          data_privacy: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          notes: 'Protocol does not address any safeguards. ',
          comments:
            'Following publication of this analysis, ACR informed us that they had withdrawn this protocol from active use based on technical concerns about the protocol methods and/or models involved. Although no projects were credited under these standards, we continue to report our results for posterity. No safeguards are provided or required.',
        },
      },
      rating: { score: 1 },
    },
    revisions: [
      { date: '07-15-2021', note: 'First release.' },
      {
        date: '08-10-2021',
        note: 'Following publication, ACR informed us that they had withdrawn this protocol from active use based on technical concerns about the protocol methods and/or models involved. Although no projects were credited under these standards, we continue to report our results for posterity. We updated the protocol status and comments on each metric to reflect protocol inacivity.',
      },
    ],
  },
  SOIL007: {
    id: 'SOIL007',
    name: 'CAR Soil',
    entity: 'Climate Action Reserve',
    details: {
      protocol: 'Soil Enrichment Protocol',
      links: [
        {
          name: 'Soil Enrichment Protocol v1.0',
          href: 'https://www.climateactionreserve.org/wp-content/uploads/2020/10/Soil-Enrichment-Protocol-V1.0.pdf',
        },
        {
          name: 'Reserve Offset Program Manual (2019)',
          href: 'https://www.climateactionreserve.org/wp-content/uploads/2019/11/Reserve_Offset_Program_Manual_November_2019.pdf',
        },
        {
          name: 'SEP Additionality Tool v1.0a',
          href: 'https://www.climateactionreserve.org/how/protocols/soil-enrichment/',
        },
      ],
      parties: ['Indigo Ag', 'TerraCarbon'],
      status: 'Projects in development',
      projects:
        'See [CAR1459](https://thereserve2.apx.com/mymodule/reg/prjView.asp?id1=1459).',
      notes:
        'Protocol credits emission reductions or enhanced soil carbon sequestration on agricultural lands through the adoption of a wide variety of eligible land management activities. It was published in 2020. ',
      comments:
        'The single project ([CAR1459](https://thereserve2.apx.com/mymodule/reg/prjView.asp?id1=1459)) currently using this protocol is an omnibus project by Indigo Ag, one of the sponsors of the protocol development. This omnibus project currently includes 56,000 fields managed by 2,000 entities, and is estimated to include 4.6 million acres across the continental United States. This is one of two protocols developed by Indigo Ag and TerraCarbon (see also Verra Improved Ag). Protocol features significant methodological discretion on implementation. ',
      timeline: {
        activity: [-2, 0],
        crediting: [-2, 10],
        registration: [0],
        verification: [0, 5, 10],
        permanence: [-2, 110],
      },
    },
    metrics: {
      durability: {
        score: 2,
        details: {
          buffer_pool: {
            value: 'Required',
            reference: 'Soil Enrichment Protocol v1.0, Section 5.3.1',
            comment: '',
          },
          leakage_test: {
            value: 'Required',
            reference: 'Soil Enrichment Protocol v1.0, Section 5.3.1',
            comment: '',
          },
          uncertainty_deduction: {
            value: 'Required',
            reference: 'Soil Enrichment Protocol v1.0, Section 5.3.1',
            comment: '',
          },
          onsite_verification: {
            value: 'None',
            reference: 'Soil Enrichment Protocol v1.0, Section 8.4',
            comment:
              'Every reporting period, a subset of Field Managers in a given project are subject to a site-visit verification. However, a verifier may seek approval from CAR to forego said field-visit if it is determined that sufficient proxy data exists (see Soil Enrichment Protocol v1.0, p.93). Standards for waiving the site visit requirement are ambiguous and at the discretion of the registry, which was paid to develop the protocol by one of its users. ',
          },
          sampling_verification: {
            value: 'None',
            reference: 'Soil Enrichment Protocol v1.0, Section 8.3.2',
            comment: '',
          },
          crediting_period: {
            value: 10,
            reference: 'Soil Enrichment Protocol v1.0, Section 3.3',
            comment:
              'The crediting period is 10 years per field, renewable up to 2 times, for a total of up to 30 years.',
          },
          permanence: {
            value: 110,
            reference: 'Soil Enrichment Protocol v1.0, Section 3.5',
            comment:
              'Project Owners must put in place sufficient mechanisms to effectively monitor and report on the status of a soil enrichment project for a minimum period of 100 years following the issuance of any CRT for GHG reductions achieved by the project, unless the project is terminated or the project opts to be issued credits based on a tonne-year accounting basis',
          },
          notes:
            'Requirements for protocol buffer pool contributions, on-site verification processes, and independent sampling in the verification process are subject to numerous exceptions the project developer can request from the registry.',
          comments:
            'Because the protocol is currently being used by its fiscal sponsor, and because the registry can create discretarionry exemptions to default requirements about buffer pool contributions, on-site verification, and third-party soil sampling, the direct conflict of interest between protocol user/sponsor and decision-maker is a significant concern for risk management metrics. Several of the potential exemptions appear to be explicit loopholes that create the appearance of risk management without actually requiring any. Protocol can be used to rigorously manage risk, but is not automatically required to do so.',
        },
      },
      practices: {
        value: { tillage: 1, cropping: 1, inputs: 1, grazing: 1, other: 1 },
        details: {
          included: {
            value: ['Grazing', 'Cropping', 'Inputs', 'Tillage', 'Other'],
            reference: 'Soil Enrichment Protocol v1.0, Section 2.2.1',
            comment: '',
          },
          geographies: {
            value: 'United States (including Territories) / Tribal Lands',
            reference: 'Soil Enrichment Protocol v1.0, Section 3.1',
            comment: '',
          },
          cobenefits: {
            value: 'None',
            reference: 'Not described',
            comment:
              'Co-benefits mentioned (See Soil Enrichment Protocol v1.0, Section 2.4), but not tracked or quantified. ',
          },
          notes:
            'Credited project activities include one or more new agricultural land management practices expected to increase SOC storage and/or reduce GHG emissions from agricultural land management activities.',
          comments:
            'Practice eligibility is defined very broadly and can essentially include any change in agricultural management, as long as changes in SOC can be projected and credited. ',
        },
      },
      additionality: {
        score: 1,
        details: {
          financial: {
            value: 'None',
            reference: 'Soil Enrichment Protocol v1.0, Section 3.4',
            comment: '',
          },
          performance: {
            value: 'Required',
            reference:
              'Soil Enrichment Protocol v1.0, Section 3.4.1.1, 3.4.1.2; SEP Additionality Tool ',
            comment:
              'Protocol employs a common practice performance test that deems any practice additional if it has been adopted by less than 50% of county-level cropland or pasture lands, as applicable. Projects can nevertheless include non-additional practices so long as there is a second practice that passes the common practice test. ',
          },
          other: {
            value: 'None',
            reference: 'Soil Enrichment Protocol v1.0, Section 3.4',
            comment: '',
          },
          activity_backdating: {
            value: 2,
            reference: 'Soil Enrichment Protocol v1.0, Section 3.2',
            comment: '',
          },
          crediting_backdating: {
            value: 2,
            reference: 'Soil Enrichment Protocol v1.0, Sections 3.2 and 3.3',
            comment: '',
          },
          notes:
            'The protocol employs a common practice performance test that deems any practice additional if it has been adopted by less than 50% of county-level cropland or pasture lands, as applicable (Section 3.4.1.1; SEP Additionality Tool). Projects can nevertheless include non-additional practices so long as they include a second practice that passes the common practice test (Section 3.4.1.2).',
          comments:
            'The result of a high theshold for common practice (50% of county lands in use) and the ability to include non-additional practices in crediting by combining multiple practices effectively results in the protocol not having an additionality screen.',
        },
      },
      rigor: {
        score: 2,
        details: {
          ghgs: {
            value: ['CO\u2082', 'CH\u2084', 'N\u2082O'],
            reference: 'Soil Enrichment Protocol v1.0, Table 4.1',
            comment: '',
          },
          bulk_density: {
            value: 'Unclear',
            reference: 'Soil Enrichment Protocol v1.0, Section 6.5',
            comment:
              'SOC measurement requires a calculation that takes into account bulk density and either %C by mass or use of the equivalent soil mass method. However, it is not stated whether bulk density is to be measured or estimated using published values.',
          },
          depth: {
            value: '30 cm',
            reference: 'Soil Enrichment Protocol v1.0, Table 6.2',
            comment: '',
          },
          equivalent_soil_mass: {
            value: 'Allowed',
            reference: 'Soil Enrichment Protocol v1.0, Section 6.5',
            comment: '',
          },
          uncertainty: {
            value: 'Required',
            reference:
              'Soil Enrichment Protocol v1.0, Section 5.2 and Appendix D',
            comment: '',
          },
          baseline_type: {
            value: 'Dynamic',
            reference: 'Soil Enrichment Protocol v1.0, Section 5.1',
            comment: '',
          },
          baseline_scenario: {
            value: 'Sampling required / Modeling required',
            reference:
              'Soil Enrichment Protocol v1.0, Sections 5 (p.27), 5.1 and 6.5',
            comment:
              'The baseline SOC is determined by employing the selected model to create simulations that combine historical management practices with project weather, and consider current year crop type for the project. Direct measurement of soil organic carbon levels must be performed via soil sampling to establish values to be used as the basis for baseline modeling. ',
          },
          project_scenario: {
            value: 'Sampling required / Modeling allowed',
            reference: 'Soil Enrichment Protocol v1.0, Section 5 (p.27-28)',
            comment:
              'SOC must be directly measured at the beginning of the project and trued-up every 5 years. Projects have the option to use modeling to quantify SOC, but direct measurements must be used as model inputs.',
          },
          empirical_crediting: {
            value: 'Yes',
            reference: 'Soil Enrichment Protocol v1.0, Section 5 (p.27)',
            comment:
              'If modeling is employed for quantification, results must be "trued-up" against direct measurements on an intermittent basis. ',
          },
          sampling_approach: {
            value: 2,
            reference: 'Soil Enrichment Protocol v1.0, Section 6.5, Table 6.2',
            comment:
              'Stratification is required and which strata are sampled must be randomized. This does not appear to apply to sampling location within a stratum. Each stratum must contain at least 3 sample points but no additional guidance is provided about sampling density, which is expected to be low. The sampling approach may be expanded to incorporate a range of other sampling methodologies to improve efficiency but no specific guidance is provided.',
          },
          model: {
            value: 'Flexible / Undefined',
            reference: 'Soil Enrichment Protocol v1.0, Section 6.6',
            comment:
              'Models used may be empirical or process-based, and must be publicly available, shown in at least one peer-reviewed study to successfully simulate changes in SOC and, where modeling is used for non-reversible emissions impacts, trace gas emissions resulting from changes in agricultural management included in the project description, and able to support repeating the project model simulations. DNDC, COMET-Farm models are suggested.',
          },
          notes:
            'The baseline includes direct measurements of SOC at project initiation to inform baseline modeling, based on at least three years of historical management data paired with current weather data. Soil sampling includes stratification and minimum sampling density. Modeling approaches are flexible, with some constraints around ensuring models are nominally peer-reviewed.',
          comments:
            "SOC crediting is empirical and includes interim modeling, with rigorous guidelines for model selection and application. Direct sampling is required for baseline estimation and in some instances for model validation. The overall sampling approach is only moderately rigorous, however, and the minimum sampling depth of 30cm is insufficient to capture the full effects of a range of agricultural practices. Sampling approach depends on project determinations of stratification, with only minimal constraints and low required sampling density. Projects have wide latitude to determine the number of strata for soil sampling and for choosing soil carbon modeling approaches. The dynamism of the baseline is confined to weather fluctuations through time and does not capture possible shifts in agricultural practices. The first and large (4.4 million acre) project that has initiated the crediting process under this protocol has not disclosed its sampling or modeling choices as of this writing. Because the protocol is being used by its fiscal sponsor, and because sampling and modeling choices are reviewed at the registry's discretion, the direct conflict of interest between protocol user/sponsor and decision-maker is a significant concern for quantification.",
        },
      },
      safeguards: {
        score: 1,
        details: {
          landowner_protections: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          community_engagement: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          data_privacy: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          notes: 'Protocol does not address any safeguards. ',
          comments: 'No safeguards are provided or required.',
        },
      },
      rating: { score: 2 },
    },
    revisions: [{ date: '07-15-2021', note: 'First release.' }],
  },
  SOIL008: {
    id: 'SOIL008',
    name: 'Verra Fire + Grazing',
    entity: 'Verra',
    details: {
      protocol:
        'VM0032 Methodology for the Adoption of Sustainable Grasslands through Adjustment of Fire and Grazing v1.0',
      links: [
        {
          name: 'VM0032 Methodology for the Adoption of Sustainable Grasslands through Adjustment of Fire and Grazing v1.0',
          href: 'https://verra.org/methodology/vm0032-methodology-for-the-adoption-of-sustainable-grasslands-through-adjustment-of-fire-and-grazing-v1-0/',
        },
        {
          name: 'VCS Standard v4.1',
          href: 'https://verra.org/wp-content/uploads/2021/04/VCS-Standard_v4.1.pdf',
        },
        {
          name: 'VCS Validation and Verification Manual v3.2',
          href: 'https://verra.org/wp-content/uploads/2018/03/VCS_Validation_Verification_Manual_v3.2.pdf',
        },
        {
          name: 'VT001 Tool for the Demonstration and Assessment of Additionality in VCS Agriculture, Forestry and Other Land Use (AFOLU) Project Activities v3.0',
          href: 'https://verra.org/methodology/vt0001-tool-for-the-demonstration-and-assessment-of-additionality-in-vcs-agriculture-forestry-and-other-land-use-afolu-project-activities-v3-0/',
        },
        {
          name: 'AFOLU Non-Permanence Risk Tool v4.0',
          href: 'https://verra.org/wp-content/uploads/2019/09/AFOLU_Non-Permanence_Risk-Tool_v4.0.pdf',
        },
      ],
      parties: [
        'Soils for the Future',
        'The Nature Conservancy',
        'Fauna and Flora International',
      ],
      status: 'Credits issued',
      projects:
        'See [VCS1468](https://registry.verra.org/app/projectDetail/VCS/1468). ',
      notes:
        'Protocol credits the impacts of grazing management and fire management. It was published in 2015. ',
      comments:
        'The single project ([VCS1468](https://registry.verra.org/app/projectDetail/VCS/1468)) recieving credits under this protocol appears in as [an entry](https://carbonplan.org/research/cdr-database/project?id=MSFT003) in our CDR database.',
      timeline: {
        activity: [-5, 0],
        crediting: [-5, 20],
        registration: [0],
        verification: [0, 5, 10, 15, 20],
        permanence: [-5, 20],
      },
    },
    metrics: {
      durability: {
        score: 2,
        details: {
          buffer_pool: {
            value: 'Required',
            reference:
              'VCS Standard v4.1, Sections 2.4 and 3.2.9-3.2.19; VCS AFOLU Non-Permanence Risk Tool v4.0',
            comment:
              'Buffer pool is not specified in this protocol but relies on the VCS standard.',
          },
          leakage_test: {
            value: 'Required',
            reference:
              'VCS Standard v4.1, Sections 2.4 and 3.2.9-3.2.19; VCS AFOLU Non-Permanence Risk Tool v4.0',
            comment:
              'Buffer pool is not specified in this protocol but relies on the VCS standard.',
          },
          uncertainty_deduction: {
            value: 'Required',
            reference:
              'VCS Standard v4.1, Sections 2.4 and 3.2.9-3.2.19; VCS AFOLU Non-Permanence Risk Tool v4.0',
            comment:
              'Buffer pool is not specified in this protocol but relies on the VCS standard.',
          },
          onsite_verification: {
            value: 'Required',
            reference:
              'VCS Validation and Verification Manual v3.2, Section 3.4.1',
            comment: '',
          },
          sampling_verification: {
            value: 'None',
            reference:
              'VCS Validation and Verification Manual v3.2, Section 3.3.1',
            comment: '',
          },
          crediting_period: {
            value: 20,
            reference: 'VCS Standard 4.1, Section 3.8.3',
            comment:
              'Crediting period must be at minimum 20 years, but may be up to 100 years.',
          },
          permanence: {
            value: 20,
            reference: 'Implied',
            comment:
              'Permanence risk is assessed on a 100 year timeframe, but there does does not appear to be a permanence obligation that extends past the crediting period. ',
          },
          notes:
            "The buffer pool contribution is generic and not based on any soil- or agricultural-specific considerations; under version 4.0 of the VCS Non-Permanent Risk Tool, the minimum buffer contribution is 10% (Section 2.5.2). We identified three Verra soil projects (VCS ID 2458, 1468, and 1225) that calculated buffer pool contributions using Verra's standard approach (10%, 16%, and 10%, respectively). Protocol does not identify permanence criteria. VCS Standard allows for a minmum 20-year crediting period that can be renewed up to 100 years in total.",
          comments:
            'The buffer pool contributions are opaque and not suited to addressing soil carbon risks. The potential source of leakage quantified is not associated with activities that directly or indirectly affect SOC. Our review of existing projects indicates that the buffer pool contribution is likely to be at or near 10% for future applications.',
        },
      },
      practices: {
        value: { tillage: 0, cropping: 0, inputs: 0, grazing: 1, other: 1 },
        details: {
          included: {
            value: ['Grazing', 'Other'],
            reference: 'VM0032, Sections 2.1 and 10',
            comment:
              'This methodology applies to project activities that adjust the number, type and husbandry of grazing animals, adjust the frequency and intensity of planned or unplanned fires, and/or introduce herbaceous grassland species as potential forage for grazing animals or to restore degraded soils.',
          },
          geographies: {
            value: 'Global ',
            reference: 'Implied',
            comment:
              'See VM0032, Section 4 for general discussion of applicability. No specific geographic limitations provided. ',
          },
          cobenefits: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          notes:
            'This methodology may be used to credit activities that adjust the number, type, and husbandry of grazing animals, adjust the frequency and intensity of planned or unplanned fires, and/or introduce herbaceous grassland species as potential forage for grazing animals or to restore degraded soils.',
          comments:
            'Project activities are expected to take place in systems that are experiencing SOC loss and are generally degraded. ',
        },
      },
      additionality: {
        score: 1,
        details: {
          financial: {
            value: 'Allowed',
            reference: 'VM0032, Section 7; VT0001, Section 2.2',
            comment: '',
          },
          performance: {
            value: 'Required',
            reference: 'VM0032, Section 7; VT0001, Section 2.4',
            comment: '',
          },
          other: {
            value: 'Allowed',
            reference: 'VM0032, Section 7; VT0001, Section 2.3',
            comment: '',
          },
          activity_backdating: {
            value: 5,
            reference: 'VCS Standard 4.1, Section 3.7.3',
            comment: '',
          },
          crediting_backdating: {
            value: 5,
            reference: 'Implied ',
            comment:
              'No clear indication that crediting backdating differs from activity backdating. See VCS Standard 4.1, Section 3.7.3. ',
          },
          notes:
            'Additionality is determined by reference to a VCS standard (VT0001) that is based on an older Clean Development Mechanism additionality standard, and which requires either a project-level financial additionality test or a project barriers analysis. A common practice test is also required, but does not specify the unit of analysis or threshold of concern.',
          comments:
            'Projects can choose to show either that their proposed activities are not the most financially profitable (financial additionality) or that they face barriers that offsets help address (barrier analysis). Neither is a stringent test. Because the required common practice test does not identify or justify either a unit of analysis or threshold of concern, we conclude that it does not meaningfully contribute to an additionality screen. ',
        },
      },
      rigor: {
        score: 2,
        details: {
          ghgs: {
            value: ['CH\u2084'],
            reference: 'VM0032, Tables 2 and 3',
            comment: '',
          },
          bulk_density: {
            value: 'Measured',
            reference: 'VM0032, Section 2.3 (p.8)',
            comment: '',
          },
          depth: {
            value: 'Variable',
            reference: 'VM0032, Sections 8.1.3.3 (p.27), 9.1.4 and 9.2.3',
            comment:
              'Three options to determine soil sampling depth: (1) account for the vast majority (> 80%) of SOC in the soil column, (2) reflect depth to hardpans or bedrock, or (3) match calculations from soil carbon models. ',
          },
          equivalent_soil_mass: {
            value: 'Required',
            reference: 'VM0032, Section 9.2.3 (p.68)',
            comment: '',
          },
          uncertainty: {
            value: 'Required',
            reference: 'VM0032, Section 8.4.2',
            comment: '',
          },
          baseline_type: {
            value: 'Fixed',
            reference: 'VM0032, Sections 8.1.3.3 and 8.1.3.4',
            comment: '',
          },
          baseline_scenario: {
            value: 'Sampling required / Modeling allowed',
            reference: 'VM0032, Section 8.1.3.3',
            comment: '',
          },
          project_scenario: {
            value: 'Sampling required / Modeling allowed',
            reference: 'VM0032, Sections 2.2,  2.3 and 8.2.3',
            comment:
              'The project scenario emissions can be measured or modeled, in the case where modeling us used, sampling is required for model calibration. ',
          },
          empirical_crediting: {
            value: 'No',
            reference: 'VM0032, Section 8.2.3 and 8.1.3.3',
            comment: '',
          },
          sampling_approach: {
            value: 3,
            reference: 'VM0032, Section 8.1.2',
            comment:
              'Rigorous stratification is required for both the measured and modeled quantification approaches. Sampling sites within strata are selected to encompass as much of the variability in key factors as possible in order to test that the model is appropriate for use in the project area. Sampling density is determined using an online calculator or a power analysis in any standard statistics program.',
          },
          model: {
            value: 'Flexible / Process-based',
            reference: 'VM0032, Sections 2.3 (p.8)',
            comment:
              'Modeling approach requires the use of process-based soil carbon models that have been published in peer-reviewed journal articles and validated with independent data. Data used to validate the model must have been published in a peer-reviewed journal article and independent from data used to build the model. Selected models must demonstrate that they can predict SOC stocks or changes in SOC stocks at each of a large number of sampling stations that differ in key factors, such as climate soil type, past management, and vegetation. The methodology provides clear model testing and validation steps and if the model does not sufficiently predict measured SOC values, a measurement approach has to be used.',
          },
          notes:
            'The baseline can be measured with sampling or modeled with sample-based calibration, which determines how SOC in the project scenario will be tracked. Sampling approaches are rigorous and adequately address within-site variation in SOC. The modeling approach requires the use of soil carbon models that have been published in peer-reviewed journal articles and validated with independent data. This methodology assumes soil carbon remains constant or decreases over time in absence of the project activities, using the RothC model to determine the baseline or assume a zero baseline. Both baseline and project scenario SOC are modeled using RothC. Other emissions sources are calculated for both the baseline and project scenarios using CDM tools.\n',
          comments:
            'SOC crediting can be empirical or rely entirely on modeling. Direct sampling is required in only one of the two approved SOC quantification approaches, with rigorous sampling standards. There is guidance to ensure an appropriately rigorous modeling approach is applied. Not all GHG emission sources that may be affected by the project activity are included.',
        },
      },
      safeguards: {
        score: 1,
        details: {
          landowner_protections: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          community_engagement: {
            value: 'No',
            reference: 'Not described',
            comment:
              'Community engagement reduces required contribution to buffer pool, but is not required. See AFOLU Non-Permanence Risk Tool v4.0, Table 7. ',
          },
          data_privacy: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          notes: 'Protocol does not address any safeguards. ',
          comments: 'No safeguards are provided or required.',
        },
      },
      rating: { score: 2 },
    },
    revisions: [{ date: '07-15-2021', note: 'First release.' }],
  },
  SOIL009: {
    id: 'SOIL009',
    name: 'Verra Sustainable Ag',
    entity: 'Verra',
    details: {
      protocol:
        'VM0017 Adoption of Sustainable Agricultural Land Management v1.0',
      links: [
        {
          name: 'VM0017 Adoption of Sustainable Agricultural Land Management v1.0',
          href: 'https://verra.org/wp-content/uploads/2018/03/VM0017-SALM-Methodolgy-v1.0.pdf',
        },
        {
          name: 'VCS Standard v4.1',
          href: 'https://verra.org/wp-content/uploads/2021/04/VCS-Standard_v4.1.pdf',
        },
        {
          name: 'VCS Validation and Verification Manual v3.2',
          href: 'https://verra.org/wp-content/uploads/2018/03/VCS_Validation_Verification_Manual_v3.2.pdf',
        },
        {
          name: 'AFOLU Non-Permanence Risk Tool v4.0',
          href: 'https://verra.org/wp-content/uploads/2019/09/AFOLU_Non-Permanence_Risk-Tool_v4.0.pdf',
        },
        {
          name: 'CDM A/R Baseline and Additionality Tool',
          href: 'https://cdm.unfccc.int/methodologies/ARmethodologies/tools/ar-am-tool-02-v1.pdf/history_view',
        },
      ],
      parties: ['BioCarbon Fund'],
      status: 'Credits issued',
      projects:
        'See [VCS1225](https://registry.verra.org/app/projectDetail/VCS/1225) and [VCS1704](https://registry.verra.org/app/projectDetail/VCS/1704), both credited projects. [VCS1246](https://registry.verra.org/app/projectDetail/VCS/1246), [VCS 1711](https://registry.verra.org/app/projectDetail/VCS/1711], [VCS1944](https://registry.verra.org/app/projectDetail/VCS/1944), [VCS2075](https://registry.verra.org/app/projectDetail/VCS/2075), and [VCS2485](https://registry.verra.org/app/projectDetail/VCS/2485) are projects in the development pipeline. ',
      notes:
        'Protocol credits any activities that increase the carbon stocks on agricultural land. It was published in 2011. ',
      comments:
        'Two projects have been credited under this protocol ([VCS1225](https://registry.verra.org/app/projectDetail/VCS/1225) and [VCS1704](https://registry.verra.org/app/projectDetail/VCS/1704)), and five projects are under development ([VCS1246](https://registry.verra.org/app/projectDetail/VCS/1246), [VCS 1711](https://registry.verra.org/app/projectDetail/VCS/1711), [VCS1944](https://registry.verra.org/app/projectDetail/VCS/1944), [VCS2075](https://registry.verra.org/app/projectDetail/VCS/2075), and [VCS2485](https://registry.verra.org/app/projectDetail/VCS/2485)). Protocol relies heavily on external CDM tools. Note that the protocol as written references the VCS Standard v3.1 for general guidance on crediting and verification. However, the VCS Standard v3.1 appears to be decomissioned, so we evaluate the protocol with reference to the current VCS Standard v4.1. ',
      timeline: {
        activity: [-5, 0],
        crediting: [-5, 20],
        registration: [0],
        verification: [0, 5, 10, 15, 20],
        permanence: [-5, 20],
      },
    },
    metrics: {
      durability: {
        score: 2,
        details: {
          buffer_pool: {
            value: 'Required',
            reference:
              'VCS Standard v4.1, Sections 2.4 and 3.2.9-3.2.19; VCS AFOLU Non-Permanence Risk Tool v4.0',
            comment:
              'Buffer pool is not specified in this protocol but relies on the VCS standard.',
          },
          leakage_test: {
            value: 'Required',
            reference:
              'VCS Standard v4.1, Sections 2.4 and 3.2.9-3.2.19; VCS AFOLU Non-Permanence Risk Tool v4.0',
            comment:
              'Buffer pool is not specified in this protocol but relies on the VCS standard.',
          },
          uncertainty_deduction: {
            value: 'Required',
            reference:
              'VCS Standard v4.1, Sections 2.4 and 3.2.9-3.2.19; VCS AFOLU Non-Permanence Risk Tool v4.0',
            comment:
              'Buffer pool is not specified in this protocol but relies on the VCS standard.',
          },
          onsite_verification: {
            value: 'Required',
            reference:
              'VCS Validation and Verification Manual v3.2, Section 3.4.1',
            comment: '',
          },
          sampling_verification: {
            value: 'None',
            reference:
              'VCS Validation and Verification Manual v3.2, Section 3.3.1',
            comment: '',
          },
          crediting_period: {
            value: 20,
            reference: 'VCS Standard 4.1, Section 3.8.3',
            comment:
              'Crediting period must be at minimum 20 years, but may be up to 100 years.',
          },
          permanence: {
            value: 20,
            reference: 'Implied',
            comment:
              'Permanence risk is assessed on a 100 year timeframe, but there does does not appear to be a permanence obligation that extends past the crediting period. ',
          },
          notes:
            "The buffer pool contribution is generic and not based on any soil- or agricultural-specific considerations; under version 4.0 of the VCS Non-Permanent Risk Tool, the minimum buffer contribution is 10% (Section 2.5.2). We identified three Verra soil projects (VCS ID 2458, 1468, and 1225) that calculated buffer pool contributions using Verra's standard approach (10%, 16%, and 10%, respectively). Protocol does not identify permanence criteria. VCS Standard allows for a minmum 20-year crediting period that can be renewed up to 100 years in total.",
          comments:
            'The buffer pool contributions are opaque and not suited to addressing soil carbon risks. The potential source of leakage quantified is not associated with activities that directly or indirectly affect SOC. Our review of existing proejcts indicates that the buffer pool contribution is likely to be at or near 10% for future applications.',
        },
      },
      practices: {
        value: { tillage: 1, cropping: 1, inputs: 1, grazing: 1, other: 1 },
        details: {
          included: {
            value: ['Grazing', 'Cropping', 'Inputs', 'Tillage', 'Other'],
            reference: 'VM0017, Sections 1.1 and 1.2',
            comment:
              'Protocol covers any practice that increases carbon stocks on the land and applies to degraded or degrading croplands or grasslands only. ',
          },
          geographies: {
            value: 'Global ',
            reference: 'Implied',
            comment:
              'See VM0017, Section 1.2 for discussion of eligibility. No specific geographic limitations provided. ',
          },
          cobenefits: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          notes:
            'Methodology can be used to credit any practice that increases carbon stocks on croplands or grasslands, including manure management, use of cover crops, returning composted crop residues to the field, and introducing trees into the landscape. Protocol explicitly credits both emission reductions and increased soil carbon stocks. ',
          comments: 'None',
        },
      },
      additionality: {
        score: 1,
        details: {
          financial: {
            value: 'Allowed',
            reference:
              'VM0017, Section II.3; CDM A/R Baseline and Additionality Tool, Step 3',
            comment: '',
          },
          performance: {
            value: 'Required',
            reference:
              'VM0017, Section II.3; CDM A/R Baseline and Additionality Tool, Step 4',
            comment: '',
          },
          other: {
            value: 'Required',
            reference:
              'VM0017, Section II.3; CDM A/R Baseline and Additionality Tool, Step 2',
            comment: '',
          },
          activity_backdating: {
            value: 5,
            reference: 'VCS Standard 4.1, Section 3.7.3',
            comment: '',
          },
          crediting_backdating: {
            value: 5,
            reference: 'Implied ',
            comment:
              'No clear indication that crediting backdating differs from activity backdating. ',
          },
          notes:
            'The protocol relies on a 2007 Clean Development Mechanism aforestation and reforetation tool to asess additionality. The CDM tool requires a barriers analysis and common practice assessment; depending on the outcome of the barrier analysis, it can also require a project-level financial additionality test. ',
          comments:
            'The CDM additionality tool was developed specifically for aforestation and reforestation. The Verra protocol has a single line instructing protocol users to adapt it "mutatis mutandis" for use in a soil management context. Project-level barrier analysis is vague and can exempt the need for even a superficial financial additionality test. The common practice test is vague and largely undefined, with exemptions such as allowing projects to identify unspecified "essential differences" between their planned activities and any related activities that are already present in comparable lands. ',
        },
      },
      rigor: {
        score: 1,
        details: {
          ghgs: {
            value: ['CO\u2082', 'CH\u2084', 'N\u2082O '],
            reference: 'VM0017, Table 2',
            comment: '',
          },
          bulk_density: {
            value: 'Estimated',
            reference: 'Inferred',
            comment:
              'Quantification relies the Roth-C model, which calculates an initial SOC stock taking into account bulk density. Since no sampling is required by this protocol, we infer bulk density is estimated.',
          },
          depth: {
            value: '30 cm',
            reference: 'VM0017, Section 2.4.6 and 3.1.6',
            comment: '',
          },
          equivalent_soil_mass: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          uncertainty: {
            value: 'Required',
            reference: 'VM0017, Section 4.2.8',
            comment: '',
          },
          baseline_type: {
            value: 'Fixed',
            reference: 'VM0017, Sections 2.4.6 and 2.4.7',
            comment: '',
          },
          baseline_scenario: {
            value: 'No sampling / Modeling required',
            reference: 'VM0017, Section 2.4.6',
            comment: '',
          },
          project_scenario: {
            value: 'No sampling / Modeling required',
            reference: 'VM0017, Section 3.1.6',
            comment: '',
          },
          empirical_crediting: {
            value: 'No',
            reference: 'VM0017, Sections 3.1.6, 3.1.7, 3.1.9 and 3.3',
            comment:
              'Credited SOC is estimated entirely from the use of the RothC model. ',
          },
          sampling_approach: {
            value: 'N/A',
            reference: 'Not described',
            comment: 'No soil sampling is required.',
          },
          model: {
            value: 'RothC / Process-based',
            reference: 'VM0017, Section 1.1',
            comment:
              'The protocol states it is currently only applicable with the use of the RothC model, although some sections of the protocol refer more generally to the use of a peer-reviewed, analytical model of SOC. The estimates of uncertainty and Activity Baseline and Monitoring Survey in the current methodology are adapted for the Roth-C model only. ',
          },
          notes:
            'Methodology assumes soil carbon remains constant or decreases over time in absence of the project activities. Both baseline and project scenario SOC are modeled using RothC. Other emissions sources are calculated for both the baseline and project scenarios using CDM tools.',
          comments:
            'SOC crediting is not empirical and relies entirely on modeling. Direct sampling is not required. The modeled soil depth of 30cm is insufficient to capture the full effect of project activities on SOC and other critical soil variables like bulk density or equivalent soil mass are estimated or not considered. There is no sampling to true-up model projections.',
        },
      },
      safeguards: {
        score: 1,
        details: {
          landowner_protections: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          community_engagement: {
            value: 'No',
            reference: 'Not described',
            comment:
              'Community engagement reduces required contribution to buffer pool, but is not required. See AFOLU Non-Permanence Risk Tool v4.0, Table 7. ',
          },
          data_privacy: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          notes: 'Protocol does not address any safeguards. ',
          comments: 'No safeguards are provided or required.',
        },
      },
      rating: { score: 1 },
    },
    revisions: [{ date: '07-15-2021', note: 'First release.' }],
  },
  SOIL010: {
    id: 'SOIL010',
    name: 'Verra Improved Ag',
    entity: 'Verra',
    details: {
      protocol:
        'VM0042 Methodology for Improved Agricultural Land Management, v1.0',
      links: [
        {
          name: 'VM0042 Methodology for Improved Agricultural Land Management v1.0',
          href: 'https://verra.org/methodology/vm0042-methodology-for-improved-agricultural-land-management-v1-0/',
        },
        {
          name: 'VCS Standard v4.1',
          href: 'https://verra.org/wp-content/uploads/2021/04/VCS-Standard_v4.1.pdf',
        },
        {
          name: 'VCS Validation and Verification Manual v3.2',
          href: 'https://verra.org/wp-content/uploads/2018/03/VCS_Validation_Verification_Manual_v3.2.pdf',
        },
        {
          name: 'VCS AFOLU Non-Permanence Risk Tool v4.0',
          href: 'https://verra.org/wp-content/uploads/2019/09/AFOLU_Non-Permanence_Risk-Tool_v4.0.pdf',
        },
      ],
      parties: ['Indigo Ag', 'TerraCarbon'],
      status: 'No projects yet',
      projects: 'N/A',
      notes:
        'Protocol credits emission reductions and removals resulting from a wide variety of improved agricultural land management practices. It was published in 2020. ',
      comments:
        'Protocol is one of two protocols developed by Indigo Ag and TerraCarbon (see also the CAR Soil protocol) and relies on additional VCS guidance documents to describe the full quantification, verification, and crediting cycles.',
      timeline: {
        activity: [-5, 0],
        crediting: [-5, 20],
        registration: [0],
        verification: [0, 5, 10, 15, 20],
        permanence: [-5, 20],
      },
    },
    metrics: {
      durability: {
        score: 2,
        details: {
          buffer_pool: {
            value: 'Required',
            reference:
              'VM0042, Section 8.7; VCS AFOLU Non-Permanence Risk Tool v4.0',
            comment:
              'Buffer pool is not specified in this protocol but relies on the VCS standard.',
          },
          leakage_test: {
            value: 'Required',
            reference:
              'VM0042, Section 8.7; VCS AFOLU Non-Permanence Risk Tool v4.0',
            comment:
              'Buffer pool is not specified in this protocol but relies on the VCS standard.',
          },
          uncertainty_deduction: {
            value: 'Required',
            reference:
              'VM0042, Section 8.7; VCS AFOLU Non-Permanence Risk Tool v4.0',
            comment:
              'Buffer pool is not specified in this protocol but relies on the VCS standard.',
          },
          onsite_verification: {
            value: 'Required',
            reference:
              'VCS Validation and Verification Manual v3.2, Section 3.4.1',
            comment:
              'VCS Standard v4.1, Section 4.1.7 requires projects to follow the VCS Validation and Verification Manual; VCS Validation and Verificaiton Manual, Section 3.4.1 requires verifiers to conduct on-site visits.',
          },
          sampling_verification: {
            value: 'None',
            reference:
              'VCS Validation and Verification Manual v3.2, Section 3.3.1',
            comment: '',
          },
          crediting_period: {
            value: 20,
            reference: 'VCS Standard 4.1, Section 3.8.3',
            comment:
              'Crediting period must be at minimum 20 years, but may be up to 100 years.',
          },
          permanence: {
            value: 20,
            reference: 'Implied',
            comment:
              'Permanence risk is assessed on a 100 year timeframe, but there does does not appear to be a permanence obligation that extends past the crediting period. ',
          },
          notes:
            "The buffer pool contribution is generic and not based on any soil- or agricultural-specific considerations; under version 4.0 of the VCS Non-Permanent Risk Tool, the minimum buffer contribution is 10% (Section 2.5.2). We identified three Verra soil projects (VCS ID 2458, 1468, and 1225) that calculated buffer pool contributions using Verra's standard approach (10%, 16%, and 10%, respectively). Protocol does not identify permanence criteria. VCS Standard allows for a minmum 20-year crediting period that can be renewed up to 100 years in total.",
          comments:
            'The buffer pool contributions are opaque and not suited to addressing soil carbon risks. The potential source of leakage quantified is not associated with activities that directly or indirectly affect SOC. Our review of existing proejcts indicates that the buffer pool contribution is likely to be at or near 10% for future applications.',
        },
      },
      practices: {
        value: { tillage: 1, cropping: 1, inputs: 1, grazing: 1, other: 1 },
        details: {
          included: {
            value: ['Grazing', 'Cropping', 'Inputs', 'Tillage', 'Other'],
            reference: 'VM0042, Section 4 and Appendix 1',
            comment: '',
          },
          geographies: {
            value: 'Global',
            reference: 'Implied',
            comment:
              'See VM0042, Section 4 for discussion of eligibility. No specific geographic limitations provided.',
          },
          cobenefits: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          notes:
            'Methodology applies to any practices that reduce GHG emissions or enhance soil carbon sequestration. ',
          comments:
            'Methodology can be applied exclusively to practice changes that do not directly affect soil organic carbon stocks, such as changing fertilizer management regimes. Buyers seeking credits that reflect changes to soil organic carbon should confirm what practices are being credited.',
        },
      },
      additionality: {
        score: 2,
        details: {
          financial: {
            value: 'None',
            reference: 'VM0042, Section 7',
            comment: '',
          },
          performance: {
            value: 'Required',
            reference: 'VM0042, Section 7, Step 2',
            comment: '',
          },
          other: {
            value: 'Required',
            reference: 'VM0042, Section 7, Step 1',
            comment: '',
          },
          activity_backdating: {
            value: 5,
            reference: 'VCS Standard 4.1, Section 3.7.3',
            comment: '',
          },
          crediting_backdating: {
            value: 5,
            reference: 'Implied',
            comment:
              'No clear indication that crediting backdating differs from activity backdating. ',
          },
          notes:
            'The protocol additionality test requires two parts. First, a barriers analysis must identify factors that will tend to prevent credited activity adoption. Second, a project must show that its activities are not already common practice. Common practice test defines project activities as additional if each project activity has already been adopted by less than 20% of regional lands. Project activities above this threshold are nevertheless deemed additional if the weighted average of the top three activities credited in a project falls below the same 20% threshold. A definition of the "region" over which this comparison is made is not provided. ',
          comments:
            "Protocol requires the pro forma identificaiton of barriers, including cultural or social barriers, that tend to reduce changes in land management practices. The protocol provides several examples that are generic and could be used by any project to satisfy this element. As a result, we do not consider the barrier analysis to be a meaningful component of the protocol's overall additionality test. Compared to the other protocol sponsored by Indigo Ag (see CAR Soil), the common practice threshold of 20% is significantly more restrictive and the protocol better limits the ability of projects to count activities that fail this threshold; in contrast, CAR uses a 50% threshold and allows all activities that constitute common practice to earn credits, so long as one activity that is not common practice is included. However, this protocol (Verra Improved Ag) makes no justification for the 20% threshold analysis other than reference to a Clean Development Mechanism [methodological tool](https://cdm.unfccc.int/methodologies/PAmethodologies/tools/am-tool-24-v1.pdf/history_view) that explicitly says it does not apply to land-based approaches and is meant, instead, for technology adoption thresholds. As a result, while it is fair to observe that the additionality standards of this protocol are more strict than that of the Indigo-Ag-sponsored CAR protocol, no analysis of land-related additionality concerns is made to establish the key operative common practice threshold. Despite these shortcomings, the final result \u2014 a common practice test that generally prohibits credits from activities that are adopted by 20% or more of comparable lands \u2014\u00a0offers a reasonable way to prevent the most egregious non-additional crediting possibilities. ",
        },
      },
      rigor: {
        score: 1,
        details: {
          ghgs: {
            value: ['CO\u2082', 'CH\u2084', 'N\u2082O'],
            reference: 'VM0042, Table 3 and Table 5',
            comment: '',
          },
          bulk_density: {
            value: 'Unclear',
            reference: 'VM0042, Sections 8.2 and 9.2 (pg. 85), Table 6',
            comment:
              'Bulk density measurement is required in cases where samples are taken, but sampling is not required.',
          },
          depth: {
            value: '30 cm',
            reference: 'VM0042, Section 9.2 (p.85)',
            comment: '',
          },
          equivalent_soil_mass: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          uncertainty: {
            value: 'Required',
            reference: 'VM0042, Section 4 (p.9) and Section 8.6',
            comment: '',
          },
          baseline_type: {
            value: 'Dynamic',
            reference: 'VM0042, Sections 6 and 8.2',
            comment: '',
          },
          baseline_scenario: {
            value: 'Sampling allowed / Modeling required',
            reference: 'VM0042, Section 8.2',
            comment: '',
          },
          project_scenario: {
            value: 'Sampling allowed / Modeling required',
            reference: 'VM0042, Section 8.3',
            comment: '',
          },
          empirical_crediting: {
            value: 'No',
            reference: 'VM0042, Sections 2 and 8.3',
            comment:
              'Sampling is allowed, but under Quantification Approach 1 (the only applicable path allowed in the current protocol), projects can estimate SOC using remote sensing or other non-emprical techniques instead of physical sampling. ',
          },
          sampling_approach: {
            value: 1,
            reference:
              'VM0042, Sections 8.2, 8.3, and 9.2 (pg. 85), Tables 6 and 7',
            comment:
              'Sampling is not required and only minimal guidance is provided for sampling approaches. Minimal guidance includes establishing locations prior to sampling, but no specifics are given about stratification or randomization of sampling or sample density.',
          },
          model: {
            value: 'Flexible / Undefined',
            reference: 'VM0042, Sections 2 and 4',
            comment:
              'The protocol does not mandate the use of any specific model but requires empirical or process-based models that are publicly-available, from peer-reviewed scientific studies, able to support repetition of the project model simulations, and validated per datasets and procedures.',
          },
          notes:
            'The baseline scenario is determined by a three year historic period. Sampling methodology is not specified, but generally required to follow "established best practices." Sampling is not required, and estimation via unspecified remote sensing methodologies is allowed. Models are not specified, but must be demonstrated in the peer-reviewed literature to accurately model outcomes of practices used in projects. Protocol anticipates the use of measurement and re-measurement of soil organic carbon, instead of modeling, but the approach is not currently specified and depends on future protocol revisions to establish applicable performance benchmarks. Default IPCC parameters are used to calculate certain CO\u2082, CH\u2084, and N\u2082O fluxes that are unrelated to soil organic carbon stock changes and methanogenesis.',
          comments:
            'SOC crediting is not empirical and relies entirely on modeling. Direct sampling is not required; the optional soil sampling depth of 30cm is insufficient to capture the full effect of project activities on SOC. Other critical soil variables like bulk density or equivalent soil mass are not measured. The only available quantification method is a model-based extrapolation of an unspecified sample that could be taken as far back as five years before the project start date. The methodology includes flexibility to replace soil sampling with estimation from remote sensing. There is insufficient guidance to ensure an appropriately rigorous modeling approach is applied.',
        },
      },
      safeguards: {
        score: 1,
        details: {
          landowner_protections: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          community_engagement: {
            value: 'No',
            reference: 'Not described',
            comment:
              'Community engagement reduces required contribution to buffer pool, but is not required. See AFOLU Non-Permanence Risk Tool v4.0, Table 7. ',
          },
          data_privacy: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          notes: 'Protocol does not address any safeguards. ',
          comments: 'No safeguards are provided or required.',
        },
      },
      rating: { score: 2 },
    },
    revisions: [{ date: '07-15-2021', note: 'First release.' }],
  },
  SOIL011: {
    id: 'SOIL011',
    name: 'Verra Soil',
    entity: 'Verra',
    details: {
      protocol: 'VM0021 Soil Carbon Quantification Methodology v1.0 (2012)',
      links: [
        {
          name: 'VM0021 Soil Carbon Quantification Methodology',
          href: 'https://verra.org/wp-content/uploads/2018/03/VM0021-Soil-Carbon-Quantification-Methodology-v1.0.pdf',
        },
        {
          name: 'VCS Standard v4.1',
          href: 'https://verra.org/wp-content/uploads/2021/04/VCS-Standard_v4.1.pdf',
        },
        {
          name: 'CDM A/R Baseline and Additionality Tool',
          href: 'https://cdm.unfccc.int/methodologies/ARmethodologies/tools/ar-am-tool-02-v1.pdf/history_view',
        },
        {
          name: 'VT001 Tool for the Demonstration and Assessment of Additionality in VCS Agriculture, Forestry and Other Land Use (AFOLU) Project Activities v3.0',
          href: 'https://verra.org/methodology/vt0001-tool-for-the-demonstration-and-assessment-of-additionality-in-vcs-agriculture-forestry-and-other-land-use-afolu-project-activities-v3-0/',
        },
        {
          name: 'VCS AFOLU Non-Permanence Risk Tool v4.0',
          href: 'https://verra.org/wp-content/uploads/2019/09/AFOLU_Non-Permanence_Risk-Tool_v4.0.pdf',
        },
        {
          name: 'VMD0021 Estimation of Stocks in the Soil Carbon Pool v1.0',
          href: 'https://verra.org/methodology/vmd0021-estimation-of-stocks-in-the-soil-carbon-pool-v1-0/',
        },
        {
          name: 'VMD0019 Methods to Project Future Conditions v1.0',
          href: 'https://verra.org/methodology/vmd0019-methods-to-project-future-conditions-v1-0/',
        },
        {
          name: 'VMD0035 Methods to Determine the Net Change in Atmospheric GHG Resulting from Project Activities v1.0',
          href: 'https://verra.org/methodology/vmd0035-methods-to-determine-the-net-change-in-atmospheric-ghg-resulting-from-project-activities-v1-0/',
        },
      ],
      parties: ['The Earth Partners'],
      status: 'No projects yet',
      projects: 'N/A',
      notes:
        'Protocol credits avoided emissions and soil carbon sequestration from a broad variety of agricultural activities. It was published in 2012.',
      comments:
        'Protocol relies on a number of VCS methodology modules and external CDM tools. The significant optionality and multitude of documents makes interpretation and analysis difficult. ',
      timeline: {
        activity: [-5, 0],
        crediting: [-5, 20],
        registration: [0],
        verification: [0, 5, 10, 15, 20],
        permanence: [-5, 20],
      },
    },
    metrics: {
      durability: {
        score: 2,
        details: {
          buffer_pool: {
            value: 'Required',
            reference:
              'VCS Standard v4.1, Sections 2.4 and 3.2.9-3.2.19; VCS AFOLU Non-Permanence Risk Tool v4.0',
            comment:
              'Buffer pool is not specified in this protocol but relies on the VCS standard.',
          },
          leakage_test: {
            value: 'Required',
            reference:
              'VCS Standard v4.1, Sections 2.4 and 3.2.9-3.2.19; VCS AFOLU Non-Permanence Risk Tool v4.0',
            comment:
              'Buffer pool is not specified in this protocol but relies on the VCS standard.',
          },
          uncertainty_deduction: {
            value: 'Required',
            reference:
              'VCS Standard v4.1, Sections 2.4 and 3.2.9-3.2.19; VCS AFOLU Non-Permanence Risk Tool v4.0',
            comment:
              'Buffer pool is not specified in this protocol but relies on the VCS standard.',
          },
          onsite_verification: {
            value: 'Required',
            reference:
              'VCS Validation and Verification Manual v3.2, Section 3.4.1',
            comment: '',
          },
          sampling_verification: {
            value: 'None',
            reference:
              'VCS Validation and Verification Manual v3.2, Section 3.3.1',
            comment: '',
          },
          crediting_period: {
            value: 20,
            reference: 'VCS Standard 4.1, Section 3.8.3',
            comment:
              'Crediting period must be at minimum 20 years, but may be up to 100 years.',
          },
          permanence: {
            value: 20,
            reference: 'Implied',
            comment:
              'Permanence risk is assessed on a 100 year timeframe, but there does does not appear to be a permanence obligation that extends past the crediting period. ',
          },
          notes:
            "The buffer pool contribution is generic and not based on any soil- or agricultural-specific considerations; under version 4.0 of the VCS Non-Permanent Risk Tool, the minimum buffer contribution is 10% (Section 2.5.2). We identified three Verra soil projects (VCS ID 2458, 1468, and 1225) that calculated buffer pool contributions using Verra's standard approach (10%, 16%, and 10%, respectively). Protocol does not identify permanence criteria. VCS Standard allows for a minmum 20-year crediting period that can be renewed up to 100 years in total.",
          comments:
            'The buffer pool contributions are opaque and not suited to addressing soil carbon risks. The potential source of leakage quantified is not associated with activities that directly or indirectly affect SOC. Our review of existing proejcts indicates that the buffer pool contribution is likely to be at or near 10% for future applications.',
        },
      },
      practices: {
        value: { tillage: 1, cropping: 1, inputs: 1, grazing: 1, other: 1 },
        details: {
          included: {
            value: ['Grazing', 'Cropping', 'Inputs', 'Tillage', 'Other'],
            reference: 'VM0021, Sections 2 (p.4) and 4.1',
            comment: '',
          },
          geographies: {
            value: 'Global',
            reference: 'Implied',
            comment:
              'See VM0021, Section 4.1 for discussion of eligibility. No specific geographic limitations provided.',
          },
          cobenefits: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          notes:
            'Methodology is designed to be applicable to projects featuring a wide variety of agricultural activities, including timber harvesting and fertilization. ',
          comments:
            'Methodology is highly abstract and intended to capture essentially any changes to soil carbon and associated agricultural systems. ',
        },
      },
      additionality: {
        score: 1,
        details: {
          financial: {
            value: 'Allowed',
            reference:
              'VM0021, Section 7; CDM A/R Baseline and Additionality Tool, Step 3 (financial analysis); VT0001, Section 2.2',
            comment: '',
          },
          performance: {
            value: 'Required',
            reference:
              'VM0021, Section 7; CDM A/R Baseline and Additionality Tool, Step 4 (common practice); VT0001, Section 2.4',
            comment: '',
          },
          other: {
            value: 'Allowed',
            reference:
              'VM0021, Section 7; CDM A/R Baseline and Additionality Tool, Step 2 (barrier analysis); VT0001, Section 2.3',
            comment: '',
          },
          activity_backdating: {
            value: 5,
            reference: 'VCS Standard 4.1, Section 3.7.3',
            comment: '',
          },
          crediting_backdating: {
            value: 5,
            reference: 'Implied ',
            comment:
              'No clear indication that crediting backdating differs from activity backdating. ',
          },
          notes:
            'Additionality is determined either by reference to a Clean Development Mecahanism aforestation / reforestation [methodological tool](https://cdm.unfccc.int/methodologies/ARmethodologies/tools/ar-am-tool-02-v1.pdf/history_view) or a VCS equivalent, [VT0001](https://verra.org/methodology/vt0001-tool-for-the-demonstration-and-assessment-of-additionality-in-vcs-agriculture-forestry-and-other-land-use-afolu-project-activities-v3-0/). Both options require a largely undefined common practice test and barrier analysis, and can also require a financial analysis. ',
          comments:
            'Both CDM and VCS additionality tests include a vague reference to a common practice test. This element does not contain any defined thresholds or units of analysis, however, so we do not consider it a meaningful additionality screen. The description of the VCS barrier test provides generic answers that would appear to satisfy the analysis. ',
        },
      },
      rigor: {
        score: 3,
        details: {
          ghgs: {
            value: ['CO\u2082', 'CH\u2084', 'N\u2082O'],
            reference: 'VM0021, Section 8.2 (p.19-21)',
            comment:
              'Emissions from domestic animals (CH\u2084), fossil fuel combustion (CO\u2082), soil (CH\u2084 and N\u2082O) and fire (CO\u2082) may be included dependent on conditions set forth in the quantification tasks. This protocol may also include the quantification of soil inorganic carbon (see VMD0021 p.4-5). ',
          },
          bulk_density: {
            value: 'Measured',
            reference: 'VMD0021, Section 5 (p.13-14)',
            comment: '',
          },
          depth: {
            value: 'Variable',
            reference: 'VMD0021, Section 5 (p.6-7)',
            comment:
              'The calculated depth must be set to a depth great enough to capture at least 90% of the expected change in soil carbon resulting from the project activity as compared with the projected soil carbon change under the baseline scenario within the project crediting period, or 2m, whichever is less.',
          },
          equivalent_soil_mass: {
            value: 'Required',
            reference: 'VMD0021, Section 5 (Step 6.2.a, p.17-18)',
            comment: '',
          },
          uncertainty: {
            value: 'Required',
            reference: 'VM0021, Section 8.1 (p.17); VDM0035, p.6-8',
            comment: '',
          },
          baseline_type: {
            value: 'Fixed',
            reference: 'VM0021, Section 8.1 (Task 2.2 and 2.3, p.12)',
            comment:
              'If if ongoing degradation is expected in baseline scenario (Optional condition (a)), baseline SOC is fixed and assumed to remain equal to the soil carbon content at beginning of project. Otherwise, baseline must be projected using one of a range of options presented in [VM0019](https://verra.org/methodology/vmd0019-methods-to-project-future-conditions-v1-0/). ',
          },
          baseline_scenario: {
            value: 'Sampling required / Modeling required',
            reference: 'VM0021, Section 8.1 (Task 2.2 and 2.3, p.12)',
            comment: '',
          },
          project_scenario: {
            value: 'Sampling required / Modeling required',
            reference: 'VM0021, Section 8.2 (Tasks 3.2 and 4.2)',
            comment: '',
          },
          empirical_crediting: {
            value: 'Yes',
            reference: 'VM0021, Task 4 and 4.18',
            comment:
              'Protocol requires ex-ante modeling (projecting sample-based measurements) and ex-post measurement. Protocol explicitly states that net reductions or removals can only be calculated ex-post \u2013 implying empirical crediting based on sampling \u2013 but doesn\u2019t explicitly describe a true-up between the ex-ante and ex-post approaches.',
          },
          sampling_approach: {
            value: 3,
            reference: 'VMD0021, Section 5',
            comment:
              'Rigorous sampling approach is described, including pre-sampling to describe site variation and ensure appropriate stratification and randomization of sampling locations within strata. Pre-sampling also guides sampling density using a number of suggested statistical methods.',
          },
          model: {
            value: 'Flexible / Undefined',
            reference: 'VMD0019',
            comment: '',
          },
          notes:
            'The baseline scenario can be fixed or dynamic, depending on the degradation status of the project site. Soil sampling requirements are detailed and rigorous, including a requirement to pre-sample the site to quantify site variation and ensure stratification is appropriately carried out. Model selection is flexible, with a requirement to use a process-based model and quantification of uncertainty associated with model output.',
          comments:
            'SOC crediting is empirical and relies on direct sampling, which is rigorous. In contrast, there is insufficient guidance to ensure an appropriately rigorous modeling approach is applied. Model-based calculations are extremely vague and have minimal guidance.',
        },
      },
      safeguards: {
        score: 1,
        details: {
          landowner_protections: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          community_engagement: {
            value: 'No',
            reference: 'Not described',
            comment:
              'Community engagement reduces required contribution to buffer pool, but is not required. See AFOLU Non-Permanence Risk Tool v4.0, Table 7. ',
          },
          data_privacy: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          notes: 'Protocol does not address any safeguards. ',
          comments: 'No safeguards are provided or required.',
        },
      },
      rating: { score: 3 },
    },
    revisions: [{ date: '07-15-2021', note: 'First release.' }],
  },
  SOIL012: {
    id: 'SOIL012',
    name: 'Verra Sustainable Grassland',
    entity: 'Verra',
    details: {
      protocol: 'VM0026 Methodology for Sustainable Grassland Management v1.0',
      links: [
        {
          name: 'VM0026 Methodology for Sustainable Grassland Management v1.0',
          href: 'https://verra.org/methodology/vm0026-methodology-for-sustainable-grassland-management-sgm-v1-0/',
        },
        {
          name: 'VCS Standard v4.1',
          href: 'https://verra.org/wp-content/uploads/2021/04/VCS-Standard_v4.1.pdf',
        },
        {
          name: 'VCS Validation and Verification Manual v3.2',
          href: 'https://verra.org/wp-content/uploads/2018/03/VCS_Validation_Verification_Manual_v3.2.pdf',
        },
        {
          name: 'VT001 Tool for the Demonstration and Assessment of Additionality in VCS Agriculture, Forestry and Other Land Use (AFOLU) Project Activities, v3.0',
          href: 'https://verra.org/methodology/vt0001-tool-for-the-demonstration-and-assessment-of-additionality-in-vcs-agriculture-forestry-and-other-land-use-afolu-project-activities-v3-0/',
        },
        {
          name: 'General Guidelines for Sampling and Surveys for Small-scale CDM Project Activities',
          href: 'https://cdm.unfccc.int/EB/050/eb50_repan30.pdf',
        },
        {
          name: 'VCS AFOLU Non-Permanence Risk Tool v4.0',
          href: 'https://verra.org/wp-content/uploads/2019/09/AFOLU_Non-Permanence_Risk-Tool_v4.0.pdf',
        },
      ],
      parties: ['FAO'],
      status: 'Projects in development',
      projects:
        'See [VCS1960](https://registry.verra.org/app/projectDetail/VCS/1960) and [VCS2458](https://registry.verra.org/app/projectDetail/VCS/2458) \u2013 projects in the development pipeline.',
      notes:
        'Protocol credits emissions reductions and soil carbon sequestration from the adoption of sustainable grassland management practices. It was published in 2014. ',
      comments:
        'Protocol relies on additional VCS guidance documents to describe the full quantification, verification, and crediting cycles and provides a wide latitude for credit issuance for any activity with GHG impacts on grasslands. Two projects using this protocol ([VCS1960](https://registry.verra.org/app/projectDetail/VCS/1960) and [VCS2458](https://registry.verra.org/app/projectDetail/VCS/2458)) are in the development pipeline.  ',
      timeline: {
        activity: [-5, 0],
        crediting: [-5, 20],
        registration: [0],
        verification: [0, 5, 10, 15, 20],
        permanence: [-5, 20],
      },
    },
    metrics: {
      durability: {
        score: 2,
        details: {
          buffer_pool: {
            value: 'Required',
            reference:
              'VM0026, Section 8.4; VCS AFOLU Non-Permanence Risk Tool v4.0',
            comment:
              'Buffer pool is not specified in this protocol but relies on the VCS standard.',
          },
          leakage_test: {
            value: 'Required',
            reference:
              'VM0026, Section 8.4; VCS AFOLU Non-Permanence Risk Tool v4.0',
            comment:
              'Buffer pool is not specified in this protocol but relies on the VCS standard.',
          },
          uncertainty_deduction: {
            value: 'Required',
            reference:
              'VM0026, Section 8.4; VCS AFOLU Non-Permanence Risk Tool v4.0',
            comment:
              'Buffer pool is not specified in this protocol but relies on the VCS standard.',
          },
          onsite_verification: {
            value: 'Required',
            reference:
              'VCS Validation and Verification Manual v3.2, Section 3.4.1',
            comment:
              'VCS Standard v4.1, Section 4.1.7 requires projects to follow the VCS Validation and Verification Manual; VCS Validation and Verificaiton Manual, Section 3.4.1 requires verifiers to conduct on-site visits.',
          },
          sampling_verification: {
            value: 'None',
            reference:
              'VCS Validation and Verification Manual v3.2, Section 3.3.1',
            comment: '',
          },
          crediting_period: {
            value: 20,
            reference: 'VCS Standard 4.1, Section 3.8.3',
            comment:
              'Crediting period must be at minimum 20 years, but may be up to 100 years.',
          },
          permanence: {
            value: 20,
            reference: 'VCS Standard 4.1, Section 3.8.3',
            comment:
              'Permanence risk is assessed on a 100 year timeframe, but there does does not appear to be a permanence obligation that extends past the crediting period. ',
          },
          notes:
            "The buffer pool contribution is generic and not based on any soil- or agricultural-specific considerations; under version 4.0 of the VCS Non-Permanent Risk Tool, the minimum buffer contribution is 10% (Section 2.5.2). We identified three Verra soil projects (VCS ID 2458, 1468, and 1225) that calculated buffer pool contributions using Verra's standard approach (10%, 16%, and 10%, respectively). Protocol does not identify permanence criteria. VCS Standard allows for a minmum 20-year crediting period that can be renewed up to 100 years in total.",
          comments:
            'The buffer pool contributions are opaque and not suited to addressing soil carbon risks. The potential source of leakage quantified is not associated with activities that directly or indirectly affect SOC. Our review of existing proejcts indicates that the buffer pool contribution is likely to be at or near 10% for future applications.',
        },
      },
      practices: {
        value: { tillage: 0, cropping: 0, inputs: 1, grazing: 1, other: 1 },
        details: {
          included: {
            value: ['Grazing', 'Inputs', 'Other'],
            reference: 'VM0026, Sections 2 and 4',
            comment: '',
          },
          geographies: {
            value: 'Global',
            reference: 'Implied',
            comment:
              'See VM0026, Sections 2 and 4 for discussion of eligibility. No specific geographic limitations provided.',
          },
          cobenefits: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          notes:
            'Methodology applies to the adoption of sustainable grassland management practices, including rotational grazing, limiting grazing on degraded pastures, and restoration by replanting with perennial grasses.',
          comments: 'None',
        },
      },
      additionality: {
        score: 1,
        details: {
          financial: {
            value: 'Allowed',
            reference: 'VT0001, Section 2.2; VM0026, Section 7',
            comment: '',
          },
          performance: {
            value: 'Required',
            reference: 'VT0001, Section 2.4; VM0026, Section 7',
            comment: '',
          },
          other: {
            value: 'Allowed',
            reference: 'VT0001, Section 2.3; VM0026, Section 7',
            comment: '',
          },
          activity_backdating: {
            value: 5,
            reference: 'VCS Standard 4.1, Section 3.7.3',
            comment: '',
          },
          crediting_backdating: {
            value: 5,
            reference: 'VCS Standard 4.1, Section 3.7.3',
            comment: '',
          },
          notes:
            'Additionality is determined by reference to a VCS standard (VT0001) that is based on an older Clean Development Mechanism additionality standard, and which requires either a project-level financial additionality test or a project barriers analysis. A common practice test is also required, but does not specify the unit of analysis or threshold of concern. We analyzed VT0001, Version 3.0 (2012). ',
          comments:
            'Projects can choose to show either that their proposed activities are not the most financially profitable (financial additionality) or that they face barriers that offsets help address (barrier analysis). Neither is a stringent test. Because the required common practice test does not identify or justify either a unit of analysis or threshold of concern, we conclude that it does not meaningfully contribute to an additionality screen.',
        },
      },
      rigor: {
        score: 1,
        details: {
          ghgs: {
            value: ['CO\u2082', 'CH\u2084', 'N\u2082O '],
            reference: 'VM0026, Sections 5, 8.1, and 8.2, Table 2',
            comment: '',
          },
          bulk_density: {
            value: 'Measured',
            reference: 'VM0026, Section 8.2.8',
            comment:
              'Data used to parameterize the selected model must be based on measurements of soil properties including bulk density.',
          },
          depth: {
            value: '30 cm',
            reference: 'VM0026, Section 8.2.8',
            comment:
              'Data used to parameterize the selected model must be based on organic carbon concentrations measured to the full depth of affected soil layers, or a minimum depth of 30 cm where the full depth of affected soil layers is not known in advance.',
          },
          equivalent_soil_mass: {
            value: 'None',
            reference: 'No described',
            comment: '',
          },
          uncertainty: {
            value: 'Required',
            reference: 'VM0026, Section 8.2.9',
            comment:
              'When using a validated SOC model, quantification of uncertainty is required, and deductions for uncertainty must be applied.',
          },
          baseline_type: {
            value: 'Fixed',
            reference: 'VM0026, Sections 4 and 8.1.8',
            comment:
              'Protocol assumes that SOC changes in the baseline scenario are zero given the assumption that, under the baseline scenario, land is degraded and will continue to degrade.',
          },
          baseline_scenario: {
            value: 'Sampling required / Modeling allowed',
            reference: 'VM0026, Sections 8.1.8 and 8.2.8',
            comment:
              'There are two quantification options for setting a baseline. If Option 1 (modeling), samples must be used for calibration. It is implied but not made explicit that when modeling the baseline, the model would be calibrated with samples from time zero. If Option 2 (sampling), baseline must be measured within 2 years prior to the project start time. Since the applicability conditions limit the project to land that is degraded and is continuing to degrade, the protocol assumes that changes in SOC in the baseline scenario are zero.',
          },
          project_scenario: {
            value: 'Sampling required / Modeling allowed',
            reference: 'VM0026, Section 8.2.8',
            comment:
              'Project scenario can be quantified with direct measurements (Option 2) or modeling using samples to calibrate model implementation (Option 1). The model selected needs to be demonstrated in peer-reviewed studies (e.g. scientific journals, university theses, or work carried out by the project proponent) to be applicable in the project region. ',
          },
          empirical_crediting: {
            value: 'No',
            reference: 'VM0026, Section 8.2.8',
            comment:
              'Project scenario can be quantified with direct measurements (Option 2) or modeling using samples to calibrate model implementation (Option 1). The model selected needs to be demonstrated in peer-reviewed studies (e.g. scientific journals, university theses, or work carried out by the project proponent) to be applicable in the project region. Option 1 does not result in empirical crediting. ',
          },
          sampling_approach: {
            value: 1,
            reference:
              'VM0026, 8.2.8; CDM General Guidelines for Sampling and Surveys for Small-scale CDM Project Activities',
            comment:
              'Only minimal guidance is provided for sampling approaches. Stratification of project area is implied, but no specific instructions are given. Sampling randomization is allowed, but not required. No specific guidance given about sampling density per stratum.',
          },
          model: {
            value: 'Flexible / Process-based',
            reference: 'VM0026, Section 8.2.8',
            comment:
              'Two quantification options are provided for the project scenario: sampling only, or modeling with sample-based calibration. The modeling approach must comply with the requirements for models as set out in the VCS rules. If a biogeochemical model is used, it needs to be appropriate for the region and its use should be documented in scientific journals, university theses, local research studies or work carried out by the project proponent). The example of the CENTURY model is provided.',
          },
          notes:
            'The baseline and project scenarios can be quantified using sampling only, or modeled with sample-based calibration. Model selection follows broader VCS guidelines. Direct measurements of SOC are required in the absence of peer-reviewed studies (eg, scientific journals, university theses, or work carried out by the project proponent) that demonstrate that the use of the selected model is valid for the project region. Sampling does not require randomization or provide guidance for stratification but there is guidance for selection of soil depth, which is set to be a minimum of 30 cm or as deep as the affected layers.',
          comments:
            'SOC crediting is not empirical and relies entirely on modeling. Direct sampling is required in one of the two SOC quantification approaches. The sampling depth of 30cm is insufficient to capture the full effect of project activities on SOC and sampling guidelines are notably flexible, allowing minimal sampling rigor. SOC crediting may rely entirely on modeling. There is insufficient guidance to ensure an appropriately rigorous modeling approach is applied.',
        },
      },
      safeguards: {
        score: 1,
        details: {
          landowner_protections: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          community_engagement: {
            value: 'No',
            reference: 'Not described',
            comment:
              'Community engagement reduces required contribution to buffer pool, but is not required. See AFOLU Non-Permanence Risk Tool v4.0, Table 7.',
          },
          data_privacy: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          notes:
            'Protocol includes a potential reduction in the contribution to the buffer pool if there is community engagement, but is not required. ',
          comments: 'No safeguards are provided or required.',
        },
      },
      rating: { score: 1 },
    },
    revisions: [{ date: '07-15-2021', note: 'First release.' }],
  },
  SOIL013: {
    id: 'SOIL013',
    name: 'BCarbon',
    entity: 'BCarbon',
    details: {
      protocol:
        'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time (6 June 2021)',
      links: [
        {
          name: 'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time (10 June 2021)',
          href: 'https://bcarbon.org/doc/bCarbon-soil-storage-standard.pdf',
        },
      ],
      parties: ['Baker Institute', 'Rice University'],
      status: 'Projects in development',
      projects:
        'The BCarbon protocol has been used by Grassroots Carbon (formerly Soil Value Exchange), whose early purchasers include [Shopify](https://www.shopify.com/about/environment/sustainability-fund/soil) and [Marathon Oil](https://www.marathonoil.com/stories/marathon-oils-pathway-to-achieve-emissions-reductions/).',
      notes:
        'Protocol credits increases in below-ground carbon achieved over time, including both soil organic carbon and root carbon. It was published in 2021. ',
      comments:
        'Protocol is self-contained and easy to interpret. This protocol does not track or prescribe the implementation of particular agricultural activities. As such, it may be better characterized as a system for measuring ongoing increases in soil carbon or root carbon, rather than crediting or inducing particular activities. We render 20 years of activity backdating to indicate that the protocol is agnostic to the timing of activity implementation. Grassroots Carbon (formerly Soil Value Exchange) uses the BCarbon protocol and has sold credits to [Shopify](https://www.shopify.com/about/environment/sustainability-fund/soil) and [Marathon Oil](https://www.marathonoil.com/stories/marathon-oils-pathway-to-achieve-emissions-reductions/).',
      timeline: {
        activity: [-20, 0],
        crediting: [0, 5],
        registration: [0],
        verification: [0, 5],
        permanence: [0, 15],
      },
    },
    metrics: {
      durability: {
        score: 2,
        details: {
          buffer_pool: {
            value: 'Required',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Credit Issuance Process Summary, Section 3.1.4',
            comment: '',
          },
          leakage_test: {
            value: 'Required',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Credit Issuance Process Summary, Section 3.1.4',
            comment: '',
          },
          uncertainty_deduction: {
            value: 'Required',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Credit Issuance Process Summary, Section 3.1.4',
            comment: '',
          },
          onsite_verification: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Credit Issuance Process Summary, Section E for general discussion of verification. ',
          },
          sampling_verification: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          crediting_period: {
            value: 5,
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Credit Issuance Process Summary, Section 7',
            comment: '',
          },
          permanence: {
            value: 15,
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Section 2.4',
            comment:
              'Protocol requires credited carbon to be preserved in the ground for a minimum period of 10 years following certification of credits. Projects must undergo accounting at least every 5 years to certify credits, but may do so with higher frequency. ',
          },
          notes:
            'Protocol defines a 10% buffer pool standard, but provides no details on how the buffer pool would be managed. There is an optional uncertainty deduction associated with Equation D.5. The verification process is not specified, though physical sampling and a site visit are implied.',
          comments:
            'Protocol does not include any discussion of verfication. However, the requried project documentation includes extensive requirements, including laboratory reports for soil sampling results, that should provide adequate information. It is unclear whether this extensive documentation would be made public in order to produce confidence and permit third-party analysis. As no third-party entities are named, it appears that bCarbon may play the role of the sample collector, verifier, and certifier of credits. ',
        },
      },
      practices: {
        value: { tillage: 1, cropping: 1, inputs: 1, grazing: 1, other: 1 },
        details: {
          included: {
            value: ['Grazing', 'Cropping', 'Inputs', 'Tillage', 'Other'],
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Section 2.3',
            comment: '',
          },
          geographies: {
            value: 'United States',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Executive Summary, Page 2',
            comment: '',
          },
          cobenefits: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          notes:
            'Methodology credits any project activity that results in increases to SOC or root carbon. ',
          comments: 'None',
        },
      },
      additionality: {
        score: 1,
        details: {
          financial: {
            value: 'None',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Approach to Additionality, Permanence, Inclusivity and Equity Section',
            comment:
              'All credits issued by BCarbon are for carbon added to the ground after the initial testing period. There is no formal additionality screening.',
          },
          performance: {
            value: 'None',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Approach to Additionality, Permanence, Inclusivity and Equity Section',
            comment:
              'All credits issued by BCarbon are for carbon added to the ground after the initial testing period. There is no formal additionality screening. ',
          },
          other: {
            value: 'None',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Approach to Additionality, Permanence, Inclusivity and Equity Section',
            comment:
              'All credits issued by BCarbon are for carbon added to the ground after the initial testing period. There is no formal additionality screening. ',
          },
          activity_backdating: {
            value: 'N/A',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Section 5.8',
            comment:
              'No constraints on when an activity could start to be eligible for crediting. The project proponent must certify in writing that appropriate land management practices remain in effect to sustain below-ground carbon stocks that meet or exceed baseline measurements, regardless of when those practices began.',
          },
          crediting_backdating: {
            value: 0,
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Section 4 ',
            comment: 'No credit issued for accrual occurring before testing.',
          },
          notes: 'Protocol does not include any additionality screens. ',
          comments:
            'Protocol may be better characterized as a system for measuring ongoing increases in soil carbon or root carbon, rather than crediting or inducing additional activity. ',
        },
      },
      rigor: {
        score: 3,
        details: {
          ghgs: {
            value: ['None'],
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Section 2.2 and B.2',
            comment:
              'This protocol provides the option to quantify and credit root carbon, the root fraction of the soil sample that is captured on a 2 mm sieve but passes through a 20 mm sieve. Soil inorganic carbon is not included or credited.',
          },
          bulk_density: {
            value: 'Measured',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Section B.3.3',
            comment: '',
          },
          depth: {
            value: 'Variable',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Step 1 and Section B.3.2',
            comment:
              'No specific depth required. Projects specify a depth interval based on site-specific information, and must use the same interval at the beginning and end of sampling.',
          },
          equivalent_soil_mass: {
            value: 'Required',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Section B.4.2',
            comment: '',
          },
          uncertainty: {
            value: 'Required',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Section D',
            comment: '',
          },
          baseline_type: {
            value: 'Fixed',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Section 3 (Steps 2 and 5)',
            comment: '',
          },
          baseline_scenario: {
            value: 'Sampling required / No modeling',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Section 3 (Steps 2 and 5)',
            comment: '',
          },
          project_scenario: {
            value: 'Sampling required / Modeling allowed',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Section 3',
            comment:
              'Sampling SOC is required at the beginning and every 5 years. Interim credits can be issued by modeling, empirical relationships that rely on performance indicators, or other scientifically defensible approaches, subject to being trued-up with direct sampling.',
          },
          empirical_crediting: {
            value: 'Yes',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Section 3 (Steps 4 and 5)',
            comment:
              'SOC crediting can be based solely on direct SOC measurements; interim crediting can be based on modeling, but trued-up with direct sampling.',
          },
          sampling_approach: {
            value: 3,
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Sections A.2, B.3, and B.4',
            comment:
              'The sites are stratified and sampling is random within strata. Pre-sampling is required to describe within-site variation and determine sampling density per stratum. ',
          },
          model: {
            value: 'Flexible / Hybrid',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Sections C.2.2 and C.3.3',
            comment: '',
          },
          notes:
            'The protocol is based on empirical sampling at the beginning of the crediting period and at least every 5 years thereafter. The protocol also includes the option to quantify and receive credit for root carbon. Projects can choose to claim interim credits based on modeling or solely on sampling results every 5 years. When modeling SOC in the interim is used, the protocol includes a provision to true-up credits based on empirical measurements every 5 years. ',
          comments:
            'SOC crediting is empirical and relies on rigorous direct sampling. Alternative sampling methods can be approved on a case-by-case basis. There is guidance to ensure an appropriately rigorous modeling approach is applied and modeling is used for interim crediting, but no details are provided on how over-crediting situations would be addressed. There is no accounting for project emissions, only for SOC and root carbon. As a result, there is no monitoring or accounting for other emissions. ',
        },
      },
      safeguards: {
        score: 1,
        details: {
          landowner_protections: {
            value: 'No',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Credit Issuance Process Summary, Approach to Additionality, Permanence, Inclusivity and Equity',
            comment: '',
          },
          community_engagement: {
            value: 'No',
            reference:
              'Protocol for Measurement, Monitoring, And Quantification of The Accrual of Below-Ground Carbon Over Time, Credit Issuance Process Summary, Approach to Additionality, Permanence, Inclusivity and Equity',
            comment: '',
          },
          data_privacy: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          notes: 'Protocol does not address any safeguards. ',
          comments:
            'Protocol describes a forthcoming "Diversity, Equity, Inclusion, and Accessibility" strategy as under development. However, there are no current provisions in place.',
        },
      },
      rating: { score: 3 },
    },
    revisions: [{ date: '07-15-2021', note: 'First release.' }],
  },
  SOIL014: {
    id: 'SOIL014',
    name: 'FAO',
    entity: 'FAO',
    details: {
      protocol: 'GSOC MRV Protocol',
      links: [
        {
          name: 'GSOC MRV Protocol',
          href: 'http://www.fao.org/3/cb0509en/cb0509en.pdf',
        },
      ],
      parties: ['FAO'],
      status: 'No projects yet',
      projects: 'N/A',
      notes:
        'Protocol primarily provides methods for quantification of soil carbon sequestration. It was published in 2020. ',
      comments:
        'Protocol provides a standardized tool to support SDG 15.3.1., as well as any project related to SOC sequestration and the newly launched FAO RECSOIL initiative. While publicly available,  this protocol does not appear to have been incorporated into a credit issuing program. Thus, metrics associated with credit issuance are based on protocol recommendations or appear as N/A. Note that the timeline above does not include an "activity" bar. This protocol does not speak to limits on activity backdating, and since it isn\'t currently part of a full crediting system, we choose not to render an assumption about this eligibility criteria. ',
      timeline: {
        activity: [0, 0],
        crediting: [0, 8],
        registration: [0],
        verification: [0, 2, 4, 6, 8],
        permanence: [0, 8],
      },
    },
    metrics: {
      durability: {
        score: 1,
        details: {
          buffer_pool: {
            value: 'Required',
            reference: 'GSOC MRV Protocol, Section 4.5',
            comment:
              'Protocol requires 5% risk of reversal discount to be applied to all sequestration/removal projects. Protocol is not currently associated with a crediting system, and no formal buffer pool is associated with this protocol. ',
          },
          leakage_test: {
            value: 'Required',
            reference: 'GSOC MRV Protocol, Section 4.5',
            comment:
              'Protocol requires 5% risk of reversal discount to be applied to all sequestration/removal projects. Protocol is not currently associated with a crediting system, and no formal buffer pool is associated with this protocol. ',
          },
          uncertainty_deduction: {
            value: 'Required',
            reference: 'GSOC MRV Protocol, Section 4.5',
            comment:
              'Protocol requires 5% risk of reversal discount to be applied to all sequestration/removal projects. Protocol is not currently associated with a crediting system, and no formal buffer pool is associated with this protocol. ',
          },
          onsite_verification: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See GSOC MRV Protocol, Section 9 for a general discussion of monitoring and verification. The protocol contemplates third-party verification by parties acceptable to FAO, based on a set of documentation requirements. There is no discussion of site visits or sampling verification. ',
          },
          sampling_verification: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See GSOC MRV Protocol, Section 9 for a general discussion of monitoring and verification. The protocol contemplates third-party verification by parties acceptable to FAO, based on a set of documentation requirements. There is no discussion of site visits or sampling verification. ',
          },
          crediting_period: {
            value: 8,
            reference: 'GSOC MRV Protocol, Section 5.3',
            comment:
              'This protocol is not associated with a crediting scheme, and therefore there no formal crediting period is defined. However, protocol does require that the total duration of the project is at least eight consecutive years to collect enough data to demonstrate soil carbon sequestration compared to a baseline scenario and baseline period. We report this as a lower bound for a crediting scheme using this protocol. ',
          },
          permanence: {
            value: 8,
            reference: 'Not described',
            comment:
              'See GSOC MRV Protocol, Section 4.5 for a general discussion of permanence. This protocol is not associated with a crediting scheme, and therefore no formal crediting period or permanence periods are defined. However, protocol does require that the total duration of the project is at least 8 consecutive years to collect enough data to demonstrate soil carbon sequestration compared to a baseline scenario and baseline period. We report this as a lower permanence bound for a crediting scheme using this protocol. Despite the protocol defining the "permanence" concept as the "period of time in which a specific carbon pool is stored," no time dimension is given to the expectation or requirements beyond the 8-year project crediting period necessary to provide sufficient certainty in SOC calculations. ',
          },
          notes:
            'Technically there is no buffer pool, but all projects must take a 5% deduction to account for permanence risks so we record the protocol as having a buffer pool-like feature. No permanence horizon is defined. There is no leakage test. The protocol states that it is expected a minumum of 8 years is needed to demonstrate soil carbon sequestation relative to the baseline scenario. Monitoring and general documentation requirements for verification are provided, but do not indicate any reuqirement for site visits or independent sampling from third-party verifiers. ',
          comments:
            'In essence, the protocol addresses permanence risks by applying a 5% discount to the nominal number of credits calculated. No permanence horizon is defined and there are not sufficient details to understand what verification processes would be required beyond the nature of documents and reports that are to be verified. ',
        },
      },
      practices: {
        value: { tillage: 1, cropping: 1, inputs: 1, grazing: 1, other: 1 },
        details: {
          included: {
            value: ['Grazing', 'Cropping', 'Inputs', 'Tillage', 'Other'],
            reference: 'GSOC MRV Protocol, Section 4.3',
            comment: '',
          },
          geographies: {
            value: 'Global',
            reference: 'Implied',
            comment:
              'GSOC MRV Protocol, Section 4.2 for general discussion of eligible lands. No specific geographic limitations provided.',
          },
          cobenefits: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          notes:
            'Methodology can be applied in any agricultural system, including annual and perennial crops, paddy rice, grazing lands with livestock, shrublands, silvopasture and agroforestry.',
          comments:
            'Methodology is purposefully broad, and is not associated with a crediting system. ',
        },
      },
      additionality: {
        score: 1,
        details: {
          financial: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See GSOC MRV Protocol, Section 7 for a general discussion of additionality. ',
          },
          performance: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See GSOC MRV Protocol, Section 7 for a general discussion of additionality. ',
          },
          other: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See GSOC MRV Protocol, Section 7 for a general discussion of additionality. ',
          },
          activity_backdating: {
            value: 'N/A',
            reference: 'Not described',
            comment: '',
          },
          crediting_backdating: {
            value: 'N/A',
            reference: 'Not described',
            comment: '',
          },
          notes: 'There is no additionality test used in the protocol. ',
          comments:
            "The protocol references the concept of additionality but doesn't include a test or any other mechanism to address the issue. ",
        },
      },
      rigor: {
        score: 3,
        details: {
          ghgs: {
            value: ['CO\u2082', 'CH\u2084', 'N\u2082O'],
            reference: 'GSOC MRV Protocol, Section 7.2',
            comment: '',
          },
          bulk_density: {
            value: 'Measured',
            reference: 'GSOC MRV Protocol, Sections 8.1 and A3.6',
            comment:
              'Bulk density is quantified using direct measurement methods, specifically the undisturbed (intact) core method and the excavation method',
          },
          depth: {
            value: '30 cm',
            reference: 'GSOC MRV Protocol, Section A3.4',
            comment:
              'Sampling down to 30cm is required, but sampling down to 1m is recommended, distinguishing between soil layers.',
          },
          equivalent_soil_mass: {
            value: 'Required ',
            reference: 'GSOC MRV Protocol, Section A4.2',
            comment: '',
          },
          uncertainty: {
            value: 'None',
            reference: 'GSOC MRV Protocol, Annex 3, Section A3.1.1',
            comment:
              'There is no explicit guidance on how to estimate uncertainty in SOC stock changes, although optional guidance is provided on how to select an appropriate number of sample sites based on uncertainty analysis and basic statistics. ',
          },
          baseline_type: {
            value: 'Dynamic',
            reference:
              'GSOC MRV Protocol, Sections 7.1, 8.2, 8.3 (Table 1), and A1.3',
            comment:
              'Baseline SOC is modeled for a 20-year period, using historic and projected activity data ',
          },
          baseline_scenario: {
            value: 'Sampling required / Modeling required',
            reference: 'GSOC MRV Protocol, Sections 8.1, 8.2 and A1.3',
            comment:
              'Baseline scenario requires soil sampling and periodic modeling updates. ',
          },
          project_scenario: {
            value: 'Sampling required / Modeling required',
            reference: 'GSOC MRV Protocol, Sections 8.1 and 8.2',
            comment: '',
          },
          empirical_crediting: {
            value: 'Yes',
            reference: 'GSOC MRV Protocol, Sections 8.1 and 8.2',
            comment:
              'This protocol is not associated with a crediting system. Given the extensive sampling required under the monitoring approach (see GSOC MRV Protocol, Section 8), anyone employing the FAO protocol methods to issue credits would issue those credits on the basis of empirical measurements. ',
          },
          sampling_approach: {
            value: 3,
            reference: 'GSOC MRV Protocol, Annex 3, Section 3.1.1',
            comment:
              'Pre-sampling is required to describe the within-site variation and determine sampling density per stratum to ensure low across-sample variation. The pre-sampling is used to guide estimation of the number of samples needed to determine SOC stock change with an acceptable level of uncertainty and to detect an expected difference between two successive sampling rounds. It is also recommended that samples be collected from a minimum of 5 composites of 5-15 soil cores to form a composite sample, and a minimum of 3 strata within each site. ',
          },
          model: {
            value: 'Flexible / Undefined',
            reference: 'GSOC MRV Protocol, Sections 7.1 and 8.2',
            comment:
              'Evidence from scientific journals, university theses, local research studies or work carried out by the project proponent to demonstrate that the SOC model is appropriate for the agroecological zone where the project is located.',
          },
          notes:
            'The baseline scenario requires both sampling and modeling of SOC. It is defined by the practices that were in place during the five-year period prior to an intervention, using historical and projected future activity data as inputs for modeling work. The baseline scenario is re-modelled using local activity data every two years. The project scenario requires both sampling and modeling. The modeling approach is flexible but requires evidence from scientific journals, university theses, local research studies, or work carried out by the project proponent to demonstrate that the model is appropriate for the agroecological zone where the project is located.',
          comments:
            'SOC crediting would be empirical if used in a crediting framework. Direct sampling is required to quantify SOC in the project scenario, but there is some ambiguity because the details are described as a monitoring system and not a carbon crediting program. The sampling approach is rigorous but the requirement is limited to the top 30cm, and therefore is insufficient to capture the full effect of project activities on SOC. There is general guidance to ensure an appropriately rigorous modeling approach is applied, but no uncertainty analysis or guidance for SOC estimates.',
        },
      },
      safeguards: {
        score: 1,
        details: {
          landowner_protections: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          community_engagement: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          data_privacy: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          notes: 'Protocol does not address any safeguards. ',
          comments: 'No safeguards are provided or required.',
        },
      },
      rating: { score: 2 },
    },
    revisions: [
      { date: '07-15-2021', note: 'First release.' },
      { date: '08-04-2021', note: 'Fixed typo.' },
      {
        date: '02-22-2022',
        note: 'Fixed typo (GSOL --> GSOC in protocol name).',
      },
    ],
  },
  SOIL015: {
    id: 'SOIL015',
    name: 'Australia Measurement',
    entity: 'CER',
    details: {
      protocol:
        'Measurement of Soil Carbon Sequestration in Agricultural Systems',
      links: [
        {
          name: 'F2018L00089: Carbon Credits Measurement of Soil Carbon Sequestration in Agricultural Systems) Methodology Determination 2018',
          href: 'https://www.legislation.gov.au/Details/F2018L00089',
        },
        {
          name: 'C2020C00281: Carbon Credits (Carbon Farming Initiative) Act of 2011',
          href: 'https://www.legislation.gov.au/Details/C2020C00281',
        },
        {
          name: 'F2021C00686: Carbon Credits (Carbon Farming Initiative) Rule 2015',
          href: 'https://www.legislation.gov.au/Details/F2021C00686',
        },
        {
          name: 'Supplement to the Carbon Credits (Carbon Farming Initiative\u2014Measurement of Soil Carbon Sequestration in Agricultural Systems) Methodology Determination 2018, v1.2',
          href: 'https://www.industry.gov.au/sites/default/files/2020-07/supplement-soil-carbon-agricultural-systems.pdf',
        },
        {
          name: 'C2019C00253: Clean Energy Regulator Act 2011',
          href: 'https://www.legislation.gov.au/Details/C2019C00253',
        },
        {
          name: 'F2017C00509: National Greenhouse and Energy Reporting (Audit) Determination 2009',
          href: 'https://www.legislation.gov.au/Details/F2017C00509',
        },
        {
          name: 'Simple Methodology Guide (2020)',
          href: 'http://www.cleanenergyregulator.gov.au/DocumentAssets/Documents/Understanding%20your%20soil%20carbon%20-%20Simple%20method%20guide.pdf',
        },
      ],
      parties: ['CER'],
      status: 'Projects in development',
      projects:
        "See CER's [Emission Reduction Fund Project Register](http://www.cleanenergyregulator.gov.au/ERF/project-and-contracts-registers/project-register).  ",
      notes:
        'Protocol credits increases to soil carbon from a broad variety of agricultural activities using empirical soil sampling. It was published in 2018. ',
      comments:
        "Protocol is developed by the Australian Clean Energy Regulator (CER). As of October 2021, there are about 150 projects using this protocol as registered on CER's [Emission Reduction Fund Project Register](http://www.cleanenergyregulator.gov.au/ERF/project-and-contracts-registers/project-register).",
      timeline: {
        activity: [0, 5],
        crediting: [0, 25],
        registration: [0],
        verification: [0, 5, 10, 15, 20, 25],
        permanence: [0, 25],
      },
    },
    metrics: {
      durability: {
        score: 2,
        details: {
          buffer_pool: {
            value: 'Required',
            reference: 'C2020C00281, Section 16(2)',
            comment:
              'Protocol requires a 5% risk of reversal discount to be applied. Projects may choose between a 25 year and 100 year permanence period obligation. If a 25 year permanence period is chosen, a 20% discount is applied in crediting net abatement. ',
          },
          leakage_test: {
            value: 'Required',
            reference: 'C2020C00281, Section 16(2)',
            comment:
              'Protocol requires a 5% risk of reversal discount to be applied. Projects may choose between a 25 year and 100 year permanence period obligation. If a 25 year permanence period is chosen, a 20% discount is applied in crediting net abatement. ',
          },
          uncertainty_deduction: {
            value: 'Required',
            reference: 'C2020C00281, Section 16(2)',
            comment:
              'Protocol requires a 5% risk of reversal discount to be applied. Projects may choose between a 25 year and 100 year permanence period obligation. If a 25 year permanence period is chosen, a 20% discount is applied in crediting net abatement. ',
          },
          onsite_verification: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See C2020C00281 (Sections 13 and 76), F2021C00686 (Part 6, Division 3), and F2017C00509 (Section 3.14(1)) for a general discussion of the audit process. Auditors may but are not required to gather evidence onsite. See this [CER site](http://www.cleanenergyregulator.gov.au/Infohub/Audits/Pages/Forms%20and%20resources/Audit%20determination%20handbook/Audit-requirements-for-programmes-administered-by-the-Clean-Energy-Regulator.aspx#143-Emissions-Reduction-Fund-audits) for a summary description of audit requirements. \n\n[TK: I\'m confused about the relationship between "monitoring powers" / inspections \u2013 see the Act Part 18 \u2013 and auditing requirements. I believe the inspections and audits are separate types of engagements, but I am not clear what exactly would trigger an inspection.]',
          },
          sampling_verification: {
            value: 'None',
            reference: 'Not described ',
            comment:
              'See C2020C00281 (Sections 13 and 76), F2021C00686 (Part 6, Division 3), and F2017C00509 (Section 3.14(1)) for a general discussion of the audit process. Auditors may, but are not required, to gather evidence onsite. See this [CER site](http://www.cleanenergyregulator.gov.au/Infohub/Audits/Pages/Forms%20and%20resources/Audit%20determination%20handbook/Audit-requirements-for-programmes-administered-by-the-Clean-Energy-Regulator.aspx#143-Emissions-Reduction-Fund-audits) for a summary description of audit requirements. \n',
          },
          crediting_period: {
            value: 25,
            reference: 'C2020C00281, Part 5',
            comment: 'No crediting period renewals are permitted. ',
          },
          permanence: {
            value: 25,
            reference: 'C2020C00281, Section 27(3)(e-f)',
            comment:
              'Projects may choose between a 25 year and 100 year permanence period obligation. If a 25 year permanence period is chosen, a 20% discount is applied in crediting net abatement. See C2020C00281, Section 16(2).',
          },
          notes:
            'All projects must take a 5% deduction to account for permanence risks. Projects may elect between a 25-year and 100-year permanence obligation. For projects with a 25-year permanence obligation, a 20% crediting discount is applied. An uncertainty deduction is applied based on the variance of collected soil samples. An additional temporary discount (50%) is applied for projects who are seeking credit after completing a single round of sampling after the baseline sampling. This discounted carbon is earned back as project continues to record soil carbon above the baseline measurements.',
          comments:
            'Technically there is no buffer pool. Since there is a mandatory risk of reversal deduction, we record the protocol as having a buffer pool-like feature. The protocol addresses durability risks not via a buffer pool with a dynamic management regime, but by explicit discounting of credit issuance. Per the [Carbon Farming Initiative Act](https://www.legislation.gov.au/Details/C2020C00281) (2011) (see Sections 90-91 and Section 97), if there is a reversal, the regulator has the ability to obligate the landowner to manage such that the soil carbon stock returns to previously reported values. Alternatively, a project may make good on a reversal by relinquishing an equivalent number of ACCU credits.',
        },
      },
      practices: {
        value: { tillage: 1, cropping: 0, inputs: 1, grazing: 1, other: 1 },
        details: {
          included: {
            value: ['Tillage', 'Inputs', 'Grazing', 'Other'],
            reference: 'F2018L00089, Section 7(2)(a)',
            comment: '',
          },
          geographies: {
            value: 'Australia ',
            reference: 'F2018L00089, Section 7(1)(c)',
            comment: '',
          },
          cobenefits: {
            value: 'None ',
            reference: 'Not described',
            comment: '',
          },
          notes:
            'Methodology can be applied in any Australian agricultural system where at least one new eligible practice has been implemented. ',
          comments:
            'Projects may also be eligible for crediting under this protocol if the project area was previously determined eligible under the [Sequestering Carbon in Soils in Grazing Systems Methodology](https://www.legislation.gov.au/Details/F2018C00120). The Grazing Systems Methodology was [revoked in 2018](https://www.legislation.gov.au/Details/F2018L01113), and no new projects may be developed under it. ',
        },
      },
      additionality: {
        score: 2,
        details: {
          financial: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See F2018L00089, Section 21 and C2020C00281, Section 27(4A) for a general discussion of additionality.',
          },
          performance: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See F2018L00089, Section 21 and C2020C00281, Section 27(4A) for a general discussion of additionality.',
          },
          other: {
            value: 'Required ',
            reference: 'F2018L00089, Section 21; C2020C00281, Section 27(4A)',
            comment:
              'Protocol requires projects to comply with the Carbon Credit Act\'s "newness requirement," i.e. that a project has not begun to be implemented at the point of registration. The protocol makes an exception for the preparation of a management strategy before a new management activity actually starts. ',
          },
          activity_backdating: {
            value: 0,
            reference: 'F2018L00089, Section 10',
            comment: '',
          },
          crediting_backdating: {
            value: 0,
            reference: 'F2018L00089, Schedule 1 and Section 16(1)(b)',
            comment:
              'Crediting is based on a comparison of soil measurments at two points of time. The baseline measurment may only be performed after project registration. ',
          },
          notes:
            'To screen for additionality, protocol relies on the requirement that a project has not begun to be implemented at the point of registration. This newness screen includes a consideration of previous financial or investment decisions that indicate pre-existing comitments to pursue a management practice, but we do not classify this as a financial additionality test as there is no required demonstration of the role of carbon finance in enabling a new management practice. ',
          comments:
            "To be eligible, project must adopt a management activity that is new or materially different than what has been practiced over the previous 10 years. The activity must be implemented after the project is declared eligible to generate offsets and maintained until the end of the project's permanence period. While protocol requires and tracks the implementation of a new management practice, protocol may credit changes to soil carbon resulting from a broader suite of ongoing practices. The newness requirement may not screen out practices that would have been implemented in the absence of carbon finance. ",
        },
      },
      rigor: {
        score: 3,
        details: {
          ghgs: {
            value: ['CO\u2082', 'CH\u2084', 'N\u2082O'],
            reference: 'F2018L00089, Section 23',
            comment: '',
          },
          bulk_density: {
            value: 'Measured ',
            reference:
              'F2018L00089, Schedule 1, Section 5; Supplement, Section D.4',
            comment: '',
          },
          depth: {
            value: '30 cm',
            reference: 'F2018L00089, Section 19(a); Supplement, Section C.2',
            comment:
              'If soil profile is altered (e.g. tilling), sampling depth must be at least 10cm below the depth of the alteration. ',
          },
          equivalent_soil_mass: {
            value: 'Required',
            reference: 'F2018L00089, Schedule 1, Sections 5 and 6',
            comment: '',
          },
          uncertainty: {
            value: 'Required',
            reference: 'F2018L00089, Schedule 1, Division 3',
            comment: '',
          },
          baseline_type: {
            value: 'Fixed',
            reference: 'F2018L00089, Schedule 1',
            comment:
              'Changes to SOC are calculated by comparing measurement from additional sampling rounds to a fixed baseline determined in the baseline sampling round. ',
          },
          baseline_scenario: {
            value: 'Sampling required',
            reference: 'F2018L00089, Section 16(1)(b)',
            comment: '',
          },
          project_scenario: {
            value: 'Sampling required',
            reference: 'F2018L00089, Section 16(1)(c) and Schedule 1',
            comment: '',
          },
          empirical_crediting: {
            value: 'Yes',
            reference: 'F2018L00089, Sections 24-26 and Schedule 1',
            comment: '',
          },
          sampling_approach: {
            value: 3,
            reference: 'F2018L00089, Sections 18 and 19; Supplement, Parts A-D',
            comment:
              'Stratification and sample randomization are required. Random sampling locations must be reported for sampling is performed, and there is a clear process for communicating if those locations must be modified because of a legitimate obstacle. Protocol outlines clear reporting expections around sampling methodology.',
          },
          model: { value: 'N/A', reference: 'Not described', comment: '' },
          notes:
            'The protocol is based on empirical sampling at the beginning of the project and at least every 5 years thereafter. Soil sampling requirements are detailed and rigorous.',
          comments:
            'SOC crediting is empirical and relies on rigorous direct sampling with stratification and randomized sampling. Eligibility rules specifically protect against the application of ineligible or untracked organic matter. ',
        },
      },
      safeguards: {
        score: 3,
        details: {
          landowner_protections: {
            value: 'Yes',
            reference: 'C2020C00281, Section 28A; Simplified Method Guide, p.6',
            comment:
              'Projects are required to seek formal consent from all stakeholders who hold an interest in the land.',
          },
          community_engagement: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          data_privacy: {
            value: 'Yes',
            reference: 'C2019C00253, Part 3',
            comment:
              "The Clean Energy Regulator is bound by the provisions of the Clean Energy Regulator Act (2011), the Privacy Act, the NGER Act, and otherwise applicable law regarding the disclosure of personal information collected from project participants. See CER's [Disclaimer, disclosure and privacy](http://www.cleanenergyregulator.gov.au/NGER/About-the-National-Greenhouse-and-Energy-Reporting-scheme/Disclaimer-disclosure-and-privacy) page for additional details. The Clean Energy Regulator Act (2011) provides exemptions for disclosures of protected information related to climate policy (Section 44) and specifically for the development of carbon credit methodologies (Section 47(1)(a)).",
          },
          notes:
            'Protocol requires formal consent to the offset project from all stakeholders who hold an interest in the land. The Clean Energy Regulator is subject to clear legislative guidance about the disclosure and privacy of project participant information. ',
          comments:
            'Under the [Carbon Farming Initiative Act](https://www.legislation.gov.au/Details/C2020C00281) (Sections 44 and 47), the regulator may disclose or use protected information related to offset projects for the purposes of climate change law or for the development of new methodologies. ',
        },
      },
      rating: { score: 4 },
    },
    revisions: [
      {
        date: '10-13-2021',
        note: 'This protocol was added to our analysis after we recieved feedback from various stakeholders that including compliance protocols in the review would be helpful. See [our blog post](http://carbonplan.org/blog/soil-protocols-added) for more detail.',
      },
    ],
  },
  SOIL016: {
    id: 'SOIL016',
    name: 'Australia Estimation',
    entity: 'CER',
    details: {
      protocol:
        'Estimating Sequestration of Carbon in Soil Using Default Values',
      links: [
        {
          name: 'F2018C00126: Carbon Credits (Carbon Farming Initiative\u2014Estimating Sequestration of Carbon in Soil Using Default Values) Methodology Determination 2015',
          href: 'https://www.legislation.gov.au/Details/F2018C00126',
        },
        {
          name: 'C2020C00281: Carbon Credits (Carbon Farming Initiative) Act of 2011',
          href: 'https://www.legislation.gov.au/Details/C2020C00281',
        },
        {
          name: 'F2021C00686: Carbon Credits (Carbon Farming Initiative) Rule 2015',
          href: 'https://www.legislation.gov.au/Details/F2021C00686',
        },
        {
          name: 'C2019C00253: Clean Energy Regulator Act 2011',
          href: 'https://www.legislation.gov.au/Details/C2019C00253',
        },
        {
          name: 'F2017C00509: National Greenhouse and Energy Reporting (Audit) Determination 2009',
          href: 'https://www.legislation.gov.au/Details/F2017C00509',
        },
        {
          name: 'A Guide to the Estimating Sequestration of Carbon in Soil Using Default Values Method',
          href: 'http://www.cleanenergyregulator.gov.au/DocumentAssets/Documents/A%20guide%20to%20the%20estimating%20sequestration%20of%20carbon%20in%20soil%20using%20default%20values%20method.pdf',
        },
        {
          name: 'Sequestration Value Maps',
          href: 'https://www.industry.gov.au/regulations-and-standards/methods-for-the-emissions-reduction-fund/estimating-sequestration-of-carbon-in-soil-using-default-values-method',
        },
        {
          name: 'FullCAM',
          href: 'http://www.fullcam.com/FullCAMServer2020/Help/114_RothC.htm',
        },
      ],
      parties: ['CER'],
      status: 'No projects yet',
      projects: 'N/A',
      notes:
        'Protocol credits increases to soil carbon from a broad variety of agricultural activities as estimated by default factors. It was published in 2015. ',
      comments:
        "Protocol is developed by the Australian Clean Energy Regulator (CER). As of October 2021, no projects using this protocol are listed on CER's [Emission Reduction Fund Project Register](http://www.cleanenergyregulator.gov.au/ERF/project-and-contracts-registers/project-register).",
      timeline: {
        activity: [0, 5],
        crediting: [0, 25],
        registration: [0],
        verification: [0, 8, 16],
        permanence: [0, 25],
      },
    },
    metrics: {
      durability: {
        score: 2,
        details: {
          buffer_pool: {
            value: 'Required',
            reference: 'C2020C00281, Section 16(2)',
            comment:
              'Protocol requires a 5% risk of reversal discount to be applied. Projects may choose between a 25 year and 100 year permanence period obligation. If a 25 year permanence period is chosen, a 20% discount is applied in crediting net abatement. ',
          },
          leakage_test: {
            value: 'Required',
            reference: 'C2020C00281, Section 16(2)',
            comment:
              'Protocol requires a 5% risk of reversal discount to be applied. Projects may choose between a 25 year and 100 year permanence period obligation. If a 25 year permanence period is chosen, a 20% discount is applied in crediting net abatement. ',
          },
          uncertainty_deduction: {
            value: 'Required',
            reference: 'C2020C00281, Section 16(2)',
            comment:
              'Protocol requires a 5% risk of reversal discount to be applied. Projects may choose between a 25 year and 100 year permanence period obligation. If a 25 year permanence period is chosen, a 20% discount is applied in crediting net abatement. ',
          },
          onsite_verification: {
            value: 'None',
            reference: 'N/A',
            comment:
              'See C2020C00281 (Sections 13 and 76), F2018C00126 (Part 6, Division 3), and F2017C00509 (Section 3.14(1)) for a general discussion of the audit process. Auditors may, but are not required, to gather evidence onsite. See this [CER site](http://www.cleanenergyregulator.gov.au/Infohub/Audits/Pages/Forms%20and%20resources/Audit%20determination%20handbook/Audit-requirements-for-programmes-administered-by-the-Clean-Energy-Regulator.aspx#143-Emissions-Reduction-Fund-audits) for a summary description of audit requirements. ',
          },
          sampling_verification: {
            value: 'None',
            reference: 'N/A',
            comment:
              'See C2020C00281 (Sections 13 and 76), F2018C00126 (Part 6, Division 3), and F2017C00509 (Section 3.14(1)) for a general discussion of the audit process. Auditors may, but are not required, to gather evidence onsite. See this [CER site](http://www.cleanenergyregulator.gov.au/Infohub/Audits/Pages/Forms%20and%20resources/Audit%20determination%20handbook/Audit-requirements-for-programmes-administered-by-the-Clean-Energy-Regulator.aspx#143-Emissions-Reduction-Fund-audits) for a summary description of audit requirements. ',
          },
          crediting_period: {
            value: 25,
            reference: 'C2020C00281, Part 5',
            comment: 'No crediting period renewals are permitted. ',
          },
          permanence: {
            value: 25,
            reference: 'C2020C00281, Section 27(3)(e-f)',
            comment:
              'Projects may choose between a 25 year and 100 year permanence period obligation. If a 25 year permanence period is chosen, a 20% discount is applied in crediting net abatement. ',
          },
          notes:
            'All projects must take a 5% deduction to account for permanence risks. Projects may elect between a 25-year and 100-year permanence obligation. For projects with a 25-year permanence obligation, a 20% crediting discount is applied. ',
          comments:
            'Technically there is no buffer pool. Since there is a mandatory risk of reversal deduction, we record the protocol as having a buffer pool-like feature. The protocol addresses durability risks not via a buffer pool with a dynamic management regime, but by explicit discounting of credit issuance. Per the [Carbon Farming Initiative Act](https://www.legislation.gov.au/Details/C2020C00281) (2011) (see Sections 90-91 and Section 97), if there is a reversal, the regulator has the ability to obligate the landowner to manage such that the soil carbon stock returns to previously reported values. Alternatively, a project may make good on a reversal by relinquishing an equivalent number of ACCU credits. However, because this protocol does not involve any soil sampling, there is no obvious mechanism by which to observe a reversal that would require these protections.',
        },
      },
      practices: {
        value: { tillage: 0, cropping: 0, inputs: 1, grazing: 0, other: 1 },
        details: {
          included: {
            value: ['Inputs', 'Grazing', 'Other'],
            reference: 'F2018C00126, Section 9',
            comment: '',
          },
          geographies: {
            value: 'Australia',
            reference: 'F2018C00126, Section 11; FullCAM',
            comment:
              "The project must be carried out on land for which FullCAM data exists. FullCAM is the Full Carbon Accounting Model used to model forest and soil carbon stocks in Australia's National Greenhouse Gas Inventory. Its soil component uses the well-known RothC model. ",
          },
          cobenefits: {
            value: 'None ',
            reference: 'Not described',
            comment: '',
          },
          notes:
            'Projects must pursue one of three activity options: sustainable intensification, stubble retention, or conversion to pasture. "Sustainable intensification" requires undertaking two of the following management activities: nutrient managment, soil acidity management, new irrigation or pasture renovation. If more than two activities are carried out, only two will be credited. ',
          comments: 'None',
        },
      },
      additionality: {
        score: 1,
        details: {
          financial: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See F2018C00126, Section 44 and C2020C00281, Section 27(4A) for a general discussion of additionality.',
          },
          performance: {
            value: 'None',
            reference: 'Not described',
            comment:
              'See F2018C00126, Section 44 and C2020C00281, Section 27(4A) for a general discussion of additionality.',
          },
          other: {
            value: 'Required',
            reference: 'F2018C00126, Section 44; C2020C00281, Section 27(4A)',
            comment:
              'Protocol requires projects to comply with the Carbon Credit Act\'s "newness requirement," i.e. that a project has not begun to be implemented at the point of registration. The protocol makes an exception for the preparation of management strategies before a new management activity actually starts. ',
          },
          activity_backdating: {
            value: 0,
            reference: 'F2018C00126, Section 44; C2020C00281, Section 27(4A)',
            comment: '',
          },
          crediting_backdating: {
            value: 0,
            reference: 'F2018C00126, Section 49',
            comment:
              'Crediting is based on multiplying the duration of the project, starting at project registration, by a default rate of carbon sequestration. ',
          },
          notes:
            'To screen for additionality, protocol relies on the requirement that a project has not begun to be implemented at the point of registration. This newness screen includes a consideration of previous financial or investment decisions that indicate pre-existing comitments to pursue a management practice, but we do not classify this as a financial additionality test as there is no required demonstration of the role of carbon finance in enabling a new management practice. ',
          comments:
            'While the protocol requires and tracks the implementation of a new management practice, the newness requirement may not screen out practices that would have been implemented in the absence of carbon finance. Because this protocol uses default parameters to calculate carbon savings, which provides a strong incentive to developers to preferentially select profitable locations for development, it may be particularly vulnerable to adverse selection outcomes. ',
        },
      },
      rigor: {
        score: 1,
        details: {
          ghgs: {
            value: ['CO\u2082', 'CH\u2084', 'N\u2082O'],
            reference: 'F2018C00126, Section 46',
            comment: '',
          },
          bulk_density: {
            value: 'Estimated',
            reference: 'Inferred',
            comment:
              'Quantification relies the FullCAM model. FullCAM in turn relies on the RothC model, which calculates SOC stocks taking into account bulk density. Since no sampling is required by this protocol, we infer bulk density is estimated.',
          },
          depth: {
            value: 'Unspecified',
            reference: 'FullCAM',
            comment:
              'FullCAM relies on the RothC model to estimate soil carbon changes.',
          },
          equivalent_soil_mass: {
            value: 'Unspecified',
            reference: 'Not described',
            comment:
              'FullCAM relies on the RothC model to estimate soil carbon changes. Because there is no sampling in this protocol, equivalent soil mass corrections are unlikely to be relevant. ',
          },
          uncertainty: {
            value: 'None',
            reference: 'Not described',
            comment:
              'The protocol relies on Sequestration Value Maps for key parameters. These parameters are generated by the FullCAM model, which is based on the RothC model. The parameters are fixed values and do not indicate any uncertainty quantification. ',
          },
          baseline_type: {
            value: 'Fixed',
            reference: 'F2018C00126, Section 49(5)',
            comment:
              "Creditable SOC change is calculated by multiplying a default value over the period the activity was carried out for. This implies a fixed baseline against which each year's increment is credited. ",
          },
          baseline_scenario: {
            value: 'No sampling / Default parameters',
            reference: 'F2018C00126, Section 49',
            comment:
              'Default parameters are expressed in terms of tCO\u2082e/ha-yr that is accumulated beyond the baseline scenario, based on modeling, not sampling.',
          },
          project_scenario: {
            value: 'No sampling / Default parameters',
            reference: 'F2018C00126, Section 49',
            comment: '',
          },
          empirical_crediting: {
            value: 'No',
            reference: 'F2018C00126, Section 49',
            comment: 'No sampling is involved.',
          },
          sampling_approach: {
            value: 'N/A',
            reference: 'N/A',
            comment: 'No sampling is involved.',
          },
          model: {
            value: 'FullCAM (based on RothC)',
            reference:
              'F2018C00126, Section 49; A Guide to the Estimating Sequestration of Carbon in Soil Using Default Values Method, p.5',
            comment:
              'Default parameters were developed using the FullCAM model, which is based on the RothC model.',
          },
          notes:
            'Crediting is based on a set of regional, default sequestration rates, represented in three "Sequestration Value Maps." Regionalized rates are expressed in tCO\u2082e/ha-yr. Projects are credited by multiplying the duration of the project by the map-derived rate of carbon sequestration. The default values are derived from the FullCAM model, which in turn relies on the RothC model to estimate changes to soil carbon. ',
          comments:
            'SOC crediting is not empirical and relies entirely on calculation from default factors. Default factors vary by activity and location, but not any other project-specific information.',
        },
      },
      safeguards: {
        score: 3,
        details: {
          landowner_protections: {
            value: 'Yes',
            reference: 'C2020C00281, Section 28A; Simplified Method Guide, p.6',
            comment:
              'Projects are required to seek formal consent from all stakeholders who hold an interest in the land.',
          },
          community_engagement: {
            value: 'No',
            reference: 'Not described',
            comment: '',
          },
          data_privacy: {
            value: 'Yes',
            reference: 'C2019C00253, Part 3',
            comment:
              "The Clean Energy Regulator is bound by the provisions of the Clean Energy Regulator Act (2011), the Privacy Act, the NGER Act, and otherwise applicable law regarding the disclosure of personal information collected from project participants. See CER's [Disclaimer, disclosure and privacy](http://www.cleanenergyregulator.gov.au/NGER/About-the-National-Greenhouse-and-Energy-Reporting-scheme/Disclaimer-disclosure-and-privacy) page for additional details. The Clean Energy Regulator Act (2011) provides exemptions for disclosures of protected information related to climate policy (Section 44) and specifically for the development of carbon credit methodologies (Section 47(1)(a)).",
          },
          notes:
            'Protocol requires formal consent to the offset project from all stakeholders who hold an interest in the land. The Clean Energy Regulator is subject to clear legislative guidance about the disclosure and privacy of project participant information. ',
          comments:
            'Under the [Carbon Farming Initiative Act](https://www.legislation.gov.au/Details/C2020C00281) (Sections 44 and 47), the regulator may disclose or use protected information related to offset projects for the purposes of climate change law or for the development of new methodologies. ',
        },
      },
      rating: { score: 2 },
    },
    revisions: [
      {
        date: '10-13-2021',
        note: 'This protocol was added to our analysis after we recieved feedback from various stakeholders that including compliance protocols in the review would be helpful. See [our blog post](http://carbonplan.org/blog/soil-protocols-added) for more detail.',
      },
    ],
  },
  SOIL017: {
    id: 'SOIL017',
    name: 'Alberta Cropping',
    entity: 'Alberta',
    details: {
      protocol: 'Quantification Protocol for Conservation Cropping',
      links: [
        {
          name: 'Quantification Protocol for Conservation Cropping, v1.0',
          href: 'https://open.alberta.ca/dataset/b99725e1-5d2a-4427-baa8-14b9ec6c6a24/resource/db11dd55-ce34-4472-9b8b-cb3b30214803/download/6744004-2012-quantification-protocol-conservation-cropping-april-2012-version-1.0-2012-04-02.pdf), \n[Memo of Withdrawal',
        },
        {
          name: 'Technical Guidance for the Assessment of Additionality, v1.0',
          href: 'https://open.alberta.ca/dataset/ae43faff-6405-443d-a07a-d541d04c52f0/resource/679a62bd-7196-4665-a6b7-341af6d96578/download/assessmentadditionality-may31-2018.pdf',
        },
        {
          name: 'Technical Guidance for Osset Protocol Development and Revision, v2.0',
          href: 'https://open.alberta.ca/dataset/db089833-59cc-404b-99ed-56b51bbd9242/resource/726366d0-25fa-4bd8-b333-3df78eed1eb2/download/offsetprotocoldevelopment-jul31-2018.pdf',
        },
        {
          name: 'Standard for Validation, Verification and Audit, v5.1',
          href: 'https://open.alberta.ca/dataset/26b45734-4765-41cf-965c-ec945a6e4581/resource/877ab169-145e-4f32-b2dc-6e2ce498f113/download/aep-tier-standard-validation-verification-and-audit-version-5-1.pdf',
        },
      ],
      parties: ['Alberta'],
      status: 'Credits issued',
      projects:
        'See [Alberta Emissions Offset Registry listings](https://alberta.csaregistries.ca/GHGR_Listing/AEOR_Listing.aspx). ',
      notes:
        'Protocol credits increases to soil carbon and decreases to fuel use through no-till management. It was published in 2012 and replaced the 2009 Quantification Protocol for Tillage System Management.',
      comments:
        'Protocol has been withdrawn after a [finding](https://www.alberta.ca/assets/documents/aeos-memo-withdrawal-quantification-protocol-conservation-cropping.pdf) that the credited activities no longer pass the applicable additionality tests. Existing projects may be credited through the end of 2021, but no new projects may be developed. 47 projects have been developed under the Conservation Cropping protocol according to listings on the [Alberta Emissions Offset Registry](https://alberta.csaregistries.ca/GHGR_Listing/AEOR_Listing.aspx). An additional [75 projects](https://alberta.csaregistries.ca/GHGR_Listing/AEOR_Listing.aspx) were developed under the preceding Tillage System Management protocol. Note that the timeline above does not include an "crediting" or "permanence" bar. This is because the crediting and permanece periods are defined relative to a programatic end date rather than relative to a project\'s start date. See the durability metric for more details. We render 20 years of activity backdating to indicate that the protocol is agnostic to the timing of activity implementation. ',
      timeline: {
        activity: [-20, 0],
        crediting: [0, 0],
        registration: [0],
        verification: [0],
        permanence: [0, 0],
      },
    },
    metrics: {
      durability: {
        score: 1,
        details: {
          buffer_pool: {
            value: 'Required',
            reference:
              'Quantification Protocol, p.2; Technical Guidance for Offset protocol Development and Revision, Section 5.3.2',
            comment:
              "A 7.5 or 12.5% discount factor based on regional rates of reversal is applied. These credits aren't managed in a tradition buffer pool, and instead are considered permanently retired against future liabilities. If a project experiences a reversal of more than 10% of the field area, those affected fields may not be used to calculate credits with the default factors for the year affected by the reversal. ",
          },
          leakage_test: {
            value: 'Required',
            reference:
              'Quantification Protocol, p.2; Technical Guidance for Offset protocol Development and Revision, Section 5.3.2',
            comment:
              "A 7.5 or 12.5% discount factor based on regional rates of reversal is applied. These credits aren't managed in a tradition buffer pool, and instead are considered permanently retired against future liabilities. If a project experiences a reversal of more than 10% of the field area, those affected fields may not be used to calculate credits with the default factors for the year affected by the reversal. ",
          },
          uncertainty_deduction: {
            value: 'Required',
            reference:
              'Quantification Protocol, p.2; Technical Guidance for Offset protocol Development and Revision, Section 5.3.2',
            comment:
              "A 7.5 or 12.5% discount factor based on regional rates of reversal is applied. These credits aren't managed in a tradition buffer pool, and instead are considered permanently retired against future liabilities. If a project experiences a reversal of more than 10% of the field area, those affected fields may not be used to calculate credits with the default factors for the year affected by the reversal. ",
          },
          onsite_verification: {
            value: 'Required',
            reference:
              'Standard for Validation, Verification and Audit, Sections 4.1',
            comment: '',
          },
          sampling_verification: {
            value: 'N/A',
            reference: 'Not appliable',
            comment:
              'Quantification of SOC change is based on default factors provided by the protocol. Verification may include a field investigation (See Quantification Methodology, p.98), but neither quantification nor verification require soil sampling. ',
          },
          crediting_period: {
            value: 'N/A',
            reference:
              'Standard for Developers, Section 11; Quantification Protocol, p.vii, p.2, p.9 and p.12',
            comment:
              'Various crediting periods are identified. The Standards for Developers document suggests crediting periods are a default 8 years, extendable to 10 years with permission from the regulator; however, the core protocol document suggests a 20-year period. In practice, it appears that projects could earn credits for every year the protocol was in operation. Because it did not operate for 20 years past the initial benchmark year, there appears to not have been any formal resolution of its crediting period.',
          },
          permanence: {
            value: 'N/A',
            reference: 'Not described ',
            comment:
              'Protocol pairs a discount factor based on a regional reveral rates (see Quantification Methodology, p.2) with the assertion that resulting credits are permanent. Since no permanence obligation mechanism exists beyond the end of the crediting period, we report the permanence as "N/A." ',
          },
          notes:
            'Technically there is no buffer pool. However, all projects must make a 7.5% or 12.5% deduction to account for permanence risks, so we record the protocol as having a buffer pool-like feature. Extensive verification guidance is provided, and verification includes site visits.',
          comments:
            'In essence, the protocol addresses permanence risks by applying a discount to the nominal number of credits calculated, and uses this to assert credited sequestration is permanent in perpetuity. The crediting period is defined relative to a fixed crediting end date (the end of 2021) rather than as a time period defined relative to a project start date. We thus report crediting period as N/A. Since no permanence obligation mechanism exists beyond the end of the crediting period, we also report the permanence period as "N/A." Protocol pairs a discount factor based on a regional reveral rates with the assertion that resulting credits are permanent.  ',
        },
      },
      practices: {
        value: { tillage: 1, cropping: 1, inputs: 0, grazing: 0, other: 0 },
        details: {
          included: {
            value: ['Tillage', 'Cropping'],
            reference:
              'Quantification Protocol, Sections 1.0, 1.1 (p.2), 1.2 and Appendix F',
            comment: '',
          },
          geographies: {
            value: 'Alberta',
            reference: 'Quantification Protocol, Section 1.2',
            comment: 'Specifically Dry Prairie and Parkland ecozones. ',
          },
          cobenefits: {
            value: 'None ',
            reference: 'Not described',
            comment: '',
          },
          notes:
            'Protocol credits soil carbon sequestration, lower nitrous oxide emissions from soils, and emission reductions from farm equipment as a result of no-till management practices. Some projects may be credited for changes in cropping practices as well.  ',
          comments: 'None',
        },
      },
      additionality: {
        score: 1,
        details: {
          financial: {
            value: 'Allowed',
            reference:
              'Technical Guidance for the Assessment of Additionality, Sections 6.2 and 6.3',
            comment: '',
          },
          performance: {
            value: 'Required',
            reference:
              'Technical Guidance for the Assessment of Additionality, Sections 6.2 and 6.3',
            comment:
              'An activity is considered "business as usual" if it has a >40% penetration rate. In this case, additionality may be proven via a barriers test. ',
          },
          other: {
            value: 'Allowed',
            reference:
              'Technical Guidance for the Assessment of Additionality, Sections 6.2 and 6.3',
            comment: '',
          },
          activity_backdating: {
            value: 'N/A',
            reference: 'Standard for Developers, Division 3, Section 10',
            comment:
              'Protocol does not screen projects based on their historical engagement with the project activity. The only specification provided is that crediting must begin when the credited activity starts.',
          },
          crediting_backdating: {
            value: 0,
            reference: 'Standard for Developers, Division 3, Section 10',
            comment:
              'The offset start date for a non-grouped project is the day project plans are submitted to the Registry. In the case of an aggregated project, crediting may be backdated up to 4 months. ',
          },
          notes:
            'Additionality of a credited activity is asessed during protocol development or review rather than on a project-by-project basis. The first step in the assessment of additionality is a common practice test. Activities are deemed additional if their penetration rate is less than 40%. If penetration is greater than 40%, or if penetration rate cannot be asessed, activities may be deemed additional via the demonstration of a financial, technological, or other barrier. As a result, a performance-based common practice additionality test is required, a financial additionality test is optional, and other barrier analysis is optional.',
          comments:
            'The combination of a relatively high common practice threshold and vague criteria for passing barriers tests makes this a week screen for additionality. The protocol was [withdrawn](https://www.alberta.ca/assets/documents/aeos-memo-withdrawal-quantification-protocol-conservation-cropping.pdf) after the government issued a finding of non-additionality. ',
        },
      },
      rigor: {
        score: 1,
        details: {
          ghgs: {
            value: ['CO\u2082', 'CH\u2084', 'N\u2082O'],
            reference: 'Quantification Protocol, Tables 2 and 6 ',
            comment: '',
          },
          bulk_density: {
            value: 'Unspecified',
            reference: 'Not described',
            comment:
              'Various secondary sources suggest the protocol relid on the [CENTURY 4.0 model](https://www2.nrel.colostate.edu/projects/century/MANUAL/html_manual/man96.html), which estimates bulk denisity (as opposed to measuring it). Because we cannot determine the depth directly from protocol documents, however, we leave the term as "unspecified." ',
          },
          depth: {
            value: 'Unspecified',
            reference: 'Not described',
            comment:
              'Various secondary sources suggest the protocol relid on the [CENTURY 4.0 model](https://www2.nrel.colostate.edu/projects/century/MANUAL/html_manual/man96.html), which uses a depth of 30cm. Because we cannot determine the depth directly from protocol documents, however, we leave the term as "unspecified." ',
          },
          equivalent_soil_mass: {
            value: 'None ',
            reference: 'Not described',
            comment: '',
          },
          uncertainty: {
            value: 'None',
            reference: 'Not described',
            comment: '',
          },
          baseline_type: {
            value: 'Fixed ',
            reference: 'Quantification Protocol, Section 2.0',
            comment:
              'Activities are credited based on annual incremental increases in soil carbon discounted for 2006 sector-level adoption. A fixed baseline assumption is baked into the default factors used to calculated carbon sequestration. ',
          },
          baseline_scenario: {
            value: 'No sampling / Default parameters',
            reference: 'Quantification Protocol, Section 2.0',
            comment:
              'Projects do not have to establish individual baselines. Instead, projects are discounted based on a regional performance-standard baseline, which is based off of regional adoption rates for full, reduced, and no-till activities. ',
          },
          project_scenario: {
            value: 'No sampling / Default parameters',
            reference:
              'Quantification Protocol, Table 7 and Appendixes A and C ',
            comment: '',
          },
          empirical_crediting: {
            value: 'No',
            reference:
              'Quantification Protocol, Table 7 and Appendixes A and C',
            comment: '',
          },
          sampling_approach: {
            value: 'N/A',
            reference: 'Not described',
            comment:
              'Soil carbon changes based on default parameters, not sampling.',
          },
          model: {
            value: 'Default factors',
            reference:
              'Quantification Protocol, Table 7 and Appendixes A and C',
            comment: '',
          },
          notes:
            'Crediting is based on regional sequestration factors. Rather than developing project-specific baselines, regional adoption rates for full, reduced, and no-till activities are converted into a discount factor applied to the default factor used to calculate credits.',
          comments:
            'SOC crediting is not empirical and relies entirely on calculation from regional default factors. Quantification methodology is subject to deviation requests. ',
        },
      },
      safeguards: {
        score: 2,
        details: {
          landowner_protections: {
            value: 'No',
            reference: 'Standard for Developers, Part 2, Section 1.5.1',
            comment:
              'Landowner consent is required, but no explicit protections are involved for other potentially impacted stakeholders. ',
          },
          community_engagement: {
            value: 'No ',
            reference: 'Not described',
            comment: '',
          },
          data_privacy: {
            value: 'Yes',
            reference: '',
            comment:
              'The Government of Alberta is subject to various general privacy protections that also apply in this context. ',
          },
          notes:
            'The Government of Alberta is subject to general legislative guidance about the disclosure and privacy of project participant information. ',
          comments: 'None',
        },
      },
      rating: { score: 1 },
    },
    revisions: [
      {
        date: '10-13-2021',
        note: 'This protocol was added to our analysis after we recieved feedback from various stakeholders that including compliance protocols in the review would be helpful. See [our blog post](http://carbonplan.org/blog/soil-protocols-added) for more detail.',
      },
    ],
  },
}
