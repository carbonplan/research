import { forwardRef } from 'react'
import { Box, Divider } from 'theme-ui'
import Highlight from './highlight'

const HIGHLIGHTS = [
  {
    id: 'cdr-verification',
    date: '09-19-2022',
    href: '/research/cdr-verification',
    title: 'CDR verification framework',
    summary:
      'We developed an interactive tool to map quantification capacity and uncertainty across CDR pathways. Read this article, explore the interactive tool, or read Frontier’s post to learn more.',
    links: [
      { label: 'Interactive tool', href: '/research/cdr-verification' },
      {
        label: 'Explainer article',
        href: '/research/cdr-verification-explainer',
      },
      {
        label: 'Methods',
        href: '/research/cdr-verification-methods',
      },
      {
        label: 'Frontier post',
        href: 'http://frontierclimate.com/writing/quantifying-delivered-cdr',
      },
    ],
  },
  {
    id: 'cmip6-downscaling',
    date: '06-30-2022',
    title: 'CMIP6 downscaling',
    summary:
      'Downscaled datasets form the basis of climate impacts and risk analysis. We released new globally downscaled climate datasets spanning multiple downscaling methods, alongside an interactive map tool, an explainer article, and a policy brief.',
    href: '/research/cmip6-downscaling',
    links: [
      { label: 'Map tool', href: '/research/cmip6-downscaling' },
      {
        label: 'Explainer article',
        href: '/research/cmip6-downscaling-explainer',
      },
      {
        label: 'Policy brief',
        href: '/research/data-financial-risk',
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
