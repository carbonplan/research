import { Box, Divider } from 'theme-ui'
import { Button } from '@carbonplan/components'
import { forwardRef } from 'react'
import { useBreakpointIndex } from '@theme-ui/match-media'

const SECTIONS = [
  { id: 'highlights', label: 'Highlights' },
  { id: 'tools', label: 'Tools' },
  { id: 'articles', label: 'Articles' },
  { id: 'publications', label: 'Publications' },
  { id: 'comments', label: 'Comment letters' },
]

const sx = {
  heading: {
    fontSize: [2, 2, 3, 4],
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
  },
}
const Navigation = forwardRef(({ scrolled, selected, selectSection }, ref) => {
  const index = useBreakpointIndex()
  return (
    <Box
      sx={{
        position: 'sticky',
        top: ['56px', '56px', '106px', '120px'],
        pt: [2, 2, 0, 0],
        height: 'auto',
        bg: 'background',
        zIndex: 501,
      }}
      ref={ref}
    >
      {SECTIONS.map(({ id, label }) => (
        <Box
          key={id}
          sx={{
            display: ['inline-block', 'inline-block', 'block'],
            mr: [4, 4, 0],
            borderStyle: 'solid',
            borderColor: 'muted',
            borderWidth: '0px',
            borderBottomWidth: [0, 0, '1px'],
          }}
        >
          <Button
            onClick={() => selectSection(id, index >= 2)}
            sx={{
              ...sx.heading,
              my: [1, 1, 3, 4],
              color: [
                selected === id ? 'primary' : 'secondary',
                selected === id ? 'primary' : 'secondary',
                scrolled === id ? 'primary' : 'secondary',
                scrolled === id ? 'primary' : 'secondary',
              ],
            }}
          >
            {label}
          </Button>
        </Box>
      ))}

      <Divider sx={{ display: ['inherit', 'inherit', 'none'] }} />
    </Box>
  )
})

export default Navigation
