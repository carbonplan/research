import { useState, useEffect } from 'react'
import { useThemeUI, Box } from 'theme-ui'
import { Row, Column, Slider } from '@carbonplan/components'
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

  const {
    theme: { rawColors: colors },
  } = useThemeUI()
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (optional) {
      setOptional(active)
    }
  }, [active])

  return (
    <Box
      sx={{
        mt: [4, 5, 6, 7],
        mb: [4, 5, 6, 7],
      }}
    >
      <Box
        sx={{
          fontFamily: 'heading',
          letterSpacing: 'smallcaps',
          textTransform: 'uppercase',
          fontSize: [3, 3, 3, 4],
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
              right: ['0px'],
            }}
          >
            <LabeledToggle
              value={active}
              setValue={setActive}
              labels={{ on: 'on', off: 'off' }}
            />
          </Box>
        )}
      </Box>
      <Row columns={[6, 6, 5, 5]}>
        <Column start={[1]} width={[4, 4, 4, 4]}>
          <Box
            sx={{
              fontFamily: 'faux',
              letterSpacing: 'faux',
              fontSize: [2, 2, 2, 3],
              mt: [0],
              mb: [1],
            }}
          >
            {description}
          </Box>
        </Column>
      </Row>
      <Row columns={[6, 6, 5, 5]}>
        <Column start={[1]} width={[2, 1, 1, 1]}>
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
            <Box
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
            </Box>
          </Box>
          <Box
            sx={{
              color: 'secondary',
              fontSize: [2, 2, 2, 3],
              fontFamily: 'faux',
              letterSpacing: 'faux',
              pt: [1],
            }}
          >
            {units}
          </Box>
        </Column>
        <Column start={[3, 2, 2, 2]} width={[4, 5, 4, 4]}>
          <Slider
            sx={{
              width: ['100%'],
              color: active ? 'pink' : 'muted',
              backgroundColor: active ? 'secondary' : 'muted',
              mt: ['42px'],
              pointerEvents: active ? 'all' : 'none',
            }}
            value={value}
            onChange={(e) => setValue(parseFloat(e.target.value))}
            min={min}
            max={max}
            step={step}
          ></Slider>
        </Column>
      </Row>
    </Box>
  )
}

export default Control
