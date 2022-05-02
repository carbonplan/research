import { Box, Grid } from 'theme-ui'
import { format } from 'd3-format'
import Bar from './bar'
import { data } from './data'

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
    mb: [3, 0, 0],
  },
}

const projects = data.projects.filter((d) => d.source === 'STRP01')
const count = projects.length
const fractions = {}
const categories = [
  'mineralization',
  'forests',
  'soil',
  'ocean',
  'dac',
  'biomass',
]

categories.forEach((d) => {
  fractions[d] = projects.filter((p) => p.tags[0] === d).length / count
})

const Numbers = () => {
  return (
    <Box>
      <Grid
        sx={{ width: '100%', columnGap: [4, 5, 5, 6], rowGap: [1] }}
        columns={[3]}
      >
        <Box sx={{ ...sx.group }}>
          <Box sx={sx.label}>
            Proposals
            <br />
            Analyzed
          </Box>
          <Box sx={sx.valueBig}>23</Box>
          <Box sx={sx.count}>(of 26)</Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Box sx={sx.label}>
            Total
            <br />
            Volume
          </Box>
          <Box sx={sx.valueBig}>149k</Box>
          <Box sx={sx.count}>(tCO₂)</Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Box sx={sx.label}>
            Average
            <br />
            Volume
          </Box>
          <Box sx={sx.valueBig}>7.1k</Box>
          <Box sx={sx.count}>(tCO₂)</Box>
        </Box>
      </Grid>
      <Grid
        sx={{
          mt: [3, 5, 5, 5],
          width: '100%',
          columnGap: [4, 5, 5, 6],
          rowGap: [1],
        }}
        columns={[3, 6, 6]}
      >
        <Box sx={{ ...sx.group }}>
          <Box sx={{ ...sx.label, pb: [1] }}>Forests</Box>
          <Box sx={{ ...sx.valueSmall, color: 'green' }}>
            {format('.0%')(fractions['forests'])}
          </Box>
          <Box sx={sx.bar}>
            <Bar
              data={[fractions['forests']]}
              opacity={[0.2, 0.9]}
              color='green'
              ascending={true}
            />
          </Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Box sx={{ ...sx.label, pb: [1] }}>Biomass</Box>
          <Box sx={{ ...sx.valueSmall, color: 'yellow' }}>
            {format('.0%')(fractions['biomass'])}
          </Box>
          <Box sx={sx.bar}>
            <Bar
              data={[fractions['biomass']]}
              opacity={[0.9, 0.2]}
              color='yellow'
            />
          </Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Box sx={{ ...sx.label, pb: [1] }}>Soil</Box>
          <Box sx={{ ...sx.valueSmall, color: 'orange' }}>
            {format('.0%')(fractions['soil'])}
          </Box>
          <Box sx={sx.bar}>
            <Bar
              data={[fractions['soil']]}
              opacity={[0.9, 0.2]}
              color='orange'
            />
          </Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Box sx={{ ...sx.label, pb: [1] }}>Mineral</Box>
          <Box sx={{ ...sx.valueSmall, color: 'grey' }}>
            {format('.0%')(fractions['mineralization'])}
          </Box>
          <Box sx={sx.bar}>
            <Bar
              data={[fractions['mineralization']]}
              opacity={[0.9, 0.2]}
              color='grey'
            />
          </Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Box sx={{ ...sx.label, pb: [1] }}>DAC</Box>
          <Box sx={{ ...sx.valueSmall, color: 'purple' }}>
            {format('.0%')(fractions['dac'])}
          </Box>
          <Box sx={sx.bar}>
            <Bar
              data={[fractions['dac']]}
              opacity={[0.9, 0.2]}
              color='purple'
            />
          </Box>
        </Box>
        <Box sx={{ ...sx.group }}>
          <Box sx={{ ...sx.label, pb: [1] }}>Ocean</Box>
          <Box sx={{ ...sx.valueSmall, color: 'teal' }}>
            {format('.0%')(fractions['ocean'])}
          </Box>
          <Box sx={sx.bar}>
            <Bar
              data={[fractions['ocean']]}
              opacity={[0.9, 0.2]}
              color='teal'
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default Numbers
