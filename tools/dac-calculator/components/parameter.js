import { useState, useEffect, useRef, memo } from 'react'
import { Box, Divider, Grid, Input, Slider, Text } from 'theme-ui'
import ParamChart from './charts/param-chart'
import ParamDescription from './parameter-description'
import AnimateHeight from 'react-animate-height'

const Parameter = ({ param, data, state }) => {
  const [value, setValue] = state
  const [expanded, setExpanded] = useState(false)
  const [displayValue, setDisplayValue] = useState(value)
  const [inputFocus, setInputFocus] = useState(false)
  const inputRef = useRef(null)

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
      <Grid columns={[1, 1, '200px 1fr']}>
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
              maxWidth: '195px',
              color: 'purple',
              fontSize: [4],
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
        <Box
          sx={{
            position: 'relative',
            userSelect: 'none',
          }}
        >
          <ParamChart param={param} data={data}></ParamChart>
          <Box
            sx={{
              width: [
                'calc(min(89.1%, 380px) + 2px)',
                'calc(min(89.1%, 380px) - 4px)',
                'calc(min(89.1%, 380px) - 12px)',
              ],
              left: ['0px', '2px', '6px'],
              top: param.offset ? param.offset[1] : '118px',
              position: 'absolute',
            }}
          >
            <Slider
              type='range'
              value={value}
              onChange={updateParamValue}
              min={param.validRange[0]}
              max={param.validRange[1]}
              step={param.step}
              sx={{
                '&::-webkit-slider-thumb': {
                  height: [24, 24, 16],
                  width: [24, 24, 16],
                },
              }}
            />
          </Box>
        </Box>
      </Grid>
      {param.description && (
        <AnimateHeight
          duration={75}
          height={expanded ? 'auto' : 0}
          easing={'linear'}
        >
          <Text
            sx={{
              maxWidth: '600px',
              fontSize: [2],
              color: 'purple',
              mt: [2],
            }}
          >
            {param.description}
          </Text>
        </AnimateHeight>
      )}
    </Box>
  )
}

export default Parameter
