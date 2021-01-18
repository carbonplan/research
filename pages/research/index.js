import { Box, Divider, Styled, Text, Heading, Grid } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Layout } from '@carbonplan/components'
import Entry from '../../components/entry'
import contents from '../../contents'

const link = {
  width: 'fit-content',
  fontSize: [4],
  borderStyle: 'solid',
  borderColor: 'background',
  borderWidth: '0px',
  borderBottomWidth: '1px',
  display: 'block',
  '&:hover': {
    borderColor: 'primary',
  },
}

function Index() {
  return (
    <Layout
      title={'carbonplan / research'}
      description={
        'Datasets, models, interactives, and commentary on carbon removal and climate solutions.'
      }
      card={'research'}
      footer={false}
      links={'local'}
    >
      <Box sx={{ mb: [4], pb: [4] }}>
        <Text as='h1' variant='styles.h1' sx={{ mt: [4, 5, 5] }}>
          Research
        </Text>
        <Box sx={{ maxWidth: '700px' }}>
          <Styled.p>
            A collection of datasets, models, explainers, and commentary on
            carbon removal and climate solutions by us and our collaborators.
          </Styled.p>
        </Box>
        <Box sx={{ mt: [4] }}>
          {[
            'permanence-calculator-explainer',
            'offset-project-fire',
            'carbon-removal-mechanisms',
            'forest-climate-risks',
            'soil-carbon-comment',
            'stripe-reports-insights',
          ].map((id) => (
            <NextLink key={id} href={`/research/${id}`}>
              <a>
                <Entry info={contents[id]}></Entry>
              </a>
            </NextLink>
          ))}
        </Box>
        <Divider sx={{ mt: [0] }} />
      </Box>
    </Layout>
  )
}

export default Index
