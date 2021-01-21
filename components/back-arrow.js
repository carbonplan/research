import { Box, Text } from 'theme-ui'
import { useThemeUI } from 'theme-ui'
import { default as NextLink } from 'next/link'

const BackArrow = () => {
  return (
    <NextLink href='/research'>
      <a>
        <Text
          sx={{
            userSelect: 'none',
            fontFamily: 'faux',
            color: 'text',
            display: 'inline-block',
            mr: [3],
            fontSize: [7],
            mt: [0, 0, 2],
            mb: [3, 1, 0],
            transition: '0.1s',
            cursor: 'pointer',
            '&:hover': {
              color: 'secondary',
            },
          }}
        >
          ←
        </Text>
      </a>
    </NextLink>
  )
}

export default BackArrow
