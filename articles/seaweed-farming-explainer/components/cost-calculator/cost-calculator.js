import { format } from 'd3-format'
import { useState } from 'react'
import { Box, Divider, Flex } from 'theme-ui'
import { Column, Filter, Row } from '@carbonplan/components'

import { formatValue } from './utils'
import { PARAMETERS, calculateBenefit, calculateCost } from './model'
import Parameters from './parameters'
import SpatialValues from './spatial-values'

const LOCATIONS = [
  {
    key: 'pacific',
    point: [-90, 2],
    values: {
      seaweed_dw: 7939.91552734375,
      d2p: 192.85289001464844,
      fseq_transport: 0.9930768013000488,
      d2sink: 0.0,
      species: 'tropical red',
      depth: 2016.75,
      nharv: 8.0,
      wave_height: 1.4342491626739502,
    },
  },
  {
    key: 'north_sea',
    point: [0, 58],
    values: {
      seaweed_dw: 1636.282470703125,
      d2p: 29.229372024536133,
      fseq_transport: 0.7799999713897705,
      d2sink: 428.871826171875,
      species: 'temperate brown',
      depth: 131.5,
      nharv: 2.0,
      wave_height: 1.8970307111740112,
    },
  },
  {
    key: 'alaska',
    point: [-165, 55],
    values: {
      seaweed_dw: 1316.7147216796875,
      d2p: 99.7650146484375,
      fseq_transport: 0.9700000286102295,
      d2sink: 115.72320556640625,
      species: 'temperate brown',
      depth: 91.25,
      nharv: 1.0,
      wave_height: 1.9661271572113037,
    },
  },
  {
    key: 'argentina',
    point: [-66, -46],
    values: {
      seaweed_dw: 2587.830322265625,
      d2p: 103.04915618896484,
      fseq_transport: 0.44999998807907104,
      d2sink: 273.8975830078125,
      species: 'temperate brown',
      depth: 104.0,
      nharv: 2.0,
      wave_height: 1.3610966205596924,
    },
  },
  {
    key: 'yellow_sea',
    point: [124.5, 33.3],
    values: {
      seaweed_dw: 972.8525390625,
      d2p: 167.25067138671875,
      fseq_transport: 0.9700000286102295,
      d2sink: 748.9559936523438,
      species: 'temperate brown',
      depth: 72.0,
      nharv: 1.0,
      wave_height: 1.2413867712020874,
    },
  },
]

const sx = {
  column: {
    borderStyle: 'solid',
    borderColor: 'muted',
    borderWidth: '0px',
    borderTopWidth: '1px',
    py: [3, 3, 4, 4],
  },
  heading: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [2, 2, 2, 3],
    mb: [2, 2, 3, 3],
  },
  value: {
    color: 'teal',
    fontFamily: 'mono',
    letterSpacing: 'mono',
    fontSize: [5, 5, 6, 7],
    mb: [-2],
  },
  units: {
    color: 'secondary',
    fontFamily: 'faux',
    letterSpacing: 'faux',
    fontSize: [0, 1, 1, 1],
    whiteSpace: 'nowrap',
    display: 'inline-block',
  },
}

const Total = ({ label, value, units }) => (
  <Box sx={{ height: '100%' }}>
    <Flex
      sx={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ ...sx.heading, mb: 0 }}>{label}</Box>
      <Box>
        <Box sx={sx.value}>{formatValue(value)}</Box>
        <Box sx={sx.units}>{units}</Box>
      </Box>
    </Flex>
  </Box>
)

const INITIAL_PARAMETERS = Object.keys(PARAMETERS).reduce((a, k) => {
  const { presets } = PARAMETERS[k]
  a[k] =
    typeof presets.optimistic === 'number'
      ? presets.optimistic
      : presets.optimistic.food
  return a
}, {})

const CostCalculator = () => {
  const [location, setLocation] = useState(0)
  const [target, setTarget] = useState('sinking')
  const [parameters, setParameters] = useState(INITIAL_PARAMETERS)

  const benefitUnits = target === 'sinking' ? 'tCO₂' : 'tCO₂e'
  const { values } = LOCATIONS[location]

  const benefit = calculateBenefit(target, values, parameters)
  const cost = calculateCost(target, values, parameters)
  const benefitCost =
    (target === 'products' ? cost - parameters.productValue : cost) / benefit

  return (
    <Box as='figure' sx={{ mt: [6, 6, 6, 7], mb: [4, 4, 4, 5] }}>
      <Row columns={6}>
        <Column start={1} width={2} sx={sx.column}>
          <Total label='Production cost' value={cost} units='$ / ton DW' />
        </Column>
        <Column start={3} width={2} sx={sx.column}>
          <Total
            label='Climate benefit'
            value={benefit}
            units={`${benefitUnits} / ton DW`}
          />
        </Column>
        <Column start={5} width={2} sx={sx.column}>
          <Total
            label={target === 'products' ? 'Mitigation cost' : 'Removal cost'}
            value={benefitCost}
            units={`$ / ${benefitUnits}`}
          />
        </Column>
      </Row>
      <Row
        columns={6}
        sx={{
          ...sx.column,
          borderTopWidth: 0,
          py: 0,
          pb: [1, 1, 1, 2],
          borderBottomWidth: '1px',
        }}
      >
        <Column start={[1, 1, 1, 1]} width={[6, 6, 3, 3]} sx={sx.column}>
          <Flex sx={{ gap: 3 }}>
            <Box sx={sx.heading}>Target</Box>
            <Filter
              values={{
                sinking: target === 'sinking',
                products: target === 'products',
              }}
              setValues={(obj) =>
                obj.sinking ? setTarget('sinking') : setTarget('products')
              }
            />
          </Flex>
          <Divider sx={{ mt: [1, 1, 2, 2], mb: [3, 3, 4, 4] }} />

          <SpatialValues
            locations={LOCATIONS}
            setLocation={setLocation}
            location={location}
            target={target}
            sx={sx}
          />
        </Column>

        <Column start={[1, 1, 4, 4]} width={[6, 6, 3, 3]} sx={sx.column}>
          <Parameters
            parameters={parameters}
            setParameters={setParameters}
            target={target}
            format={formatValue}
            sx={sx}
          />
        </Column>
      </Row>
    </Box>
  )
}

export default CostCalculator
