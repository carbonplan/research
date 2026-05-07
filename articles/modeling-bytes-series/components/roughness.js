import { Box, Flex } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import {
  Chart,
  Plot,
  Grid,
  Ticks,
  TickLabels,
  Axis,
  AxisLabel,
  Label,
  Line,
} from '@carbonplan/charts'
import { Arrow } from '@carbonplan/icons'
import { roughness } from './data'

const nsb07Interp = roughness.map((r) => [r.diameter_um / 2, r.nsb07_interp])
const nsb07Intended = roughness.map((r) => [
  r.diameter_um / 2,
  r.nsb07_intended,
])

const X_MIN = 0
const X_MAX = 1000
const Y_MIN = 0
const Y_MAX = 220

const Roughness = () => {
  return (
    <Box sx={{ width: '100%', height: '400px' }}>
      <Chart
        x={[X_MIN, X_MAX]}
        y={[Y_MIN, Y_MAX]}
        padding={{ left: 70, bottom: 50, top: 30, right: 20 }}
      >
        <Grid vertical horizontal />
        <Ticks left />
        <Ticks bottom />
        <TickLabels left />
        <TickLabels bottom />
        <Axis left bottom />
        <AxisLabel
          left
          arrow={false}
          align='center'
          sx={{
            '& > :first-of-type': { height: '100%' },
            '& > :first-of-type > :first-of-type': { height: '100%' },
          }}
        >
          <Flex sx={{ justifyContent: 'space-between', height: '100%' }}>
            <Flex sx={{ gap: 2 }}>
              <Arrow
                sx={{
                  position: 'relative',
                  right: '4px',
                  width: 11,
                  height: 11,
                  transform: 'rotate(315deg)',
                }}
              />
              <Box
                as='svg'
                width='22'
                viewBox='0 0 93 95'
                fill='none'
                sx={{ mr: '-1px' }}
              >
                <Box
                  as='path'
                  d='M53 0L63.19 11.6209L80 16.5L85.3791 33.81L93 45.5L85.3791 65.19L80 81.5L63.19 87.3791L49 94.5L31.81 87.3791L12.5 79.5L9.62094 65.19L0 45.5L9.62094 33.81L11 19.5L31.81 11.6209L53 0Z'
                  sx={{
                    fill: alpha('grey', 0.5),
                    stroke: 'grey',
                    strokeWidth: 5,
                  }}
                />
              </Box>
            </Flex>

            <Box sx={{ flexShrink: 0 }}>
              Roughness factor&nbsp;
              <Box as='span' sx={{ textTransform: 'none' }}>
                (λ)
              </Box>
            </Box>

            <Flex sx={{ gap: '6px' }}>
              <Box
                as='svg'
                width='22'
                viewBox='0 0 105 137'
                fill='none'
                sx={{ transform: 'rotate(90deg)' }}
              >
                <Box
                  as='path'
                  d='M58 0L68.5 11L80.6342 3.80603V15.9098L91.5 14.6447L94.5 27.2216L104.5 34L84.5 54.3553L94.5 67.5L80 81L92.5 89.8553L83 102L86.5 114.5L75 116.5L75.5 128.5L63 127L56.5 136.194L47 133.5L48 117.855L35.5 112.855L27 115L24.5 104L12 99L20 90.8553L4 83L14.5 75.8553L0 67.5L19 57.5L14.5 47.5L29 43L30 22H40V9.35535L56 7.5L58 0Z'
                  sx={{
                    fill: alpha('grey', 0.5),
                    stroke: 'grey',
                    strokeWidth: 5,
                  }}
                />
              </Box>
              <Arrow
                sx={{
                  position: 'relative',
                  right: '4px',
                  width: 11,
                  height: 11,
                  transform: 'rotate(135deg)',
                }}
              />
            </Flex>
          </Flex>
        </AxisLabel>
        <AxisLabel bottom units='µm'>
          Dust radius
        </AxisLabel>

        <Plot>
          <Line data={nsb07Interp} color='grey' width={2} />
          <Line data={nsb07Intended} color='grey' width={2} />
        </Plot>

        <Label x={600} y={167} color='grey' sx={{ textTransform: 'none' }}>
          B20 equation
        </Label>
        <Label
          x={975}
          y={35}
          align='right'
          sx={{ color: 'grey', textTransform: 'none' }}
        >
          NSB07 intended
        </Label>
      </Chart>
    </Box>
  )
}

export default Roughness
