import React from 'react'
import { Box } from 'theme-ui'

export const replacePlaceholder = (children, log, setLog, xAxis, setXAxis) => {
  const placeholders = {
    linear: {
      onClick: () => setLog(false),
      getColor: () => (log ? 'secondary' : 'primary'),
    },
    logarithmic: {
      onClick: () => setLog(true),
      getColor: () => (log ? 'primary' : 'secondary'),
    },
    particle_diameter: {
      onClick: () => setXAxis('particle_diameter_um'),
      getColor: () =>
        xAxis === 'particle_diameter_um' ? 'primary' : 'secondary',
    },
    application_rate: {
      onClick: () => setXAxis('application_rate_ton_ha_yr'),
      getColor: () =>
        xAxis === 'application_rate_ton_ha_yr' ? 'primary' : 'secondary',
    },
  }

  const regexPattern = Object.keys(placeholders)
    .map((key) => `%%${key}%%`)
    .join('|')
  const regex = new RegExp(regexPattern, 'g')

  const replaceTextWithComponents = (text) => {
    let lastIndex = 0
    const result = []
    text.replace(regex, (match, index) => {
      const beforeText = text.slice(lastIndex, index)
      if (beforeText) result.push(beforeText)
      const cleanMatch = match.replace(/^%%|%%$/g, '').replace(/\s+/g, ' ')
      const placeholder = placeholders[cleanMatch.toLowerCase()]
      if (placeholder) {
        result.push(
          <Box
            key={`${cleanMatch}-${index}`}
            as='span'
            onClick={placeholder.onClick}
            sx={{
              color: placeholder.getColor(),
              textDecoration: 'underline',
              ':hover': { color: 'primary' },
              cursor: 'pointer',
            }}
          >
            {cleanMatch.replace('_', ' ')}
          </Box>
        )
      }
      lastIndex = index + match.length
    })
    if (lastIndex < text.length) {
      result.push(text.slice(lastIndex))
    }
    return result
  }

  return React.Children.map(children, (child) => {
    if (typeof child === 'string') {
      return <>{replaceTextWithComponents(child)}</>
    } else if (React.isValidElement(child)) {
      return React.cloneElement(
        child,
        child.props,
        replacePlaceholder(child.props.children, log, setLog, xAxis, setXAxis)
      )
    }
    return child
  })
}
