import { useState } from 'react'
import { Box, Divider, Flex } from 'theme-ui'
import { Column, Filter, Row } from '@carbonplan/components'
import {
  PARAMETERS,
  calculateBenefit,
  calculateCost,
} from '@carbonplan/seaweed-farming-model'

import locations from './locations.json'
import { formatValue } from './utils'
import Parameters from './parameters'
import SpatialValues from './spatial-values'

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
  const { values } = locations[location]

  const benefit = calculateBenefit(target, values, parameters)
  const cost = calculateCost(target, values, parameters)
  const benefitCost =
    (target === 'products' ? cost - parameters.productValue : cost) / benefit

  return (
    <Box>
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
          <Flex sx={{ gap: 3, pb: [1, 0, 0, 0] }}>
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
            locations={locations}
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
