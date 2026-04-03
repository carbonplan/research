import { Box, useThemeUI } from 'theme-ui'
import { useMemo } from 'react'

const getColor = (value, clim, colormap) => {
  if (value > 1) {
    return colormap[0]
  }
  const ratio = Math.min(Math.abs(value / (clim[1] - clim[0])), 1)
  const index = Math.round(ratio * (colormap.length - 1))

  return colormap[index]
}

const Grid = ({
  data,
  colormap,
  clim,
  shape,
  highlightCell,
  shouldHighlight,
  onMouseMove,
  onClick,
  children,
  strokeWidth = 0.015,
}) => {
  const { theme } = useThemeUI()

  const [height, width] = data?.shape ?? shape ?? [0, 0]

  const cells = useMemo(() => {
    return Array(height)
      .fill(null)
      .map((d, row) =>
        Array(width)
          .fill(null)
          .map((d, col) => {
            const highlighted = shouldHighlight?.(row, col)
            return (
              <rect
                key={`${row}-${col}`}
                x={col}
                y={row}
                width='0.9'
                height='0.9'
                fill={
                  data
                    ? getColor(data.get(row, col), clim, colormap)
                    : theme.rawColors.secondary
                }
                stroke={
                  highlighted
                    ? theme.rawColors.primary
                    : theme.rawColors.background
                }
                strokeWidth={highlighted ? strokeWidth * 4 : strokeWidth}
              />
            )
          })
      )
  }, [data, colormap, clim, height, width, theme, strokeWidth, shouldHighlight])

  return (
    <Box
      as='svg'
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      sx={{ width: '100%' }}
      onMouseMove={onMouseMove}
      onClick={onClick}
    >
      {cells}
      {highlightCell && (
        <rect
          x={highlightCell[1]}
          y={highlightCell[0]}
          width='0.9'
          height='0.9'
          fill='none'
          stroke={theme.rawColors.primary}
          strokeWidth={strokeWidth * 2}
        />
      )}
      {children}
    </Box>
  )
}
export default Grid
