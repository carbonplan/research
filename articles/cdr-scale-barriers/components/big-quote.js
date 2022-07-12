import { Box } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'

const COLORS = {
  provider: 'teal',
  buyer: 'green',
  broker: 'orange',
  'system actor': 'yellow',
}

const BigQuote = ({ category, quote }) => {
  return (
    <Box
      sx={{
        borderTop: ({ colors }) => `solid 1px ${colors.muted}`,
        my: [6, 6, 6, 7],
        pt: [4, 4, 4, 5],
        pb: [2, 2, 2, 3],
      }}
    >
      <Box
        sx={{
          position: 'relative',
          fontSize: [2, 2, 2, 3],
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: ['-36px', '-36px', '-36px', '-45px'],
            right: '0px',
            textAlign: 'right',
            fontFamily: 'heading',
            letterSpacing: 'smallcaps',
            textTransform: 'uppercase',
            bg: 'background',
            pl: [4],
            color: COLORS[category],
          }}
        >
          {category}
        </Box>
      </Box>
      <Row columns={6}>
        <Column start={1} width={[5, 5, 5, 4]}>
          <Box
            sx={{
              color: COLORS[category],
              fontSize: [3, 3, 3, 4],
              fontFamily: 'faux',
            }}
          >
            <Box as='span' sx={{ position: 'absolute', ml: '-0.4em' }}>
              “
            </Box>
            {quote}”
          </Box>
        </Column>
      </Row>
    </Box>
  )
}

export default BigQuote
