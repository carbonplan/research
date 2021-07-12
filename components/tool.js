import { Box, Text, Grid, Container, Themed } from 'theme-ui'
import {
  Layout,
  Guide,
  Row,
  Column,
  Button,
  Link,
} from '@carbonplan/components'
import { Left } from '@carbonplan/icons'
import QuickLook from './quick-look'
import contents from '../contents'

const prefix = 'https://images.carbonplan.org'

const Tool = ({ title, description, meta, children }) => {
  return (
    <Layout
      card={`${prefix}/social/${meta.card}.png`}
      metadata={false}
      description={meta.summary + '.'}
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
            sx={{ mb: [-2, -4, 0, 0], mt: [3, 4, '109px', '154px'] }}
          >
            <Button href={'/research'} inverted size='xs' prefix={<Left/>} sx={{ ml: ['-2px', '-2px', '-2px', '-2px'] }}>Back</Button>
          </Column>
        </Box>
        <Column start={[1, 2]} width={[6, 6, 6, 6]}>
          <Box sx={{}}>
            <Box as='h1' variant='styles.h1' sx={{ mt: [5, 7, 7, 8] }}>
              {title}
            </Box>
            <Box sx={{ mb: [0, 0, 4], mt: [0, 0, 5, 6] }}>
              <Themed.p>{description}</Themed.p>
            </Box>
          </Box>
        </Column>
        <QuickLook start={8} color={meta.color} tool={true}>
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
