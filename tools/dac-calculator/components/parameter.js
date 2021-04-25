import { useState, useEffect, useRef, memo } from 'react'
import { useThemeUI, Box, Divider, Grid, Input, Text } from 'theme-ui'
import { Row, Column, Slider } from '@carbonplan/components'
import ParamChart from './charts/param-chart'
import ParamDescription from './parameter-description'
import AnimateHeight from 'react-animate-height'

const Parameter = ({ param, data, state }) => {
  const [value, setValue] = state
  const [expanded, setExpanded] = useState(false)
  const [displayValue, setDisplayValue] = useState(value)
  const [inputFocus, setInputFocus] = useState(false)
  const inputRef = useRef(null)
  const { theme } = useThemeUI()

  const handleEnter = (e) => {
    if (e.key == 'Enter') {
      inputRef.current.blur()
    }
  }

  const updateParamValueFromInput = () => {
    setInputFocus(false)
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
              top: ['10%', '10%', param.offset ? param.offset[0] : '54%'],
            }}
          >
            <Input
              type='text'
              ref={inputRef}
              sx={{
                textAlign: 'left',
                color: 'purple',
                fontSize: [4, 4, 4, 5],
                fontFamily: 'mono',
                letterSpacing: 'mono',
                borderStyle: 'solid',
                borderColor: inputFocus ? 'primary' : 'secondary',
                borderWidth: '0px',
                borderRadius: '0px',
                p: [1, 1, 1],
                pl: [0, 0, 0],
                transition: '0.15s',
                borderBottomWidth: '1px',
                'input::-webkit-outer-spin-button': {
                  WebkitAppearance: 'none',
                  margin: 0,
                },
                'input::-webkit-inner-spin-button': {
                  WebkitAppearance: 'none',
                  margin: 0,
                },
                ':focus-visible': {
                  outline: 'none !important',
                  background: 'none !important',
                },
              }}
              onKeyPress={handleEnter}
              onFocus={() => setInputFocus(true)}
              onChange={updateParamDisplayValue}
              onBlur={updateParamValueFromInput}
              value={displayValue}
            />
            <ParamDescription
              param={param}
              expanded={expanded}
              setExpanded={setExpanded}
            />
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
                width: ['calc(100% - 54px)'],
                top: param.offset ? param.offset[1] : '118px',
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
