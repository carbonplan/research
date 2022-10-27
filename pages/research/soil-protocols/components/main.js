import { Box, Divider } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import { useThemedStylesWithMdx } from '@theme-ui/mdx'
import { MDXProvider, useMDXComponents } from '@mdx-js/react'

import Table from './table'
import TableMobile from './table-mobile'
import About from './about.md'
import Methods from './methods.md'

const Main = () => {
  const components = useThemedStylesWithMdx(useMDXComponents())
  return (
    <>
      <Row columns={[6, 8, 10, 10]}>
        <Column start={[1]} width={[6, 8, 10, 10]}>
          <Table />
          <TableMobile />
        </Column>
      </Row>
      <Divider sx={{ mt: [6, 7, 8, 9] }} />
      <MDXProvider components={components}>
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
      </MDXProvider>
    </>
  )
}

export default Main
