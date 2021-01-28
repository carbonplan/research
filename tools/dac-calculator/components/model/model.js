// Constants
const HOURS_PER_DAY = 24
const DAYS_PER_YEAR = 365
const HOURS_PER_YEAR = DAYS_PER_YEAR * HOURS_PER_DAY
const MILLION = 1e6
const KW_TO_MW = 1000
const KG_TO_MT = 1000
const LB_TO_KG = 0.453592
const LB_TO_METRIC_TON = LB_TO_KG / KG_TO_MT
const GJ_TO_MMBTU = 0.94709
const MWH_TO_MWH_GJ_PER_YEAR = 3.6
const PERFECT_EFFICIENT_HEAT_RATE = 3412.14 // 100 % Efficienct Heat Rate

const nasReport511 = (req, scale, capacityFactor) => {
  // TODO: a few missing fields here to be expanded
  const table = {}
  table['capacity'] = 1 // Hardcoded
  table['thermal'] = req * scale
  table['reqThermal'] = req * GJ_TO_MMBTU
  table['naturalGas'] = table['reqThermal'] * scale
  const C48 = 117
  const C50 = C48 * LB_TO_KG
  table['emissions'] =
    ((table['reqThermal'] * C50) / KG_TO_MT) * table['capacity'] * MILLION
  const H37 = 0.522 // TODO
  table['necessaryPower'] = table['emissions'] * H37
  table['powerPlatReq'] =
    table['necessaryPower'] / (HOURS_PER_YEAR * capacityFactor)
  return table
}

const pmt = (rate, nper, pv) => {
  const fv = 0
  const when = 0 // i.e. 'end'
  const temp = (1 + rate) ** nper

  let fact
  if (rate == 0) {
    fact = nper
  } else {
    fact = ((1 + rate * when) * (temp - 1)) / rate
  }
  return -(fv + pv * temp) / fact
}

const sum = (arr) => {
  return arr.reduce(function (a, b) {
    return a + b
  }, 0)
}

class DacComponent {
  constructor() {}

  // compute this components values
  compute() {
    return {}
  }

  setParams(params) {
    this.params = params
  }

  log(...args) {
    if (this.params['log']) {
      //console.log(args)
    }
  }

  leadTimeMult(time) {
    const rate = this.params['WACC [%]']
    const vals = [(1 + rate) * (1 / time)]

    for (var t = 1; t < time; t++) {
      vals.push(sum(vals.slice(0, t)) * rate + (1 + rate) * (1 / time))
    }
    return sum(vals)
  }

  // calculate the capital recovery factor
  recoveryFactor() {
    return -pmt(
      this.params['WACC [%]'],
      this.params['Economic Lifetime [years]'],
      1
    )
  }
}

// Battery Section Component
export class BatterySection extends DacComponent {
  setParams(params) {
    this.params = params

    // unpack a few parameters
    this.params['Technology']['Battery Storage']['Base Plant Cost [M$]'] =
      (this.params['Technology']['Battery Storage']['Overnight Cost [$/kW]'] *
        this.params['Technology']['Battery Storage']['Plant Size [MW]'] *
        KW_TO_MW) /
      MILLION
    this.params['Technology']['Battery Storage'][
      'Base Plant Annual Fixed O&M [$M]'
    ] =
      (this.params['Technology']['Battery Storage']['Fixed O&M [$/kW-yr]'] *
        this.params['Technology']['Battery Storage']['Plant Size [MW]'] *
        KW_TO_MW) /
      MILLION

    this.tech = this.params['Technology']['Battery Storage']
  }

  // compute the battery section values
  compute(eVals) {
    const v = {}

    // Battery Capacity[MWh]
    v['Battery Capacity [MWh]'] =
      eVals['Base Energy Requirement [MW]'] *
      (HOURS_PER_DAY * (1 - eVals['Planned Capacity Factor']))

    // Round Trip Efficiency
    v['Round Trip Efficiency'] = this.tech['Efficiency (Thermal or Round Trip)']

    // Battery Capacity Needed[MWh]
    v['Battery Capacity Needed [MWh]'] =
      v['Battery Capacity [MWh]'] / v['Round Trip Efficiency']

    // Increased[MWh]
    v['Increased [MWh]'] =
      v['Battery Capacity Needed [MWh]'] - v['Battery Capacity [MWh]']

    // Increased Solar / Wind Need
    v['Increased Need [MW]'] =
      v['Increased [MWh]'] / (HOURS_PER_DAY * eVals['Planned Capacity Factor'])

    // Battery Capital Cost [M$]
    v['Battery Capital Cost [M$]'] =
      this.tech['Base Plant Cost [M$]'] *
      (v['Battery Capacity Needed [MWh]'] /
        this.tech['Battery Capacity [MWhr]']) **
        this.tech['Scaling Factor']

    // Battery Fixed O&M [$/tCO2eq]
    v['Battery Fixed O&M [$/tCO2eq]'] =
      (this.tech['Base Plant Annual Fixed O&M [$M]'] *
        (v['Battery Capacity Needed [MWh]'] /
          this.tech['Battery Capacity [MWhr]']) **
          this.tech['Scaling Factor'] *
        MILLION) /
      this.params['Scale [tCO2/year]']

    // Battery Variable O&M [$/tCO2eq]
    v['Battery Variable O&M [$/tCO2eq]'] =
      ((this.tech['Variable O&M [$/MWhr]'] * v['Battery Capacity [MWh]']) /
        this.params['Scale [tCO2/year]']) *
      DAYS_PER_YEAR

    return v
  }
}

// EnergySection Section Component
export class EnergySection extends DacComponent {
  constructor(source, battery) {
    super()
    this.source = source
    this.battery = battery
  }

  setParams(baseReq, params) {
    this.params = params

    // unpack a few parameters
    this.params['Technology'][this.source]['Base Plant Cost [M$]'] =
      (this.params['Technology'][this.source]['Overnight Cost [$/kW]'] *
        this.params['Technology'][this.source]['Plant Size [MW]'] *
        KW_TO_MW) /
      MILLION
    this.params['Technology'][this.source]['Base Plant Annual Fixed O&M [$M]'] =
      (this.params['Technology'][this.source]['Fixed O&M [$/kW-yr]'] *
        this.params['Technology'][this.source]['Plant Size [MW]'] *
        KW_TO_MW) /
      MILLION
    if (['Advanced NGCC', 'NGCC w/ CCS', 'Nuclear'].includes(this.source)) {
      this.params['Technology'][this.source][
        'Efficiency (Thermal or Round Trip)'
      ] =
        this.params['Technology'][this.source]['Final Heat Rate [BTU/kWh]'] /
        PERFECT_EFFICIENT_HEAT_RATE
    }

    this.baseReq = baseReq
    this.tech = this.params['Technology'][this.source]
    if (this.battery) {
      this.battery.setParams(this.params)
    }
  }

  // compute the energy section values
  compute() {
    let v = {}

    // Operational Hours[h / yr]
    const operationalHours = this.params['DAC Capacity Factor'] * HOURS_PER_YEAR

    // Planned Capacity Factor
    v['Planned Capacity Factor'] = this.tech['Availability']

    // Electric Power Requirement[MW](aka low value case in C1)
    v['Base Energy Requirement [MW]'] = this.baseReq

    // calculate battery params now
    if (this.battery) {
      // TODO: check that this is the correct value to pass to the battery computation
      const bat = this.battery.compute(v)
      v = Object.assign(v, bat)
    }

    // Plant Size[MW]
    v['Plant Size [MW]'] =
      v['Base Energy Requirement [MW]'] / v['Planned Capacity Factor']
    if (this.battery) {
      v['Plant Size [MW]'] += v['Increased Need [MW]']
    }

    // Overnight Cost [M$]
    // Note to Noah: We seem to need plant size here so we can do this scaling correctly.
    // I've added the field back to tech-data but it isn't shown in the interactive.
    v['Overnight Cost [M$]'] =
      this.tech['Base Plant Cost [M$]'] *
      (v['Plant Size [MW]'] / this.tech['Plant Size [MW]']) **
        this.tech['Scaling Factor']

    // Lead Time Multiplier
    v['Lead Time Multiplier'] = this.leadTimeMult(
      this.tech['Lead Time [Years]'].toFixed(0)
    )

    // Capital Cost [M$]
    v['Capital Cost [M$]'] =
      v['Overnight Cost [M$]'] * v['Lead Time Multiplier']

    // Total Capital Cost [M$]
    v['Total Capital Cost [M$]'] = v['Capital Cost [M$]']
    this.log(this.battery)
    if (this.battery) {
      v['Total Capital Cost [M$]'] += v['Battery Capital Cost [M$]']
    }

    // Annual Capital Recovery Factor
    const annualCapitalRecoveryFactor = this.recoveryFactor()

    // Capital Recovery[$/tCO2eq]
    v['Capital Recovery [$/tCO2eq]'] =
      (v['Total Capital Cost [M$]'] * annualCapitalRecoveryFactor * MILLION) /
      this.params['Scale [tCO2/year]']

    // Power Fixed O&M [$/tCO2eq]
    v['Power Fixed O&M [$/tCO2eq]'] =
      (this.tech['Base Plant Annual Fixed O&M [$M]'] *
        (v['Plant Size [MW]'] / this.tech['Plant Size [MW]']) **
          this.tech['Scaling Factor'] *
        MILLION) /
      this.params['Scale [tCO2/year]']

    // Power Variable O&M [$/tCO2eq]
    v['Power Variable O&M [$/tCO2eq]'] =
      (this.tech['Variable O&M [$/MWhr]'] *
        v['Plant Size [MW]'] *
        operationalHours) /
      this.params['Scale [tCO2/year]']

    // Total Fixed O&M [$/tCO2eq]
    v['Total Fixed O&M [$/tCO2eq]'] = v['Power Fixed O&M [$/tCO2eq]']
    if (this.battery) {
      v['Total Fixed O&M [$/tCO2eq]'] += v['Battery Fixed O&M [$/tCO2eq]']
    }

    // Total Variable O&M [$/tCO2eq]
    v['Total Variable O&M [$/tCO2eq]'] = v['Power Variable O&M [$/tCO2eq]']
    if (this.battery) {
      v['Total Variable O&M [$/tCO2eq]'] += v['Battery Variable O&M [$/tCO2eq]']
    }

    // Natural Gas Use[mmBTU / tCO2eq]
    const heatRate = this.tech['Final Heat Rate [BTU/kWh]']
    if (heatRate) {
      v['Natural Gas Use [mmBTU/tCO2eq]'] =
        (operationalHours *
          v['Plant Size [MW]'] *
          KW_TO_MW *
          this.tech['Final Heat Rate [BTU/kWh]']) /
        MILLION /
        this.params['Scale [tCO2/year]']
    } else {
      v['Natural Gas Use [mmBTU/tCO2eq]'] = 0.0
    }

    // Natural Gas Cost [$/tCO2eq]
    v['Natural Gas Cost [$/tCO2eq]'] =
      v['Natural Gas Use [mmBTU/tCO2eq]'] *
      this.params['Natural Gas Cost [$/mmBTU]']

    // Emitted tCO2eq / tCO2
    if (v['Natural Gas Use [mmBTU/tCO2eq]'] > 0) {
      v['Emitted [tCO2eq/tCO2]'] =
        v['Natural Gas Use [mmBTU/tCO2eq]'] *
        this.tech['Total CO2 eq [lb/mmbtu]'] *
        LB_TO_METRIC_TON *
        (1 - this.tech['Capture Efficiency'])
    } else {
      v['Emitted [tCO2eq/tCO2]'] = 0
    }

    // Total Cost [$/tCO2eq gross]
    v['Total Cost [$/tCO2eq gross]'] =
      v['Capital Recovery [$/tCO2eq]'] +
      v['Total Fixed O&M [$/tCO2eq]'] +
      v['Total Variable O&M [$/tCO2eq]']

    // Total Cost [$/tCO2eq net]
    this.log(v['Total Cost [$/tCO2eq gross]'], v['Emitted [tCO2eq/tCO2]'])
    v['Total Cost [$/tCO2eq net]'] =
      v['Total Cost [$/tCO2eq gross]'] / (1 - v['Emitted [tCO2eq/tCO2]']) // TODO: K62 is the tCO2eq / tCO2 field from the thermal section

    return v
  }
}

export class NgThermalSection extends EnergySection {
  compute() {
    let v = {}

    v['Plant Size [MW]'] = 0
    v['Total Capital Cost [M$]'] = 0
    v['Capital Recovery [$/tCO2eq]'] = 0
    v['Total Fixed O&M [$/tCO2eq]'] = 0
    v['Total Variable O&M [$/tCO2eq]'] = 0

    const energyReqTable = nasReport511(
      this.params['Thermal [GJ/tCO2]'],
      this.params['Scale [tCO2/year]'],
      this.tech['Capacity Factor']
    )

    v['Natural Gas Use [mmBTU/tCO2eq]'] =
      energyReqTable['naturalGas'] /
      (energyReqTable['capacity'] * this.params['Scale [tCO2/year]'])

    // Natural Gas Cost [$ / tCO2eq]
    v['Natural Gas Cost [$/tCO2eq]'] =
      this.params['Natural Gas Cost [$/mmBTU]'] *
      v['Natural Gas Use [mmBTU/tCO2eq]']

    // Assume 100 % capture from oxy fired kiln
    v['Emitted [tCO2eq/tCO2]'] = 0.0

    return v
  }
}

// DacSection Section Component
export class DacSection extends DacComponent {
  // compute the battery section values
  compute() {
    const v = {}

    // Total Overnight Capital Cost [M$]
    v['Total Capital Cost [M$]'] =
      (this.params['Capex [$]'] * this.params['Scale [tCO2/year]']) / MILLION

    // Lead Time Multiplier
    v['Lead Time Multiplier'] = this.leadTimeMult(
      this.params['DAC Section Lead Time [years]']
    )

    // Capital Cost(including Lead Time)[M$]
    v['Capital Cost (including Lead Time) [M$]'] =
      v['Total Capital Cost [M$]'] * v['Lead Time Multiplier']

    // Capital Recovery[$/tCO2eq]
    v['Capital Recovery [$/tCO2eq]'] =
      (v['Total Capital Cost [M$]'] * this.recoveryFactor() * MILLION) /
      this.params['Scale [tCO2/year]']

    // Fixed O&M [$/tCO2eq]
    v['Fixed O&M [$/tCO2eq]'] = this.params['Fixed O&M Costs [$/tCO2]']

    // Variable O&M [$/tCO2eq]
    v['Variable O&M [$/tCO2eq]'] = this.params['Variable O&M Cost [$/tCO2]']

    // Total Cost [$/tCO2]
    v['Total Cost [$/tCO2]'] =
      v['Capital Recovery [$/tCO2eq]'] +
      v['Fixed O&M [$/tCO2eq]'] +
      v['Variable O&M [$/tCO2eq]']

    // Total Cost [$/tCO2 net removed]
    v['Total Cost [$/tCO2 net removed]'] =
      v['Total Cost [$/tCO2]'] /
      (1 - (v['Emitted [tCO2eq/tCO2]'] + v['Emitted [tCO2eq/tCO2]']))

    return v
  }
}

// DacModel Section Component
export class DacModel extends DacComponent {
  constructor(electric, thermal, dac) {
    super()
    this.electric = electric
    this.thermal = thermal
    this.dac = dac
  }

  setParams(params) {
    this.params = params
    const electric_req =
      (params['Electric [GJ/tCO2]'] * params['Scale [tCO2/year]']) /
      MWH_TO_MWH_GJ_PER_YEAR /
      (HOURS_PER_YEAR * params['DAC Capacity Factor'])

    this.electric.setParams(electric_req, this.params)
    const thermal_req =
      (params['Thermal [GJ/tCO2]'] * params['Scale [tCO2/year]']) /
      MWH_TO_MWH_GJ_PER_YEAR /
      (HOURS_PER_YEAR * params['DAC Capacity Factor'])

    this.thermal.setParams(thermal_req, this.params)
    this.dac.setParams(this.params)
  }

  // compute the combined power block requirements
  combinedPowerBlockRequirements(source, ev, tv) {
    const v = {}

    const tech = this.params['Technology'][source]

    // Operational Hours[h / yr]
    const operationalHours = this.params['DAC Capacity Factor'] * HOURS_PER_YEAR

    // Power Plant Size
    v['Plant Size [MW]'] = ev['Plant Size [MW]'] + tv['Plant Size [MW]']

    // Overnight Cost [M$]
    v['Overnight Cost [M$]'] =
      tech['Base Plant Cost [M$]'] *
      (v['Plant Size [MW]'] / tech['Plant Size [MW]']) ** tech['Scaling Factor']

    // Lead Time Multiplier
    v['Lead Time Multiplier'] = this.leadTimeMult(tech['Lead Time [Years]'])

    // Capital Cost [M$]
    v['Capital Cost [M$]'] =
      v['Overnight Cost [M$]'] * v['Lead Time Multiplier']

    // Power Fixed O&M [$/tCO2eq]
    v['Power Fixed O&M [$/tCO2eq]'] =
      (tech['Base Plant Annual Fixed O&M [$M]'] *
        (v['Plant Size [MW]'] / tech['Plant Size [MW]']) **
          tech['Scaling Factor'] *
        MILLION) /
      this.params['Scale [tCO2/year]']

    // Power Variable O&M [$/tCO2eq]
    v['Power Variable O&M [$/tCO2eq]'] =
      (tech['Variable O&M [$/MWhr]'] *
        v['Plant Size [MW]'] *
        operationalHours) /
      this.params['Scale [tCO2/year]']

    // Battery Capacity[MWh]
    v['Battery Capacity [MWh]'] =
      ev['Battery Capacity Needed [MWh]'] + tv['Battery Capacity Needed [MWh]']

    // Battery Capital Cost [M$]
    v['Battery Capital Cost [M$]'] =
      this.params['Technology']['Battery Storage']['Base Plant Cost [M$]'] *
      (v['Battery Capacity [MWh]'] /
        this.params['Technology']['Battery Storage'][
          'Battery Capacity [MWhr]'
        ]) **
        this.params['Technology']['Battery Storage']['Scaling Factor']

    // Battery Fixed O&M [$/tCO2eq]
    v['Battery Fixed O&M [$/tCO2eq]'] =
      (this.params['Technology']['Battery Storage'][
        'Base Plant Annual Fixed O&M [$M]'
      ] *
        (v['Battery Capacity [MWh]'] /
          this.params['Technology']['Battery Storage'][
            'Battery Capacity [MWhr]'
          ]) **
          this.params['Technology']['Battery Storage']['Scaling Factor'] *
        MILLION) /
      this.params['Scale [tCO2/year]']

    // Battery Variable O&M [$/tCO2eq]
    v['Battery Variable O&M [$/tCO2eq]'] =
      ((this.params['Technology']['Battery Storage']['Variable O&M [$/MWhr]'] *
        v['Battery Capacity [MWh]']) /
        this.params['Scale [tCO2/year]']) *
      DAYS_PER_YEAR

    // Total Capital Cost [M$]
    v['Total Capital Cost [M$]'] =
      v['Capital Cost [M$]'] + v['Battery Capital Cost [M$]']

    // Capital Recovery[$/tCO2eq]
    v['Capital Recovery [$/tCO2eq]'] =
      (v['Total Capital Cost [M$]'] * this.recoveryFactor() * MILLION) /
      this.params['Scale [tCO2/year]']

    // Fixed O&M [$/tCO2eq]
    v['Fixed O&M [$/tCO2eq]'] =
      v['Power Fixed O&M [$/tCO2eq]'] + v['Battery Fixed O&M [$/tCO2eq]']

    // Variable O&M [$/tCO2eq]
    v['Variable O&M [$/tCO2eq]'] =
      v['Power Variable O&M [$/tCO2eq]'] + v['Battery Variable O&M [$/tCO2eq]']

    this.log('combined', v)

    return v
  }

  // compute the total energy block costs
  totalEnergyBlockCosts(ev, tv, cv) {
    const v = {}

    // Total Power Capacity Required[MW]
    v['Total Power Capacity Required [MW]'] =
      ev['Plant Size [MW]'] + tv['Plant Size [MW]']

    // Total Battery Capacity Required[MWh]
    v['Total Battery Capacity Required [MWh]'] =
      ev['Battery Capacity Needed [MWh]'] + tv['Battery Capacity Needed [MWh]']

    // Total Capital Cost [M$]
    v['Total Capital Cost [M$]'] = cv['Total Capital Cost [M$]']

    // Capital Recovery[$/tCO2eq]
    v['Capital Recovery [$/tCO2eq]'] = cv['Capital Recovery [$/tCO2eq]']

    // Fixed O&M [$/tCO2eq]
    v['Fixed O&M [$/tCO2eq]'] = cv['Fixed O&M [$/tCO2eq]']

    // Variable O&M [$/tCO2eq]
    v['Variable O&M [$/tCO2eq]'] = cv['Variable O&M [$/tCO2eq]']

    // NG Cost [$/tCO2eq]
    v['Natural Gas Cost [$/tCO2eq]'] = 0 //(ev["Natural Gas Cost [$/tCO2eq]"] + tv["Natural Gas Cost [$/tCO2eq]"])

    // Total Cost [$/tCO2]
    v['Total Cost [$/tCO2]'] =
      v['Capital Recovery [$/tCO2eq]'] +
      v['Fixed O&M [$/tCO2eq]'] +
      v['Variable O&M [$/tCO2eq]'] +
      v['Natural Gas Cost [$/tCO2eq]']

    // Net Capture[tCO2 / yr]
    v['Net Capture [tCO2/yr]'] =
      this.params['Scale [tCO2/year]'] -
      this.params['Scale [tCO2/year]'] *
        (ev['Emitted [tCO2eq/tCO2]'] + tv['Emitted [tCO2eq/tCO2]'])

    // Total Cost [$/tCO2 net removed]
    v['Total Cost [$/tCO2 net removed]'] =
      v['Total Cost [$/tCO2]'] /
      (1 - (ev['Emitted [tCO2eq/tCO2]'] + tv['Emitted [tCO2eq/tCO2]']))
    return v
  }

  ngUtilitySection(ev, tv) {
    const uv = {}

    uv['Total Power Capacity Required (MW)'] =
      ev['Plant Size [MW]'] + tv['Plant Size [MW]']
    uv['Total Capital Cost [M$]'] =
      ev['Total Capital Cost [M$]'] + tv['Total Capital Cost [M$]']
    uv['Capital Recovery[$/tCO2eq]'] =
      ev['Capital Recovery [$/tCO2eq]'] + tv['Capital Recovery [$/tCO2eq]']
    uv['Fixed O&M [$/tCO2eq]'] =
      ev['Power Fixed O&M [$/tCO2eq]'] + tv['Total Fixed O&M [$/tCO2eq]']
    uv['Variable O&M [$/tCO2eq]'] =
      ev['Power Variable O&M [$/tCO2eq]'] + tv['Total Variable O&M [$/tCO2eq]']
    uv['Natural Gas Cost [$/tCO2eq]'] =
      ev['Natural Gas Cost [$/tCO2eq]'] + tv['Natural Gas Cost [$/tCO2eq]']

    uv['Total Cost [$/tCO2]'] =
      uv['Capital Recovery[$/tCO2eq]'] +
      uv['Fixed O&M [$/tCO2eq]'] +
      uv['Variable O&M [$/tCO2eq]'] +
      uv['Natural Gas Cost [$/tCO2eq]']

    uv['CO2 Emitted[tCO2/tCO2]'] =
      ev['Emitted [tCO2eq/tCO2]'] + tv['Emitted [tCO2eq/tCO2]']

    uv['Total Cost [$/tCO2 Net Removed]'] =
      uv['Total Cost [$/tCO2]'] / (1 - uv['CO2 Emitted[tCO2/tCO2]'])
    // us['Total CO2 Captured[tCO2 / yr]'] =  ev['XXX'] + tv['XXX']

    return uv
  }

  // compute the composite DAC model's values
  compute() {
    const v = {}
    const ev = this.electric.compute()
    const tv = this.thermal.compute()
    this.log('ev', ev)
    this.log('tv', tv)

    let cv
    let tev
    let ngv

    if (this.electric.source == this.thermal.source) {
      cv = this.combinedPowerBlockRequirements(this.electric.source, ev, tv)
      tev = this.totalEnergyBlockCosts(ev, tv, cv)
    } else if (
      this.electric.source == 'NGCC w/ CCS' &&
      this.electric.source == 'NGCC w/ CCS'
    ) {
      tev = this.ngUtilitySection(ev, tv)
    } else {
      throw 'TODO: handle case with mismatched energy sources'
    }

    const dv = this.dac.compute()

    // Total Capital Cost [M$]
    v['Total Capital Cost [M$]'] =
      tev['Total Capital Cost [M$]'] +
      dv['Capital Cost (including Lead Time) [M$]']

    // Capital Recovery [$/tCO2eq]
    // = K86 * 'Economic Parameters'!C6 * 10 ^ 6 / 'Report Data'!C3
    v['Capital Recovery [$/tCO2eq]'] =
      (v['Total Capital Cost [M$]'] * this.recoveryFactor() * MILLION) /
      this.params['Scale [tCO2/year]']

    // Fixed O&M [$/tCO2eq]
    v['Fixed O&M [$/tCO2eq]'] =
      tev['Fixed O&M [$/tCO2eq]'] + dv['Fixed O&M [$/tCO2eq]']

    // Variable O&M [$/tCO2eq]
    v['Variable O&M [$/tCO2eq]'] =
      tev['Variable O&M [$/tCO2eq]'] + dv['Variable O&M [$/tCO2eq]']

    // Natural Gas Cost [$/tCO2]
    v['Natural Gas Cost [$/tCO2]'] = tev['Natural Gas Cost [$/tCO2eq]']

    // Total Cost [$/tCO2]
    v['Total Cost [$/tCO2]'] =
      v['Capital Recovery [$/tCO2eq]'] +
      v['Fixed O&M [$/tCO2eq]'] +
      v['Variable O&M [$/tCO2eq]'] +
      v['Natural Gas Cost [$/tCO2]']

    // Total Cost [$/tCO2 Net Removed]
    this.log(
      tev['Total Cost [$/tCO2 net removed]'],
      dv['Total Cost [$/tCO2 net removed]']
    )
    v['Total Cost [$/tCO2 Net Removed]'] =
      tev['Total Cost [$/tCO2 net removed]'] +
      dv['Total Cost [$/tCO2 net removed]']

    this.log('compute all', v)

    return v
  }
}
