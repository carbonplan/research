import { Divider } from 'theme-ui'
import { Figure, Row, Column } from '@carbonplan/components'
import Squares from './squares'
import { scoreDescriptions } from './score-descriptions'

const Entry = ({ start, id, label, value }) => {
  return (
    <Row columns={[6]} sx={{ mb: [5, 5, 5, 6] }}>
      <Column start={[1]} width={[2, 2, 1, 1]}>
        <Squares color='orange' value={value} />
      </Column>
      <Column
        start={[3, 3, 2, 2]}
        width={[4, 5, 5, 5]}
        sx={{
          fontFamily: 'faux',
          fontSize: [2, 2, 2, 3],
          letterSpacing: 'faux',
        }}
      >
        {scoreDescriptions[id][value]}
      </Column>
    </Row>
  )
}

const ScoreSummary = ({ id }) => {
  return (
    <Figure>
      <Divider sx={{ mb: [5, 5, 5, 6] }} />
      <Entry value={3} id={id} />
      <Entry value={2} id={id} />
      <Entry value={1} id={id} />
      <Divider sx={{ mt: [5, 5, 5, 6] }} />
    </Figure>
  )
}

export default ScoreSummary
