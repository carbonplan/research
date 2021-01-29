import { useState, useEffect, useRef } from 'react'
import { Box, Divider, Grid, Input, Slider, Text } from 'theme-ui'
import ParamChart from '../components/charts/param-chart.js'
import AnimateHeight from 'react-animate-height'

const Parameter = ({ param, data, state }) => {
  const [value, setValue] = state
  const [expanded, setExpanded] = useState(false)
  const [displayValue, setDisplayValue] = useState(value)
  const inputRef = useRef(null)

  const handleEnter = (e) => {
    if (e.key == 'Enter') {
      inputRef.current.blur()
    }
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
              color: 'purple',
              fontSize: [4],
              borderStyle: 'solid',
              borderColor: 'primary',
              borderWidth: '0px',
              borderRadius: '0px',
              p: [0, 0, 1],
              pl: [0, 0, 0],
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
            onChange={updateParamDisplayValue}
            onBlur={updateParamValueFromInput}
            value={displayValue}
          />
          <Box>
            <Text
              sx={{
                fontSize: [1],
                mr: [param.unit ? 2 : 0],
                mt: [2],
                display: 'inline-block',
              }}
            >
              {' '}
              {param.displayName}
            </Text>
            {param.unit && (
              <Text
                sx={{
                  fontSize: [1],
                  ml: [0],
                  display: 'inline-block',
                  color: 'secondary',
                }}
              >
                {' '}
                {param.unit}{' '}
              </Text>
            )}
            {param.description && (
              <Box
                onClick={() => setExpanded(!expanded)}
                sx={{
                  position: 'relative',
                  width: '20px',
                  height: '20px',
                  ml: [2],
                  display: 'inline-block',
                  cursor: 'pointer',
                  '&:hover > #question': {
                    opacity: 1,
                  },
                }}
              >
                <Text
                  id='question'
                  sx={{
                    position: 'absolute',
                    pl: [1],
                    color: 'purple',
                    top: ['4px'],
                    opacity: expanded ? 1 : 0.6,
                    transition: '0.2s',
                  }}
                >
                  ?
                </Text>
              </Box>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <ParamChart param={param} data={data}></ParamChart>
          <Box
            sx={{
              width: ['276px', '276px', '368px'],
              left: ['2px', '2px', '6px'],
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
