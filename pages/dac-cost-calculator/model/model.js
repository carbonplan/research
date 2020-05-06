
// Constants
const HOURS_PER_DAY = 24
const DAYS_PER_YEAR = 365
const HOURS_PER_YEAR = DAYS_PER_YEAR * HOURS_PER_DAY
const MILLION = 1e6
const KW_TO_MW = 1000
const LB_TO_METRIC_TON = 0.000453592

const pmt = (rate, nper, pv) => {
  const fv = 0;
  const when = 0;  // i.e. 'end'
  const temp = math.pow((1 + rate), nper);

  let fact;
  if (rate == 0.) {
    fact = nper;
  } else {
    fact = (1 + rate * when) * (temp - 1) / rate;
  }
  return -(fv + pv * temp) / fact
}

class DacComponent {
  constructor(params) {
    this.params = params;
  }
  // compute this components values
  compute() {
    return {};
  }
  // replaces cells =Q5:AB158 in `WACC Table Project Lead Time`
  lead_time_mult(time) {
    rate = this.params["WACC [%]"];
    // time = int(time);

    // vals = np.zeros(time)
    // vals[0] = (1 + rate) * (1 / time)
    // for t in range(1, time):
    //   vals[t] = np.sum(vals[: t]) * rate + (1 + rate) * (1 / time)
    // return vals.sum()
    return 1.  // TODO
  }
  // calculate the capital recovery factor
  recovery_factor() {
    return -pmt(this.params["WACC [%]"], this.params["Economic Lifetime [years]"], 1);
  }
}

// Battery Section Component
export class BatterySection extends DacComponent {
  constructor(params) {
    super(params)
    this.tech = this.params["Technology"]["Battery Storage"]
  }

  // compute the battery section values
  compute(evals) {

    const v = {}

    // Battery Capacity[MWh]
    // TODO: move to params(sheets['report_data']['C64'])
    v["Battery Capacity [MWh]"] = e_vals["Base Energy Requierement [MW]"] * (HOURS_PER_DAY * (1 - e_vals["Planned Capacity Factor"]))

    // Round Trip Effciency
    v["Round Trip Effciency"] = this.tech["Efficiency (Thermal or Round Trip)"]

    // Battery Capacity Needed[MWh]
    v["Battery Capacity Needed [MWh]"] = v["Battery Capacity [MWh]"] / v["Round Trip Effciency"]

    // Increased[MWh]
    v["Increased [MWh]"] = v["Battery Capacity Needed [MWh]"] - v["Battery Capacity [MWh]"]

    // Increased Solar / Wind Need
    v["Increased Need [MW]"] = v["Increased [MWh]"] / (HOURS_PER_DAY * e_vals["Planned Capacity Factor"])

    // Battery Capital Cost[M$]
    v["Battery Capital Cost [M$]"] = (this.tech["Base Plant Cost [M$]"] * (v["Battery Capacity Needed [MWh]"] / this.tech["Battery Capacity [MWhr]"]) ** this.tech["Scaling Factor"])

    // Battery Fixed O & M[$ / tCO2eq]
    v["Battery Fixed O&M [$/tCO2eq]"] = ((this.tech["Base Plant Annual Fixed O&M [$M]"] * (v["Battery Capacity Needed [MWh]"] / this.tech["Battery Capacity [MWhr]"]) ** this.tech["Scaling Factor"]) * MILLION / this.params["Scale [tCO2/year]"])

    // Battery Variable O & M[$ / tCO2eq]
    v["Battery Variable O&M [$/tCO2eq]"] = (this.tech["Variable O&M [$/MWhr]"] * v["Battery Capacity [MWh]"] / this.params["Scale [tCO2/year]"] * DAYS_PER_YEAR )

    return v
  }
}

// EnergySection Section Component
export class EnergySection extends DacComponent {
  constructor(source, battery, params) {
    super(params)
    this.source = source
    this.battery = battery
    this.tech = this.params["Technology"][source]
  }

  // compute the battery section values
  compute(evals) {

    const v = {}

    // Operational Hours[h / yr]
    operational_hours = this.params["DAC Capacity Factor"] * HOURS_PER_YEAR

    // Planned Capacity Factor
    v["Planned Capacity Factor"] = this.tech["Availability"]

    // Electric Power Requierement[MW](aka low value case in C1)
    v["Base Energy Requierement [MW]"] = this.params["Base Energy Requierement [MW]"]

    // calcuate battery params now
    if (this.battery) {
      this.battery.compute(v)
      v.update(this.battery.values)  // TODO
    }

    // Plant Size[MW]
    v["Plant Size [MW]"] = v["Base Energy Requierement [MW]"] / v["Planned Capacity Factor"]
    if (this.battery) {
      v["Plant Size [MW]"] += v["Increased Need [MW]"]
    }

    // Overnight Cost[M$]
    v["Overnight Cost [M$]"] = (this.tech["Base Plant Cost [M$]"] * (v["Plant Size [MW]"] / this.tech["Plant Size [MW]"]) ** this.tech["Scaling Factor"])

    // Lead Time Multiplier
    v["Lead Time Multiplier"] = this.lead_time_mult(this.tech["Lead Time [Years]"])

    // Capital Cost[M$]
    v["Capital Cost [M$]"] = v["Overnight Cost [M$]"] * v["Lead Time Multiplier"]

    // Total Capital Cost[M$]
    v["Total Capital Cost [M$]"] = v["Capital Cost [M$]"]
    if (this.battery) {
      v["Total Capital Cost [M$]"] += v["Battery Capital Cost [M$]"]
    }

    // Annual Capital Recovery Factor
    annual_capital_recovery_factor = this.recovery_factor()

    // Capital Recovery[$ / tCO2eq]
    v["Capital Recovery [$/tCO2eq]"] = (v["Total Capital Cost [M$]"] * annual_capital_recovery_factor * MILLION / this.params["Scale [tCO2/year]"])

    // Power Fixed O & M[$ / tCO2eq]
    v["Power Fixed O&M [$/tCO2eq]"] = ((this.tech["Base Plant Annual Fixed O&M [$M]"] * (v["Plant Size [MW]"] / this.tech["Plant Size [MW]"]) ** this.tech["Scaling Factor"] ) * MILLION / this.params["Scale [tCO2/year]"])

    // Power Variable O & M[$ / tCO2eq]
    v["Power Variable O&M [$/tCO2eq]"] = (this.tech["Variable O&M [$/MWhr]"] * v["Plant Size [MW]"] * operational_hours / this.params["Scale [tCO2/year]"])

    // Total Fixed O & M[$ / tCO2eq]
    v["Total Fixed O&M [$/tCO2eq]"] = v["Power Fixed O&M [$/tCO2eq]"]
    if (this.battery) {
      v["Total Fixed O&M [$/tCO2eq]"] += v["Battery Fixed O&M [$/tCO2eq]"]
    }

    // Total Variable O & M[$ / tCO2eq]
    v["Total Variable O&M [$/tCO2eq]"] = v["Power Variable O&M [$/tCO2eq]"]
    if (this.battery) {
      v["Total Variable O&M [$/tCO2eq]"] += v["Battery Variable O&M [$/tCO2eq]"]
    }

    // Natural Gas Use[mmBTU / tCO2eq]
    heat_rate = this.tech["Final Heat Rate [BTU/kWh]"]
    if (heat_rate) {
      v["Natural Gas Use [mmBTU/tCO2eq]"] = (operational_hours * v["Plant Size [MW]"] * KW_TO_MW * this.tech["Final Heat Rate [BTU/kWh]"] / MILLION / this.params["Scale [tCO2/year]"])
    } else {
      v["Natural Gas Use [mmBTU/tCO2eq]"] = 0.0
    }

    // Natural Gas Cost[$ / tCO2eq]
    v["Natural Gas Cost [$/tCO2eq]"] = (v["Natural Gas Use [mmBTU/tCO2eq]"] * this.params["Natural Gas Cost [$/mmBTU]"])

    // Emitted tCO2eq / tCO2
    v["Emitted tCO2eq/tCO2"] = (v["Natural Gas Use [mmBTU/tCO2eq]"] * this.tech["Total CO2 eq [lb/mmbtu]"] * LB_TO_METRIC_TON * (1 - this.tech["Capture Efficiency"]) )

    // Total Cost[$ / tCO2eq gross]
    v["Total Cost [$/tCO2eq gross]"] = (v["Capital Recovery [$/tCO2eq]"] + v["Total Fixed O&M [$/tCO2eq]"] + v["Total Variable O&M [$/tCO2eq]"] )

    // Total Cost[$ / tCO2eq net]
    v["Total Cost [$/tCO2eq net]"] = v["Total Cost [$/tCO2eq gross]"] / (1 - v["Emitted tCO2eq/tCO2"])  // TODO: K62 is the tCO2eq / tCO2 field from the thermal section

    return v
  }
}


// DacSection Section Component
export class DacSection extends DacComponent {
  constructor(params) {
    super(params)
  }

  // compute the battery section values
  compute(evals) {

    const v = {}
    
    // Total Overnight Capital Cost[M$]
    v["Total Capital Cost [M$]"] = self._params["Total Capex [$]"]

    // Lead Time Multiplier
    v["Lead Time Multiplier"] = self.lead_time_mult(self._params["DAC Section Lead Time [years]"]
    )

    // Capital Cost(including Lead Time)[M$]
    v["Capital Cost (including Lead Time) [M$]"] = (v["Total Capital Cost [M$]"] * v["Lead Time Multiplier"])

    // Capital Recovery[$ / tCO2eq]
    v["Capital Recovery [$/tCO2eq]"] = (v["Total Capital Cost [M$]"] * self.recovery_factor() * MILLION / self._params["Scale [tCO2/year]"])

    // Fixed O + M[$ / tCO2eq]
    v["Fixed O+M [$/tCO2eq]"] = self._params["Fixed O+M Costs [$/tCO2]"]

    // Variable O + M[$ / tCO2eq]
    v["Variable O+M [$/tCO2eq]"] = self._params["Varible O+M Cost [$/tCO2]"]

    // Total Cost[$ / tCO2]
    v["Total Cost [$/tCO2]"] = (v["Capital Recovery [$/tCO2eq]"] + v["Fixed O+M [$/tCO2eq]"] + v["Variable O+M [$/tCO2eq]"])

    // // Total Cost[$ / tCO2 net removed]
    // v['Total Cost [$/tCO2 net removed]'] = v['Total Cost [$/tCO2]'] / (
    //     1 - (ev['Emitted tCO2eq/tCO2'] + tv['Emitted tCO2eq/tCO2'])
    // )

    return v
  }
}

// DacModel Section Component
export class DacModel extends DacComponent {
  constructor(electric, thermal, dac, params) {
    super(params)
    this.electric = electric
    this.thermal = thermal
    this.dac = dac
  }

  // compute the battery section values
  compute(evals) {

    const v = {}

    return v
  }
}
