import { useRef, useEffect, useState } from 'react'
import { useThemeUI, Box, Text } from 'theme-ui'
import TimelineChart from './charts/timeline-chart'

let chart = null

const Timeline = ({ options }) => {
  const container = useRef(null)
  const { theme } = useThemeUI()

  const data = (options) => {
    const {
      horizon,
      shortDuration,
      discountRate,
      switchingTime,
      switchingTimeActive,
    } = options

    const years = Array(101)
      .fill(0)
      .map((_, i) => i)
    const discount = years.map((y) => 1 / Math.pow(1 + discountRate, y))

    const discountFunction = years.map((year) => {
      return {
        x: year,
        y: discount[year],
      }
    })

    const durationIntervals = Array(Math.ceil(100 / shortDuration))
      .fill(0)
      .map((_, i) => {
        return shortDuration * i
      })

    return {
      discountFunction: discountFunction,
      durationIntervals: durationIntervals,
      switchingTime: switchingTime,
      switchingTimeActive: switchingTimeActive,
    }
  }

  useEffect(() => {
    chart = new TimelineChart(container, theme)

    return function cleanup() {
      container.current.innerHTML = ''
    }
  }, [theme])

  useEffect(() => {
    if (chart) {
      chart.update(data(options))
    }
  }, [theme, options])

  return (
    <>
      <Box ref={container} sx={{ height: '160px', width: '100%' }} />
    </>
  )
}

export default Timeline
