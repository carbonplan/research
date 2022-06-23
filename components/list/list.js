import { forwardRef, useEffect, useMemo, useState } from 'react'
import { Box } from 'theme-ui'
import { useBreakpointIndex } from '@theme-ui/match-media'
import ListExpander from './list-expander'
import ListWrapper from './list-wrapper'

const List = forwardRef(
  ({ id, label, items, selected, limit = 4, Entries }, ref) => {
    const index = useBreakpointIndex({ defaultIndex: 2 })
    const showAllItems = index < 2
    const [{ expanded, initial }, setExpanded] = useState({
      expanded: false,
      initial: true,
    })
    const visibleItems = useMemo(() => {
      if (showAllItems || items.length <= limit || expanded) {
        return items
      } else {
        return items.slice(0, limit)
      }
    }, [expanded, items, limit, showAllItems])

    // Scroll to top of section when expander is closed
    useEffect(() => {
      if (!initial && !expanded && !showAllItems) {
        document.querySelector(`#${id}`).scrollIntoView({
          behavior: 'smooth',
        })
      }
    }, [expanded, showAllItems, initial])

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
          <Entries items={visibleItems} />
          {!showAllItems && items.length > limit && (
            <ListExpander
              id={id}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          )}
        </Box>
      </ListWrapper>
    )
  }
)

export default List
