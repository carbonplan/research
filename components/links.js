import { Box, Link } from 'theme-ui'
import { Buttons } from '@carbonplan/components'

const { ArrowButton } = Buttons

const Links = ({ data, color }) => {
  return (
    <Box sx={{ mt: [0, -2, -2, -2], mb: [5] }}>
      {data.map((d, i) => {
        return (
          <Link
            key={i}
            href={d.href}
            sx={{
              display: [
                'block',
                'inline-block',
                'inline-block',
                'inline-block',
              ],
              mr: [3],
              mt: [3, 0, 0, 0],
              mb: [1, 0, 0, 0],
              width: 'fit-contents',
              textDecoration: 'none',
            }}
          >
            <ArrowButton
              fill={color}
              color={color}
              sx={{
                cursor: 'pointer',
              }}
              label={d.label}
            />
          </Link>
        )
      })}
    </Box>
  )
}

export default Links
