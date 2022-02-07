import { memo } from 'react'
import { Box, Paragraph, Grid, Text, Heading } from 'theme-ui'
import {
  Row,
  Column,
  Tag,
  Link,
  Button,
  LinkGroup,
  formatDate,
} from '@carbonplan/components'
import { RotatingArrow } from '@carbonplan/icons'
import { mix } from '@theme-ui/color'
import Icon from './icon'

const Entry = ({ info, first, final }) => {
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
    <Box sx={{}}>
      <Box
        id='box'
        sx={{
          pb: final ? [2, 3, 4, 5] : [4, 6, 6, 7],
          pt: [4, 0, 0, 0],
          borderStyle: 'solid',
          borderColor: 'muted',
          borderWidth: '0px',
          borderTopWidth: [first ? '1px' : '0px', '0px', '0px', '0px'],
          borderBottomWidth: [final ? '0px' : '1px', '0px', '0px'],
          color: 'text',
        }}
      >
        <Row id='grid' columns={[6, 7, 7, 7]}>
          <Column
            start={[1]}
            width={[2]}
            sx={{ display: ['initial', 'none', 'none', 'none'] }}
          >
            {icon && (
              <Link href={links[linkIndex].href} tracking>
                <Icon icon={icon} color={color} />
              </Link>
            )}
          </Column>
          <Column
            start={[3, 1, 2, 2]}
            width={[4, 4, 4, 4]}
            sx={{
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderLeftWidth: ['0px', '1px', '1px', '1px'],
              pl: [0, 5, 5, 6],
              ml: [0, -5, -5, -6],
            }}
          >
            <Box
              sx={{
                color: 'secondary',
                fontFamily: 'mono',
                letterSpacing: '0.05em',
                fontSize: [1, 1, 1, 2],
                userSelect: 'none',
                textTransform: 'uppercase',
                display: ['none', 'block', 'block', 'block'],
              }}
            >
              {formatDate(date)}{' '}
            </Box>
            <Box
              sx={{
                mb: ['14px'],
                mt: ['-5px', '10px', '10px', '10px'],
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
            <Box
              sx={{
                color: 'secondary',
                fontFamily: 'mono',
                letterSpacing: '0.05em',
                fontSize: [1, 1, 1, 2],
                userSelect: 'none',
                textTransform: 'uppercase',
                display: ['block', 'none', 'none', 'none'],
              }}
            >
              {formatDate(date)}{' '}
            </Box>
            <Box
              sx={{
                mt: [2],
                mb: [1],
                fontSize: [2, 2, 2, 3],
                lineHeight: 1.35,
                display: ['none', 'block', 'block', 'block'],
              }}
            >
              {summary}
            </Box>
            <Box
              sx={{
                mt: ['12px'],
                fontSize: [2, 2, 2, 3],
                userSelect: 'none',
                display: ['none', 'block', 'block', 'block'],
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
          </Column>
          <Column
            start={[1, 5, 6, 6]}
            width={[4, 2, 2, 2]}
            sx={{ display: ['none', 'block', 'block'] }}
          >
            <Box
              sx={{
                textAlign: 'right',
                mt: ['-3px', '-3px', '-3px', '-1px'],
              }}
            >
              {tags
                .sort((a, b) => (a > b ? 1 : -1))
                .map((tag) => (
                  <Tag
                    key={tag}
                    sx={{
                      ml: [2],
                      mb: ['5px'],
                      color: 'secondary',
                    }}
                  >
                    {tag}
                  </Tag>
                ))}
            </Box>
            {icon && (
              <Link tabIndex='-1' href={links[linkIndex].href} tracking>
                <Icon icon={icon} color={color} />
              </Link>
            )}
          </Column>
        </Row>
        <Box sx={{ display: ['initial', 'none', 'none', 'none'] }}>
          <Box sx={{ my: [3], fontSize: [2, 2, 2, 3], lineHeight: 1.35 }}>
            {summary}
          </Box>
          <Box sx={{ mt: [3], display: 'block' }}>
            <LinkGroup
              inverted
              tracking
              members={links}
              spacing={[4, 4, 4, 5]}
              sx={{ mt: '18px', mb: '-2px' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default memo(Entry)
