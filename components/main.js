import { Box } from 'theme-ui'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Column, Filter, Heading, Row } from '@carbonplan/components'

import { articles, publications, comments, tools } from '../contents/index'
import List from './list'
import Articles from './articles'
import Publications from './publications'
import Tools from './tools'
import Highlights from './highlights'
import Navigation from './navigation'

const sx = {
  heading: {
    mt: [4, 4, 0, 0],
    mb: [3, 3, 4, 5],
    fontSize: [3, 3, 3, 4],
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
  },
}

const Main = () => {
  const router = useRouter()
  const navRef = useRef(null)
  const listRefs = {
    tools: useRef(null),
    articles: useRef(null),
    publications: useRef(null),
    comments: useRef(null),
  }
  const [scrolled, setScrolled] = useState(null)
  const [selected, setSelected] = useState('articles')

  useEffect(() => {
    const scrollListener = () => {
      const navBottom = navRef.current?.getBoundingClientRect()?.bottom
      const active = Object.keys(listRefs)
        .reverse()
        .find((key) => {
          const ref = listRefs[key]
          return navBottom > ref.current?.getBoundingClientRect()?.top
        })
      setScrolled(active)
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

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

      <Row>
        <Column start={[1, 1, 2, 2]} width={[6, 8, 2, 2]}>
          <Box sx={sx.heading}>Sections</Box>
        </Column>
        <Column start={[1, 1, 5, 5]} width={[6, 8, 6, 6]}>
          <Box
            sx={{
              ...sx.heading,
              display: ['none', 'none', 'inherit', 'inherit'],
            }}
          >
            Highlights
          </Box>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 1, 2, 2]} width={[6, 8, 2, 2]}>
          <Navigation
            ref={navRef}
            scrolled={scrolled}
            setSelected={setSelected}
          />
        </Column>
        <Column start={[1, 1, 5, 5]} width={[6, 8, 7, 7]}>
          <Highlights />
          <Filter
            values={{
              tools: selected === 'tools',
              articles: selected === 'articles',
              publications: selected === 'publications',
              comments: selected === 'comments',
            }}
            setValues={(obj) => {
              const key = Object.keys(obj).find((k) => obj[k])
              router.push(`research#${key}`)
              setSelected(key)
            }}
            sx={{ display: ['inherit', 'inherit', 'none', 'none'], my: 3 }}
          />
          <List
            label='Tools'
            id='tools'
            selected={selected === 'tools'}
            items={tools}
            Entries={Tools}
            width={8}
            limit={6}
            ref={listRefs.tools}
          />
          <List
            label='Articles'
            id='articles'
            selected={selected === 'articles'}
            items={articles}
            width={8}
            Entries={Articles}
            ref={listRefs.articles}
          />
          <List
            label='Publications'
            id='publications'
            selected={selected === 'publications'}
            items={publications}
            Entries={Publications}
            ref={listRefs.publications}
          />
          <List
            label='Comment letters'
            id='comments'
            selected={selected === 'comments'}
            items={comments}
            Entries={Publications}
            ref={listRefs.comments}
          />
        </Column>
      </Row>
    </Box>
  )
}

export default Main
