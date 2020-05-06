import { useState } from 'react'
import { Box, Divider, Flex, Grid, Text, Heading, useThemeUI } from 'theme-ui'

import dacModel from './model/driver.js'
import Parameter from './components/parameter.js'
import Donut from './components/charts/donut.js'
import EnergySelect from './components/energy.js'
import dacData from './model/dac-params.js'


const DacCalculator = () => {

  const context = useThemeUI()
  const theme = context.theme

  const parameters = [
    "Scale [tCO2/year]",
    "DAC Capacity Factor",
    "DAC Section Lead Time [years]",
    "Overnight Capex [M$] *",
    "Electric Power Requierement [MW] *",
    "Thermal [GJ/tCO2] *",
    "Fixed O+M Costs [$/tCO2] *",
    "Varible O+M Cost [$/tCO2] *",
    "WACC [%]",
    "Natural Gas Cost [$/mmBTU]"
  ]

  // Setup state
  const state = {
    'electric': useState('WIND'),
    'thermal': useState('WIND'),
  }
  for (var i = 0, l = parameters.length; i < l; i++) {
    state[parameters[i]] = useState(45);
  }

  var results = dacModel(state, dacData)
  const cost = results['Total Cost[$ / tCO2]'].toFixed(0)

  return (
    <Flex sx={{
      flexDirection: 'row',
      maxWidth: '100%'
    }}>
      <Box sx={{
        flexBasis: '550px',
      }}>
        <Divider />

        <Heading>Select Your Energy Sources</Heading>
        <EnergySelect key={'electric'} params={{ 'name': 'ELECTRIC', 'state': state['electric'] }} ></EnergySelect>
        <EnergySelect key={'thermal'} params={{ 'name': 'THERMAL', 'state': state['thermal'] }} ></EnergySelect>
        <Divider />

        {parameters.map((p) => (<Parameter key={p} params={{ 'name': p, 'state': state[p] }}></Parameter>))}
      </Box>
      <Box>
        {/* TODO, make this box sticky */}
        <Divider />
        <Box>
          <Text sx={{ textAlign: 'right', color: theme.colors.purple, fontSize: [5] }}> {cost} </Text>
          <Divider /> 
          <Grid columns={[1, null, '100px 1fr']}>
            <Text sx={{ textAlign: 'left', color: theme.colors.text, fontSize: [3] }}> Total Cost </Text>
            <Text sx={{ textAlign: 'left', color: theme.colors.secondary, fontSize: [3] }}> $/CO2 </Text>
          </Grid>
        </Box>
        <Donut params={{ results: results}} ></Donut>
      </Box>
    </Flex>
  )
}

export default DacCalculator
