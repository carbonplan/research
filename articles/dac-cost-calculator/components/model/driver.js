import { BatterySection, EnergySection, DacSection, DacModel } from './model.js'

const dacDriver = (electricSource, thermalSource, params) => {
  // electric
  if (electricSource == 'Solar') {
    // C2
    params['Base Energy Requierement [MW]'] = 38  // = 'Report Data'!C64
    params['Total Capex [$]'] = 936.01  // = 'Report Data'!H27
  } else if (electricSource == 'Wind') {
    // C4
    params['Base Energy Requierement [MW]'] = 38  // = 'Report Data'!C64
    params['Total Capex [$]'] = 936.01  // = 'Report Data'!H27
  } else {
    console.log(electricSource)
    throw 'Electric: not ready for source' + electricSource
  }
  
  const ebattery = new BatterySection(params)
  const electric = new EnergySection(electricSource, ebattery, params)

  // thermal
  if (electricSource == 'Solar') {
    params['Base Energy Requierement [MW]'] = 234  // = 'Report Data'!C64
  } else if (electricSource == 'Wind') {
    params['Base Energy Requierement [MW]'] = 234  // = 'Report Data'!C64
  } else {
    throw 'Thermal: not ready for source'
  }

  params['Base Energy Requierement [MW]'] = 234  // = F18
  const tbattery = new BatterySection(params)
  const thermal = new EnergySection(electricSource, tbattery, params)

  const dac = new DacSection(params)

  const dacAll = new DacModel(electric, thermal, dac, params)
  const results = dacAll.compute()

  return results
}

export default dacDriver;
