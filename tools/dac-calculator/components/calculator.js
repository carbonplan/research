import { useEffect, useState } from 'react'
import { Box, Divider, Grid, Text, useThemeUI } from 'theme-ui'
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
import checks from './model/checks.js'

const TECH_WITH_BATS = ['Wind', 'Solar']

const ELECTRIC_DEMAND = {
  Wind: 1.07, // 1.0704342
  Solar: 1.07, // 1.0704342
  NGCC: 1.48, // 1.48199428
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
  checks()

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
  modelInputs['log'] = true
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
    for (var key in techData) {
      techData[key].map((p) => state['Technology'][key][p.name][1](p.initValue))
    }
    console.log('resetting')
  }

  return (
    <Box>
      <Box
        sx={{
          position: 'sticky',
          top: '47px',
          my: [3],
          mb: ['-32px', '-32px', 0],
          zIndex: 500,
          pointerEvents: 'none',
          width: ['calc(100vw)', 'calc(100vw)', 'initial'],
          ml: ['-16px', '-32px', 0],
        }}
      >
        <Grid
          sx={{
            mb: [4],
          }}
          gap={[0, 0, '100px']}
          columns={[1, 1, 'minmax(600px,700px) minmax(300px,400px)']}
        >
          <Box sx={{ mt: [2] }}>
            <Divider sx={{ my: [0] }} />
            <Box
              sx={{
                py: [1],
                pb: ['20px', '20px', '25px'],
                backgroundColor: 'background',
                pointerEvents: 'all',
                px: [3, 4, 0],
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
                <Text
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
                </Text>
                <Text sx={{ float: 'right', mt: '-18px' }}>
                  {cost < 0 ? 'No Net Removal' : 'Net Removed Cost'}
                </Text>
              </Box>
            </Box>
            <Divider sx={{ my: [0] }} />
          </Box>
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
                    fontSize: [6],
                  }}
                >
                  ${cost < 0 ? 'N/A' : cost}
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
                    {cost >= 0 && (
                      <Text
                        sx={{
                          ml: [2],
                          display: 'inline-block',
                          color: 'secondary',
                        }}
                      >
                        $/tCO₂eq
                      </Text>
                    )}
                  </Text>
                </Box>
              </Box>
              <Divider sx={{ mt: ['20px'] }} />
              <Box sx={{ mt: [4], display: ['none', 'none', 'inherit'] }}>
                <Donut params={{ results: results }}></Donut>
                <Legend results={results} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Box>
      <Box sx={{}}>
        <Grid
          sx={{
            mb: [4],
          }}
          gap={[0, 0, '100px']}
          columns={[1, 1, 'minmax(600px,700px) minmax(300px,400px)']}
        >
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                position: 'relative',
                top: ['0px', '0px', '-390px'],
                mb: ['0px', '0px', '-390px'],
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
              <Text
                sx={{
                  fontSize: [4],
                  mt: [4],
                  mb: [3],
                  fontFamily: 'heading',
                  letterSpacing: 'heading',
                }}
              >
                {/* {group.displayName} */}
                Energy Technology
              </Text>
              <Text sx={{ fontSize: [2], mb: [4] }}>
                Click to expand and adjust parameters for each energy
                technology.
              </Text>
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
        </Grid>
      </Box>
    </Box>
  )
}

export default Calculator
