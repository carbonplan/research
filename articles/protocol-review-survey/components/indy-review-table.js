import React from 'react'
import { Table } from '@carbonplan/components'
import { Box } from 'theme-ui'

const IndyReviewTable = ({ data, question }) => {
  const formattedData = data.map(([text, value]) => [
    <Box key={`${text}-${value}`} sx={{ color: 'primary' }}>
      {text}
    </Box>,
    value,
  ])

  return (
    <>
      <Box
        sx={{
          mb: [4],
          fontSize: [2, 2, 2, 3],
          textTransform: 'uppercase',
          letterSpacing: 'smallcaps',
          fontFamily: 'heading',
          color: 'pink',
        }}
      >
        {question}
      </Box>
      <Table
        columns={[6]}
        start={[[1], [6]]}
        width={[[5], [1]]}
        data={formattedData}
        borderTop={true}
        borderBottom={true}
        index={false}
      />
    </>
  )
}

export default IndyReviewTable
