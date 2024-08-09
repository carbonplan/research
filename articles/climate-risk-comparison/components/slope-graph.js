import { AxisLabel, Chart, Line, Plot, Rect, Label } from '@carbonplan/charts'
import { Box } from 'theme-ui'
import { useMemo } from 'react'

import useData from './use-data'
import useVariableColormap from './use-variable-colormap'

const GAP = 0.01

const getRects = ({ scores, offsets, counts, provider = 'xdi' }) => {
  const x = provider === 'xdi' ? [-0.05, -0.02] : [1.02, 1.05]

  return scores.map((score) => {
    const filter =
      provider === 'xdi'
        ? (key) => key.startsWith(`${score},`)
        : (key) => key.endsWith(`,${score}`)

    const scoreOffsets = Object.keys(offsets)
      .filter(filter)
      .map((key) => offsets[key][provider])
    const offset = Math.min(...scoreOffsets, 0)
    let start = score + offset * GAP

    const scoreCounts = Object.keys(counts)
      .filter(filter)
      .reduce((sum, key) => sum + counts[key], 0)

    let end = start
    if (scoreCounts < 16) {
      if (offset > -5) {
        start = score - 8 * GAP
      }
      end = start + 16 * GAP
    } else {
      end = start + scoreCounts * GAP
    }
    return { score, y: [start, end], x }
  })
}

const SlopeGraph = ({ region, experiment, variable, provider }) => {
  const { xdi, jupiter } = useData({ region, experiment, variable })
  const xdiColormap = useVariableColormap({ region, provider: 'xdi' })
  const jupiterColormap = useVariableColormap({ region, provider: 'jupiter' })

  const { lines, rects, yMax } = useMemo(() => {
    const counts = Object.keys(xdi).reduce((accum, key) => {
      const values = [xdi[key], jupiter[key]]
      if (values.some((v) => !v)) {
        return accum
      }

      const pair = values.join(',')
      accum[pair] ||= 0
      accum[pair] += 1
      return accum
    }, {})
    const offsets = Object.keys(counts).reduce((accum, key) => {
      const [xdiIdx, jupiterIdx] = key.split(',').map(Number)
      const result = { xdi: 0, jupiter: 0 }

      if (xdiIdx === jupiterIdx) {
        result['xdi'] = (-1 * counts[key]) / 2
        result['jupiter'] = (-1 * counts[key]) / 2
      } else {
        // Account for width of central bar
        result['xdi'] = (counts[`${xdiIdx},${xdiIdx}`] ?? 0) / 2
        result['jupiter'] = (counts[`${jupiterIdx},${jupiterIdx}`] ?? 0) / 2

        if (xdiIdx < jupiterIdx) {
          result['jupiter'] *= -1

          for (let index = xdiIdx + 1; index < jupiterIdx; index++) {
            result['xdi'] += counts[[xdiIdx, index].join(',')] ?? 0
          }
          for (let index = jupiterIdx - 1; index >= xdiIdx; index--) {
            result['jupiter'] -= counts[[index, jupiterIdx].join(',')] ?? 0
          }
        } else {
          result['xdi'] *= -1
          for (let index = xdiIdx - 1; index >= jupiterIdx; index--) {
            result['xdi'] -= counts[[xdiIdx, index].join(',')] ?? 0
          }
          for (let index = jupiterIdx + 1; index < xdiIdx; index++) {
            result['jupiter'] += counts[[index, jupiterIdx].join(',')] ?? 0
          }
        }
      }

      accum[key] = result
      return accum
    }, {})

    const hash = {}
    const lines = Object.keys(xdi).reduce((accum, key) => {
      const values = [xdi[key], jupiter[key]]
      if (values.some((v) => !v)) {
        return accum
      }

      const pair = values.join(',')
      hash[pair] ||= 0
      hash[pair] += 1

      let color = 'primary'
      if (xdi[key] < jupiter[key]) {
        color = 'primary'
      } else if (jupiter[key] < xdi[key]) {
        color = 'primary'
      }

      accum.push({
        id: key,
        data: [
          [0, xdi[key] + (hash[pair] + offsets[pair]['xdi']) * GAP],
          [1, jupiter[key] + (hash[pair] + offsets[pair]['jupiter']) * GAP],
        ],
        color,
      })
      return accum
    }, [])

    const rects = {
      xdi: getRects({
        scores: [1, 3, 5],
        offsets,
        counts: hash,
        provider: 'xdi',
      }),
      jupiter: getRects({
        scores: [1, 2, 3, 4, 5],
        offsets,
        counts: hash,
        provider: 'jupiter',
      }),
    }

    const yMax = lines.reduce(
      (max, { data }) =>
        Math.max(
          max,
          ...data.map((el) => el[1]),
          ...rects.xdi.map(({ y }) => y[1]),
          ...rects.jupiter.map(({ y }) => y[1])
        ),
      0
    )

    return { lines, rects, yMax }
  }, [xdi, jupiter])

  return (
    <Box sx={{ width: ['calc(100% - 10px)', '100%'], height: [200, '100%'] }}>
      <Chart
        x={[-0.05, 1.05]}
        y={[0.4, yMax]}
        padding={{ left: 0, right: 24, bottom: 0, top: 0 }}
      >
        <AxisLabel left sx={{ left: 'calc(100% - 16px)' }}>
          Increasing risk
        </AxisLabel>
        <Label
          x={-0.05}
          y={rects.xdi[0]['y'][0]}
          align='left'
          sx={{ pt: 1, color: provider === 'xdi' ? 'primary' : 'secondary' }}
        >
          XDI
        </Label>
        <Label
          x={1.05}
          y={rects.jupiter[0]['y'][0]}
          align='right'
          sx={{
            pt: 1,
            color: provider === 'jupiter' ? 'primary' : 'secondary',
          }}
        >
          Jupiter
        </Label>
        <Plot>
          {lines.map(({ id, data, color }) => (
            <Line key={id} data={data} color={color} opacity={0.6} />
          ))}
          {rects.xdi.map(({ score, x, y }, i) => (
            <Rect key={score} x={x} y={y} color={`rgba(${xdiColormap[i]})`} />
          ))}
          {rects.jupiter.map(({ score, x, y }, i) => (
            <Rect
              key={score}
              x={x}
              y={y}
              color={`rgba(${jupiterColormap[i]})`}
            />
          ))}
        </Plot>
      </Chart>
    </Box>
  )
}

export default SlopeGraph
