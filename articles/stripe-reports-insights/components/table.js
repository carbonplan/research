import Question from './icons/question'
import Check from './icons/check'
import Ex from './icons/ex'
import Squares from './graphics/squares'
import data from '../data'
import { Box, Grid, Text, Link } from 'theme-ui'
import { useThemeUI } from 'theme-ui'

const Row = ({ children }) => {
  return (
    <Grid
      columns={['85px 85px 85px 91px 99px 85px 20px']}
      sx={{
        borderStyle: 'solid',
        borderWidth: '0px',
        borderTopWidth: '1px',
        borderColor: 'muted',
        py: [0],
        height: '26px',
        mb: ['8px'],
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
  fontSize: [1],
  mt: [2],
}

const Table = () => {
  const context = useThemeUI()
  const theme = context.theme

  const Inline = ({ name, display }) => {
    return (
      <Text
        sx={{
          display: 'inline-block',
          color: theme.tags[name],
        }}
      >
        {display ? display : name}
      </Text>
    )
  }

  const order = ['forests', 'soil', 'biomass', 'dac', 'mineralization', 'ocean']

  return (
    <Box sx={{ display: ['none', 'inherit', 'inherit'] }}>
      <Box
        sx={{
          mt: [5],
          mb: [3],
          borderStyle: 'solid',
          borderWidth: '0px',
          borderBottomWidth: '1px',
          borderColor: 'muted',
        }}
      >
        <Row>
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
            const color = theme.colors[theme.tags[project.tags[0]]]
            const url = '/reports/?id=' + project.id + '&expand=true'
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
                <Box sx={{ mt: '-3px' }}>
                  <Squares
                    color={color}
                    data={
                      project.metrics.filter(
                        (k) => k.name == 'additionality'
                      )[0].value
                    }
                  />
                </Box>
                <Box sx={{ mt: '-3px' }}>
                  <Squares
                    color={color}
                    data={
                      project.metrics.filter((k) => k.name == 'specificity')[0]
                        .value
                    }
                  />
                </Box>
                <Box sx={{ position: 'relative', top: '3px' }}>
                  <Link
                    href={url}
                    variant='arrow'
                    sx={{
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
      <Text
        sx={{
          color: 'secondary',
          fontSize: [2],
          letterSpacing: 'faux',
          fontFamily: 'faux',
          mt: [3],
          mb: [5],
        }}
      >
        TABLE 1{' '}
        <Text
          sx={{
            display: 'inline-block',
            color: 'text',
          }}
        >
          /
        </Text>{' '}
        Each column is a metric, and each row shows our ratings for an
        individual project. Colors represent project categories:{' '}
        <Inline name='forests' />, <Inline name='soil' />,{' '}
        <Inline name='biomass' />,{' '}
        <Inline name='dac' display='direct air capture' />,{' '}
        <Inline name='mineralization' />, and <Inline name='ocean' />. Click the
        arrow in each row to see the report for that project.
      </Text>
    </Box>
  )
}

export default Table
