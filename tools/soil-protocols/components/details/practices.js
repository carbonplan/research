import { Group, Entry, Break, Heading } from './elements'

const Practices = ({ data }) => {
  return (
    <>
      <Group>
        <Entry
          start={[1, 1]}
          width={[6, 3]}
          data={data.included}
          field='practices.included'
          label='Included practices'
        >
          {data.included.value.join(' / ')}
        </Entry>
        <Entry
          start={[1, 4]}
          width={[3, 2]}
          data={data.geographies}
          field='practices.geographies'
          label='Geographies'
        />
        <Entry
          start={[4, 6]}
          width={[3, 2]}
          data={data.cobenefits}
          field='practices.cobenefits'
          label='Co-benefits'
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

export default Practices
