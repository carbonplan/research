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
import { Filter, FigureCaption, Colors } from '@carbonplan/components'

import convert from './convert-units'
import UnitConverter from './unit-converter'

const CITY_LABELS = {
  bangkok: 'Bangkok',
  dubai: 'Dubai',
  karachi: 'Karachi',
  phoenix: 'Phoenix',
}

const APPLIED_LABELS = {
  raw: 'before',
  'bias-corrected': 'after',
}

const x = Array(366)
  .fill(0)
  .map((d, i) => i)

const yRange = {
  c: {
    Bangkok: [23, 36],
    Dubai: [16, 37],
    Karachi: [16, 36],
    Phoenix: [10, 36],
  },
  f: {
    Bangkok: [convert(23, 'f'), convert(36, 'f')],
    Dubai: [convert(16, 'f'), convert(37, 'f')],
    Karachi: [convert(16, 'f'), convert(36, 'f')],
    Phoenix: [convert(10, 'f'), convert(36, 'f')],
  },
}

const yTicks = {
  c: {
    Bangkok: [24, 26, 28, 30, 32, 34, 36],
    Dubai: [16, 20, 24, 28, 32, 36],
    Karachi: [16, 20, 24, 28, 32, 36],
    Phoenix: [10, 14, 18, 22, 26, 30, 34],
  },
  f: {
    Bangkok: [75, 80, 85, 90, 95],
    Dubai: [65, 75, 85, 95],
    Karachi: [65, 75, 85, 95],
    Phoenix: [55, 65, 75, 85, 95],
  },
}

const xTicks = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 366]
const xTickLabels = [14, 45, 74, 104, 135, 165, 195, 226, 257, 287, 318, 350]

const BiasCorrection = () => {
  const [city, setCity] = useState('Dubai')
  const [applied, setApplied] = useState('before')
  const [data, setData] = useState(null)
  const [renderData, setRenderData] = useState(null)
  const [units, setUnits] = useState('c')

  useEffect(() => {
    fetch(
      'https://carbonplan-climate-impacts.s3.us-west-2.amazonaws.com/extreme-heat/v1.0/outputs/web/explainer/bias_correction.json'
    )
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

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
              raw: applied === 'before',
              'bias-corrected': applied === 'after',
            }}
            setValues={(obj) =>
              setApplied(APPLIED_LABELS[Object.keys(obj).find((k) => obj[k])])
            }
            order={['raw', 'bias-corrected']}
            sx={{ mb: [5] }}
          />
        </Flex>
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
            <AxisLabel left>
              WBGT in the shade {units == 'c' ? 'ºC' : 'ºF'}
            </AxisLabel>
            <Label
              sx={{
                fontSize: [1, 1, 1, 2],
                color: 'red',
                mb: '-3px',
                ml: '15px',
              }}
              x={0}
              y={
                yRange[units][city][1] -
                (yRange[units][city][1] - yRange[units][city][0]) * 0.17
              }
              verticalAlign='bottom'
            >
              2040-2059
            </Label>
            <Label
              sx={{
                fontSize: [1, 1, 1, 2],
                color: 'pink',
                mb: '-3px',
                ml: '15px',
              }}
              x={0}
              y={
                yRange[units][city][1] -
                (yRange[units][city][1] - yRange[units][city][0]) * 0.27
              }
              verticalAlign='bottom'
            >
              2020-2039
            </Label>
            <Label
              sx={{
                fontSize: [1, 1, 1, 2],
                color: 'purple',
                mb: '-3px',
                ml: '15px',
              }}
              x={0}
              y={
                yRange[units][city][1] -
                (yRange[units][city][1] - yRange[units][city][0]) * 0.37
              }
              verticalAlign='bottom'
            >
              1985-2014
            </Label>
            <Label
              sx={{
                fontSize: [1, 1, 1, 2],
                color: 'secondary',
                mb: '-3px',
                ml: '15px',
              }}
              x={0}
              y={
                yRange[units][city][1] -
                (yRange[units][city][1] - yRange[units][city][0]) * 0.07
              }
              verticalAlign='bottom'
            >
              reference
            </Label>
            <Plot>
              {data && (
                <>
                  <Line
                    data={data[city]['ref'].map((d, i) => [
                      x[i],
                      convert(d, units),
                    ])}
                    color={'secondary'}
                    width={2}
                  />
                  <Line
                    data={data[city]['historical'].map((d, i) => [
                      x[i],
                      convert(d, units),
                    ])}
                    color={'purple'}
                    width={2}
                    sx={{
                      strokeDasharray: '5,5',
                      opacity: applied === 'before' ? 1 : 0.5,
                      transition: 'opacity 0.15s',
                    }}
                  />
                  {applied === 'after' && (
                    <Line
                      data={data[city]['historical-bc'].map((d, i) => [
                        x[i],
                        convert(d, units),
                      ])}
                      color={'purple'}
                      width={2}
                    />
                  )}
                  <Line
                    data={data[city]['ssp245-2030'].map((d, i) => [
                      x[i],
                      convert(d, units),
                    ])}
                    color={'pink'}
                    width={2}
                    sx={{
                      strokeDasharray: '5,5',
                      opacity: applied === 'before' ? 1 : 0.5,
                      transition: 'opacity 0.15s',
                    }}
                  />
                  {applied === 'after' && (
                    <Line
                      data={data[city]['ssp245-2030-bc'].map((d, i) => [
                        x[i],
                        convert(d, units),
                      ])}
                      color={'pink'}
                      width={2}
                    />
                  )}
                  <Line
                    data={data[city]['ssp245-2050'].map((d, i) => [
                      x[i],
                      convert(d, units),
                    ])}
                    color={'red'}
                    width={2}
                    sx={{
                      strokeDasharray: '5,5',
                      opacity: applied === 'before' ? 1 : 0.5,
                      transition: 'opacity 0.15s',
                    }}
                  />
                  {applied === 'after' && (
                    <Line
                      data={data[city]['ssp245-2050-bc'].map((d, i) => [
                        x[i],
                        convert(d, units),
                      ])}
                      color={'red'}
                      width={2}
                    />
                  )}
                </>
              )}
            </Plot>
          </Chart>
        </Box>
      </Box>
      <FigureCaption number={2}>
        Timeseries of WBGT in the shade for four example cities, with and
        without bias-correction (dashed lines show “raw” and solid lines show
        “bias-corrected”). Results are averaged over years for a historical
        period (<Colors.Purple>1985-2014</Colors.Purple>) and two future periods{' '}
        <Box as='span' sx={{ whiteSpace: 'nowrap' }}>
          (<Colors.Pink>2020-2039</Colors.Pink>
        </Box>{' '}
        and{' '}
        <Box as='span' sx={{ whiteSpace: 'nowrap' }}>
          <Colors.Red>2040-2059</Colors.Red>)
        </Box>
        , from a single example GCM (ACCESS-CM2). The gray reference line shows
        data from UHE-Daily. <UnitConverter units={units} setUnits={setUnits} />
      </FigureCaption>
    </>
  )
}

export default BiasCorrection
