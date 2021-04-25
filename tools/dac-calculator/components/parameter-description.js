import { memo } from 'react'
import { Box, Text } from 'theme-ui'

const ParamDescription = ({ param, expanded, setExpanded }) => {
  return (
    <Box>
      <Box
        sx={{
          fontSize: [1, 1, 1, 2],
          mr: [param.unit ? 2 : 0],
          mt: [2, 2, 2],
          display: 'inline-block',
        }}
      >
        {' '}
        {param.displayName}
      </Box>
      {param.unit && (
        <Box
          sx={{
            fontSize: [1],
            ml: [0],
            display: 'inline-block',
            color: 'secondary',
          }}
        >
          {' '}
          {param.unit}{' '}
        </Box>
      )}
      {param.description && (
        <Box
          onClick={() => setExpanded(!expanded)}
          sx={{
            position: 'relative',
            width: '20px',
            height: '20px',
            ml: [2],
            display: 'inline-block',
            cursor: 'pointer',
            '&:hover > #question': {
              opacity: 1,
            },
          }}
        >
          <Box
            id='question'
            sx={{
              position: 'absolute',
              pl: [1],
              color: 'purple',
              top: ['4px'],
              opacity: expanded ? 1 : 0.6,
              transition: '0.2s',
            }}
          >
            ?
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default memo(ParamDescription)
