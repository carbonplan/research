import React, { useMemo } from 'react'
import { Box } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import {
  Chart,
  Grid,
  Ticks,
  TickLabels,
  AxisLabel,
  Plot,
  Line,
  Point,
  Rect,
} from '@carbonplan/charts'

import { useCaseColors, chartLabelSx, useHighlight } from './utils'
import { ChartLegend } from './legend'
import data from './data/fig2.json'

const MAX_DEPTH = 150
const MIX_DEPTH = 30
const LINE_WIDTH = 2.5
const LEGEND_CASES = ['hourly', ...data.cases]
const ZERO_LINE = [
  [0, 0],
  [0, MAX_DEPTH],
]
const GUTTER = 64
const SECONDARY_GUTTER = 8
const HIDE_ON_DESKTOP = ['block', 'none', 'none', 'none']

const summarize = (table, depths, scale) =>
  depths
    .map((depth, i) => {
      const values = table[i].map((v) => v * scale)
      const sorted = [...values].sort((a, b) => a - b)
      const mid = sorted.length / 2
      const median =
        sorted.length % 2
          ? sorted[Math.floor(mid)]
          : (sorted[mid - 1] + sorted[mid]) / 2
      return {
        depth,
        lo: sorted[0],
        hi: sorted[sorted.length - 1],
        median,
      }
    })
    .filter((p) => p.depth <= MAX_DEPTH)

const Panel = ({
  variable,
  scale,
  units,
  label,
  ticks,
  highlighted,
  setHighlighted,
  hasHover,
  isFirst = false,
}) => {
  const caseColors = useCaseColors()

  const summaries = useMemo(() => {
    const out = {}
    data.cases.forEach((c) => {
      out[c] = summarize(data[variable][c], data.depths, scale)
    })
    return out
  }, [variable, scale])

  const siteProfiles = useMemo(() => {
    const out = {}
    data.cases.forEach((c) => {
      const table = data[variable][c]
      out[c] = data.sites.map((_, j) =>
        data.depths
          .map((depth, i) => ({ depth, value: table[i][j] * scale }))
          .filter((p) => p.depth <= MAX_DEPTH)
          .map((p) => [p.value, p.depth])
      )
    })
    return out
  }, [variable, scale])

  const hi = Math.max(
    ...data.cases.map((c) => Math.max(...summaries[c].map((p) => p.hi)))
  )
  const xLim = [-0.06 * hi, 1.04 * hi]

  return (
    <Box sx={{ width: '100%', height: '400px', position: 'relative' }}>
      <Chart
        x={xLim}
        y={[MAX_DEPTH, 0]}
        clamp={false}
        padding={{
          left: isFirst
            ? GUTTER
            : [GUTTER, SECONDARY_GUTTER, SECONDARY_GUTTER, SECONDARY_GUTTER],
          bottom: 48,
          top: 28,
        }}
      >
        <Grid vertical values={ticks} />
        <Grid horizontal />
        <Ticks left sx={isFirst ? {} : { display: HIDE_ON_DESKTOP }} />
        <Ticks bottom values={ticks} />
        <TickLabels left sx={isFirst ? {} : { display: HIDE_ON_DESKTOP }} />
        <TickLabels bottom values={ticks} />
        <AxisLabel
          left
          units='cm'
          arrow={false}
          sx={isFirst ? {} : { display: HIDE_ON_DESKTOP }}
        >
          Depth
        </AxisLabel>
        <AxisLabel bottom units={units}>
          {label}
        </AxisLabel>
        <Box sx={{ pointerEvents: 'none' }}>
          <Point x={xLim[1]} y={MIX_DEPTH} align='right' verticalAlign='bottom'>
            <Box
              sx={{
                ...chartLabelSx,
                color: 'secondary',
                mr: 1,
                mb: 1,
              }}
            >
              Mixing zone
            </Box>
          </Point>
        </Box>
        <Plot sx={{ overflow: 'hidden' }}>
          <Rect
            x={[xLim[0], xLim[1]]}
            y={[0, MIX_DEPTH]}
            color='secondary'
            opacity={0.15}
          />
          <Line
            data={ZERO_LINE}
            color={highlighted === 'hourly' ? 'primary' : caseColors.hourly}
            width={LINE_WIDTH}
            sx={{
              opacity: highlighted && highlighted !== 'hourly' ? 0 : 1,
              transition: 'opacity 0.15s',
            }}
          />
          {highlighted &&
            siteProfiles[highlighted]?.map((profile, j) => (
              <Line
                key={j}
                data={profile}
                color={caseColors[highlighted]}
                width={1.25}
                sx={{ opacity: 0.6 }}
              />
            ))}
          {data.cases.map((c) => (
            <Line
              key={c}
              data={summaries[c].map((p) => [p.median, p.depth])}
              color={highlighted === c ? 'primary' : caseColors[c]}
              width={LINE_WIDTH}
              sx={{
                opacity: highlighted && highlighted !== c ? 0 : 1,
                transition: 'opacity 0.15s',
              }}
            />
          ))}
        </Plot>
        {isFirst && (
          <ChartLegend
            x={xLim[1]}
            y={MAX_DEPTH}
            align='right'
            verticalAlign='bottom'
            sx={{ mb: 2 }}
            cases={LEGEND_CASES}
            width={LINE_WIDTH}
            highlighted={highlighted}
            setHighlighted={setHighlighted}
            hasHover={hasHover}
          />
        )}
      </Chart>
    </Box>
  )
}

const Profiles = () => {
  const { highlighted, setHighlighted, hasHover } = useHighlight()

  return (
    <Box>
      <Row columns={[6]}>
        <Column start={[1]} width={[6, 3, 3, 3]}>
          <Panel
            variable='dtheta'
            scale={1}
            units='m³/m³'
            label='Δ water content'
            ticks={[0, 0.01, 0.02, 0.03]}
            highlighted={highlighted}
            setHighlighted={setHighlighted}
            hasHover={hasHover}
            isFirst
          />
        </Column>
        <Column start={[1, 4, 4, 4]} width={[6, 3, 3, 3]}>
          <Box sx={{ mt: [4, 0, 0, 0] }}>
            <Panel
              variable='dpco2'
              scale={100}
              units='%'
              label='Δ soil CO₂'
              ticks={[0, 50, 100, 150]}
              highlighted={highlighted}
              setHighlighted={setHighlighted}
              hasHover={hasHover}
            />
          </Box>
        </Column>
      </Row>
    </Box>
  )
}

export default Profiles
