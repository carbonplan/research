import { Box, Text, Grid, Container, Themed } from 'theme-ui'
import {
  Layout,
  Guide,
  Row,
  Column,
  Buttons,
  Links,
} from '@carbonplan/components'
import QuickLook from './quick-look'
import contents from '../contents'

const { BackButton } = Buttons
const { InternalLink } = Links

const prefix = 'https://images.carbonplan.org'

const Tool = ({ title, description, meta, children }) => {
  return (
    <Layout
      card={`${prefix}/social/${meta.card}.png`}
      metadata={false}
      description={meta.summary}
      title={meta.title.toLowerCase() + ' / research / carbonplan'}
      links={'local'}
      nav={'research'}
    >
      <Guide />
      <Row sx={{ mb: [3, 4, 5, 6] }}>
        <Box sx={{ display: ['initial', 'initial', 'initial', 'initial'] }}>
          <Column
            start={[1, 1]}
            width={[2]}
            dr={1}
            sx={{ mb: [-2, -4, 0, 0], mt: [3, 4, '104px', '150px'] }}
          >
            <InternalLink href={'/research'}>
              <BackButton sx={{ ml: ['-2px', '-2px', '-2px', '-2px'] }} />
            </InternalLink>
          </Column>
        </Box>
        <Column start={[1, 2]} width={[6, 6, 6, 6]}>
          <Box sx={{}}>
            <Box as='h1' variant='styles.h1' sx={{ mt: [5, 7, 7, 8] }}>
              {title}
            </Box>
            <Box sx={{ mb: [0, 0, 4], mt: [0, 0, 7, 8] }}>
              <Themed.p>{description}</Themed.p>
            </Box>
          </Box>
        </Column>
        <QuickLook start={8} color={meta.color}>
          {meta.summary}
        </QuickLook>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 10]} sx={{ mb: [8, 8, 9, 10] }}>
          {children}
        </Column>
      </Row>
    </Layout>
  )
}

export default Tool
