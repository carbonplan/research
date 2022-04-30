import { Box, useThemeUI } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import {
  Chart,
  Plot,
  Axis,
  Grid,
  Ticks,
  TickLabels,
  Line,
  Point,
} from '@carbonplan/charts'
import Rect from './rect'

const sx = {
  value: {
    position: 'absolute',
    fontFamily: 'mono',
    letterSpacing: 'mono',
    fontSize: [0, 0, 0, 1],
    top: 0,
    color: 'orange',
    mt: ['-25px'],
    width: '100%',
    textAlign: 'center',
  },
  legend: {
    color: 'secondary',
    transition: 'color 0.15s',
    fontSize: [0, 0, 0, 1],
    fontFamily: 'mono',
    transform: 'translateX(10px) translateY(-50%)',
  },
}

const DepthProfile = ({
  data,
  depth,
  legend,
  mobileLegend,
  sliderChanging,
}) => {
  const getValue = () => {
    const target = depth < 100 ? depth : 99.99
    const value = data.filter((d) => target >= d.b[0] && target < d.b[1])[0].m
    return value
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '300px',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          ...sx.value,
          color: getValue() > 0 ? 'orange' : 'secondary',
        }}
      >
        {getValue() > 0 && '+'}
        {getValue()}%
      </Box>
      <Chart x={[-30, 30]} y={[0, 100]} padding={{ left: 0, bottom: 0 }}>
        <Ticks bottom values={[-20, 0, 20]} />
        <TickLabels bottom values={[-20, 0, 20]} labels={['-20', 0, '+20']} />
        {mobileLegend && (
          <TickLabels
            right
            values={[0, 100]}
            labels={[<span>100&nbsp;cm</span>, <span>0&nbsp;cm</span>]}
          />
        )}
        <Plot>
          {data.map((d, i) => {
            return (
              <g key={i}>
                <Rect
                  x={[0, d.m]}
                  y={[100 - d.b[0], 100 - d.b[1]]}
                  sx={{
                    fill: d.m < 0 ? 'secondary' : 'orange',
                    stroke: 'background',
                    strokeWidth: '0px',
                  }}
                />
                <Rect
                  x={[-30, 0]}
                  y={[100 - d.b[0], 100 - d.b[1]]}
                  sx={{
                    fill: alpha('secondary', 0.1),
                  }}
                />
                <Rect
                  x={[0, 30]}
                  y={[100 - d.b[0], 100 - d.b[1]]}
                  sx={{
                    fill: alpha('orange', 0.1),
                  }}
                />
                {i < data.length - 1 && (
                  <Line
                    data={[
                      [-30, 100 - d.b[1]],
                      [30, 100 - d.b[1]],
                    ]}
                    width={3}
                    color={'background'}
                  />
                )}
              </g>
            )
          })}
          <Line
            data={[
              [-30, 100 - depth],
              [30, 100 - depth],
            ]}
            width={1}
            color={sliderChanging ? 'orange' : 'secondary'}
            sx={{ transition: 'stroke 0.15s' }}
          />
        </Plot>
        {mobileLegend && (
          <Point x={30} y={100 - 30}>
            <Box
              sx={{
                ...sx.legend,
                color: sliderChanging ? 'orange' : 'secondary',
              }}
            >
              <span>30&nbsp;cm</span>
            </Box>
          </Point>
        )}
        {legend && (
          <Point x={30} y={100 - depth}>
            <Box
              sx={{
                ...sx.legend,
                color: sliderChanging ? 'orange' : 'secondary',
              }}
            >
              <span>{depth}&nbsp;cm</span>
            </Box>
          </Point>
        )}
      </Chart>
    </Box>
  )
}

export default DepthProfile
