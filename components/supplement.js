import { Box, Text, Grid, Container } from 'theme-ui'
import {
  Layout,
  Row,
  Column,
  Guide,
  Button,
  Link,
  formatDate,
} from '@carbonplan/components'
import { Left } from '@carbonplan/icons'
import QuickLook from './quick-look'
import Closing from './closing'
import SectionBreak from './section-break'
import { utils } from '@carbonplan/components'

const prefix = 'https://images.carbonplan.org'

const Article = ({ children, meta }) => {
  return (
    <Layout
      card={`${prefix}/social/${meta.card}.png`}
      description={meta.quickLook + '.'}
      title={meta.title.toLowerCase() + ' / research / carbonplan'}
      links={'local'}
      metadata={'scroll'}
      nav={'research'}
    >
      <Row sx={{ mb: [8, 8, 9, 10] }}>
        <Column
          start={[1, 1]}
          width={[2]}
          dr={1}
          sx={{ mb: [-2, -4, 0, 0], mt: [3, 4, '109px', '154px'] }}
        >
          <Button
            href={meta.back}
            inverted
            size='xs'
            prefix={<Left />}
            sx={{ ml: ['-2px', '-2px', '-2px', '-2px'] }}
          >
            Back
          </Button>
        </Column>
        <Column
          start={[5, 7, 7, 7]}
          width={[2]}
          sx={{
            mb: [-3, '-120px', 0, 0],
            mt: [3, '91px', '106px', '119px'],
            fontFamily: 'mono',
            letterSpacing: 'mono',
            textTransform: 'uppercase',
            fontSize: [1, 1, 1, 2],
            textAlign: 'right',
            display: ['initial', 'initial', 'none', 'none'],
          }}
        >
          {formatDate(meta.date)}
        </Column>
        <Column start={[1, 2, 3, 3]} width={[6, 6, 6, 6]}>
          <Box as='article'>{children}</Box>
          <SectionBreak />
          <Closing />
        </Column>
        <Column
          start={[1, 1, 10, 10]}
          width={[6, 6, 2, 2]}
          sx={{
            mb: [-3, '-120px', 0, 0],
            mt: [3, '91px', '106px', '119px'],
            fontFamily: 'mono',
            letterSpacing: 'mono',
            textTransform: 'uppercase',
            fontSize: [1, 1, 1, 2],
            display: ['none', 'none', 'initial', 'intiial'],
          }}
        >
          {formatDate(meta.date)}
        </Column>
      </Row>
    </Layout>
  )
}

export default Article
