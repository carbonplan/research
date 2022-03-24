import { useState, useEffect } from 'react'
import { useThemeUI, Box, Flex, Grid, Text } from 'theme-ui'
import { json } from 'd3-fetch'
import { geoPath, geoAlbersUsa } from 'd3-geo'
import { scaleLinear } from 'd3-scale'
import { Row, Column } from '@carbonplan/components'
import Minimap from './minimap'
import Info from './info'
import projects from '../../data/projects'

const region = {
  shortLabel: 'Southern Cascades',
  label: 'Southern Cascades Mixed Conifer',
  assessment: 297,
  supersection: 79,
  radius: 5.5,
}

const o = scaleLinear().domain([0, 0.5]).range([0, 1])

const SouthernCascades = () => {
  const { theme } = useThemeUI()
  const [conus, setConus] = useState(null)
  const [supersection, setSupersection] = useState(null)
  const [path, setPath] = useState(null)
  const [ecoSection1, setEcoSection1] = useState(null)
  const [ecoSection2, setEcoSection2] = useState(null)
  const [ecoSection3, setEcoSection3] = useState(null)
  const [centroids, setCentroids] = useState(null)
  const [selected, setSelected] = useState(null)
  const [highlighted, setHighlighted] = useState(null)

  const onMouseOver = (d) => {
    setHighlighted(d.id)
  }

  const onMouseOut = () => {
    setHighlighted(null)
  }

  const onClick = (e, d) => {
    e.stopPropagation()
    setSelected(d)
  }

  useEffect(() => {
    const prefix =
      'https://storage.googleapis.com/carbonplan-data/articles/forest-offsets-explainer/'

    json(prefix + '79.json').then((geo) => {
      setSupersection(geo)

      const projection = geoAlbersUsa()
        .scale(1300)
        .translate([487.5, 305])
        .fitSize([480, 960], geo)

      setPath(geoPath(projection)(geo))

      const centroids = projects
        .filter(
          (d) =>
            d.overcrediting && d.supersection_ids.includes(region.supersection)
        )
        .map((d) => {
          return {
            id: d.id,
            coordinates: projection(d.shape_centroid[0]),
            carbon: d.carbon,
            overcrediting: d.overcrediting,
            developers: d.developers,
            owners: d.owners,
            arbocs: d.arbocs,
          }
        })

      json(prefix + 'M261A.json').then((geo) => {
        setEcoSection1(geoPath(projection)(geo))
      })

      json(prefix + 'M261B.json').then((geo) => {
        setEcoSection2(geoPath(projection)(geo))
      })

      json(prefix + 'M261D.json').then((geo) => {
        setEcoSection3(geoPath(projection)(geo))
      })

      setCentroids(centroids)
      setSelected(centroids[7])
    })
  }, [])

  return (
    <Box sx={{ mb: [5, 5, 5, 6] }}>
      <Row columns={[6, 6]}>
        <Column start={[1, 1, 1, 1]} width={[4, 3, 3, 3]}>
          <Box>
            <svg
              width='100%'
              viewBox='0 0 480 960'
              onClick={() => setSelected(null)}
            >
              <g>
                <path
                  strokeLinejoin='round'
                  strokeLinecap='round'
                  fill={theme.colors.background}
                  strokeWidth='0.5'
                  stroke={theme.colors.secondary}
                  style={{ vectorEffect: 'non-scaling-stroke' }}
                  d={path}
                />
                <path
                  strokeLinejoin='round'
                  strokeLinecap='round'
                  fill={theme.colors.secondary}
                  strokeWidth='0.5'
                  fillOpacity='0.048'
                  stroke={theme.colors.secondary}
                  style={{ vectorEffect: 'non-scaling-stroke' }}
                  d={ecoSection1}
                />
                <path
                  strokeLinejoin='round'
                  strokeLinecap='round'
                  fill={theme.colors.green}
                  strokeWidth='0.5'
                  fillOpacity='0.98'
                  stroke={theme.colors.secondary}
                  style={{ vectorEffect: 'non-scaling-stroke' }}
                  d={ecoSection2}
                />
                <path
                  strokeLinejoin='round'
                  strokeLinecap='round'
                  fill={theme.colors.secondary}
                  strokeWidth='0.5'
                  fillOpacity='0.58'
                  stroke={theme.colors.secondary}
                  style={{ vectorEffect: 'non-scaling-stroke' }}
                  d={ecoSection3}
                />
              </g>
              <Box
                as='text'
                x='160'
                y='400'
                sx={{
                  fontSize: '24px',
                  fill: 'primary',
                  fontFamily: 'mono',
                }}
              >
                +1.6
              </Box>
              <Box
                as='text'
                x='65'
                y='800'
                sx={{
                  fontSize: '24px',
                  fill: 'background',
                  fontFamily: 'mono',
                }}
              >
                +31.5
              </Box>
              <Box
                as='text'
                x='320'
                y='620'
                sx={{
                  fontSize: '24px',
                  fill: 'background',
                  fontFamily: 'mono',
                }}
              >
                -18.5
              </Box>
              {centroids &&
                centroids.map((d, i) => {
                  return (
                    <g key={i}>
                      {selected && (
                        <Box
                          as='line'
                          x1={d.coordinates[0]}
                          y1={d.coordinates[1] + 2}
                          x2={480}
                          y2={960}
                          stroke={theme.colors.primary}
                          strokeWidth='1'
                          strokeOpacity={d.id == selected.id ? 1 : 0}
                          sx={{
                            vectorEffect: 'non-scaling-stroke',
                            pointerEvents: 'none',
                          }}
                        />
                      )}
                      <g
                        key={i}
                        transform={`translate(${d.coordinates.join(',')})`}
                      >
                        <polygon
                          points='-12,12 0,-12 12,12'
                          fill={theme.colors.primary}
                          stroke='none'
                          strokeWidth='5'
                          transform={`scale(${d.id == highlighted ? 1.25 : 1})`}
                        />
                        <rect
                          x='-20'
                          y='-20'
                          width='40'
                          height='40'
                          fill='transparent'
                          fillOpacity='0'
                          style={{ cursor: 'pointer' }}
                          onMouseEnter={() => onMouseOver(d)}
                          onMouseOut={onMouseOut}
                          onClick={(e) => onClick(e, d)}
                        />
                      </g>
                    </g>
                  )
                })}
            </svg>
          </Box>
        </Column>
        <Column start={[5, 4, 4, 4]} width={[2, 3, 3, 3]}>
          <Box sx={{ position: 'relative', height: '100%' }}>
            <Box sx={{ width: ['100%', '90%', '95%', '95%'] }}>
              <Minimap region={region} supersection={supersection} />
            </Box>
            <Box
              sx={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                opacity: selected ? 1 : 0,
                pointerEvents: selected ? 'all' : 'none',
                transition: 'opacity 0.15s',
              }}
            >
              {selected && <Info project={selected} />}
            </Box>
          </Box>
        </Column>
      </Row>
    </Box>
  )
}

export default SouthernCascades
