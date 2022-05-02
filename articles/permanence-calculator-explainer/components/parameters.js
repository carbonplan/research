import { Box } from 'theme-ui'
import { Figure, Table } from '@carbonplan/components'

const Top = ({ children }) => {
  return (
    <Box
      sx={{
        borderStyle: 'solid',
        borderWidth: '0px',
        borderTopWidth: '1px',
        borderColor: 'muted',
        pt: [3],
        pb: [3],
        mb: ['2px', 0, 0],
      }}
    >
      {children}
    </Box>
  )
}

const sx = {
  title: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    mt: [0],
    mb: [0, '2px', '2px'],
    fontSize: [2, 2, 2, 3],
  },
  units: {
    textTransform: 'initial',
    fontFamily: 'faux',
    letterSpacing: 'faux',
    fontSize: [2, 2, 2, 3],
    color: 'secondary',
  },
}

const table = [
  [
    <Box>
      Project duration<Box sx={sx.units}>years</Box>
    </Box>,
    'How long the temporary carbon removal lasts before needing a renewal.',
  ],
  [
    <Box>
      Switching time<Box sx={sx.units}>years</Box>
    </Box>,
    'The year in which the decision-maker switches from temporary to permanent carbon removal. (Optional.)',
  ],
  [
    <Box>
      Discount rate<Box sx={sx.units}>%</Box>
    </Box>,
    'Used to discount future year costs and generate a net present value calculation.',
  ],
  [
    <Box>
      Project risk<Box sx={sx.units}>%/year</Box>
    </Box>,
    'The risk that a project fails and releases its carbon back to the atmosphere.',
  ],
  [
    <Box>
      Temporary project cost<Box sx={sx.units}>$/tCO₂</Box>
    </Box>,
    'Project costs set as constant or based on a custom price trajectory.',
  ],
  [
    <Box>
      Permanent project cost<Box sx={sx.units}>$/tCO₂</Box>
    </Box>,
    'Project costs set as constant or based on a custom price trajectory.',
  ],
]

const Parameters = ({}) => {
  return (
    <Figure>
      <Table
        header='Parameters'
        columns={[6]}
        color='pink'
        start={[
          [1, 1, 1, 1],
          [1, 4, 4, 4],
        ]}
        width={[
          [6, 3, 3, 3],
          [6, 3, 3, 3],
        ]}
        data={table}
      />
    </Figure>
  )
}

export default Parameters
