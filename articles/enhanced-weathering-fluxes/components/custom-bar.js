import React, { memo, useMemo } from 'react'
import { useThemeUI } from 'theme-ui'
import { useChart } from '@carbonplan/charts'

const Bar = ({
  data,
  width = 0.8,
  direction = 'vertical',
  color = 'primary',
  onBarClick, // Add an onBarClick prop for handling clicks
  ...props
}) => {
  const { x: _x, y: _y } = useChart()
  const { theme } = useThemeUI()

  const flipped = direction === 'horizontal'

  const xValues = data.map((d) => d[0])
  const minDelta = useMemo(
    () =>
      xValues
        .sort()
        .slice(1)
        .reduce((min, el, i) => {
          const transform = flipped ? _y : _x
          const diff = Math.abs(transform(el) - transform(xValues[i]))
          if (typeof min !== 'number' || diff < min) {
            return diff
          } else {
            return min
          }
        }, null),

    [_x, _y, flipped, xValues]
  )
  const fixedWidth = minDelta * width
  if (Array.isArray(color) && color.length !== data.length) {
    throw new Error(
      `Unexpected color array provided. Expected length ${data.length}, received length ${color.length}`
    )
  }

  return (
    <>
      {data.map((d, i) => {
        const fixedPosition = flipped ? _y(d[0]) : _x(d[0])
        const varying = [d.length === 3 ? d[1] : 0, d[d.length - 1]]
        const varyingPositions = varying.map(flipped ? _x : _y)
        const lower = Math.min(...varyingPositions)
        const upper = Math.max(...varyingPositions)

        const position = [`${fixedPosition - fixedWidth / 2}`, `${lower}`] // x, y
        const dimensions = [fixedWidth, `${upper - lower}`] // width, height

        if (flipped) {
          position.reverse()
          dimensions.reverse()
        }

        const [x, y] = position
        const [width, height] = dimensions

        const colorString = typeof color === 'string' ? color : color[i]
        const fill = theme.rawColors[colorString] || colorString

        return (
          <path
            key={i}
            d={`M ${x} ${y} h ${width} v ${height} h -${width} Z`}
            fill={fill}
            stroke='none'
            onClick={() => onBarClick && onBarClick(d)}
            {...props}
          />
        )
      })}
    </>
  )
}

export default memo(Bar)
