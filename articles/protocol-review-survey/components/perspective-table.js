import React from 'react'
import { Table } from '@carbonplan/components'
import { Box } from 'theme-ui'

const PerspectiveTable = ({ data }) => {
  const { scopeData, outputData, scopeQuestion, outputQuestion } = data

  const formattedScopeData = scopeData.map(([text, subtext, value]) => [
    <Box key={`scope-${text}`} sx={{ color: 'primary' }}>
      {text}
      <Box sx={{ fontSize: [0, 0, 0, 1], color: 'secondary', mt: [2] }}>
        {subtext}
      </Box>
    </Box>,
    value,
  ])

  const formattedOutputData = outputData.map(([text, value]) => [
    <Box key={`output-${text}`} sx={{ color: 'primary' }}>
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
        {scopeQuestion}
      </Box>
      <Table
        columns={[6]}
        start={[[1], [6]]}
        width={[[5], [1]]}
        data={formattedScopeData}
        borderTop={true}
        borderBottom={true}
        index={false}
      />

      <Box
        sx={{
          mb: [4],
          mt: [6],
          fontSize: [2, 2, 2, 3],
          textTransform: 'uppercase',
          letterSpacing: 'smallcaps',
          fontFamily: 'heading',
          color: 'pink',
        }}
      >
        {outputQuestion}
      </Box>
      <Table
        columns={[6]}
        start={[[1], [6]]}
        width={[[5], [1]]}
        data={formattedOutputData}
        borderTop={true}
        borderBottom={true}
        index={false}
      />
    </>
  )
}

export default PerspectiveTable
