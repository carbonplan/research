import { useRef, useState, useEffect } from 'react'
import { useThemeUI, Box, Grid, Slider } from 'theme-ui'
import { darken } from '@theme-ui/color'
import { Row, Column, Input } from '@carbonplan/components'
import LabeledToggle from '../labeled-toggle'
import CostCurve from '../charts/cost-curve'

const Curve = ({
  name,
  description,
  units,
  value,
  setValue,
  scales,
  displayMethod,
}) => {
  const container = useRef(null)
  const { theme } = useThemeUI()
  const [chart, setChart] = useState(null)
  const [isVariable, setIsVariable] = useState(false)
  const [displayValue, setDisplayValue] = useState(value[0][1])

  const initializeChart = () => {
    const out = new CostCurve(
      container,
      theme,
      value,
      setValue,
      name,
      scales,
      !isVariable
    )

    setChart(out)
  }

  useEffect(() => {
    initializeChart()

    return function cleanup() {
      if (container.current) container.current.innerHTML = ''
    }
  }, [theme, isVariable])

  useEffect(() => {
    let id = null

    const listener = () => {
      clearTimeout(id)
      id = setTimeout(() => {
        if (container.current.offsetWidth > 0) {
          initializeChart()
        }
      }, 150)
    }

    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [theme, isVariable, value])

  const format = (value) => {
    return `$${value}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateParamValueFromInput()
  }

  const updateParamValueFromInput = () => {
    let v = parseInt(displayValue)
    if (!isNaN(v)) {
      if (v < 0) {
        v = 0
      }
      if (v > 9999) {
        v = 9999
      }
      setValue([
        [0, v],
        [20, v],
        [40, v],
        [60, v],
        [80, v],
        [100, v],
      ])
      setDisplayValue(v)
      if (!isVariable && chart) chart.update(v)
    } else {
      setDisplayValue(parseInt(value[0][1]))
    }
  }

  const updateParamDisplayValue = (e) => {
    let normalized = e.target.value.replace(/[^0-9]/g, '')
    setDisplayValue(normalized)
  }

  useEffect(() => {
    if (!isVariable) {
      setDisplayValue(parseInt(value[0][1]))
    } else {
      setDisplayValue(parseInt(displayMethod))
    }
  }, [value])

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
        <Box
          sx={{
            display: 'inline-block',
            mt: [1],
            position: 'absolute',
            right: ['0px'],
          }}
        >
          <LabeledToggle
            value={isVariable}
            setValue={setIsVariable}
            labels={{ on: 'vary', off: 'fixed' }}
          />
        </Box>
      </Box>
      <Row columns={[6, 6, 5, 5]}>
        <Column start={[1]} width={[4, 4, 3, 3]}>
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
          <form onSubmit={handleSubmit}>
            <Input
              type='text'
              size='md'
              sx={{
                textAlign: 'left',
                color: 'pink',
                fontFamily: 'mono',
                letterSpacing: 'mono',
                transition: '0.2s',
                width: '100%',
                pb: [1],
                pt: ['12px'],
              }}
              onChange={updateParamDisplayValue}
              onBlur={updateParamValueFromInput}
              value={format(displayValue)}
              disabled={isVariable ? true : false}
            />
          </form>
          <Box
            sx={{
              color: 'secondary',
              fontSize: [2],
              fontFamily: 'faux',
              letterSpacing: 'faux',
              pt: [1],
            }}
          >
            {units}
          </Box>
        </Column>
        <Column start={[3, 2, 2, 2]} width={[5, 5, 4, 4]}>
          <Box sx={{ mt: ['9px', '9px', '9px', '11px'], ml: ['-10px'] }}>
            <Box ref={container} sx={{ height: '200px', width: '100%' }} />
          </Box>
        </Column>
      </Row>
    </Box>
  )
}

export default Curve
