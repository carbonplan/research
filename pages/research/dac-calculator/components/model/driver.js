import {
  BatterySection,
  EnergySection,
  NgThermalSection,
  DacSection,
  DacModel,
} from './model.js'

export const TECH_WITH_BATS = ['Wind', 'Solar']

/**
 * Helper function to build a composite DAC model
 * @param {string} electricSource
 * @param {string} thermalSource
 * @return {DacModel}
 */
export const makeModel = (energySource) => {
  let electricSource
  let thermalSource
  let ebattery
  let tbattery
  let thermal

  if (energySource == 'NGCC') {
    electricSource = 'NGCC w/ CCS'
    thermalSource = 'Advanced NGCC'
  } else {
    electricSource = energySource
    thermalSource = energySource
  }

  // electric
  if (TECH_WITH_BATS.includes(electricSource)) {
    ebattery = new BatterySection()
  } else {
    ebattery = null
  }
  const electric = new EnergySection(electricSource, ebattery)

  // thermal
  if (TECH_WITH_BATS.includes(thermalSource)) {
    tbattery = new BatterySection()
  } else {
    tbattery = null
  }

  if (energySource == 'NGCC') {
    thermal = new NgThermalSection(thermalSource, tbattery)
  } else {
    thermal = new EnergySection(thermalSource, tbattery)
  }

  // DAC
  const dac = new DacSection()

  // Full Model
  const dacAll = new DacModel(electric, thermal, dac)

  return dacAll
}
