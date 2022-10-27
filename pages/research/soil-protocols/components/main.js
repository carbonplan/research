import { Box, Divider } from 'theme-ui'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { Row, Column } from '@carbonplan/components'
import Table from './table'
import TableMobile from './table-mobile'
import About from './about.md'
import Methods from './methods.md'

const Main = () => {
  const breakpoint = useBreakpointIndex({ defaultIndex: 2 })
  return (
    <>
      <Row columns={[6, 8, 10, 10]}>
        <Column start={[1]} width={[6, 8, 10, 10]}>
          <Table />
          <TableMobile />
        </Column>
      </Row>
      <Divider sx={{ mt: [6, 7, 8, 9] }} />
      <Row columns={[6, 8, 10, 10]}>
        <Column start={[1]} width={[6, 4, 5, 5]}>
          <Box as='h2' variant='styles.h2'>
            About
          </Box>
          <About />
        </Column>
        <Column start={[1, 5, 6, 6]} width={[6, 4, 5, 5]}>
          <Box as='h2' variant='styles.h2'>
            Methods
          </Box>
          <Methods />
        </Column>
      </Row>
    </>
  )
}

export default Main
