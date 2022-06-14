import { Box, Flex } from 'theme-ui'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { Row, Column, Link, LinkGroup, Tag } from '@carbonplan/components'
import { mix } from '@theme-ui/color'
import Date from './date'

const Publication = ({ info, first }) => {
  let { title, href, journal, color, date, summary, links } = info

  const hoverColor = color ? 'text' : 'secondary'
  color = color || 'text'

  if (color == 'secondary') {
    color = mix('primary', 'background', 0.65)
  }

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
        mb: [3, 5, 6, 6],
      }}
    >
      <Flex sx={{ justifyContent: 'space-between', mb: [3, 3, 2] }}>
        <Date date={date} />
        <Box
          sx={{
            mb: [1],
            mt: ['-8px', '-8px', '-4px', '-3px'],
            textAlign: 'right',
          }}
        >
          {journal ? (
            <Tag
              sx={{
                color: 'secondary',
                lineHeight: 1.8,
                display: 'initial',
                width: 'fit-content',
              }}
            >
              {journal}
            </Tag>
          ) : (
            <Box sx={{ height: ['0px', '0px', '25.2px', '28.8px'] }} />
          )}
        </Box>
      </Flex>

      <Box
        sx={{
          mb: ['14px', '15px', '12px', '14px'],
          ml: ['-1px'],
          mt: journal && ['-3px'],
          lineHeight: 1.1,
          fontFamily: 'heading',
          fontSize: [4, 4, 4, 5],
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
                color: hoverColor,
              },
            },
            '@media (hover: none) and (pointer: coarse)': {
              '&:hover': {
                color: color || 'text',
              },
            },
          }}
          tabIndex='-1'
          href={href}
          tracking
        >
          {title}
        </Link>
      </Box>
      <Box sx={{ fontSize: [2, 2, 2, 3] }}>{summary}</Box>

      {links && (
        <LinkGroup
          inverted
          tracking
          members={links}
          sx={{ mt: '14px', mb: '2px' }}
        />
      )}
    </Box>
  )
}

const Publications = ({ items }) => {
  const index = useBreakpointIndex({ defaultIndex: 2 })

  return (
    <Row columns={[6, 8, 7, 7]}>
      <Column start={[1, 1, 1, 1]} width={[6, 8, 3, 3]}>
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
        <Column start={[1, 1, 5, 5]} width={[6, 8, 3, 3]}>
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
