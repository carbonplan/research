import { useState, useEffect } from 'react'
import { Box, Text, Grid, Slider } from 'theme-ui'
import LabeledToggle from '../labeled-toggle'
import { darken } from '@theme-ui/color'

const Control = ({
  name,
  description,
  units,
  value,
  setValue,
  min,
  max,
  step,
  optional,
  setOptional,
}) => {
  min = min ? min : 0
  max = max ? max : 1
  step = step ? step : 0.1

  const format = (value) => {
    if (units == 'dollars') {
      return `$${value.toFixed(0)}`
    } else if (name == 'discount rate') {
      return `${(value * 100).toFixed(1)}%`
    } else if (name == 'project risk') {
      return `${(value * 100).toFixed(1)}%`
    } else {
      return value.toFixed(0)
    }
  }

  const [active, setActive] = useState(true)

  useEffect(() => {
    if (optional) {
      setOptional(active)
    }
  }, [active])

  return (
    <Box
      sx={{
        mt: [2],
        mb: [4],
      }}
    >
      <Text
        sx={{
          fontFamily: 'heading',
          letterSpacing: 'smallcaps',
          textTransform: 'uppercase',
          fontSize: [3],
          mt: [3],
          mb: [1],
        }}
      >
        {name}
        {optional && (
          <Box
            sx={{
              display: 'inline-block',
              mt: [1],
              position: 'absolute',
              left: ['calc(100% - 55px)', 'calc(100% - 55px)', '424px'],
            }}
          >
            <LabeledToggle
              value={active}
              setValue={setActive}
              labels={{ on: 'on', off: 'off' }}
            />
          </Box>
        )}
      </Text>
      <Text
        sx={{
          fontFamily: 'faux',
          letterSpacing: 'faux',
          fontSize: [2],
          mt: [0],
          mb: [1],
          maxWidth: optional ? ['70%', '70%', '375px'] : '100%',
        }}
      >
        {description}
      </Text>
      <Grid columns={['75px 1fr']}>
        <Box>
          <Box
            sx={{
              borderStyle: 'solid',
              borderColor: 'primary',
              borderWidth: '0px',
              borderBottomWidth: '1px',
              pb: [1],
              pt: [2],
            }}
          >
            <Text
              sx={{
                display: 'inline-block',
                color: active ? 'pink' : 'muted',
                fontSize: [4],
                fontFamily: 'mono',
                letterSpacing: '0.03em',
                transition: '0.2s',
              }}
            >
              {format(value)}
            </Text>
          </Box>
          <Text
            sx={{
              color: 'secondary',
              fontSize: [2],
              fontFamily: 'faux',
              letterSpacing: 'faux',
              pt: [1],
            }}
          >
            {units}
          </Text>
        </Box>
        <Slider
          sx={{
            width: ['100%', '100%', '380px'],
            color: active ? 'pink' : 'muted',
            backgroundColor: active ? 'secondary' : 'muted',
            mt: ['42px'],
            '&:focus': {
              color: active ? 'pink' : 'secondary',
            },
            '&:active': {
              color: active ? darken('pink', 0.03) : 'muted',
            },
            transition: '0.2s',
            pointerEvents: active ? 'all' : 'none',
            '&::-webkit-slider-thumb': {
              height: [24, 24, 16],
              width: [24, 24, 16],
            },
          }}
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
          min={min}
          max={max}
          step={step}
        ></Slider>
      </Grid>
    </Box>
  )
}

export default Control
