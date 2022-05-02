import Question from './icons/question'
import Check from './icons/check'
import Ex from './icons/ex'
import Squares from './graphics/squares'
import data from '../data'
import { Box, Grid, Text, Link } from 'theme-ui'
import { useThemeUI } from 'theme-ui'

const tags = {
  mineralization: 'grey',
  soil: 'orange',
  biomass: 'yellow',
  forests: 'green',
  ocean: 'teal',
  dac: 'purple',
}

const Row = ({ first = false, children }) => {
  return (
    <Grid
      columns={['15.63%  15.63% 15.63% 16.56% 17.80% 15.63% 3.10%']}
      gap={[0]}
      sx={{
        borderStyle: 'solid',
        borderWidth: '0px',
        borderTopWidth: first ? '0px' : '1px',
        borderColor: 'muted',
        py: [0],
        height: '26px',
        mb: ['8px'],
        width: ['100%'],
      }}
    >
      {children}
    </Grid>
  )
}

const icons = (rating, color) => {
  if (rating == 1)
    return (
      <Box sx={{ mt: ['-2px'] }}>
        <Check color={color} />
      </Box>
    )
  if (rating == 0) return <Box></Box>
  if (rating == -1)
    return (
      <Box sx={{ mt: ['-2px'] }}>
        <Ex color={color} />
      </Box>
    )
}

const header = {
  textTransform: 'uppercase',
  fontFamily: 'heading',
  letterSpacing: 'body',
  fontSize: [1],
  mt: [2],
  ml: [2, 2, 2],
  transform: ['rotate(-45deg)', 'rotate(-45deg)', 'rotate(-45deg)'],
  transformOrigin: 'left',
}

const Table = () => {
  const context = useThemeUI()
  const theme = context.theme

  const order = ['forests', 'soil', 'biomass', 'dac', 'mineralization', 'ocean']

  return (
    <Box sx={{ mt: [8, 8, 8, '112px'] }}>
      <Box
        sx={{
          mt: [7, 5, 5],
          mb: [3],
          borderStyle: 'solid',
          borderWidth: '0px',
          borderBottomWidth: '1px',
          borderColor: 'muted',
        }}
      >
        <Row first={true}>
          <Text sx={header}>Mechanism</Text>
          <Text sx={header}>Volume</Text>
          <Text sx={header}>Negativity</Text>
          <Text sx={header}>Permanence</Text>
          <Text sx={header}>Additionality</Text>
          <Text sx={header}>Specificity</Text>
          <Box></Box>
        </Row>
        {data.projects
          .sort((a, b) => {
            if (order.indexOf(a.tags[0]) < order.indexOf(b.tags[0])) {
              return -1
            } else if (order.indexOf(a.tags[0]) == order.indexOf(b.tags[0])) {
              return 0
            } else if (order.indexOf(a.tags[0]) > order.indexOf(b.tags[0])) {
              return 1
            }
          })
          .map((project) => {
            const color = theme.colors[tags[project.tags[0]]]
            const url = '/research/cdr-database/project?id=' + project.id
            return (
              <Row key={project.id}>
                {icons(
                  project.metrics.filter((k) => k.name == 'mechanism')[0]
                    .rating,
                  color
                )}
                {icons(
                  project.metrics.filter((k) => k.name == 'volume')[0].rating,
                  color
                )}
                {icons(
                  project.metrics.filter((k) => k.name == 'negativity')[0]
                    .rating,
                  color
                )}
                {icons(
                  project.metrics.filter((k) => k.name == 'permanence')[0]
                    .rating,
                  color
                )}
                <Box sx={{ ml: [1, 0, 0], mt: ['-3px', '-3px', '-3px'] }}>
                  <Box sx={{ display: ['initial', 'initial', 'initial'] }}>
                    <Squares
                      color={color}
                      data={
                        project.metrics.filter(
                          (k) => k.name == 'additionality'
                        )[0].value
                      }
                    />
                  </Box>
                  <Box
                    sx={{
                      fontFamily: 'mono',
                      display: ['none', 'none', 'none'],
                      color: color,
                    }}
                  >
                    {project.metrics.filter((k) => k.name == 'additionality')[0]
                      .value + 1}
                  </Box>
                </Box>
                <Box sx={{ ml: [1, 0, 0], mt: ['-3px', '-3px', '-3px'] }}>
                  <Box sx={{ display: ['initial', 'initial', 'initial'] }}>
                    <Squares
                      color={color}
                      data={
                        project.metrics.filter(
                          (k) => k.name == 'specificity'
                        )[0].value
                      }
                    />
                  </Box>
                  <Box
                    sx={{
                      fontFamily: 'mono',
                      display: ['none', 'none', 'none'],
                      color: color,
                    }}
                  >
                    {project.metrics.filter((k) => k.name == 'specificity')[0]
                      .value + 1}
                  </Box>
                </Box>
                <Box sx={{ position: 'relative', top: '5px' }}>
                  <Link
                    href={url}
                    sx={{
                      textDecoration: 'none',
                      color: 'secondary',
                      transition: '0.25s',
                      '&:hover': {
                        color: 'text',
                      },
                    }}
                  >
                    ↗
                  </Link>
                </Box>
              </Row>
            )
          })}
      </Box>
    </Box>
  )
}

export default Table
