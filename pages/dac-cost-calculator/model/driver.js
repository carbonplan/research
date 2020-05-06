import { BatterySection, EnergySection, DacSection } from './model.js'

const dacModel = (state, params) => {
  console.log('Default Parameters', params)
  console.log('Current State', state)
  // Still a work in progress...
  // console.log(params)
  // params['Base Energy Requierement [MW]'] = 38  // = 'Report Data'!C64
  // const ebattery = new BatterySection(params)
  // console.log(ebattery)
  // const electric = new EnergySection('Solar', ebattery, params)
  // console.log(electric)

  // params['Base Energy Requierement [MW]'] = 234  // = F18
  // const tbattery = new BatterySection(params)
  // const thermal = new EnergySection('Solar', tbattery, params)

  // params['Total Capex [$]'] = 936.01  // = 'Report Data'!H27
  // const dac = new DacSection(params)

  // dac_all = DacModel(electric, thermal, dac, ** params)

  var variable = 4 + state['Scale [tCO2/year]'][0]
  var total = 393 + state['Scale [tCO2/year]'][0]

  const results = {
    'Total Capital Cost [M$]': 3045.006965,
    'Capital Recovery [$ / tCO2eq]': 321.768853,
    'Fixed O+M[$ / tCO2eq]': 67.867058,
    'Variable O+M[$ / tCO2eq]': variable,
    'Natural Gas Cost[$ / tCO2]': 0.000000,
    'Total Cost[$ / tCO2]': total
  }

  return results
}

export default dacModel;
