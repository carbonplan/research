/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import { useState } from 'react'

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
    <>
      <sup
        onMouseOver={toggleOn}
        onMouseOut={toggleOff}
        onClick={toggle}
        sx={{
          pr: [1],
          fontSize: [1],
          cursor: 'pointer',
          color: [
            selectedMobile ? color : 'text',
            selectedMobile ? color : 'text',
            selected ? color : 'text',
          ],
          transition: 'color 0.2s ease-in-out',
        }}
      >
        {data.number}
      </sup>
      <a href={data.url} target='_blank'>
        <span
          onMouseOver={toggleOn}
          onMouseOut={toggleOff}
          sx={{
            float: ['none', 'none', 'right'],
            position: ['initial', 'initial', 'relative'],
            mt: [3, 3, '-250px'],
            mb: [3, 3, 0],
            top: ['0px', '0px', `${250 + data.offset}px`],
            left: ['0px', '0px', '350px'],
            maxWidth: '250px',
            cursor: 'pointer',
            display: [
              selectedMobile ? 'block' : 'none',
              selectedMobile ? 'block' : 'none',
              'initial',
            ],
          }}
        >
          <span
            sx={{
              fontFamily: 'body',
              fontSize: [1],
              lineHeight: 1.25,
              color: color,
              opacity: [1, 1, selected ? 1 : 0.5],
              display: 'inline-block',
              transition: 'opacity 0.2s ease-in-out',
            }}
          >
            <span
              sx={{
                ml: ['-18px'],
                display: ['none', 'none', 'initial'],
              }}
            >
              {data.number}
            </span>
            <span sx={{ ml: [0, 0, '7px'] }}>
              {' '}
              {data.authors} {data.year ? `(${data.year})` : ''} {data.title}{' '}
              <i>{data.journal}</i>
            </span>
          </span>
        </span>
      </a>
    </>
  )
}

export default Reference
