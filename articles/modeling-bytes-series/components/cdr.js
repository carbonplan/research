import { useState } from 'react'
import { Box } from 'theme-ui'
import { Filter } from '@carbonplan/components'
import { animated, useSpring, easings, to } from '@react-spring/web'
import {
  Chart,
  Plot,
  Grid,
  Ticks,
  TickLabels,
  Axis,
  AxisLabel,
  Label,
  Point,
  Line,
  Area,
  Circle,
} from '@carbonplan/charts'
import { cdr } from './data'

const FEEDSTOCKS = {
  bridge: {
    label: 'Blue Ridge basalt',
    ribbonLabel: { x: 100, y: 0.14 },
    dashedLabel: { x: 110, y: 0.53 },
  },
  gbas: {
    label: 'Glassy basalt',
    ribbonLabel: { x: 100, y: 0.1 },
    dashedLabel: { x: 110, y: 0.41 },
  },
}

const X_MIN = 25
const X_MAX = 600
const Y_MIN = 0
const Y_MAX = 1

const getYSeries = (key) => ({
  ribbonY1: cdr.map((r) => r[`${key}_lambda1`]),
  ribbonY10: cdr.map((r) => r[`${key}_lambda10`]),
  nsb07Y: cdr.map((r) => r[`${key}_nsb07_correct`]),
})

const FILTER_LABELS = Object.fromEntries(
  Object.entries(FEEDSTOCKS).map(([k, v]) => [k, v.label])
)

const FILTER_LABEL_SX = {
  fontFamily: 'heading',
  letterSpacing: 'smallcaps',
  textTransform: 'uppercase',
  fontSize: [2, 2, 2, 3],
  mt: [0],
  pb: [0],
}

const AnimatedLabel = ({ x, y, children, sx }) => (
  <Point
    x={x}
    y={y}
    style={{ transition: 'left 0.2s ease-out, top 0.2s ease-out' }}
  >
    <Box
      sx={{
        fontFamily: 'mono',
        letterSpacing: 'mono',
        fontSize: [0, 0, 0, 1],
        whiteSpace: 'nowrap',
        ...sx,
      }}
    >
      {children}
    </Box>
  </Point>
)

const Dots = ({ data, size = 8, color = 'grey' }) => {
  return (
    <>
      {data.map(([x, y]) => (
        <Circle key={x} x={x} y={y} color={color} size={size} />
      ))}
    </>
  )
}

const ChartLine = ({ data }) => {
  return <Line data={data} color='grey' width={2} />
}

const ChartArea = ({ data }) => {
  return <Area data={data} color='grey' sx={{ opacity: 0.3 }} />
}

const AnimatedLine = animated(ChartLine)
const AnimatedArea = animated(ChartArea)
const AnimatedDots = animated(Dots)

const Cdr = () => {
  const [selected, setSelected] = useState({ bridge: true, gbas: false })
  const activeKey = Object.keys(selected).find((k) => selected[k]) || 'bridge'
  const active = FEEDSTOCKS[activeKey]
  const { ribbonY1, ribbonY10, nsb07Y } = useSpring({
    ...getYSeries(activeKey),
    config: { duration: 200, easing: easings.easeOut },
  })

  const ribbon = to([ribbonY1, ribbonY10], (y1, y10) =>
    cdr.map((row, i) => [row.radius_um, y1[i], y10[i]])
  )
  const nsb07 = to([nsb07Y], (y) => cdr.map((row, i) => [row.radius_um, y[i]]))

  return (
    <Box>
      <Box sx={FILTER_LABEL_SX}>Feedstock</Box>
      <Filter
        values={selected}
        labels={FILTER_LABELS}
        setValues={setSelected}
      />
      <Box sx={{ width: '100%', height: '400px', position: 'relative', mt: 3 }}>
        <Chart
          x={[X_MIN, X_MAX]}
          y={[Y_MIN, Y_MAX]}
          padding={{ left: 60, bottom: 50, top: 10 }}
        >
          <Grid vertical horizontal />
          <Ticks left />
          <Ticks bottom />
          <TickLabels left />
          <TickLabels bottom />
          <Axis left bottom />
          <AxisLabel left>CDR fraction of B20</AxisLabel>
          <AxisLabel bottom units='µm'>
            Dust radius
          </AxisLabel>

          <Plot>
            <AnimatedArea data={ribbon} color='grey' sx={{ opacity: 0.3 }} />
            <AnimatedLine data={nsb07} color='grey' width={2} />
            <AnimatedDots data={nsb07} />
            <Line
              data={[
                [X_MIN, 1],
                [X_MAX, 1],
              ]}
              width={2}
              color='grey'
            />
          </Plot>

          <Label
            x={300}
            y={0.98}
            width={200}
            align='center'
            sx={{ textTransform: 'none' }}
            color='grey'
          >
            B20 equation
          </Label>
          <AnimatedLabel
            x={active.dashedLabel.x}
            y={active.dashedLabel.y}
            sx={{ color: 'grey' }}
          >
            NSB07 intended (λ = 20)
          </AnimatedLabel>
          <AnimatedLabel
            x={active.ribbonLabel.x}
            y={active.ribbonLabel.y}
            sx={{ color: 'primary' }}
          >
            λ = 1–10
          </AnimatedLabel>
        </Chart>
      </Box>
    </Box>
  )
}

export default Cdr
