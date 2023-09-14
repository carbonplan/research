import { Table } from '@carbonplan/components'

const table = [
  [
    '01',
    <>
      Quantify carbon removal using a backward-looking (i.e., <em>ex-post</em>)
      perspective when possible in order to avoid challenges associated with
      normalizing delays to removal.
    </>,
  ],
  [
    '02',
    <>
      If a forward-looking (i.e., <em>ex-ante</em>) perspective is necessary,
      clearly disclose the method used to compare approaches across time.
    </>,
  ],
  [
    '03',
    'Ensure that carbon cycle feedbacks are treated in a consistent manner between the CDR approaches being compared.',
  ],
]

const TableRecommendations = () => {
  return (
    <Table
      columns={6}
      header={'Recommendations'}
      color='pink'
      start={[1, 2]}
      width={[1, 5]}
      index={false}
      data={table}
    />
  )
}

export default TableRecommendations
