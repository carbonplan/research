import { Box, Flex } from 'theme-ui'
import { Filter } from '@carbonplan/components'
import { useState, memo, useCallback } from 'react'
import { geoPath, geoAlbers } from 'd3-geo'
import { feature } from 'topojson-client'
import data from './data/county-stats.json'
import greatLakesData from './data/great-lakes.json'
import statesData from './data/states.json'

const greatLakes = feature(
  greatLakesData,
  greatLakesData.objects['great-lakes']
)
const states = feature(statesData, statesData.objects.states)

const geo = feature(data, data.objects.counties)
const proj = geoAlbers().fitSize([980, 700], geo)
const path = geoPath(proj)
const centroids = geo.features.map((f) => path.centroid(f) || [0, 0])

const SCORE_THRESHOLD = 8
const SPIKE_SCALE = 1 / 1000
const SPIKE_SCALE_PERCENTAGE = 1
const MIN_COUNT = 1000

const spike = (length) => `M-3,0L0,${-length}L3,0`

const getSpikeHeight = (countyIndex, variable, mode) => {
  const f = geo.features[countyIndex]
  const histKey =
    variable === 'current' ? 'risk_score_2011_hist' : 'risk_score_2047_hist'
  const hist = f.properties[histKey] || []
  const count = hist.slice(SCORE_THRESHOLD).reduce((sum, v) => sum + v, 0)
  const total = f.properties.building_count || 0

  if (count < MIN_COUNT) return 0
  return mode === 'percentage'
    ? (count / total) * 100 * SPIKE_SCALE_PERCENTAGE
    : count * SPIKE_SCALE
}

const spikeStyle = {
  fillOpacity: 0.1,
  strokeOpacity: 1,
  strokeWidth: 1,
  stroke: 'red',
  fill: 'red',
  transition: 'd 0.1s, opacity 0.1s',
}

const countiesWithSpikes = {
  current: new Set(),
  future: new Set(),
}
geo.features.forEach((f, i) => {
  const hist2011 = f.properties.risk_score_2011_hist || []
  const hist2047 = f.properties.risk_score_2047_hist || []
  const count2011 = hist2011
    .slice(SCORE_THRESHOLD)
    .reduce((sum, v) => sum + v, 0)
  const count2047 = hist2047
    .slice(SCORE_THRESHOLD)
    .reduce((sum, v) => sum + v, 0)
  if (count2011 >= MIN_COUNT) countiesWithSpikes.current.add(i)
  if (count2047 >= MIN_COUNT) countiesWithSpikes.future.add(i)
})

const CountyPaths = memo(function CountyPaths({ onSelect, onClear }) {
  return (
    <>
      {geo.features.map((f, i) => {
        return (
          <Box
            as='path'
            key={`county-${i}`}
            d={path(f)}
            onMouseEnter={() => onSelect(i)}
            onMouseLeave={onClear}
            onClick={() => onSelect(i)}
            sx={{
              fill: 'transparent',
              stroke: 'hinted',
              strokeWidth: 1,
              cursor: 'pointer',
            }}
          />
        )
      })}
    </>
  )
})

const HoveredCountyOverlay = ({ hoveredCounty }) => {
  if (hoveredCounty === null) return null
  const f = geo.features[hoveredCounty]
  return (
    <Box
      as='path'
      d={path(f)}
      sx={{
        fill: 'muted',
        stroke: 'hinted',
        strokeWidth: 1,
        pointerEvents: 'none',
      }}
    />
  )
}

const GreatLakesPaths = () => {
  return (
    <>
      {greatLakes.features.map((f, i) => (
        <Box
          as='path'
          key={`lake-${i}`}
          d={path(f)}
          sx={{
            fill: 'background',
            strokeWidth: 1,
          }}
        />
      ))}
    </>
  )
}

const StatePaths = () => {
  return (
    <>
      {states.features.map((f, i) => (
        <Box
          as='path'
          key={`state-${i}`}
          d={path(f)}
          sx={{
            fill: 'none',
            stroke: 'secondary',
            strokeWidth: 1,
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  )
}

const SpikeElements = memo(function SpikeElements({
  variable,
  mode,
  onSelect,
  onClear,
}) {
  return (
    <>
      {geo.features.map((f, i) => {
        const [cx, cy] = centroids[i]
        const height = getSpikeHeight(i, variable, mode)
        const handleHover = height ? () => onSelect(i) : undefined

        return (
          <Box
            as='path'
            key={`spike-${i}`}
            transform={`translate(${cx},${cy})`}
            d={spike(height)}
            opacity={height ? 1 : 0}
            onMouseEnter={handleHover}
            onMouseLeave={height ? onClear : undefined}
            onClick={handleHover}
            sx={{
              ...spikeStyle,
              cursor: height ? 'pointer' : 'default',
              pointerEvents: height ? 'auto' : 'none',
            }}
          />
        )
      })}
    </>
  )
})

const HoveredSpikeOverlay = ({ hoveredCounty, variable, mode }) => {
  if (hoveredCounty === null) return null

  const [cx, cy] = centroids[hoveredCounty]
  const height = getSpikeHeight(hoveredCounty, variable, mode)

  if (!height) return null

  return (
    <Box
      as='path'
      transform={`translate(${cx},${cy})`}
      d={spike(height)}
      sx={{
        ...spikeStyle,
        stroke: 'primary',
        fill: 'primary',
        pointerEvents: 'none',
        transition: 'none',
      }}
    />
  )
}

const Legend = ({ mode }) => {
  const legendData =
    mode === 'percentage'
      ? [
          { value: 100, label: '100%' },
          { value: 50, label: '50%' },
          { value: 1, label: '1%' },
        ]
      : [
          { value: 100000, label: '100k' },
          { value: 50000, label: '50k' },
          { value: 1000, label: '1k' },
        ]

  const baseX = 30
  const baseY = 560
  const spacing = 80

  return (
    <>
      {legendData.map((item, i) => {
        const height =
          mode === 'percentage'
            ? item.value * SPIKE_SCALE_PERCENTAGE
            : item.value * SPIKE_SCALE
        const x = baseX + i * spacing
        return (
          <g key={`legend-${i}`}>
            <Box
              as='path'
              transform={`translate(${x},${baseY})`}
              d={spike(height)}
              sx={spikeStyle}
            />
            <Box
              as='text'
              x={x}
              y={baseY + 30}
              sx={{
                fontFamily: 'mono',
                letterSpacing: 'mono',
                fontSize: 4,
                textAnchor: 'middle',
                fill: 'secondary',
              }}
            >
              {item.label}
            </Box>
          </g>
        )
      })}
    </>
  )
}

const CountyMap = () => {
  const [variable, setVariable] = useState('current')
  const [mode, setMode] = useState('count')
  const [hoveredCounty, setHoveredCounty] = useState(null)

  const handleSelect = useCallback((i) => {
    setHoveredCounty(i)
  }, [])

  const handleClear = useCallback(() => {
    setHoveredCounty(null)
  }, [])

  const hoveredFeature =
    hoveredCounty !== null ? geo.features[hoveredCounty] : null
  const hoveredName = hoveredFeature?.properties.NAME || ''
  const hoveredCount = hoveredFeature?.properties.building_count || 0
  const histKey =
    variable === 'current' ? 'risk_score_2011_hist' : 'risk_score_2047_hist'
  const hoveredHist = hoveredFeature?.properties[histKey] || []
  const hoveredSpikeCount = hoveredHist
    .slice(SCORE_THRESHOLD)
    .reduce((sum, v) => sum + v, 0)

  return (
    <Box sx={{ pb: [2, 2, 2, 3] }}>
      <Flex sx={{ justifyContent: 'space-between' }}>
        <Filter
          values={{
            current: variable === 'current',
            future: variable === 'future',
          }}
          labels={{
            current: 'Current climate',
            future: 'Future climate',
          }}
          setValues={(obj) => {
            const key = Object.keys(obj).find((k) => obj[k])
            setVariable(key || 'current')
          }}
        />
        <Filter
          values={{
            count: mode === 'count',
            percentage: mode === 'percentage',
          }}
          setValues={(obj) => {
            const key = Object.keys(obj).find((k) => obj[k])
            setMode(key || 'count')
          }}
          sx={{
            mr: -2,
            alignSelf: ['flex-end', 'flex-end', 'auto'],
            '> div': {
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
            },
          }}
        />
      </Flex>
      <Flex
        sx={{
          justifyContent: 'flex-end',
          fontFamily: 'mono',
          letterSpacing: 'mono',
          fontSize: [1, 1, 1, 2],
          textTransform: 'uppercase',
          color: 'secondary',
          minHeight: '3em',
          mt: [1, 1, 1, 2],
        }}
      >
        {hoveredCounty !== null ? (
          <Flex sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
            <Box sx={{ color: 'primary' }}>{hoveredName} County</Box>
            {mode === 'percentage' ? (
              <Box
                as='span'
                sx={{
                  color:
                    parseFloat(
                      ((hoveredSpikeCount / hoveredCount) * 100).toFixed(1)
                    ) > 0
                      ? 'red'
                      : 'secondary',
                }}
              >
                {((hoveredSpikeCount / hoveredCount) * 100).toFixed(1)}%
              </Box>
            ) : (
              <Flex sx={{ gap: 1 }}>
                <Box
                  as='span'
                  sx={{ color: hoveredSpikeCount > 0 ? 'red' : 'secondary' }}
                >
                  {hoveredSpikeCount.toLocaleString()}
                </Box>{' '}
                /{' '}
                <Box as='span' sx={{ color: 'secondary' }}>
                  {hoveredCount.toLocaleString()}
                </Box>
              </Flex>
            )}
          </Flex>
        ) : null}
      </Flex>
      <Box
        sx={{
          display: 'block',
          width: '100%',
          position: 'relative',
          mt: [-4, -5],
        }}
      >
        <Box as='svg' viewBox='0 0 980 700' onMouseLeave={handleClear}>
          <CountyPaths onSelect={handleSelect} onClear={handleClear} />
          <HoveredCountyOverlay hoveredCounty={hoveredCounty} />
          <GreatLakesPaths />
          <StatePaths />
          <SpikeElements
            variable={variable}
            mode={mode}
            onSelect={handleSelect}
            onClear={handleClear}
          />
          <HoveredSpikeOverlay
            hoveredCounty={hoveredCounty}
            variable={variable}
            mode={mode}
          />
          <g style={{ transform: 'translateZ(0)' }}>
            <Legend mode={mode} />
          </g>
          <g>
            <Box
              as='text'
              x={0}
              y={625}
              textAnchor='start'
              sx={{
                fontFamily: 'mono',
                letterSpacing: 'mono',
                textTransform: 'uppercase',
                fontSize: 4,
                fill: 'primary',
              }}
            >
              {mode === 'percentage'
                ? 'Percent of buildings'
                : 'Count of buildings'}
            </Box>
            <Box
              as='text'
              x={0}
              y={655}
              textAnchor='start'
              sx={{
                fontFamily: 'mono',
                letterSpacing: 'mono',
                textTransform: 'uppercase',
                fontSize: 4,
                fill: 'primary',
              }}
            >
              with risk score {SCORE_THRESHOLD}+
            </Box>
          </g>
        </Box>
      </Box>
    </Box>
  )
}

export default CountyMap
