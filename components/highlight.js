import { Box } from 'theme-ui'
import { Button, LinkGroup } from '@carbonplan/components'
import { RotatingArrow } from '@carbonplan/icons'
import Date from './date'

const Highlight = ({
  id,
  href,
  title,
  date,
  summary,
  color,
  links,
  logo,
  sx,
}) => {
  return (
    <Box sx={{ py: [4, 3, 3, 4], ...sx }}>
      <Date date={date} sx={{ mb: [3, 3, 2] }} />
      <Box
        sx={{
          mb: ['14px'],
          ml: ['-1px'],
          lineHeight: 'heading',
          fontFamily: 'heading',
          fontSize: [4, 5, 5, 6],
        }}
      >
        <Button
          href={href || `research/${id}`}
          tracking
          suffix={<RotatingArrow color={color} />}
          size='md'
        >
          {title}
        </Button>
      </Box>

      <Box
        sx={{
          mt: [2],
          mb: [1],
          fontSize: [2, 2, 2, 3],
          lineHeight: 1.35,
        }}
      >
        {summary}
      </Box>
      <Box
        sx={{
          mt: ['12px'],
          fontSize: [2, 2, 2, 3],
          userSelect: 'none',
        }}
      >
        <Box sx={{ mb: [-1] }}>
          <LinkGroup
            inverted
            tracking
            members={links}
            spacing={[4, 4, 4, 5]}
            sx={{ mt: '14px', mb: '2px' }}
          />
        </Box>
      </Box>
      {logo}
    </Box>
  )
}

export default Highlight
