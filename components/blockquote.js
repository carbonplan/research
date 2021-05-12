import { Box } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import { alpha } from '@theme-ui/color'

const Blockquote = ({ children, source }) => {
  return (
    <>
      <Row columns={[6]}>
        <Column start={[1]} width={[6]}>
          <Box
            sx={{
              bg: alpha('muted', 0.5),
              color: 'primary',
              fontFamily: 'body',
              lineHeight: '1.35',
              fontSize: [3, 3, 3, 4],
              borderRadius: '1px',
              mt: [5, 5, 5, 6],
              p: [3, 4, 5, 6],
            }}
          >
            {children}
          </Box>
        </Column>
      </Row>
      <Row columns={[6]}>
        <Column start={[1]} width={[6]}>
          <Box
            sx={{
              textAlign: 'right',
              textTransform: 'uppercase',
              color: 'secondary',
              fontFamily: 'mono',
              letterSpacing: 'mono',
              fontSize: [2, 2, 2, 3],
              my: [5, 5, 5, 6],
            }}
          >
            {source}
          </Box>
        </Column>
      </Row>
    </>
  )
}

export default Blockquote
