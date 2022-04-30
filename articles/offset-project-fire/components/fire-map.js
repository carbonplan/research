import { useThemeUI, Box, Text, Grid, Button, Divider } from 'theme-ui'
import { useState, useEffect, useRef } from 'react'
import { Slider } from '@carbonplan/components'
import mapboxgl from 'mapbox-gl'
import style from './utils/style'
import dates from './utils/dates'
import Enhancers from './utils/enhancers'

const FireMap = () => {
  const container = useRef(null)
  const [map, setMap] = useState(null)
  const [time, setTime] = useState(36)
  const [centerZoomIn, setCenterZoomIn] = useState([])
  const [centerZoomOut, setCenterZoomOut] = useState([])

  const {
    theme: { rawColors: colors },
  } = useThemeUI()

  const zoomOut = () => {
    map.flyTo({
      center: centerZoomOut,
      zoom: 7.1417,
      essential: true,
    })
  }

  const zoomIn = () => {
    map.flyTo({
      center: centerZoomIn,
      zoom: 9,
      essential: true,
    })
  }

  useEffect(() => {
    const filter = ['!=', 'NAME', 'Corvallis']

    let centerZoomOut = [-122.58549497082685, 45.12433103370327]
    let centerZoomIn = [-121.90406393004127, 44.751312650390256]

    if (window.matchMedia('(min-width: 640px)').matches) {
    } else {
      // different center on small screens
      centerZoomOut = [-121.58549497082685, 45.12433103370327]
      centerZoomIn = [-121.65406393004127, 44.751312650390256]
    }

    const map = new mapboxgl.Map({
      container: container.current,
      style: style,
      center: centerZoomOut,
      zoom: 7.1417,
      minZoom: 3,
      maxZoom: 9,
      maxBounds: [
        [-155, 5],
        [-45, 65],
      ],
    })

    setCenterZoomOut(centerZoomOut)
    setCenterZoomIn(centerZoomIn)

    map.scrollZoom.disable()
    map.dragPan.disable()
    map.dragRotate.disable()
    map.boxZoom.disable()
    map.doubleClickZoom.disable()

    map.on('load', () => {
      setMap(map)
      map.setFilter('places-text', filter)
      map.setFilter('places-points', filter)
    })

    return function cleanup() {
      setMap(null)
      map.remove()
    }
  }, [])

  return (
    <Box sx={{ position: 'relative' }}>
      <Divider />
      <Box
        ref={container}
        sx={{
          width: '100%',
          height: '400px',
          'canvas.mapboxgl-canvas:focus': {
            outline: 'none',
          },
          'canvas.mapboxgl-canvas': {
            cursor: 'default',
          },
        }}
      >
        {map && <Enhancers map={map} time={time} />}
      </Box>
      {map && (
        <Box
          sx={{
            position: 'absolute',
            bottom: ['78px'],
            fontSize: [3, 3, 3, 4],
            left: '4px',
            fontFamily: 'faux',
            letterSpacing: 'faux',
            color: 'primary',
          }}
        >
          DAY {dates[time]}
        </Box>
      )}
      <Divider sx={{ mt: ['18px'], mb: [1] }} />
      <Grid
        gap={['0px']}
        columns={[
          '50px 1fr 60px 30px 40px',
          '50px 1fr 60px 30px 40px',
          '50px 1fr 60px 30px 40px',
        ]}
      >
        <Box
          sx={{
            pl: [1],
            pt: [2],
            fontSize: [2, 2, 2, 3],
            fontFamily: 'heading',
            letterSpacing: 'smallcaps',
          }}
        >
          TIME
        </Box>
        <Slider
          value={time}
          onChange={(e) => setTime(parseInt(e.target.value))}
          min='0'
          max='36'
          sx={{
            width: [
              'calc(84%)',
              'calc(84%)',
              'calc(100% - 75px)',
              'calc(100% - 75px)',
            ],
            ml: [1],
            mt: ['18px'],
            bg: 'secondary',
            color: 'red',
          }}
        />
        <Box
          sx={{
            fontSize: [2, 2, 2, 3],
            fontFamily: 'heading',
            letterSpacing: 'smallcaps',
            pl: [1],
            pt: [2],
          }}
        >
          ZOOM
        </Box>
        <Box
          onClick={zoomOut}
          sx={{
            mt: ['-4px'],
            background: 'none',
            fontSize: [5],
            pl: [2],
            cursor: 'pointer',
            color: 'secondary',
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover': {
                color: 'primary',
              },
            },
            transition: '0.2s',
          }}
        >
          –
        </Box>
        <Box
          onClick={zoomIn}
          sx={{
            mt: ['-4px'],
            background: 'none',
            fontSize: [5],
            pl: [2],
            cursor: 'pointer',
            color: 'secondary',
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover': {
                color: 'primary',
              },
            },
            transition: '0.2s',
          }}
        >
          +
        </Box>
      </Grid>
      <Divider sx={{ mt: ['2px'] }} />
    </Box>
  )
}

export default FireMap
