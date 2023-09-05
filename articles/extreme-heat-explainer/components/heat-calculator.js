import { useState, useEffect } from 'react'
import { Box } from 'theme-ui'
import { Row, Column, Slider, FigureCaption } from '@carbonplan/components'
import { format } from 'd3-format'

import convert from './convert-units'
import UnitConverter from './unit-converter'

const wbgtShade = (tc, rh) => {
  const va = 0.5
  const t_k = tc + 273.15
  const mrt = t_k
  const wbt =
    tc * Math.atan(0.151977 * Math.sqrt(rh + 8.313659)) +
    Math.atan(tc + rh) -
    Math.atan(rh - 1.676331) +
    0.00391838 * rh ** (3 / 2) * Math.atan(0.023101 * rh) -
    4.686035
  const f = (1.1e8 * Math.pow(va, 0.6)) / (0.98 * Math.pow(0.15, 0.4))
  let a = f / 2
  const b = -f * t_k - Math.pow(mrt, 4)
  const rt1 = Math.pow(3, 1 / 3)
  const rt2 =
    Math.sqrt(3) * Math.sqrt(27 * Math.pow(a, 4) - 16 * Math.pow(b, 3)) +
    9 * Math.pow(a, 2)
  const rt3 = 2 * 2 ** (2 / 3) * b
  a = Math.max(a, 0)
  const bgt_quartic =
    (-1 / 2) *
      Math.sqrt(
        rt3 / (rt1 * Math.pow(rt2, 1 / 3)) +
          (Math.pow(2, 1 / 3) * Math.pow(rt2, 1 / 3)) / Math.pow(3, 2 / 3)
      ) +
    (1 / 2) *
      Math.sqrt(
        (4 * a) /
          Math.sqrt(
            rt3 / (rt1 * rt2 ** (1 / 3)) +
              (Math.pow(2, 1 / 3) * Math.pow(rt2, 1 / 3)) / Math.pow(3, 2 / 3)
          ) -
          (Math.pow(2, 1 / 3) * Math.pow(rt2, 1 / 3)) / Math.pow(3, 2 / 3) -
          rt3 / (rt1 * Math.pow(rt2, 1 / 3))
      )

  const bgt_c = bgt_quartic - 273.15

  return 0.7 * wbt + 0.2 * bgt_c + 0.1 * tc
}

const sunAdjustment = (radiation, wind) => {
  return 2.1564 + 0.0054 * radiation - 1.0424 * wind
}

const sx = {
  label: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [2, 2, 2, 3],
    pt: [2, 2, 2, 3],
    mt: [1],
    pb: [0],
  },
  valueBig: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    color: 'yellow',
    fontSize: [6, 7, 7, 8],
  },
  valueMedium: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    color: 'yellow',
    fontSize: [4, 5, 5, 6],
  },
  valueSmall: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    color: 'green',
    fontSize: [3, 3, 3, 4],
  },
  unit: {
    textTransform: 'none',
  },
  group: {
    borderStyle: 'solid',
    borderWidth: '0px',
    borderTopWidth: '1px',
    borderColor: 'muted',
    mb: [4, 4, 4, 5],
  },
}

const ranges = {
  temperature: [20, 55],
  humidity: [0, 99],
  radiation: [300, 900],
  wind: [0.5, 3],
}

const f = {
  wbgt: format('02d'),
  temperature: format('.1f'),
  humidity: format('02d'),
  radiation: format('03d'),
  wind: format('.1f'),
}

const HeatCalculator = () => {
  const [temperature, setTemperature] = useState(32)
  const [humidity, setHumidity] = useState(60)
  const [radiation, setRadiation] = useState(300)
  const [wind, setWind] = useState(2)
  const [result, setResult] = useState({ shade: 0, sun: 0 })
  const [units, setUnits] = useState('c')

  useEffect(() => {
    const shade = wbgtShade(temperature, humidity)
    const adjustment = sunAdjustment(radiation, wind)
    setResult({
      shade: shade,
      sun: shade + adjustment,
    })
  }, [temperature, humidity, radiation, wind])

  return (
    <>
      <Box sx={{ mb: [4, 4, 4, 5] }}>
        <Row columns={6}>
          <Column start={[1, 1]} width={[2, 2]}>
            <Box sx={{ ...sx.group }}>
              <Box sx={sx.label}>WBGT in the shade</Box>
              <Box sx={{ ...sx.valueBig, color: 'orange' }}>
                {f.wbgt(convert(result.shade, units))}
                <Box as='span' sx={{ ml: [2] }}>
                  {units == 'c' ? 'ºC' : 'ºF'}
                </Box>
              </Box>
            </Box>
          </Column>
          <Column start={[4, 4]} width={[2, 2]}>
            <Box sx={{ ...sx.group }}>
              <Box sx={sx.label}>WBGT in the sun</Box>
              <Box sx={sx.valueBig}>
                {f.wbgt(convert(result.sun, units))}
                <Box as='span' sx={{ ml: [2] }}>
                  {units == 'c' ? 'ºC' : 'ºF'}
                </Box>
              </Box>
            </Box>
          </Column>
        </Row>
        <Row columns={6}>
          <Column start={[1, 1]} width={[3, 3]}>
            <Box sx={{ ...sx.group }}>
              <Box sx={sx.label}>temperature</Box>
              <Box sx={{ ...sx.valueMedium, color: 'grey', pb: [1, 1, 1, 2] }}>
                {f.temperature(convert(temperature, units))}
                <Box as='span' sx={{ ml: [2] }}>
                  {units == 'c' ? 'ºC' : 'ºF'}
                </Box>{' '}
              </Box>
              <Slider
                onChange={(e) => setTemperature(Number(e.target.value))}
                value={temperature}
                step={0.1}
                min={ranges['temperature'][0]}
                max={ranges['temperature'][1]}
              />
            </Box>
            <Box sx={{ ...sx.group }}>
              <Box sx={sx.label}>relative humidity</Box>
              <Box sx={{ ...sx.valueMedium, color: 'grey', pb: [1, 1, 1, 2] }}>
                {f.humidity(humidity)}%{' '}
              </Box>
              <Slider
                onChange={(e) => setHumidity(Number(e.target.value))}
                value={humidity}
                step={1}
                min={ranges['humidity'][0]}
                max={ranges['humidity'][1]}
              />
            </Box>
          </Column>
          <Column start={[4, 4]} width={[3, 3]}>
            <Box sx={{ ...sx.group }}>
              <Box sx={sx.label}>solar radiation</Box>
              <Box sx={{ ...sx.valueMedium, color: 'grey', pb: [1, 1, 1, 2] }}>
                {f.radiation(radiation)}{' '}
                <Box as='span' sx={sx.unit}>
                  W/m²
                </Box>{' '}
              </Box>
              <Slider
                onChange={(e) => setRadiation(Number(e.target.value))}
                value={radiation}
                step={5}
                min={ranges['radiation'][0]}
                max={ranges['radiation'][1]}
              />
            </Box>
            <Box sx={{ ...sx.group }}>
              <Box sx={sx.label}>wind speed</Box>
              <Box sx={{ ...sx.valueMedium, color: 'grey', pb: [1, 1, 1, 2] }}>
                {f.wind(wind)}{' '}
                <Box as='span' sx={sx.unit}>
                  m/s
                </Box>{' '}
              </Box>
              <Slider
                onChange={(e) => setWind(Number(e.target.value))}
                value={wind}
                step={0.1}
                min={ranges['wind'][0]}
                max={ranges['wind'][1]}
              />
            </Box>
          </Column>
        </Row>
      </Box>
      <FigureCaption number={1}>
        A calculator for wet-bulb globe temperature that includes the same
        assumptions and approximations as used in our analysis.{' '}
        <UnitConverter units={units} setUnits={setUnits} /> Changing the four
        input variables (temperature, solar radiation, relative humidity, and
        wind speed) determines WBGT in both the sun and shade. The shade
        estimate assumes a fixed wind speed of 0.5 m/s and ignores radiation, so
        changing those parameters doesn’t affect that value.
      </FigureCaption>
    </>
  )
}

export default HeatCalculator
