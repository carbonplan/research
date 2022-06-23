import { Table } from '@carbonplan/components'

const table = [
  [
    '',
    'Emission at t=0',
    'Emission at t=1',
    'Benefit of delay',
    'Equivalence ratio',
  ],
  ['Units', 'ton-years', 'ton-years', 'ton-years', 'unitless'],
  ['Undiscounted', '310.78', '310.54', '0.24', '1322.20'],
  ['Discounted', '19.12', '18.50', '0.62', '30.81'],
]

const TableThousand = () => {
  return (
    <Table
      columns={[4, 6, 6, 6]}
      start={[
        [1, 1, 1, 1],
        [1, 3, 3, 3],
        [2, 4, 4, 4],
        [3, 5, 5, 5],
        [4, 6, 6, 6],
      ]}
      width={[
        [4, 2, 2, 2],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ]}
      data={table}
    />
  )
}

export default TableThousand
