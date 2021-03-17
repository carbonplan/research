import Check from './icons/check'
import Ex from './icons/ex'
import Squares from './graphics/squares'
import data from '../data'
import { Box, Grid, Text, Link } from 'theme-ui'
import { useThemeUI } from 'theme-ui'

const Row = ({ children }) => {
  return (
    <Grid
      columns={[1, '170px 1fr', '170px 1fr']}
      gap={[1, '16px', '16px']}
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
    </Grid>
  )
}

const header = {
  textTransform: 'uppercase',
  letterSpacing: 'smallcaps',
  fontFamily: 'heading',
  fontSize: [2],
}

const entry = {
  fontSize: [2],
  fontFamily: 'faux',
  letterSpacing: 'faux',
  mb: [0, 0, '2px'],
}

const Metrics = () => {
  return (
    <Box
      sx={{
        my: [5],
        borderStyle: 'solid',
        borderWidth: '0px',
        borderBottomWidth: '1px',
        borderColor: 'muted',
      }}
    >
      <Row>
        <Text sx={header}>Mechanism</Text>
        <Text sx={entry}>
          Does the project directly remove CO₂ from the atmosphere, avoid CO₂
          emissions that would otherwise end up in the atmosphere, or both?
        </Text>
      </Row>
      <Row>
        <Text sx={header}>VOLUME</Text>
        <Text sx={entry}>
          How many tons of CO₂ does the project claim to remove or avoid?
        </Text>
      </Row>
      <Row>
        <Text sx={header}>NEGATIVITY</Text>
        <Text sx={entry}>
          Based on a life cycle analysis, how emissions-intensive is the
          project's process relative to its carbon removal potential?
        </Text>
      </Row>
      <Row>
        <Text sx={header}>PERMANENCE</Text>
        <Text sx={entry}>
          How long does the project claim carbon will be safely removed from the
          atmosphere? Is that a question of physical material stability or
          socioeconomic choices?
        </Text>
      </Row>
      <Row>
        <Text sx={header}>COST</Text>
        <Text sx={entry}>
          How much does the project want to charge its buyer?
        </Text>
      </Row>
      <Row>
        <Text sx={header}>ADDITIONALITY</Text>
        <Text sx={entry}>
          Would an investment cause new climate benefits or take credit for
          benefits that may already be happening?
        </Text>
      </Row>
      <Row>
        <Text sx={header}>SPECIFICITY</Text>
        <Text sx={entry}>
          Is there enough detail in project proposals, publications, or other
          materials to independently validate the rest of our metrics?
        </Text>
      </Row>
    </Box>
  )
}

export default Metrics
