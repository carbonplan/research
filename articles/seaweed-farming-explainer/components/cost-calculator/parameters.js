import { Box, Flex } from 'theme-ui'
import { Badge, Slider } from '@carbonplan/components'
import { useRef, useState } from 'react'
import { PARAMETERS } from '@carbonplan/seaweed-farming-model'

const sx = {
  parameterLabel: {
    fontFamily: 'faux',
    letterSpacing: 'faux',
  },
}

const TARGET_PARAMETERS = {
  products: [
    'avoidedEmissions',
    'productValue',
    // 'conversionCost', // -> constant?
    // 'conversionEmissions', // -> constant?
    'transportEmissions',
    // 'maintenanceEmissions', // -> constant?
    'capex',
    'lineCost',
    // 'opex', // -> constant?
    'transportCost',
    'harvestCost',
  ],
  sinking: [
    'removalRate',
    'transportEmissions',
    // 'maintenanceEmissions', // -> constant?
    'capex',
    'lineCost',
    // 'opex', // -> constant?
    'transportCost',
    'harvestCost',
  ],
}

const Parameter = ({
  min,
  max,
  step,
  label,
  units,
  value,
  onChange,
  sxProp,
  format,
}) => {
  const [recentlyChanged, setRecentlyChanged] = useState(false)
  const timeoutID = useRef(null)

  const setChanged = () => {
    setRecentlyChanged(true)
    timeoutID.current && clearTimeout(timeoutID.current)
    timeoutID.current = setTimeout(() => setRecentlyChanged(false), 500)
  }

  return (
    <Box sx={{ mt: [-1] }}>
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <Box>
          <Box sx={sx.parameterLabel}>{label}</Box>
          <Box sx={sxProp.units}>{units}</Box>
        </Box>
        <Badge
          sx={{
            color: recentlyChanged ? 'teal' : undefined,
            transition: 'background-color 0.15s',
            '& > div': {
              transition: 'color 0.15s',
            },
          }}
        >
          {format(value)}
        </Badge>
      </Flex>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => {
          setChanged()
          onChange(e.target.value)
        }}
      />
    </Box>
  )
}

const Parameters = ({
  parameters,
  setParameters,
  format,
  target,
  sx: sxProp,
}) => {
  const activeParameters = TARGET_PARAMETERS[target].map((p) => PARAMETERS[p])
  // Add margin-bottom to avoid shifting when extra 'products' parameter is added

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={sxProp.heading}>Parameters</Box>

      <Flex sx={{ flexDirection: 'column', gap: 3 }}>
        {activeParameters.map(({ id, ...props }) => (
          <Parameter
            key={id}
            format={format}
            value={parameters[id]}
            onChange={(v) =>
              setParameters({
                ...parameters,
                [id]: parseFloat(v),
              })
            }
            sxProp={sxProp}
            {...props}
          />
        ))}
      </Flex>
    </Box>
  )
}

export default Parameters
