import { useState, useEffect } from 'react'
import { useThemeUI, Box } from 'theme-ui'
import { Tag, Row, Column } from '@carbonplan/components'
import { json } from 'd3-fetch'
import { scaleLinear } from 'd3-scale'
import { geoPath, geoAlbersUsa } from 'd3-geo'
import { feature } from 'topojson-client'

const projection = geoAlbersUsa().scale(1300).translate([487.5, 305])

const Legend = ({ value, label }) => {
  return (
    <Box>
      <Box
        as='span'
        sx={{
          borderRadius: '5px',
          width: '10px',
          height: '10px',
          bg: 'orange',
          display: 'inline-block',
          opacity: value,
        }}
      />
      <Box
        as='span'
        sx={{
          position: 'relative',
          top: '-1px',
          ml: [2],
          fontSize: [0, 0, 0, 1],
          fontFamily: 'mono',
          letterSpacing: 'mono',
          display: 'inline-block',
        }}
      >
        {label.toFixed(1)}
      </Box>
      <Box
        as='span'
        sx={{
          position: 'relative',
          top: '-1px',
          ml: [2],
          color: 'secondary',
          fontSize: [0, 0, 0, 1],
          fontFamily: 'mono',
          letterSpacing: 'mono',
          display: 'inline-block',
        }}
      >
        tCO2 / ha
      </Box>
    </Box>
  )
}

const scenarioToMax = {
  l: 1,
  m: 3,
  h: 5,
}

const Country = ({ map, selected, locations }) => {
  const { theme } = useThemeUI()
  const [path, setPath] = useState(null)
  const [data, setData] = useState(null)
  const [scenario, setScenario] = useState('m')
  const opacity = scaleLinear()
    .domain([0, scenarioToMax[scenario]])
    .range([0, 1])

  useEffect(() => {
    const prefix = 'https://storage.googleapis.com/carbonplan-data/'

    const url = prefix + 'raw/us-atlas/conus-albers-simplified.json'
    json(url).then((us) => {
      setPath(geoPath()(feature(us, us.objects.states)))
    })
  }, [])

  useEffect(() => {
    const prefix = 'https://storage.googleapis.com/carbonplan-data/'

    const url = prefix + 'articles/soil-depth-sampling/country.json'
    json(url).then((d) => {
      setData(d)
    })
  }, [])

  return (
    <Box sx={{ mb: [5, 5, 5, 6] }}>
      <Row columns={[6]}>
        <Column start={[1]} width={[3, 4, 4, 4]}>
          <Box
            sx={{
              fontFamily: 'heading',
              fontSize: [1, 2, 2, 3],
              letterSpacing: 'smallcaps',
              textTransform: 'uppercase',
              mb: [2],
            }}
          >
            Artifact magnitude
          </Box>
          <Tag
            sx={{ fontSize: [0, 1, 1, 2], mr: [2, 3, 3, 3] }}
            value={scenario === 'l'}
            onClick={() => setScenario('l')}
          >
            Low
          </Tag>
          <Tag
            sx={{ fontSize: [0, 1, 1, 2], mr: [2, 3, 3, 3] }}
            value={scenario === 'm'}
            onClick={() => setScenario('m')}
          >
            Medium
          </Tag>
          <Tag
            sx={{ fontSize: [0, 1, 1, 2], mr: [2, 3, 3, 3] }}
            value={scenario === 'h'}
            onClick={() => setScenario('h')}
          >
            High
          </Tag>
        </Column>
        <Column start={[4, 5, 5, 5]} width={[3, 2, 2, 2]} sx={{ mt: ['-3px'] }}>
          <Legend value={0.2} label={opacity.invert(0.2)} />
          <Legend value={0.5} label={opacity.invert(0.5)} />
          <Legend value={0.8} label={opacity.invert(0.8)} />
        </Column>
      </Row>
      <Box
        sx={{
          mt: [3, 3, 3, 4],
          position: 'relative',
          width: '100%',
        }}
      >
        <Box sx={{ fill: 'none', stroke: 'primary' }}>
          <svg viewBox='0 0 980 610'>
            <g strokeLinejoin='round' strokeLinecap='round' strokeWidth='0.5'>
              <path d={path}></path>
            </g>
            {data &&
              data.map((d, i) => {
                return (
                  <Box
                    key={i}
                    as='circle'
                    r='4'
                    fill={theme.colors.orange}
                    strokeWidth='0'
                    sx={{ transition: 'fill-opacity 0.15s' }}
                    transform={`translate(${projection(d.ll).join(',')})`}
                    fillOpacity={opacity(d[scenario])}
                  />
                )
              })}
          </svg>
        </Box>
      </Box>
    </Box>
  )
}

export default Country
