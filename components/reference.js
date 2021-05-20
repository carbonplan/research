import { Box, Text } from 'theme-ui'
import { useState } from 'react'

const Wrapper = ({ url, children }) => {
  if (url) {
    return <a href={url}>{children}</a>
  } else {
    return <span>{children}</span>
  }
}

const Reference = ({ color, data }) => {
  const [selected, setSelected] = useState(false)
  const [selectedMobile, setSelectedMobile] = useState(false)

  const toggleOn = () => {
    setSelected(true)
  }

  const toggleOff = () => {
    setSelected(false)
  }

  const toggle = () => {
    setSelectedMobile(!selectedMobile)
  }

  return (
    <Box as='span' sx={{ userSelect: 'none' }}>
      <Box
        as='span'
        onMouseOver={toggleOn}
        onMouseOut={toggleOff}
        onClick={toggle}
        sx={{
          fontSize: ['16px'],
          cursor: 'pointer',
          color: [color, color, color],
          transition: 'color 0.2s ease-in-out',
        }}
      >
        <sup>{data.number}</sup>
      </Box>
      <Wrapper url={data.url}>
        <Box
          as='span'
          onMouseOver={toggleOn}
          onMouseOut={toggleOff}
          sx={{
            float: ['none', 'none', 'left'],
            position: ['initial', 'initial', 'relative'],
            mt: [3, 3, '-250px'],
            mb: [3, 3, 0],
            ml: ['calc(100vw / 6 - 2px)', 'calc(100vw / 8 - 2px)', 0, 0],
            top: ['0px', '0px', `${250 + data.offset}px`],
            left: [
              '0px',
              '0px',
              'calc(7 * 100vw / 12 - 26px)',
              'min(calc(7 * 100vw / 12 - 32px), 1085px)',
            ],
            width: [
              'calc(5 * 100vw / 6 - 30px)',
              'calc(5 * 100vw / 8 - 42px)',
              'calc(2 * 100vw / 12 - 18px)',
              'min(calc(2 * 100vw / 12 - 52px), 272px)',
            ],
            cursor: 'pointer',
            display: [
              selectedMobile ? 'block' : 'none',
              selectedMobile ? 'block' : 'none',
              'initial',
            ],
          }}
        >
          <Box
            as='span'
            sx={{
              fontFamily: 'body',
              fontSize: [1, 1, '13px', '15px'],
              lineHeight: 1.25,
              letterSpacing: '0.0125em',
              color: color,
              opacity: [1, 1, selected ? 1 : 0.5],
              display: 'inline-block',
              transition: 'opacity 0.2s ease-in-out',
            }}
          >
            <Box
              as='span'
              sx={{
                position: 'relative',
                ml: ['-12px'],
                mt: ['-50px'],
                lineHeight: 1.25,
                letterSpacing: '0.0125em',
                display: ['none', 'none', 'initial'],
              }}
            >
              {data.number}
            </Box>
            <Box
              as='span'
              sx={{
                ml: [0, 0, '7px'],
                mt: [0, 0, '-16px', '-18px'],
                display: ['initial', 'intial', 'block'],
                lineHeight: 1.25,
                letterSpacing: '0.0125em',
              }}
            >
              {data.authors} {data.year ? `(${data.year})` : ''} {data.title}{' '}
              <i>{data.journal}</i>{' '}
              {data.editors ? `edited by ${data.editors}` : ''}
            </Box>
          </Box>
        </Box>
      </Wrapper>
    </Box>
  )
}

export default Reference
