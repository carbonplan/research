import { forwardRef } from 'react'
import { Box, Divider } from 'theme-ui'

const sx = {
  heading: {
    mt: [4, 4, 0, 0],
    mb: [3, 3, 4, 5],
    fontSize: [3, 3, 3, 4],
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
  },
}

const ListWrapper = forwardRef(
  ({ children, label, selected, showAllItems, id }, ref) => {
    return (
      <Box
        ref={ref}
        sx={{
          mt: [4, 4, 0, 0],
          mb: [4, 6, 6, 7],
          display: [
            selected ? 'inherit' : 'none',
            selected ? 'inherit' : 'none',
            'inherit',
            'inherit',
          ],
        }}
      >
        <Divider
          sx={{
            width: '100%',
            mt: [0],
            mb: [4, 5, 6, 7],
            display: ['none', 'none', 'inherit', 'inherit'],
          }}
        />
        <Box
          id={showAllItems ? undefined : id}
          sx={{
            ...sx.heading,
            scrollMarginTop: [null, null, '103px', '117px'],
            display: ['none', 'none', 'inherit', 'inherit'],
            mb: [4, 5, 6, 7],
          }}
        >
          {label}
        </Box>

        <Box
          id={showAllItems ? id : undefined}
          sx={{ scrollMarginTop: ['170px', '138px'] }}
        >
          {children}
        </Box>
      </Box>
    )
  }
)

export default ListWrapper
