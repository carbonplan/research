import { Box, Image, useColorMode } from 'theme-ui'
import { Button, LinkGroup, Row, Column, Link } from '@carbonplan/components'
import { RotatingArrow } from '@carbonplan/icons'
import Date from './date'

const highlightImageUrl = (id, mode) => {
  return `https://images.carbonplan.org/highlights/${id}-${mode}.png`
}

const Highlight = ({
  id,
  href,
  title,
  date,
  summary,
  color,
  links,
  logo,
  sx,
}) => {
  const [colorMode] = useColorMode()

  return (
    <Box
      sx={{
        pt: [4, 4, 0, 0],
        pb: [0, 0, 0, 0],
        mb: [0, 0, 7, 8],
        pl: [4, 5, 5, 6],
        ml: [-4, -5, -5, -6],
        borderLeft: ({ colors }) => [
          'none',
          'none',
          `solid 1px ${colors.muted}`,
          `solid 1px ${colors.muted}`,
        ],
        ...sx,
      }}
    >
      <Date date={date} sx={{ mb: [3, 3, 2] }} />
      <Box
        sx={{
          mb: ['14px', '14px', '14px', '14px'],
          ml: ['-1px'],
        }}
      >
        <Button
          href={href || `/research/${id}`}
          tracking
          suffix={
            <RotatingArrow
              color={'primary'}
              sx={{ width: [20, 20, 26, 36], height: [20, 20, 26, 36] }}
            />
          }
          size='md'
          sx={{
            lineHeight: 'heading',
            fontFamily: 'heading',
            fontSize: [4, 4, 5, 6],
          }}
        >
          {title}
        </Button>
      </Box>

      <Row columns={[6, 8, 7, 7]}>
        <Column start={[1]} width={[6, 8, 6, 6]}>
          <Box
            sx={{
              mb: [1],
              fontSize: [2, 2, 2, 3],
              lineHeight: 1.35,
            }}
          >
            {summary}
          </Box>
        </Column>
      </Row>
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
            sx={{ mt: '14px', mb: '2px' }}
          />
        </Box>
      </Box>
      <Row columns={6} sx={{ mt: [4, 5, 5, 6] }}>
        <Column start={1} width={6}>
          <Link href={href || `/research/${id}`}>
            <Image
              sx={{
                width: '100%',
                aspectRatio: '4 / 1',
                opacity: 1,
                transition: 'opacity 0.15s',
                '@media (hover: hover) and (pointer: fine)': {
                  '&:hover': {
                    opacity: 0.6,
                  },
                },
              }}
              src={
                colorMode === 'light'
                  ? highlightImageUrl(id, 'light')
                  : highlightImageUrl(id, 'dark')
              }
            />
          </Link>
        </Column>
      </Row>
    </Box>
  )
}

export default Highlight
