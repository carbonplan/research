import { Box } from 'theme-ui'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Column, Heading, Row } from '@carbonplan/components'
import { useBreakpointIndex } from '@theme-ui/match-media'

import { publications, comments, tools } from '../contents/index'
import List, { CommentaryList } from './list'
import Articles from './articles'
import Commentary from './commentary'
import Publications from './publications'
import Tools from './tools'
import Highlights from './highlights'
import Navigation from './navigation'
import { useCustomScroll } from './scroll'

const getDate = (dateStr) => {
  const [month, day, year] = dateStr.split('-')
  return new Date(year, month - 1, day)
}
const sortByDate = (items) => {
  return items.sort((a, b) => getDate(b.date) - getDate(a.date))
}

const Main = ({ articles, commentary }) => {
  const router = useRouter()
  const navRef = useRef(null)
  const listRefs = {
    tools: useRef(null),
    articles: useRef(null),
    commentary: useRef(null),
    publications: useRef(null),
  }
  const [scrolled, setScrolled] = useState(null)
  const customScroll = useCustomScroll()
  const index = useBreakpointIndex({ defaultIndex: 2 })
  const selected = router.query.section || 'highlights'

  const scrollToSection = (id) => {
    if (index < 2) {
      window.scrollTo({
        left: 0,
        top: index === 0 ? 183 : 148,
        behavior: 'smooth',
      })
    } else {
      // Map former #comments section to the new #commentary section
      const selector = id === 'comments' ? '#commentary' : `#${id}`

      document.querySelector(selector)?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  const selectSection = (id) => {
    if (id !== router.query.section) {
      // Update query when not already set and allow scroll manipulation
      customScroll.current = true
      router.replace(
        { pathname: '/research', query: { section: id } },
        undefined,
        {
          scroll: false,
          shallow: true,
        }
      )
    } else {
      // Explicitly scroll to section when query is unchanged
      scrollToSection(id)
    }
  }

  useEffect(() => {
    // Scroll to active section on initialization of query, on query change, or when screen size changes
    if (router.query.section && customScroll.current) {
      scrollToSection(router.query.section)
    }
  }, [router.query.section, index])

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

    scrollListener() // Try setting scrolled on mount
    return () => {
      history.scrollRestoration = 'auto'
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <Box>
      <Heading
        description={
          <span>
            Articles, tools, and commentary on
            <Box
              as='br'
              sx={{ display: ['none', 'initial', 'initial', 'initial'] }}
            />{' '}
            climate services and solutions.
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
            items={tools.filter((d) => !d.hideInIndex)}
            Entries={Tools}
            limit={6}
            ref={listRefs.tools}
          />
          <List
            label='Articles'
            id='articles'
            selected={selected === 'articles'}
            items={articles.filter((d) => !d.hideInIndex)}
            Entries={Articles}
            ref={listRefs.articles}
          />
          <CommentaryList
            label='Commentary'
            id='commentary'
            selected={selected === 'commentary'}
            comments={comments}
            commentary={commentary}
            Entries={Commentary}
            ref={listRefs.commentary}
          />
          <List
            label='Publications'
            id='publications'
            selected={selected === 'publications'}
            items={sortByDate(publications)}
            Entries={Publications}
            ref={listRefs.publications}
          />
        </Column>
      </Row>
    </Box>
  )
}

export default Main
