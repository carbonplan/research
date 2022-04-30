import { useMemo } from 'react'
import { Box, Flex } from 'theme-ui'
import { animated, useSpring, easings } from '@react-spring/web'
import {
  Area,
  Axis,
  AxisLabel,
  Chart,
  Grid,
  Label,
  Line,
  Plot,
  Ticks,
  TickLabels,
} from '@carbonplan/charts'
import { Column, Filter, Group, Row } from '@carbonplan/components'
import { useState } from 'react'
import { getScenarioData, getIrfCurve } from './utils'

const TIME_HORIZON = 100
const DELAY = 20

const sx = {
  filterLabel: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [2, 2, 2, 3],
    mt: [0],
    pb: [0],
  },
  button: {
    color: 'primary',
    border: 'none',
    bg: 'transparent',
    cursor: 'pointer',
    fontFamily: 'body',
    letterSpacing: 'smallcaps',
    fontSize: [3, 3, 3, 4],
    transition: 'color 0.15s',
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': {
        color: 'secondary',
      },
    },
  },
  value: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    fontSize: [2, 4, 4, '28px'],
  },
  label: {
    fontSize: [1, 1, 1, 2],
    fontFamily: 'faux',
    letterSpacing: 'faux',
    mt: [0],
  },
}

const AnimatedChart = animated(Chart)

const MethodsChart = () => {
  const [zoomed, setZoomed] = useState(true)
  const [method, setMethod] = useState('Moura Costa')
  const { domain } = useSpring({
    domain: zoomed ? [0, TIME_HORIZON + DELAY] : [0, 1000],
    config: {
      duration: 500,
      easing: easings.easeOut,
    },
  })

  const { lineData, areaData, benefit, benefitLine } = useMemo(() => {
    const { lineData } = getScenarioData(
      method,
      getIrfCurve('joos_2013'),
      1000,
      DELAY,
      0
    )

    const { areaData, benefit } = getScenarioData(
      method,
      getIrfCurve('joos_2013'),
      TIME_HORIZON,
      DELAY,
      0
    )

    let benefitLine

    if (method === 'Lashof') {
      benefitLine = lineData.slice(TIME_HORIZON + 2, TIME_HORIZON + DELAY + 3)
    } else {
      benefitLine = lineData.slice(0, DELAY + 2)
    }

    return { lineData, areaData, benefit, benefitLine }
  }, [method])

  const color = method === 'Lashof' ? 'pink' : 'green'
  const benefitPosition = {}
  if (method === 'Lashof') {
    benefitPosition.right = [
      'calc(0.1 * (100% - 70px) )',
      'calc(0.2 * (100% - 70px) )',
      'calc(0.2 * (100% - 70px) )',
      'calc(0.2 * (100% - 70px) )',
    ]
  } else {
    benefitPosition.left = 'calc(0.2 * (100% - 70px) + 75px)'
  }
  return (
    <Box>
      <Flex sx={{ mb: 3, gap: [3, 5, 5, 6] }}>
        <Box>
          <Box sx={sx.filterLabel}>Method</Box>
          <Filter
            sx={{ mb: 3 }}
            values={{
              'Moura Costa': method === 'Moura Costa',
              Lashof: method === 'Lashof',
            }}
            colors={{
              'Moura Costa': 'green',
              Lashof: 'pink',
            }}
            setValues={(v) => setMethod(v.Lashof ? 'Lashof' : 'Moura Costa')}
          />
        </Box>

        <Box>
          <Box sx={sx.filterLabel}>Timescale</Box>
          <Filter
            sx={{ mb: 3 }}
            values={{
              '100 years': zoomed,
              '1000 years': !zoomed,
            }}
            setValues={(v) => setZoomed(v['100 years'])}
          />
        </Box>
      </Flex>

      <Group>
        <Box
          sx={{
            width: '100%',
            height: ['300px', '300px', '300px', '350px'],
            position: 'relative',
          }}
        >
          <AnimatedChart
            clamp={false}
            x={domain}
            y={[-1, 1]}
            padding={{ left: 70 }}
          >
            <Ticks left bottom />
            <TickLabels left bottom />
            <Grid vertical />
            <Grid
              horizontal
              values={[0]}
              sx={{
                borderColor: 'secondary',
                opacity: 1,
              }}
            />

            <Axis left />
            <AxisLabel align='left' left units='tCO₂'>
              volume
            </AxisLabel>
            <AxisLabel bottom units='years'>
              time
            </AxisLabel>

            <Label
              x={TIME_HORIZON}
              y={1}
              sx={{
                display: ['none', 'block', 'block', 'block'],
                ml: 3,
                mt: '-5px',
              }}
            >
              <Box>Time&nbsp;Horizon</Box>
              <Box sx={{ opacity: 1, transition: 'opacity .2s' }}>
                (100&nbsp;years)
              </Box>
            </Label>

            <Plot sx={{ overflow: 'hidden' }}>
              <Line color='primary' data={lineData} />
              <Line color={color} data={benefitLine} />

              <Area
                color={color}
                data={areaData}
                sx={{
                  opacity: '40%',
                }}
              />
            </Plot>
            <Grid
              vertical
              values={[TIME_HORIZON]}
              sx={{
                borderLeftWidth: '2px',
                borderColor: 'secondary',
                borderStyle: 'dashed',
                opacity: 1,
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                ...benefitPosition,
                top: method === 'Lashof' ? '150px' : '150px',
                mt: 2,
              }}
            >
              <Box sx={{ ...sx.value, color }}>
                {benefit.toFixed(2)} ton-years
              </Box>
              <Box sx={{ ...sx.label, color }}>
                Benefit of storing 1{' '}
                <Box as='span' sx={{ textTransform: 'none' }}>
                  tCO₂
                </Box>
              </Box>
            </Box>
          </AnimatedChart>
        </Box>
      </Group>
    </Box>
  )
}

export default MethodsChart
