import { forwardRef } from 'react'
import { Box, Divider } from 'theme-ui'
import Highlight from './highlight'

const HIGHLIGHTS = [
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
  {
    id: 'extreme-heat',
    date: '09-05-2023',
    href: '/research/extreme-heat-explainer',
    title: 'Modeling extreme heat',
    summary:
      'We developed a new dataset modeling the impacts of humid heat now and into the future, in collaboration with The Washington Post. Read the article or the coverage in The Post.',
    links: [
      {
        label: 'Explainer article',
        href: '/research/extreme-heat-explainer',
      },
      {
        label: 'Press coverage #1',
        href: 'https://www.washingtonpost.com/climate-environment/interactive/2023/extreme-heat-wet-bulb-globe-temperature/',
      },
      {
        label: 'Press coverage #2',
        href: 'https://www.washingtonpost.com/climate-environment/interactive/2023/pakistan-extreme-heat-health-impacts-death/',
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
