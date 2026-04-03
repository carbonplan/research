import { Box } from 'theme-ui'
import { useState, useEffect } from 'react'
import zarr from 'zarr-js'
import { Colorbar, Column, Filter, Row } from '@carbonplan/components'
import { useThemedColormap } from '@carbonplan/colormaps'
import Grid from './grid'

const SOURCE =
  'https://carbonplan-ocr.s3.us-west-2.amazonaws.com/output/fire-risk/tensor/web-figures/v1.1.0/methods-step03-spreading-iterations-30m-5070.zarr/burn_probability'
const FINAL_SOURCE =
  'https://carbonplan-ocr.s3.us-west-2.amazonaws.com/output/fire-risk/tensor/web-figures/v1.1.0/methods-step04-gaussian-blur-30m-5070.zarr/burn_probability'

const CLIM = [0, 0.01]

const Spreading = () => {
  const [step, setStep] = useState(0)
  const [data, setData] = useState(null)
  const [finalData, setFinalData] = useState(null)
  const colormap = useThemedColormap('reds', { format: 'hex' })

  useEffect(() => {
    const loadArrays = async () => {
      try {
        zarr().load(SOURCE, (err, array) => {
          if (err) {
            console.error('Error opening array:', err)
            return
          }

          setData(array)
        })
        zarr().load(FINAL_SOURCE, (err, array) => {
          if (err) {
            console.error('Error opening array:', err)
            return
          }

          setFinalData(array.pick(0, null, null))
        })
      } catch (error) {
        console.error('Error fetching group:', error)
      }
    }
    loadArrays()
  }, [])

  return (
    <Box>
      <Row columns={6}>
        <Column start={1} width={3}>
          <Grid
            clim={CLIM}
            colormap={colormap}
            data={step === 'final' ? finalData : data?.pick(step, null, null)}
          />
        </Column>
        <Column start={4} width={3}>
          <Box
            sx={{
              fontFamily: 'mono',
              letterSpacing: 'mono',
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            Step
          </Box>
          <Filter
            values={{
              '00': step === 0,
              '01': step === 1,
              '02': step === 2,
              '03': step === 3,
              final: step === 'final',
            }}
            labels={{
              '00': '00',
              '01': '01',
              '02': '02',
              '03': '03',
              final: '04',
            }}
            setValues={(obj) =>
              setStep(
                obj.final
                  ? 'final'
                  : Number(Object.keys(obj).find((k) => obj[k]))
              )
            }
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

export default Spreading
