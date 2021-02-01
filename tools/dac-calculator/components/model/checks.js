import { makeModel } from './driver.js'

const getDefaultParams = () => {
  const p = {
    energy: 'NGCC',
    'Scale [tCO2/year]': 1000000,
    'Economic Lifetime [years]': 20,
    'WACC [%]': 8.5,
    'Capex [$]': 936,
    'DAC Section Lead Time [years]': 3,
    'DAC Capacity Factor': 0.9,
    'Electric [GJ/tCO2]': 1.48,
    'Thermal [GJ/tCO2]': 6.64,
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
  model = makeModel('NGCC')
  model.setParams(params)
  results = model.compute()
  if (
    results['Total Cost [$/tCO2 Net Removed]'] > 290 &&
    results['Total Cost [$/tCO2 Net Removed]'] < 305
  ) {
    console.log(
      'check 1A-low passed',
      results['Total Cost [$/tCO2 Net Removed]']
    )
  } else {
    console.log(
      'check 1A-low failed',
      results['Total Cost [$/tCO2 Net Removed]'],
      'expected',
      297
    )
  }

  // check 1A-high
  params = getDefaultParams()
  params['Capex [$]'] = 2027
  params['Electric [GJ/tCO2]'] = 1.7
  params['Thermal [GJ/tCO2]'] = 2.2

  model = makeModel('NGCC')
  model.setParams(params)
  results = model.compute()
  if (
    results['Total Cost [$/tCO2 Net Removed]'] > 535 &&
    results['Total Cost [$/tCO2 Net Removed]'] < 550
  ) {
    console.log(
      'check 1A-high passed',
      results['Total Cost [$/tCO2 Net Removed]'],
      'expected'
    )
  } else {
    console.log(
      'check 1A-high failed',
      results['Total Cost [$/tCO2 Net Removed]'],
      'expected',
      542
    )
  }
  console.log(results)
}

export default checks
