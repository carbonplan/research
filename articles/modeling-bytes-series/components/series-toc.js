import { Box, Flex } from 'theme-ui'
import { Link } from '@carbonplan/components'
import { articleMetadata } from '../../../utils/metadata'

const SERIES_ID = 'modeling-bytes-series'

const textSx = {
  fontFamily: 'mono',
  letterSpacing: 'mono',
  textTransform: 'uppercase',
  fontSize: [1, 1, 1, 2],
  lineHeight: 1,
  mb: ['2px', '2px', '2px', '3px'],
}

const rowSx = {
  display: 'flex',
  alignItems: 'center',
  gap: 3,
  py: 2,
  borderTopWidth: '1px',
  borderTopStyle: 'solid',
  borderColor: 'muted',
}

const circleSx = {
  width: [24, 24, 24, 28],
  height: [24, 24, 24, 28],
  flexShrink: 0,
  borderRadius: '50%',
  fontFamily: 'mono',
  fontSize: [1, 1, 1, 2],
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.15s',
}

const Item = ({ number, label, href, color }) => (
  <Link
    href={href}
    sx={{
      ...rowSx,
      textDecoration: 'none',
      '@media (hover: hover) and (pointer: fine)': {
        '&:hover .series-toc-label': { color: 'primary' },
        '&:hover .series-toc-circle': {
          bg: 'primary',
          borderColor: 'primary',
          color: 'background',
        },
      },
    }}
  >
    <Flex
      className='series-toc-circle'
      sx={{
        ...circleSx,
        border: '1px solid',
        borderColor: color || 'primary',
        color: color || 'primary',
      }}
    >
      <Box as='span' sx={{ mb: ['2px', '2px', '2px', '3px'] }}>
        {number}
      </Box>
    </Flex>
    <Box
      className='series-toc-label'
      sx={{
        ...textSx,
        color: color || 'primary',
        transition: 'all 0.15s',
      }}
    >
      {label}
    </Box>
  </Link>
)

const MoreToCome = ({ color }) => (
  <Flex
    sx={{
      ...rowSx,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      opacity: 0.8,
    }}
  >
    <Flex sx={circleSx}>
      <Box
        as='svg'
        width='10'
        viewBox='0 0 10 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        sx={{ stroke: color || 'primary', strokeWidth: 1, mt: '-2px' }}
      >
        <path d='M0 5H5M10 5H5M5 5V0M5 5V10' />
      </Box>
    </Flex>
    <Box sx={{ ...textSx, color: color || 'primary' }}>More to come</Box>
  </Flex>
)

const SeriesToc = () => {
  const meta = articleMetadata.find((a) => a.id === SERIES_ID)
  const entries = meta?.series?.entries ?? []
  const color = meta?.color

  return (
    <Box sx={{ userSelect: 'none', my: [4, 5, 5, 6] }}>
      {entries.map((entry, i) => (
        <Item
          key={entry.href}
          number={i + 1}
          label={entry.label}
          href={entry.href}
          color={color}
        />
      ))}
      <MoreToCome color={color} />
    </Box>
  )
}

export default SeriesToc
