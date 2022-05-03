import { useEffect, useState } from 'react'
import { Box, Divider, Grid, Text, useThemeUI } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import ParameterGroup from './parameter-group.js'
import TechGroup from './tech-group.js'
import Donut from './charts/donut.js'
import Legend from './charts/legend.js'
import Energy from './energy.js'
import Methods from './methods.js'
import techData from './model/tech-data.js'
import dacParameters from './model/dac-params.js'
import { makeModel } from './model/driver.js'
import calcPartialCost from './model/partial-cost.js'
// import checks from './model/checks.js'

const TECH_WITH_BATS = ['Wind', 'Solar']

const ELECTRIC_DEMAND = {
  Wind: 0.95, // 0.945201996
  Solar: 0.95, // 0.945201996
  NGCC: 1.46, // 1.462397513,
}

const CAPEX = {
  Wind: 936,
  Solar: 936,
  NGCC: 1028,
}

const getTech = (energy) => {
  const techKeys = []

  if (energy == 'NGCC') {
    techKeys.push('NGCC w/ CCS')
    techKeys.push('Advanced NGCC')
  } else {
    techKeys.push(energy)
  }

  if (TECH_WITH_BATS.includes(energy)) {
    techKeys.push('Battery Storage')
  }
  return techKeys
}

const Calculator = () => {
  // temporary qa/qc checks
  // checks()

  // Setup state
  const state = {
    energy: useState('NGCC'),
  }
  const modelInputs = {}

  // Energy technology keys
  const techKeys = getTech(state.energy[0])

  // unpack dacParameters
  dacParameters.map((group) =>
    group.parameters.map((p) => (state[p.name] = useState(p.initValue)))
  )
  for (var key in state) {
    modelInputs[key] = state[key][0]
  }

  // set electric requirement
  useEffect(() => {
    state['Electric [GJ/tCO2]'][1](ELECTRIC_DEMAND[state.energy[0]])
    state['Capex [$]'][1](CAPEX[state.energy[0]])
  }, [state.energy[0]])

  // unpack techData
  state['Technology'] = {}
  modelInputs['Technology'] = {}
  for (var key in techData) {
    state['Technology'][key] = {}
    modelInputs['Technology'][key] = {}
    techData[key].map(
      (p) => (state['Technology'][key][p.name] = useState(p.initValue))
    )
    for (var pkey in state['Technology'][key]) {
      modelInputs['Technology'][key][pkey] = state['Technology'][key][pkey][0]
    }
  }

  // Make model object
  const dacModel = makeModel(state.energy[0])

  // Run once with specified parameters
  modelInputs['log'] = false
  dacModel.setParams(modelInputs)
  const results = dacModel.compute()

  const cost = results['Total Cost [$/tCO2 Net Removed]'].toFixed(0)

  // partial cost
  modelInputs['log'] = false
  const chartData = calcPartialCost(dacModel, modelInputs, techKeys)

  const reset = () => {
    dacParameters.map((group) =>
      group.parameters.map((p) => state[p.name][1](p.initValue))
    )
    state['Electric [GJ/tCO2]'][1](ELECTRIC_DEMAND[state.energy[0]])
    state['Capex [$]'][1](CAPEX[state.energy[0]])
    for (var key in techData) {
      techData[key].map((p) => state['Technology'][key][p.name][1](p.initValue))
    }
  }

  return (
    <Box>
      <Box
        sx={{
          position: 'sticky',
          top: '47px',
          mb: ['-32px', '-32px', 0],
          zIndex: 500,
          pointerEvents: 'none',
          width: ['calc(100vw)', 'calc(100vw)', 'initial'],
          ml: ['-16px', '-32px', 0],
        }}
      >
        <Row
          columns={[6, 10]}
          sx={{
            mb: [4],
          }}
        >
          <Column start={[1, 1]} width={[6, 6]}>
            <Box sx={{ mt: [2], mb: [3, 3, 0] }}>
              <Divider sx={{ my: [0] }} />
              <Box
                sx={{
                  py: [2],
                  pb: ['24px', '24px', '25px'],
                  backgroundColor: 'background',
                  pointerEvents: 'all',
                  px: [3, 5, 0],
                }}
              >
                <Energy
                  key='energy'
                  params={{ state: state['energy'] }}
                  reset={reset}
                ></Energy>
                <Box
                  sx={{
                    display: ['initial', 'initial', 'none'],
                  }}
                >
                  <Box
                    sx={{
                      textAlign: 'left',
                      color: cost < 0 ? 'secondary' : 'purple',
                      fontSize: ['42px'],
                      fontFamily: 'mono',
                      mt: '-70px',
                      float: 'right',
                    }}
                  >
                    ${cost < 0 ? 'N/A' : cost}
                  </Box>
                  <Box sx={{ float: 'right', mt: '-18px' }}>
                    {cost < 0 ? 'No Net Removal' : 'Net Removed Cost'}
                  </Box>
                </Box>
              </Box>
              <Divider sx={{ my: [0] }} />
            </Box>
          </Column>
          <Column start={[1, 8]} width={[6, 3]}>
            <Box
              sx={{
                display: ['none', 'none', 'inherit'],
                pointerEvents: 'all',
              }}
            >
              <Divider />
              <Box>
                <Box
                  sx={{
                    mb: [3],
                  }}
                >
                  <Text
                    sx={{
                      textAlign: 'left',
                      color: cost < 0 ? 'secondary' : 'purple',
                      fontSize: [6, 6, 6, 6],
                      fontFamily: 'mono',
                      letterSpacing: '0.01em',
                    }}
                  >
                    ${cost < 0 ? 'N/A' : cost}
                    {cost >= 0 && (
                      <Text
                        sx={{
                          ml: [2],
                          fontSize: [4],
                          display: 'inline-block',
                          color: 'secondary',
                        }}
                      >
                        / tCO₂eq
                      </Text>
                    )}
                  </Text>
                  <Box>
                    <Text
                      sx={{
                        textAlign: 'left',
                        color: 'text',
                        fontSize: [4],
                      }}
                    >
                      {cost < 0 ? 'No Net Removal' : 'Net Removed Cost'}
                    </Text>
                  </Box>
                </Box>
                <Divider sx={{ mt: ['20px'] }} />
                <Box sx={{ mt: [4], display: ['none', 'none', 'inherit'] }}>
                  <Row columns={[3]}>
                    <Column start={[1]} width={[2]}>
                      <Box sx={{ pt: [2], ml: ['-6px'] }}>
                        <Donut results={results}></Donut>
                      </Box>
                    </Column>
                  </Row>
                  <Legend results={results} />
                </Box>
              </Box>
            </Box>
          </Column>
        </Row>
      </Box>
      <Box sx={{}}>
        <Row
          columns={[6, 10]}
          sx={{
            mb: [0, 0, 0, 3],
          }}
        >
          <Column start={[1, 1]} width={[6, 6]}>
            <Box sx={{ position: 'relative' }}>
              <Box
                sx={{
                  position: 'relative',
                  top: ['0px', '0px', '-380px'],
                  mb: ['0px', '0px', '-380px'],
                  mt: [
                    0,
                    0,
                    results['Natural Gas Cost [$/tCO2]'] > 0 ? 0 : '54px',
                  ],
                }}
              >
                {dacParameters.map((g) => (
                  <ParameterGroup
                    key={g.id}
                    group={g}
                    data={chartData}
                    state={state}
                  ></ParameterGroup>
                ))}
                <Box
                  sx={{
                    fontSize: [4],
                    mt: [4],
                    mb: [3],
                    fontFamily: 'heading',
                    letterSpacing: 'heading',
                  }}
                >
                  Energy Technology
                </Box>
                <Box sx={{ fontSize: [2], mb: [4] }}>
                  Click to expand and adjust parameters for each energy
                  technology.
                </Box>
                <Divider sx={{ my: [0] }} />
                {techKeys.map((key) => (
                  <TechGroup
                    key={key}
                    name={key}
                    group={techData[key]}
                    data={chartData['Technology'][key]}
                    state={state['Technology'][key]}
                  ></TechGroup>
                ))}
                <Box>
                  <Methods />
                </Box>
              </Box>
            </Box>
            <Box />
          </Column>
        </Row>
      </Box>
    </Box>
  )
}

export default Calculator
