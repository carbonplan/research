import { Box } from 'theme-ui'
import { default as NextLink } from 'next/link'
import Entry from './entry'
import contents from '../contents'

const List = () => {
  return (
    <Box
      sx={{
        mt: [0],
        pl: [4],
        borderStyle: 'solid',
        borderWidth: '0px',
        borderColor: 'muted',
        borderLeftWidth: '1px',
      }}
    >
      {[
        'permanence-calculator-explainer',
        'offset-project-fire',
        'carbon-removal-mechanisms',
        'forest-climate-risks',
        'soil-carbon-comment',
        'stripe-reports-insights',
      ].map((id) => (
        <NextLink key={id} href={`/research/${id}`}>
          <a>
            <Entry info={contents[id]}></Entry>
          </a>
        </NextLink>
      ))}
    </Box>
  )
}

export default List
