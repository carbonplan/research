import { useState, useEffect } from 'react'
import { useThemeUI, Box, Text } from 'theme-ui'
import { json } from 'd3-fetch'
import { geoPath, geoAlbersUsa } from 'd3-geo'
import { feature } from 'topojson-client'

const projection = geoAlbersUsa().scale(1300).translate([487.5, 305])

const Minimap = ({ region, supersection }) => {
  const [conus, setConus] = useState(null)
  const { theme } = useThemeUI()

  useEffect(() => {
    const prefix =
      'https://storage.googleapis.com/carbonplan-data/raw/us-atlas/'
    const url = prefix + 'nation-albers-10m-simplified.json'
    json(url).then((us) => {
      setConus(geoPath()(feature(us, us.objects.nation)))
    })
  }, [])

  return (
    <Box>
      <svg width='100%' viewBox='0 0 960 700'>
        <path
          strokeLinejoin='round'
          strokeLinecap='round'
          fill='none'
          stroke={theme.colors.secondary}
          strokeWidth='0.5'
          style={{ vectorEffect: 'non-scaling-stroke' }}
          d={conus}
        />
        <path
          strokeLinejoin='round'
          strokeLinecap='round'
          fill={theme.colors.secondary}
          opacity='0.9'
          stroke='none'
          strokeWidth='1'
          d={geoPath(projection)(supersection)}
        />
      </svg>
      <Box
        sx={{
          fontFamily: 'mono',
          fontSize: [1, 1, 1, 2],
          letterSpacing: 'mono',
          color: 'secondary',
          textTransform: 'uppercase',
          maxWidth: ['150px', '150px', '150px', '200px'],
          display: ['none', 'block', 'block'],
        }}
      >
        {region.label}
      </Box>
    </Box>
  )
}

export default Minimap
