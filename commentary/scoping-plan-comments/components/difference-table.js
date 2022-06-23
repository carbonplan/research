import { Box } from 'theme-ui'
import { Table } from '@carbonplan/components'

const Format = ({ children }) => {
  return (
    <Box as='span' pl={'8px'}>
      {children}
    </Box>
  )
}

let data = [
  ['Sector', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
  ['Agriculture', -0.5, -0.7, -0.1, -0.3, 0.6, 'N/A', 'N/A'],
  ['Residential & Commercial', -2.7, -4.7, -5.7, -5.9, -8.6, 'N/A', 'N/A'],
  ['Electricity', 2.7, 1.4, 1.4, 1.4, 1.4, 'N/A', 'N/A'],
  ['High GWP', 1.7, 1.1, 0.3, -0.1, -0.4, 'N/A', 'N/A'],
  ['Industrial', -7.8, -8.4, -8.0, -9.1, -7.6, 'N/A', 'N/A'],
  ['Recycling & Waste', 1.4, 1.3, 1.2, 1.2, 1.0, 'N/A', 'N/A'],
  ['Transportation', 6.2, 3.6, 1.3, -1.2, -1.9, 'N/A', 'N/A'],
  ['Total', -0.1, -6.3, -9.5, -14.1, -15.5, -12.5, '-27.3 (±24.4)'],
]

data = data.map((d) => {
  return d.map((e) => {
    if (typeof e === 'number' && e > 0) {
      return <Format>{e}</Format>
    } else {
      return e
    }
  })
})

const EmissionsTable = () => {
  return (
    <Table
      columns={[7, 9, 9, 9]}
      index={false}
      start={[
        [1, 1, 1, 1],
        [1, 3, 3, 3],
        [2, 4, 4, 4],
        [3, 5, 5, 5],
        [4, 6, 6, 6],
        [5, 7, 7, 7],
        [6, 8, 8, 8],
        [7, 9, 9, 9],
      ]}
      width={[
        [8, 2, 2, 2],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ]}
      data={data}
    />
  )
}

export default EmissionsTable
