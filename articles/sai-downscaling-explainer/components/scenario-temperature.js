import { useMemo, useState } from 'react'
import { Box, Flex } from 'theme-ui'
import { Filter } from '@carbonplan/components'
import {
  Chart,
  Plot,
  Ticks,
  TickLabels,
  Axis,
  AxisLabel,
  Grid,
  Line,
  Label,
} from '@carbonplan/charts'

import rawTemperature from './data/figure2.json'
import rawEmissions from './data/figure2-co2-emissions.json'
import rawSo2 from './data/figure2-so2.json'

const sx = {
  label: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [2, 2, 2, 3],
    userSelect: 'none',
    mt: [0],
    pb: [0],
  },
}

const OPACITY = {
  member: 0.45,
  memberDimmed: 0.1,
  mean: 1,
  meanDimmed: 0.25,
}

const TRANSITION = 'opacity 0.15s, stroke-width 0.15s'

const SCENARIOS = [
  { key: 'historical', label: 'Historical', color: 'secondary' },
  { key: 'ssp2-4.5', label: 'SSP2-4.5', color: 'purple' },
  { key: 'g6-1.5k', label: 'G6-1.5K-SAI', color: 'orange' },
  { key: 'g6-1.5k-term', label: 'Termination', color: 'red' },
]

// A run that branches off another starts the year after its parent ends. The
// historical run is extended forward into the scenarios so the offset scenario
// lines don't jump at their first year.
const extendToBranch = (data, parentKey, childKey) => {
  const parent = data[parentKey]
  const child = data[childKey]
  if (!parent || !child) return data
  const branchPoint = [
    child[0].d[0][0],
    child.reduce((sum, { d }) => sum + d[0][1], 0) / child.length,
  ]
  return {
    ...data,
    [parentKey]: parent.map((series) => ({
      ...series,
      d: [...series.d, branchPoint],
    })),
  }
}

// The termination run instead reaches back to its parent, so the drop stays
// part of the termination line.
const branchFrom = (data, parentKey, childKey, member) => {
  const parent = data[parentKey]?.find(({ m }) => m === member)
  const child = data[childKey]
  if (!parent || !child) return data
  const branchPoint = parent.d[parent.d.length - 1]
  return {
    ...data,
    [childKey]: child.map((series) => ({
      ...series,
      d: [branchPoint, ...series.d],
    })),
  }
}

const joinBranchPoints = (data) =>
  branchFrom(
    extendToBranch(data, 'historical', 'ssp2-4.5'),
    'g6-1.5k',
    'g6-1.5k-term',
    '002'
  )

const temperature = joinBranchPoints(rawTemperature)
const emissions = joinBranchPoints(rawEmissions)
// Injection is zero for the whole termination run, so it is drawn along the
// SSP2-4.5 zero line rather than joined back to its parent.
const so2 = extendToBranch(rawSo2, 'historical', 'ssp2-4.5')

const sspEmissions = emissions['ssp2-4.5'][0].d
const g6Emissions = sspEmissions.filter(
  ([year]) => year >= 2035 && year <= 2084
)
const termEmissions = sspEmissions.filter(([year]) => year >= 2084)

const VIEWS = {
  temperature: {
    data: temperature,
    domain: [13, 18],
    axisLabel: 'Global mean temperature',
    units: '°C',
    labels: {
      historical: { x: 1996, y: 13.8 },
      'ssp2-4.5': { x: 2043, y: 16.5 },
      'g6-1.5k': { x: 2060, y: 15.1 },
      'g6-1.5k-term': { x: 2085, y: 16.2, align: 'right' },
    },
  },
  'CO₂ emissions': {
    data: emissions,
    domain: [0, 50],
    axisLabel: 'CO₂ emissions',
    units: 'Gt/yr',
    shared: {
      data: sspEmissions,
      strands: [
        { key: 'ssp2-4.5', color: 'purple', data: sspEmissions },
        { key: 'g6-1.5k', color: 'orange', data: g6Emissions },
        { key: 'g6-1.5k-term', color: 'red', data: termEmissions },
      ],
    },
    labels: {
      historical: { x: 2003, y: 26 },
      'ssp2-4.5': { x: 2054, y: 37 },
      'g6-1.5k': { x: 2054, y: 33 },
      'g6-1.5k-term': { x: 2054, y: 29 },
    },
  },
  'SO₂ injection': {
    data: so2,
    domain: [-1, 16],
    axisLabel: 'SO₂ injection',
    units: 'Tg/yr',
    labels: {
      'g6-1.5k': { x: 2040, y: 7 },
      historical: { x: 1996, y: 1 },
      'ssp2-4.5': { x: 2062, y: 1 },
      'g6-1.5k-term': { x: 2100, y: 1, align: 'right' },
    },
  },
}

const INPUT_VIEWS = [
  'CO₂ emissions',
  'SO₂ injection',
  // 'Stratospheric AOD'
]
const OUTPUT_VIEWS = ['temperature']

const ensembleMean = (members) => {
  const byYear = {}
  members.forEach(({ d }) =>
    d.forEach(([year, value]) => {
      ;(byYear[year] ||= []).push(value)
    })
  )
  return Object.keys(byYear)
    .map(Number)
    .sort((a, b) => a - b)
    .map((year) => {
      const vals = byYear[year]
      return [year, vals.reduce((a, b) => a + b, 0) / vals.length]
    })
}

const ScenarioTemperature = () => {
  const [view, setView] = useState('temperature')
  const [hovered, setHovered] = useState(null)

  const handleSelect = (obj) => {
    const selected = Object.keys(obj).find((key) => obj[key])
    if (selected) {
      setView(selected)
      setHovered(null)
    }
  }

  const groupValues = (group) =>
    Object.fromEntries(group.map((key) => [key, key === view]))

  const means = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(VIEWS).map(([viewKey, { data }]) => [
          viewKey,
          Object.fromEntries(
            SCENARIOS.filter(({ key }) => data[key]).map(({ key }) => [
              key,
              ensembleMean(data[key]),
            ])
          ),
        ])
      ),
    []
  )

  const {
    data,
    domain,
    axisLabel,
    units,
    labels,
    shared,
    styles = {},
  } = VIEWS[view]
  const labelHeight = (domain[1] - domain[0]) / 50

  const strandKeys = new Set(shared?.strands.map(({ key }) => key) ?? [])
  const plain = SCENARIOS.filter(({ key }) => data[key] && !strandKeys.has(key))
  const highlight = shared?.strands.find(({ key }) => key === hovered)

  const dimmed = (key) => hovered && hovered !== key
  const hover = (key) => ({
    onMouseEnter: () => setHovered(key),
    onMouseLeave: () => setHovered(null),
  })
  // the hovered scenario renders last so it sits above what it overlaps
  const toFront = (entries) =>
    hovered
      ? [...entries].sort((a, b) => (a.key === hovered) - (b.key === hovered))
      : entries

  return (
    <Box sx={{ width: '100%' }}>
      <Flex sx={{ mb: 3, alignItems: 'stretch', gap: [3, 3, 4, 4] }}>
        <Box>
          <Box sx={sx.label}>Output</Box>
          <Box>
            <Filter
              values={groupValues(OUTPUT_VIEWS)}
              order={OUTPUT_VIEWS}
              setValues={handleSelect}
            />
          </Box>
        </Box>
        <Box>
          <Box sx={sx.label}>Inputs</Box>
          <Box>
            <Filter
              values={groupValues(INPUT_VIEWS)}
              order={INPUT_VIEWS}
              setValues={handleSelect}
            />
          </Box>
        </Box>
      </Flex>
      <Box sx={{ width: '100%', height: '400px' }}>
        <Chart x={[1980, 2100]} y={domain} padding={{ left: 60 }}>
          <Ticks left bottom />
          <TickLabels left bottom />
          <Axis left bottom />
          <AxisLabel left units={units}>
            {axisLabel}
          </AxisLabel>
          <AxisLabel bottom>Year</AxisLabel>
          <Grid horizontal vertical />
          <Plot>
            {toFront(plain).flatMap(({ key, color }) =>
              (data[key].length > 1 ? data[key] : []).map((series) => (
                <Line
                  key={`${key}-${series.m}`}
                  data={series.d}
                  color={color}
                  width={0.5}
                  sx={{
                    opacity: dimmed(key)
                      ? OPACITY.memberDimmed
                      : OPACITY.member,
                    transition: TRANSITION,
                  }}
                />
              ))
            )}
            {/* bold lines: ensemble mean per scenario */}
            {toFront(plain).map(({ key, color }) => (
              <Line
                key={`mean-${key}`}
                data={means[view][key]}
                color={color}
                width={hovered === key ? 3 : 2}
                sx={{
                  opacity: dimmed(key) ? OPACITY.meanDimmed : OPACITY.mean,
                  transition: TRANSITION,
                  ...styles[key],
                }}
              />
            ))}
            {shared && (
              <Line
                data={shared.data}
                color='primary'
                width={2}
                sx={{
                  opacity: hovered ? OPACITY.meanDimmed : OPACITY.mean,
                  transition: TRANSITION,
                }}
              />
            )}
            {highlight && (
              <Line
                data={highlight.data}
                color={highlight.color}
                width={3}
                sx={{ transition: TRANSITION }}
              />
            )}
            {/* invisible wide strokes so the thin lines are hoverable */}
            {plain.map(({ key }) => (
              <Line
                key={`hit-${key}`}
                data={means[view][key]}
                color='transparent'
                width={12}
                sx={{ pointerEvents: 'stroke' }}
                {...hover(key)}
              />
            ))}
          </Plot>
          {/* each Label is wrapped in a box spanning the whole plot, which
              would otherwise swallow every hover meant for the lines below */}
          <Box sx={{ '& > div': { pointerEvents: 'none' } }}>
            {SCENARIOS.filter(({ key }) => labels[key]).map(
              ({ key, label, color }) => {
                const { x, y, text, align = 'center' } = labels[key]
                return (
                  <Label
                    key={key}
                    x={x}
                    y={y}
                    align={align}
                    verticalAlign='middle'
                    width={40}
                    height={labelHeight}
                    sx={{
                      color,
                      fontSize: [0, 0, 0, 1],
                      opacity: dimmed(key) ? OPACITY.meanDimmed : OPACITY.mean,
                      transition: TRANSITION,
                      pointerEvents: 'auto',
                      cursor: 'pointer',
                      width: 'fit-content',
                      mx: 'auto',
                    }}
                    {...hover(key)}
                  >
                    {text ?? label}
                  </Label>
                )
              }
            )}
          </Box>
        </Chart>
      </Box>
    </Box>
  )
}

export default ScenarioTemperature
