import React, { memo } from 'react'
import { Box } from 'theme-ui'
import { useChart } from '@carbonplan/charts'

const Rect = ({ x, y, color = 'primary', sx }) => {
  const { x: _x, y: _y } = useChart()

  if (x[0] > x[1]) {
    x = x.reverse()
  }

  if (y[0] > y[1]) {
    y = y.reverse()
  }

  const width = Math.abs(x[1] - x[0])
  const height = Math.abs(y[1] - y[0])

  return (
    <Box
      as='rect'
      x={`${_x(x[0])}`}
      y={`${_y(y[1])}`}
      width={`${_x(x[0] + width) - _x(x[0])}`}
      height={`${_y(y[0]) - _y(y[0] + height)}`}
      sx={{
        fill: color,
        stroke: 'none',
        ...sx,
      }}
    />
  )
}

export default memo(Rect)
