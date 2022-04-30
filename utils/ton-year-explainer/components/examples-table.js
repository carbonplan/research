import { Box } from 'theme-ui'
import { Table } from '@carbonplan/components'

const sx = {
  units: {
    textTransform: 'initial',
    fontFamily: 'faux',
    letterSpacing: 'faux',
    fontSize: [2, 2, 2, 3],
    color: 'secondary',
    ml: [2, 0, 0, 0],
    display: ['inline-block', 'block', 'block', 'block'],
  },
}

const table = [
  [
    'Source',
    <span>
      NCX
      <br />
      (2020)
    </span>,
    <span>
      NCX
      <br />
      (2021)
    </span>,
    <span>
      CAR
      <br />
      (2020)
    </span>,
    <span>
      Lashof
      <br />
      Example
    </span>,
  ],
  [
    <Box>
      Time horizon<Box sx={sx.units}>years</Box>
    </Box>,
    '100',
    '1000',
    '100',
    '100',
  ],
  [
    <Box>
      Storage period<Box sx={sx.units}>years</Box>
    </Box>,
    '1',
    '1',
    '1',
    '1',
  ],
  [
    <Box>
      Discount rate<Box sx={sx.units}>percent</Box>
    </Box>,
    '3.30%',
    '3.30%',
    '0%',
    '0%',
  ],
  [
    <Box>
      Equivalence ratio<Box sx={sx.units}>unitless</Box>
    </Box>,
    '17',
    '30.8',
    '100',
    '128',
  ],
]

const ExamplesTable = () => {
  return (
    <Table
      columns={[4, 6, 6, 6]}
      start={[
        [1, 1, 1, 1],
        [1, 3, 3, 3],
        [2, 4, 4, 4],
        [3, 5, 5, 5],
        [4, 6, 6, 6],
      ]}
      width={[
        [4, 2, 2, 2],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ]}
      data={table}
    />
  )
}

export default ExamplesTable
