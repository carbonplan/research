import { Box, Flex, useThemeUI } from 'theme-ui'
import { useState, useEffect, useCallback } from 'react'
import zarr from 'zarr-js'
import { alpha } from '@theme-ui/color'
import { Column, Row, Table } from '@carbonplan/components'
import { useThemedColormap } from '@carbonplan/colormaps'
import Grid from './grid'

const SOURCE =
  'https://carbonplan-ocr.s3.us-west-2.amazonaws.com/output/fire-risk/tensor/web-figures/v1.1.0/methods-step02-wind-distribution-30m-5070.zarr/wind_direction_distribution'
const RENDERED_SOURCE =
  'https://carbonplan-ocr.s3.us-west-2.amazonaws.com/output/fire-risk/tensor/web-figures/v1.1.0/methods-step03-spreading-iterations-30m-5070.zarr/burn_probability'

const CLIM = [0, 0.01]

const DIRECTIONS = [
  {
    label: 'N',
    offset: [0, -1],
    tip: [0, -4],
  },
  {
    label: 'NE',
    offset: [Math.SQRT1_2, -Math.SQRT1_2],
    tip: [4, -4],
  },
  {
    label: 'E',
    offset: [1, 0],
    tip: [4, 0],
  },
  {
    label: 'SE',
    offset: [Math.SQRT1_2, Math.SQRT1_2],
    tip: [4, 4],
  },
  {
    label: 'S',
    offset: [0, 1],
    tip: [0, 4],
  },
  {
    label: 'SW',
    offset: [-Math.SQRT1_2, Math.SQRT1_2],
    tip: [-4, 4],
  },
  {
    label: 'W',
    offset: [-1, 0],
    tip: [-4, 0],
  },
  {
    label: 'NW',
    offset: [-Math.SQRT1_2, -Math.SQRT1_2],
    tip: [-4, -4],
  },
]

const Directions = ({ fills, sx, ...props }) => {
  const { theme } = useThemeUI()

  return (
    <Box
      as='svg'
      width='32'
      viewBox='0 0 44 42'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      sx={{ flexShrink: 0, ...sx }}
      {...props}
    >
      <path
        d='M14.2454 14.7454C14.5215 14.7454 14.7454 14.5215 14.7454 14.2454L14.7454 9.74536C14.7454 9.46922 14.5215 9.24536 14.2454 9.24536C13.9692 9.24536 13.7454 9.46922 13.7454 9.74536L13.7454 13.7454L9.74536 13.7454C9.46922 13.7454 9.24536 13.9692 9.24536 14.2454C9.24536 14.5215 9.46922 14.7454 9.74536 14.7454L14.2454 14.7454ZM14.2454 14.2454L14.5989 13.8918L6.11363 5.40653L5.76008 5.76008L5.40653 6.11363L13.8918 14.5989L14.2454 14.2454Z'
        fill={fills['NW']}
      />
      <path
        d='M21.6464 12.3536C21.8417 12.5488 22.1583 12.5488 22.3536 12.3536L25.5355 9.17157C25.7308 8.97631 25.7308 8.65973 25.5355 8.46447C25.3403 8.2692 25.0237 8.2692 24.8284 8.46447L22 11.2929L19.1716 8.46447C18.9763 8.2692 18.6597 8.2692 18.4645 8.46447C18.2692 8.65973 18.2692 8.97631 18.4645 9.17157L21.6464 12.3536ZM22 12H22.5V0H22H21.5V12H22Z'
        fill={fills['N']}
      />
      <path
        d='M29.76 14.7454C29.4839 14.7454 29.26 14.5215 29.26 14.2454L29.26 9.74536C29.26 9.46922 29.4839 9.24536 29.76 9.24536C30.0362 9.24536 30.26 9.46922 30.26 9.74536L30.26 13.7454L34.26 13.7454C34.5362 13.7454 34.76 13.9692 34.76 14.2454C34.76 14.5215 34.5362 14.7454 34.26 14.7454L29.76 14.7454ZM29.76 14.2454L29.4065 13.8918L37.8917 5.40653L38.2453 5.76008L38.5988 6.11363L30.1136 14.5989L29.76 14.2454Z'
        fill={fills['NE']}
      />
      <path
        d='M15.8536 21.3536C16.0488 21.1583 16.0488 20.8417 15.8536 20.6464L12.6716 17.4645C12.4763 17.2692 12.1597 17.2692 11.9645 17.4645C11.7692 17.6597 11.7692 17.9763 11.9645 18.1716L14.7929 21L11.9645 23.8284C11.7692 24.0237 11.7692 24.3403 11.9645 24.5355C12.1597 24.7308 12.4763 24.7308 12.6716 24.5355L15.8536 21.3536ZM15.5 21V20.5H3.5V21V21.5H15.5V21Z'
        fill={fills['W']}
      />
      <rect
        x='19.5'
        y='18.5'
        width='5'
        height='5'
        fill={theme.rawColors.primary}
      />
      <path
        d='M28.1464 21.3536C27.9512 21.1583 27.9512 20.8417 28.1464 20.6464L31.3284 17.4645C31.5237 17.2692 31.8403 17.2692 32.0355 17.4645C32.2308 17.6597 32.2308 17.9763 32.0355 18.1716L29.2071 21L32.0355 23.8284C32.2308 24.0237 32.2308 24.3403 32.0355 24.5355C31.8403 24.7308 31.5237 24.7308 31.3284 24.5355L28.1464 21.3536ZM28.5 21V20.5H40.5V21V21.5H28.5V21Z'
        fill={fills['E']}
      />
      <path
        d='M14.2454 27.26C14.5215 27.26 14.7454 27.4839 14.7454 27.76L14.7454 32.26C14.7454 32.5362 14.5215 32.76 14.2454 32.76C13.9692 32.76 13.7454 32.5362 13.7454 32.26L13.7454 28.26L9.74536 28.26C9.46922 28.26 9.24536 28.0362 9.24536 27.76C9.24536 27.4839 9.46922 27.26 9.74536 27.26L14.2454 27.26ZM14.2454 27.76L14.5989 28.1136L6.11363 36.5988L5.76008 36.2453L5.40653 35.8917L13.8918 27.4065L14.2454 27.76Z'
        fill={fills['SW']}
      />
      <path
        d='M21.6464 29.6464C21.8417 29.4512 22.1583 29.4512 22.3536 29.6464L25.5355 32.8284C25.7308 33.0237 25.7308 33.3403 25.5355 33.5355C25.3403 33.7308 25.0237 33.7308 24.8284 33.5355L22 30.7071L19.1716 33.5355C18.9763 33.7308 18.6597 33.7308 18.4645 33.5355C18.2692 33.3403 18.2692 33.0237 18.4645 32.8284L21.6464 29.6464ZM22 30H22.5V42H22H21.5V30H22Z'
        fill={fills['S']}
      />
      <path
        d='M29.76 27.26C29.4839 27.26 29.26 27.4839 29.26 27.76L29.26 32.26C29.26 32.5362 29.4839 32.76 29.76 32.76C30.0362 32.76 30.26 32.5362 30.26 32.26L30.26 28.26L34.26 28.26C34.5362 28.26 34.76 28.0362 34.76 27.76C34.76 27.4839 34.5362 27.26 34.26 27.26L29.76 27.26ZM29.76 27.76L29.4065 28.1136L37.8917 36.5988L38.2453 36.2453L38.5988 35.8917L30.1136 27.4065L29.76 27.76Z'
        fill={fills['SE']}
      />
    </Box>
  )
}

const Direction = ({ direction, value }) => {
  const { theme } = useThemeUI()

  const active =
    typeof value === 'number'
      ? theme.rawColors.primary
      : theme.rawColors.secondary
  const inactive = theme.rawColors.muted
  return (
    <Directions
      fills={DIRECTIONS.reduce(
        (a, d) => ({
          ...a,
          [d.label]: d.label === direction ? active : inactive,
        }),
        {}
      )}
    />
  )
}

const Wind = () => {
  const [data, setData] = useState(null)
  const [renderedData, setRenderedData] = useState(null)
  const [active, setActive] = useState(null)
  const colormap = useThemedColormap('reds', { format: 'hex' })
  const { theme } = useThemeUI()

  useEffect(() => {
    const loadArray = async () => {
      try {
        zarr().load(SOURCE, (err, array) => {
          if (err) {
            console.error('Error opening array:', err)
            return
          }

          setData(array)
        })
        zarr().load(RENDERED_SOURCE, (err, array) => {
          if (err) {
            console.error('Error opening array:', err)
            return
          }

          setRenderedData(array.pick(0, null, null))
        })
      } catch (error) {
        console.error('Error fetching group:', error)
      }
    }
    loadArray()
  }, [])

  const handleMouseLeave = useCallback(() => {
    setActive(null)
  }, [])

  const handleCellSelect = useCallback((e) => {
    const col = e.target.getAttribute('x')
    const row = e.target.getAttribute('y')

    if (col && row && e.target.getAttribute('width') === '0.9') {
      setActive([Number(row), Number(col)])
    }
  }, [])

  return (
    <Box>
      <Row columns={6}>
        <Column
          start={1}
          width={3}
          sx={{ position: 'relative', mt: 5 }}
          onMouseLeave={handleMouseLeave}
        >
          <Grid
            clim={CLIM}
            colormap={colormap}
            data={renderedData}
            highlightCell={active}
            onMouseMove={handleCellSelect}
            onClick={handleCellSelect}
          >
            {active && data && (
              <Directions
                width='20'
                x={active[1] - 10}
                y={active[0] - 50}
                fills={DIRECTIONS.reduce(
                  (a, d, i) => ({
                    ...a,
                    [d.label]: alpha(
                      'primary',
                      data.get(active[0], active[1], i)
                    )(theme),
                  }),
                  {}
                )}
              />
            )}
          </Grid>
          {!active && (
            <Box
              sx={{
                position: 'absolute',
                top: '35%',
                left: '10%',
                width: '80%',
                textAlign: 'center',
                fontFamily: 'mono',
                letterSpacing: 'mono',
                textTransform: 'uppercase',
                fontSize: 0,
                color: 'secondary',
              }}
            >
              Hover or tap to view wind distribution
            </Box>
          )}
        </Column>
        <Column start={4} width={3}>
          <Table
            columns={2}
            start={[1, 2]}
            width={[1, 1]}
            borderTop={false}
            index={false}
            data={[
              ['Direction', 'Weight'],
              ...DIRECTIONS.map(({ label }, i) => [
                <Flex
                  key='label'
                  sx={{
                    gap: 2,
                    alignItems: 'center',
                    width: '40%',
                    justifyContent: 'space-between',
                  }}
                >
                  <Direction
                    direction={label}
                    value={active ? data?.get(active[0], active[1], i) : null}
                  />
                  {label}
                </Flex>,
                active ? (
                  data?.get(active[0], active[1], i).toFixed(3)
                ) : (
                  <Box sx={{ color: 'secondary' }}>-</Box>
                ),
              ]),
              [
                <Flex
                  key='sum'
                  sx={{
                    gap: 2,
                    alignItems: 'center',
                    width: '40%',
                    justifyContent: 'space-between',
                  }}
                >
                  <Directions fills={{}} sx={{ opacity: 0 }} />
                  <Box sx={{ color: 'secondary', textTransform: 'uppercase' }}>
                    Sum
                  </Box>
                </Flex>,
                <Box key='sum' sx={{ color: 'secondary' }}>
                  {active && data ? '1.000' : '-'}
                </Box>,
              ],
            ]}
            borderBottom={false}
            sx={{
              '& tr:first-of-type td': {
                fontFamily: 'mono',
                letterSpacing: 'mono',
                textTransform: 'uppercase',
              },
              '& tr': { py: 1, alignItems: 'center' },
            }}
          />
        </Column>
      </Row>
    </Box>
  )
}

export default Wind
