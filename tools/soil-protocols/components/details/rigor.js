import { Box } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import { Group, Entry, Heading, Break } from './elements'
import Squares from '../squares'

const Quantification = ({ data }) => {
  return (
    <>
      <Group>
        <Entry
          start={[1, 1]}
          width={[3, 2]}
          data={data.baseline_type}
          field='rigor.baseline_type'
          label='Baseline type'
        />
        <Entry
          start={[4, 3]}
          width={[3, 2]}
          data={data.baseline_scenario}
          field='rigor.baseline_scenario'
          label='Baseline scenario'
        >
          {data.baseline_scenario.value.split('/').map((d, i) => (
            <Box key={i}>{d}</Box>
          ))}
        </Entry>
        <Entry
          start={[1, 5]}
          width={[3, 2]}
          data={data.project_scenario}
          field='rigor.project_scenario'
          label='Project scenario'
        >
          {data.project_scenario.value.split('/').map((d, i) => (
            <Box key={i}>{d}</Box>
          ))}
        </Entry>
        <Entry
          start={[4, 7]}
          width={[3, 2]}
          data={data.empirical_crediting}
          field='rigor.empirical_crediting'
          label='Empirical crediting'
        />
      </Group>
      <Group>
        <Entry
          start={[1, 1]}
          width={[3, 2]}
          field='rigor.ghgs'
          data={data.ghgs}
          label='Greenhouse gases'
        >
          {data.ghgs.value.join(' / ')}
        </Entry>
        <Entry
          start={[4, 3]}
          width={[3, 2]}
          label='Depth'
          data={data.depth}
          field='rigor.depth'
          success={data.depth.value > 50}
        />
        <Entry
          start={[1, 5]}
          width={[3, 2]}
          data={data.uncertainty}
          success={data.uncertainty.value === 'Required'}
          field='rigor.uncertainty'
          label='Uncertainty analysis'
        />
        <Entry
          start={[4, 7]}
          width={[3, 2]}
          label='Model'
          data={data.model}
          field='rigor.model'
        />
      </Group>
      <Group>
        <Entry
          start={[1, 1]}
          width={[3, 2]}
          data={data.bulk_density}
          field='rigor.bulk_density'
          success={data.bulk_density.value === 'Measured'}
          label='Bulk density'
        />
        <Entry
          start={[4, 3]}
          width={[3, 2]}
          label='Eq soil mass'
          field='rigor.equivalent_soil_mass'
          success={data.equivalent_soil_mass.value === 'Required'}
          data={data.equivalent_soil_mass}
        />
        <Entry
          start={[1, 5]}
          width={[5, 4]}
          field='rigor.sampling_approach'
          label='Sampling approach'
        >
          {data.sampling_approach.value !== 'N/A' && (
            <Row columns={[5, 4, 4, 4]}>
              <Column start={1} width={[2, 1, 1, 1]}>
                <Squares color='orange' value={data.sampling_approach.value} />
              </Column>
            </Row>
          )}
          {data.sampling_approach.value === 'N/A' && 'N/A'}
        </Entry>
      </Group>

      <Break />
      <Group>
        <Entry start={[1, 1]} width={[6, 4]} data={data.notes} label='Notes' />
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

export default Quantification
