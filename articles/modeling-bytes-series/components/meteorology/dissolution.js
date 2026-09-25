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
  Scatter,
  Point,
} from '@carbonplan/charts'

import { CASE_LABELS, chartLabelSx, mulberry32, useHighlight } from './utils'
import data from './data/fig3.json'
import { states as STATES } from './data/fig4.json'
const X_LIM = [-0.6, 2.6]

const CASES = data.cases
const Y_LIM = [-12, 22]
const PADDING = { left: 64, right: [44, 0, 0, 0], bottom: 16, top: 8 }
const CHART_HEIGHT = '376px'

const Dissolution = () => {
  const samples = useMemo(() => {
    const rand = mulberry32(11)
    const out = {}
    CASES.forEach((x) => {
      out[x] = data.annual
        .filter((d) => d.kept)
        .map((d) => ({
          site: d.site,
          year: d.year,
          v: d[x],
          jitter: (rand() + rand() - 1) * 0.09,
        }))
    })
    return out
  }, [])

  const { highlighted: active, getHandlers } = useHighlight(
    (a, b) => a.site === b.site && a.year === b.year
  )
  const isSame = (d) =>
    active && d.site === active.site && d.year === active.year

  return (
    <Row columns={[6]}>
      <Column start={[1]} width={[6, 5, 5, 4]}>
        <Box
          sx={{
            ...chartLabelSx,
            position: 'relative',
            ml: `${PADDING.left}px`,
            mr: PADDING.right.map((pr) => `${pr}px`),
          }}
        >
          &nbsp;
          {CASES.map((c, i) => (
            <Box
              key={c}
              sx={{
                position: 'absolute',
                top: 0,
                left: `${((i - X_LIM[0]) / (X_LIM[1] - X_LIM[0])) * 100}%`,
                transform: 'translateX(-50%)',
                color: 'primary',
              }}
            >
              {CASE_LABELS[c]}
            </Box>
          ))}
        </Box>
        <Box sx={{ width: '100%', height: CHART_HEIGHT, position: 'relative' }}>
          <Chart x={X_LIM} y={Y_LIM} padding={PADDING}>
            <Grid horizontal />
            <Ticks left />
            <TickLabels left />
            <AxisLabel left units='%'>
              Δ dissolution
            </AxisLabel>
            <Point x={X_LIM[1]} y={0} align='left' verticalAlign='top'>
              <Box
                sx={{
                  ...chartLabelSx,
                  color: 'primary',
                  ml: 1,
                  transform: 'translateY(-50%)',
                }}
              >
                Hourly
              </Box>
            </Point>
            {active && (
              <Point x={X_LIM[0]} y={17.5} verticalAlign='middle' height={5}>
                <Box
                  sx={{
                    ...chartLabelSx,
                    textTransform: 'uppercase',
                    ml: 2,
                  }}
                >
                  <Box>{STATES[active.site]}</Box>
                  <Box>Year {String(active.year).padStart(2, '0')}</Box>
                </Box>
              </Point>
            )}
            <Plot>
              <Line
                data={[
                  [X_LIM[0], 0],
                  [X_LIM[1], 0],
                ]}
                color='primary'
                width={1}
              />
              {CASES.map((c, i) =>
                samples[c].map((d, j) => (
                  <Scatter
                    key={`${c}-${j}`}
                    data={[[i + d.jitter, d.v]]}
                    color={isSame(d) ? 'primary' : 'grey'}
                    size={5}
                    sx={{
                      opacity: active ? (isSame(d) ? 1 : 0.2) : 0.6,
                      transition: 'opacity 0.15s',
                    }}
                  />
                ))
              )}
              {CASES.map((c, i) =>
                samples[c].map((d, j) => (
                  <Scatter
                    key={`hit-${c}-${j}`}
                    data={[[i + d.jitter, d.v]]}
                    color='primary'
                    size={14}
                    {...getHandlers({ site: d.site, year: d.year })}
                    sx={{
                      opacity: 0,
                      pointerEvents: 'all',
                      cursor: 'pointer',
                    }}
                  />
                ))
              )}
            </Plot>
          </Chart>
        </Box>
      </Column>
    </Row>
  )
}

export default Dissolution
