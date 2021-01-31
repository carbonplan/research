import { useState } from 'react'
import { Box, Divider, Text } from 'theme-ui'
import { Expander } from '@carbonplan/components'
import Parameter from './parameter'

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
        <Expander
          id='expander'
          sx={{ mr: [2] }}
          toggle={toggle}
          expanded={expanded}
        ></Expander>
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
      {expanded && !(name == 'Advanced NGCC') && (
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
      {expanded && name == 'Advanced NGCC' && (
        <Box sx={{ mb: [3] }}>
          <Text sx={{ pb: [2] }}>
            No additional parameters because, whereas the electricity for the
            system is provided by NGCC w/ CCS, the thermal energy is directly
            supplied by natural gas production. Therefore, the cost of thermal
            energy depends on the thermal energy demand of the system and the
            cost of natural gas. It is important to note here that the emissions
            associated with natural gas combustion are not included in the net
            removed cost as the model is based on the solvent DAC system, which
            co-captures the emissions from natural gas combustion inside the
            high temperature thermal step.
          </Text>
        </Box>
      )}
      <Divider sx={{ my: [0] }} />
    </Box>
  )
}

export default TechGroup
