import { Table } from '@carbonplan/components'

const table = [
  [
    'Step 1',
    'Define and screen individual projects aggressively for additionality and safeguards, because the current protocols are woefully inadequate on these dimensions.',
  ],
  [
    'Step 2',
    'Ask projects to adopt one of the most rigorous sampling requirements (such as those found in the BCarbon or FAO protocols) for their quantification requirements.',
  ],
  [
    'Step 3',
    'Consider a generous discount on credits to account for uncertainty and durability risk, because many types of soil carbon gains are vulnerable to future land management decisions  and the existing protocols manage these issues poorly.',
  ],
]

const RecommendationTable = () => {
  return (
    <Table
      data={table}
      columns={[6]}
      header={'Recommendations'}
      color='orange'
      start={[
        [1, 1, 1, 1],
        [1, 2, 2, 2],
      ]}
      width={[
        [6, 1, 1, 1],
        [6, 5, 5, 5],
      ]}
    />
  )
}

export default RecommendationTable
