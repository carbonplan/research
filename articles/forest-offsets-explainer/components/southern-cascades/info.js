import { Link, Box, Text, Divider } from 'theme-ui'
import { format } from 'd3-format'
import { Button } from '@carbonplan/components'
import { RotatingArrow } from '@carbonplan/icons'

const Metric = ({ label, units, value, color }) => {
  return (
    <Box
      sx={{
        color: 'secondary',
        mt: [1],
      }}
    >
      <Box
        sx={{
          display: 'inline-block',
          width: ['100%', '130px', '170px', '210px'],
          fontFamily: 'faux',
          color: 'primary',
          fontSize: [1, 2, 2, 3],
        }}
      >
        {label}{' '}
        <Box
          as='span'
          sx={{
            display: ['none', 'none', 'initial', 'initial'],
            ml: [1],
            color: 'secondary',
            fontSize: [1, 1, 1, 2],
          }}
        >
          {units}
        </Box>
      </Box>
      <Box
        sx={{
          fontSize: [1, 2, 2, 3],
          ml: [-2, 2, 2, 2],
          display: 'inline-block',
          fontFamily: 'mono',
          letterSpacing: 'mono',
          color: color,
        }}
      >
        {value}
      </Box>
    </Box>
  )
}

const Info = ({ project, mobile = false }) => {
  const { id, carbon, developers, owners, overcrediting, arbocs } = project
  const color = overcrediting.arbocs[1] > 0 ? 'green' : 'secondary'
  const under = overcrediting.arbocs[1] < 0

  return (
    <Box
      sx={{
        borderStyle: 'solid',
        borderWidth: '0px',
        borderTopWidth: mobile ? '0px' : '0px',
        borderBottomWidth: mobile ? '0px' : '1px',
        borderColor: 'primary',
      }}
    >
      <Box
        sx={{
          mt: [2],
          pb: [0],
          fontFamily: 'faux',
          letterSpacing: 'faux',
          color: 'text',
          fontSize: [3, 4, 5, 6],
        }}
      >
        {id}
      </Box>
      <Box sx={{ color: 'secondary', mt: [1], fontSize: [2, 2, 2, 3] }}>
        {developers[0] || owners[0]}
      </Box>
      <Divider sx={{ mt: ['10px', 4, 4, 4], mb: ['6px', 4, 4, 4] }} />
      <Metric
        label='Project size'
        units='tCO₂'
        value={'\u00A0' + format('.2s')(arbocs.issuance)}
        color={color}
      />
      <Metric
        label={under ? 'Under-crediting' : 'Over-crediting'}
        units='tCO₂'
        value={(under ? '' : '\u00A0') + format('.2s')(overcrediting.arbocs[1])}
        color={color}
      />
      <Metric
        label={under ? 'Under-crediting' : 'Over-crediting'}
        units='%'
        value={
          (under ? '' : '\u00A0') + format('.0%')(overcrediting.percent[1])
        }
        color={color}
      />
      <Divider
        sx={{
          mt: ['12px', 4, 4, 4],
          mb: [2, 3, 3, 3],
        }}
      />
      <Button
        size='xs'
        inverted
        href={`/research/forest-offsets?id=${id}`}
        suffix={<RotatingArrow />}
        sx={{
          cursor: 'pointer',
          mb: ['13px', '22px', '22px', '22px'],
          transition: 'opacity 0.15s, color 0.15s',
        }}
      >
        Open in map
      </Button>
    </Box>
  )
}

export default Info
