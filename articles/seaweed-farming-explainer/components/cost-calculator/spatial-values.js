import { useRef, useState } from 'react'
import { Box, Flex } from 'theme-ui'
import { Badge } from '@carbonplan/components'
import { formatValue } from './utils'
import Map from './map'

const MapDescription = ({ color, target, values }) => {
  const badgeSx = {
    color,
    transition: 'background-color 0.15s',
    '& > div': {
      transition: 'color 0.15s',
    },
  }

  return (
    <Box sx={{ fontFamily: 'faux', letterSpacing: 'faux' }}>
      At this location{' '}
      <Badge sx={badgeSx}>{formatValue(values.seaweed_dw)}</Badge> tons DW / km²
      of <Badge sx={badgeSx}>{values.species}</Badge> seaweed could be grown,
      requiring <Badge sx={badgeSx}>{values.nharv}</Badge> harvest
      {values.nharv > 1 ? 's' : ''} per year and use of the nearest port{' '}
      <Badge sx={badgeSx}>{formatValue(values.d2p)}</Badge> km away.{' '}
      {target === 'sinking' ? (
        <>
          With a depth of{' '}
          <Badge sx={badgeSx}>{formatValue(values.depth)}</Badge> m,{' '}
          {values.d2sink ? (
            <span>
              seaweed would need to be moved{' '}
              <Badge sx={badgeSx}>{formatValue(values.d2sink)}</Badge> km for
              sinking at a location where
            </span>
          ) : (
            'seaweed could be sunk on site where'
          )}{' '}
          <Badge sx={badgeSx}>
            {formatValue(values.fseq_transport * 100)}%
          </Badge>{' '}
          of carbon is sequestered for 100 years.
        </>
      ) : (
        <>
          With a depth of{' '}
          <Badge sx={badgeSx}>{formatValue(values.depth)}</Badge> m,{' '}
          {values.depth >= 500
            ? 'extra capital costs would increase.'
            : 'no extra capital costs would be incurred.'}
        </>
      )}
    </Box>
  )
}

const SpatialValues = ({ location, locations, setLocation, sx, target }) => {
  const [color, setColor] = useState(null)
  const timeoutID = useRef(null)

  const handleLocationChange = (i) => {
    setLocation(i)
    setColor('teal')
    if (timeoutID.current) {
      clearTimeout(timeoutID.current)
      timeoutID.current = null
    }
    timeoutID.current = setTimeout(() => setColor(null), 1000)
  }

  return (
    <Box>
      <Box sx={sx.heading}>Spatial values</Box>

      <Flex
        sx={{
          flexDirection: ['column', 'row-reverse', 'column', 'column'],
          gap: ['12px', 0, 4, 4],
        }}
      >
        <Map
          location={location}
          locations={locations}
          setLocation={handleLocationChange}
        />
        <MapDescription
          values={locations[location].values}
          target={target}
          color={color}
        />
      </Flex>
    </Box>
  )
}

export default SpatialValues
