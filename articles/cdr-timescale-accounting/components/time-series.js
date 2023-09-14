import { Box, Flex } from 'theme-ui'
import {
  Chart,
  Plot,
  Ticks,
  TickLabels,
  Axis,
  AxisLabel,
  Line,
  Grid,
  Label,
} from '@carbonplan/charts'
import { useMemo, useState } from 'react'
import { Filter } from '@carbonplan/components'

import rawData from './DOR_vs_DAC_combined.json'

const sx = {
  filterLabel: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [2, 2, 2, 3],
    mt: [0],
    mb: [1],
    pb: [0],
  },
  chartLabel: {
    ml: [-7, 2, 2, 2],
    display: 'flex',
    justifyContent: ['flex-end', 'flex-start', 'flex-start', 'flex-start'],
    mt: -2,
  },
  chartLabelInner: {
    bg: 'background',
    pl: [1, 0, 0, 0],
  },
}

const TimeSeries = (props) => {
  const [windSpeed, setWindSpeed] = useState(props.windSpeed ?? 'default')
  const [feedbacks, setFeedbacks] = useState(props.feedbacks ?? 'on')

  const { dor, dac, emissions, labels } = useMemo(() => {
    let windSpeedOptions = [windSpeed]
    if (!props.windSpeed) {
      windSpeedOptions = ['low', 'default', 'high']
    }

    let feedbacksOptions = [feedbacks]
    if (!props.feedbacks) {
      feedbacksOptions = ['on', 'off']
    }

    const getFilter = (type, ws, f) => (d) =>
      d.carbon_cycle_feedback === f &&
      d.perturbation_type === type &&
      d.years_after_deployment <= 100 &&
      (type === 'DAC' ? true : d.wind_speed === ws)

    const result = { dor: [], dac: [], emissions: [], labels: {} }
    windSpeedOptions.forEach((ws) => {
      feedbacksOptions.forEach((f) => {
        const active = ws === windSpeed && f === feedbacks

        result.dor.push({
          data: rawData.data
            .filter(getFilter('DOR', ws, f))
            .map((d) => [d.years_after_deployment, d.value]),
          key: `${ws}-${f}`,
          active,
        })
        result.dac.push({
          data: rawData.data
            .filter(getFilter('DAC', ws, f))
            .map((d) => [d.years_after_deployment, d.value]),
          key: `${ws}-${f}`,
          active,
        })
        result.emissions.push({
          data: rawData.data
            .filter(getFilter('emission', ws, f))
            .map((d) => [d.years_after_deployment, d.value]),
          key: `${ws}-${f}`,
          active,
        })

        if (active) {
          const index = result.dor.length - 1
          result.labels = {
            dor: result.dor[index].data[result.dor[index].data.length - 1][1],
            dac: result.dac[index].data[result.dac[index].data.length - 1][1],
            emissions:
              props.emissions &&
              result.emissions[index].data[
                result.emissions[index].data.length - 1
              ][1],
          }
        }
      })
    })

    return result
  }, [windSpeed, feedbacks, props.windSpeed, props.feedbacks, props.emissions])

  return (
    <Box>
      <Flex sx={{ gap: 3 }}>
        {!props.windSpeed && (
          <Box>
            <Box sx={sx.filterLabel}>Air-sea equilibration rate</Box>
            <Filter
              values={{
                Slow: windSpeed === 'low',
                Medium: windSpeed === 'default',
                Fast: windSpeed === 'high',
              }}
              setValues={(obj) => {
                if (obj['Slow']) {
                  setWindSpeed('low')
                } else if (obj['Fast']) {
                  setWindSpeed('high')
                } else {
                  setWindSpeed('default')
                }
              }}
            />
          </Box>
        )}
        {!props.feedbacks && (
          <Box>
            <Box sx={sx.filterLabel}>Carbon cycle feedbacks</Box>
            <Filter
              values={{
                on: feedbacks === 'on',
                off: feedbacks === 'off',
              }}
              setValues={(obj) => setFeedbacks(obj['on'] ? 'on' : 'off')}
            />
          </Box>
        )}
      </Flex>

      <Box sx={{ width: '100%', height: '300px', position: 'relative' }}>
        <Chart
          x={[-3, 100]}
          y={[-1, props.emissions ? 1 : 0]}
          padding={{ left: 72, top: 36 }}
        >
          <Ticks left bottom />
          <TickLabels left bottom />
          <Grid horizontal vertical />
          <Axis left bottom />
          <AxisLabel bottom units='years'>
            Time
          </AxisLabel>
          <AxisLabel left units='GtCO₂'>
            Volume
          </AxisLabel>
          <Plot>
            {dac.map(({ data, key, active }) => (
              <Line
                key={key}
                data={data}
                color='purple'
                width={2}
                sx={{ opacity: active ? 1 : 0.3, transition: '0.2s opacity' }}
              />
            ))}
            {dor.map(({ data, key, active }) => (
              <Line
                key={key}
                data={data}
                color='pink'
                width={2}
                sx={{ opacity: active ? 1 : 0.3, transition: '0.2s opacity' }}
              />
            ))}
            {props.emissions &&
              emissions.map(({ data, key, active }) => (
                <Line
                  key={key}
                  data={data}
                  color='grey'
                  width={2}
                  sx={{ opacity: active ? 1 : 0.3, transition: '0.2s opacity' }}
                />
              ))}
          </Plot>
          <Label
            x={100}
            y={Math.max(labels.dor, props.emissions ? -0.85 : -0.93)}
            sx={{ color: 'pink', ...sx.chartLabel }}
          >
            <Box sx={sx.chartLabelInner}>DOR</Box>
          </Label>
          <Label
            x={100}
            y={Math.min(labels.dac, -0.3)}
            sx={{ color: 'purple', ...sx.chartLabel }}
          >
            <Box sx={sx.chartLabelInner}>DAC</Box>
          </Label>
          {props.emissions && (
            <Label
              x={100}
              y={Math.max(labels.emissions, props.emissions ? -0.85 : -0.93)}
              sx={{ color: 'grey', ...sx.chartLabel }}
            >
              <Box sx={sx.chartLabelInner}>Emissions</Box>
            </Label>
          )}
        </Chart>
      </Box>
    </Box>
  )
}

export default TimeSeries
