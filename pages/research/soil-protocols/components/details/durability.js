import { Group, Entry, Heading, Break } from './elements'

const Risk = ({ data }) => {
  return (
    <>
      <Group>
        <Entry
          start={[1, 1]}
          width={[3, 2]}
          data={data.permanence}
          field='durability.permanence'
          label='Permanence'
        >
          {data.permanence.value} years
        </Entry>
        <Entry
          start={[4, 3]}
          width={[3, 2]}
          data={data.crediting_period}
          field='durability.crediting_period'
          label='Crediting period'
        >
          {typeof data.crediting_period.value === 'string'
            ? data.crediting_period.value
            : data.crediting_period.value + ' years'}
        </Entry>
        <Entry
          start={[1, 5]}
          width={[3, 2]}
          label='Onsite verification'
          field='durability.onsite_verification'
          data={data.onsite_verification}
          success={data.onsite_verification.value === 'Required'}
        />
        <Entry
          start={[4, 7]}
          width={[3, 2]}
          label='Sampling verification'
          field='durability.sampling_verification'
          data={data.sampling_verification}
          success={data.sampling_verification.value === 'Required'}
        />
      </Group>
      <Group>
        <Entry
          start={[1, 1]}
          width={[3, 2]}
          data={data.uncertainty_deduction}
          field='durability.uncertainty_deduction'
          label='Uncertainty deduction'
        />
        <Entry
          start={[4, 3]}
          width={[3, 2]}
          data={data.buffer_pool}
          field='durability.buffer_pool'
          label='Buffer pool'
        />
        <Entry
          start={[1, 5]}
          width={[3, 2]}
          data={data.leakage_test}
          field='durability.leakage_test'
          label='Leakage test'
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

export default Risk
