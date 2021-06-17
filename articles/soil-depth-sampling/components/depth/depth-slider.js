import { useState } from 'react'
import { useThemeUI, Box, Slider } from 'theme-ui'

const sx = {
  tick: {
    position: 'absolute',
    fontFamily: 'mono',
    letterSpacing: 'mono',
    fontSize: [0, 0, 0, 1],
    width: '100%',
    textAlign: 'center',
  },
}

const DepthSlider = ({
  depth,
  setDepth,
  sliderChanging,
  setSliderChanging,
}) => {
  const [tick, setTick] = useState(false)
  const {
    theme: { rawColors: colors },
  } = useThemeUI()

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
          ml: [
            'calc(0.08333 * 100vw - 14px)',
            'calc(0.06247 * 100vw - 18px)',
            'calc(0.04165 * 100vw - 18px)',
            'min(calc(0.04165 * 100vw - 24px), 54px)',
          ],
        }}
      >
        <Slider
          type='range'
          sx={{
            transform: 'rotate(270deg)',
            width: ['300px'],
            left: ['-150px'],
            top: ['140px'],
            position: 'relative',
            color: 'orange',
            '&::-webkit-slider-thumb': {
              height: [18, 18, 16],
              width: [18, 18, 16],
            },
            ':focus-visible': {
              color: 'orange',
              outline: 'none !important',
              background: `${colors.secondary} !important`,
            },
            ':focus': {
              '&::-webkit-slider-thumb': {
                color: 'orange',
                boxShadow: `0 0 0 4px ${colors.secondary}`,
              },
            },
          }}
          onChange={(e) => setDepth(parseFloat(e.target.value))}
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
          value={depth}
          min={0}
          max={100}
          step={1}
        ></Slider>
      </Box>
      <Box
        sx={{
          ...sx.tick,
          top: 0,
          mt: ['-24px'],
        }}
      >
        0
      </Box>
      <Box
        sx={{
          ...sx.tick,
          bottom: 0,
          mb: ['-24px'],
        }}
      >
        100
      </Box>
      <Box
        sx={{
          ...sx.tick,
          left: '-144%',
          top: 125,
          width: '300%',
          transform: 'rotate(-90deg)',
        }}
      >
        SAMPLING DEPTH
        <Box sx={{ display: 'inline-block', color: 'secondary', ml: [2] }}>
          cm
        </Box>
      </Box>
    </Box>
  )
}

export default DepthSlider
