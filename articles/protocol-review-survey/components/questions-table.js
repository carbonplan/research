import React from 'react'
import { Table } from '@carbonplan/components'
import { Box } from 'theme-ui'

const QuestionsTable = ({ data }) => {
  return (
    <Box sx={{ mt: [4] }}>
      <Table
        columns={[6]}
        start={[[1], [5], [6]]}
        width={[[4], [1], [1]]}
        data={[
          ['', 'Yes', 'No'],
          ...data.map(([question, yes, no]) => {
            const { main, subtext } =
              typeof question === 'object'
                ? question
                : { main: question, subtext: null }
            return [
              <Box key={main}>
                <Box
                  sx={{
                    fontSize: [2, 2, 2, 3],
                    textTransform: 'uppercase',
                    letterSpacing: 'smallcaps',
                    fontFamily: 'heading',
                    color: 'pink',
                  }}
                >
                  {main}
                </Box>
                {subtext && (
                  <Box
                    sx={{ mt: [2], fontSize: [0, 0, 0, 1], color: 'secondary' }}
                  >
                    {subtext}
                  </Box>
                )}
              </Box>,
              yes,
              no,
            ]
          }),
        ]}
        borderTop={false}
        borderBottom={true}
        index={false}
      />
    </Box>
  )
}

export default QuestionsTable
