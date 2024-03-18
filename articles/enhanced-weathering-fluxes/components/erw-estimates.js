import React, { useMemo } from 'react'
import { Box, useThemeUI } from 'theme-ui'
import {
  Chart,
  AxisLabel,
  Ticks,
  TickLabels,
  Axis,
  Plot,
  Bar,
  StackedBar,
} from '@carbonplan/charts'
import { mix } from '@theme-ui/color'
import { useBreakpointIndex } from '@theme-ui/match-media'

import data from './data'

const createLogHistogramBins = (data, stacked, numBins) => {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const logMin = Math.log10(min)
  const logMax = Math.log10(max)
  const logRange = logMax - logMin
  const bins = new Array(numBins).fill(0)
  const stackedBins = new Array(numBins).fill(0)
  const formattedBins = []

  data.forEach((value) => {
    if (value > 0) {
      const binIndex = Math.floor(
        (numBins * (Math.log10(value) - logMin)) / logRange
      )
      if (binIndex >= 0 && binIndex < numBins) {
        bins[binIndex] += 1
      }
    }
  })

  if (stacked) {
    stacked.forEach((value) => {
      if (value > 0) {
        const binIndex = Math.floor(
          (numBins * (Math.log10(value) - logMin)) / logRange
        )
        if (binIndex >= 0 && binIndex < numBins) {
          stackedBins[binIndex] += 1
        }
      }
    })
  }

  for (let i = 0; i < numBins; i++) {
    const binStart = Math.pow(10, logMin + (i * logRange) / numBins)
    const binEnd = Math.pow(10, logMin + ((i + 1) * logRange) / numBins)
    const binMidpoint = (binStart + binEnd) / 2
    formattedBins.push([
      binMidpoint,
      ...(stacked ? [0, stackedBins[i], bins[i]] : [bins[i]]),
    ])
  }
  return formattedBins
}

const nonPositivePlaceholder = 0.000071

const options = [
  {
    value: 'carbon removal',
    key: 'CDRflux_tonsCO2_ha_yr',
    color: 'grey',
    unit: 'tons CO₂ / ha / yr',
    xTicks: [nonPositivePlaceholder, 0.0001, 0.001, 0.01, 0.1, 1, 10],
  },
]

const ErwEstimates = ({ numBins = 20, columnFilters, filterLabel }) => {
  const { theme } = useThemeUI()
  const index = useBreakpointIndex({ defaultIndex: 2 })
  const { unfiltered, filtered } = useMemo(() => {
    const processData = (data, applyFilters = false) =>
      data.reduce(
        (acc, d) => {
          const isRelevant =
            !applyFilters ||
            Object.keys(columnFilters).every(
              (key) => d[key] === columnFilters[key]
            )

          if (isRelevant) {
            if (d.CDR_consistentWithZero === 'Y') {
              acc.negative.push(d)
            } else if (d.CDR_consistentWithZero === 'N') {
              // need additional check since some values are 0 even tho CDR_consistentWithZero is N
              if (d[options[0].key] > 0) {
                acc.positive.push(+d[options[0].key])
              }
            } else {
              console.error('CDR_consistentWithZero is not Y or N', d)
            }
          }
          return acc
        },
        { positive: [], negative: [] }
      )

    return {
      unfiltered: processData(data),
      filtered: columnFilters ? processData(data, true) : null,
    }
  }, [columnFilters])

  const bars = createLogHistogramBins(
    unfiltered.positive,
    filtered?.positive,
    numBins
  )

  if (filtered) {
    bars.unshift([
      nonPositivePlaceholder,
      0,
      filtered.negative.length,
      unfiltered.negative.length,
    ])
  } else {
    bars.unshift([nonPositivePlaceholder, unfiltered.negative.length])
  }

  const domain = [0.00005, Math.max(...unfiltered.positive)]
  const range = [0, Math.max(...bars.map((bar) => bar[bar.length - 1])) + 1]

  const fullGrey = mix('grey', 'background', 0.9)(theme)
  const lightGrey = mix('grey', 'background', 0.2)(theme)

  const barColors = [
    `url(#hatchPattern-0)`,
    ...Array(bars.length - 1).fill(fullGrey),
  ]

  const stackedBarColors = [
    ['url(#hatchPattern-0)', 'url(#hatchPattern-1)'],
    ...Array(bars.length - 1).fill([fullGrey, lightGrey]),
  ]

  return (
    <Box sx={{ height: 300, position: 'relative' }}>
      <Chart x={domain} y={range} logx padding={{ left: 56 }}>
        <Plot>
          <defs>
            {[fullGrey, lightGrey].map((color, i) => (
              <pattern
                key={i}
                id={`hatchPattern-${i}`}
                patternUnits='userSpaceOnUse'
                width={index === 0 ? 2 : 1}
                height={index === 0 ? 2 : 1}
                patternTransform={`rotate(${index === 0 ? 40 : 20})`}
              >
                <line
                  x1='0'
                  y1='0'
                  x2='0'
                  y2={index === 0 ? 2 : 1}
                  style={{
                    stroke: color,
                    strokeWidth: 0.5,
                  }}
                />
              </pattern>
            ))}
          </defs>
          {filtered ? (
            <StackedBar
              data={bars}
              color={stackedBarColors}
              style={{ transition: 'all 0.1s' }}
            />
          ) : (
            <Bar data={bars} color={barColors} />
          )}
        </Plot>
        <AxisLabel left>Number of Estimates</AxisLabel>
        <AxisLabel bottom units={options[0].unit}>
          {options[0].value}
        </AxisLabel>
        <Axis left bottom />
        <Ticks left />
        <TickLabels left />
        <Ticks bottom />
        <TickLabels
          bottom
          values={options[0].xTicks}
          format={(d) => {
            if (d === 0.0001) return
            if (d === nonPositivePlaceholder) {
              return 'none'
            }
            return d
          }}
        />
      </Chart>

      <Box
        sx={{
          fontFamily: 'mono',
          fontSize: 1,
          color: 'secondary',
          position: 'absolute',
          top: 0,
          ml: 72,
          maxWidth: '50%',
        }}
      >
        <Box as={'span'} sx={{ color: 'grey' }}>
          {filterLabel
            ? filtered.negative.length + filtered.positive.length
            : unfiltered.negative.length + unfiltered.positive.length}{' '}
        </Box>
        {filterLabel ?? 'total estimates'}
      </Box>
    </Box>
  )
}

export default ErwEstimates
