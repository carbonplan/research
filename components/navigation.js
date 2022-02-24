import { Box } from 'theme-ui'
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
    lineHeight: 1.1,
  },
}
const Navigation = forwardRef(({ scrolled, selected, selectSection }, ref) => {
  const index = useBreakpointIndex({ defaultIndex: 2 })

  return (
    <Box
      sx={{
        position: 'sticky',
        top: ['55px', '55px', '106px', '120px'],
        height: 'auto',
        bg: 'background',
        zIndex: 501,
      }}
      ref={ref}
    >
      <Box
        sx={{
          mx: [-3, -4, 0, 0],
          px: [3, 4, 0, 0],
          py: [2, 3, 0, 0],
          borderStyle: 'solid',
          borderColor: 'muted',
          borderWidth: '0px',
          borderTopWidth: ['1px', '1px', 0],
          borderBottomWidth: ['1px', '1px', 0],
        }}
      >
        {SECTIONS.map(({ id, label }, i) => (
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
              onClick={() => {
                const manuallyScroll = index < 2
                // Explicitly scroll navigation into view on mobile and tablet
                if (manuallyScroll) {
                  window.scrollTo({
                    left: 0,
                    top: index === 0 ? 183 : 148,
                    behavior: 'smooth',
                  })
                }
                selectSection(id, !manuallyScroll)
              }}
              sx={{
                ...sx.heading,
                my: [1, 1, 3, 4],
                pb: [0, 0, '2px', '2px'],
                mt: [1, 1, i === 0 ? 0 : 3, i === 0 ? 0 : 4],
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
      </Box>
    </Box>
  )
})

export default Navigation
