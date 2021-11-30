import { useRef, useEffect, useState } from 'react'
import { useThemeUI, Box } from 'theme-ui'
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
    const discount = years.map((y) => 1 / Math.pow(1 + discountRate / 100, y))

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
    if (container.current.offsetWidth > 0) {
      chart = new TimelineChart(container, theme)
    }

    return function cleanup() {
      if (container.current) container.current.innerHTML = ''
    }
  }, [theme])

  useEffect(() => {
    if (chart) {
      chart.update(data(options))
    }
  }, [theme, options])

  useEffect(() => {
    let id = null

    const listener = () => {
      clearTimeout(id)
      id = setTimeout(() => {
        if (container.current.offsetWidth > 0) {
          chart = new TimelineChart(container, theme)
          chart.update(data(options))
        }
      }, 150)
    }

    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [theme])

  return (
    <>
      <Box
        ref={container}
        sx={{
          display: ['none', 'none', 'inherit'],
          height: '160px',
          width: '100%',
        }}
      />
    </>
  )
}

export default Timeline
