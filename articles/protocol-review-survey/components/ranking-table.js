import React from 'react'
import { Table } from '@carbonplan/components'
import { Box } from 'theme-ui'

const RankingTable = ({ data }) => {
  const formattedData = [
    ['', 'Highest', 'Lowest'],
    ...data.map(([title, description, topPriority, lowestPriority]) => [
      <>
        <Box
          key={title}
          sx={{
            fontSize: [2, 2, 2, 3],
            textTransform: 'uppercase',
            letterSpacing: 'smallcaps',
            fontFamily: 'heading',
            color: 'pink',
          }}
        >
          {title}
        </Box>
        <Box
          sx={{
            fontSize: [0, 0, 0, 1],
            color: 'secondary',
            mt: [2],
          }}
        >
          {description}
        </Box>
      </>,
      topPriority,
      lowestPriority,
    ]),
  ]

  return (
    <Table
      columns={[6]}
      start={[[1], [5], [6]]}
      width={[[4], [1], [1]]}
      data={formattedData}
      borderTop={false}
      borderBottom={true}
      index={false}
    />
  )
}

export default RankingTable
