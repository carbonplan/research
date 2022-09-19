import { Badge, Table } from '@carbonplan/components'
import { Box } from 'theme-ui'

const UncertaintyDimensions = () => {
  return (
    <Table
      borderTop={false}
      index={false}
      columns={8}
      sx={{ mt: [-6, -5, 0, 0] }}
      start={[
        [1, 1, 1, 1],
        [1, 1, 3, 3],
        [6, 6, 7, 7],
      ]}
      width={[
        [8, 8, 2, 2],
        [5, 5, 4, 4],
        [3, 3, 2, 2],
      ]}
      data={[
        [
          <Box
            as='span'
            key='dimension'
            sx={{
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              display: ['none', 'none', 'initial', 'initial'],
            }}
          >
            DIMENSION
          </Box>,
          <Box
            as='span'
            key='definition'
            sx={{
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              display: ['none', 'none', 'initial', 'initial'],
            }}
          >
            DEFINITION
          </Box>,
          <Box
            as='span'
            key='values'
            sx={{
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              display: ['none', 'none', 'initial', 'initial'],
            }}
          >
            VALUES
          </Box>,
        ],
        [
          <Box
            as='span'
            key='impact'
            sx={{
              fontFamily: ['heading', 'heading', 'faux', 'faux'],
              letterSpacing: 'smallcaps',
              textTransform: ['uppercase', 'uppercase', 'unset', 'unset'],
              display: 'block',
              mb: [2, 3, 0, 0],
            }}
          >
            Impact
          </Box>,
          'The impact the uncertainty could have on the final estimate of net carbon removal or storage duration.',
          <>
            <Badge sx={{ mb: 1 }}>Negligible</Badge>{' '}
            <Badge sx={{ mb: 1 }}>Low</Badge>{' '}
            <Badge sx={{ mb: 1 }}>Medium</Badge>{' '}
            <Badge sx={{ mb: 1 }}>High</Badge>{' '}
            <Badge sx={{ mb: 1 }}>Very high</Badge>
          </>,
        ],
        [
          <Box
            as='span'
            key='type'
            sx={{
              fontFamily: ['heading', 'heading', 'faux', 'faux'],
              letterSpacing: 'smallcaps',
              textTransform: ['uppercase', 'uppercase', 'unset', 'unset'],
              display: 'block',
              mb: [2, 3, 0, 0],
            }}
          >
            Type
          </Box>,
          'The primary driver of uncertainty.',
          <>
            <Badge sx={{ mb: 1 }}>Execution</Badge>{' '}
            <Badge sx={{ mb: 1 }}>Scientific</Badge>{' '}
            <Badge sx={{ mb: 1 }}>Counterfactual</Badge>
          </>,
        ],
        [
          <Box
            as='span'
            key='responsibility'
            sx={{
              fontFamily: ['heading', 'heading', 'faux', 'faux'],
              letterSpacing: 'smallcaps',
              textTransform: ['uppercase', 'uppercase', 'unset', 'unset'],
              display: 'block',
              mb: [2, 3, 0, 0],
            }}
          >
            Responsibility
          </Box>,
          'Who should be primarily responsible for reducing the uncertainty.',
          <>
            <Badge sx={{ mb: 1 }}>Project</Badge>{' '}
            <Badge sx={{ mb: 1 }}>System</Badge>
          </>,
        ],
      ]}
    />
  )
}

export default UncertaintyDimensions
