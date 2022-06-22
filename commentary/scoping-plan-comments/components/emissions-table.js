import { Table, Colors } from '@carbonplan/components'

const EmissionsTable = ({ data }) => {
  const titles = [
    'Scenario',
    'Net Zero date',
    <span key={0}>
      CDR in 2045 <Colors.Secondary>(million tCO₂e)</Colors.Secondary>
    </span>,
    <span key={1}>
      CDR in 2045 <Colors.Secondary>(percent)</Colors.Secondary>
    </span>,
    <span key={2}>
      Emission Reductions in 2045 <Colors.Secondary>(percent)</Colors.Secondary>
    </span>,
  ]
  return (
    <Table
      columns={[4, 5, 5, 5]}
      index={false}
      start={[
        [1, 1, 1, 1],
        [1, 2, 2, 2],
        [2, 3, 3, 3],
        [3, 4, 4, 4],
        [4, 5, 5, 5],
      ]}
      width={[
        [4, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ]}
      data={[titles].concat(data)}
    />
  )
}

export default EmissionsTable
