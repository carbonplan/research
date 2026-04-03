import { Box } from 'theme-ui'
import { useState, useEffect } from 'react'
import zarr from 'zarr-js'
import { Colorbar, Column, Row } from '@carbonplan/components'
import { useThemedColormap } from '@carbonplan/colormaps'
import Grid from './grid'

const SOURCE =
  'https://carbonplan-ocr.s3.us-west-2.amazonaws.com/output/fire-risk/tensor/web-figures/v1.1.0/methods-step04-gaussian-blur-30m-5070.zarr/burn_probability'

const CLIM = [0, 0.01]

const Blurring = () => {
  const [data, setData] = useState(null)
  const colormap = useThemedColormap('reds', { format: 'hex' })

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
      } catch (error) {
        console.error('Error fetching group:', error)
      }
    }
    loadArray()
  }, [])

  return (
    <Box>
      <Row columns={6}>
        <Column start={1} width={3}>
          <Box
            sx={{
              textAlign: 'center',
              fontFamily: 'mono',
              letterSpacing: 'mono',
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            Before
          </Box>

          <Grid
            clim={CLIM}
            colormap={colormap}
            data={data?.pick(0, null, null)}
          />
        </Column>
        <Column start={4} width={3}>
          <Box
            sx={{
              textAlign: 'center',
              fontFamily: 'mono',
              letterSpacing: 'mono',
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            After
          </Box>

          <Grid
            clim={CLIM}
            colormap={colormap}
            data={data?.pick(1, null, null)}
          />
        </Column>
      </Row>
      <Colorbar
        horizontal
        label='Burn probability'
        clim={CLIM}
        colormap={colormap}
        sx={{ mt: 3 }}
      />
    </Box>
  )
}

export default Blurring
