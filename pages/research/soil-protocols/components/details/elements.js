import React, { useState } from 'react'
import { Box, Divider, Link } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import { Row, Column } from '@carbonplan/components'
import { Check, Info } from '@carbonplan/icons'
import { unified } from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'
import { styles } from '../styles'
import { glossary } from '../../data/glossary'
import Squares from '../squares'
import Cow from '../icons/cow'
import Crop from '../icons/crop'
import Fertilizer from '../icons/fertilizer'
import Tractor from '../icons/tractor'
import AnimateHeight from 'react-animate-height'

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehype2react, {
    createElement: React.createElement,
    components: {
      p: (props) => <div {...props} />,
      a: Link,
    },
  })

export const Group = ({ children }) => {
  return (
    <Row columns={[6, 8, 8, 8]} sx={styles.details.group}>
      {children}
    </Row>
  )
}

export const Entry = ({
  start,
  width,
  label,
  field,
  children,
  data,
  success,
  color = 'orange',
  custom = false,
  markdown = false,
}) => {
  const [showDefinition, setShowDefinition] = useState(false)
  const [showComment, setShowComment] = useState(false)

  const hasDefinition = glossary[field]
  //const hasComment = data && (data.reference || data.comment)
  const hasComment = false
  success = false

  return (
    <Column
      start={[start[0], start[1], start[1], start[1]]}
      width={[width[0], width[1], width[1], width[1]]}
    >
      <Box sx={{ position: 'relative' }}>
        {hasDefinition && (
          <Info
            onClick={() => setShowDefinition((prev) => !prev)}
            closed
            sx={{
              cursor: 'pointer',
              position: ['relative', 'absolute', 'absolute', 'absolute'],
              left: ['0px', '-18px', '-18px', '-19px'],
              top: ['8px', '-3px', '-3px', '-1px'],
              width: '12px',
              strokeWidth: '1px',
              stroke: showDefinition ? 'orange' : alpha('orange', 0.25),
              transition: 'stroke 0.15s',
              '@media (hover: hover) and (pointer: fine)': {
                '&:hover': {
                  stroke: 'orange',
                },
              },
            }}
          />
        )}
        <Box sx={{ ...styles.details.label, color: color }}>{label}</Box>
        <AnimateHeight
          duration={150}
          height={showDefinition ? 'auto' : 0}
          easing={'ease'}
        >
          {hasDefinition && showDefinition && (
            <Box sx={styles.details.definition}>{glossary[field]}</Box>
          )}
          {(!hasDefinition || !showDefinition) && <></>}
        </AnimateHeight>
      </Box>
      <Box sx={{ position: 'relative' }}>
        {hasComment && (
          <Info
            onClick={() => setShowComment((prev) => !prev)}
            closed
            sx={{
              cursor: 'pointer',
              position: 'absolute',
              left: ['-18px', '-18px', '-18px', '-19px'],
              top: ['6px', '6px', '6px', '7px'],
              width: '12px',
              strokeWidth: '1px',
              stroke: showComment ? 'primary' : alpha('primary', 0.25),
              transition: 'stroke 0.15s',
              '@media (hover: hover) and (pointer: fine)': {
                '&:hover': {
                  stroke: 'primary',
                },
              },
            }}
          />
        )}
        {!custom && (
          <Box
            sx={{
              ...styles.details.value,
              width: '100%',
              display: 'inline-block',
            }}
          >
            {children ||
              (typeof data === 'string'
                ? markdown
                  ? processor.processSync(data).result
                  : data
                : data.value)}
          </Box>
        )}
        {custom && children}
        {success && (
          <Check
            sx={{
              mt: '-2px',
              position: 'relative',
              top: '7px',
              left: '5px',
              color: 'orange',
            }}
          />
        )}
        {hasComment && showComment && (
          <Box sx={styles.details.comment}>
            {data.reference}
            {data.comment}
          </Box>
        )}
      </Box>
    </Column>
  )
}

export const Content = ({ start, width, children }) => {
  return (
    <Column start={start} width={width}>
      <Box sx={styles.details.content}>{children}</Box>
    </Column>
  )
}

export const Heading = ({ children }) => {
  return (
    <Box sx={{ ...styles.details.label, ...styles.details.group }}>
      {children}
    </Box>
  )
}

export const Break = () => {
  return (
    <Row columns={[6, 8, 8, 8]}>
      <Column start={[1, 1, 1, 1]} width={[6, 8, 8, 8]}>
        <Divider sx={styles.details.divider} />
      </Column>
    </Row>
  )
}

export const Scoring = ({ glossary, field }) => {
  return (
    <>
      <Row columns={[3, 5, 5, 5]} sx={{ mb: [3] }}>
        <Column start={1} width={1}>
          <Box sx={{ mt: ['2px', '-2px', '-2px', '-3px'] }}>
            <Squares value={3} />
          </Box>
        </Column>
        <Column start={2} width={[2, 4, 4, 4]}>
          {glossary[field + '.score.two']}
        </Column>
      </Row>
      <Row columns={[3, 5, 5, 5]} sx={{ mb: [3] }}>
        <Column start={1} width={1}>
          <Box sx={{ mt: ['2px', '-2px', '-2px', '-3px'] }}>
            <Squares value={2} />
          </Box>
        </Column>
        <Column start={2} width={[2, 4, 4, 4]}>
          {glossary[field + '.score.one']}
        </Column>
      </Row>
      <Row columns={[3, 5, 5, 5]} sx={{ mb: [3] }}>
        <Column start={1} width={1}>
          <Box sx={{ mt: ['2px', '-2px', '-2px', '-3px'] }}>
            <Squares value={1} />
          </Box>
        </Column>
        <Column start={2} width={[2, 4, 4, 4]}>
          {glossary[field + '.score.zero']}
        </Column>
      </Row>
    </>
  )
}

export const Legend = ({ glossary, field }) => {
  return (
    <>
      <Row columns={[6, 4, 4, 4]} sx={{ mb: [3] }}>
        <Column start={1} width={[6, 4]}>
          <Box sx={{ mt: ['2px', '-1px', '-1px', '-1px'] }}>
            <Cow
              sx={{
                color: 'primary',
                mr: [0, 1, 1, 1],
              }}
            />
            <Box
              sx={{
                display: 'inline-block',
                position: 'relative',
                left: [3],
                top: ['-7px', '-7px', '-7px', '-6px'],
              }}
            >
              {glossary[field + '.legend.grazing']}
            </Box>
          </Box>
        </Column>
      </Row>
      <Row columns={[6, 4, 4, 4]} sx={{ mb: [3] }}>
        <Column start={1} width={[6, 4]}>
          <Box sx={{ mt: ['2px', '-1px', '-1px', '-1px'] }}>
            <Crop
              sx={{
                color: 'primary',
                mr: [0, 1, 1, 1],
              }}
            />
            <Box
              sx={{
                display: 'inline-block',
                position: 'relative',
                left: [3],
                top: ['-7px', '-7px', '-7px', '-6px'],
              }}
            >
              {glossary[field + '.legend.cropping']}
            </Box>
          </Box>
        </Column>
      </Row>
      <Row columns={[6, 4, 4, 4]} sx={{ mb: [3] }}>
        <Column start={1} width={[6, 4]}>
          <Box sx={{ mt: ['2px', '-1px', '-1px', '-1px'] }}>
            <Fertilizer
              sx={{
                color: 'primary',
                mr: [0, 1, 1, 1],
              }}
            />
            <Box
              sx={{
                display: 'inline-block',
                position: 'relative',
                left: [3],
                top: ['-7px', '-7px', '-7px', '-6px'],
              }}
            >
              {glossary[field + '.legend.inputs']}
            </Box>
          </Box>
        </Column>
      </Row>
      <Row columns={[6, 4, 4, 4]} sx={{ mb: [3] }}>
        <Column start={1} width={[6, 4]}>
          <Box sx={{ mt: ['2px', '-1px', '-1px', '-1px'] }}>
            <Tractor
              sx={{
                color: 'primary',
                mr: [0, 1, 1, 1],
              }}
            />
            <Box
              sx={{
                display: 'inline-block',
                position: 'relative',
                left: [3],
                top: ['-7px', '-7px', '-7px', '-6px'],
              }}
            >
              {glossary[field + '.legend.tillage']}
            </Box>
          </Box>
        </Column>
      </Row>
    </>
  )
}
