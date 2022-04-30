import { useThemeUI, Box, Grid, Text } from 'theme-ui'
import { format } from 'd3-format'
import Donut from './donut'
import Bar from './bar'

let sx = {
  label: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [2, 2, 2],
    pt: [2],
    mt: [1],
    pb: [0],
  },
  valueSmall: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    color: 'secondary',
    fontSize: [4],
    mb: [3, 0, 0],
  },
  group: {
    borderStyle: 'solid',
    borderWidth: '0px',
    borderTopWidth: '0px',
    borderColor: 'secondary',
  },
  bar: {
    width: ['100%'],
    display: ['none', 'inherit', 'inherit'],
    mt: ['10px'],
  },
  barMobile: {
    width: ['100%'],
    display: ['inherit', 'none', 'none'],
    mt: ['10px'],
  },
}

const data = {
  'Type 1': 0.0,
  'Type 2': 0.0,
  'Type 3': 0.3,
  'Type 4': 39.03,
  'Type 5': 0.11,
  'Type 2/4': 60.56,
}

const descriptions = {
  'Type 1': (
    <Box>
      Avoided emissions{' '}
      <Box as='br' sx={{ display: ['initial', 'none', 'none', 'none'] }} />
      without storage
    </Box>
  ),
  'Type 2': (
    <Box>
      Avoided emissions with
      <Box as='br' sx={{ display: ['initial', 'none', 'none', 'none'] }} />{' '}
      <Box sx={{ display: 'inline-block', color: 'text' }}>short</Box> storage
    </Box>
  ),
  'Type 3': (
    <Box>
      Avoided emissions with
      <Box as='br' sx={{ display: ['initial', 'none', 'none', 'none'] }} />{' '}
      <Box sx={{ display: 'inline-block', color: 'text' }}>long</Box> storage
    </Box>
  ),
  'Type 4': (
    <Box>
      Carbon removal{' '}
      <Box as='br' sx={{ display: ['none', 'none', 'none', 'initial'] }} /> with{' '}
      <Box as='br' sx={{ display: ['initial', 'none', 'none', 'none'] }} />{' '}
      <Box sx={{ display: 'inline-block', color: 'text' }}>short</Box> storage
    </Box>
  ),
  'Type 5': (
    <Box>
      Carbon removal{' '}
      <Box
        as='br'
        sx={{ display: ['none', 'initial', 'initial', 'initial'] }}
      />
      with
      <Box as='br' sx={{ display: ['initial', 'none', 'none', 'none'] }} />{' '}
      <Box sx={{ display: 'inline-block', color: 'text' }}>long</Box> storage
    </Box>
  ),
  'Type 2/4': (
    <Box>
      Cannot be confirmed{' '}
      <Box as='br' sx={{ display: ['initial', 'none', 'none', 'none'] }} />
      (e.g. IFM projects)
    </Box>
  ),
}

const types = ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5', 'Type 2/4']

const Oxford = () => {
  const { theme } = useThemeUI()

  sx = {
    ...sx,
    line: {
      strokeWidth: 1.5,
      strokeLinecap: 'round',
      fill: 'none',
      vectorEffect: 'non-scaling-stroke',
      stroke: theme.colors['secondary'],
    },
    lineDashed: {
      strokeWidth: 1.5,
      strokeLinecap: 'square',
      fill: 'none',
      vectorEffect: 'non-scaling-stroke',
      stroke: theme.colors['secondary'],
      strokeDasharray: '2,5',
    },
  }

  const arrowTop = () => {
    return (
      <g>
        <line x1={2} y1={198} x2={1} y2={190} style={sx.line} />
        <line x1={2} y1={198} x2={3} y2={190} style={sx.line} />
      </g>
    )
  }

  return (
    <Box>
      <Box
        sx={{
          display: ['none', 'inherit', 'inherit'],
          height: '200px',
          position: 'relative',
        }}
      >
        <svg
          width='100%'
          height='200'
          viewBox='0 0 100 200'
          preserveAspectRatio='none'
        >
          <line x1={2} x2={2} y1={80} y2={198} style={sx.line} />
          <line x1={19.8} x2={19.8} y1={80} y2={198} style={sx.line} />
          <line x1={19.8} x2={19.8} y1={95} y2={135} style={sx.line} />
          <line x1={19.8} x2={37.2} y1={160} y2={160} style={sx.line} />
          <line x1={37.2} x2={37.2} y1={160} y2={198} style={sx.line} />
          <line x1={54.5} x2={54.5} y1={80} y2={198} style={sx.line} />
          <line x1={54.5} x2={72.3} y1={160} y2={160} style={sx.line} />
          <line x1={54.5} x2={54.5} y1={80} y2={160} style={sx.line} />
          <line x1={72.3} x2={72.3} y1={160} y2={198} style={sx.line} />
          <line x1={54.5} x2={54.5} y1={95} y2={135} style={sx.line} />
          <g>{arrowTop()}</g>
          <g transform='translate(17.8,0)'>{arrowTop()}</g>
          <g transform='translate(35.2,0)'>{arrowTop()}</g>
          <g transform='translate(52.5,0)'>{arrowTop()}</g>
          <g transform='translate(70.3,0)'>{arrowTop()}</g>
        </svg>
        <Box
          sx={{
            position: 'absolute',
            bg: 'secondary',
            color: 'background',
            pt: [2],
            pb: '10px',
            textTransform: 'uppercase',
            fontSize: [3],
            top: 0,
            left: 0,
            width: '22%',
            textAlign: 'center',
          }}
        >
          Avoided
          <br />
          emissions
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bg: 'secondary',
            width: 'fit-content',
            color: 'background',
            pt: [2],
            pb: '10px',
            top: 0,
            left: '52.8%',
            width: '22%',
            textTransform: 'uppercase',
            fontSize: [3],
            textAlign: 'center',
          }}
        >
          Carbon
          <br />
          removal
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: 'fit-content',
            pt: [2],
            pb: '10px',
            my: [5],
            mb: [6],
            left: '16.8%',
            top: 47,
            width: '41%',
            textTransform: 'uppercase',
            fontSize: [3],
            textAlign: 'center',
            color: 'secondary',
            borderStyle: 'solid',
            borderWidth: '1.5px',
            borderColor: 'secondary',
            bg: 'background',
            zIndex: 1,
          }}
        >
          Includes storage
        </Box>
      </Box>
      <Grid
        sx={{ mt: [1], width: '100%', columnGap: [4, 5, 5, 6], rowGap: [1] }}
        columns={[2, 6, 6]}
      >
        {types.map((t, ti) => {
          return (
            <Box key={ti} sx={{ ...sx.group }}>
              <Box sx={{ ...sx.label, pb: [1], width: '100%' }}>{t}</Box>
              <Box sx={{ fontSize: [1], color: 'secondary' }}>
                {descriptions[t]}
              </Box>
              <Box sx={sx.bar}>
                <Bar
                  data={[data[t] / 100]}
                  opacity={[0.2, 0.9]}
                  color='secondary'
                  ascending={true}
                />
              </Box>
              <Box sx={sx.barMobile}>
                <Bar
                  data={[data[t] / 100]}
                  opacity={[0.2, 0.9]}
                  color='secondary'
                  ascending={true}
                />
              </Box>
              <Box sx={{ ...sx.valueSmall, color: 'secondary' }}>
                {data[t] > 0 && data[t] < 1 ? '<1' : data[t].toFixed(0)}%
              </Box>
            </Box>
          )
        })}
      </Grid>
      <Box sx={{ display: ['none', 'inherit', 'inherit'], height: '50px' }}>
        <svg
          width='100%'
          height='50'
          viewBox='0 0 100 50'
          preserveAspectRatio='none'
        >
          <line style={sx.lineDashed} x1={19.8} x2={19.8} y1={12} y2={48} />
          <line style={sx.lineDashed} x1={90} x2={90} y1={12} y2={48} />
          <line style={sx.lineDashed} x1={54.5} x2={54.5} y1={12} y2={48} />
          <line style={sx.lineDashed} x1={19.8} x2={90} y1={48} y2={48} />
          <polyline style={sx.line} points='89,20 90,12 91,20' />
        </svg>
      </Box>
    </Box>
  )
}

export default Oxford
