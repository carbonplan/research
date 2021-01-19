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
      const da = new Date(a.date)
      const db = new Date(b.date)
      if (da > db) {
        return -1
      }
      if (da < db) {
        return 1
      }
      return 0
    }
    if (sort.title) {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
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
            final={ix === contents.length - 1}
          ></Entry>
        ))}
    </Box>
  )
}

export default List
