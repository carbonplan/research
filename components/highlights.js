import { forwardRef } from 'react'
import { Box, Divider } from 'theme-ui'
import Highlight from './highlight'

const HIGHLIGHTS = [
  {
    id: 'oae-efficiency',
    date: '07-16-2024',
    href: '/research/oae-efficiency',
    title: 'Mapping the efficiency of ocean alkalinity enhancement',
    summary:
      'We developed a tool to explore a new dataset that makes it easier to see how the efficiency of ocean alkalinity enhancement varies around the world, in collaboration with [C]Worthy.',
    links: [
      {
        label: 'Map tool',
        href: '/research/oae-efficiency',
      },
      {
        label: 'Explainer article',
        href: '/research/oae-efficiency-explainer',
      },
      {
        label: 'Preprint',
        href: 'https://www.researchsquare.com/article/rs-4124909/v1',
      },
      {
        label: 'Dataset',
        href: 'https://beta.source.coop/repositories/cworthy/oae-efficiency-atlas/description/',
      },
    ],
  },

  {
    id: 'offsets-db',
    date: '03-08-2024',
    href: '/research/offsets-db',
    title: 'OffsetsDB',
    summary:
      'We developed a regularly-updating, harmonized database of carbon offset projects and credits for download and interactive exploration.',
    links: [
      { label: 'Database tool', href: '/research/offsets-db' },
      {
        label: 'Explainer article',
        href: '/research/offsets-db-explainer',
      },
      {
        label: 'Methods',
        href: '/research/offsets-db-methods',
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
