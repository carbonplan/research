import { useState } from 'react'
import { Grid } from 'theme-ui'
import Sidebar from './sidebar'
import List from './list'

const initFilter = {
  all: true,
  article: true,
  tool: true,
  comment: true,
  publication: true,
  dataset: true,
}

const initSort = {
  date: true,
  title: false,
}

const Main = () => {
  const [filter, setFilter] = useState(initFilter)
  const [sort, setSort] = useState(initSort)

  return (
    <Grid columns={[1, 1, 'minmax(350px, 30%) auto']} gap={['0px']}>
      <Sidebar
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      <List filter={filter} sort={sort} />
    </Grid>
  )
}

export default Main
