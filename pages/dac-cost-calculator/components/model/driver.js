import { BatterySection, EnergySection, DacSection, DacModel } from './model.js'

const dacDriver = (params) => {
  console.log('Default Parameters', params)

  params['Base Energy Requierement [MW]'] = 38  // = 'Report Data'!C64
  const ebattery = new BatterySection(params)
  const electric = new EnergySection('Solar', ebattery, params)

  params['Base Energy Requierement [MW]'] = 234  // = F18
  const tbattery = new BatterySection(params)
  const thermal = new EnergySection('Solar', tbattery, params)

  params['Total Capex [$]'] = 936.01  // = 'Report Data'!H27
  const dac = new DacSection(params)

  const dacAll = new DacModel(electric, thermal, dac, params)
  const results = dacAll.compute()

  return results
}

export default dacDriver;
