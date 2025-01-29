import React from 'react'
import { Table } from '@carbonplan/components'
import { Box } from 'theme-ui'

const OrganizationsTable = ({ data }) => {
  return (
    <Table
      columns={[6]}
      start={[[1], [1, 3, 3, 3]]}
      width={[
        [6, 2, 2, 2],
        [6, 4, 4, 4],
      ]}
      data={data.map(([title, content]) => [
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
        </Box>,
        content,
      ])}
      borderTop={true}
      borderBottom={true}
    />
  )
}

export default OrganizationsTable
