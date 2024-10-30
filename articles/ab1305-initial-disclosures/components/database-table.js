import React, { useCallback } from 'react'
import { Box, Flex } from 'theme-ui'
import { Badge, Button, Column, Link, Row } from '@carbonplan/components'
import { RotatingArrow } from '@carbonplan/icons'
import { alpha } from '@theme-ui/color'

import data from './data.json'

const styles = {
  reset: {
    verticalAlign: 'baseline',
    border: 0,
    outline: 0,
    margin: 0,
    padding: 0,
  },
  header: {
    display: 'block',
    textTransform: 'uppercase',
    letterSpacing: 'smallcaps',
    fontFamily: 'heading',
    fontSize: [2, 2, 2, 3],
  },
  index: {
    display: 'block',
    textTransform: 'uppercase',
    letterSpacing: 'smallcaps',
    fontFamily: 'heading',
    fontSize: [2, 2, 2, 3],
  },
  row: {
    borderStyle: 'solid',
    borderWidth: '0px',
    borderColor: 'muted',
    pt: [3, 3, 3, '20px'],
    pb: [3, 3, 3, '20px'],
  },
  entry: {
    display: 'block',
    fontSize: [2, 2, 2, 3],
    fontFamily: 'faux',
    letterSpacing: 'faux',
    mb: ['1px'],
    mt: [2, 0, 0, 0],
  },
}

const Empty = () => {
  return <Box sx={{ textTransform: 'none' }}>Not listed</Box>
}
const CompanyRow = ({ company, index }) => {
  return (
    <>
      <Row
        as='tr'
        columns={6}
        sx={{
          ...styles.row,
          borderTopWidth: '1px',
          borderBottomWidth: '1px',
          position: 'sticky',
          top: 55,
          background: 'background',
        }}
      >
        <Column
          as='td'
          start={1}
          width={6}
          sx={{ ...styles.entry, ...styles.index }}
        >
          <Flex sx={{ gap: 4, alignItems: 'baseline' }}>
            {company}
            <Button
              suffix={<RotatingArrow />}
              href={data[company].disclosure_url}
              sx={{ textTransform: 'none' }}
              inverted
              size='xs'
            >
              View disclosure
            </Button>
          </Flex>
        </Column>
      </Row>
      <Row
        as='tr'
        columns={6}
        sx={{
          ...styles.row,
          borderBottomWidth: '1px',
          position: 'sticky',
          top: index === 0 ? [122, 114, 114, 124.5] : [123, 115, 115, 124],
          background: 'background',
          pb: 2,
          pt: 2,
          '& td': {
            fontFamily: 'body',
            letterSpacing: 'body',
            fontSize: 1,
          },
        }}
      >
        <Column as='td' start={1} width={2}>
          Project
        </Column>

        <Column as='td' start={3} width={2}>
          Name
        </Column>
        <Column as='td' start={5} width={2}>
          Protocol
        </Column>
      </Row>
    </>
  )
}

export const COLORS = {
  agriculture: 'orange',
  forest: 'green',
  'energy-efficiency': 'yellow',
  'fuel-switching': 'pink',
  'ghg-management': 'blue',
  'renewable-energy': 'purple',
  other: 'grey',
}

const ProjectCell = ({ start, width, children, href, sx }) => {
  const handleClick = useCallback((e) => {
    e.stopPropagation()
  }, [])

  return (
    <Column as='td' start={start} width={width} sx={sx}>
      {href ? (
        <Link
          onClick={handleClick}
          href={href}
          sx={{
            color: 'secondary',
            textDecoration: 'none',
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </Column>
  )
}

const ProjectRow = ({
  project_id,
  name,
  protocol,
  link,
  index,
  borderBottom,
  company,
  category,
}) => {
  const standardLink = link.link_type === 'project'
  const customLink = link.link_type === 'provided'

  const handleClick = useCallback(
    (e) => {
      if (e.metaKey || e.ctrlKey) {
        window.open(link.url, '_blank') // Open in new tab
      } else {
        window.location.href = link.url // Open in the same tab
      }
    },
    [link.url]
  )
  return (
    <Row
      as='tr'
      columns={6}
      tabIndex={0}
      onClick={standardLink ? handleClick : undefined}
      sx={{
        ...styles.row,
        borderTopWidth: index === 0 ? 0 : '1px',
        borderBottomWidth:
          borderBottom && index === data[company].projects.length - 1
            ? '1px'
            : 0,
        borderColor: alpha('muted', 0.5),

        '& td': {
          fontFamily: 'body',
          letterSpacing: 'body',
          fontSize: 1,
          color: 'secondary',
        },
        '& td a': {
          transition: '0.2s all',
        },
        cursor: standardLink ? 'pointer' : 'initial',
        '&:hover': standardLink
          ? {
              'td a': { color: 'primary' },
              '#suffix': { transform: 'rotate(45deg)', color: 'primary' },
            }
          : {},
      }}
    >
      <ProjectCell
        start={1}
        width={2}
        href={standardLink ? link.url : undefined}
      >
        {project_id && link.url?.includes('offsets-db') ? (
          <Badge sx={{ color: COLORS[category] ?? COLORS.other }}>
            {project_id}
          </Badge>
        ) : (
          <>{project_id ?? <Empty />}</>
        )}
      </ProjectCell>
      <ProjectCell
        start={3}
        width={2}
        href={standardLink ? link.url : undefined}
      >
        {name ?? <Empty />}
        {customLink && (
          <>
            {' ('}
            <Link
              href={link.url}
              sx={{ color: 'secondary', ':hover': { color: 'primary' } }}
            >
              provided link
            </Link>
            {')'}
          </>
        )}
      </ProjectCell>
      <ProjectCell
        start={5}
        width={2}
        sx={{ textTransform: 'uppercase' }}
        href={standardLink ? link.url : undefined}
      >
        <Flex
          sx={{
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: 2,
          }}
        >
          {protocol ?? <Empty />}
          {standardLink && (
            <Button
              suffix={<RotatingArrow />}
              size='xs'
              sx={{
                flexShrink: 0,
                textTransform: 'none',
                fontFamily: 'body',
                letterSpacing: 'body',
                fontSize: 1,
              }}
              inverted
            />
          )}
        </Flex>
      </ProjectCell>
    </Row>
  )
}

const DatabaseTable = () => (
  <Box as='table' sx={{ display: 'block' }}>
    <Box as='tbody' sx={{ display: 'block' }}>
      {Object.keys(data).map((company, i) => (
        <React.Fragment key={i}>
          <CompanyRow company={company} index={i} />

          {data[company].projects.map((project, j) => (
            <ProjectRow
              {...project}
              index={j}
              key={j}
              company={company}
              borderBottom={i === Object.keys(data).length - 1}
            />
          ))}
        </React.Fragment>
      ))}
    </Box>
  </Box>
)

export default DatabaseTable
