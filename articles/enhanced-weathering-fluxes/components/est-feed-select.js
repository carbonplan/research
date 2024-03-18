import React from 'react'
import { Box, Flex } from 'theme-ui'
import { Column } from '@carbonplan/components'

import Selector from './selector'
import data from './data'

const ALL_EST_TYPES = 'All'
const ALL_FEED_TYPES = 'All'

const estimateTypes = [
  ALL_EST_TYPES,
  ...new Set(
    data.map((item) => item.estimate_type).sort((a, b) => a.localeCompare(b))
  ),
]
const feedstockTypes = [
  ALL_FEED_TYPES,
  ...new Set(
    data
      .map((item) => item.feedstock_group)
      .filter((d) => d !== null && d !== '' && d !== 'carbonate')
      .sort((a, b) => {
        if (a === 'other') return 1
        if (b === 'other') return -1
        return a.localeCompare(b)
      })
  ),
]

const EstFeedSelect = ({
  estimateType,
  setEstimateType,
  feedstockType,
  setFeedstockType,
}) => {
  const estType = estimateType === null ? ALL_EST_TYPES : estimateType
  const feedType = feedstockType === null ? ALL_FEED_TYPES : feedstockType

  const handleChange = (value, setType, allTypesConst) => {
    if (value === allTypesConst) {
      setType(null)
    } else {
      setType(value)
    }
  }

  return (
    <>
      <Column start={1} width={[3, 2, 2, 2]}>
        <Flex sx={{ flexDirection: 'column', gap: 2 }}>
          <Box
            as='label'
            sx={{
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              textTransform: 'uppercase',
              fontSize: [2, 2, 2, 3],
            }}
          >
            Estimate type
          </Box>
          <Selector
            includeClear
            value={estType}
            setValue={(value) =>
              handleChange(value, setEstimateType, ALL_EST_TYPES)
            }
            options={estimateTypes}
            color='green'
            onReset={!estimateType ? null : () => setEstimateType(null)}
          />
        </Flex>
      </Column>
      <Column start={[4, 3, 3, 3]} width={[3, 2, 2, 2]}>
        <Flex sx={{ flexDirection: 'column', gap: 2 }}>
          <Box
            as='label'
            sx={{
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              textTransform: 'uppercase',
              fontSize: [2, 2, 2, 3],
            }}
          >
            Feedstock
          </Box>

          <Selector
            includeClear
            value={feedType}
            setValue={(value) =>
              handleChange(value, setFeedstockType, ALL_FEED_TYPES)
            }
            options={feedstockTypes}
            color='purple'
            onReset={!feedstockType ? null : () => setFeedstockType(null)}
          />
        </Flex>
      </Column>
    </>
  )
}

export default EstFeedSelect
