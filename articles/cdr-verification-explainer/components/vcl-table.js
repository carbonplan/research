import React from 'react'
import { Table, Badge, Colors } from '@carbonplan/components'
import { Box } from 'theme-ui'

const { Secondary } = Colors

const List = ({ data }) => {
  if (!Array.isArray(data)) {
    return String(data)
  }

  return (
    <>
      (
      {data.map((d, i) => (
        <React.Fragment key={i}>
          {d}
          {i < data.length - 1 ? <Secondary>,&nbsp;</Secondary> : null}
        </React.Fragment>
      ))}
      )
    </>
  )
}

const Threshold = ({ values }) => {
  return (
    <Box sx={{ fontFamily: 'mono', letterSpacing: 'mono', fontSize: 1 }}>
      {values.map(([impact, comparator, value], i) => (
        <Box key={impact}>
          <Box>
            count<Secondary>(</Secondary>
            <Badge>{impact}</Badge>
            <Secondary>) {comparator}</Secondary> <List data={value} />
          </Box>
          {i !== values.length - 1 ? <Secondary>or</Secondary> : null}
        </Box>
      ))}
    </Box>
  )
}

const VCLTable = () => {
  return (
    <Table
      borderTop={false}
      index={false}
      columns={6}
      sx={{ mt: [-6, -5, 0, 0] }}
      start={[
        [1, 1, 1, 1],
        [1, 2, 2, 2],
        [5, 5, 5, 5],
      ]}
      width={[
        [6, 1, 1, 1],
        [4, 3, 3, 3],
        [2, 2, 2, 2],
      ]}
      data={[
        [
          <Box
            as='span'
            key='vcl'
            sx={{
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              display: ['none', 'none', 'initial', 'initial'],
            }}
          >
            VCL
          </Box>,
          <Box
            as='span'
            key='description'
            sx={{
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              display: ['none', 'none', 'initial', 'initial'],
            }}
          >
            DESCRIPTION
          </Box>,
          <Box
            as='span'
            key='threshold'
            sx={{
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              display: ['none', 'none', 'initial', 'initial'],
            }}
          >
            THRESHOLD
          </Box>,
        ],
        [
          '1',
          'Current quantification capacity is unlikely to establish permanent carbon removal with confidence.',
          <Threshold
            key='vcl-1-threshold'
            values={[
              ['Very high', '>', 0],
              ['High', '>', 2],
            ]}
          />,
        ],
        [
          '2',
          'Current quantification capacity may be able to establish permanent carbon removal occurred.',
          <Threshold
            key='vcl-2-threshold'
            values={[
              ['High', '>', 1],
              ['Medium', '>', 4],
            ]}
          />,
        ],
        [
          '3',
          'Current quantification capacity can establish permanent carbon removal occurred, but significant uncertainties remain.',
          <Threshold
            key='vcl-3-threshold'
            values={[
              ['High', '>', 0],
              ['Medium', '>', 2],
            ]}
          />,
        ],
        [
          '4',
          'Current quantification capacity can establish permanent carbon removal with confidence, and medium uncertainties remain.',
          <Threshold key='vcl-4-threshold' values={[['Medium', '>', 0]]} />,
        ],
        [
          '5',
          'Current quantification capacity can establish permanent carbon removal with confidence. Only small sources of uncertainty remain.',
          <Secondary
            key='vcl-5-threshold'
            sx={{
              fontFamily: 'mono',
              letterSpacing: 'mono',
              fontSize: 1,
            }}
          >
            all <Badge sx={{ mb: 1 }}>Low</Badge> or <Badge>Negligible</Badge>
          </Secondary>,
        ],
      ]}
    />
  )
}

export default VCLTable
