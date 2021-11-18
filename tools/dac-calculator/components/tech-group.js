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
        <Expander id='expander' sx={{ mr: [2] }} value={expanded}></Expander>
        <Box
          sx={{
            fontSize: [4],
            fontFamily: 'heading',
            letterSpacing: 'heading',
            mb: [2],
            maxWidth: '500px',
            display: 'inline-block',
          }}
        >
          {name}
        </Box>
      </Box>
      {expanded && !(name == 'Advanced NGCC') && (
        <Box sx={{ mb: [7] }}>
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
          <Box sx={{ pb: ['12px'] }}>
            This component of the energy technology has no additional
            parameters. Whereas electricity is provided by NGCC w/ CCS, thermal
            energy is directly supplied by natural gas production. Therefore,
            the cost of thermal energy depends on the thermal energy demand of
            the system and the cost of natural gas. It is important to note here
            that the emissions associated with natural gas combustion are not
            included in the net removed cost as the model is based on the
            solvent DAC system, which co-captures the emissions from natural gas
            combustion inside the high temperature thermal step.
          </Box>
        </Box>
      )}
      <Divider sx={{ my: [0] }} />
    </Box>
  )
}

export default TechGroup
