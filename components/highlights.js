import { forwardRef } from 'react'
import { Box, Divider } from 'theme-ui'
import Highlight from './highlight'

const HIGHLIGHTS = [
  {
    id: 'climate-risk',
    date: '02-10-2026',
    href: '/research/climate-risk',
    title: 'Open Climate Risk',
    summary:
      'We developed a tool to explore a new, open source dataset of wildfire risk estimates across the contiguous United States.',
    links: [
      {
        label: 'Map tool',
        href: '/research/climate-risk',
      },
      {
        label: 'Explainer article',
        href: '/research/climate-risk-explainer',
      },
      {
        label: 'FAQ',
        href: '/research/climate-risk-faq',
      },
    ],
  },
  {
    id: 'offsets-db',
    date: '01-14-2026',
    href: '/research/offsets-db',
    title: 'OffsetsDB',
    summary:
      'We’ve added project boundary data from 500 forest offset projects to our database of offset data.',
    links: [
      {
        label: 'Database tool',
        href: '/research/offsets-db',
      },
      {
        label: 'Update blog post',
        href: 'https://carbonplan.org/blog/offsetsdb-project-geometries',
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
