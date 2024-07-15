import React from 'react'
import { Box, Flex, Label, Checkbox, Slider } from 'theme-ui'

const CarbonateSlider = ({
  data,
  slidableVariable,
  varIndex,
  setVarIndex,
  equilibrated,
  setEquilibrated,
}) => {
  return (
    <Box
      sx={{
        fontFamily: 'mono',
        width: 275,
      }}
    >
      {data.dic && (
        <>
          <Flex
            sx={{
              justifyContent: 'space-between',
              gap: 4,
              mb: 3,
            }}
          >
            <Flex
              sx={{
                flexDirection: 'column',
                flex: 1,
              }}
            >
              <Box sx={{ fontSize: 5 }}>
                {data.dic[varIndex] > 0
                  ? `+${data.dic[varIndex].toFixed()}`
                  : data.dic[varIndex].toFixed()}
              </Box>
              <Box
                sx={{
                  color: 'secondary',
                  fontSize: 1,
                }}
              >
                Ocean carbon (DIC)
              </Box>
            </Flex>
            <Flex
              sx={{
                flexDirection: 'column',
                flex: 1,
              }}
            >
              <Box sx={{ fontSize: 5 }}>
                {data.ph[varIndex] > 0
                  ? `+${data.ph[varIndex].toFixed(2)}`
                  : data.ph[varIndex].toFixed(2)}
              </Box>
              <Box
                sx={{
                  color: 'secondary',
                  fontSize: 1,
                }}
              >
                pH
              </Box>
            </Flex>
          </Flex>
          <Flex sx={{ mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ fontSize: 4 }}>
                {data.co2[varIndex] > 0
                  ? `+${data.co2[varIndex].toFixed()}`
                  : data.co2[varIndex].toFixed()}
              </Box>
              <Box
                sx={{
                  color: 'secondary',
                  fontSize: 1,
                }}
              >
                CO₂
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ fontSize: 4 }}>
                {data.hco3[varIndex] > 0
                  ? `+${data.hco3[varIndex].toFixed()}`
                  : data.hco3[varIndex].toFixed()}
              </Box>
              <Box
                sx={{
                  color: 'secondary',
                  fontSize: 1,
                }}
              >
                HCO₃
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ fontSize: 4 }}>
                {data.co3[varIndex] > 0
                  ? `+${data.co3[varIndex].toFixed()}`
                  : data.co3[varIndex].toFixed()}
              </Box>
              <Box
                sx={{
                  color: 'secondary',
                  fontSize: 1,
                }}
              >
                CO₃
              </Box>
            </Box>
          </Flex>
        </>
      )}
      <Box
        sx={{
          fontSize: 1,
          mb: 3,
          color: 'secondary',
        }}
      >
        (∆µmol / kg seawater)
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Slider
          value={varIndex}
          onChange={(e) => setVarIndex(parseFloat(e.target.value))}
          min={0}
          max={
            data && slidableVariable.key in data
              ? Object.keys(data[slidableVariable.key]).length - 1
              : 0
          }
          step={1}
        />
      </Box>
      <Flex
        sx={{
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ fontSize: 4 }}>
          +
          {data[slidableVariable.key] &&
            data[slidableVariable.key][varIndex].toFixed(0)}
        </Box>
        <Box sx={{ color: 'secondary' }}>{slidableVariable.name}</Box>
        {equilibrated !== undefined && (
          <Label
            sx={{
              cursor: 'pointer',
              pt: 2,
              color: 'secondary',
              justifyContent: 'center',
            }}
          >
            <Checkbox
              checked={equilibrated}
              onChange={(e) => setEquilibrated(e.target.checked)}
            />
            Equilibrated
          </Label>
        )}
      </Flex>
    </Box>
  )
}

export default CarbonateSlider
