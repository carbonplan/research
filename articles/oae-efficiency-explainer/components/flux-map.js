import React, { useCallback, useEffect, useState, useMemo, useRef } from 'react'
import { Minimap, Path, Sphere, Raster } from '@carbonplan/minimaps'
import { naturalEarth1 } from '@carbonplan/minimaps/projections'
import { useThemedColormap } from '@carbonplan/colormaps'
import { Colorbar, Column, Row, formatDate } from '@carbonplan/components'
import zarr from 'zarr-js'
import { Box, Flex, useThemeUI } from 'theme-ui'

import TimeSlider from './time-slider'

const SOURCE =
  'https://carbonplan-oae-efficiency.s3.us-west-2.amazonaws.com/fgco2-2021-180x360.zarr'
const VARIABLE = 'FG_CO2_2'

const CLIM = [-5, 5]
const MAX_CHUNK_KEY = 12
const FILL_VALUE = 9.969209968386869e36

const getCustomProjection = () => {
  return {
    ...naturalEarth1(),
    glsl: {
      func: `
      vec2 naturalEarth1Invert(float x, float y)
      {
        const float pi = 3.14159265358979323846264;
        const float halfPi = pi * 0.5;
        float phi = y;
        float delta;
        float phi2 = phi * phi;
        float phi4 = phi2 * phi2;
        for (int i = 0; i < 25; i++) {
          phi2 = phi * phi;
          phi4 = phi2 * phi2;
          delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) / (1.007226 + phi2 * (0.015085 * 3.0 + phi4 * (-0.044475 * 7.0 + 0.028874 * 9.0 * phi2 - 0.005916 * 11.0 * phi4)));
          phi = phi - delta;
          if (abs(delta) < 1e-6) {
            break;
          }
        }
        phi2 = phi * phi;
        float lambda = x / (0.8707 + phi2 * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2))));
        if (lambda <= -1.0 * pi + 1e-6 || lambda >= pi - 1e-6) {
          return vec2(-1000.0, -1000.0);
        } else {
          return vec2(degrees(lambda), degrees(phi));
        }
      }
    `,
      name: 'naturalEarth1Invert',
    },
  }
}

// const useCustomColormap = () => {
//   const fire = useThemedColormap('fire', { count: 127 })
//   const water = useThemedColormap('water', { count: 127 })

//   return useMemo(() => {
//     return [...[...fire].reverse(), ...water]
//   }, [fire, water])
// }

const FluxMap = () => {
  const { theme } = useThemeUI()
  const colormap = useThemedColormap('orangeblue')
  const flipped = useMemo(() => [...colormap].reverse(), [colormap])
  const [time, setTime] = useState(0)
  const [chunkCache, setChunkCache] = useState({})
  const fetchChunk = useRef(null)

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        zarr().openGroup(SOURCE, (err, { [VARIABLE]: variableLoader }) => {
          if (err) {
            console.error('Error opening group:', err)
            return
          }
          fetchChunk.current = (chunkKey) => {
            setChunkCache((prev) => ({ ...prev, [chunkKey]: 'loading' }))
            variableLoader([chunkKey, 0, 0], (err, chunk) => {
              if (err) {
                console.error('Error loading chunk:', err)
                return
              }
              setChunkCache((prev) => ({ ...prev, [chunkKey]: chunk }))
            })
          }

          fetchChunk.current(0)
        })
      } catch (error) {
        console.error('Error fetching group:', error)
      }
    }
    fetchGroup()
  }, [])

  useEffect(() => {
    if (!fetchChunk.current) {
      return
    }

    const chunkKey = Math.floor(time / 30)
    if (!chunkCache[chunkKey]) {
      fetchChunk.current(chunkKey)
    }
    const nextChunkKey = chunkKey + 1
    if (nextChunkKey <= MAX_CHUNK_KEY && !chunkCache[nextChunkKey]) {
      fetchChunk.current(nextChunkKey)
    }
  }, [chunkCache, time])

  const data = useMemo(() => {
    const chunkKey = Math.floor(time / 30)
    if (chunkCache[chunkKey] && chunkCache[chunkKey] !== 'loading') {
      const index = time % 30
      return chunkCache[chunkKey].pick(index, null, null)
    } else {
      return
    }
  }, [chunkCache, time])

  const formatter = useCallback((t) => {
    const date = new Date(2021, 0, 1 + t)
    return formatDate(
      `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`
    )
  }, [])

  return (
    <Row columns={[6]}>
      <Column start={1} width={[6, 3]}>
        <TimeSlider
          time={time}
          setTime={setTime}
          max={364}
          formatDate={formatter}
        />
      </Column>

      <Column start={1} width={6} sx={{ height: 'fit-content' }}>
        <Box sx={{ mx: [-3, -3, -3, -5] }}>
          <Minimap
            projection={getCustomProjection}
            scale={1}
            translate={[0, 0]}
          >
            <Path
              stroke={theme.colors.primary}
              source={
                'https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json'
              }
              feature={'land'}
              opacity={1}
              fill={theme.colors.background}
            />
            <Sphere
              stroke={theme.colors.primary}
              fill={theme.colors.background}
              strokeWidth={1}
            />
            {data && (
              <Raster
                source={data}
                colormap={flipped}
                clim={CLIM}
                mode={'lut'}
                nullValue={FILL_VALUE}
              />
            )}
          </Minimap>
        </Box>
        <Flex sx={{ justifyContent: 'flex-end' }}>
          <Colorbar
            colormap={flipped}
            clim={CLIM}
            format={(d) => (d < 0 ? d : `+${d}`)}
            label='Flux'
            units='mol / m² / year'
            horizontal
            sx={{ flexShrink: 0 }}
          />
        </Flex>
      </Column>
    </Row>
  )
}

export default FluxMap
