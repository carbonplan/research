import { Box } from 'theme-ui'
import { Filter, Heading } from '@carbonplan/components'
import List from './list'
import Articles from './articles'
import Publications from './publications'

import { articles, publications, comments, tools } from '../contents/index'
import Tools from './tools'
import { useState } from 'react'
import Highlights from './highlights'

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

      <Highlights />

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
        id='tools'
        selected={selected === 'tools'}
        items={tools}
        Entries={Tools}
        width={8}
        limit={8}
      />
      <List
        label='Articles'
        id='articles'
        selected={selected === 'articles'}
        items={articles}
        width={8}
        Entries={Articles}
      />
      <List
        label='Publications'
        id='publications'
        selected={selected === 'publications'}
        items={publications}
        Entries={Publications}
      />
      <List
        label='Comment letters'
        id='comments'
        selected={selected === 'comments'}
        items={comments}
        Entries={Publications}
      />
    </Box>
  )
}

export default Main
