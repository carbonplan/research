import { Box, Link } from 'theme-ui'
import { Row, Column, Heading } from '@carbonplan/components'
import List from './list'
import Articles from './articles'
import Publications from './publications'

import {
  ForestOffsets,
  ForestRisks,
  CDRDatabase,
  PermanenceCalculator,
  DACCalculator,
  SoilProtocols,
} from './tool-logos'
import { articles, publications, comments } from '../contents/index'

const sx = {
  heading: {
    mb: [3, 3, 3, 4],
    fontSize: [3, 3, 3, 4],
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    color: 'primary',
  },
  highlight: {
    mb: [3, 3, 3, 4],
    fontSize: [3, 3, 3, 4],
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    color: 'secondary',
  },
  tool: {
    color: 'secondary',
    fontSize: [1, 1, 1, 2],
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    transition: 'opacity 0.15s',
  },
}

const tools = [
  {
    logo: <SoilProtocols />,
    color: 'orange',
    label: 'Soil Protocols',
    href: '/research/soil-protocols',
  },
  {
    logo: <ForestOffsets />,
    color: 'green',
    label: 'Forest Offsets',
    href: '/research/forest-offsets',
  },
  {
    logo: <ForestRisks />,
    color: 'red',
    label: 'Forest Risks',
    href: '/research/forest-risks',
  },
  {
    logo: <CDRDatabase />,
    color: 'gray',
    label: 'CDR Database',
    href: '/research/cdr-database',
  },
  {
    logo: <PermanenceCalculator />,
    color: 'pink',
    label: 'Permanence calculator',
    href: '/research/permanence-calculator',
  },
]

const Main = () => {
  return (
    <Box>
      <Heading
        description={
          <span>
            Articles, tools, and commentary on carbon
            <Box
              as='br'
              sx={{ display: ['none', 'initial', 'initial', 'initial'] }}
            />{' '}
            removal and climate solutions.
          </span>
        }
        descriptionStart={[1, 4, 6, 6]}
        descriptionWidth={[6, 5, 5, 5]}
      >
        Research
      </Heading>
      <Row sx={{ mb: [4, 5, 6, 7] }}>
        <Column start={[1, 1, 2, 2]} width={[5]}>
          <Box sx={sx.heading}>Tool highlights</Box>
        </Column>
        {tools.map((d, i) => {
          return (
            <Column
              key={i}
              start={[1 + (i % 2) * 3, 1 + i * 2, 2 + i * 2, 2 + i * 2]}
              width={[3, 2, 2, 2]}
              sx={{
                display: i < 4 ? 'block' : ['none', 'none', 'block', 'block'],
              }}
            >
              <Link
                href={d.href}
                sx={{
                  display: 'block',
                  mb: [4, 0, 0, 0],
                  textDecoration: 'none',
                  '@media (hover: hover) and (pointer: fine)': {
                    '&:hover > #logo': {
                      opacity: 0.7,
                    },
                    '&:hover > #tool': {
                      opacity: 0.7,
                    },
                  },
                }}
              >
                <Box
                  id='logo'
                  sx={{
                    opacity: 1,
                    position: 'relative',
                    width: '100%',
                    height: [
                      '150px',
                      '150px',
                      '125px',
                      'max(calc((2 * (100vw - 48px * 13) / 12 + 48px) * 3 / 5), 150px)',
                    ],
                    transition: 'opacity 0.15s',
                  }}
                >
                  <Box
                    sx={{
                      opacity: 0.5,
                      position: 'absolute',
                      bg: d.color,
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  />
                  {d.logo}
                </Box>
                <Box id='tool' sx={{ ...sx.tool, mt: [2, 2, 2, 3] }}>
                  {d.label}
                </Box>
              </Link>
            </Column>
          )
        })}
      </Row>

      <List label='Articles' items={articles} Entries={Articles} />
      <List label='Publications' items={publications} Entries={Publications} />
      <List label='Comment letters' items={comments} Entries={Publications} />
    </Box>
  )
}

export default Main
