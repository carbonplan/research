import { Box } from 'theme-ui'

const SURFACE = [
  [0, 75.9],
  [3, 75.3],
  [6, 74.3],
  [9, 80.6],
  [12, 66.1],
  [15, 78.6],
  [18, 67.6],
  [21, 50.8],
  [24, 56.4],
  [27, 40.5],
  [30, 27.4],
  [33, 36.3],
  [36, 24.8],
  [39, 29.3],
  [42, 44.7],
  [45, 52.6],
  [48, 53.5],
  [51, 55.5],
  [54, 49.3],
  [57, 53.4],
  [60, 54.1],
  [63, 52],
  [66, 48.8],
  [69, 49.5],
  [72, 31.8],
  [75, 27.6],
  [78, 25.2],
  [81, 8.7],
  [84, 6.6],
  [87, -5.3],
  [90, -5.2],
  [93, 6.8],
  [96, -0.1],
  [99, 12.7],
  [102, 18.2],
  [105, 22.5],
  [108, 27.9],
  [111, 40.4],
  [114, 32.7],
  [117, 46],
  [120, 42],
  [123, 40.2],
  [126, 40.3],
  [129, 38.4],
  [132, 25.6],
  [135, 33.4],
  [138, 19.7],
  [142, 15.6],
  [146, 22.2],
  [150, 20.6],
  [154, 37.1],
  [158, 48.2],
  [162, 68.4],
  [166, 74.4],
  [170, 78.9],
  [174, 65.9],
  [178, 65.1],
  [182, 47.7],
  [186, 52.5],
  [190, 44],
  [194, 50.9],
  [196, 54.5],
  [200, 41.7],
  [204, 55.2],
  [208, 56.2],
  [210, 64.8],
  [212, 73.6],
]

// Layout
const VIEW_BOX_W = 690
const MAX_LINE_WIDTH = 682
const PLOT_X0 = 4
const COAST_PAD_Y = 4
const COAST_TO_BAR_GAP = 8
const RULER_BAR_H = 24
// Squashes the coastline vertically; arc-length math still runs on the
// compressed shape so the ruler bars stay consistent with what's drawn.
const Y_COMPRESSION = 0.5

const SPARSE_SAMPLES = 4
const DENSE_SAMPLES = 16

// Data extent
const X_MIN = Math.min(...SURFACE.map((p) => p[0]))
const X_MAX = Math.max(...SURFACE.map((p) => p[0]))
const Y_MIN = Math.min(...SURFACE.map((p) => p[1]))
const Y_MAX = Math.max(...SURFACE.map((p) => p[1]))
const X_RANGE = X_MAX - X_MIN
const Y_RANGE = Y_MAX - Y_MIN

// Derived geometry
const X_SCALE = MAX_LINE_WIDTH / X_RANGE
const CURVE_WIDTH = X_RANGE * X_SCALE
const CURVE_HEIGHT = Y_RANGE * X_SCALE * Y_COMPRESSION
const COAST_Y0 = COAST_PAD_Y
const COAST_Y1 = COAST_Y0 + CURVE_HEIGHT
const RULER_BAR_Y = COAST_Y1 + COAST_TO_BAR_GAP
const BAR_LABEL_Y = RULER_BAR_Y + RULER_BAR_H / 2
const ROW_HEIGHT = RULER_BAR_Y + RULER_BAR_H

const scaleX = (x) => PLOT_X0 + ((x - X_MIN) / X_RANGE) * CURVE_WIDTH
const scaleY = (y) => COAST_Y0 + ((y - Y_MIN) / Y_RANGE) * CURVE_HEIGHT
const scalePoint = ([x, y]) => [scaleX(x), scaleY(y)]

// Geometry helpers
const pathLength = (points) => {
  let len = 0
  for (let i = 1; i < points.length; i++) {
    const dx = points[i][0] - points[i - 1][0]
    const dy = points[i][1] - points[i - 1][1]
    len += Math.sqrt(dx * dx + dy * dy)
  }
  return len
}

const pointsToPath = (pts) =>
  pts
    .map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`)
    .join(' ')

const circleSegmentNextT = (center, r, a, b, tMin) => {
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  const A = dx * dx + dy * dy
  if (A === 0) return null

  const fx = a[0] - center[0]
  const fy = a[1] - center[1]
  const B = 2 * (fx * dx + fy * dy)
  const C = fx * fx + fy * fy - r * r

  const disc = B * B - 4 * A * C
  if (disc < 0) return null

  const sqrtDisc = Math.sqrt(disc)
  const t1 = (-B - sqrtDisc) / (2 * A)
  const t2 = (-B + sqrtDisc) / (2 * A)

  const eps = 1e-9
  if (t1 > tMin + eps && t1 <= 1 + eps) return Math.min(1, t1)
  if (t2 > tMin + eps && t2 <= 1 + eps) return Math.min(1, t2)
  return null
}

const walkCurveWithChord = (curve, stepDistance, maxSteps) => {
  const points = [curve[0]]
  let current = curve[0]
  let segmentIdx = 0
  let tStart = 0

  while (points.length - 1 < maxSteps) {
    let foundT = null
    let foundSegmentIdx = -1

    for (let i = segmentIdx; i < curve.length - 1; i++) {
      const tMin = i === segmentIdx ? tStart : 0
      const t = circleSegmentNextT(
        current,
        stepDistance,
        curve[i],
        curve[i + 1],
        tMin
      )
      if (t !== null) {
        foundT = t
        foundSegmentIdx = i
        break
      }
    }

    if (foundT === null) break

    const a = curve[foundSegmentIdx]
    const b = curve[foundSegmentIdx + 1]
    const next = [a[0] + foundT * (b[0] - a[0]), a[1] + foundT * (b[1] - a[1])]

    points.push(next)
    current = next
    segmentIdx = foundSegmentIdx
    tStart = foundT
  }

  return points
}

// Binary-search the chord length so `count` equal steps land on curve[last].
const sampleEquidistantly = (curve, count) => {
  const targetSteps = count - 1
  const endPoint = curve[curve.length - 1]
  const tolerance = (endPoint[0] - curve[0][0]) * 0.0005

  let lo = 0.5
  let hi = 1000

  for (let iter = 0; iter < 80; iter++) {
    const mid = (lo + hi) / 2
    const points = walkCurveWithChord(curve, mid, targetSteps)

    if (points.length - 1 < targetSteps) {
      hi = mid
      continue
    }

    const lastX = points[points.length - 1][0]
    if (lastX < endPoint[0] - tolerance) {
      lo = mid
    } else if (lastX > endPoint[0] + tolerance) {
      hi = mid
    } else {
      return points
    }
  }

  return walkCurveWithChord(curve, (lo + hi) / 2, targetSteps)
}

// Scaled geometry + ruler variants
const SCALED_SURFACE = SURFACE.map(scalePoint)
const REALITY_LENGTH = pathLength(SCALED_SURFACE)
const BAR_SCALE = MAX_LINE_WIDTH / REALITY_LENGTH

const SURFACE_PATH = pointsToPath(SCALED_SURFACE)
const SURFACE_FILL_PATH =
  pointsToPath([
    [SCALED_SURFACE[0][0], COAST_Y1],
    ...SCALED_SURFACE,
    [SCALED_SURFACE[SCALED_SURFACE.length - 1][0], COAST_Y1],
  ]) + ' Z'

const buildVariant = (sampleCount, label) => {
  const samples = sampleEquidistantly(SCALED_SURFACE, sampleCount)
  const measurementLength = pathLength(samples) * BAR_SCALE
  return {
    label,
    samples,
    measurementPath: pointsToPath(samples),
    measurementLength,
    correctionLength: MAX_LINE_WIDTH - measurementLength,
  }
}

const TARGET = {
  label: 'Target resolution',
  measurementPath: SURFACE_PATH,
  measurementLength: MAX_LINE_WIDTH,
  correctionLength: 0,
}
const DENSE = buildVariant(DENSE_SAMPLES, 'Higher resolution ruler')
const SPARSE = buildVariant(SPARSE_SAMPLES, 'Lower resolution ruler')

// Render helpers
const toXPct = (x) => `${(x / VIEW_BOX_W) * 100}%`
const toYPct = (y) => `${(y / ROW_HEIGHT) * 100}%`

const LABEL_SX = {
  position: 'absolute',
  fontFamily: 'mono',
  letterSpacing: 'mono',
  textTransform: 'uppercase',
  fontSize: [1, 1, 1, 2],
  whiteSpace: 'nowrap',
  pointerEvents: 'none',
}

const Panel = ({ variant, hideSamples }) => (
  <g>
    <Box
      as='path'
      d={SURFACE_FILL_PATH}
      sx={{ fill: 'grey', stroke: 'none', opacity: 0.3 }}
    />
    <Box
      as='path'
      d={SURFACE_PATH}
      sx={{ stroke: 'grey', fill: 'none', strokeWidth: hideSamples ? 2 : 0 }}
    />

    {!hideSamples && (
      <Box
        as='path'
        d={variant.measurementPath}
        sx={{ stroke: 'grey', strokeWidth: 2, fill: 'none' }}
      />
    )}

    <Box
      as='rect'
      x={PLOT_X0}
      y={RULER_BAR_Y}
      width={variant.measurementLength}
      height={RULER_BAR_H}
      sx={{ fill: 'grey' }}
    />

    {variant.correctionLength > 0 && (
      <Box
        as='rect'
        x={PLOT_X0 + variant.measurementLength}
        y={RULER_BAR_Y}
        width={variant.correctionLength}
        height={RULER_BAR_H}
        sx={{ fill: 'grey', opacity: 0.4 }}
      />
    )}

    {!hideSamples &&
      variant.samples.map(([x, y], i) => (
        <Box key={i} as='circle' cx={x} cy={y} r={4} sx={{ fill: 'grey' }} />
      ))}
  </g>
)

const NARROW_QUERY = '@container (max-width: 600px)'

const Row = ({ variant, hideSamples = false, title, correctionLabel }) => (
  <Box sx={{ width: '100%', mb: 4, containerType: 'inline-size' }}>
    <Box sx={{ position: 'relative' }}>
      <svg
        viewBox={`0 0 ${VIEW_BOX_W} ${ROW_HEIGHT}`}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <Panel variant={variant} hideSamples={hideSamples} />
      </svg>

      <Box
        sx={{
          ...LABEL_SX,
          left: toXPct(PLOT_X0 + 4),
          top: toYPct(BAR_LABEL_Y),
          transform: 'translateY(-50%)',
          color: 'background',
        }}
      >
        {title}
      </Box>

      {correctionLabel && (
        <Box
          sx={{
            ...LABEL_SX,
            right: toXPct(PLOT_X0 + 4),
            top: toYPct(BAR_LABEL_Y),
            transform: 'translateY(-50%)',
            color: 'primary',
            [NARROW_QUERY]: { display: 'none' },
          }}
        >
          {correctionLabel}
        </Box>
      )}
    </Box>

    {correctionLabel && (
      <Box
        sx={{
          ...LABEL_SX,
          position: 'static',
          display: 'none',
          textAlign: 'right',
          whiteSpace: 'normal',
          mr: 1,
          color: 'primary',
          [NARROW_QUERY]: { display: 'block' },
        }}
      >
        {correctionLabel}
      </Box>
    )}
  </Box>
)

const Rulers = () => (
  <Box sx={{ width: '100%' }}>
    <Row variant={TARGET} title={TARGET.label} hideSamples />
    <Row
      variant={DENSE}
      title={DENSE.label}
      correctionLabel='small correction'
    />
    <Row
      variant={SPARSE}
      title={SPARSE.label}
      correctionLabel='large correction'
    />
  </Box>
)

export default Rulers
