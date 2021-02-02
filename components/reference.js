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
      <Text
        as='span'
        onMouseOver={toggleOn}
        onMouseOut={toggleOff}
        onClick={toggle}
        sx={{
          pr: [1],
          fontSize: ['17px'],
          cursor: 'pointer',
          color: [
            selectedMobile ? color : 'text',
            selectedMobile ? color : 'text',
            selected ? color : 'text',
          ],
          transition: 'color 0.2s ease-in-out',
        }}
      >
        <sup>{data.number}</sup>
      </Text>
      <Wrapper url={data.url}>
        <Text
          as='span'
          onMouseOver={toggleOn}
          onMouseOut={toggleOff}
          sx={{
            float: ['none', 'none', 'right'],
            position: ['initial', 'initial', 'relative'],
            mt: [3, 3, '-250px'],
            mb: [3, 3, 0],
            top: ['0px', '0px', `${250 + data.offset}px`],
            left: ['0px', '0px', '344px'],
            maxWidth: '250px',
            cursor: 'pointer',
            display: [
              selectedMobile ? 'block' : 'none',
              selectedMobile ? 'block' : 'none',
              'initial',
            ],
          }}
        >
          <Text
            as='span'
            sx={{
              fontFamily: 'body',
              fontSize: [1],
              lineHeight: 1.25,
              letterSpacing: '0.0125em',
              color: color,
              opacity: [1, 1, selected ? 1 : 0.5],
              display: 'inline-block',
              transition: 'opacity 0.2s ease-in-out',
            }}
          >
            <Text
              as='span'
              sx={{
                ml: ['-12px'],
                lineHeight: 1.25,
                letterSpacing: '0.0125em',
                display: ['none', 'none', 'initial'],
              }}
            >
              {data.number}
            </Text>
            <Text
              as='span'
              sx={{
                ml: [0, 0, '7px'],
                mt: [0, 0, '-17px'],
                display: ['initial', 'intial', 'block'],
                lineHeight: 1.25,
                letterSpacing: '0.0125em',
              }}
            >
              {data.authors} {data.year ? `(${data.year})` : ''} {data.title}{' '}
              <i>{data.journal}</i>{' '}
              {data.editors ? `edited by ${data.editors}` : ''}
            </Text>
          </Text>
        </Text>
      </Wrapper>
    </Box>
  )
}

export default Reference
