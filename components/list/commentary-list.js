import { forwardRef, useEffect, useMemo, useState } from 'react'
import { Box } from 'theme-ui'
import { useBreakpointIndex } from '@theme-ui/match-media'

import ListExpander from './list-expander'
import ListWrapper from './list-wrapper'

const getDate = (dateStr) => {
  const [month, day, year] = dateStr.split('-')
  return new Date(year, month - 1, day)
}
const sortByDate = (items) => {
  return items.sort((a, b) => getDate(b.date) - getDate(a.date))
}

const CommentaryList = forwardRef(
  (
    {
      id,
      commentary,
      comments,
      commentaryLimit = 3,
      commentsLimit = 4,
      label,
      items,
      selected,
      filter,
      limit = 4,
      Entries,
    },
    ref
  ) => {
    const index = useBreakpointIndex({ defaultIndex: 2 })
    const showAllItems = index < 2
    const [expandedCommentary, setExpandedCommentary] = useState({
      expanded: false,
      initial: true,
    })
    const [expandedComments, setExpandedComments] = useState({
      expanded: false,
      initial: true,
    })

    const visibleItems = useMemo(() => {
      let visibleCommentary = commentary
      let visibleComments = comments

      if (!showAllItems) {
        if (!expandedCommentary.expanded) {
          visibleCommentary = commentary.slice(0, commentaryLimit)
        }
        if (!expandedComments.expanded) {
          visibleComments = comments.slice(0, commentsLimit)
        }
      }

      const combined = [
        ...visibleCommentary.map((c) => ({ ...c, type: 'commentary' })),
        ...visibleComments.map((l) => ({ ...l, type: 'letter' })),
      ]

      return sortByDate(combined)
    }, [
      expandedCommentary.expanded,
      expandedComments.expanded,
      items,
      filter,
      limit,
      showAllItems,
    ])

    // Scroll to top of section when commentary expander is closed
    useEffect(() => {
      const { initial, expanded } = expandedCommentary
      if (!initial && !expanded && !showAllItems) {
        document.querySelector(`#${id}`).scrollIntoView({
          behavior: 'smooth',
        })
      }
    }, [expandedCommentary, showAllItems])

    // Scroll to top of section when comments expander is closed
    useEffect(() => {
      const { initial, expanded } = expandedComments
      if (!initial && !expanded && !showAllItems) {
        document.querySelector(`#${id}`).scrollIntoView({
          behavior: 'smooth',
        })
      }
    }, [expandedComments, showAllItems])

    return (
      <ListWrapper
        ref={ref}
        label={label}
        selected={selected}
        showAllItems={showAllItems}
        id={id}
      >
        <Box
          id={showAllItems ? id : undefined}
          sx={{ scrollMarginTop: ['170px', '138px'] }}
        >
          <Entries
            items={visibleItems}
            commentaryExpander={
              !showAllItems &&
              commentary.length > commentaryLimit && (
                <ListExpander
                  id={`${id}-commentary`}
                  expanded={expandedCommentary.expanded}
                  setExpanded={setExpandedCommentary}
                />
              )
            }
            commentsExpander={
              !showAllItems &&
              comments.length > commentsLimit && (
                <ListExpander
                  id={`${id}-comments`}
                  expanded={expandedComments.expanded}
                  setExpanded={setExpandedComments}
                />
              )
            }
          />
        </Box>
      </ListWrapper>
    )
  }
)

export default CommentaryList
