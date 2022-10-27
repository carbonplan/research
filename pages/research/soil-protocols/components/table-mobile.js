import { useState, useEffect } from 'react'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { Box, Flex, Container } from 'theme-ui'
import { Guide, Row, Column, Button } from '@carbonplan/components'
import { Arrow, Left } from '@carbonplan/icons'
import { protocols } from '../data'
import Metric from './metric'
import EntryMobile from './entry-mobile'

const keys = Object.keys(protocols)

const compare = (a, b) => {
  return protocols[a].name.localeCompare(protocols[b].name)
}

const TableMobile = () => {
  const [shifted, setShifted] = useState(false)
  const [selected, setSelected] = useState(null)
  const breakpoint = useBreakpointIndex({ defaultIndex: 2 })

  useEffect(() => {
    if (shifted && breakpoint === 0) {
      document.body.style['overflow-y'] = 'hidden'
      document.body.style['overflow'] = 'hidden'
      document.body.style['height'] = '100%'
      document.body.style['position'] = 'relative'
    } else {
      document.body.style['overflow-y'] = 'auto'
      document.body.style['overflow'] = 'auto'
      document.body.style['height'] = '100%'
      document.body.style['position'] = 'inherit'
    }
  }, [shifted, breakpoint])

  return (
    <Box sx={{ display: ['inherit', 'none', 'none', 'none'] }}>
      {keys.sort(compare).map((d, i) => {
        return (
          <Box
            key={i}
            onClick={() => {
              setSelected(d)
              setShifted(true)
            }}
            sx={{
              pt: [3],
              pb: ['20px'],
              fontFamily: 'body',
              fontSize: [3],
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderTopWidth: '1px',
              borderBottomWidth: i === keys.length - 1 ? '1px' : '0px',
              cursor: 'pointer',
            }}
          >
            <Row>
              <Column start={1} width={3}>
                {protocols[d].name}
              </Column>
              <Column start={4} width={2} sx={{ mt: ['-3px'] }}>
                <Metric
                  value={protocols[d].metrics['rating'].score}
                  field={'rating'}
                />
              </Column>
              <Column start={6} width={1}>
                <Flex sx={{ justifyContent: 'flex-end', mt: '4px', mr: '2px' }}>
                  <Arrow
                    sx={{
                      fill: 'secondary',
                      width: 14,
                      height: 14,
                      transform: 'rotate(45deg)',
                    }}
                  />
                </Flex>
              </Column>
            </Row>
          </Box>
        )
      })}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          transform: shifted ? 'translateX(0%)' : 'translateX(100%)',
          bg: 'background',
          height: 'calc(100vh)',
          width: 'calc(100vw)',
          overflow: 'scroll',
          pt: '56px',
          pb: [9],
          transition: 'transform 0.22s ease-out',
        }}
      >
        <Guide />
        {selected && (
          <EntryMobile
            data={protocols[selected]}
            setSelected={setSelected}
            setShifted={setShifted}
          />
        )}
      </Box>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          mt: [3],
          width: 'calc(100vw)',
          pt: '56px',
          pb: 3,
          transform: shifted ? 'translateX(0%)' : 'translateX(100%)',
          transition: 'transform 0.22s ease-out',
          pointerEvents: 'none',
        }}
      >
        <Container>
          <Button
            onClick={() => {
              setShifted(null)
              setTimeout(() => {
                setSelected(null)
              }, 220)
            }}
            size='xs'
            inverted
            prefix={<Left />}
            sx={{ pointerEvents: 'all', ml: ['-2px'] }}
          >
            Back
          </Button>
        </Container>
      </Box>
    </Box>
  )
}

export default TableMobile
