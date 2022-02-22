import { Box, Flex } from 'theme-ui'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { Row, Column, Link, LinkGroup, Tag } from '@carbonplan/components'
import { mix } from '@theme-ui/color'
import Date from './date'

const Publication = ({ info, first }) => {
  let { title, journal, color, date, summary, links, primaryLink } = info

  color = color || 'text'

  if (color == 'secondary') {
    color = mix('primary', 'background', 0.6)
  }

  const linkIndex = primaryLink ? primaryLink + 1 : 0

  return (
    <Box
      sx={{
        borderStyle: 'solid',
        borderColor: 'muted',
        borderWidth: '0px',
        borderTopWidth: first ? 0 : ['1px', '1px', '0px'],
        borderLeftWidth: ['0px', '0px', '1px', '1px'],
        pl: [0, 5, 5, 6],
        ml: [0, -5, -5, -6],
        pt: first ? 0 : [4, 5, 0, 0],
        mb: [3, 5, 5, 6],
      }}
    >
      <Flex sx={{ justifyContent: 'space-between', mb: 2 }}>
        <Date date={date} />
        {journal && (
          <Tag sx={{ color: 'secondary', textAlign: 'right' }}>{journal}</Tag>
        )}
      </Flex>

      <Box
        sx={{
          mb: ['14px'],
          ml: ['-1px'],
          lineHeight: 'heading',
          fontFamily: 'heading',
          fontSize: [4, 5, 4, 5],
          color: color,
        }}
      >
        <Link
          sx={{
            transition: 'color 0.15s',
            textDecoration: 'none',
            color: color,
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover': {
                color: 'primary',
              },
            },
            '@media (hover: none) and (pointer: coarse)': {
              '&:hover': {
                color: color,
              },
            },
          }}
          tabIndex='-1'
          href={links[linkIndex].href}
          tracking
        >
          {title}
        </Link>
      </Box>
      {summary}

      <LinkGroup
        inverted
        tracking
        members={links}
        spacing={[4, 4, 4, 5]}
        sx={{ mt: '14px', mb: '2px' }}
      />
    </Box>
  )
}

const Publications = ({ items }) => {
  const index = useBreakpointIndex({ defaultIndex: 2 })

  return (
    <Row columns={[6, 8, 7, 7]}>
      <Column start={[1, 1, 1, 1]} width={[6, 8, 4, 3]}>
        {items
          .filter((d, i) => index < 2 || i % 2 === 0)
          .map((d, i) => (
            <Publication
              key={d.title}
              info={d}
              start={i % 2 ? [1, 2, 5, 5] : [1, 2, 1, 1]}
              first={i === 0}
            />
          ))}
      </Column>
      {index >= 2 && (
        <Column start={[1, 1, 5, 5]} width={[6, 6, 3, 3]}>
          {items
            .filter((d, i) => i % 2 === 1)
            .map((d, i) => (
              <Publication
                key={d.title}
                info={d}
                start={i % 2 ? [1, 2, 5, 5] : [1, 2, 1, 1]}
              />
            ))}
        </Column>
      )}
    </Row>
  )
}

export default Publications
