import { forwardRef } from 'react'
import { Box, Divider } from 'theme-ui'
import Highlight from './highlight'
import { TonYear, SoilProtocols } from './highlight-images'

const HIGHLIGHTS = [
  {
    id: 'seaweed-farming',
    date: '03-16-2022',
    href: '/research/seaweed-farming',
    title: 'Mapping seaweed farming potential',
    color: 'teal',
    summary:
      'Interest in farming seaweed for carbon removal is ramping up. We collaborated with a research team to build an interactive tool for mapping seaweed farming potential, and wrote an explainer summarizing the results.',
    links: [
      { label: 'Map tool', href: '/research/seaweed-farming' },
      {
        label: 'Explainer article',
        href: '/research/seaweed-farming-explainer',
      },
    ],
  },
  {
    id: 'ton-year-explainer',
    date: '01-31-2022',
    title: 'Ton-year accounting',
    color: 'pink',
    summary:
      "There's growing interest in methods to value temporary carbon storage. In two recent pieces, we explain a practice called ton-year accounting, and raise concerns about how it's being used in practice.",
    links: [
      { label: 'Explainer article', href: '/research/ton-year-explainer' },
      {
        label: 'Our critique of NCX’s methods',
        href: '/research/ton-year-ncx',
      },
      {
        label: 'Comment letters to Verra',
        href: '/blog/ton-year-verra',
      },
    ],
  },
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
  columnDivider: {
    pl: [
      0,
      0,
      'calc(32px + (100vw - 13 * 32px) / 24)',
      'calc(48px + (100vw - 13 * 48px) / 24)',
    ],
    ml: [
      0,
      0,
      'calc(-1 * (32px + (100vw - 13 * 32px) / 24))',
      'calc(-1 * (48px + (100vw - 13 * 48px) / 24))',
    ],
  },
}

const Highlights = forwardRef(({ selected }, ref) => {
  return (
    <Box
      ref={ref}
      id='highlights'
      sx={{
        scrollMarginTop: ['123px', '114px', '258px', '341px'],
        display: [
          selected ? 'inherit' : 'none',
          selected ? 'inherit' : 'none',
          'inherit',
          'inherit',
        ],
      }}
    >
      <Box
        sx={{
          ...sx.heading,
          display: ['none', 'none', 'inherit', 'inherit'],
          mb: [4, 5, 6, 7],
          mt: [0, 0, 0, '-1px'],
        }}
      >
        Highlights
      </Box>

      <Box sx={{}}>
        <Highlight {...HIGHLIGHTS[0]} sx={{ pb: [4, 4, 0, 0] }} />
        <Divider sx={{ display: ['inherit', 'inherit', 'none', 'none'] }} />
        <Highlight {...HIGHLIGHTS[1]} sx={{ pb: [0, 0, 0, 0] }} />
      </Box>
    </Box>
  )
})

export default Highlights
