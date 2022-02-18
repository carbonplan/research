import { Box } from 'theme-ui'
import { Row, Column, Link, LinkGroup } from '@carbonplan/components'
import { mix } from '@theme-ui/color'
import Icon from './icon'
import Date from './date'

const Inner = ({ summary, links, sx }) => (
  <Box sx={sx}>
    <Box
      sx={{
        mt: [2],
        mb: [1],
        fontSize: [2, 2, 2, 3],
        lineHeight: 1.35,
      }}
    >
      {summary}
    </Box>
    <Box
      sx={{
        mt: ['12px'],
        fontSize: [2, 2, 2, 3],
        userSelect: 'none',
      }}
    >
      <Box sx={{ mb: [-1] }}>
        <LinkGroup
          inverted
          tracking
          members={links}
          spacing={[4, 4, 4, 5]}
          sx={{ mt: '14px', mb: '2px' }}
        />
      </Box>
    </Box>
  </Box>
)

const Article = ({ info, first, final }) => {
  let {
    indexTitle,
    title,
    color,
    tags,
    date,
    icon,
    summary,
    links,
    primaryLink,
  } = info

  color = color || 'text'

  if (color == 'secondary') {
    color = mix('primary', 'background', 0.6)
  }

  const linkIndex = primaryLink ? primaryLink + 1 : 0

  return (
    <Box
      id='box'
      sx={{
        pb: final ? [2, 3, 4, 5] : [4, 6, 6, 7],
        pt: first ? [4, 0] : [4, 5, 6, 7],
        borderStyle: 'solid',
        borderColor: 'muted',
        borderWidth: '0px',
        borderTopWidth: first ? ['1px', '0px'] : '1px',
      }}
    >
      <Row columns={[6, 8, 8, 7]}>
        <Column
          start={[3, 1, 1, 1]}
          width={[2, 2, 2, 2]}
          sx={{
            order: [4, 4, 1, 1],
            display: ['none', 'none', 'inherit', 'inherit'],
            mb: 2,
          }}
        >
          <Date date={date} />
        </Column>
        <Column
          start={[3, 3, 1, 1]}
          width={[4, 5, 5, 5]}
          sx={{ order: [2, 2, 2, 2] }}
        >
          <Box
            sx={{
              mb: ['14px'],
              ml: ['-1px'],
              lineHeight: 'heading',
              fontFamily: 'heading',
              fontSize: [4, 5, 5, 6],
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
              {indexTitle || title}
            </Link>
          </Box>

          <Date
            date={date}
            sx={{ display: ['inherit', 'inherit', 'none', 'none'] }}
          />

          <Inner
            summary={summary}
            links={links}
            sx={{ display: ['none', 'inherit', 'inherit', 'inherit'] }}
          />
        </Column>

        <Column
          start={1}
          width={6}
          sx={{
            order: [3, 3, 4, 4],
            display: ['inherit', 'none', 'none', 'none'],
          }}
        >
          <Inner summary={summary} links={links} />
        </Column>

        <Column
          start={[1, 1, 7, 6]}
          width={[2, 2, 2, 2]}
          sx={{ order: [1, 1, 3, 3] }}
        >
          <Link tabIndex='-1' href={links[linkIndex].href} tracking>
            <Icon icon={icon} color={color} />
          </Link>
        </Column>
      </Row>
    </Box>
  )
}

const Articles = ({ items }) => {
  return (
    <Box>
      {items.map((d, i) => (
        <Article
          key={d.title}
          info={d}
          first={i == 0}
          final={i === items.length - 1}
        />
      ))}
    </Box>
  )
}

export default Articles
