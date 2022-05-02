import { Box } from 'theme-ui'
import { scaleLinear } from 'd3-scale'

const y = [50, 100, 200]
const xTicks = [0, 50, 100, 150, 200]
const yTicks = [0, 50, 100, 150, 200]

const xLabel = 'rFIA COMMON PRACTICE'
const xUnits = 'tCO₂ / ACRE'

const yLabel = 'ARB COMMON PRACTICE'
const yUnits = 'tCO₂ / ACRE'

const ml = 24
const mr = 0
const mb = 27
const mt = 0

const xScale = scaleLinear()
  .domain([0, 225])
  .range([0, 100 - (ml + mr)])
const yScale = scaleLinear()
  .domain([0, 225])
  .range([100 - (mt + mb), 0])

const Scatter = ({ data, title, legend1, legend2, color = 'primary' }) => {
  return (
    <Box sx={{ width: '100%', height: ['300px', '250px', '250px', '250px'] }}>
      <Box as='svg' width={'100%'} height={'100%'}>
        <Box
          as='g'
          sx={{ fontSize: [1, 1, 1, 2], fontFamily: 'mono', fill: 'primary' }}
        >
          {xTicks.map((d, i) => {
            return (
              <g
                key={i}
                style={{
                  transform: `translateX(${xScale(d) + ml}%) translateY(${
                    100 - mb
                  }%)`,
                }}
              >
                <text
                  key={i}
                  x={0}
                  y={10}
                  textAnchor={'middle'}
                  dy={15}
                  style={{ userSelect: 'none' }}
                >
                  {d}
                </text>
              </g>
            )
          })}

          {yTicks.map((d, i) => {
            return (
              <g
                key={i}
                style={{
                  transform: `translateX(${ml}%) translateY(${
                    yScale(d) + mt
                  }%)`,
                }}
              >
                <text
                  key={i}
                  x={-10}
                  y={0}
                  textAnchor={'end'}
                  dy={5}
                  style={{ userSelect: 'none' }}
                >
                  {d}
                </text>
              </g>
            )
          })}
        </Box>
        <Box as='g' sx={{ stroke: 'primary' }}>
          {xTicks.map((d, i) => {
            return (
              <line
                key={i}
                x1={xScale(d) + ml + '%'}
                x2={xScale(d) + ml + '%'}
                y1={`${100 - mb + 3}%`}
                y2={`${100 - mb}%`}
              >
                {d}
              </line>
            )
          })}
          {yTicks.map((d, i) => {
            return (
              <line
                key={i}
                y1={yScale(d) + mt + '%'}
                y2={yScale(d) + mt + '%'}
                x1={`${ml}%`}
                x2={`${ml - 2}%`}
              >
                {d}
              </line>
            )
          })}
        </Box>
        <Box as='g' sx={{ stroke: 'primary' }}>
          <line
            x1={`${ml}%`}
            x2={`${100 - mr}%`}
            y1={`${100 - mb}%`}
            y2={`${100 - mb}%`}
          />
          <line x1={`${ml}%`} x2={`${ml}%`} y1={`${mt}%`} y2={`${100 - mb}%`} />
        </Box>
        <Box as='g' sx={{ transform: `translateX(${ml + xScale(225 / 2)}%)` }}>
          <Box
            as='text'
            x={'0%'}
            y={'100%'}
            textAnchor={'middle'}
            sx={{
              fill: 'primary',
              fontFamily: 'mono',
              fontSize: [1, 1, 1, 2],
            }}
          >
            <tspan dy={-19}>{xLabel}</tspan>
          </Box>
        </Box>
        <Box as='g' sx={{ transform: `translateX(${ml + xScale(225 / 2)}%)` }}>
          <Box
            as='text'
            x={'0%'}
            y={'100%'}
            textAnchor={'middle'}
            sx={{
              fill: 'secondary',
              fontFamily: 'mono',
              fontSize: [1, 1, 1, 2],
            }}
          >
            <tspan dy={-2}>{xUnits}</tspan>
          </Box>
        </Box>
        <Box
          as='g'
          sx={{
            transform: `translateY(${mt + yScale(225 / 2)}%) rotate(-90deg)`,
          }}
        >
          <Box
            as='text'
            x={'0%'}
            y={'0%'}
            textAnchor={'middle'}
            sx={{
              fill: 'primary',
              fontFamily: 'mono',
              fontSize: [1, 1, 1, 2],
            }}
          >
            <tspan dy={11}>{yLabel}</tspan>
          </Box>
        </Box>
        <Box
          as='g'
          sx={{
            transform: `translateY(${mt + yScale(225 / 2)}%) rotate(-90deg)`,
          }}
        >
          <Box
            as='text'
            x={'0%'}
            y={'0%'}
            textAnchor={'middle'}
            sx={{
              fill: 'secondary',
              fontFamily: 'mono',
              fontSize: [1, 1, 1, 2],
            }}
          >
            <tspan dy={28}>{yUnits}</tspan>
          </Box>
        </Box>
        <Box
          as='line'
          x1={`${ml + xScale(0)}%`}
          x2={`${ml + xScale(250)}%`}
          y1={`${mt + yScale(0)}%`}
          y2={`${mt + yScale(250)}%`}
          sx={{ stroke: 'secondary', strokeWidth: 1 }}
        />
        <g>
          {data.map((d, i) => {
            return (
              <Box
                key={i}
                as='circle'
                cx={`${ml + xScale(d.x)}%`}
                cy={`${mt + yScale(d.y)}%`}
                r={5}
                sx={{ fill: 'primary' }}
              />
            )
          })}
        </g>
        <Box as='g' sx={{ transform: `translateX(${ml}%)` }}>
          <Box
            as='text'
            x={'0%'}
            y={'0%'}
            textAnchor={'start'}
            dx={15}
            dy={15}
            sx={{
              fill: 'secondary',
              fontFamily: 'body',
              fontSize: [2, 2, 2, 3],
            }}
          >
            {title}
          </Box>
        </Box>
        <Box
          as='text'
          x={'100%'}
          y={`${100 - mb}%`}
          textAnchor={'start'}
          dy={-15}
          dx={-100}
          alignmentBaseline={'baseline'}
          sx={{
            fill: 'secondary',
            fontFamily: 'mono',
            letterSpacing: 'mono',
            fontSize: [1, 1, 1, 2],
          }}
        >
          {legend1}
        </Box>
        <Box
          as='text'
          x={'100%'}
          y={`${100 - mb}%`}
          textAnchor={'start'}
          dy={-30}
          dx={-100}
          alignmentBaseline={'baseline'}
          sx={{
            fill: 'secondary',
            fontFamily: 'mono',
            letterSpacing: 'mono',
            fontSize: [1, 1, 1, 2],
          }}
        >
          {legend2}
        </Box>
      </Box>
    </Box>
  )
}

export default Scatter
