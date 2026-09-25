import React from 'react'
import { Box } from 'theme-ui'
import { Point } from '@carbonplan/charts'

import { useCaseColors, CASE_LABELS, chartLabelSx } from './utils'

const SAMPLE_WIDTH = 18
const SAMPLE_HEIGHT = 4

export const Legend = ({
  cases,
  highlighted,
  setHighlighted,
  hasHover,
  width = 1.5,
  colors,
  sx = {},
}) => {
  const defaultColors = useCaseColors()
  const caseColors = colors ?? defaultColors
  const interactive = !!setHighlighted

  return (
    <Box
      onMouseLeave={
        interactive && hasHover ? () => setHighlighted(null) : undefined
      }
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '2px',
        pointerEvents: interactive ? 'auto' : 'none',
        ...sx,
      }}
    >
      {cases.map((c) => (
        <Box
          key={c}
          onMouseEnter={
            interactive && hasHover ? () => setHighlighted(c) : undefined
          }
          onClick={
            interactive && !hasHover
              ? () => setHighlighted((prev) => (prev === c ? null : c))
              : undefined
          }
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            px: 1,
            backgroundColor: 'background',
            cursor: interactive ? 'pointer' : 'default',
            pointerEvents: 'auto',
            userSelect: 'none',
            opacity: highlighted && highlighted !== c ? 0.3 : 1,
            transition: 'opacity 0.15s',
          }}
        >
          <Box
            as='svg'
            viewBox={`0 0 ${SAMPLE_WIDTH} ${SAMPLE_HEIGHT}`}
            sx={{
              flexShrink: 0,
              display: 'block',
              width: `${SAMPLE_WIDTH}px`,
              height: `${SAMPLE_HEIGHT}px`,
              stroke: highlighted === c ? 'primary' : caseColors[c],
            }}
          >
            <line
              x1={0}
              y1={SAMPLE_HEIGHT / 2}
              x2={SAMPLE_WIDTH}
              y2={SAMPLE_HEIGHT / 2}
              strokeWidth={width}
            />
          </Box>
          <Box sx={chartLabelSx}>{CASE_LABELS[c]}</Box>
        </Box>
      ))}
    </Box>
  )
}

export const firstRowCenteredSx = {
  fontSize: chartLabelSx.fontSize,
  gap: '1px',
  transform: 'translateY(-0.5lh)',
}

export const ChartLegend = ({
  x,
  y,
  align = 'left',
  verticalAlign = 'top',
  sx = {},
  ...props
}) => (
  <Box sx={{ pointerEvents: 'none' }}>
    <Point x={x} y={y} align={align} verticalAlign={verticalAlign}>
      <Legend sx={sx} {...props} />
    </Point>
  </Box>
)

export default Legend
