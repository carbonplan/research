import { useMemo, useState } from 'react'
import { Box, Link, Divider } from 'theme-ui'
import { Row, Column, Tray, Group, Filter } from '@carbonplan/components'
import List from './list'
import Heading from './heading'
import {
  ForestOffsets,
  ForestRisks,
  CDRDatabase,
  PermanenceCalculator,
  DACCalculator,
  SoilProtocols,
} from './tool-logos'

const sx = {
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

const initCategory = {
  article: true,
  tool: true,
  comment: true,
  publication: true,
  dataset: true,
}

const initYear = {
  2020: true,
  2021: true,
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

const Main = ({ expanded, contents }) => {
  const [category, setCategory] = useState(initCategory)
  const [year, setYear] = useState(initYear)

  const items = useMemo(
    () =>
      contents.filter(
        (d) =>
          d.tags.some((t) => category[t]) &&
          year[new Date(d.date.replace(/-/g, '/')).getFullYear()]
      ),

    [category, year]
  )

  const FilterContents = () => {
    return (
      <Group spacing='md'>
        <Filter
          values={year}
          setValues={setYear}
          label='Filter by year'
          showAll
        />
        <Filter
          values={category}
          setValues={setCategory}
          label='Filter by category'
          showAll
        />
      </Group>
    )
  }

  return (
    <Box sx={{ mb: [8, 8, 9, 10] }}>
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
      >
        Research
      </Heading>
      <Tray expanded={expanded}>
        <FilterContents />
      </Tray>
      <Row sx={{ mb: [4, 5, 6, 7] }}>
        <Column start={[1, 1, 2, 2]} width={[5]}>
          <Box sx={sx.highlight}>Tool highlights</Box>
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
      <Row>
        <Column start={[1, 1, 2, 2]} width={[6, 8, 10, 10]}>
          <Divider
            sx={{
              mt: [0],
              mb: [4, 5, 6, 7],
              display: ['none', 'block', 'block', 'block'],
            }}
          />
        </Column>
      </Row>
      <Row sx={{ mb: [0] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 6, 2, 2]}
          sx={{ display: ['none', 'none', 'initial', 'intial'] }}
        >
          <Box
            sx={{
              position: 'sticky',
              top: ['106px', '106px', '106px', '120px'],
              height: 'auto',
            }}
          >
            <FilterContents />
          </Box>
        </Column>
        <Column
          start={[1, 2, 5, 5]}
          width={[6, 7, 7, 7]}
          sx={{ mt: ['-3px', '0px', '-1px', '0px'] }}
        >
          <List items={items} />
        </Column>
      </Row>
    </Box>
  )
}

export default Main
