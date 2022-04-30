import { Box } from 'theme-ui'
import { Table } from '@carbonplan/components'

const table = [
  [
    'Mechanism',
    'Does the project directly remove CO₂ from the atmosphere, avoid CO₂ emissions that would otherwise end up in the atmosphere, or both?',
  ],
  ['Volume', 'How many tons of CO₂ does the project claim to remove or avoid?'],
  [
    'Negativity',
    "Based on a life cycle analysis, how emissions-intensive is the project's process relative to its carbon removal potential?",
  ],
  [
    'Permanence',
    'How long does the project claim carbon will be safely removed from the atmosphere? Is that a question of physical material stability or socioeconomic choices?',
  ],
  ['Price', 'How much does the project want to charge its buyer?'],
  [
    'Additionality',
    'Would an investment cause new climate benefits or take credit for benefits that may already be happening?',
  ],
  [
    'Specificity',
    'Is there enough detail in project proposals, publications, or other materials to independently validate the rest of our metrics?',
  ],
]

const Metrics = () => {
  return (
    <Table
      data={table}
      columns={[6]}
      start={[
        [1, 1, 1, 1],
        [1, 3, 3, 3],
      ]}
      width={[
        [6, 2, 2, 2],
        [6, 4, 4, 4],
      ]}
    />
  )
}

export default Metrics
