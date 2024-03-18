import { Box, Flex } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import { useState } from 'react'

import Selector from './selector'
import ERWEstimates from './erw-estimates'

const OPTIONS = [
  { label: 'Soil', labelLong: 'entry to soil', value: 'soil' },
  {
    label: 'Shallow',
    labelLong: 'export to shallow soil (<50 cm)',
    value: 'export_shallow',
  },
  {
    label: 'Deep',
    labelLong: 'export to deep soil (>50 cm)',
    value: 'export_deep',
  },
  {
    label: 'River',
    labelLong: 'reaching the nearest stream or river',
    value: 'river',
  },
]

const TemporalBoundary = () => {
  const [boundary, setBoundary] = useState('export_deep')

  return (
    <Row columns={[6]}>
      <Column start={[1]} width={[6, 5, 5, 5]}>
        <Flex sx={{ gap: [3, 4], mb: 4 }}>
          <Box
            as='label'
            sx={{
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              textTransform: 'uppercase',
              fontSize: [2, 2, 2, 3],
              mt: [0],
              pb: [0],
              mb: 1,
              flexShrink: 0,
            }}
          >
            Removal threshold
          </Box>
          <Selector
            value={boundary}
            setValue={setBoundary}
            color='yellow'
            options={OPTIONS}
            sx={{ maxWidth: 200 }}
          />
        </Flex>
      </Column>
      <Column start={1} width={[6]} sx={{ position: 'relative' }}>
        <ERWEstimates
          columnFilters={{ count_group: boundary }}
          filterLabel={
            <>
              estimates counted removal upon{' '}
              <Box as='span' sx={{ color: 'yellow' }}>
                {OPTIONS.find((option) => option.value === boundary).labelLong}
              </Box>
            </>
          }
        />
      </Column>
    </Row>
  )
}

export default TemporalBoundary
