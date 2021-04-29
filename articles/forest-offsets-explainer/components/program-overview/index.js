import { useThemeUI, Box, Grid, Text } from 'theme-ui'
import { format } from 'd3-format'
import { scaleLinear } from 'd3-scale'

import program from '../../data/program'

const sx = {
  bar: {
    height: ['24px', '24px', '24px', '29px'],
    display: 'inline-block',
  },
}

const Bar = ({ width, label, value, color }) => {
  return (
    <Box sx={{ mb: [3] }}>
      <Box
        sx={{
          ...sx.bar,
          width: `calc(${width} * 100% - 66px)`,
          position: 'relative',
          backgroundColor: color,
        }}
      >
        <Text
          sx={{
            display: 'inline-block',
            fontFamily: 'mono',
            letterSpacing: 'mono',
            textTransform: 'uppercase',
            color: 'background',
            fontSize: [1, 1, 1, 2],
            position: 'absolute',
            mt: ['2px', '3px', '3px', '3px'],
            ml: [2],
          }}
        >
          {label}
        </Text>
      </Box>
      <Text
        sx={{
          display: 'inline-block',
          fontFamily: 'mono',
          letterSpacing: 'mono',
          color: color,
          fontSize: [3, 4, 4, 4],
          position: 'absolute',
          mt: ['-2px', '-5px', '-5px', '-4px'],
          ml: [2],
        }}
      >
        {format('.3~s')(value)}
      </Text>
    </Box>
  )
}

const FilledBar = ({ width, label, value, color }) => {
  return (
    <Box sx={{ mb: [3] }}>
      <Box
        sx={{
          ...sx.bar,
          width: `calc(100% - 66px)`,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            ...sx.bar,
            width: '100%',
            position: 'absolute',
            backgroundColor: color,
            left: 0,
            opacity: 0.2,
          }}
        />
        <Box
          sx={{
            ...sx.bar,
            width: width * 100 + '%',
            position: 'absolute',
            backgroundColor: color,
            left: 0,
            opacity: 1,
          }}
        />
        <Text
          sx={{
            display: 'inline-block',
            fontFamily: 'mono',
            letterSpacing: 'mono',
            textTransform: 'uppercase',
            color: 'background',
            fontSize: [1],
            position: 'absolute',
            mt: ['3px'],
            ml: [2],
          }}
        >
          {label}
        </Text>
      </Box>
      <Text
        sx={{
          display: 'inline-block',
          fontFamily: 'mono',
          letterSpacing: 'mono',
          color: color,
          fontSize: [4],
          position: 'absolute',
          mt: ['-5px'],
          ml: [2],
        }}
      >
        {format('.2~p')(value)}
      </Text>
    </Box>
  )
}

const ProgramOverview = () => {
  const { theme } = useThemeUI()
  return (
    <Box sx={{ maxWidth: '600px', mt: [6, 6, 6, 7], mb: [4, 4, 4, 5] }}>
      <Box sx={{ width: '100%' }}>
        <Bar
          width={1}
          label={'All credits'}
          value={program.arbocs.total}
          color='secondary'
        />
        <Bar
          width={program.arbocs.forestProjects / program.arbocs.total}
          label={'Forest credits'}
          value={program.arbocs.forestProjects}
          color='secondary'
        />
        <Bar
          width={program.arbocs.ifmProjects / program.arbocs.total}
          label={'IFM credits'}
          value={program.arbocs.ifmProjects}
          color='secondary'
        />
        <Bar
          width={program.arbocs.upfrontProjects / program.arbocs.total}
          label={'Upfront credits'}
          value={program.arbocs.upfrontProjects}
          color='secondary'
        />
        <Bar
          width={program.overCrediting.analyzed / program.arbocs.total}
          label={'Analyzed credits'}
          value={program.overCrediting.analyzed}
          color='green'
        />
      </Box>
    </Box>
  )
}

export default ProgramOverview
