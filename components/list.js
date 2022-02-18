import { Box, Divider } from 'theme-ui'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { Row, Column, Expander } from '@carbonplan/components'
import { forwardRef, useMemo, useState } from 'react'

const sx = {
  heading: {
    mb: [3, 3, 3, 4],
    fontSize: [3, 3, 3, 4],
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    color: 'primary',
  },
  expander: {
    color: 'secondary',
    fontSize: [1, 1, 1, 2],
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    transition: 'opacity 0.15s',
  },
}

const List = forwardRef(
  ({ id, label, items, selected, limit = 4, Entries }, ref) => {
    const index = useBreakpointIndex()
    const showAllItems = index < 2
    const [expanded, setExpanded] = useState(false)
    const visibleItems = useMemo(() => {
      if (showAllItems || items.length <= limit || expanded) {
        return items
      } else {
        return items.slice(0, limit)
      }
    }, [expanded, items, limit, showAllItems])

    return (
      <Box
        ref={ref}
        sx={{
          mb: [4, 6, 6, 7],
          display: [
            selected ? 'inherit' : 'none',
            selected ? 'inherit' : 'none',
            'inherit',
            'inherit',
          ],
        }}
      >
        <Divider
          sx={{
            mt: [0],
            mb: [4, 5, 6, 7],
            display: ['none', 'block', 'block', 'block'],
          }}
        />
        <Box id={id} sx={{ scrollMarginTop: [null, null, '105px', '121px'] }}>
          <Entries items={visibleItems} />
          {!showAllItems && items.length > limit && (
            <Box
              onClick={() => setExpanded(!expanded)}
              sx={{
                ...sx.expander,
                transition: 'color 0.25s',
                '@media (hover: hover) and (pointer: fine)': {
                  '&:hover': {
                    color: 'primary',
                  },
                  [`&:hover > #${id}-expander`]: {
                    stroke: 'primary',
                  },
                },
              }}
            >
              <Expander id={`${id}-expander`} value={expanded} sx={{ mr: 2 }} />
              Show all
            </Box>
          )}
        </Box>
      </Box>
    )
  }
)

export default List
