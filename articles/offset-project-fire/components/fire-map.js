import { Box, Text, Grid, Button, Slider, Divider } from 'theme-ui'
import { useState, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import style from './style'
import dates from './dates'
import Enhancers from './enhancers'

const FireMap = () => {
  const container = useRef(null)
  const [map, setMap] = useState(null)
  const [time, setTime] = useState(36)
  const [centerZoomIn, setCenterZoomIn] = useState([])
  const [centerZoomOut, setCenterZoomOut] = useState([])

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
    <Box
      sx={{
        mt: [5],
        mb: [5],
        position: 'relative',
        width: ['90%', '90%', '650px'],
      }}
    >
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
        <Text
          sx={{
            position: 'absolute',
            bottom: ['150px'],
            fontSize: [3],
            left: '4px',
            fontFamily: 'faux',
            letterSpacing: 'faux',
            color: 'primary',
            display: ['none', 'none', 'inherit'],
          }}
        >
          DAY {dates[time]}
        </Text>
      )}
      <Divider />
      <Grid
        gap={['0px']}
        columns={[
          '60px 30px 40px',
          '50px 1fr 60px 30px 40px',
          '50px 1fr 60px 30px 40px',
        ]}
      >
        <Text
          sx={{
            pl: [1],
            pt: [2],
            display: ['none', 'inherit', 'inherit'],
          }}
        >
          TIME
        </Text>
        <Slider
          value={time}
          onChange={(e) => setTime(parseInt(e.target.value))}
          min='0'
          max='36'
          sx={{
            display: ['none', 'inherit', 'inherit'],
            width: 'calc(100% - 75px)',
            ml: [1],
            mt: ['18px'],
            bg: 'secondary',
            color: 'red',
            '&:focus': {
              color: 'red',
            },
          }}
        />
        <Text
          sx={{
            pl: [1],
            pt: [2],
          }}
        >
          ZOOM
        </Text>
        <Box
          onClick={zoomOut}
          sx={{
            mt: ['-4px'],
            background: 'none',
            fontSize: [5],
            pl: [2],
            cursor: 'pointer',
            color: 'secondary',
            '&:hover': {
              color: 'primary',
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
            '&:hover': {
              color: 'primary',
            },
            transition: '0.2s',
          }}
        >
          +
        </Box>
      </Grid>
      <Divider sx={{ mt: [0] }} />
      <Text
        sx={{
          color: 'secondary',
          my: [3],
        }}
      >
        FIGURE 1{' '}
        <Text sx={{ display: 'inline-block', color: 'primary' }}>/</Text>{' '}
        Intersection between the Riverside / Beachie Creek / Lionshead fire and
        forest offset project ACR260.{' '}
        <Text sx={{ display: 'inline-block', color: 'red' }}>Red</Text> area
        shows cumulative area burned through the date selected on the slider.
      </Text>
    </Box>
  )
}

export default FireMap
