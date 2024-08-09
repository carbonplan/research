import { Column, Filter, Row } from '@carbonplan/components'
import { useState } from 'react'
import { Box, Flex } from 'theme-ui'

import SlopeGraph from './slope-graph'
import MapFigure from './map-figure'
const sx = {
  heading: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [2, 2, 2, 3],
    mb: 1,
  },
}

const RegionSummary = ({ region }) => {
  const [experiment, setExperiment] = useState('historical')
  const [nystateVar, setNystateVar] = useState('riverine')
  const [company, setCompany] = useState('xdi')

  const variableInfo = region === 'nystate' ? { variable: nystateVar } : {}

  return (
    <Row columns={6}>
      <Column start={1} width={6}>
        <Flex
          sx={{
            gap: [3, 5, 7, 7],
            mb: 4,
            flexWrap: 'wrap',
          }}
        >
          <Box>
            <Box sx={sx.heading}>Company</Box>
            <Filter
              values={{
                xdi: company === 'xdi',
                jupiter: company === 'jupiter',
              }}
              setValues={(obj) => setCompany(obj.xdi ? 'xdi' : 'jupiter')}
              sx={{ mr: -2 }}
            />
          </Box>

          <Box>
            <Box sx={sx.heading}>Time period</Box>
            <Filter
              values={{
                historical: experiment === 'historical',
                future: experiment === 'future',
              }}
              setValues={(obj) =>
                setExperiment(obj.historical ? 'historical' : 'future')
              }
            />
          </Box>

          {region === 'nystate' && (
            <Box>
              <Box sx={sx.heading}>Hazard</Box>
              <Filter
                values={{
                  riverine: nystateVar === 'riverine',
                  'surface water': nystateVar === 'surface',
                }}
                setValues={(obj) =>
                  setNystateVar(obj['surface water'] ? 'surface' : 'riverine')
                }
              />
            </Box>
          )}
        </Flex>
      </Column>
      <Column start={[1]} width={[6, 3]}>
        <MapFigure
          region={region}
          provider={company}
          experiment={experiment}
          {...variableInfo}
        />
      </Column>
      <Column start={[1, 4]} width={[6, 3]} sx={{ mt: [2, 0] }}>
        <SlopeGraph
          region={region}
          experiment={experiment}
          provider={company}
          {...variableInfo}
        />
      </Column>
    </Row>
  )
}

export default RegionSummary
