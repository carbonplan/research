import Check from './icons/check'
import Ex from './icons/ex'
import Squares from './graphics/squares'
import data from '../data'
import { Box, Grid, Text, Link } from 'theme-ui'
import { useThemeUI } from 'theme-ui'

const Row = ({ children }) => {
  return <Grid columns={[1, '170px 1fr', '170px 1fr']} sx={{
      borderStyle: 'solid',
      borderWidth: '0px',
      borderTopWidth: '1px',
      borderColor: 'muted',
      pt: [3],
      pb: ['22px', 3, 3]
    }}>
    { children }
  </Grid>
}

const header = {
  textTransform: 'uppercase',
  letterSpacing: 'wide',
  fontFamily: 'heading',
  fontSize: [2],
  mt: ['3px']
}

const entry = {
  fontSize: [2],
  fontFamily: 'faux',
  letterSpacing: 'faux'
}

const Metrics = () => {

  return <Box sx={{ 
    my: [5],
    borderStyle: 'solid',
    borderWidth: '0px',
    borderBottomWidth: '1px',
    borderColor: 'muted'
    }}>
    <Row>
      <Text sx={header}>Mechanism</Text>
      <Text sx={entry}>
        Does the project directly remove CO2 from the atmosphere, 
        avoid CO2 emissions that would otherwise end up in the atmosphere, or both?
      </Text>
    </Row>
    <Row>
      <Text sx={header}>VOLUME</Text>
      <Text sx={entry}>
        How many tons of CO2 does the project claim to remove or avoid?
      </Text>
    </Row>
    <Row>
      <Text sx={header}>NEGATIVITY</Text>
      <Text sx={entry}>
        How emissions-intensive is the technology’s 
        process relative to the carbon removal potential? This relies on a life cycle analysis
        to quantify all project emissions.
      </Text>
    </Row>
    <Row>
      <Text sx={header}>PERMANENCE</Text>
      <Text sx={entry}>
        How long does the project claim carbon will be safely removed from the atmosphere? 
        Is that a question of physical material stability or socioeconomic choices?
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
        Would an investment cause new climate 
        benefits or take credit for benefits that may already be happening?
      </Text>
    </Row>
    <Row>
      <Text sx={header}>TRANSPARENCY</Text>
      <Text sx={entry}>
        Does the project provide sufficient 
        information to independently validate the rest of our metrics?
      </Text>
    </Row>
  </Box>
}

export default Metrics