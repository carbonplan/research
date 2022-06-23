import { Box, Flex } from 'theme-ui'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { Row, Column, Link, LinkGroup, Tag } from '@carbonplan/components'
import { mix } from '@theme-ui/color'
import Date from './date'

const Item = ({ info, first, type }) => {
  let { title, href, color, date, summary, links, id } = info

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
          <Tag
            sx={{
              color: 'secondary',
              lineHeight: 1.8,
              display: ['initial', 'initial', 'none', 'none'],
              width: 'fit-content',
            }}
          >
            {type === 'letter' ? 'Comment Letter' : 'Policy Brief'}
          </Tag>
          <Box sx={{ height: ['0px', '0px', '25.2px', '28.8px'] }} />
        </Box>
      </Flex>

      <Box
        sx={{
          mb: ['14px', '15px', '12px', '14px'],
          ml: ['-1px'],
          mt: ['-3px'],
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
          href={id ? `/research/${id}` : href}
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

const Letter = ({ info, first }) => {
  let { title, href, color, date, links } = info

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
      <Date date={date} sx={{ mb: [3, 3, 2] }} />

      <Box
        sx={{
          mb: ['14px', '15px', '12px', '14px'],
          ml: ['-1px'],
          fontSize: [2, 2, 2, 3],
        }}
      >
        <Link
          sx={{
            transition: 'color 0.15s',
            textDecoration: 'none',
            color: 'primary',
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover': {
                color: 'secondary',
              },
            },
            '@media (hover: none) and (pointer: coarse)': {
              '&:hover': {
                color: 'secondary',
              },
            },
          }}
          tabIndex='-1'
          href={href}
          tracking
        >
          <Box>{title}</Box>
        </Link>
      </Box>

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

const Commentary = ({ items, commentaryExpander, commentsExpander }) => {
  const index = useBreakpointIndex({ defaultIndex: 2 })

  return (
    <Row columns={[6, 8, 7, 7]}>
      <Column start={[1, 1, 1, 1]} width={[6, 8, 4, 4]}>
        <Box
          sx={{
            color: 'secondary',
            fontFamily: 'mono',
            letterSpacing: '0.05em',
            fontSize: [1, 1, 1, 2],
            textTransform: 'uppercase',
            display: ['none', 'none', 'block', 'block'],
            mb: [0, 0, 4, 5],
          }}
        >
          Policy Briefs
        </Box>

        {items
          .filter((d) => index < 2 || d.type === 'commentary')
          .map((d, i) => (
            <Item
              key={d.title}
              info={d}
              start={[1, 2, 1, 1]}
              first={i === 0}
              type={d.type}
            />
          ))}

        {commentaryExpander}
      </Column>
      {index >= 2 && (
        <Column start={[1, 1, 6, 6]} width={[6, 8, 2, 2]}>
          <Box
            sx={{
              color: 'secondary',
              fontFamily: 'mono',
              letterSpacing: '0.05em',
              fontSize: [1, 1, 1, 2],
              textTransform: 'uppercase',
              mb: [0, 0, 4, 5],
            }}
          >
            Comment Letters
          </Box>
          {items
            .filter((d) => d.type === 'letter')
            .map((d) => (
              <Letter key={d.title} info={d} start={[1, 2, 1, 1]} />
            ))}

          {commentsExpander}
        </Column>
      )}
    </Row>
  )
}

export default Commentary
