import React from 'react'
import { Table } from '@carbonplan/components'
import { Box } from 'theme-ui'

const NovelEffortsTable = ({ data, question }) => {
  const formattedData = data.map(([text, value]) => {
    const [title, ...rest] = text.split('.')
    const description = rest.join('.').trim()

    return [
      <Box key={`${text}-${value}`} sx={{ display: 'inline' }}>
        <Box as='span' sx={{ fontWeight: 'bold' }}>
          {title + '.'}
        </Box>{' '}
        <Box as='span' sx={{ color: 'primary' }}>
          {description}
        </Box>
      </Box>,
      value,
    ]
  })

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

export default NovelEffortsTable
