import { Box } from 'theme-ui'
import { Buttons, Links } from '@carbonplan/components'

const { InternalLink } = Links
const { ArrowButton } = Buttons

function Index() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <InternalLink
        sx={{
          display: 'block',
          textDecoration: 'none',
          mt: [-1, -2, -3, -4],
        }}
        href='/research'
      >
        <ArrowButton size='xl' fill='purple' label='Go to research' />
      </InternalLink>
    </Box>
  )
}

export default Index
