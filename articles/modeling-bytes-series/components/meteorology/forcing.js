import React, { memo, useEffect, useMemo, useRef, useState } from 'react'
import { Box, useColorMode, useThemeUI } from 'theme-ui'
import { Row, Column, Filter } from '@carbonplan/components'
import {
  Chart,
  Grid,
  Ticks,
  TickLabels,
  AxisLabel,
  Plot,
  Line,
  Point,
} from '@carbonplan/charts'

import { useCaseColors, chartLabelSx, mulberry32, useHighlight } from './utils'
import { ChartLegend, firstRowCenteredSx } from './legend'
import data from './data/fig1.json'

const CASES = ['hourly', 'daily', 'monthly', 'longterm']

const VARIABLES = {
  et: {
    key: 'ref_et',
    label: 'Potential evapotranspiration',
    axisLabel: 'Potential ET',
    units: 'mm/hr',
    symlog: false,
    ticks: [0, 0.25, 0.5, 0.75, 1],
    max: 1,
  },
  precip: {
    key: 'p_plus_i',
    label: 'Precipitation + irrigation',
    axisLabel: 'Prec. + irrigation',
    units: 'mm/hr',
    symlog: true,
    ticks: [0, 0.1, 1, 10],
    max: 25,
  },
}

const LINTHRESH = 0.05
const symlog = (v) => Math.asinh(v / LINTHRESH)
const noop = (v) => v

const MONTH_TICKS = [0, 91, 182, 274, 365]
const MONTH_LABELS = { 0: 'Jan', 91: 'Apr', 182: 'Jul', 274: 'Oct', 365: 'Jan' }

const STEP_CASES = ['daily', 'monthly', 'longterm']
const JITTER = 0.3
const HOURLY_HIGHLIGHT_OPACITY = 0.6
const X_LIM = [-0.5, 3.5]
const CHART_HEIGHT = ['300px', '300px', '300px', '360px']
const POINT_RADIUS = 1.5
const POINT_ALPHA_SCALE = 1.2
const POINT_ALPHA_EXPONENT = 0.3
const pointAlpha = (count) =>
  Math.min(1, POINT_ALPHA_SCALE / Math.pow(count, POINT_ALPHA_EXPONENT))
const CLOUD_PADDING = { left: 16, right: 36, bottom: 48, top: 28 }
const SHORT_LABELS = {
  hourly: 'Hr',
  daily: 'Day',
  monthly: 'Mon',
  longterm: 'Long',
}

const getSeries = (caseData, key, step) => {
  const values = caseData[key]
  if (step) {
    const edges = caseData.doy
      ? [0, ...caseData.doy]
      : values.map((_, i) => caseData.t0 + i * caseData.dt).concat(365)
    edges[edges.length - 1] = 365
    return values.flatMap((v, i) => [
      [edges[i], v],
      [edges[i + 1], v],
    ])
  }
  const doy =
    caseData.doy ?? values.map((_, i) => caseData.t0 + i * caseData.dt)
  const t = [0, ...doy, 365]
  const v = [values[0], ...values, values[values.length - 1]]
  return t.map((ti, i) => [ti, v[i]])
}

const BasePanel = memo(function BasePanel({ yMax, ticks, mean }) {
  return (
    <Chart x={X_LIM} y={[0, yMax]} padding={CLOUD_PADDING}>
      <Grid horizontal values={ticks} />
      <Point x={X_LIM[1]} y={mean} align='left' verticalAlign='top'>
        <Box
          sx={{
            ...chartLabelSx,
            color: 'primary',
            ml: 1,
            transform: 'translateY(-50%)',
          }}
        >
          Mean
        </Box>
      </Point>
      <Plot>
        <Line
          data={[
            [X_LIM[0], mean],
            [X_LIM[1], mean],
          ]}
          color='primary'
          width={1}
        />
      </Plot>
    </Chart>
  )
})

const hexToRgb = (hex) => {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex?.trim() ?? '')
  if (!m) return [136, 136, 136]
  const n = parseInt(m[1], 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

// Accumulates dot coverage per pixel in floating point and paints the exact stacked
// opacity once, so low-alpha stacking doesn't drift in hue from 8-bit rounding.
const drawCloud = (canvas, { points, alpha, radius, yMax, rgb }) => {
  const { clientWidth: w, clientHeight: h } = canvas
  if (!w || !h) return
  const dpr = window.devicePixelRatio || 1
  const W = Math.round(w * dpr)
  const H = Math.round(h * dpr)
  canvas.width = W
  canvas.height = H
  const coverage = new Float32Array(W * H)
  const sx = W / (X_LIM[1] - X_LIM[0])
  const r = radius * dpr
  points.forEach(([x, y]) => {
    const cx = (x - X_LIM[0]) * sx
    const cy = (1 - y / yMax) * H
    const x0 = Math.max(0, Math.floor(cx - r - 1))
    const x1 = Math.min(W - 1, Math.ceil(cx + r + 1))
    const y0 = Math.max(0, Math.floor(cy - r - 1))
    const y1 = Math.min(H - 1, Math.ceil(cy + r + 1))
    for (let py = y0; py <= y1; py++) {
      for (let px = x0; px <= x1; px++) {
        const d = Math.hypot(px + 0.5 - cx, py + 0.5 - cy)
        const c = Math.min(1, Math.max(0, r + 0.5 - d))
        if (c > 0) coverage[py * W + px] += c
      }
    }
  })
  const img = canvas.getContext('2d').createImageData(W, H)
  const data = img.data
  const keep = 1 - alpha
  for (let i = 0; i < coverage.length; i++) {
    const n = coverage[i]
    if (!n) continue
    const o = 1 - Math.pow(keep, n)
    data[i * 4] = rgb[0]
    data[i * 4 + 1] = rgb[1]
    data[i * 4 + 2] = rgb[2]
    data[i * 4 + 3] = Math.round(o * 255)
  }
  canvas.getContext('2d').putImageData(img, 0, 0)
}

const CloudCanvas = memo(function CloudCanvas({
  points,
  alpha,
  radius,
  yMax,
  color,
}) {
  const ref = useRef(null)
  const [mode] = useColorMode()

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const rgb = hexToRgb(color)
    const draw = () => drawCloud(canvas, { points, alpha, radius, yMax, rgb })
    draw()
    const observer = new ResizeObserver(draw)
    observer.observe(canvas)
    return () => observer.disconnect()
  }, [points, alpha, radius, yMax, color, mode])

  return (
    <Box
      as='canvas'
      ref={ref}
      sx={{
        position: 'absolute',
        left: `${CLOUD_PADDING.left}px`,
        top: `${CLOUD_PADDING.top}px`,
        width: `calc(100% - ${CLOUD_PADDING.left + CLOUD_PADDING.right + 1}px)`,
        height: `calc(100% - ${CLOUD_PADDING.top + CLOUD_PADDING.bottom}px)`,
        transform: 'translate(0.5px, 0.5px)',
        display: 'block',
      }}
    />
  )
})

const Forcing = () => {
  const caseColors = useCaseColors()
  const { theme } = useThemeUI()
  const { primary, grey } = theme.rawColors ?? {}
  const [variable, setVariable] = useState({ et: true, precip: false })
  const { highlighted, setHighlighted, getHandlers, hasHover } = useHighlight()
  const activeKey = Object.keys(variable).find((k) => variable[k]) || 'et'
  const active = VARIABLES[activeKey]

  const transform = active.symlog ? symlog : noop

  const series = useMemo(() => {
    const out = {}
    CASES.forEach((c) => {
      out[c] = getSeries(data.cases[c], active.key, STEP_CASES.includes(c)).map(
        ([t, v]) => [t, transform(v)]
      )
    })
    return out
  }, [active.key, transform])

  const points = useMemo(() => {
    const rand = mulberry32(7)
    const out = {}
    CASES.forEach((c, i) => {
      const values = data.cases[c].sample[active.key]
      const jitter = new Set(values).size > 1 ? JITTER : 0
      out[c] = values.map((v) => [
        i + (rand() + rand() - 1) * jitter,
        transform(v),
      ])
    })
    return out
  }, [active.key, transform])

  const mean = transform(data.mean[active.key])
  const tickValues = useMemo(
    () => active.ticks.map(transform),
    [transform, active.ticks]
  )

  const yMax = transform(active.max)

  return (
    <Box>
      <Filter
        values={variable}
        labels={{ et: VARIABLES.et.label, precip: VARIABLES.precip.label }}
        setValues={setVariable}
      />
      <Row columns={[6]} sx={{ mt: 3 }}>
        <Column start={[1]} width={[6, 3, 4, 4]}>
          <Box
            sx={{ width: '100%', height: CHART_HEIGHT, position: 'relative' }}
          >
            <Chart
              x={[0, 365]}
              y={[0, yMax]}
              padding={{ left: 64, bottom: 48, top: 28 }}
            >
              <Grid horizontal values={active.ticks.map(transform)} />
              <TickLabels
                bottom
                values={MONTH_TICKS}
                format={(d) => MONTH_LABELS[d]}
              />
              <TickLabels
                left
                values={active.ticks.map(transform)}
                format={(d) =>
                  active.ticks[active.ticks.map(transform).indexOf(d)]
                }
              />
              <AxisLabel left units={active.units}>
                {active.axisLabel}
              </AxisLabel>
              <Plot>
                {[...CASES]
                  .sort((a, b) =>
                    a === highlighted ? 1 : b === highlighted ? -1 : 0
                  )
                  .map((c) => (
                    <Line
                      key={c}
                      data={series[c]}
                      color={highlighted === c ? 'primary' : caseColors[c]}
                      width={1.5}
                      sx={{
                        opacity:
                          highlighted && highlighted !== c
                            ? 0.15
                            : highlighted === 'hourly' && c === 'hourly'
                            ? HOURLY_HIGHLIGHT_OPACITY
                            : 1,
                        transition: 'opacity 0.15s',
                      }}
                    />
                  ))}
              </Plot>
              <Ticks left values={active.ticks.map(transform)} />
              <Ticks bottom values={MONTH_TICKS} />
              <ChartLegend
                x={8}
                y={tickValues[tickValues.length - 1]}
                sx={firstRowCenteredSx}
                cases={CASES}
                highlighted={highlighted}
                setHighlighted={setHighlighted}
                hasHover={hasHover}
              />
            </Chart>
          </Box>
        </Column>
        <Column start={[1, 4, 5, 5]} width={[6, 3, 2, 2]}>
          <Box
            sx={{
              width: '100%',
              height: CHART_HEIGHT,
              position: 'relative',
              mt: [4, 0, 0, 0],
            }}
          >
            <Box sx={{ position: 'absolute', inset: 0 }}>
              <BasePanel yMax={yMax} ticks={tickValues} mean={mean} />
            </Box>
            {CASES.map((c) => (
              <Box
                key={c}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  opacity: highlighted && highlighted !== c ? 0.2 : 1,
                  transition: 'opacity 0.15s',
                }}
              >
                <CloudCanvas
                  points={points[c]}
                  alpha={pointAlpha(points[c].length)}
                  radius={POINT_RADIUS}
                  yMax={yMax}
                  color={highlighted === c ? primary : grey}
                />
              </Box>
            ))}
            <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              <Chart x={X_LIM} y={[0, yMax]} padding={CLOUD_PADDING}>
                {CASES.map((c, i) => (
                  <Point
                    key={c}
                    x={i}
                    y={yMax}
                    width={1}
                    align='center'
                    verticalAlign='bottom'
                  >
                    <Box
                      {...getHandlers(c)}
                      sx={{
                        ...chartLabelSx,
                        color: 'primary',
                        textAlign: 'center',
                        mb: 1,
                        pointerEvents: 'auto',
                        cursor: 'pointer',
                        userSelect: 'none',
                        opacity: highlighted && highlighted !== c ? 0.3 : 1,
                        borderBottom: '1px solid',
                        borderBottomColor:
                          !hasHover && highlighted === c
                            ? caseColors[c]
                            : 'transparent',
                        transition: 'opacity 0.15s',
                      }}
                    >
                      {SHORT_LABELS[c]}
                    </Box>
                  </Point>
                ))}
              </Chart>
            </Box>
          </Box>
        </Column>
      </Row>
    </Box>
  )
}

export default Forcing
