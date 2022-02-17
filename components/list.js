import { Box, Divider } from 'theme-ui'
import { Row, Column, Expander } from '@carbonplan/components'
import { useMemo, useState } from 'react'

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

const List = ({ label, items, width = 7, limit = 4, Entries }) => {
  const [expanded, setExpanded] = useState(false)
  const visibleItems = useMemo(() => {
    if (items.length <= limit || expanded) {
      return items
    } else {
      return items.slice(0, limit)
    }
  }, [expanded, items, limit])
  return (
    <Box sx={{ mb: [4, 6, 6, 7] }}>
      <Row>
        <Column start={[1, 1, 2, 2]} width={[6, 8, 10, 10]}>
          <Divider
            sx={{
              mt: [0],
              mb: [4, 5, 6, 7],
              display: ['none', 'block', 'block', 'block'],
            }}
          />
        </Column>
      </Row>
      <Row sx={{ mb: [0] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 6, 2, 2]}
          sx={{ display: ['none', 'none', 'initial', 'initial'] }}
        >
          <Box
            sx={{
              position: 'sticky',
              top: ['106px', '106px', '106px', '120px'],
              height: 'auto',
            }}
          >
            <Box sx={{ ...sx.heading, mt: ['-6px', '-6px', '-6px', '-7px'] }}>
              {label}
            </Box>
          </Box>
        </Column>
        <Column
          start={[1, 1, 12 - width, 12 - width]}
          width={[6, 8, width, width]}
          sx={{ mt: ['-3px', '0px', '-1px', '0px'] }}
        >
          <Entries items={visibleItems} />
          {items.length > limit && (
            <Box
              onClick={() => setExpanded(!expanded)}
              sx={{
                ...sx.expander,
                transition: 'color 0.25s',
                '@media (hover: hover) and (pointer: fine)': {
                  '&:hover': {
                    color: 'primary',
                  },
                  [`&:hover > #${label}-expander`]: {
                    stroke: 'primary',
                  },
                },
              }}
            >
              <Expander
                id={`${label}-expander`}
                value={expanded}
                sx={{ mr: 2 }}
              />
              Show all
            </Box>
          )}
        </Column>
      </Row>
    </Box>
  )
}

export default List
