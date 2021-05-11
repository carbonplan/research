import { Box, Text, Grid, Container } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'
import {
  Layout,
  Row,
  Column,
  Guide,
  Buttons,
  Links,
} from '@carbonplan/components'
import QuickLook from './quick-look'
import Closing from './closing'
import SectionBreak from './section-break'
import Blockquote from './blockquote'
import { utils } from '@carbonplan/components'

const { formatDate } = utils
const { BackButton } = Buttons
const { InternalLink } = Links

const prefix = 'https://images.carbonplan.org'

const components = {
  blockquote: Blockquote
}

const Article = ({ children, meta }) => {
  return (
    <Layout
      card={`${prefix}/social/${meta.card}.png`}
      description={meta.summary + '.'}
      title={meta.title.toLowerCase() + ' / research / carbonplan'}
      links={'local'}
      metadata={'scroll'}
      nav={'research'}
    >
      <MDXProvider components={components}>
        <Row sx={{mb: [8, 8, 9, 10],}}>
          <Column
            start={[1, 1]}
            width={[2]}
            dr={1}
            sx={{ mb: [-3, '-120px', 0, 0], mt: [3, '91px', '106px', '119px'] }}
          >
            <InternalLink href={meta.back}>
              <BackButton sx={{ ml: ['-2px', '-2px', '-2px', '-2px'] }} />
            </InternalLink>
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
              display: ['initial', 'initial', 'none', 'none']
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
              display: ['none', 'none', 'initial', 'intiial']
            }}
          >
            {formatDate(meta.date)}
          </Column>
        </Row>
      </MDXProvider>
    </Layout>
  )
}

export default Article
