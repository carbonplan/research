import { useMemo } from 'react'
import { Rect } from '@carbonplan/charts'

import data from './projects-data.json'

const Timeline = ({ activeYears, color, y, years }) => {
  const yearData = useMemo(() => {
    let hasInactivated
    const result = years.reduce((rects, year) => {
      const currentRect = rects[rects.length - 1]
      const active = activeYears.includes(year)
      let status = 'active'
      let fill = color
      if (!active) {
        fill = 'muted'
        status = 'inactive'
      } else if (hasInactivated) {
        fill = 'blue'
        status = 'reactivated'
      }

      if (!currentRect || currentRect.end || currentRect.status !== status) {
        rects.push({
          start: year,
          status,
          fill,
        })
        if (currentRect && currentRect.status !== status) {
          currentRect.end = year - 1
        }
      }
      hasInactivated ||= !active
      return rects
    }, [])
    result[result.length - 1].end ||= years[years.length - 1]
    return result
  }, [activeYears, color, years])

  return (
    <g>
      {yearData.map(({ start, end, fill }) => (
        <Rect key={start} x={[start, end + 1]} y={[y, y + 1.25]} color={fill} />
      ))}
    </g>
  )
}

const Project = ({ project, y, years }) => {
  return (
    <>
      <Timeline
        years={years}
        color='blue'
        activeYears={data[project].credit_data}
        y={y}
      />
    </>
  )
}

export default Project
