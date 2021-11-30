import { useState, useEffect } from 'react'
import { Box } from 'theme-ui'
import { Input, Row, Column, Slider } from '@carbonplan/components'
import ParamChart from './charts/param-chart'
import ParamDescription from './parameter-description'
import AnimateHeight from 'react-animate-height'

const Parameter = ({ param, data, state }) => {
  const [value, setValue] = state
  const [expanded, setExpanded] = useState(false)
  const [displayValue, setDisplayValue] = useState(value)

  const handleSubmit = (e) => {
    e.preventDefault()

    updateParamValueFromInput()
  }

  const updateParamValueFromInput = () => {
    let v = parseFloat(displayValue)
    if (!isNaN(v)) {
      if (v < param.validRange[0]) {
        v = param.validRange[0]
      }
      if (v > param.validRange[1]) {
        v = param.validRange[1]
      }
      setValue(v)
      setDisplayValue(v)
    } else {
      setDisplayValue(value)
    }
  }

  const updateParamValue = (e) => {
    setValue(parseFloat(e.target.value))
  }

  const updateParamDisplayValue = (e) => {
    setDisplayValue(e.target.value)
  }

  useEffect(() => {
    setDisplayValue(value)
  }, [value])

  return (
    <Box sx={{ mb: [3] }}>
      <Row columns={[6, 6]}>
        <Column start={[1, 1]} width={[6, 2, 2, 2]}>
          <Box
            sx={{
              position: 'relative',
              top: ['10%', '10%', param.offset ? param.offset[0] : '60%'],
            }}
          >
            <form onSubmit={handleSubmit}>
              <Input
                type='text'
                size='md'
                sx={{
                  textAlign: 'left',
                  color: 'purple',
                  fontFamily: 'mono',
                  letterSpacing: 'mono',
                  width: '100%',
                  mt: [0, 0, '8px', -1],
                }}
                // onKeyPress={handleEnter}
                onChange={updateParamDisplayValue}
                onBlur={updateParamValueFromInput}
                value={displayValue}
              />
              <ParamDescription
                param={param}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            </form>
          </Box>
        </Column>
        <Column start={[1, 3]} width={[6, 5, 4, 4]}>
          <Box
            sx={{
              position: 'relative',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            <ParamChart param={param} data={data}></ParamChart>
            <Box
              sx={{
                width: ['calc(100% - 48px)'],
                top: param.offset ? param.offset[1] : '126px',
                px: ['4px', '6px', '6px', '8px'],
                position: 'absolute',
              }}
            >
              <Slider
                value={value}
                onChange={updateParamValue}
                min={param.validRange[0]}
                max={param.validRange[1]}
                step={param.step}
                sx={{
                  pointerEvents: 'all',
                }}
              />
            </Box>
          </Box>
        </Column>
      </Row>

      {param.description && (
        <Row columns={[6, 6]}>
          <Column start={[1, 1]} width={[6, 6]}>
            <AnimateHeight
              duration={75}
              height={expanded ? 'auto' : 0}
              easing={'linear'}
            >
              <Box
                sx={{
                  maxWidth: '600px',
                  fontSize: [2, 2, 2, 3],
                  color: 'purple',
                  mt: [2, 2, 2, 3],
                }}
              >
                {param.description}
              </Box>
            </AnimateHeight>
          </Column>
        </Row>
      )}
    </Box>
  )
}

export default Parameter
