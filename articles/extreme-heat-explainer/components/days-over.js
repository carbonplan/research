import { useState, useEffect } from 'react'
import { Box, Flex } from 'theme-ui'
import {
  Chart,
  Ticks,
  TickLabels,
  Axis,
  AxisLabel,
  Plot,
  Line,
  Label,
  Grid,
} from '@carbonplan/charts'
import { Slider, Filter, FigureCaption, Colors } from '@carbonplan/components'
import { format } from 'd3-format'

import convert from './convert-units.js'
import UnitConverter from './unit-converter.js'

const cities = ['Bangkok', 'Dubai', 'Karachi', 'Phoenix']

const CITY_LABELS = {
  bangkok: 'Bangkok',
  dubai: 'Dubai',
  karachi: 'Karachi',
  phoenix: 'Phoenix',
}

const SCENARIO_LABELS = {
  '1985-2014': 'historical',
  '2020-2039': 'ssp245-2030',
  '2040-2059': 'ssp245-2050',
}

const f = format('.1f')

const x = Array(366)
  .fill(0)
  .map((d, i) => i)

const yRange = {
  c: {
    Bangkok: [20, 44],
    Dubai: [14, 44],
    Karachi: [14, 44],
    Phoenix: [4, 42],
  },
  f: {
    Bangkok: [convert(20, 'f'), convert(44, 'f')],
    Dubai: [convert(14, 'f'), convert(44, 'f')],
    Karachi: [convert(14, 'f'), convert(44, 'f')],
    Phoenix: [convert(4, 'f'), convert(42, 'f')],
  },
}

const yTicks = {
  c: {
    Bangkok: [22, 26, 30, 34, 38, 42],
    Dubai: [16, 20, 24, 28, 32, 36, 40, 44],
    Karachi: [16, 20, 24, 28, 32, 36, 40, 44],
    Phoenix: [6, 10, 14, 18, 22, 26, 30, 34, 38, 42],
  },
  f: {
    Bangkok: [70, 80, 90, 100, 110],
    Dubai: [60, 70, 80, 90, 100, 110],
    Karachi: [60, 70, 80, 90, 100, 110],
    Phoenix: [40, 50, 60, 70, 80, 90, 100],
  },
}

const years = {
  historical: Array(30)
    .fill(0)
    .map((d, i) => i + 1985),
  'ssp245-2030': Array(20)
    .fill(0)
    .map((d, i) => i + 2020),
  'ssp245-2050': Array(20)
    .fill(0)
    .map((d, i) => i + 2040),
}

const xTicks = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 366]
const xTickLabels = [14, 45, 74, 104, 135, 165, 195, 226, 257, 287, 318, 350]

const DaysOver = () => {
  const [city, setCity] = useState('Dubai')
  const [scenario, setScenario] = useState('historical')
  const [threshold, setThreshold] = useState(32)
  const [data, setData] = useState(null)
  const [means, setMeans] = useState(null)
  const [daysOver, setDaysOver] = useState(null)
  const [units, setUnits] = useState('c')

  useEffect(() => {
    fetch(
      'https://carbonplan-climate-impacts.s3.us-west-2.amazonaws.com/extreme-heat/v1.0/outputs/web/explainer/sun_shade_thresholds.json'
    )
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  useEffect(() => {
    if (data) {
      const obj = {}
      cities.forEach((d) => {
        obj[d] = {
          'historical-shade': x.map(
            (ix) =>
              years['historical']
                .map((iy) => data[d]['historical-shade'][iy][ix])
                .filter((d) => d)
                .reduce((a, b) => a + b, 0) /
              years['historical']
                .map((iy) => data[d]['historical-shade'][iy][ix])
                .filter((d) => d).length
          ),
          'historical-sun': x.map(
            (ix) =>
              years['historical']
                .map((iy) => data[d]['historical-sun'][iy][ix])
                .filter((d) => d)
                .reduce((a, b) => a + b, 0) /
              years['historical']
                .map((iy) => data[d]['historical-sun'][iy][ix])
                .filter((d) => d).length
          ),
          'ssp245-2030-shade': x.map(
            (ix) =>
              years['ssp245-2030']
                .map((iy) => data[d]['ssp245-2030-shade'][iy][ix])
                .filter((d) => d)
                .reduce((a, b) => a + b, 0) /
              years['ssp245-2030']
                .map((iy) => data[d]['ssp245-2030-shade'][iy][ix])
                .filter((d) => d).length
          ),
          'ssp245-2030-sun': x.map(
            (ix) =>
              years['ssp245-2030']
                .map((iy) => data[d]['ssp245-2030-sun'][iy][ix])
                .filter((d) => d)
                .reduce((a, b) => a + b, 0) /
              years['ssp245-2030']
                .map((iy) => data[d]['ssp245-2030-sun'][iy][ix])
                .filter((d) => d).length
          ),
          'ssp245-2050-shade': x.map(
            (ix) =>
              years['ssp245-2050']
                .map((iy) => data[d]['ssp245-2050-shade'][iy][ix])
                .filter((d) => d)
                .reduce((a, b) => a + b, 0) /
              years['ssp245-2050']
                .map((iy) => data[d]['ssp245-2050-shade'][iy][ix])
                .filter((d) => d).length
          ),
          'ssp245-2050-sun': x.map(
            (ix) =>
              years['ssp245-2050']
                .map((iy) => data[d]['ssp245-2050-sun'][iy][ix])
                .filter((d) => d)
                .reduce((a, b) => a + b, 0) /
              years['ssp245-2050']
                .map((iy) => data[d]['ssp245-2050-sun'][iy][ix])
                .filter((d) => d).length
          ),
        }
      })
      setMeans(obj)
    }
  }, [data])

  useEffect(() => {
    if (data) {
      setDaysOver({
        shade: parseInt(
          years[scenario]
            .map((d) =>
              data[city][`${scenario}-shade`][d]
                .map((i) => (i > threshold ? 1 : 0))
                .reduce((a, b) => a + b, 0)
            )
            .reduce((a, b) => a + b, 0) / years[scenario].length
        ),
        sun: parseInt(
          years[scenario]
            .map((d) =>
              data[city][`${scenario}-sun`][d]
                .map((i) => (i > threshold ? 1 : 0))
                .reduce((a, b) => a + b, 0)
            )
            .reduce((a, b) => a + b, 0) / years[scenario].length
        ),
      })
    }
  }, [data, city, scenario, threshold])

  return (
    <>
      <Box sx={{ mb: [4, 4, 4, 5] }}>
        <Flex sx={{ justifyContent: 'space-between' }}>
          <Filter
            values={{
              bangkok: city === 'Bangkok',
              dubai: city === 'Dubai',
              karachi: city === 'Karachi',
              phoenix: city === 'Phoenix',
            }}
            setValues={(obj) =>
              setCity(CITY_LABELS[Object.keys(obj).find((k) => obj[k])])
            }
            order={['dubai', 'karachi', 'bangkok', 'phoenix']}
            sx={{ mb: [5] }}
          />
          <Filter
            values={{
              '1985-2014': scenario === 'historical',
              '2020-2039': scenario === 'ssp245-2030',
              '2040-2059': scenario === 'ssp245-2050',
            }}
            order={['1985-2014', '2020-2039', '2040-2059']}
            setValues={(obj) =>
              setScenario(SCENARIO_LABELS[Object.keys(obj).find((k) => obj[k])])
            }
            sx={{ mb: [5] }}
          />
        </Flex>
        <Box
          sx={{
            zIndex: 5000,
            float: 'right',
            mt: ['122px', '122px', '122px', '196px'],
            mr: ['-133px', '-133px', '-133px', '-207px'],
            position: 'relative',
          }}
        >
          <Slider
            sx={{
              width: ['267px', '267px', '267px', '416px'],
              mt: '1px',
              display: ['none', 'inherit', 'inherit', 'inherit'],
              pointerEvents: 'all',
              transform: 'rotate(-90deg)',
              backgroundColor: 'rgb(0,0,0,0)',
              ':focus-visible': {
                backgroundColor: 'rgb(0,0,0,0) !important',
                outline: 'none !important',
              },
              ':focus': {
                backgroundColor: 'rgb(0,0,0,0) !important',
                outline: 'none !important',
                color: 'primary',
                '&::-webkit-slider-thumb': {
                  boxShadow: ({ colors }) => `0 0 0 4px ${colors.secondary}`,
                },
                '&::-moz-range-thumb': {
                  boxShadow: ({ colors }) => `0 0 0 4px ${colors.secondary}`,
                },
              },
            }}
            onChange={(e) => setThreshold(Number(e.target.value))}
            value={threshold}
            step={0.1}
            min={yRange['c'][city][0]}
            max={yRange['c'][city][1]}
          />
        </Box>
        <Box
          sx={{ width: '100%', height: ['300px', '300px', '300px', '450px'] }}
        >
          <Chart x={[0, 366]} y={yRange[units][city]} padding={{ left: 55 }}>
            <Ticks left values={yTicks[units][city]} />
            <TickLabels
              left
              values={yTicks[units][city]}
              labels={yTicks[units][city]}
            />
            <Ticks bottom values={xTicks} />
            <Axis left bottom />
            <Grid vertical values={xTicks.slice(1, xTicks.length)} />
            <TickLabels
              bottom
              values={xTickLabels.filter((d, i) => i % 3 == 0)}
              labels={[
                'JAN',
                'FEB',
                'MAR',
                'APR',
                'MAY',
                'JUN',
                'JUL',
                'AUG',
                'SEP',
                'OCT',
                'NOV',
                'DEC',
              ].filter((d, i) => i % 3 == 0)}
              sx={{ display: ['initial', 'none', 'none', 'none'] }}
            />
            <TickLabels
              bottom
              values={xTickLabels}
              labels={[
                'JAN',
                'FEB',
                'MAR',
                'APR',
                'MAY',
                'JUN',
                'JUL',
                'AUG',
                'SEP',
                'OCT',
                'NOV',
                'DEC',
              ]}
              sx={{ display: ['none', 'initial', 'initial', 'initial'] }}
            />
            <AxisLabel bottom>Time of year</AxisLabel>
            <AxisLabel left>WBGT {units == 'c' ? 'ºC' : 'ºF'}</AxisLabel>
            {daysOver && (
              <Label
                sx={{
                  fontSize: [4, 4, 4, 5],
                  color: 'orange',
                  mb: '-3px',
                  bg: 'background',
                  zIndex: 5000,
                  position: 'relative',
                  px: [2],
                  ml: '15px',
                }}
                x={0}
                y={
                  yRange[units][city][1] -
                  (yRange[units][city][1] - yRange[units][city][0]) * 0.22
                }
                verticalAlign='bottom'
              >
                {String(daysOver['shade']).padStart(3, '0')}
                <Box sx={{ fontSize: [1, 1, 1, 2] }} as='span'>
                  {' '}
                  {`days (shade)`}
                </Box>
              </Label>
            )}
            {daysOver && (
              <Label
                sx={{
                  fontSize: [4, 4, 4, 5],
                  color: 'yellow',
                  mb: '-3px',
                  bg: 'background',
                  zIndex: 5000,
                  position: 'relative',
                  px: [2],
                  ml: '15px',
                }}
                x={0}
                y={
                  yRange[units][city][1] -
                  (yRange[units][city][1] - yRange[units][city][0]) * 0.1
                }
                verticalAlign='bottom'
              >
                {String(daysOver['sun']).padStart(3, '0')}
                <Box sx={{ fontSize: [1, 1, 1, 2] }} as='span'>
                  {' '}
                  {`days (sun)`}
                </Box>
              </Label>
            )}
            <Label
              sx={{
                fontSize: [1, 1, 1, 2],
                color: 'secondary',
                mb: '-3px',
                position: 'relative',
                px: [2],
                ml: '15px',
              }}
              x={0}
              y={
                yRange[units][city][1] -
                (yRange[units][city][1] - yRange[units][city][0]) * 0.95
              }
              verticalAlign='bottom'
            >
              threshold:{' '}
              <Box sx={{ color: 'primary' }} as='span'>{`${f(
                convert(threshold, units)
              )} ${units == 'c' ? 'ºC' : 'ºF'}`}</Box>
            </Label>
            <Plot>
              <Line
                data={[
                  [0, convert(threshold, units)],
                  [366, convert(threshold, units)],
                ]}
                color={'primary'}
                width={1}
                sx={{ strokeDasharray: '5,5' }}
              />
              {means && (
                <Line
                  data={means[city][`${scenario}-shade`].map((d, i) => [
                    x[i],
                    convert(d, units),
                  ])}
                  color={'orange'}
                  width={2}
                />
              )}
              {means && (
                <Line
                  data={means[city][`${scenario}-sun`].map((d, i) => [
                    x[i],
                    convert(d, units),
                  ])}
                  color={'yellow'}
                  width={2}
                />
              )}
              {data &&
                years[scenario].map((d, i) => {
                  return (
                    <g key={i}>
                      <Line
                        data={data[city][`${scenario}-shade`][d].map((d, i) => [
                          x[i],
                          convert(d, units),
                        ])}
                        color={'orange'}
                        width={0.25}
                        sx={{ opacity: 0.4 }}
                      />
                      <Line
                        data={data[city][`${scenario}-sun`][d].map((d, i) => [
                          x[i],
                          convert(d, units),
                        ])}
                        color={'yellow'}
                        width={0.25}
                        sx={{ opacity: 0.4 }}
                      />
                    </g>
                  )
                })}
            </Plot>
          </Chart>
        </Box>
      </Box>
      <FigureCaption number={3}>
        Timeseries of WBGT in the <Colors.Orange>shade</Colors.Orange> and in
        the <Colors.Yellow>sun</Colors.Yellow> for four example cities. Thin
        lines show individual years and thick lines show an average. Results are
        shown for three time periods, one historical (1985-2014) and two future
        (2020-2039 and 2040-2059), from a single example GCM (ACCESS-CM2).
        Moving the horizontal line changes the threshold; numbers show the count
        of days exceeding the specified threshold, averaged across years.{' '}
        <UnitConverter units={units} setUnits={setUnits} />
      </FigureCaption>
    </>
  )
}

export default DaysOver
