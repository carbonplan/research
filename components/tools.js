import { Box, Link } from 'theme-ui'
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
        href={`research/${id}`}
        sx={{
          display: 'block',
          mb: [4, 0, 0, 0],
          textDecoration: 'none',
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover > #logo': {
              opacity: 0.7,
            },
            '&:hover > #tool': {
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
          {logo}
        </Box>
        <Box id='tool' sx={{ ...sx.tool, mt: [2, 2, 2, 3] }}>
          {title}
        </Box>
        <Box
          sx={{
            my: [1],
            fontSize: [2, 2, 2, 3],
            lineHeight: 1.35,
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
      columns={[6, 8, 8, 8]}
      sx={{
        pt: [4, 0],
        borderStyle: 'solid',
        borderColor: 'muted',
        borderWidth: '0px',
        borderTopWidth: ['1px', '0px'],
      }}
    >
      {items.map((d, i) => (
        <Tool
          key={d.id}
          info={d}
          start={[
            1 + (i % 2) * 3,
            1 + (i % 4) * 2,
            1 + (i % 4) * 2,
            1 + (i % 4) * 2,
          ]}
        />
      ))}
    </Row>
  )
}

export default Tools
