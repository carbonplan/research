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

const Article = ({ info, first }) => {
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
    color = mix('primary', 'background', 0.7)
  }

  const linkIndex = primaryLink ? primaryLink + 1 : 0

  return (
    <Box
      sx={{
        my: [0, 0, 6, 7],
        py: [4, 5, 0, 0],
        borderStyle: 'solid',
        borderColor: 'muted',
        borderWidth: '0px',
        pt: first ? [0, 0, 0, 0] : undefined,
        mt: first ? [0, 0, 0, 0] : undefined,
        borderTopWidth: first ? 0 : ['1px', '1px', 0, 0],
        borderLeftWidth: ['0px', '0px', '1px', '1px'],
        pl: [0, 0, 5, 6],
        ml: [0, 0, -5, -6],
      }}
    >
      <Row columns={[6, 8, 7, 7]}>
        <Column start={1} width={[6, 6, 2, 2]} sx={{ mb: [3, 3, 2] }}>
          <Date date={date} />
        </Column>
        <Column start={1} width={[4, 5, 5, 5]}>
          <Box
            sx={{
              mb: ['8px', '15px', '14px', '14px'],
              ml: ['-1px'],
              lineHeight: 'heading',
              fontFamily: 'heading',
              fontSize: [4, 4, 5, 6],
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

          <Inner
            summary={summary}
            links={links}
            sx={{ display: ['none', 'inherit', 'inherit', 'inherit'] }}
          />
        </Column>

        <Column
          start={[5, 7, 7, 6]}
          width={2}
          sx={{ textAlign: 'right', mt: [-5, 0] }}
        >
          <Link tabIndex='-1' href={links[linkIndex].href} tracking>
            <Icon icon={icon} color={color} />
          </Link>
        </Column>

        <Column
          start={1}
          width={6}
          sx={{
            display: ['inherit', 'none', 'none', 'none'],
          }}
        >
          <Inner summary={summary} links={links} />
        </Column>
      </Row>
    </Box>
  )
}

const Articles = ({ items }) => {
  return (
    <Box>
      {items.map((d, i) => (
        <Article key={d.title} info={d} first={i == 0} />
      ))}
    </Box>
  )
}

export default Articles
