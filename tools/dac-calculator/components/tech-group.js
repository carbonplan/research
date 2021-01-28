import { useState } from 'react'
import { Box, Divider, Text } from 'theme-ui'
import Parameter from './parameter'
import { Expander } from '@carbonplan/components'

const TechGroup = ({ name, group, data, state }) => {
  const [expanded, setExpanded] = useState(false)

  const toggle = (e) => {
    setExpanded(!expanded)
  }

  return (
    <Box>
      <Box
        onClick={toggle}
        sx={{
          cursor: 'pointer',
          '&:hover > #expander': {
            fill: 'primary',
            stroke: 'primary',
          },
          pt: [3, 3, 3],
          pb: [2, 2, 3],
        }}
      >
        <Expander id='expander' sx={{mr: [2] }}toggle={toggle} expanded={expanded}></Expander>
        <Text
          sx={{
            fontSize: [4],
            fontFamily: 'heading',
            letterSpacing: 'heading',
            mb: [1],
            maxWidth: '500px',
            display: 'inline-block',
          }}
        >
          {name}
        </Text>
      </Box>
      {expanded && (
        <Box sx={{ mb: [4] }}>
          {group.map(
            (p) =>
              p.show && (
                <Parameter
                  key={p.name}
                  param={p}
                  data={data[p.name]}
                  state={state[p.name]}
                ></Parameter>
              )
          )}
        </Box>
      )}
      <Divider sx={{ my: [0] }} />
    </Box>
  )
}

export default TechGroup
