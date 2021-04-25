import { useState } from 'react'
import { Box } from 'theme-ui'
import { Row, Column, Tray, Filter } from '@carbonplan/components'
import List from './list'
import Heading from './heading'

const initCategory = {
  article: true,
  tool: true,
  comment: true,
  publication: true,
  dataset: true,
}

const initYear = {
  2020: true,
  2021: true,
}

const Main = ({ expanded }) => {
  const [category, setCategory] = useState(initCategory)
  const [year, setYear] = useState(initYear)

  const FilterContents = () => {
    return (
      <Filter
        filters={{ category: category, year: year }}
        setFilters={{ category: setCategory, year: setYear }}
        filterLabels={{ category: 'Category', year: 'Year' }}
        filterList={['year', 'category']}
      />
    )
  }

  return (
    <Box sx={{ mb: [8, 8, 9, 10] }}>
      <Heading
        description={
          <span>
            Articles, tools, and commentary on carbon
            <Box
              as='br'
              sx={{ display: ['none', 'initial', 'initial', 'initial'] }}
            />{' '}
            removal and climate solutions.
          </span>
        }
      >
        Research
      </Heading>
      <Tray expanded={expanded}>
        <FilterContents />
      </Tray>
      <Row sx={{ mb: [0] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 6, 2, 2]}
          sx={{ display: ['none', 'none', 'initial', 'intial'] }}
        >
          <Box sx={{ position: 'sticky', top: '76px', height: 'auto' }}>
            <FilterContents />
          </Box>
        </Column>
        <Column
          start={[1, 2, 5, 5]}
          width={[6, 7, 7, 7]}
          sx={{ mt: ['-3px', '0px', '-1px', '0px'] }}
        >
          <List category={category} year={year} />
        </Column>
      </Row>
    </Box>
  )
}

export default Main
