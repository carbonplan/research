import { Box } from 'theme-ui'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Column, Heading, Row } from '@carbonplan/components'
import { useBreakpointIndex } from '@theme-ui/match-media'

import { articles, publications, comments, tools } from '../contents/index'
import List from './list'
import Articles from './articles'
import Publications from './publications'
import Tools from './tools'
import Highlights from './highlights'
import Navigation from './navigation'

const sortByDate = (items) => {
  return items.sort((a, b) => new Date(b.date) - new Date(a.date))
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
  const [selected, setSelected] = useState('highlights')
  const index = useBreakpointIndex({ defaultIndex: 2 })

  const selectSection = (id) => {
    router.push({ pathname: '/research', hash: id }, undefined, {
      scroll: false,
    })
    setSelected(id)
  }

  useEffect(() => {
    if (router.hash && selected && router.hash !== selected) {
      setSelected(router.hash)
    } else if (router.hash) {
      if (index < 2) {
        window.scrollTo({
          left: 0,
          top: index === 0 ? 183 : 148,
          behavior: 'smooth',
        })
      } else {
        document.querySelector(`#${router.hash}`).scrollIntoView({
          behavior: 'smooth',
        })
      }
    }
  }, [selected, router.hash, index])

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
        {index >= 2 && (
          <Column
            start={[1, 1, 2, 2]}
            width={[6, 8, 2, 2]}
            sx={{ mt: [0, 0, '2px'] }}
          >
            <Navigation
              ref={navRef}
              selected={selected}
              scrolled={scrolled}
              selectSection={selectSection}
            />
          </Column>
        )}
        <Column start={[1, 1, 5, 5]} width={[6, 8, 7, 7]}>
          {index < 2 && (
            <Navigation
              ref={navRef}
              selected={selected}
              scrolled={scrolled}
              selectSection={selectSection}
            />
          )}

          <Highlights selected={selected === 'highlights'} />
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
            items={sortByDate(publications)}
            Entries={Publications}
            ref={listRefs.publications}
          />
          <List
            label='Comment letters'
            id='comments'
            selected={selected === 'comments'}
            items={sortByDate(comments)}
            Entries={Publications}
            ref={listRefs.comments}
          />
        </Column>
      </Row>
    </Box>
  )
}

export default Main
