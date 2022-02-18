import { Box } from 'theme-ui'
import { Button } from '@carbonplan/components'
import { forwardRef } from 'react'

const SECTIONS = [
  { id: 'tools', label: 'Tools' },
  { id: 'articles', label: 'Articles' },
  { id: 'publications', label: 'Publications' },
  { id: 'comments', label: 'Comment letters' },
]

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
const Navigation = forwardRef(({ active }, ref) => {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: ['106px', '106px', '106px', '120px'],
        scrollMarginTop: ['106px', '106px', '106px', '120px'],
        height: 'auto',
      }}
      ref={ref}
    >
      {SECTIONS.map(({ id, label }) => (
        <Box
          key={id}
          sx={{
            borderStyle: 'solid',
            borderColor: 'muted',
            borderWidth: '0px',
            borderBottomWidth: '1px',
            mb: [3, 3, 3, 4],
          }}
        >
          <Button
            href={`#${id}`}
            sx={{
              ...sx.heading,
              my: [3, 3, 3, 4],
              color: active === id ? 'primary' : 'secondary',
            }}
          >
            {label}
          </Button>
        </Box>
      ))}
    </Box>
  )
})

export default Navigation
