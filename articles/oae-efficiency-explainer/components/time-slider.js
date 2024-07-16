import React, { useCallback, useState, useRef, useEffect } from 'react'
import { Slider, Button } from '@carbonplan/components'

import { Play, Pause } from './icons'

const TimeSlider = ({
  delay = 100,
  formatDate,
  time,
  setTime,
  min = 0,
  max,
  disabled,
  pause = 'min',
  autoPlay = false,
  setAutoPlay,
}) => {
  const [playing, setPlaying] = useState(false)
  const timeout = useRef(null)

  const handlePlay = useCallback(
    (willPlay) => {
      if (timeout.current) {
        clearTimeout(timeout.current)
        timeout.current = null
      }

      setPlaying(willPlay)
      if (willPlay) {
        const incrementTime = (alwaysIncrement = false) => {
          timeout.current = setTimeout(() => {
            setTime((prev) => {
              let nextValue = prev + 1
              if (pause === 'max' && nextValue === max && !alwaysIncrement) {
                setPlaying(false)
              } else if (nextValue > max) {
                nextValue = min
                if (pause === 'min' && !alwaysIncrement) {
                  setPlaying(false)
                } else {
                  incrementTime()
                }
              } else {
                incrementTime()
              }
              return nextValue
            })
          }, delay)
        }
        incrementTime(true)
      }
    },
    [min, max, pause, delay, setTime]
  )

  const handleSetTime = useCallback(
    (e) => {
      setTime(parseFloat(e.target.value))
      handlePlay(false)
    },
    [setTime, handlePlay]
  )

  useEffect(() => {
    if (autoPlay) {
      handlePlay(true)
      setAutoPlay(false)
    }
  }, [autoPlay, handlePlay, setAutoPlay])

  useEffect(() => {
    if (disabled) {
      setPlaying(false)
      clearTimeout(timeout.current)
      setAutoPlay && setAutoPlay(false)
    }
  }, [disabled, setAutoPlay])

  return (
    <>
      <Button
        size='xs'
        onClick={() => handlePlay(!playing)}
        prefix={
          playing ? <Pause sx={{ mr: '10px' }} /> : <Play sx={{ mr: '10px' }} />
        }
        sx={{
          fontFamily: 'mono',
          letterSpacing: 'mono',
          textTransform: 'uppercase',
          mb: 3,
          '&:disabled': {
            pointerEvents: 'none',
            color: 'secondary',
          },
        }}
        disabled={disabled}
      >
        {formatDate(time)}
      </Button>
      <Slider
        min={min}
        max={max}
        step={1}
        value={time}
        onChange={handleSetTime}
        sx={{ zIndex: 10 }}
        disabled={disabled}
      />
    </>
  )
}

export default TimeSlider
