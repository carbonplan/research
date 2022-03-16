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

const Map = () => {
  const { theme } = useThemeUI()
  const [map, setMap] = useState('sinking')
  const [clim, setClim] = useState([0, 3000])
  const colormap = useThemedColormap('cool').slice(20)

  return (
    <Box
      as='figure'
      sx={{ mt: [6, 6, 6, 7], pb: [2, 2, 2, 3], mb: [4, 4, 4, 5] }}
    >
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
        <Minimap projection={naturalEarth1}>
          <Path
            stroke={theme.colors.primary}
            source={'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json'}
            feature={'land'}
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
            units={map === 'sink' ? '$ / tCO₂' : '$ / tCO₂e'}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Map
