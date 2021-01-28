import { Box, Divider, Text } from 'theme-ui'
import Parameter from '../components/parameter.js'

const ParameterGroup = ({ group, data, state }) => {
  return (
    <Box sx={{ mb: [3] }}>
      <Box sx={{ mb: [4] }}>
        <Text
          sx={{
            fontSize: [4],
            mt: [4],
            mb: [3],
            fontFamily: 'heading',
            letterSpacing: 'heading',
          }}
        >
          {group.displayName}
        </Text>
        <Text
          sx={{
            fontSize: [2],
            mb: [1],
            maxWidth: '500px',
          }}
        >
          {group.description}
        </Text>
        {group.parameters.map((p) => (
          <Parameter
            key={p.name}
            param={p}
            data={data[p.name]}
            state={state[p.name]}
          ></Parameter>
        ))}
      </Box>
      <Divider />
    </Box>
  )
}

export default ParameterGroup
