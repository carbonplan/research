import { Box, Text } from 'theme-ui'
import { useReferences } from './references'
import Cite from './cite'
import CiteSeparator from './cite-separator'

const CiteGroup = ({ ids, hide = false }) => {
  const { references, color } = useReferences()

  const count = ids.length

  if (count < 2) {
    throw Error('cannot use cite group with less than 2 citations')
  } else if (count == 2) {
    return (
      <>
        <Cite id={ids[0]} />
        <CiteSeparator sep=',' />
        <Cite id={ids[1]} />
      </>
    )
  } else if (count === 3) {
    return (
      <>
        <Cite id={ids[0]} />
        <CiteSeparator sep=',' />
        <Cite id={ids[1]} />
        <CiteSeparator sep=',' />
        <Cite id={ids[2]} />
      </>
    )
  } else {
    return (
      <>
        <Cite id={ids[0]} />
        {ids.slice(1, count - 1).map((d, i) => (
          <Cite key={i} id={d} hide />
        ))}
        <CiteSeparator sep='-' />
        <Cite id={ids[count - 1]} />
      </>
    )
  }
}

export default CiteGroup
