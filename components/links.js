import { Box } from 'theme-ui'
import { Button } from '@carbonplan/components'
import { RotatingArrow } from '@carbonplan/icons'

const Links = ({ data, color }) => {
  return (
    <Box sx={{ mt: [0, -2, -2, -2], mb: [5] }}>
      {data.map((d, i) => {
        return (
          <Button
            key={i}
            href={d.href}
            label={d.label}
            size='xs'
            sx={{
              display: 'inline-block',
              color: color,
              mr: [3],
              mt: [3, 0, 0, 0],
              mb: [1, 0, 0, 0],
            }}
            suffix={<RotatingArrow />}
          >
            {d.label}
          </Button>
        )
      })}
    </Box>
  )
}

export default Links
