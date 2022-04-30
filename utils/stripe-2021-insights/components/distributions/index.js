import { useState } from 'react'
import { Box } from 'theme-ui'
import { Tag } from '@carbonplan/components'
import { data } from '../data'
import Metric from './metric'

const initSource = 'STRP01'

const projects = data.projects.map((d) => {
  return {
    source: d.source,
    category: d.tags[0],
    volume: d.metrics[1].value,
    permanence: d.metrics[3].value,
  }
})

const Distributions = () => {
  const [source, setSource] = useState(initSource)

  const toggle = (key) => {
    setSource(key)
  }

  return (
    <Box>
      <Box
        sx={{
          fontFamily: 'heading',
          fontSize: [2, 2, 2, 3],
          letterSpacing: 'smallcaps',
          textTransform: 'uppercase',
          mb: [2, 2, 2, 3],
        }}
      >
        Source
      </Box>
      <Box sx={{ mb: [4, 4, 4, 5] }}>
        <Tag
          sx={{ mr: [3], mb: [1] }}
          onClick={() => toggle('STRP00')}
          value={source === 'STRP00'}
        >
          Stripe 2020
        </Tag>
        <Tag
          sx={{ mr: [3], mb: [1] }}
          onClick={() => toggle('MSFT00')}
          value={source === 'MSFT00'}
        >
          Microsoft 2021
        </Tag>
        <Tag
          sx={{ mr: [3], mb: [1] }}
          onClick={() => toggle('STRP01')}
          value={source === 'STRP01'}
        >
          Stripe 2021
        </Tag>
      </Box>
      <Box sx={{ width: '100%', height: '275px', my: [4, 4, 4, 5] }}>
        <Metric
          projects={projects}
          source={source}
          domain={[10, 1000000]}
          ticks={[10, 100, 1000, 10000, 100000, 1000000]}
          field={'volume'}
          bandwidth={0.2}
          label={'Volume'}
          units={'tCO₂'}
        />
      </Box>
      <Box sx={{ width: '100%', height: '275px', my: [4, 4, 4, 5] }}>
        <Metric
          projects={projects}
          source={source}
          domain={[1, 1000]}
          ticks={[1, 10, 100, 1000]}
          field={'permanence'}
          bandwidth={0.1}
          label={'Permanence'}
          units={'years'}
        />
      </Box>
    </Box>
  )
}

export default Distributions
