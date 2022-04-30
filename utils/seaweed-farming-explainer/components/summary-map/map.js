import { Minimap, Raster, Path, Sphere, Graticule } from '@carbonplan/minimaps'
import { naturalEarth1 } from '@carbonplan/minimaps/projections'
import { useThemedColormap } from '@carbonplan/colormaps'
import { Box, Flex, useThemeUI } from 'theme-ui'
import { Colorbar, Filter } from '@carbonplan/components'
import { useState } from 'react'

const VARIABLES = {
  feed: 'netcostpertonfeed',
  food: 'netcostpertonfood',
  fuel: 'netcostpertonfuel',
  sinking: 'netcostpertonsink',
}

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

const Map = () => {
  const { theme } = useThemeUI()
  const [map, setMap] = useState('sinking')
  const [clim, setClim] = useState([0, 3000])
  const colormap = useThemedColormap('cool').slice(20)

  return (
    <Box sx={{ pb: [2, 2, 2, 3] }}>
      <Flex sx={{ gap: 3 }}>
        <Box
          sx={{
            fontFamily: 'heading',
            letterSpacing: 'smallcaps',
            textTransform: 'uppercase',
            fontSize: [2, 2, 2, 3],
            mb: [3],
          }}
        >
          Application
        </Box>
        <Filter
          values={{
            sinking: map === 'sinking',
            food: map === 'food',
            feed: map === 'feed',
            fuel: map === 'fuel',
          }}
          setValues={(obj) => setMap(Object.keys(obj).find((k) => obj[k]))}
        />
      </Flex>
      <Box sx={{ display: 'block', width: '100%', position: 'relative' }}>
        <Minimap projection={getCustomProjection}>
          <Path
            stroke={theme.colors.primary}
            fill={theme.colors.background}
            source={'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json'}
            feature={'land'}
            opacity={1}
          />
          <Graticule stroke={theme.colors.primary} />
          <Sphere fill={theme.colors.background} />
          <Raster
            clim={clim}
            mode='lut'
            nullValue={9.969209968386869e36}
            source='https://storage.googleapis.com/carbonplan-macroalgae/data/processed/article/costs.zarr'
            variable={VARIABLES[map]}
            colormap={colormap}
          />
        </Minimap>
        <Box sx={{ position: 'absolute', right: 0 }}>
          <Colorbar
            colormap={colormap}
            horizontal
            clim={clim}
            setClim={setClim}
            setClimStep={10}
            label='Cost'
            units={map === 'sinking' ? '$ / tCO₂' : '$ / tCO₂e'}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Map
