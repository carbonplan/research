import {
  SPECIES,
  SPECIES_LINE_DENSITIES,
  SPECIES_EQUIPMENT_COSTS,
} from './constants'

export const getSpecies = (species) => {
  if (species === SPECIES.length) {
    return SPECIES[SPECIES.length - 1]
  } else {
    return SPECIES[species]
  }
}

export const calculateCost = (target, values, parameters) => {
  const { capex, harvestCost, lineCost, opex, transportCost, conversionCost } =
    parameters

  const { seaweed_dw, depth, d2p, nharv, wave_height, d2sink, species } = values

  const lineDensity = SPECIES_LINE_DENSITIES[species]
  const equipment = SPECIES_EQUIPMENT_COSTS[species]

  const seaweed_ww = seaweed_dw / 0.1

  // parameters
  const priceyDepth = 500.0
  const highWaveDamage = 3.0

  // calculate depth premium
  let depthPremium = 0.0
  if (depth >= priceyDepth) {
    depthPremium = depth / priceyDepth
  }

  // calculate wave premium
  let wavePremium = 0.0
  if (wave_height >= highWaveDamage) {
    wavePremium = wave_height / highWaveDamage
  }

  // calculate primary terms
  const capital =
    capex + depthPremium * capex + wavePremium * capex + lineCost * lineDensity
  const harvest = harvestCost * nharv + transportCost * equipment * d2p

  // combine terms
  const growthCost = (capital + opex + harvest) / seaweed_dw

  if (target === 'products') {
    return (
      growthCost +
      conversionCost +
      (transportCost * d2p * (seaweed_ww + equipment)) / seaweed_dw
    )
  } else {
    return (
      growthCost +
      (transportCost *
        (d2sink * seaweed_ww + 2.0 * d2sink * equipment + d2p * equipment)) /
        seaweed_dw
    )
  }
}

export const calculateBenefit = (target, values, parameters) => {
  const carbon_fraction = 0.248
  const carbon_to_co2 = 3.67

  const { seaweed_dw, d2p, fseq_transport: fseq, d2sink, species } = values
  const seaweed_ww = seaweed_dw / 0.1
  const equipment = SPECIES_EQUIPMENT_COSTS[species]

  const {
    avoidedEmissions,
    transportEmissions,
    conversionEmissions,
    maintenanceEmissions,
    removalRate,
  } = parameters

  const growthEmissions =
    (transportEmissions * equipment * d2p +
      d2p * 24.0 * maintenanceEmissions +
      50.0 * maintenanceEmissions) /
    seaweed_dw
  let grossBenefit
  let transport = 0
  let conversion = 0
  if (target === 'products') {
    // calculate climate benefit of products
    grossBenefit = avoidedEmissions
    transport =
      (transportEmissions * d2p * (seaweed_ww + equipment)) / seaweed_dw
    conversion = conversionEmissions
  } else {
    // calculate climate benefit of sinking
    grossBenefit = carbon_fraction * carbon_to_co2 * fseq * removalRate
    transport =
      (transportEmissions *
        (d2sink * seaweed_ww + 2.0 * d2sink * equipment + d2p * equipment)) /
      seaweed_dw
  }

  const grossEmissions = growthEmissions + transport + conversion
  return grossBenefit - grossEmissions
}
