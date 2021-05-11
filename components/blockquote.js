import { Box } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import { alpha } from '@theme-ui/color'

const Blockquote = ({ children, source }) => {
  return (
    <>
    <Row columns={[6]}>
    <Column start={[2]} width={[5]}>
    <Box sx={{color: 'secondary', fontFamily: 'faux', lineHeight: '1.35', fontSize: [3, 3, 3, 4], mt: [5, 5, 5, 6]}}>
        {children}
    </Box>
    </Column>
    </Row>
    <Row columns={[6]}>
    <Column start={[1]} width={[6]}>
    <Box sx={{textAlign: 'right', textTransform: 'uppercase', color: 'secondary', fontFamily: 'mono', letterSpacing: 'mono', fontSize: [2, 2, 2, 3], my: [5, 5, 5, 6]}}>
        {source}
    </Box>
    </Column>
    </Row>
    </>
  )
}

export default Blockquote