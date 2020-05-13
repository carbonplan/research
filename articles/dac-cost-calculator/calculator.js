import { useState } from 'react'
import { Box, Divider, Flex, Grid, Text, Heading, useThemeUI } from 'theme-ui'

import Parameter from './components/parameter.js'
import Donut from './components/charts/donut.js'
import EnergySelect from './components/energy.js'
import techData from './components/model/tech-data.js'
import dacParameters from './components/model/dac-params.js'
import dacDriver from './components/model/driver.js'
import calcPartialCost from './components/model/partial-cost.js'

const DacCalculator = () => {

  const context = useThemeUI()
  const theme = context.theme

  // Setup state
  const state = {
    'electric': useState('Wind'),
    'thermal': useState('Wind'),  // not used
  }
  
  const modelInputs = { "Technology": techData }
  for (var i = 0, l = dacParameters.length; i < l; i++) {
    state[dacParameters[i].name] = useState(dacParameters[i].initValue);
    modelInputs[dacParameters[i].name] = state[dacParameters[i].name][0]
  }

  const results = dacDriver(state.electric[0], state.thermal[0], modelInputs)
  const cost = results['Total Cost [$/tCO2]'].toFixed(0)

  const chartData = calcPartialCost(state.electric[0], state.thermal[0], modelInputs)
  // const chartData = {}  // toggle to turn off partial cost

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
        {/* <EnergySelect key={'thermal'} params={{ 'name': 'THERMAL', 'state': state['thermal'] }} ></EnergySelect> */}
        <Divider />

        {dacParameters.map((p) => (<Parameter key={p.name} param={p} data={chartData[p.name]} state={state[p.name]}></Parameter>))}
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
