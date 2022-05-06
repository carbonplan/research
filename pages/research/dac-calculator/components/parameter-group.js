import { Box, Divider, Text } from 'theme-ui'
import Parameter from './parameter.js'
import GroupDescription from './group-description'

const ParameterGroup = ({ group, data, state }) => {
  return (
    <Box sx={{ mb: [3] }}>
      <Box sx={{ mb: [5] }}>
        <GroupDescription group={group} />
        {group.parameters.map((p) => {
          if (
            (p.name == 'Natural Gas Cost [$/mmBTU]' ||
              p.name == 'Leakage Rate [%]') &&
            !(state.energy[0] == 'NGCC')
          ) {
            return null
          }
          return (
            p.show && (
              <Parameter
                key={p.name}
                param={p}
                data={data[p.name]}
                state={state[p.name]}
              />
            )
          )
        })}
      </Box>
      <Divider />
    </Box>
  )
}

export default ParameterGroup
