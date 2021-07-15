import { Link } from 'theme-ui'
import { Button } from '@carbonplan/components'
import { RotatingArrow } from '@carbonplan/icons'
import { styles } from '../styles'
import Squares from '../squares'
import { Group, Entry, Heading, Break } from './elements'
import Timeline from './timeline'

const Protocol = ({ data }) => {
  return (
    <>
      <Group>
        <Entry
          start={[1, 1]}
          width={[6, 2]}
          data={data.status}
          field='status'
          label='Status'
        >
          {data.status}
        </Entry>
        <Entry start={[1, 3]} width={[6]} label='Links'>
          {data.links.map((d, i) => {
            return (
              <Button
                key={i}
                size='xs'
                href={d.href}
                sx={{
                  fontSize: [1, 1, 1, 2],
                  fontFamily: 'faux',
                  letterSpacing: 'faux',
                  lineHeight: 'body',
                }}
                suffix={<RotatingArrow sx={{ width: 11, height: 11 }} />}
              >
                {d.name}
              </Button>
            )
          })}
        </Entry>
      </Group>
      <Break />
      <Group>
        <Entry
          start={[1, 1]}
          width={[6, 8]}
          field='timeline'
          label='Timeline'
          custom
        >
          <Timeline data={data.timeline} />
        </Entry>
      </Group>
      <Break />
      <Group>
        <Entry
          start={[1, 1]}
          data={data.notes}
          width={[6, 4]}
          label='Notes'
          markdown
        />
        <Entry
          start={[1, 5]}
          data={data.comments}
          width={[6, 4]}
          label='Comments'
          markdown
        />
      </Group>
    </>
  )
}

export default Protocol
