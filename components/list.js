import { Box } from 'theme-ui'
import Entry from './entry'

const List = ({ items }) => {
  return (
    <Box>
      {items.map((d, ix) => (
        <Entry
          key={d.title}
          info={d}
          first={ix == 0}
          final={ix === items.length - 1}
        ></Entry>
      ))}
    </Box>
  )
}

export default List
