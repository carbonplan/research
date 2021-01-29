const dacParameters = [
  {
    id: 'scale',
    displayName: 'How large will your DAC facility be?',
    description:
      'Going bigger tends to drive down cost due to economies of scale.',
    parameters: [
      {
        name: 'Scale [tCO2/year]',
        displayName: 'Scale',
        description:
          'The scale is the amount of CO2 in metric tons that a given DAC facility captures from the air in a given year.',
        unit: 'tCO₂/year',
        initValue: 1000000,
        validRange: [500000, 10000000],
        displayRange: [445000, 1e7 + 1300000],
        step: 1000,
        scale: 'log',
        chartHeight: 180,
        offset: ['67%', '179px'],
      },
    ],
  },
  {
    id: 'lifetime',
    displayName: 'How long do you plan to operate the facility? ',
    description:
      'Spreading out upfront costs by operating the facility longer tends to drive down costs.',
    parameters: [
      {
        name: 'Economic Lifetime [years]',
        displayName: 'Facility Lifetime',
        description:
          'Economic lifetime is the expected, useful lifetime of a DAC facility. In this model, this is used to determine the payback period of the capital investment.',
        unit: 'years',
        initValue: 20,
        validRange: [5, 40],
        step: 1,
        scale: 'linear',
        chartHeight: 120,
      },
    ],
  },
  {
    id: 'financing',
    displayName: 'Financing parameters',
    description:
      'Building a DAC facility requires capital, these parameters dictate how that capital is financed.',
    parameters: [
      {
        name: 'WACC [%]',
        displayName: 'WACC',
        description:
          'WACC is the weighted average cost of capital which is derived from combined equity and debt capital. The WACC is a weighted percent between differing interest rates from multiple lenders and can be used to calculate the capital recovery factor,  which is used to annualize the capital cost of the system.',
        unit: '%',
        initValue: 8.5,
        validRange: [4, 30],
        step: 0.01,
        scale: 'linear',
        chartHeight: 120,
      },
      {
        name: 'Capex [$]',
        displayName: 'Cap Ex',
        description:
          'The capital costs of the complete DAC facility per ton of CO₂ installed capacity. This includes equipment, installation, piping and instrumentation, as well as neccessary costs for infrastructure inside and outside battery operating limits.',
        unit: '$ / tCO₂ ann. cap.',
        initValue: 936,
        validRange: [10, 2250],
        step: 1,
        scale: 'linear',
        chartHeight: 120,
      },
    ],
  },
  {
    id: 'design',
    displayName: 'Design Parameters',
    description:
      'A lot goes into building a new DAC facility. Here we expose a few of the most important parameters.',
    parameters: [
      {
        name: 'DAC Section Lead Time [years]',
        displayName: 'Construction Lead',
        description:
          'The DAC construction lead time describes the time between the beginning of construction and commissioning of the DAC plant.',
        unit: 'years',
        initValue: 3,
        validRange: [1, 10],
        step: 1,
        maxSteps: 10,
        scale: 'linear',
        chartHeight: 120,
      },
      {
        // From Noah: This can be any value in this range. In fact, new proposals have been trying to develop intermediate approaches to DAC. However, I noticed that the CAPEX for DAC does not vary with the capacity factor. There should be a relationship between the capacity factor and the scale of the DAC facility. For example, if you have a facility operating 50% of the time, it needs to be two times as large as a facility operating 100% of the time.
        name: 'DAC Capacity Factor',
        displayName: 'Capacity Factor',
        description:
          'The capacity factor is the ratio of the actual operating capacity of a given industrial facility divided by the maximum operating capacity of the facility over a defined period.',
        unit: '',
        initValue: 0.9,
        validRange: [0.1, 1],
        step: 0.1,
        scale: 'linear',
        chartHeight: 120,
      },
      {
        name: 'Electric [GJ/tCO2]',
        displayName: 'Electric Req',
        description:
          'The electric requirements are system energy requirements that neccessitate electricity. For example, fans to push air through the system.',
        unit: 'GJ/tCO₂',
        initValue: 1.48, // rounded from 1.48199428
        validRange: [0, 10],
        step: 0.1,
        scale: 'linear',
        chartHeight: 120,
      },
      {
        name: 'Thermal [GJ/tCO2]',
        displayName: 'Thermal Req',
        description:
          'The thermal requirements of the system require energy input in the form of heat. For example, sorbent regeneration requires a heat input to release adsorbed CO2.',
        unit: 'GJ/tCO₂',
        initValue: 6.64, // rounded from 6.640178571
        validRange: [0, 10],
        step: 0.1,
        scale: 'linear',
        chartHeight: 120,
      },
    ],
  },
  {
    id: 'ops',
    displayName: 'How Much Does Operation and Maintenance Cost?',
    description:
      'Running a DAC facility comes with fixed and variable costs, associated with regular operation and maintenance.',
    parameters: [
      {
        name: 'Fixed O&M Costs [$/tCO2]',
        displayName: 'Fixed O&M',
        description:
          'Fixed operating and maintenance costs are associated with process that do not vary based on the production (i.e. tCO2 captured by DAC facility). An example of fixed O&M is lease payments and/or property taxes.',
        unit: '$/tCO₂',
        initValue: 34,
        validRange: [0, 150],
        step: 0.1,
        scale: 'linear',
        chartHeight: 120,
      },
      {
        name: 'Variable O&M Cost [$/tCO2]',
        displayName: 'Variable O&M',
        description:
          'Variable operating and maintenance costs are the non-fuel portion of operating costs that are a function of the production (i.e. these are the costs associated with consumables that vary directly with the tCO2 captured by the DAC facility ). An example of a Variable O&M cost is raw materials, such as water and chemicals, as well as other consumables.',
        unit: '$/tCO₂',
        initValue: 4,
        validRange: [0, 50],
        step: 1,
        scale: 'linear',
        chartHeight: 120,
      },
      {
        name: 'Natural Gas Cost [$/mmBTU]',
        displayName: 'Natural Gas',
        description: 'The natural gas cost is the market price of natural gas.',
        unit: '$/mmBTU',
        initValue: 3.43,
        validRange: [1, 10],
        step: 0.1,
        scale: 'linear',
        chartHeight: 120,
      },
    ],
  },
]

export default dacParameters
