import { useEffect, useState } from 'react'
import { Box } from 'theme-ui'
import { geoPath, geoNaturalEarth1 } from 'd3-geo'
import { feature } from 'topojson-client'

const width = 360
const height = 200

const projection = geoNaturalEarth1()
  .scale((1.1 * width) / (2 * Math.PI))
  .translate([width / 2, height / 2])

const Map = ({ location, locations, setLocation }) => {
  const [land, setLand] = useState(null)

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json')
      .then((response) => response.json())
      .then((topology) => {
        setLand(feature(topology, topology.objects.land))
      })
  }, [])

  return (
    <Box sx={{ width: ['75%', '100%', '100%', '100%'] }}>
      <Box as='svg' viewBox={`0 0 ${width} ${height - 10}`}>
        <defs>
          <Box
            as='path'
            id='outline'
            d={geoPath(projection)({ type: 'Sphere' })}
          />
          <clipPath id='clip'>
            <use href='#outline' />
          </clipPath>
        </defs>

        <g clipPath='url(#clip)'>
          <Box
            as='path'
            d={geoPath(projection)(land)}
            sx={{
              vectorEffects: 'non-scaling-stroke',
              stroke: 'primary',
              opacity: 0.7,
              fill: 'none',
              strokeWidth: '0.5px',
            }}
          />

          {locations.map(({ key, point }, i) => (
            <Box
              tabIndex={0}
              onClick={() => setLocation(i)}
              key={key}
              as='circle'
              cx={projection(point)[0]}
              cy={projection(point)[1]}
              r='10'
              sx={{
                r: [11.6, 10, 10, 10],
                fill: location === i ? 'teal' : 'secondary',
                transition: 'fill 0.2s',
                '&:hover': {
                  cursor: 'pointer',
                  fill: 'primary',
                },
                '&:focus': {
                  outline: 'none',
                  fill: 'teal',
                },
              }}
            />
          ))}
        </g>

        <Box
          as='use'
          href='#outline'
          sx={{
            vectorEffects: 'non-scaling-stroke',
            stroke: 'primary',
            opacity: 0.7,
            fill: 'none',
            strokeWidth: '0.5px',
          }}
        />
      </Box>
    </Box>
  )
}

export default Map
