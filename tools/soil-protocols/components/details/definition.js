import { Row, Column } from '@carbonplan/components'
import { Group, Entry, Content, Heading, Scoring, Legend } from './elements'
import { glossary } from '../../data/glossary'
import Squares from '../squares'

const Definition = ({ data }) => {
  return (
    <>
      <Group>
        {glossary[data + '.legend.grazing'] && (
          <>
            <Entry
              start={[1, 1]}
              width={[6, 3]}
              color='secondary'
              label='overview'
            >
              {glossary[data]}
            </Entry>
            <Entry
              start={[1, 5]}
              width={[6, 4]}
              color='secondary'
              label='legend'
            >
              <Legend glossary={glossary} field={data} />
            </Entry>
          </>
        )}
        {glossary[data + '.score.zero'] && (
          <>
            <Entry
              start={[1, 1]}
              width={[6, 3]}
              color='secondary'
              label='overview'
            >
              {glossary[data]}
            </Entry>
            <Entry
              start={[1, 4]}
              width={[6, 5]}
              color='secondary'
              label='scoring'
            >
              <Scoring glossary={glossary} field={data} />
            </Entry>
          </>
        )}
        {!glossary[data + '.score.zero'] &&
          !glossary[data + '.legend.grazing'] && (
            <>
              <Entry
                start={[1, 1]}
                width={[6, 5]}
                color='secondary'
                label='overview'
              >
                {glossary[data]}
              </Entry>
            </>
          )}
      </Group>
    </>
  )
}

export default Definition
