import { Box, Link, Text } from 'theme-ui'
import { useThemeUI } from 'theme-ui'
import { default as NextLink } from 'next/link'

const BackArrow = () => {
  return (
    <Box sx={{
      mt: [0, 0, 2],
      mb: [3, 1, 0],
    }}>
    <NextLink href='/research' passHref>
      <Link sx={{display: 'inline-block', position: 'relative', zIndex: 10}}>
        <Text
          as='span'
          sx={{
            userSelect: 'none',
            fontFamily: 'faux',
            color: 'text',
            display: 'inline-block',
            mr: [3],
            fontSize: [7],
            transition: '0.1s',
            cursor: 'pointer',
            '&:hover': {
              color: 'secondary',
            },
          }}
        >
          ←
        </Text>
      </Link>
    </NextLink>
    </Box>
  )
}

export default BackArrow
