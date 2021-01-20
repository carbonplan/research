import { Box } from 'theme-ui'
import { default as NextLink } from 'next/link'
import Entry from './entry'
import contents from '../contents'

const List = ({ filter, sort }) => {
  const inFilter = (d) => {
    return d.tags.some((t) => filter[t])
  }

  const compare = (a, b) => {
    if (sort.date) {
      const da = new Date(a.date.replace(/-/g, '/'))
      const db = new Date(b.date.replace(/-/g, '/'))
      return (da < db) - (da > db)
    }
    if (sort.title) {
      return (a.title > b.title) - (a.title < b.title)
    }
  }

  return (
    <Box
      sx={{
        mt: [0],
        pl: [0, 0, 4],
        borderStyle: 'solid',
        borderWidth: '0px',
        borderColor: 'muted',
        borderLeftWidth: ['0px', '0px', '1px'],
      }}
    >
      {contents
        .filter(inFilter)
        .sort(compare)
        .map((d, ix) => (
          <Entry
            key={d.title}
            info={d}
            final={ix === contents.filter(inFilter).length - 1}
          ></Entry>
        ))}
    </Box>
  )
}

export default List
