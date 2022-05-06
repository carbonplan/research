import { Group, Entry, Break, Heading } from './elements'

const Additionality = ({ data }) => {
  return (
    <>
      <Group>
        <Entry
          start={[1, 1]}
          width={[3, 2]}
          data={data.activity_backdating}
          field='additionality.activity_backdating'
          label='Activity backdating'
        >
          {data.activity_backdating.value == 'N/A'
            ? 'N/A'
            : data.activity_backdating.value + ' years'}
        </Entry>
        <Entry
          start={[4, 3]}
          width={[3, 2]}
          data={data.crediting_backdating}
          field='additionality.crediting_backdating'
          label='Crediting backdating'
        >
          {data.crediting_backdating.value == 'N/A'
            ? 'N/A'
            : data.crediting_backdating.value + ' years'}
        </Entry>
      </Group>
      <Group>
        <Entry
          start={[1, 1]}
          width={[3, 2]}
          data={data.financial}
          field='additionality.financial'
          success={data.financial.value === 'Required'}
          label='Financial test'
        />
        <Entry
          start={[4, 3]}
          width={[3, 2]}
          data={data.performance}
          field='additionality.performance'
          success={data.performance.value === 'Required'}
          label='Common practice'
        />
        <Entry
          start={[1, 5]}
          width={[3, 2]}
          data={data.other}
          field='additionality.other'
          success={data.other.value === 'Required'}
          label='Other tests'
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

export default Additionality
