import { forwardRef } from 'react'
import { Box, Divider } from 'theme-ui'
import Highlight from './highlight'

const HIGHLIGHTS = [
  {
    id: 'oae-efficiency',
    date: '10-15-2024',
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
        label: 'Paper (in press)',
        href: 'https://doi.org/10.21203/rs.3.rs-4124909/v1',
      },
      {
        label: 'Dataset',
        href: 'https://beta.source.coop/repositories/cworthy/oae-efficiency-atlas/description/',
      },
    ],
  },
  {
    id: 'climate-risk-comparison',
    date: '08-09-2024',
    href: '/research/climate-risk-comparison',
    title: 'Climate risk companies don’t always agree',
    summary:
      'Climate analytics companies agree that climate change is increasing risks, but analysis shows that at the level of individual addresses their estimates differ.',
    links: [
      {
        label: 'Explainer article',
        href: '/research/climate-risk-comparison',
      },
      {
        label: 'Press coverage #1',
        href: 'https://www.bloomberg.com/news/articles/2024-08-09/clashing-risk-predictions-cast-doubt-on-black-box-climate-models?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTcyMzIxOTI5MiwiZXhwIjoxNzIzODI0MDkyLCJhcnRpY2xlSWQiOiJTSFlLR0JEV1gyUFMwMCIsImJjb25uZWN0SWQiOiJGMkY1NTFERTc4ODA0RkJBOTk5NEFBMTQ5RTM1NjQ3RCJ9.EbJ-4RSfCLQYocKlLXB1r7Qbo_KKYYNHtobrtIELL_g',
      },
      {
        label: 'Press coverage #2',
        href: 'https://www.bloomberg.com/graphics/2024-flood-fire-climate-risk-analytics/?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTcyMzIxOTgwOCwiZXhwIjoxNzIzODI0NjA4LCJhcnRpY2xlSWQiOiJTSFlLR0VEV1gyUFMwMCIsImJjb25uZWN0SWQiOiI5RjJFMEMxNDRGQkY0Q0M1OUJCRDA3MzQ0QkI2RUZDNCJ9.v2mR0nS7tJbnNJ23UVEKn98Ev917FWYgcoWm7TttUJ4',
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
