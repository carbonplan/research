import { makeModel } from './driver.js'

const getDefaultParams = () => {
  const p = {
    energy: 'NGCC',
    'Scale [tCO2/year]': 1000000,
    'Economic Lifetime [years]': 20,
    'WACC [%]': 8.5,
    'DAC Section Lead Time [years]': 3,
    'DAC Capacity Factor': 0.9,
    'Fixed O&M Costs [$/tCO2]': 34,
    'Variable O&M Cost [$/tCO2]': 4,
    'Natural Gas Cost [$/mmBTU]': 3.43,
    'Leakage Rate [%]': 2.2,
    'Methane GWP 100 [-]': 32,
    'CO2e / tCH4 (supply chain) [-]': 0.274,
    Technology: {
      Wind: {
        'Overnight Cost [$/kW]': 1319,
        'Plant Size [MW]': 200,
        'Lead Time [Years]': 3,
        'Variable O&M [$/MWhr]': 0,
        'Fixed O&M [$/kW-yr]': 26.22,
        Availability: 0.52,
        'Scaling Factor': 0.95,
      },
      'Advanced NGCC': {
        'Overnight Cost [$/kW]': 954,
        'Plant Size [MW]': 1083,
        'Lead Time [Years]': 3,
        'Variable O&M [$/MWhr]': 1.86,
        'Fixed O&M [$/kW-yr]': 12.15,
        'Final Heat Rate [BTU/kWh]': 6370,
        Availability: 1,
        'Scaling Factor': 0.7,
        'Total CO2 eq [lb/mmbtu]': 119,
        'Base Plant Cost [M$]': 1033.182,
        'Base Plant Annual Fixed O&M [$M]': 13.15845,
        'Efficiency (Thermal or Round Trip)': 1.8668636105200842,
      },
      'NGCC w/ CCS': {
        'Overnight Cost [$/kW]': 2569,
        'Plant Size [MW]': 377,
        'Lead Time [Years]': 3,
        'Variable O&M [$/MWhr]': 5.82,
        'Fixed O&M [$/kW-yr]': 27.48,
        'Final Heat Rate [BTU/kWh]': 7124,
        Availability: 1,
        'Scaling Factor': 0.7,
        'Capture Efficiency': 0.9,
        'Total CO2 eq [lb/mmbtu]': 119,
        'Base Plant Cost [M$]': 968.513,
        'Base Plant Annual Fixed O&M [$M]': 10.359960000000003,
        'Efficiency (Thermal or Round Trip)': 2.08783930319389,
      },
      Solar: {
        'Overnight Cost [$/kW]': 1331,
        'Plant Size [MW]': 150,
        'Lead Time [Years]': 2,
        'Variable O&M [$/MWhr]': 0,
        'Fixed O&M [$/kW-yr]': 15.19,
        Availability: 0.352,
        'Scaling Factor': 0.95,
        'Capture Efficiency': 0,
      },
      'Battery Storage': {
        'Overnight Cost [$/kW]': 1383,
        'Plant Size [MW]': 50,
        'Battery Capacity [MWhr]': 200,
        'Lead Time [Years]': 1,
        'Variable O&M [$/MWhr]': 0,
        'Fixed O&M [$/kW-yr]': 24.7,
        'Efficiency (Thermal or Round Trip)': 0.85,
        'Scaling Factor': 0.95,
      },
    },
    log: true,
  }

  return p
}

const checks = () => {
  let model
  let results
  let params

  // check 1A-low
  params = getDefaultParams()
  params['Capex [$]'] = 1028
  params['Electric [GJ/tCO2]'] = 1.46
  params['Thermal [GJ/tCO2]'] = 5.82
  model = makeModel('NGCC')
  model.setParams(params)
  results = model.compute()
  if (
    results['Total Cost [$/tCO2 Net Removed]'] > 250 &&
    results['Total Cost [$/tCO2 Net Removed]'] < 260
  ) {
    console.log(
      'check 1A-low passed',
      results['Total Cost [$/tCO2 Net Removed]'].toFixed(2)
    )
  } else {
    console.log(
      'check 1A-low failed',
      results['Total Cost [$/tCO2 Net Removed]'].toFixed(2),
      'expected',
      256
    )
  }

  // check 1A-high
  params = getDefaultParams()
  params['Capex [$]'] = 2027
  params['Electric [GJ/tCO2]'] = 1.7
  params['Thermal [GJ/tCO2]'] = 7.22
  params['Fixed O&M Costs [$/tCO2]'] = 70
  params['Variable O&M Costs [$/tCO2]'] = 8
  model = makeModel('NGCC')
  model.setParams(params)
  results = model.compute()
  if (
    results['Total Cost [$/tCO2 Net Removed]'] > 460 &&
    results['Total Cost [$/tCO2 Net Removed]'] < 475
  ) {
    console.log(
      'check 1A-high passed',
      results['Total Cost [$/tCO2 Net Removed]'].toFixed(2),
      'expected'
    )
  } else {
    console.log(
      'check 1A-high failed',
      results['Total Cost [$/tCO2 Net Removed]'].toFixed(2),
      'expected',
      468
    )
  }

  // check 2A-low
  params = getDefaultParams()
  params['Capex [$]'] = 1023
  params['Electric [GJ/tCO2]'] = 0.95
  params['Thermal [GJ/tCO2]'] = 5.82
  model = makeModel('Solar')
  model.setParams(params)
  results = model.compute()
  if (
    results['Total Cost [$/tCO2 Net Removed]'] > 425 &&
    results['Total Cost [$/tCO2 Net Removed]'] < 440
  ) {
    console.log(
      'check 2A-low passed',
      results['Total Cost [$/tCO2 Net Removed]'].toFixed(2)
    )
  } else {
    console.log(
      'check 2A-low failed',
      results['Total Cost [$/tCO2 Net Removed]'].toFixed(2),
      'expected',
      433
    )
  }

  // check 2A-high
  params = getDefaultParams()
  params['Capex [$]'] = 2000
  params['Electric [GJ/tCO2]'] = 1.17
  params['Thermal [GJ/tCO2]'] = 7.22
  params['Fixed O&M Costs [$/tCO2]'] = 70
  params['Variable O&M Costs [$/tCO2]'] = 8
  model = makeModel('Solar')
  model.setParams(params)
  results = model.compute()
  if (
    results['Total Cost [$/tCO2 Net Removed]'] > 650 &&
    results['Total Cost [$/tCO2 Net Removed]'] < 665
  ) {
    console.log(
      'check 2A-high passed',
      results['Total Cost [$/tCO2 Net Removed]'].toFixed(2),
      'expected'
    )
  } else {
    console.log(
      'check 2A-high failed',
      results['Total Cost [$/tCO2 Net Removed]'].toFixed(2),
      'expected',
      658
    )
  }

  // check 3A-low
  params = getDefaultParams()
  params['Capex [$]'] = 1023
  params['Electric [GJ/tCO2]'] = 0.95
  params['Thermal [GJ/tCO2]'] = 5.82
  model = makeModel('Wind')
  model.setParams(params)
  results = model.compute()
  if (
    results['Total Cost [$/tCO2 Net Removed]'] > 355 &&
    results['Total Cost [$/tCO2 Net Removed]'] < 370
  ) {
    console.log(
      'check 3A-low passed',
      results['Total Cost [$/tCO2 Net Removed]'].toFixed(2)
    )
  } else {
    console.log(
      'check 3A-low failed',
      results['Total Cost [$/tCO2 Net Removed]'].toFixed(2),
      'expected',
      361
    )
  }

  // check 3A-high
  params = getDefaultParams()
  params['Capex [$]'] = 2000
  params['Electric [GJ/tCO2]'] = 1.17
  params['Thermal [GJ/tCO2]'] = 7.22
  params['Fixed O&M Costs [$/tCO2]'] = 70
  params['Variable O&M Costs [$/tCO2]'] = 8
  model = makeModel('Wind')
  model.setParams(params)
  results = model.compute()
  if (
    results['Total Cost [$/tCO2 Net Removed]'] > 565 &&
    results['Total Cost [$/tCO2 Net Removed]'] < 575
  ) {
    console.log(
      'check 3A-high passed',
      results['Total Cost [$/tCO2 Net Removed]'].toFixed(2),
      'expected'
    )
  } else {
    console.log(
      'check 3A-high failed',
      results['Total Cost [$/tCO2 Net Removed]'].toFixed(2),
      'expected',
      570
    )
  }
}

export default checks
