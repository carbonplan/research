import { Box, Flex, Link } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'

const sx = {
  tool: {
    color: 'secondary',
    fontSize: [1, 1, 1, 2],
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    transition: 'opacity 0.15s',
  },
}

const Tool = ({ info, start }) => {
  const { color, id, logo, title, summary } = info
  return (
    <Column start={start} width={[3, 2, 2, 2]} sx={{ mb: [3, 5, 5, 6] }}>
      <Link
        href={`/research/${id}`}
        sx={{
          display: 'block',
          mb: [4, 0, 0, 0],
          textDecoration: 'none',
          pl: [4, 5, 5, 6],
          ml: [-4, -5, -5, -6],
          borderLeft: ({ colors }) => [
            'none',
            'none',
            `solid 1px ${colors.muted}`,
            `solid 1px ${colors.muted}`,
          ],
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover > #logo': {
              opacity: 0.7,
            },
            '&:hover > #tool': {
              opacity: 0.7,
            },
            '&:hover > #summary': {
              opacity: 0.7,
            },
          },
        }}
      >
        <Box
          id='logo'
          sx={{
            opacity: 1,
            position: 'relative',
            width: '100%',
            height: [
              '150px',
              '150px',
              '125px',
              'max(calc((2 * (100vw - 48px * 13) / 12 + 48px) * 3 / 5), 150px)',
            ],
            transition: 'opacity 0.15s',
          }}
        >
          {['warm'].includes(color) && (
            <Box
              sx={{
                opacity: 0.5,
                position: 'absolute',
                backgroundImage: ({ colors }) =>
                  `linear-gradient(to top right, ${colors.purple}, ${colors.pink}, ${colors.red}, ${colors.orange}, ${colors.yellow})`,
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
              }}
            />
          )}
          {!['warm'].includes(color) && (
            <Box
              sx={{
                opacity: 0.5,
                position: 'absolute',
                bg: color,
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
              }}
            />
          )}
          <Flex
            sx={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              '& svg': { width: '100%' },
            }}
          >
            {logo}
          </Flex>
        </Box>
        <Box id='tool' sx={{ ...sx.tool, mt: ['12px', '12px', '12px', 3] }}>
          {title}
        </Box>
        <Box
          id='summary'
          sx={{
            my: [1],
            fontSize: [2, 2, 2, 3],
            lineHeight: 1.35,
            transition: 'opacity 0.15s',
          }}
        >
          {summary}
        </Box>
      </Link>
    </Column>
  )
}

const Tools = ({ items }) => {
  return (
    <Row
      columns={[6, 8, 7, 7]}
      sx={{
        pl: [0, 0, 5, 6],
        ml: [0, 0, -5, -6],
        pt: [1, 1, 0, 0],
      }}
    >
      {items.map((d, i) => (
        <Tool
          key={d.id}
          info={d}
          start={[
            1 + (i % 2) * 3,
            1 + (i % 4) * 2,
            1 + (i % 2) * 3,
            1 + (i % 2) * 3,
          ]}
        />
      ))}
    </Row>
  )
}

export default Tools
