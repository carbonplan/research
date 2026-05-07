import { Box } from 'theme-ui'

const Authors = ({ authors, color }) => (
  <Box
    sx={{
      fontFamily: 'mono',
      letterSpacing: 'mono',
      textTransform: 'uppercase',
      color,
      fontSize: [1, 1, 1, 2],
      pb: [2, 2, 3, 4],
      lineHeight: [1.15, 1.15, 1.35, 1.35],
    }}
  >
    by{' '}
    {authors.map((author, i) => (
      <Box key={author} as='span' sx={{ display: 'inline-block', mr: [2] }}>
        {/* NBSP inside names so wraps break between authors, not mid-name */}
        {author.replace(/ /g, '\u00a0')} {i < authors.length - 1 ? '+' : ''}
      </Box>
    ))}
  </Box>
)

export default Authors
