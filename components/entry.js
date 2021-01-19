import { memo } from 'react'
import { Box, Grid, Text, Link, Heading } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Tag } from '@carbonplan/components'
import Icon from './icon'

const Entry = ({ info, final }) => {
  let {
    title,
    color,
    tags,
    authors,
    version,
    date,
    icon,
    summary,
    links,
  } = info

  color = color || 'text'

  return (
    <Box sx={{}}>
      <Box
        id='box'
        sx={{
          pt: [4, 4, 4],
          pb: [4, 4, 4],
          borderStyle: 'solid',
          borderColor: 'muted',
          borderWidth: '0px',
          borderBottomWidth: final ? '0px' : '1px',
          color: 'text',
        }}
      >
        <Grid
          id='grid'
          columns={[
            1,
            icon ? '500px 1fr' : '550p 1fr',
            icon ? '500px 1fr' : '550px 1fr',
          ]}
          gap={[0, 0, 16]}
        >
          <Box sx={{ mb: ['-3px'] }}>
            <Text
              sx={{
                color: 'secondary',
                fontFamily: 'mono',
                letterSpacing: '0.05em',
                fontSize: [2],
                userSelect: 'none',
              }}
            >
              {date}{' '}
              <Text
                as='span'
                sx={{
                  color: 'text',
                  fontFamily: 'mono',
                  letterSpacing: '0.05em',
                  fontSize: [2],
                }}
              >
                /
              </Text>{' '}
              v{version}
            </Text>
            <Heading
              sx={{
                mb: ['2px'],
                mt: ['10px'],
                ml: ['-1px'],
                fontSize: [5],
                color: color,
              }}
            >
              {title}
            </Heading>
            <Text
              sx={{
                textTransform: 'uppercase',
                letterSpacing: 'faux',
                fontFamily: 'faux',
                fontSize: [2],
                mt: ['10px'],
                color: 'text',
              }}
            >
              {authors.map((author, ix) => (
                <Text
                  as='span'
                  key={author}
                  sx={{
                    fontFamily: 'faux',
                    letterSpacing: 'faux',
                    fontSize: [2],
                    mr: [0],
                    color: 'text',
                  }}
                >
                  {author}{' '}
                  {ix < info.authors.length - 1 ? (
                    <Text as='span' sx={{ color: 'text' }}>
                      {' '}
                      +{' '}
                    </Text>
                  ) : (
                    ''
                  )}
                </Text>
              ))}
            </Text>
            <Text sx={{ my: [2], fontSize: [2] }}>{summary}</Text>
            <Box sx={{ mt: [2], fontSize: [2] }}>
              {links.map((link, ix) => {
                return (
                  <WrappedLink key={ix} url={link.url}>
                    <Text
                      as='span'
                      sx={{
                        color: 'secondary',
                        mr: [3],
                        cursor: 'pointer',
                        transition: '0.15s',
                        '&:hover': {
                          color: 'text',
                        },
                      }}
                    >
                      {link.label}
                      <Text
                        as='span'
                        sx={{
                          position: 'relative',
                          top: '4px',
                          ml: [1],
                          fontSize: [4],
                        }}
                      >
                        ↗
                      </Text>
                    </Text>
                  </WrappedLink>
                )
              })}
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                textAlign: 'right',
                display: ['none', 'none', 'block'],
              }}
            >
              {tags
                .sort((a, b) => (a > b ? 1 : -1))
                .map((tag) => (
                  <Tag
                    key={tag}
                    label={tag}
                    sx={{
                      ml: [2],
                      mr: [0],
                      color: 'secondary',
                    }}
                  />
                ))}
            </Box>
            {icon && <Icon icon={icon} color={color} />}
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

function WrappedLink({ url, children }) {
  if (url.startsWith('/research')) {
    return (
      <NextLink href={url} passHref={true}>
        <Link sx={{ textDecoration: 'none' }}>{children}</Link>
      </NextLink>
    )
  } else {
    return (
      <Link sx={{ textDecoration: 'none' }} href={url}>
        {children}
      </Link>
    )
  }
}

export default memo(Entry)
