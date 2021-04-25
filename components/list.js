import { Box } from 'theme-ui'
import { default as NextLink } from 'next/link'
import Entry from './entry'
import contents from '../contents'

const List = ({ category, year }) => {
  const inFilter = (d) => {
    return (
      d.tags.some((t) => category[t]) &&
      year[new Date(d.date.replace(/-/g, '/')).getFullYear()]
    )
  }

  const compare = (a, b) => {
    const da = new Date(a.date.replace(/-/g, '/'))
    const db = new Date(b.date.replace(/-/g, '/'))
    return (da < db) - (da > db)
  }

  return (
    <Box>
      {contents
        .filter(inFilter)
        .sort(compare)
        .map((d, ix) => (
          <Entry
            key={d.title}
            info={d}
            first={ix == 0}
            final={ix === contents.filter(inFilter).length - 1}
          ></Entry>
        ))}
    </Box>
  )
}

export default List
