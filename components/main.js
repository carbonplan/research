import { Box } from 'theme-ui'
import { Heading } from '@carbonplan/components'
import List from './list'
import Articles from './articles'
import Publications from './publications'

import { articles, publications, comments, tools } from '../contents/index'
import Tools from './tools'

const sx = {
  heading: {
    mb: [3, 3, 3, 4],
    fontSize: [3, 3, 3, 4],
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    color: 'primary',
  },
  highlight: {
    mb: [3, 3, 3, 4],
    fontSize: [3, 3, 3, 4],
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    color: 'secondary',
  },
  tool: {
    color: 'secondary',
    fontSize: [1, 1, 1, 2],
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    transition: 'opacity 0.15s',
  },
}

const Main = () => {
  return (
    <Box>
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
        descriptionStart={[1, 4, 6, 6]}
        descriptionWidth={[6, 5, 5, 5]}
      >
        Research
      </Heading>

      <List label='Tools' items={tools} Entries={Tools} width={8} />
      <List label='Articles' items={articles} Entries={Articles} />
      <List label='Publications' items={publications} Entries={Publications} />
      <List label='Comment letters' items={comments} Entries={Publications} />
    </Box>
  )
}

export default Main
