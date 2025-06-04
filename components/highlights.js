import { forwardRef } from 'react'
import { Box, Divider } from 'theme-ui'
import Highlight from './highlight'

const HIGHLIGHTS = [
  {
    id: 'dor-efficiency',
    date: '06-04-2025',
    href: '/research/dor-efficiency',
    title: 'Mapping the efficiency of direct ocean removal',
    summary:
      'We developed a tool to explore a new dataset that makes it easier to see how the efficiency of direct ocean removal varies around the world.',
    links: [
      {
        label: 'Map tool',
        href: '/research/dor-efficiency',
      },
      {
        label: 'Explainer article',
        href: '/research/dor-efficiency-explainer',
      },
      {
        label: 'Dataset',
        href: 'https://source.coop/repositories/cworthy/dor-efficiency-atlas/description/',
      },
      {
        label: 'Comparison with OAE tool',
        href: '/research/mcdr-tools-about',
      },
    ],
  },
  {
    id: 'offsets-db',
    date: '04-23-2025',
    href: '/research/offsets-db',
    title: 'OffsetsDB',
    summary:
      'We’ve expanded our database of offset data with searchable project types and details about who is using offset credits.',
    links: [
      {
        label: 'Database tool',
        href: '/research/offsets-db',
      },
      {
        label: 'Update blog post',
        href: 'https://carbonplan.org/blog/offsets-db-additions',
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
