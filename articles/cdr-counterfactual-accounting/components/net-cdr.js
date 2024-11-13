import React, { useState } from 'react'
import { Box, Flex } from 'theme-ui'
import { Badge, Column, Row, Select, Slider } from '@carbonplan/components'
import {
  Chart,
  Plot,
  Bar,
  Label,
  Line,
  TickLabels,
  Axis,
  Ticks,
} from '@carbonplan/charts'

import calculateNetCDR from './scenario-calculations'
import { Hatching } from './svg-elements'
import { Arrow } from '@carbonplan/icons'

const inputConfigs = {
  alkalinityCounterfactual: {
    color: 'grey',
    label: 'Counterfactual Alkalinity',
    min: 0,
    max: 30,
    step: 1,
  },
  alkalinityProject: {
    color: 'purple',
    label: 'Project Alkalinity',
    min: 0,
    max: 30,
    step: 1,
  },
  emissionsFactorCounterfactual: {
    color: 'grey',
    label: 'Counterfactual Emissions Factor',
    min: 0,
    max: 2,
    step: 0.1,
  },
  emissionsFactorProject: {
    color: 'purple',
    label: 'Project Emissions Factor',
    min: 0,
    max: 2,
    step: 0.1,
  },
  removalFactorCounterfactual: {
    color: 'grey',
    label: 'Counterfactual Removal Factor',
    min: -1,
    max: 1,
    step: 0.1,
  },
  removalFactorProject: {
    color: 'purple',
    label: 'Project Removal Factor',
    min: -1,
    max: 1,
    step: 0.1,
  },
}

const approachMap = {
  1: 'Simple subtraction',
  2: 'Ignore obvious avoided emissions',
  3: 'Conservative',
  4: 'Separate the replacement',
}

const InputSlider = ({ name, value, config, onChange }) => (
  <Flex sx={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}>
    <Badge
      sx={{
        color: config.color,
        minWidth: '2em',
        flexShrink: 0,
        fontSize: 'inherit',
        height: 24,
        width: 37,
      }}
    >
      {value.toFixed(config.step < 1 ? 1 : 0)}
    </Badge>
    <Slider
      sx={{ color: config.color, bg: config.color }}
      value={value}
      min={config.min}
      max={config.max}
      step={config.step}
      onChange={(e) => onChange(name, parseFloat(e.target.value))}
    />
  </Flex>
)

const Graph = ({ results }) => {
  const yValues = [0, 5]

  const xValues = [-40, 40]

  const totalBar = results.map((result, index) => [
    4 - index + 0.35,
    result.netCDR,
  ])

  const aeBar = results.map((result, index) => {
    if (result.netCDR <= 0) {
      if (result.netCDR_Nae > 0) {
        return [4 - index + 0.35, result.netCDR]
      }
      return [4 - index + 0.35, result.netCDR_Nae, result.netCDR]
    }
    return [4 - index + 0.35, 0, 0]
  })

  const barWidth = 0.4

  return (
    <Box sx={{ position: 'relative' }}>
      <Flex
        sx={{
          width: '100%',
          mb: 3,
          justifyContent: 'space-around',
          gap: 5,
          fontSize: 0,
          fontFamily: 'mono',
          textTransform: 'uppercase',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Arrow
            sx={{
              transform: 'rotate(225deg)',
              height: [12, 12, 12, 14],
              mb: ['1px', '1px', '1px', '0px'],
            }}
          />{' '}
          Removals
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          Emissions
          <Arrow
            sx={{
              transform: 'rotate(45deg)',
              height: [12, 12, 12, 14],
              mb: ['1px', '1px', '1px', '0px'],
            }}
          />
        </Box>
      </Flex>
      <Box
        sx={{
          height: 425,
          mb: -80,
          width: '100%',
          position: 'relative',
        }}
      >
        <Chart
          x={xValues}
          y={yValues}
          padding={{ left: 0, right: 0, top: 15, bottom: 0 }}
        >
          <Axis top sx={{ borderColor: 'muted' }} />
          <TickLabels top format={(value) => Math.abs(value)} />
          <Ticks top sx={{ borderColor: 'muted' }} />
          <Plot>
            <Hatching vertical={false} />
            <Bar
              data={totalBar}
              color={'green'}
              direction='horizontal'
              width={barWidth}
            />
            <Bar
              data={aeBar}
              color={'url(#hatchPattern)'}
              direction='horizontal'
              width={barWidth}
            />
            <Line
              data={[
                [0, 0.25],
                [0, yValues[1]],
              ]}
              color='muted'
            />
            {results.map((result, index) => (
              <Line
                key={result.acct_approach}
                data={[
                  [xValues[0], 4 - index],
                  [xValues[1], 4 - index],
                ]}
                color='muted'
              />
            ))}
          </Plot>
          {results.map((result, index) => (
            <React.Fragment key={result.acct_approach}>
              <Label
                x={xValues[0]}
                y={4 - index + 0.35}
                align='left'
                width={100}
                verticalAlign='bottom'
                sx={{
                  color: 'primary',
                  fontSize: [1, 2, 2, 2],
                  fontFamily: 'body',
                  height: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  mb: 4,
                }}
              >
                {approachMap[result.acct_approach]}
              </Label>
              <Label
                x={result.netCDR}
                y={4 - index + 0.35}
                align={result.netCDR < 0 ? 'right' : 'left'}
                verticalAlign='middle'
                height={1}
              >
                {result.netCDR !== 0 && (
                  <Badge
                    sx={{
                      mx: 1,
                      fontSize: 2,
                      color: 'green',
                      height: 24,
                    }}
                  >
                    {Math.abs(result.netCDR).toFixed(1)}
                  </Badge>
                )}
              </Label>
            </React.Fragment>
          ))}
        </Chart>
      </Box>
    </Box>
  )
}

const NetCDR = ({ presets }) => {
  const [inputs, setInputs] = useState(Object.values(presets)[0])
  const [isPresetActive, setIsPresetActive] = useState(true)
  const [selectedPreset, setSelectedPreset] = useState(Object.keys(presets)[0])

  const handleInputChange = (name, value) => {
    setIsPresetActive(false)
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }))
  }

  const results = calculateNetCDR(inputs)

  return (
    <Box>
      <Row columns={6}>
        <Column start={1} width={6}>
          <Graph results={results} />
        </Column>
      </Row>

      <Box sx={{ position: 'relative', bg: 'background' }}>
        <Row
          columns={[6]}
          sx={{
            py: 3,
            borderBottom: '1px solid',
            borderColor: 'muted',
          }}
        >
          <Column start={1} width={2}>
            <Box
              sx={{
                color: 'secondary',
                fontFamily: 'body',
                textTransform: 'uppercase',
                mb: [2, 0, 0, 0],
              }}
            />
          </Column>
          <Column start={[1, 3, 3, 3]} width={[3, 2, 2, 2]}>
            <Box
              sx={{
                color: 'grey',
                fontFamily: 'body',
                textTransform: 'uppercase',
                mb: [2, 0, 0, 0],
              }}
            >
              Prior liming
            </Box>
          </Column>
          <Column start={[4, 5, 5, 5]} width={[3, 2, 2, 2]}>
            <Box
              sx={{
                color: 'purple',
                fontFamily: 'body',
                textTransform: 'uppercase',
                mb: [2, 0, 0, 0],
              }}
            >
              CDR Project
            </Box>
          </Column>
        </Row>

        <Row
          columns={[6]}
          sx={{ py: 3, borderBottom: '1px solid', borderColor: 'muted' }}
        >
          <Column start={1} width={2}>
            <Box
              sx={{
                color: 'secondary',
                fontFamily: 'body',
                textTransform: 'uppercase',
                mb: [2, 0, 0, 0],
              }}
            >
              Preset
            </Box>
          </Column>
          <Column start={[3, 3, 3, 3]} width={[4, 4, 4, 4]}>
            <Select
              size='xs'
              value={isPresetActive ? selectedPreset : 'custom'}
              sxSelect={{ width: '100%' }}
              sx={{ width: '100%' }}
              onChange={(e) => {
                setIsPresetActive(true)
                setSelectedPreset(e.target.value)
                setInputs(presets[e.target.value])
              }}
            >
              {Object.keys(presets).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
              {!isPresetActive && (
                <option key='custom' value='custom' hidden>
                  Custom
                </option>
              )}
            </Select>
          </Column>
        </Row>

        <Row
          columns={[6]}
          sx={{ py: 3, borderBottom: '1px solid', borderColor: 'muted' }}
        >
          <Column start={1} width={2}>
            <Box
              sx={{
                color: 'secondary',
                fontFamily: 'body',
                textTransform: 'uppercase',
                mb: [2, 0, 0, 0],
              }}
            >
              Rock (tons)
            </Box>
          </Column>
          <Column start={[1, 3, 3, 3]} width={[3, 2, 2, 2]}>
            <InputSlider
              name='alkalinityCounterfactual'
              value={inputs.alkalinityCounterfactual}
              config={inputConfigs.alkalinityCounterfactual}
              onChange={handleInputChange}
            />
          </Column>
          <Column start={[4, 5, 5, 5]} width={[3, 2, 2, 2]}>
            <InputSlider
              name='alkalinityProject'
              value={inputs.alkalinityProject}
              config={inputConfigs.alkalinityProject}
              onChange={handleInputChange}
            />
          </Column>
        </Row>

        <Row
          columns={[6]}
          sx={{ py: 3, borderBottom: '1px solid', borderColor: 'muted' }}
        >
          <Column start={1} width={2}>
            <Box
              sx={{
                color: 'secondary',
                fontFamily: 'body',
                textTransform: 'uppercase',
                mb: [2, 0, 0, 0],
              }}
            >
              Emissions / ton rock
            </Box>
          </Column>
          <Column start={[1, 3, 3, 3]} width={[3, 2, 2, 2]}>
            <InputSlider
              name='emissionsFactorCounterfactual'
              value={inputs.emissionsFactorCounterfactual}
              config={inputConfigs.emissionsFactorCounterfactual}
              onChange={handleInputChange}
            />
          </Column>
          <Column start={[4, 5, 5, 5]} width={[3, 2, 2, 2]}>
            <InputSlider
              name='emissionsFactorProject'
              value={inputs.emissionsFactorProject}
              config={inputConfigs.emissionsFactorProject}
              onChange={handleInputChange}
            />
          </Column>
        </Row>
      </Box>
    </Box>
  )
}

export default NetCDR
