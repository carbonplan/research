import { forwardRef } from 'react'
import { Box, Divider } from 'theme-ui'
import Highlight from './highlight'
import { TonYear } from './highlight-images'

const HIGHLIGHTS = [
  {
    id: 'ton-year-explainer',
    date: '01-31-2022',
    title: 'Unpacking ton-year accounting',
    color: 'pink',
    summary:
      'Ton-year accounting is used to quantify the value of temporary carbon storage — a task for which we lack a clear intellectual framework. We explain how ton-year accounting methods work and highlight crucial differences between prominent ton-year accounting methods.',
    links: [
      { label: 'Read article', href: '/research/ton-year-explainer' },
      { label: 'Our critique of NCX’s methods', href: '/blog/ton-year-ncx' },
    ],
    logo: <TonYear />,
  },
  {
    id: 'ton-year-explainer',
    date: '01-31-2022',
    title: 'Unpacking ton-year accounting',
    color: 'pink',
    summary:
      'Ton-year accounting is used to quantify the value of temporary carbon storage — a task for which we lack a clear intellectual framework. We explain how ton-year accounting methods work and highlight crucial differences between prominent ton-year accounting methods.',
    links: [
      { label: 'Read article', href: '/research/ton-year-explainer' },
      { label: 'Our critique of NCX’s methods', href: '/blog/ton-year-ncx' },
    ],
    logo: <TonYear />,
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
        scrollMarginTop: [0, 0, '258px', '341px'],
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
        }}
      >
        Highlights
      </Box>

      <Box sx={{}}>
        <Highlight {...HIGHLIGHTS[0]} />

        <Highlight {...HIGHLIGHTS[1]} sx={{ pb: [0, 0, 0, 0] }} />
      </Box>
    </Box>
  )
})

export default Highlights
