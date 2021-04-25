import { Box, Link } from 'theme-ui'
import { Row, Column, Links, Buttons } from '@carbonplan/components'

const { InternalLink } = Links
const { CalloutButton } = Buttons

const Closing = ({ children }) => {
  return (
    <Row as='section' columns={[6]} sx={{ mt: [6, 6, 7, 8] }}>
      <Column start={[1]} width={[3, 3, 3, 3]}>
        <Link
          href='mailto:hello@carbonplan.org'
          sx={{
            textDecoration: 'none',
            display: 'block',
            width: 'fit-content',
          }}
        >
          <CalloutButton label={'email us'}>
            Questions? Interested in collaborating on these problems?
          </CalloutButton>
        </Link>
      </Column>
      <Column start={[4, 5, 5, 5]} width={[3, 2, 2, 2]}>
        <InternalLink
          href='/research'
          sx={{
            textDecoration: 'none',
            display: 'block',
            width: 'fit-content',
          }}
        >
          <CalloutButton label={'research'}>
            Want to read more examples of our work?
          </CalloutButton>
        </InternalLink>
      </Column>
    </Row>
  )
}

export default Closing
