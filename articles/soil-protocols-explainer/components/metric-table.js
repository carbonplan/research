import { Table } from '@carbonplan/components'

const table = [
  [
    'Rigor',
    'Approach to quantifying or estimating soil carbon using physical soil sampling, modeling tools, or a combination of approaches.',
  ],
  [
    'Additionality',
    'Approach to analyzing the causal relationship between the funds a project seeks via generating credits and the climate benefits it claims to produce.',
  ],
  [
    'Durability',
    'Duration of carbon removal permanence promised and consideration of strategies to manage reversal risks.',
  ],
  [
    'Safeguards',
    'Consideration of provisions to treat landowners fairly, to protect their privacy rights, and to engage local communities.',
  ],
]

const MetricTable = () => {
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
      sx={{
        my: [6, 6, 6, 7],
      }}
    />
  )
}

export default MetricTable
