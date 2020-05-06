const dacData = {
  "Scale [tCO2/year]": 1000000,
  "DAC Capacity Factor": 0.9,
  "DAC Section Lead Time [years]": 3,
  "Total Capex [$]": 936,
  "Electric Power Requierement [MW]": 46.6,
  "Thermal [GJ/tCO2]": 6.64,
  "Fixed O+M Costs [$/tCO2]": 34,
  "Varible O+M Cost [$/tCO2]": 4,
  "Economic Lifetime [years]": 20,
  "WACC [%]": 0.085,
  "Natural Gas Cost [$/mmBTU]": 3.43,
  "Technology": {
    "Wind": {
      "Overnight Cost [$/kW]": 1319.0,
      "Plant Size [MW]": 200.0,
      "Base Plant Cost [M$]": 263.8,
      "Battery Capacity [MWhr]": null,
      "Lead Time [Years]": 3.0,
      "Variable O&M [$/MWhr]": 0.0,
      "Fixed O&M [$/kW-yr]": 26.22,
      "Base Plant Annual Fixed O&M [$M]": 5.24,
      "Final Heat Rate [BTU/kWh]": null,
      "Capacity Factor": 43.0,
      "SO2 [lbs/mmbtu]": 0.0,
      "NOx [lbs/mmbtu]": 0.0,
      "CO2 [lbs/mmbtu]": 0.0,
      "Efficiency (Thermal or Round Trip)": null,
      "SO2 in CO2 eq [lbs/mmbtu]": null,
      "NOx in CO2 eq [lbs/mmbtu]": null,
      "CO2 in CO2 eq [lbs/mmbtu]": null,
      "Total CO2 eq [lb/mmbtu]": 0.0,
      "Total NAS Report [gCO2/kWh]": 0.0,
      "Data Planned Avaliability": 43.0,
      "Availability": 0.52,
      "Scaling Factor": 0.95,
      "Capture Efficiency": 0.0
    },
    "Advanced NGCC": {
      "Overnight Cost [$/kW]": 954.0,
      "Plant Size [MW]": 1083.0,
      "Base Plant Cost [M$]": 1033.2,
      "Battery Capacity [MWhr]": null,
      "Lead Time [Years]": 3.0,
      "Variable O&M [$/MWhr]": 1.86,
      "Fixed O&M [$/kW-yr]": 12.15,
      "Base Plant Annual Fixed O&M [$M]": 13.16,
      "Final Heat Rate [BTU/kWh]": 6370.0,
      "Capacity Factor": 87.0,
      "SO2 [lbs/mmbtu]": 0.001,
      "NOx [lbs/mmbtu]": 0.0075,
      "CO2 [lbs/mmbtu]": 117.0,
      "Efficiency (Thermal or Round Trip)": 0.54,
      "SO2 in CO2 eq [lbs/mmbtu]": 0.0,
      "NOx in CO2 eq [lbs/mmbtu]": 1.99,
      "CO2 in CO2 eq [lbs/mmbtu]": 117.0,
      "Total CO2 eq [lb/mmbtu]": 119.0,
      "Total NAS Report [gCO2/kWh]": 344.0,
      "Data Planned Avaliability": 87.0,
      "Availability": 1.0,
      "Scaling Factor": 0.7,
      "Capture Efficiency": 0.0
    },
    "NGCC w/ CCS": {
      "Overnight Cost [$/kW]": 2569.0,
      "Plant Size [MW]": 377.0,
      "Base Plant Cost [M$]": 968.5,
      "Battery Capacity [MWhr]": null,
      "Lead Time [Years]": 3.0,
      "Variable O&M [$/MWhr]": 5.82,
      "Fixed O&M [$/kW-yr]": 27.48,
      "Base Plant Annual Fixed O&M [$M]": 10.36,
      "Final Heat Rate [BTU/kWh]": 7124.0,
      "Capacity Factor": 87.0,
      "SO2 [lbs/mmbtu]": 0.001,
      "NOx [lbs/mmbtu]": 0.0075,
      "CO2 [lbs/mmbtu]": 117.0,
      "Efficiency (Thermal or Round Trip)": 0.48,
      "SO2 in CO2 eq [lbs/mmbtu]": 0.0,
      "NOx in CO2 eq [lbs/mmbtu]": 1.99,
      "CO2 in CO2 eq [lbs/mmbtu]": 117.0,
      "Total CO2 eq [lb/mmbtu]": 119.0,
      "Total NAS Report [gCO2/kWh]": 38.0,
      "Data Planned Avaliability": 87.0,
      "Availability": 1.0,
      "Scaling Factor": 0.7,
      "Capture Efficiency": 0.9
    },
    "Advanced Nuclear": {
      "Overnight Cost [$/kW]": 6317.0,
      "Plant Size [MW]": 2156.0,
      "Base Plant Cost [M$]": 13619.5,
      "Battery Capacity [MWhr]": null,
      "Lead Time [Years]": 6.0,
      "Variable O&M [$/MWhr]": 2.36,
      "Fixed O&M [$/kW-yr]": 121.13,
      "Base Plant Annual Fixed O&M [$M]": 261.16,
      "Final Heat Rate [BTU/kWh]": 10461.0,
      "Capacity Factor": 90.0,
      "SO2 [lbs/mmbtu]": 0.0,
      "NOx [lbs/mmbtu]": 0.0,
      "CO2 [lbs/mmbtu]": 0.0,
      "Efficiency (Thermal or Round Trip)": 0.33,
      "SO2 in CO2 eq [lbs/mmbtu]": 0.0,
      "NOx in CO2 eq [lbs/mmbtu]": 0.0,
      "CO2 in CO2 eq [lbs/mmbtu]": 0.0,
      "Total CO2 eq [lb/mmbtu]": 0.0,
      "Total NAS Report [gCO2/kWh]": 0.0,
      "Data Planned Avaliability": 97.0,
      "Availability": 1.0,
      "Scaling Factor": null,
      "Capture Efficiency": 0.0
    },
    "Solar": {
      "Overnight Cost [$/kW]": 1331.0,
      "Plant Size [MW]": 150.0,
      "Base Plant Cost [M$]": 199.7,
      "Battery Capacity [MWhr]": null,
      "Lead Time [Years]": 2.0,
      "Variable O&M [$/MWhr]": 0.0,
      "Fixed O&M [$/kW-yr]": 15.19,
      "Base Plant Annual Fixed O&M [$M]": 2.28,
      "Final Heat Rate [BTU/kWh]": null,
      "Capacity Factor": 31.0,
      "SO2 [lbs/mmbtu]": 0.0,
      "NOx [lbs/mmbtu]": 0.0,
      "CO2 [lbs/mmbtu]": 0.0,
      "Efficiency (Thermal or Round Trip)": null,
      "SO2 in CO2 eq [lbs/mmbtu]": 0.0,
      "NOx in CO2 eq [lbs/mmbtu]": 0.0,
      "CO2 in CO2 eq [lbs/mmbtu]": 0.0,
      "Total CO2 eq [lb/mmbtu]": 0.0,
      "Total NAS Report [gCO2/kWh]": 0.0,
      "Data Planned Avaliability": 31.0,
      "Availability": 0.352,
      "Scaling Factor": 0.95,
      "Capture Efficiency": 0.0
    },
    "Battery Storage": {
      "Overnight Cost [$/kW]": 1383.0,
      "Plant Size [MW]": 50.0,
      "Base Plant Cost [M$]": 69.2,
      "Battery Capacity [MWhr]": 200.0,
      "Lead Time [Years]": 1.0,
      "Variable O&M [$/MWhr]": 0.0,
      "Fixed O&M [$/kW-yr]": 24.7,
      "Base Plant Annual Fixed O&M [$M]": 1.24,
      "Final Heat Rate [BTU/kWh]": null,
      "Capacity Factor": null,
      "SO2 [lbs/mmbtu]": null,
      "NOx [lbs/mmbtu]": null,
      "CO2 [lbs/mmbtu]": null,
      "Efficiency (Thermal or Round Trip)": 0.85,
      "SO2 in CO2 eq [lbs/mmbtu]": null,
      "NOx in CO2 eq [lbs/mmbtu]": null,
      "CO2 in CO2 eq [lbs/mmbtu]": null,
      "Total CO2 eq [lb/mmbtu]": null,
      "Total NAS Report [gCO2/kWh]": null,
      "Data Planned Avaliability": null,
      "Availability": null,
      "Scaling Factor": 0.95,
      "Capture Efficiency": 0.0
    },
    "Geothermal EIA 2020": {
      "Overnight Cost [$/kW]": 2680.0,
      "Plant Size [MW]": 50.0,
      "Base Plant Cost [M$]": 134.0,
      "Battery Capacity [MWhr]": null,
      "Lead Time [Years]": 4.0,
      "Variable O&M [$/MWhr]": 1.16,
      "Fixed O&M [$/kW-yr]": 113.29,
      "Base Plant Annual Fixed O&M [$M]": 5.66,
      "Final Heat Rate [BTU/kWh]": 9156.0,
      "Capacity Factor": null,
      "SO2 [lbs/mmbtu]": null,
      "NOx [lbs/mmbtu]": null,
      "CO2 [lbs/mmbtu]": null,
      "Efficiency (Thermal or Round Trip)": null,
      "SO2 in CO2 eq [lbs/mmbtu]": null,
      "NOx in CO2 eq [lbs/mmbtu]": null,
      "CO2 in CO2 eq [lbs/mmbtu]": null,
      "Total CO2 eq [lb/mmbtu]": null,
      "Total NAS Report [gCO2/kWh]": null,
      "Data Planned Avaliability": null,
      "Availability": null,
      "Scaling Factor": null,
      "Capture Efficiency": 0.0
    }
  }
}

export default dacData