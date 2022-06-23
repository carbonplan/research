import { Box } from 'theme-ui'
import { Expander } from '@carbonplan/components'

const sx = {
  expander: {
    color: 'secondary',
    fontSize: [1, 1, 1, 2],
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    transition: 'opacity 0.15s',
  },
}

const ListExpander = ({ id, setExpanded, expanded }) => {
  return (
    <Box
      onClick={() => setExpanded({ expanded: !expanded, initial: false })}
      sx={{
        ...sx.expander,
        transition: 'color 0.25s',
        cursor: 'pointer',
        width: 'fit-content',
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            color: 'primary',
          },
          [`&:hover > #${id}-expander`]: {
            stroke: 'primary',
          },
        },
      }}
    >
      <Expander
        id={`${id}-expander`}
        value={expanded}
        sx={{
          position: 'relative',
          mr: 2,
          ml: '-3px',
          top: '1px',
          width: [20, 20, 21, 22],
        }}
      />
      {expanded ? 'Show fewer' : 'Show more'}
    </Box>
  )
}

export default ListExpander
