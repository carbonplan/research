import React, { useMemo, useState } from 'react'
import { Box, Flex, get, useThemeUI } from 'theme-ui'
import { Filter } from '@carbonplan/components'
import { useSpring, animated } from '@react-spring/web'
import {
  Chart,
  Plot,
  Ticks,
  TickLabels,
  Axis,
  AxisLabel,
  Line,
  Grid,
  Area,
  Label,
} from '@carbonplan/charts'

import highEfficiencyRawData from './data/net_polygon_137_inverted_smoothed_w15.json'
import lowEfficiencyRawData from './data/net_polygon_93_inverted_smoothed_w15.json'
import { Arrow } from '@carbonplan/icons'

const timeScale = 15
const animationDuration = 150

const lineStyle = {
  transition: `all ${animationDuration}ms linear`,
}

const sx = {
  filterLabel: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [2, 2, 2, 3],
    mt: [0],
    pb: [0],
  },
}

const AnimatedLabel = animated(Label)
const AnimatedChart = animated(Chart)
const AnimatedBox = animated(Box)

const TimeSeries = () => {
  const [storageState, setStorageState] = useState('leakage')
  const [efficiencyState, setEfficiencyState] = useState('high')

  const { theme } = useThemeUI()

  const efficiencyData = useMemo(() => {
    const rawData =
      efficiencyState === 'high' ? highEfficiencyRawData : lowEfficiencyRawData
    return rawData.map((item) => [item.year, item.efficiency])
  }, [efficiencyState])

  const storageData = useMemo(() => {
    const rampStart = 0
    const rampEnd = 2
    let maxValue = 0.7
    if (storageState === 'utilization') {
      maxValue = 1
    } else if (storageState === 'leakage') {
      maxValue = 0.1
    } else if (storageState === 'none') {
      maxValue = 0
    }

    return efficiencyData.map((item) => {
      const year = item[0]
      if (year <= rampStart) {
        return [year, 0]
      } else if (year >= rampEnd) {
        return [year, maxValue]
      } else {
        const progress = (year - rampStart) / (rampEnd - rampStart)
        return [year, maxValue * progress]
      }
    })
  }, [storageState, efficiencyData])

  const atmosphereData = useMemo(() => {
    return efficiencyData.map((item, i) => {
      return [item[0], item[1] + storageData[i][1]]
    })
  }, [efficiencyData, storageData])

  const storageLabel = storageData[storageData.length - 1][1]
  const atmosphereLabel = atmosphereData[atmosphereData.length - 1][1]
  const efficiencyLabel = efficiencyData[efficiencyData.length - 1][1]

  const gradientId = 'atmosphere-gradient'

  const { domain, storageLabelY, atmosphereLabelY, efficiencyLabelY } =
    useSpring({
      domain: [0, timeScale],
      storageLabelY: storageLabel,
      atmosphereLabelY: atmosphereLabel,
      efficiencyLabelY: efficiencyLabel,
      config: {
        duration: animationDuration,
        easing: (t) => t,
      },
    })

  return (
    <>
      <Flex
        sx={{
          justifyContent: 'space-between',
          rowGap: 3,
          columnGap: 5,
          flexWrap: 'wrap',
          mb: 5,
        }}
      >
        <Box>
          <Box sx={{ ...sx.filterLabel }}>Ocean Reuptake</Box>
          <Flex
            sx={{
              alignItems: 'baseline',
              mt: 2,
            }}
          >
            <Filter
              values={{
                high: efficiencyState === 'high',
                low: efficiencyState === 'low',
              }}
              setValues={(newValues) => {
                if (newValues.high) setEfficiencyState('high')
                else if (newValues.low) setEfficiencyState('low')
              }}
            />
          </Flex>
        </Box>
        <Box>
          <Box sx={{ ...sx.filterLabel }}>Storage Loss</Box>
          <Flex
            sx={{
              alignItems: 'baseline',
              mt: 2,
            }}
          >
            <Filter
              values={{
                none: storageState === 'none',
                leakage: storageState === 'leakage',
                utilization: storageState === 'utilization',
              }}
              setValues={(newValues) => {
                if (newValues.utilization) setStorageState('utilization')
                else if (newValues.leakage) setStorageState('leakage')
                else if (newValues.none) setStorageState('none')
              }}
            />
          </Flex>
        </Box>

        <Box>
          <Box sx={sx.filterLabel}>Atmospheric Impact</Box>
          <Flex
            sx={{
              alignItems: 'baseline',
              gap: 2,
            }}
          >
            <Box
              sx={{
                fontFamily: 'mono',
                fontSize: [4, 4, 4, 4],
              }}
            >
              <AnimatedBox
                as='span'
                style={{
                  color: atmosphereLabelY.to((val) =>
                    val > 0
                      ? get(theme, 'colors.red')
                      : get(theme, 'colors.blue')
                  ),
                }}
              >
                {atmosphereLabelY.to((val) => Math.abs(val).toFixed(1))}
              </AnimatedBox>
              <AnimatedBox
                sx={{
                  display: 'inline-block',
                  ml: 2,
                  fontFamily: 'mono',
                  letterSpacing: 'mono',
                  textTransform: 'uppercase',
                  fontSize: [1, 1, 1, 2],
                }}
                style={{
                  color: atmosphereLabelY.to((val) =>
                    val > 0
                      ? get(theme, 'colors.red')
                      : get(theme, 'colors.blue')
                  ),
                }}
              >
                {atmosphereLabelY.to((val) =>
                  val < 0 ? 'Removal' : 'Emission'
                )}
              </AnimatedBox>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Box sx={{ width: '100%', height: '350px', position: 'relative' }}>
        <AnimatedChart x={domain} y={[-1, 1]}>
          <Ticks left bottom />
          <TickLabels bottom />
          <Axis left />
          <TickLabels
            values={[-1.0, -0.5, 0.0, 0.5, 1.0]}
            left
            format={(value) => value.toFixed(1)}
          />

          <Grid horizontal vertical />
          <AxisLabel units='years' bottom>
            Time
          </AxisLabel>
          <AxisLabel left arrow={false} align='left'>
            <Arrow
              sx={{
                mr: 1,
                mb: '6px',
                width: 11,
                height: 11,
                transform: 'rotate(-45deg)',
              }}
            />
            Removals
          </AxisLabel>

          <AxisLabel left align='right'>
            Emissions
          </AxisLabel>

          <AxisLabel left align='center' arrow={false} units='GtCO₂' />

          <Plot>
            <defs>
              <linearGradient
                id={gradientId}
                x1='0%'
                y1='100%'
                x2='0%'
                y2='0%'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0%' stopColor={get(theme, 'colors.blue')} />
                <stop offset='50%' stopColor={get(theme, 'colors.blue')} />
                <stop offset='50%' stopColor={get(theme, 'colors.red')} />
                <stop offset='100%' stopColor={get(theme, 'colors.red')} />
              </linearGradient>
            </defs>
            <Line
              data={[
                [0, 0],
                [timeScale, 0],
              ]}
              color='secondary'
              width={1}
            />
            <Area
              data={[[0, 0, 0], ...atmosphereData.map((d) => [d[0], d[1], 0])]}
              color={`url(#${gradientId})`}
              sx={{ ...lineStyle, opacity: 0.15 }}
            />
            <Line
              data={storageData}
              color='primary'
              width={2}
              sx={{ ...lineStyle, strokeDasharray: '4,8' }}
            />
            <Line
              data={atmosphereData}
              color={`url(#${gradientId})`}
              width={3}
              sx={lineStyle}
            />
            <Line
              data={efficiencyData}
              color='primary'
              width={2}
              sx={{ ...lineStyle, strokeDasharray: '4,8' }}
            />
          </Plot>
          <AnimatedLabel
            x={timeScale}
            y={storageLabelY}
            align='right'
            verticalAlign='bottom'
            height={1}
            sx={{ color: 'primary', my: '3px' }}
          >
            Storage Loss
          </AnimatedLabel>
          <AnimatedLabel
            x={timeScale}
            y={atmosphereLabelY}
            align='right'
            verticalAlign={'bottom'}
            height={1}
            color={atmosphereLabelY.to((val) =>
              val > 0 ? get(theme, 'colors.red') : get(theme, 'colors.blue')
            )}
            sx={{ my: '7px', width: [80, 'auto'] }}
          >
            Atmospheric Impact
          </AnimatedLabel>
          <AnimatedLabel
            x={timeScale}
            y={efficiencyLabelY}
            align='right'
            verticalAlign={'top'}
            height={1}
            sx={{ color: 'primary', my: '3px' }}
          >
            Ocean Reuptake
          </AnimatedLabel>
        </AnimatedChart>
      </Box>
    </>
  )
}

export default TimeSeries
