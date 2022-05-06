import { Box } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import { Row, Column, FadeIn } from '@carbonplan/components'
import AnimateHeight from 'react-animate-height'

const Expandable = ({
  expanded,
  color = 'primary',
  children,
  height = 200,
}) => {
  return (
    <Row as='tr' columns={[10]}>
      <Column as='td' start={1} width={10}>
        <AnimateHeight
          duration={150}
          height={expanded ? 'auto' : 0}
          easing={'ease'}
        >
          <FadeIn>
            {expanded && (
              <Box
                sx={{
                  boxShadow: (theme) =>
                    `-20px 0 0 0 ${theme.colors.background}`,
                  mt: ['1px'],
                  mb: [5],
                  bg: alpha(color, 0.125),
                }}
              >
                {children}
              </Box>
            )}
            {!expanded && (
              <Box
                sx={{
                  mt: ['1px'],
                  mb: [5],
                  height: `${height}px`,
                  bg: alpha(color, 0.125),
                }}
              ></Box>
            )}
          </FadeIn>
        </AnimateHeight>
      </Column>
    </Row>
  )
}

export default Expandable
