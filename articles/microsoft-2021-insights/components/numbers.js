import { Box, Grid, Text } from 'theme-ui'
import { format } from 'd3-format'
import Donut from './donut'
import Bar from './bar'

const sx = {
  label: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [2, 2, 2],
    pt: [2],
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
    fontSize: [4],
    mb: [1, 0, 0],
  },
  count: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    color: 'secondary',
    fontSize: [2],
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
    <Box sx={{ maxWidth: '100%', mt: [5], mb: [4] }}>
      <Grid
        sx={{ width: '100%', columnGap: ['5%'], rowGap: [1] }}
        columns={[3]}
      >
        <Box sx={{ ...sx.group }}>
          <Text sx={sx.label}>Volume</Text>
          <Text sx={sx.valueBig}>165M</Text>
          <Text sx={sx.count}>(n=189)</Text>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Text sx={sx.label}>Analyzed</Text>
          <Text sx={sx.valueBig}>154M</Text>
          <Text sx={sx.count}>(n=161)</Text>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Text sx={sx.label}>Excluded</Text>
          <Text sx={sx.valueBig}>11M</Text>
          <Text sx={sx.count}>(n=28)</Text>
        </Box>
      </Grid>
      <Grid
        sx={{ mt: [1, 4, 4], width: '100%', columnGap: ['5%'], rowGap: [1] }}
        columns={[2, 4, 4]}
      >
        <Box sx={{ ...sx.group }}>
          <Text sx={{ ...sx.label, pb: [1] }}>
            Unique
            <br />
            applicants
          </Text>
          <Text sx={sx.valueSmall}>72</Text>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Text sx={{ ...sx.label, pb: [1] }}>
            Protocols
            <br />
            represented
          </Text>
          <Text sx={sx.valueSmall}>45</Text>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Text sx={{ ...sx.label, pb: [1] }}>
            Registries
            <br />
            represented
          </Text>
          <Text sx={sx.valueSmall}>16</Text>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Text sx={{ ...sx.label, pb: [1] }}>
            Listed on
            <br />
            registry
          </Text>
          <Text sx={sx.valueSmall}>28%</Text>
        </Box>
      </Grid>
      <Grid
        sx={{
          mt: [1, '24px', '24px'],
          width: '100%',
          columnGap: ['5%'],
          rowGap: [1],
        }}
        columns={[3, 6, 6]}
      >
        <Box sx={{ ...sx.group }}>
          <Text sx={{ ...sx.label, pb: [1] }}>Forests</Text>
          <Text sx={{ ...sx.valueSmall, color: 'green' }}>58%</Text>
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
          <Text sx={{ ...sx.label, pb: [1] }}>Biomass</Text>
          <Text sx={{ ...sx.valueSmall, color: 'yellow' }}>19%</Text>
          <Box sx={sx.bar}>
            <Bar data={[0.19]} opacity={[0.9, 0.2]} color='yellow' />
          </Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Text sx={{ ...sx.label, pb: [1] }}>Soils</Text>
          <Text sx={{ ...sx.valueSmall, color: 'orange' }}>9%</Text>
          <Box sx={sx.bar}>
            <Bar data={[0.094]} opacity={[0.9, 0.2]} color='orange' />
          </Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Text sx={{ ...sx.label, pb: [1] }}>Mineral</Text>
          <Text sx={{ ...sx.valueSmall, color: 'grey' }}>8%</Text>
          <Box sx={sx.bar}>
            <Bar data={[0.077]} opacity={[0.9, 0.2]} color='grey' />
          </Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Text sx={{ ...sx.label, pb: [1] }}>DAC</Text>
          <Text sx={{ ...sx.valueSmall, color: 'purple' }}>6%</Text>
          <Box sx={sx.bar}>
            <Bar data={[0.041]} opacity={[0.9, 0.2]} color='purple' />
          </Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Text sx={{ ...sx.label, pb: [1] }}>Ocean</Text>
          <Text sx={{ ...sx.valueSmall, color: 'teal' }}>{'<'}1%</Text>
          <Box sx={sx.bar}>
            <Bar data={[0.004]} opacity={[0.9, 0.2]} color='teal' />
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default Numbers
