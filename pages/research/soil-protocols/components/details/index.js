import { Box } from 'theme-ui'
import { Row, Column, FadeIn } from '@carbonplan/components'
import { XCircle } from '@carbonplan/icons'
import Ex from '../icons/ex'
import Protocol from './protocol'
import Safeguards from './safeguards'
import Rigor from './rigor'
import Additionality from './additionality'
import Durability from './durability'
import Practices from './practices'
import Definition from './definition'

const componentMap = {
  protocol: Protocol,
  practices: Practices,
  safeguards: Safeguards,
  rigor: Rigor,
  additionality: Additionality,
  durability: Durability,
  definition: Definition,
}

const Details = ({ field, data, label, color = 'secondary', close }) => {
  const Component = componentMap[field]
  return (
    <Box sx={{ position: 'relative', mb: [4, 0, 0, 0] }}>
      <XCircle
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          ml: [3],
          mt: [3],
          cursor: 'pointer',
          transition: '0.15s',
          stroke: color,
          '&:hover': {
            stroke: 'primary',
          },
          strokeWidth: 1.5,
          display: ['none', 'inherit', 'inherit', 'inherit'],
        }}
        onClick={close}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          mr: [3],
          mt: [3],
          pt: [1],
          color: color,
          textTransform: 'uppercase',
          fontFamily: 'mono',
          writingMode: 'vertical-lr',
          fontSize: [1, 1, 1, 2],
          display: ['none', 'inherit', 'inherit', 'inherit'],
        }}
      >
        {label}
      </Box>
      <Row columns={[6, 8, 10, 10]} sx={{ pt: [2, 5, 5, 5], pb: [0, 0, 0, 0] }}>
        <Column
          start={[1, 2, 2, 2]}
          width={[6, 6, 8, 8]}
          sx={{ pt: [1], pb: [2] }}
        >
          <Component data={data} />
        </Column>
      </Row>
    </Box>
  )
}

export default Details
