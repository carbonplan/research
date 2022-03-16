import {
  SPECIES,
  SPECIES_EQUIPMENT_COSTS,
  SPECIES_LINE_DENSITIES,
  LAYER_UNIFORMS,
} from './constants'

const speciesDefinition = `
float seaweed_dw = harv_preferred;
float seaweed_ww = seaweed_dw / 0.1;
float nharv = nharv_preferred;
float equipment;
float lineDensity;
${SPECIES.map(
  (species, i) => `
if (species_preferred == ${i.toFixed(1)}) {
  equipment = ${SPECIES_EQUIPMENT_COSTS[species].toFixed(2)};
  lineDensity = ${SPECIES_LINE_DENSITIES[species].toFixed(2)};
}
`
).join('')}
`

const defaultLayers = Object.keys(LAYER_UNIFORMS)
  .filter((l) => !['mitigationCost', 'cost', 'benefit'].includes(l))
  .map(
    (l) => `
    if (${LAYER_UNIFORMS[l]} == 1.0) {
      value = ${l};
    }
  `
  )
  .join('')

const frag = `
${speciesDefinition}
float value;

// invert depth
float depth = -1.0 * elevation;

// constants
float carbon_fraction = 0.248;
float carbon_to_co2 = 3.67;

${defaultLayers}

if (costLayer == 1.0 || benefitLayer == 1.0 || mitigationCostLayer == 1.0) {
  float productionCost;
  float netBenefit;

  // filter points
  bool lowGrowth = seaweed_dw == fillValue || seaweed_dw < 0.2;
  bool lowSink = sinkingTarget == 1.0 && d2sink == fillValue;

  bool sensitiveAreaMasked = false;
  if (sensitiveAreaMask > 0.0 && sensitiveAreaMask == sensitive_areas) {
    sensitiveAreaMasked = true;
  }
  if (sensitiveAreaMask == 3.0 && sensitive_areas > 0.0) {
    sensitiveAreaMasked = true;
  }


  if (lowGrowth || lowSink || sensitiveAreaMasked) {
    gl_FragColor = vec4(empty, empty, empty, opacity);
    gl_FragColor.rgb *= gl_FragColor.a;
    return;
  }

  if (costLayer == 1.0 || mitigationCostLayer == 1.0) {
    // parameters
    float priceyDepth = 500.0;
    float highWaveDamage = 3.0;

    // calculate depth premium
    float depthPremium = 0.0;
    if (depth >= priceyDepth) {
      depthPremium = depth / priceyDepth;
    }

    // calculate wave premium
    float wavePremium = 0.0;
    if (wave_height >= highWaveDamage) {
      wavePremium = wave_height / highWaveDamage;
    }

    // calculate primary terms
    float capital = capex + depthPremium * capex + wavePremium * capex + lineCost * lineDensity;
    float harvest = harvestCost * nharv + transportCost * equipment * d2p;

    // combine terms
    float growthCost = (capital + opex + harvest) / seaweed_dw;
    if (productsTarget == 1.0) {
      // calculate product value
      productionCost = growthCost + conversionCost + transportCost * d2p * (seaweed_ww + equipment) / seaweed_dw;
    } else {
      // calculate sinking value
      productionCost = growthCost + transportCost * (d2sink * seaweed_ww + 2.0 * d2sink * equipment + d2p * equipment) / seaweed_dw;
    }
  }

  if (benefitLayer == 1.0 || mitigationCostLayer == 1.0) {
    float growthEmissions = (transportEmissions * equipment * d2p + d2p * 24.0 * maintenanceEmissions + 50.0 * maintenanceEmissions) / seaweed_dw;
    if (productsTarget == 1.0) {
      // calculate climate benefit of products
      netBenefit = avoidedEmissions - transportEmissions * d2p * (seaweed_ww + equipment) / seaweed_dw - conversionEmissions - growthEmissions;
    } else {
      // calculate climate benefit of sinking
      netBenefit = carbon_fraction * carbon_to_co2 * fseq_transport * removalRate - transportEmissions * (d2sink * seaweed_ww + 2.0 * d2sink * equipment + d2p * equipment) / seaweed_dw - growthEmissions;
    }

    if (netBenefit < 0.0) {
      gl_FragColor = vec4(empty, empty, empty, opacity);
      gl_FragColor.rgb *= gl_FragColor.a;
      return;
    }
  }

  if (mitigationCostLayer == 1.0) {
    float cost = productionCost;
    if (productsTarget == 1.0) {
      cost -= productValue;
    }
    value = cost / netBenefit;
  }

  if (costLayer == 1.0) {
    value = productionCost;
  }

  if (benefitLayer == 1.0) {
    value = netBenefit;
  }
}

if (value == fillValue) {
  gl_FragColor = vec4(empty, empty, empty, opacity);
  gl_FragColor.rgb *= gl_FragColor.a;
  return;
}

// transform for display
float rescaled = (value - clim.x)/(clim.y - clim.x);
vec4 c = texture2D(colormap, vec2(rescaled, 1.0));
gl_FragColor = vec4(c.x, c.y, c.z, opacity);
gl_FragColor.rgb *= gl_FragColor.a;
`

export default frag
