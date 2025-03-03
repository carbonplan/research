import {
  Area,
  Axis,
  AxisLabel,
  Chart,
  Grid,
  Label,
  Plot,
} from '@carbonplan/charts'
import { Filter } from '@carbonplan/components'
import { useState } from 'react'
import { Box, Flex } from 'theme-ui'

const ACTIVITY_MAPPING = {
  baseline: {
    arrows: (
      <>
        <path d='M64.6464 87.6464C64.4512 87.8417 64.4512 88.1583 64.6464 88.3536L67.8284 91.5355C68.0237 91.7308 68.3403 91.7308 68.5355 91.5355C68.7308 91.3403 68.7308 91.0237 68.5355 90.8284L65.7071 88L68.5355 85.1716C68.7308 84.9763 68.7308 84.6597 68.5355 84.4645C68.3403 84.2692 68.0237 84.2692 67.8284 84.4645L64.6464 87.6464ZM79.4419 87.5L65 87.5V88.5L79.4419 88.5V87.5ZM91.5 61L91.5 74.5H92.5L92.5 61H91.5ZM79.4419 88.5C86.6871 88.5 92.5 82.1973 92.5 74.5H91.5C91.5 81.7144 86.0679 87.5 79.4419 87.5V88.5Z' />
        <path d='M86.3536 56.3536C86.5488 56.1583 86.5488 55.8417 86.3536 55.6464L83.1716 52.4645C82.9763 52.2692 82.6597 52.2692 82.4645 52.4645C82.2692 52.6597 82.2692 52.9763 82.4645 53.1716L85.2929 56L82.4645 58.8284C82.2692 59.0237 82.2692 59.3403 82.4645 59.5355C82.6597 59.7308 82.9763 59.7308 83.1716 59.5355L86.3536 56.3536ZM71.5581 56.5L86 56.5V55.5L71.5581 55.5V56.5ZM59.5 83L59.5 69.5H58.5L58.5 83H59.5ZM71.5581 55.5C64.3129 55.5 58.5 61.8027 58.5 69.5H59.5C59.5 62.2856 64.9321 56.5 71.5581 56.5V55.5Z' />
      </>
    ),
    deltas: {
      atmosphere: 0,
      forest: 0,
      geologic: 0,
    },
  },
  removal: {
    arrows: (
      <>
        <path d='M63.6464 87.6464C63.4512 87.8417 63.4512 88.1583 63.6464 88.3536L66.8284 91.5355C67.0237 91.7308 67.3403 91.7308 67.5355 91.5355C67.7308 91.3403 67.7308 91.0237 67.5355 90.8284L64.7071 88L67.5355 85.1716C67.7308 84.9763 67.7308 84.6597 67.5355 84.4645C67.3403 84.2692 67.0237 84.2692 66.8284 84.4645L63.6464 87.6464ZM78.4419 87.5L64 87.5V88.5L78.4419 88.5V87.5ZM90.5 61L90.5 74.5H91.5L91.5 61H90.5ZM78.4419 88.5C85.6871 88.5 91.5 82.1973 91.5 74.5H90.5C90.5 81.7144 85.0679 87.5 78.4419 87.5V88.5Z' />
        <path d='M85.3536 56.3536C85.5488 56.1583 85.5488 55.8417 85.3536 55.6464L82.1716 52.4645C81.9763 52.2692 81.6597 52.2692 81.4645 52.4645C81.2692 52.6597 81.2692 52.9763 81.4645 53.1716L84.2929 56L81.4645 58.8284C81.2692 59.0237 81.2692 59.3403 81.4645 59.5355C81.6597 59.7308 81.9763 59.7308 82.1716 59.5355L85.3536 56.3536ZM70.5581 56.5L85 56.5V55.5L70.5581 55.5V56.5ZM58.5 83L58.5 69.5H57.5L57.5 83H58.5ZM70.5581 55.5C63.3129 55.5 57.5 61.8027 57.5 69.5H58.5C58.5 62.2856 63.9321 56.5 70.5581 56.5V55.5Z' />
        <path d='M-9 68.5581L-9.5 68.5581L-9.5 68.5581L-9 68.5581ZM18.3536 208.646C18.5488 208.842 18.5488 209.158 18.3536 209.354L15.1716 212.536C14.9763 212.731 14.6597 212.731 14.4645 212.536C14.2692 212.34 14.2692 212.024 14.4645 211.828L17.2929 209L14.4645 206.172C14.2692 205.976 14.2692 205.66 14.4645 205.464C14.6597 205.269 14.9763 205.269 15.1716 205.464L18.3536 208.646ZM-9 196L-8.5 196V196L-9 196ZM18 56.5L4.5 56.5L4.5 55.5L18 55.5L18 56.5ZM-9.5 68.5581C-9.5 61.3129 -3.19732 55.5 4.5 55.5L4.5 56.5C-2.71437 56.5 -8.5 61.9321 -8.5 68.5581L-9.5 68.5581ZM4.5 208.5L18 208.5L18 209.5L4.5 209.5L4.5 208.5ZM-8.5 68.5581L-8.5 196L-9.5 196L-9.5 68.5581L-8.5 68.5581ZM4.5 209.5C-3.27614 209.5 -9.5 202.776 -9.5 196L-8.5 196C-8.5 202.224 -2.72386 208.5 4.5 208.5L4.5 209.5Z' />
      </>
    ),
    deltas: {
      atmosphere: -1,
      forest: 0,
      geologic: 1,
    },
  },
  reduced_outgassing: {
    arrows: (
      <>
        <path d='M63.6464 87.6464C63.4512 87.8417 63.4512 88.1583 63.6464 88.3536L66.8284 91.5355C67.0237 91.7308 67.3403 91.7308 67.5355 91.5355C67.7308 91.3403 67.7308 91.0237 67.5355 90.8284L64.7071 88L67.5355 85.1716C67.7308 84.9763 67.7308 84.6597 67.5355 84.4645C67.3403 84.2692 67.0237 84.2692 66.8284 84.4645L63.6464 87.6464ZM78.4419 87.5L64 87.5V88.5L78.4419 88.5V87.5ZM90.5 61L90.5 74.5H91.5L91.5 61H90.5ZM78.4419 88.5C85.6871 88.5 91.5 82.1973 91.5 74.5H90.5C90.5 81.7144 85.0679 87.5 78.4419 87.5V88.5Z' />
        <path d='M4.5 71.0001L4.5 71.5001L4.5 71.5001L4.5 71.0001ZM18.3536 209.354C18.5488 209.158 18.5488 208.842 18.3536 208.646L15.1716 205.464C14.9763 205.269 14.6597 205.269 14.4645 205.464C14.2692 205.66 14.2692 205.976 14.4645 206.172L17.2929 209L14.4645 211.828C14.2692 212.024 14.2692 212.34 14.4645 212.536C14.6597 212.731 14.9763 212.731 15.1716 212.536L18.3536 209.354ZM44 71L44 70.5L44 70.5L44 71ZM-8.5 83.5582C-8.5 76.9321 -2.71437 71.5001 4.5 71.5001L4.5 70.5001C-3.19732 70.5001 -9.5 76.313 -9.5 83.5582H-8.5ZM4.5 209.5H18V208.5H4.5V209.5ZM-9.5 83.5582V196H-8.5V83.5582H-9.5ZM4.5 208.5C-2.72386 208.5 -8.5 202.224 -8.5 196H-9.5C-9.5 202.776 -3.27614 209.5 4.5 209.5V208.5ZM57 83.5581V85H58V83.5581H57ZM4.5 71.5001L44 71.5L44 70.5L4.5 70.5001L4.5 71.5001ZM58 83.5581C58 76.3129 51.6973 70.5 44 70.5V71.5C51.2144 71.5 57 76.9321 57 83.5581H58Z' />
      </>
    ),
    deltas: {
      atmosphere: -1,
      forest: 0,
      geologic: 1,
    },
  },
  fast_to_slow: {
    arrows: (
      <>
        <path d='M-9 145.558L-9.5 145.558V145.558L-9 145.558ZM18.3536 208.646C18.5488 208.842 18.5488 209.158 18.3536 209.354L15.1716 212.536C14.9763 212.731 14.6597 212.731 14.4645 212.536C14.2692 212.34 14.2692 212.024 14.4645 211.828L17.2929 209L14.4645 206.172C14.2692 205.976 14.2692 205.66 14.4645 205.464C14.6597 205.269 14.9763 205.269 15.1716 205.464L18.3536 208.646ZM-9 196L-8.5 196L-9 196ZM18 133.5L4.5 133.5L4.5 132.5L18 132.5L18 133.5ZM-9.5 145.558C-9.5 138.313 -3.19732 132.5 4.5 132.5L4.5 133.5C-2.71437 133.5 -8.5 138.932 -8.5 145.558L-9.5 145.558ZM4.5 208.5L18 208.5L18 209.5L4.5 209.5L4.5 208.5ZM-8.5 145.558L-8.5 196L-9.5 196L-9.5 145.558L-8.5 145.558ZM4.5 209.5C-3.27614 209.5 -9.5 202.776 -9.5 196L-8.5 196C-8.5 202.224 -2.72386 208.5 4.5 208.5L4.5 209.5Z' />
        <path d='M63.6464 87.6464C63.4512 87.8417 63.4512 88.1583 63.6464 88.3536L66.8284 91.5355C67.0237 91.7308 67.3403 91.7308 67.5355 91.5355C67.7308 91.3403 67.7308 91.0237 67.5355 90.8284L64.7071 88L67.5355 85.1716C67.7308 84.9763 67.7308 84.6597 67.5355 84.4645C67.3403 84.2692 67.0237 84.2692 66.8284 84.4645L63.6464 87.6464ZM78.4419 87.5L64 87.5V88.5L78.4419 88.5V87.5ZM90.5 61L90.5 74.5H91.5L91.5 61H90.5ZM78.4419 88.5C85.6871 88.5 91.5 82.1973 91.5 74.5H90.5C90.5 81.7144 85.0679 87.5 78.4419 87.5V88.5Z' />
        <path d='M85.3536 56.3536C85.5488 56.1583 85.5488 55.8417 85.3536 55.6464L82.1716 52.4645C81.9763 52.2692 81.6597 52.2692 81.4645 52.4645C81.2692 52.6597 81.2692 52.9763 81.4645 53.1716L84.2929 56L81.4645 58.8284C81.2692 59.0237 81.2692 59.3403 81.4645 59.5355C81.6597 59.7308 81.9763 59.7308 82.1716 59.5355L85.3536 56.3536ZM70.5581 56.5L85 56.5V55.5L70.5581 55.5V56.5ZM58.5 83L58.5 69.5H57.5L57.5 83H58.5ZM70.5581 55.5C63.3129 55.5 57.5 61.8027 57.5 69.5H58.5C58.5 62.2856 63.9321 56.5 70.5581 56.5V55.5Z' />
      </>
    ),
    deltas: {
      atmosphere: 0,
      forest: -1,
      geologic: 1,
    },
  },
}

const SCENARIO_MAPPING = {
  stable: {
    atmosphere: 0,
    forest: 0,
    geologic: 0,
  },
  increasing: {
    atmosphere: -1,
    forest: 1,
    geologic: 0,
  },
  decreasing: {
    atmosphere: 1,
    forest: -1,
    geologic: 0,
  },
}

const FIGURE_WIDTHS = [
  `(6 / 6 * (100vw - 24px * 7) + 5 * 24px)`,
  `(6 / 8 * (100vw - 32px * 9) + 5 * 32px)`,
  `(6 / 12 * (100vw - 32px * 13) + 5 * 32px)`,
  `(6 / 12 * (100vw - 48px * 13) + 5 * 48px)`,
]

const GAPS = [3, 4, 4, 5]
const NUM_ACTIVITIES = 3

const sx = {
  heading: {
    pl: '12px',
    flex: 1,
    textTransform: 'uppercase',
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    fontSize: [1, 2, 2, 3],
    mb: [2, 3, 3, 4],
    textAlign: 'right',
    '@media (width > 1436px)': {
      // Remove forced line break and left align on large screens
      textAlign: 'left',
      br: {
        display: 'none',
      },
    },
  },
  element: ({ bottom }) => ({
    height: ({ space }) =>
      FIGURE_WIDTHS.map(
        (figWidth, i) =>
          `calc(((${figWidth} - ${NUM_ACTIVITIES - 1} * ${
            space[GAPS[i]]
          }px) / ${NUM_ACTIVITIES} - 12px) * 0.5 + ${bottom}px)`
      ),
    mb: bottom
      ? 0
      : ({ space }) =>
          FIGURE_WIDTHS.map(
            (figWidth, i) =>
              `calc(((${figWidth} - ${NUM_ACTIVITIES - 1} * ${
                space[GAPS[i]]
              }px) / ${NUM_ACTIVITIES} - 12px) / 12)`
          ),
  }),
  container: {
    gap: GAPS,
    height: ({ space }) =>
      FIGURE_WIDTHS.map(
        (figWidth, i) =>
          `calc((7 + 7 + 6) / 12 * (((${figWidth} - ${NUM_ACTIVITIES - 1} * ${
            space[GAPS[i]]
          }px) / ${NUM_ACTIVITIES} - 12px) + 12px))`
      ),
  },
}

const Element = ({
  label,
  color,
  delta,
  baselineDelta,
  axisLeft,
  axisLabelLeft,
  axisBottom,
  axisLabelBottom,
  start = 3,
  opacity = 0.7,
}) => {
  const bottom = axisBottom ? 12 : 0

  return (
    <Box sx={sx.element({ bottom })}>
      <Chart
        x={[0, 12]}
        y={[0, 6]}
        padding={{ left: 12, bottom }}
        clamp={false}
      >
        <Grid horizontal values={[0, 1, 2, 3, 4, 5, 6]} />
        <Grid vertical values={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} />
        {axisLeft && <Axis left sx={{ ml: '-12px' }} />}
        {axisLabelLeft && (
          <AxisLabel left sx={{ ml: [-3, -3, -3, -4] }}>
            CO₂
          </AxisLabel>
        )}
        {axisBottom && <Axis bottom sx={{ mb: '-12px' }} />}
        {axisLabelBottom && (
          <AxisLabel bottom sx={{ mb: -4 }}>
            Time
          </AxisLabel>
        )}
        <Plot>
          <Area
            color={color}
            opacity={0.15}
            data={[
              [0, start],
              [12, start + baselineDelta],
            ]}
            sx={{ transition: 'all 0.15s' }}
          />
          <Area
            color={color}
            opacity={opacity}
            data={[
              [0, start],
              [12, start + delta],
            ]}
            sx={{ transition: 'all 0.15s' }}
          />
        </Plot>
        <Label
          color={color}
          x={0}
          y={6}
          sx={{ ml: 1, mt: '1px', opacity: 0.8 }}
        >
          {label}
        </Label>
      </Chart>
    </Box>
  )
}

const Activity = ({ id, scenario, axisLeft, axisLabelBottom }) => {
  const { deltas, arrows } = ACTIVITY_MAPPING[id]
  const scenarioDeltas = SCENARIO_MAPPING[scenario]
  return (
    <Box sx={{ flex: 1, position: 'relative' }}>
      <Element
        color='yellow'
        label='Atmosphere'
        delta={deltas.atmosphere + scenarioDeltas.atmosphere}
        baselineDelta={
          ACTIVITY_MAPPING.baseline.deltas.atmosphere +
          scenarioDeltas.atmosphere
        }
        axisLeft={axisLeft}
        axisLabelLeft={axisLeft}
      />
      <Element
        color='green'
        label='Forest'
        axisLeft={axisLeft}
        delta={deltas.forest + scenarioDeltas.forest}
        baselineDelta={
          ACTIVITY_MAPPING.baseline.deltas.forest + scenarioDeltas.forest
        }
      />
      <Element
        axisLeft={axisLeft}
        color='purple'
        label='Geologic'
        start={0}
        delta={deltas.geologic}
        baselineDelta={ACTIVITY_MAPPING.baseline.deltas.geologic}
        opacity={0.85}
        axisBottom
        axisLabelBottom={axisLabelBottom}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          pl: '12px',
          height: '100%',
          width: '100%',
          left: [1, 0, 0, 0],
        }}
      >
        <Box
          as='svg'
          viewBox='0 0 132 216'
          sx={{ overflow: 'visible', fill: 'primary' }}
        >
          {arrows}
        </Box>
      </Box>
    </Box>
  )
}

const Activities = ({ id = 'reduced_outgassing' }) => {
  const [scenario, setScenario] = useState('stable')

  if (!ACTIVITY_MAPPING[id]) {
    throw new Error(`Unexpected activity id: ${id}`)
  }

  return (
    <>
      <Filter
        values={{
          stable: scenario === 'stable',
          increasing: scenario === 'increasing',
        }}
        labels={{
          stable: 'Stable forest',
          increasing: 'Growing forest',
        }}
        setValues={(obj) => setScenario(Object.keys(obj).find((k) => obj[k]))}
        sx={{ mb: 4 }}
      />
      <Flex sx={{ gap: GAPS }}>
        <Box sx={sx.heading}>
          Baseline <br /> scenario
        </Box>
        <Box sx={sx.heading}>
          Direct <br /> removal
        </Box>
        <Box sx={sx.heading}>
          {id === 'fast_to_slow' ? (
            <>
              Fast <br />
              to&nbsp;slow
            </>
          ) : (
            <>
              Reduced <br /> outgassing
            </>
          )}
        </Box>
      </Flex>
      <Flex sx={sx.container}>
        <Activity id='baseline' scenario={scenario} axisLeft />
        <Activity id='removal' scenario={scenario} />
        <Activity id={id} scenario={scenario} axisLabelBottom />
      </Flex>
    </>
  )
}

export default Activities
