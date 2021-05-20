import { useState, useEffect } from 'react'
import { Box } from 'theme-ui'
import { json } from 'd3-fetch'
import { geoPath, geoAlbersUsa } from 'd3-geo'
import { feature } from 'topojson-client'
import { Row, Column, Tag } from '@carbonplan/components'
import Panel from './panel'

const scenarios = ['ssp2-4.5', 'ssp3-7.0', 'ssp5-8.5']
const regions = ['CONUS', 'California', 'PNW', 'Southwest', 'Southeast']
const displayRegions = {
  CONUS: 'United States',
  California: 'California',
  PNW: 'Pacific Northwest',
  Southwest: 'Southwest',
  Southeast: 'Southeast',
}

const RiskTrajectories = () => {
  const [scenario, setScenario] = useState(2)
  const [region, setRegion] = useState(0)
  const [path, setPath] = useState(0)
  const [data, setData] = useState(null)

  useEffect(() => {
    const prefix =
      'https://storage.googleapis.com/carbonplan-data/raw/us-atlas/'
    const url = prefix + 'nation-albers-10m-simplified.json'
    json(url).then((us) => {
      setPath(geoPath()(feature(us, us.objects.nation)))
    })
  }, [])

  useEffect(() => {
    const prefix = 'https://carbonplan.blob.core.windows.net/'
    const url =
      prefix + 'carbonplan-forests/risks/results/web/time-series-hybrid.json'
    json(url).then((d) => {
      setData(d)
    })
  }, [])

  return (
    <Box
      sx={{
        mt: [6, 6, 6, 7],
        mb: [6, 6, 6, 7],
      }}
    >
      <Row columns={[6]}>
        <Column start={[1]} width={[3]}>
          <Box
            sx={{
              fontFamily: 'heading',
              fontSize: [2, 2, 2, 3],
              letterSpacing: 'smallcaps',
              textTransform: 'uppercase',
              mb: [3],
            }}
          >
            Region
          </Box>
          <Box>
            {regions.map((d, i) => {
              return (
                <Tag
                  key={i}
                  sx={{
                    textAlign: 'left',
                    mr: [3],
                    mb: [2],
                    width: 'max-content',
                  }}
                  onClick={() => setRegion(i)}
                  value={region == i}
                >
                  {displayRegions[d]}
                </Tag>
              )
            })}
          </Box>
        </Column>
        <Column start={[4]} width={[3]}>
          <Box sx={{ px: [0, 4], width: '85%' }}>
            <Box
              as='svg'
              viewBox='0 0 980 610'
              sx={{
                maxWidth: ['100%', '100%', '100%', '75%'],
                fill: 'none',
                strokeWidth: '0.5',
                stroke: 'primary',
              }}
            >
              <g strokeLinejoin='round' strokeLinecap='round'>
                {path && <path d={path}></path>}
              </g>
            </Box>
          </Box>
        </Column>
      </Row>
      <Row columns={[6]} sx={{ mt: [3] }}>
        <Column start={[1]} width={[3]}>
          <Panel
            units='%'
            domain={[0, 40]}
            label='Fire'
            data={data && data.fire[regions[region]]}
          />
        </Column>
        <Column start={[4]} width={[3]}>
          <Panel
            units='%'
            domain={[15, 45]}
            label='Drought'
            yticks={[15, 25, 35, 45]}
            data={data && data.drought[regions[region]]}
          />
        </Column>
        <Column start={[1]} width={[3]} sx={{ mt: [4] }}>
          <Panel
            units='%'
            domain={[0, 30]}
            label='Insects'
            yticks={[0, 10, 20, 30]}
            data={data && data.insects[regions[region]]}
          />
        </Column>
        <Column start={[4]} width={[3]} sx={{ mt: [4] }}>
          <Panel
            units='º'
            domain={[-2, 6]}
            label='∆ Temperature'
            ylabel='Temp'
            yunits='º'
            data={data && data.tmean[regions[region]]}
          />
        </Column>
      </Row>
    </Box>
  )
}

export default RiskTrajectories
