import { Group, Entry, Heading, Break } from './elements'

const Safeguards = ({ data }) => {
  return (
    <>
      <Group>
        <Entry
          start={[1, 1]}
          width={[3, 2]}
          label='Landowner protections'
          data={data.landowner_protections}
          field='safeguards.landowner_protections'
          success={data.landowner_protections.value === 'Yes'}
        />
        <Entry
          start={[4, 3]}
          width={[3, 2]}
          label='Community engagement'
          field='safeguards.community_engagement'
          data={data.community_engagement}
          success={data.community_engagement.value === 'Yes'}
        />
        <Entry
          start={[1, 5]}
          width={[3, 2]}
          label='Data privacy'
          data={data.data_privacy}
          field='safeguards.data_privacy'
          success={data.data_privacy.value === 'Yes'}
        />
      </Group>
      <Break />
      <Group>
        <Entry
          start={[1, 1]}
          width={[6, 4]}
          data={data.notes}
          label='Notes'
          markdown
        />
        <Entry
          start={[1, 5]}
          width={[6, 4]}
          data={data.comments}
          label='Comments'
          markdown
        />
      </Group>
    </>
  )
}

export default Safeguards
