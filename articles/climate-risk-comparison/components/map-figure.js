import { useEffect, useState } from 'react'
import { Box, useThemeUI } from 'theme-ui'
import { geoPath, geoAlbers } from 'd3-geo'
import { json } from 'd3-fetch'
import { feature } from 'topojson-client'

import useVariableColormap from './use-variable-colormap'
import useData from './use-data'
import locations from './locations.json'

const REGIONS = {
  ca: {
    name: 'California',
    strokeWidth: 1.5,
    sx: { width: '100%' },
    parallels: [34, 40.5],
    rotate: [120, 0],
  },
  nystate: {
    name: 'New York',
    strokeWidth: 1.5,
    sx: { width: '100%' },
    parallels: [40.5, 44.5],
    rotate: [74, 0],
  },
  nyc: {
    name: 'New York',
    strokeWidth: 1.3,
    sx: { width: ['100%', '110%'] },
    parallels: [40.5, 44.5],
    rotate: [74, 0],
  },
}

const MapFigure = ({ region, experiment, variable, provider }) => {
  const { theme } = useThemeUI()
  const [path, setPath] = useState(null)
  const [points, setPoints] = useState(null)
  const { [provider]: data } = useData({ region, experiment, variable })
  const colormap = useVariableColormap({ region, provider })

  useEffect(() => {
    if (['ca', 'nystate'].includes(region)) {
      json('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json').then(
        (us) => {
          const geo = feature(
            us,
            us.objects.states.geometries.find(
              (g) => g.properties.name === REGIONS[region].name
            )
          )

          const projection = geoAlbers()
            .parallels(REGIONS[region].parallels)
            .rotate(REGIONS[region].rotate)
            .fitSize([960, 700], geo)
          setPath(geoPath(projection)(geo))

          setPoints(
            Object.keys(locations[region]).reduce((accum, id) => {
              accum[id] = geoPath(projection)({
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: locations[region][id],
                },
              })

              return accum
            }, {})
          )
        }
      )
    } else {
      // nyc data from https://data.cityofnewyork.us/City-Government/Borough-Boundaries/tqmj-j8zm
      json(
        'https://carbonplan-maps.s3.us-west-2.amazonaws.com/basemaps/json/nyc.json'
      ).then((nyc) => {
        const geo = feature(nyc, nyc.objects.nyc)

        const projection = geoAlbers()
          .parallels(REGIONS[region].parallels)
          .rotate(REGIONS[region].rotate)
          .fitSize([960, 700], geo)
        setPath(geoPath(projection)(geo))

        setPoints(
          Object.keys(locations[region]).reduce((accum, id) => {
            accum[id] = geoPath(projection)({
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: locations[region][id],
              },
            })

            return accum
          }, {})
        )
      })
    }
  }, [region])

  const getColor = (id) => {
    const ratio = data[id] / 5

    const [r, g, b] = colormap[Math.round(ratio * (colormap.length - 1))]

    return `rgb(${r},${g},${b})`
  }

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      <Box as='svg' viewBox='0 0 960 700' sx={REGIONS[region].sx}>
        {path && (
          <path
            fill={theme.colors.background}
            stroke={theme.colors.primary}
            strokeWidth={REGIONS[region].strokeWidth}
            d={path}
          />
        )}
        {points &&
          Object.keys(points)
            .sort((a, b) => data[a] - data[b])
            .map((id) => <path key={id} fill={getColor(id)} d={points[id]} />)}
      </Box>
    </Box>
  )
}

export default MapFigure
