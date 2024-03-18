import { Box, Flex } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import { useState } from 'react'

import Selector from './selector'
import ERWEstimates from './erw-estimates'

const OPTIONS = [
  { label: 'None', value: 'none' },
  { label: 'Upstream + local', value: 'upstream' },
  { label: 'Local only', value: 'local' },
  { label: 'Downstream + local', value: 'downstream' },
  { label: 'All', value: 'all' },
]

const SpatialBoundary = () => {
  const [boundary, setBoundary] = useState('local')

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
            Inefficiencies
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
      <Column start={1} width={[6]}>
        <ERWEstimates
          columnFilters={{ CDR_ineff_code_main: boundary }}
          filterLabel={
            <>
              estimates{' '}
              {boundary === 'none' ? 'did not consider ' : 'considered '}
              <Box as='span' sx={{ color: 'yellow' }}>
                {boundary === 'none'
                  ? 'inefficiencies'
                  : `${boundary} inefficiencies`}
              </Box>
            </>
          }
        />
      </Column>
    </Row>
  )
}

export default SpatialBoundary
