import { Box } from 'theme-ui'
import { Filter, Heading } from '@carbonplan/components'
import List from './list'
import Articles from './articles'
import Publications from './publications'

import { articles, publications, comments, tools } from '../contents/index'
import Tools from './tools'
import { useState } from 'react'

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
  const [selected, setSelected] = useState('articles')

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

      <Filter
        values={{
          articles: selected === 'articles',
          tools: selected === 'tools',
          publications: selected === 'publications',
          comments: selected === 'comments',
        }}
        setValues={(obj) => setSelected(Object.keys(obj).find((k) => obj[k]))}
        sx={{ display: ['inherit', 'inherit', 'none', 'none'], my: 3 }}
      />

      <List
        label='Tools'
        selected={selected === 'tools'}
        items={tools}
        Entries={Tools}
        width={8}
      />
      <List
        label='Articles'
        selected={selected === 'articles'}
        items={articles}
        Entries={Articles}
      />
      <List
        label='Publications'
        selected={selected === 'publications'}
        items={publications}
        Entries={Publications}
      />
      <List
        label='Comment letters'
        selected={selected === 'comments'}
        items={comments}
        Entries={Publications}
      />
    </Box>
  )
}

export default Main
