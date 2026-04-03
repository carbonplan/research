import { Minimap, Raster, useMinimap } from '@carbonplan/minimaps'
import { Box } from 'theme-ui'
import { useState, useMemo } from 'react'
import { Colorbar, Filter } from '@carbonplan/components'
import { useThemedColormap } from '@carbonplan/colormaps'
import { geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import statesData from './data/states.json'
import geoAlbers from './geoAlbers'

const states = feature(statesData, statesData.objects.states)

const StatePaths = () => {
  const { projection } = useMinimap()

  const statePaths = useMemo(() => {
    if (!projection) return null

    const path = geoPath(projection)

    return states.features.map((f, i) => (
      <Box
        as='path'
        key={`state-${i}`}
        d={path(f)}
        sx={{
          fill: 'none',
          stroke: 'secondary',
          strokeWidth: 1,
        }}
      />
    ))
  }, [projection])

  return <g>{statePaths}</g>
}

const VARIABLES = {
  current: 'rps_2011',
  future: 'rps_2047',
}
const CLIM = [0, 2.5]
const BOUNDS = {
  lat: [22.4897130033103, 52.30352043580055],
  lon: [-128.310557749823, -64.24783103538115],
}

const p = geoAlbers().fitSize([Math.PI * 2, Math.PI], states)
const translate = [
  p.translate()[0] / Math.PI - 1,
  (2 * p.translate()[1]) / Math.PI - 1,
]
const OverviewMap = () => {
  const [map, setMap] = useState('current')
  const colormap = useThemedColormap('reds')

  return (
    <Box sx={{ pb: [2, 2, 2, 3] }}>
      <Filter
        values={{
          current: map === 'current',
          future: map === 'future',
        }}
        labels={{
          current: 'Current climate',
          future: 'Future climate',
        }}
        setValues={(obj) => setMap(Object.keys(obj).find((k) => obj[k]))}
      />
      <Box
        sx={{
          display: 'block',
          width: '100%',
          position: 'relative',
          mt: 2,
        }}
      >
        <Minimap
          projection={geoAlbers}
          scale={8.7}
          translate={translate}
          aspect={0.7}
        >
          <StatePaths />
          <Raster
            clim={CLIM}
            mode='lut'
            nullValue={9.969209968386869e36}
            source='https://carbonplan-ocr.s3.amazonaws.com/output/fire-risk/tensor/web-figures/v1.1.0/store1.zarr'
            bounds={BOUNDS}
            variable={VARIABLES[map]}
            colormap={colormap}
            // frag={`
            // float rps = value.x;
            // if (rps == nullValue || rps < 0.01 ) {
            //   discard;
            //   return;
            // }

            // vec4 c;
            // float rescaled = (rps - clim.x)/(clim.y - clim.x);
            // c = texture2D(lut, vec2(rescaled, 1.0));
            // gl_FragColor = vec4(c.x, c.y, c.z, 1.0);
            // `}
          />
        </Minimap>
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            right: [0, -78, -78, -94],
            display: ['none', 'block'],
          }}
        >
          <Colorbar
            clim={CLIM}
            colormap={colormap}
            label='Risk of loss'
            units='%'
          />
        </Box>
      </Box>

      <Box sx={{ display: ['block', 'none'], width: 'fit-content' }}>
        <Colorbar
          horizontal
          clim={CLIM}
          colormap={colormap}
          height='12px'
          label='Risk of loss'
          units='%'
          sx={{
            '& div, & span': { fontSize: 0 },
          }}
          sxClim={{ fontSize: 0 }}
        />
      </Box>
    </Box>
  )
}

export default OverviewMap
