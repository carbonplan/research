import Question from './icons/question'
import Check from './icons/check'
import Ex from './icons/ex'
import Squares from './graphics/squares'
import data from '../data'
import { Box, Grid, Text, Link } from 'theme-ui'
import { useThemeUI } from 'theme-ui'

const Row = ({ children }) => {
  return <Grid columns={['85px 85px 85px 85px 95px 95px 20px']} sx={{
      borderStyle: 'solid',
      borderWidth: '0px',
      borderTopWidth: '1px',
      borderColor: 'muted',
      py: [0],
      height: '30px',
      mb: ['5px']
    }}>
    { children }
  </Grid>
}

const icons = (rating, color) => {
  if (rating == 1) return <Check color={color}/>
  if (rating == 0) return <Question color={color}/>
  if (rating == -1) return <Ex color={color}/>
}

const header = {
  textTransform: 'uppercase',
  fontFamily: 'heading',
  fontSize: [1],
  mt: [2]
}

const Table = () => {

  const context = useThemeUI()
  const theme = context.theme

  return <Box sx={{ 
    my: [5],
    borderStyle: 'solid',
    borderWidth: '0px',
    borderBottomWidth: '1px',
    borderColor: 'muted'
    }}>
    <Row>
      <Text sx={header}>Mechanism</Text>
      <Text sx={header}>Volume</Text>
      <Text sx={header}>Negativity</Text>
      <Text sx={header}>Permanence</Text>
      <Text sx={header}>Additionality</Text>
      <Text sx={header}>Transparency</Text>
      <Box></Box>
    </Row>
    {data.projects.sort((a, b) => {
      return a.tags[0].localeCompare(b.tags[0])
    }).map((project) => {
      const color = theme.colors[theme.tags[project.tags[0]]]
      return <Row key={project.id}>
        {icons(project.metrics.filter((k) => k.name == 'mechanism')[0].rating, color)}
        {icons(project.metrics.filter((k) => k.name == 'volume')[0].rating, color)}
        {icons(project.metrics.filter((k) => k.name == 'negativity')[0].rating, color)}
        {icons(project.metrics.filter((k) => k.name == 'permanence')[0].rating, color)}
        <Squares color={color} data={
          project.metrics.filter((k) => k.name == 'additionality')[0].value
        }/>
        <Squares color={color} data={
          project.metrics.filter((k) => k.name == 'transparency')[0].value
        }/>
        <Box sx={{ position: 'relative', top: '5px' }}>
          <Link variant='arrow'>↗</Link>
        </Box>
      </Row>
      }
    )}
  </Box>
}

export default Table