import { Box, Divider } from 'theme-ui'
import { Button, Row, Column } from '@carbonplan/components'
import { Down } from '@carbonplan/icons'
import Highlight from './highlight'
import { TonYear } from './highlight-images'

const HIGHLIGHTS = {
  small: {
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
  large: [
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
  ],
}

const SECTIONS = ['tools', 'articles', 'publications', 'comments']

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
    borderStyle: 'solid',
    borderColor: 'muted',
    borderWidth: '0px',
    borderTopWidth: ['1px', '1px', '0px'],
    borderLeftWidth: ['0px', '0px', '1px', '1px'],
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

const Highlights = () => {
  return (
    <>
      <Row>
        <Column start={[1, 1, 2, 2]} width={[6, 8, 3, 3]}>
          <Box sx={sx.heading}>Latest</Box>
        </Column>
        <Column start={[1, 1, 6, 6]} width={[6, 8, 6, 6]}>
          <Box
            sx={{
              ...sx.heading,
              display: ['none', 'none', 'inherit', 'inherit'],
            }}
          >
            Highlights
          </Box>
        </Column>
      </Row>
      <Row sx={{ mb: [0, 0, 5, 5] }}>
        <Column start={[1, 1, 2, 2]} width={[6, 8, 3, 3]}>
          {SECTIONS.map((section) => (
            <Box
              key={section}
              sx={{
                borderStyle: 'solid',
                borderColor: 'muted',
                borderWidth: '0px',
                borderBottomWidth: '1px',
                mb: [3, 3, 3, 4],
              }}
            >
              <Button
                href={`#${section}`}
                sx={{ ...sx.heading, my: [3, 3, 3, 4], color: 'secondary' }}
                suffix={<Down />}
              >
                {section}
              </Button>
            </Box>
          ))}

          <Box
            sx={{
              ...sx.heading,
              display: ['inherit', 'inherit', 'none', 'none'],
            }}
          >
            Highlights
          </Box>

          <Highlight {...HIGHLIGHTS.small} sx={{ mt: [0, 0, 5, 6] }} />
        </Column>

        <Column start={[1, 1, 6, 6]} width={[6, 8, 6, 6]} sx={sx.columnDivider}>
          <Highlight {...HIGHLIGHTS.large[0]} />

          <Divider />

          <Highlight {...HIGHLIGHTS.large[1]} sx={{ pb: [0, 0, 0, 0] }} />

          <Divider sx={{ display: ['inherit', 'inherit', 'none', 'none'] }} />
        </Column>
      </Row>
    </>
  )
}

export default Highlights
