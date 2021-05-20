import { useState } from 'react'
import { useThemeUI, Box } from 'theme-ui'
import { format } from 'd3-format'
import { Column, Slider } from '@carbonplan/components'

const Layer = ({
  position,
  label,
  color,
  scenario,
  year,
  projection,
  path,
  data,
  domain,
  init,
  slider = true,
}) => {
  let start
  if (position === 'left') start = [1, 1]
  if (position === 'right') start = [4, 4]

  const {
    theme: { rawColors: colors },
  } = useThemeUI()
  const [threshold, setThreshold] = useState(init)
  const [sliderChanging, setSliderChanging] = useState(false)
  const [tick, setTick] = useState(false)

  return (
    <Column start={start} width={[3, 3]}>
      <Box
        sx={{
          fontSize: [2, 2, 2, 3],
          fontFamily: 'heading',
          textTransform: 'uppercase',
          letterSpacing: 'smallcaps',
          color: color,
          mt: [3],
          mb: [3, 0, 0, 0],
        }}
      >
        {label}
      </Box>
      {slider && (
        <Box>
          <Slider
            type='range'
            sx={{
              display: ['none', 'block', 'block', 'block'],
              transform: 'rotate(270deg)',
              width: ['75px', '100px', '100px'],
              ml: ['-36px', '-48px', '-48px'],
              position: 'relative',
              top: ['52px', '64px', '64px'],
              color: color,
            }}
            onChange={(e) => setThreshold(parseFloat(e.target.value))}
            onMouseUp={(e) => {
              setSliderChanging(false)
            }}
            onMouseDown={() => {
              setSliderChanging(true)
            }}
            onKeyDown={() => {
              if (tick) clearTimeout(tick)
              setSliderChanging(true)
              setTick(
                setTimeout(() => {
                  setSliderChanging(false)
                }, 250)
              )
            }}
            value={threshold}
            min={domain[0]}
            max={domain[1]}
            step={(domain[1] - domain[0]) / 20}
          />
          <Box
            sx={{
              display: ['none', 'initial', 'initial', 'initial'],
              fontFamily: 'mono',
              fontSize: [1, 1, 1, 2],
              letterSpacing: 'smallcaps',
              textTransform: 'uppercase',
              color: 'secondary',
              transition: '0.15s',
              opacity: sliderChanging ? 1 : 0,
              position: 'absolute',
              marginLeft: '-8px',
              marginTop: '110px',
              color: color,
              cursor: 'default',
              pointerEvents: 'none',
            }}
          >
            {format('02.0f')(threshold)}%
          </Box>
        </Box>
      )}
      <Box
        sx={{
          fill: 'none',
          stroke: 'primary',
          ml: [0, '22px', '22px', '22px'],
          mt: [
            0,
            slider ? '0px' : '20px',
            slider ? '0px' : '20px',
            slider ? '0px' : '20px',
          ],
        }}
      >
        <svg viewBox='0 0 980 610'>
          <g strokeLinejoin='round' strokeLinecap='round' strokeWidth='0.5'>
            <path d={path}></path>
          </g>
          {data &&
            data.map((d, i) => {
              return (
                <g
                  key={label + '-' + i}
                  transform={`translate(${projection(
                    d.geometry.coordinates
                  ).join(',')})`}
                >
                  <circle
                    r='9'
                    fill={colors[color]}
                    strokeWidth='0'
                    style={{ transition: '0.15s' }}
                    fillOpacity={
                      d.properties[`${scenario}_${year}`] > threshold ? 1 : 0
                    }
                  ></circle>
                </g>
              )
            })}
        </svg>
        {slider && (
          <Box sx={{ mb: [5] }}>
            <Slider
              type='range'
              sx={{
                display: ['block', 'none', 'none', 'none'],
                color: color,
              }}
              onChange={(e) => setThreshold(parseFloat(e.target.value))}
              onMouseUp={(e) => {
                setSliderChanging(false)
              }}
              onTouchEnd={(e) => {
                setSliderChanging(false)
              }}
              onMouseDown={() => {
                setSliderChanging(true)
              }}
              onTouchStart={() => {
                setSliderChanging(true)
              }}
              onKeyDown={() => {
                if (tick) clearTimeout(tick)
                setSliderChanging(true)
                setTick(
                  setTimeout(() => {
                    setSliderChanging(false)
                  }, 250)
                )
              }}
              value={threshold}
              min={domain[0]}
              max={domain[1]}
              step={(domain[1] - domain[0]) / 20}
            />
            <Box
              sx={{
                display: ['block', 'none', 'none', 'none'],
                fontFamily: 'mono',
                fontSize: [1, 1, 1, 2],
                letterSpacing: 'smallcaps',
                textTransform: 'uppercase',
                color: 'secondary',
                transition: '0.15s',
                opacity: sliderChanging ? 1 : 0,
                position: 'absolute',
                color: color,
                cursor: 'default',
                pointerEvents: 'none',
                height: [3],
                mt: [2],
              }}
            >
              {format('02.0f')(threshold)}%
            </Box>
          </Box>
        )}
      </Box>
    </Column>
  )
}

export default Layer
