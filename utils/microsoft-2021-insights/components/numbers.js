import { Box, Grid } from 'theme-ui'
import { format } from 'd3-format'
import Donut from './donut'
import Bar from './bar'

const sx = {
  label: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [2, 2, 2, 3],
    pt: [2, 2, 2, 3],
    mt: [1],
    pb: [0],
  },
  valueBig: {
    fontFamily: 'faux',
    letterSpacing: 'faux',
    textTransform: 'uppercase',
    color: 'secondary',
    fontSize: [5, 6, 6],
    mb: [0, 0, 0],
  },
  valueSmall: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    color: 'secondary',
    fontSize: [4, 4, 4, 5],
    mb: [1, 0, 0],
  },
  count: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    color: 'secondary',
    fontSize: [2, 2, 2, 3],
    mb: [2, 0, 0],
  },
  group: {
    borderStyle: 'solid',
    borderWidth: '0px',
    borderTopWidth: '1px',
    borderColor: 'muted',
  },
  bar: {
    width: ['100%'],
    mt: ['10px'],
    mb: ['10px', 0, 0],
  },
}

const Numbers = () => {
  return (
    <Box>
      <Grid
        sx={{ width: '100%', columnGap: [4, 5, 5, 6], rowGap: [1] }}
        columns={[3]}
      >
        <Box sx={{ ...sx.group }}>
          <Box sx={sx.label}>Volume</Box>
          <Box sx={sx.valueBig}>165M</Box>
          <Box sx={sx.count}>(n=189)</Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Box sx={sx.label}>Analyzed</Box>
          <Box sx={sx.valueBig}>154M</Box>
          <Box sx={sx.count}>(n=161)</Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Box sx={sx.label}>Excluded</Box>
          <Box sx={sx.valueBig}>11M</Box>
          <Box sx={sx.count}>(n=28)</Box>
        </Box>
      </Grid>
      <Grid
        sx={{
          mt: [1, 4, 4, 5],
          width: '100%',
          columnGap: [4, 5, 5, 6],
          rowGap: [1],
        }}
        columns={[2, 4, 4]}
      >
        <Box sx={{ ...sx.group }}>
          <Box sx={{ ...sx.label, pb: [1] }}>
            Unique
            <br />
            applicants
          </Box>
          <Box sx={sx.valueSmall}>72</Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Box sx={{ ...sx.label, pb: [1] }}>
            Protocols
            <br />
            represented
          </Box>
          <Box sx={sx.valueSmall}>45</Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Box sx={{ ...sx.label, pb: [1] }}>
            Registries
            <br />
            represented
          </Box>
          <Box sx={sx.valueSmall}>16</Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Box sx={{ ...sx.label, pb: [1] }}>
            Listed on
            <br />
            registry
          </Box>
          <Box sx={sx.valueSmall}>28%</Box>
        </Box>
      </Grid>
      <Grid
        sx={{
          mt: [1, 4, 4, 5],
          width: '100%',
          columnGap: [4, 5, 5, 6],
          rowGap: [1],
        }}
        columns={[3, 6, 6]}
      >
        <Box sx={{ ...sx.group }}>
          <Box sx={{ ...sx.label, pb: [1] }}>Forests</Box>
          <Box sx={{ ...sx.valueSmall, color: 'green' }}>58%</Box>
          <Box sx={sx.bar}>
            <Bar
              data={[0.594]}
              opacity={[0.2, 0.9]}
              color='green'
              ascending={true}
            />
          </Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Box sx={{ ...sx.label, pb: [1] }}>Biomass</Box>
          <Box sx={{ ...sx.valueSmall, color: 'yellow' }}>19%</Box>
          <Box sx={sx.bar}>
            <Bar data={[0.19]} opacity={[0.9, 0.2]} color='yellow' />
          </Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Box sx={{ ...sx.label, pb: [1] }}>Soils</Box>
          <Box sx={{ ...sx.valueSmall, color: 'orange' }}>9%</Box>
          <Box sx={sx.bar}>
            <Bar data={[0.094]} opacity={[0.9, 0.2]} color='orange' />
          </Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Box sx={{ ...sx.label, pb: [1] }}>Mineral</Box>
          <Box sx={{ ...sx.valueSmall, color: 'grey' }}>8%</Box>
          <Box sx={sx.bar}>
            <Bar data={[0.077]} opacity={[0.9, 0.2]} color='grey' />
          </Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Box sx={{ ...sx.label, pb: [1] }}>DAC</Box>
          <Box sx={{ ...sx.valueSmall, color: 'purple' }}>6%</Box>
          <Box sx={sx.bar}>
            <Bar data={[0.041]} opacity={[0.9, 0.2]} color='purple' />
          </Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Box sx={{ ...sx.label, pb: [1] }}>Ocean</Box>
          <Box sx={{ ...sx.valueSmall, color: 'teal' }}>{'<'}1%</Box>
          <Box sx={sx.bar}>
            <Bar data={[0.004]} opacity={[0.9, 0.2]} color='teal' />
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default Numbers
