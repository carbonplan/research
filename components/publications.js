import { Box, Flex } from 'theme-ui'
import { Row, Column, Link, LinkGroup, Tag } from '@carbonplan/components'
import { mix } from '@theme-ui/color'
import Date from './date'

const Publication = ({ info, start }) => {
  let { title, journal, color, date, summary, links, primaryLink } = info

  color = color || 'text'

  if (color == 'secondary') {
    color = mix('primary', 'background', 0.6)
  }

  const linkIndex = primaryLink ? primaryLink + 1 : 0

  return (
    <Column
      start={start}
      width={[6, 6, 3, 3]}
      sx={{
        borderStyle: 'solid',
        borderColor: 'muted',
        borderWidth: '0px',
        borderTopWidth: ['1px', '1px', '0px'],
        borderLeftWidth: ['0px', '0px', '1px', '1px'],
        pl: [0, 5, 5, 6],
        ml: [0, -5, -5, -6],
        pt: [4, 5, 0, 0],
        mb: [3, 5, 5, 6],
      }}
    >
      <Flex
        sx={{
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Flex sx={{ justifyContent: 'space-between', mb: 2 }}>
            <Date date={date} />
            {journal && (
              <Tag sx={{ color: 'secondary', textAlign: 'right' }}>
                {journal}
              </Tag>
            )}
          </Flex>

          <Box
            sx={{
              mb: ['14px'],
              ml: ['-1px'],
              lineHeight: 'heading',
              fontFamily: 'heading',
              fontSize: [3, 4, 4, 5],
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
        </Box>

        <Box>
          <LinkGroup
            inverted
            tracking
            members={links}
            spacing={[4, 4, 4, 5]}
            sx={{ mt: '14px', mb: '2px' }}
          />
        </Box>
      </Flex>
    </Column>
  )
}

const Publications = ({ items }) => {
  return (
    <Row columns={[6, 8, 7, 7]}>
      {items.map((d, i) => (
        <Publication
          key={d.title}
          info={d}
          start={i % 2 ? [1, 2, 5, 5] : [1, 2, 1, 1]}
        />
      ))}
    </Row>
  )
}

export default Publications
