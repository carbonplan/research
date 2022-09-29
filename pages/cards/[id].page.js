import { Box, Flex, Text } from 'theme-ui'
import { useEffect, useRef, useState } from 'react'
import { Monogram, formatDate } from '@carbonplan/components'

import { commentaryMetadata } from '../../utils/mdx'

const Card = ({ title, authors, date, color }) => {
  const [lines, setLines] = useState(0)
  const titleText = useRef(null)

  useEffect(() => {
    setLines(Math.round(titleText.current?.offsetHeight / 67))
  }, [])

  return (
    <Flex
      sx={{
        flexDirection: 'row',
        px: ['78px'],
        py: [7],
        height: '100vh',
        width: '100vw',
        justifyContent: 'space-between',
      }}
    >
      <Flex sx={{ flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
          <Box
            sx={{
              color: 'secondary',
              fontFamily: 'faux',
              letterSpacing: 'smallcaps',
              fontSize: [5],
              mb: [3],
              mt: '-10px',
            }}
          >
            commentary / carbonplan
          </Box>
          <Box
            as='h1'
            variant='styles.h1'
            ref={titleText}
            sx={{
              maxWidth: '800px',
              fontSize: '70px',
              mt: ['42px', '42px', '42px', '42px'],
            }}
          >
            {title}
          </Box>
        </Box>
        <Box
          id={lines === 0 ? 'initial-authors' : 'final-authors'}
          sx={{
            fontFamily: 'mono',
            letterSpacing: 'mono',
            textTransform: 'uppercase',
            color: 'secondary',
            fontSize: [5],
            mb: '-6px',
          }}
        >
          {authors.map((a, i) => (
            <Box
              key={a}
              sx={{
                display: lines >= 4 && i > 0 ? 'inline-block' : 'block',
                color,
              }}
            >
              {a.name ?? a}

              {i < authors.length - 1 && (
                <Box as='span' sx={{ color: 'primary', mx: [3] }}>
                  +
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Flex>

      <Box sx={{ flex: '1 0 64px' }} />

      <Flex sx={{ flexDirection: 'column', justifyContent: 'space-between' }}>
        <Monogram
          sx={{ width: 160, display: 'block', mt: '-19px', mr: '-10px' }}
        />

        <Text
          sx={{
            fontFamily: 'mono',
            letterSpacing: 'mono',
            textTransform: 'uppercase',
            color: 'secondary',
            fontSize: [5],
            writingMode: 'vertical-rl',
            whiteSpace: 'nowrap',
            display: 'inline-block',
            overflow: 'visible',
            mr: '-12px',
          }}
        >
          {formatDate(date, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Card

export async function getStaticPaths() {
  const paths = commentaryMetadata.map((commentary) => ({
    params: { id: commentary.id },
  }))

  const isDev =
    process.env.VERCEL_ENV === 'preview' ||
    process.env.NODE_ENV === 'development'

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths: isDev ? paths : [], fallback: false }
}

export async function getStaticProps({ params }) {
  const commentary = commentaryMetadata.find((p) => p.id === params.id)
  const { title, authors, date, color } = commentary

  // Pass commentary data to the page via props
  return { props: { title, authors, date, color } }
}
