import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Flex } from 'theme-ui'
import { Column, Expander, Link, Row } from '@carbonplan/components'

export const SERIES_NAV_HEIGHT = 48

const itemsRowSx = {
  gap: [4, 4, 4, 5],
  alignItems: 'center',
}

const textSx = {
  fontFamily: 'mono',
  letterSpacing: 'mono',
  textTransform: 'uppercase',
  fontSize: [1, 1, 1, 2],
  lineHeight: 1,
  mb: ['1px', '1px', '1px', '2px'],
}

const Circle = ({ number, active, color }) => (
  <Flex
    className='series-nav-circle'
    sx={{
      width: [24, 24, 24, 28],
      height: [24, 24, 24, 28],
      flexShrink: 0,
      borderRadius: '50%',
      border: '1px solid',
      borderColor: color || 'primary',
      bg: active ? color || 'primary' : 'transparent',
      color: active ? 'background' : color || 'primary',
      fontFamily: 'mono',
      fontSize: [1, 1, 1, 2],
      lineHeight: 1,
      alignItems: 'center',
      justifyContent: 'center',
      transition: '0.15s',
    }}
  >
    <Box as='span' sx={{ mb: ['1px', '1px', '1px', '2px'] }}>
      {number}
    </Box>
  </Flex>
)

const Item = ({ number, label, href, active, color }) => {
  const content = (
    <Flex
      className='series-nav-item'
      sx={{
        alignItems: 'center',
        gap: '10px',
        opacity: active ? 1 : 0.8,
        transition: 'opacity 0.15s',
      }}
    >
      <Circle number={number} active={active} color={color} />
      <Box
        className='series-nav-label'
        sx={{
          ...textSx,
          whiteSpace: 'nowrap',
          color: color || 'primary',
          transition: 'color 0.15s',
        }}
      >
        {label}
      </Box>
    </Flex>
  )
  return active ? (
    content
  ) : (
    <Link
      href={href}
      sx={{
        textDecoration: 'none',
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover .series-nav-item': { opacity: 1 },
          '&:hover .series-nav-label': { color: 'primary' },
          '&:hover .series-nav-circle': {
            bg: 'primary',
            borderColor: 'primary',
            color: 'background',
          },
        },
      }}
    >
      {content}
    </Link>
  )
}

const Title = ({ title, href, asLink = true }) =>
  asLink ? (
    <Link
      href={href}
      sx={{ ...textSx, color: 'primary', textDecoration: 'underline' }}
    >
      {title}
    </Link>
  ) : (
    <Box sx={{ ...textSx, color: 'primary' }}>{title}</Box>
  )

const SeriesNav = ({ series, color }) => {
  const {
    title,
    introLabel = 'Introduction',
    entries = [],
    parentHref,
  } = series
  const router = useRouter()
  const activeHref = router.asPath.split('?')[0].split('#')[0]
  const [expanded, setExpanded] = useState(false)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const navRef = useRef(null)
  const itemsContainerRef = useRef(null)
  const measureRef = useRef(null)

  useEffect(() => {
    if (!expanded) return
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [expanded])

  useEffect(() => {
    const checkOverflow = () => {
      if (!itemsContainerRef.current || !measureRef.current) return
      const containerWidth = itemsContainerRef.current.clientWidth
      if (containerWidth === 0) return
      const measureWidth = measureRef.current.scrollWidth
      setIsOverflowing(measureWidth > containerWidth)
    }
    checkOverflow()
    const resizeObserver = new ResizeObserver(checkOverflow)
    if (itemsContainerRef.current) {
      resizeObserver.observe(itemsContainerRef.current)
    }
    window.addEventListener('resize', checkOverflow)
    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', checkOverflow)
    }
  }, [entries])

  useEffect(() => {
    setExpanded(false)
  }, [activeHref])

  const items = entries.map((a, i) => ({
    number: i + 1,
    label: a.label,
    href: a.href,
    active: activeHref === a.href,
  }))

  const drawerItems = [
    {
      number: 0,
      label: introLabel,
      href: parentHref,
      active: activeHref === parentHref,
    },
    ...items,
  ]

  return (
    <Box
      ref={navRef}
      as='nav'
      aria-label='Series navigation'
      sx={{
        position: 'sticky',
        top: '56px',
        mx: [-3, -4, -5, -6],
        px: [3, 4, 5, 6],
        bg: 'background',
        borderBottom: '1px solid',
        borderColor: 'muted',
        userSelect: 'none',
        zIndex: 1,
      }}
    >
      {/* Mobile: entire bar toggles the expander */}
      <Flex
        onClick={() => setExpanded(!expanded)}
        sx={{
          display: ['flex', 'flex', 'none', 'none'],
          height: `${SERIES_NAV_HEIGHT}px`,
          alignItems: 'center',
          gap: 2,
          cursor: 'pointer',
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover svg': { stroke: 'primary' },
          },
        }}
      >
        <Title title={title} asLink={false} />
        <Expander
          value={expanded}
          onClick={(e) => {
            if (e) e.stopPropagation()
            setExpanded(!expanded)
          }}
        />
      </Flex>

      {/* Drawer: mobile always, desktop when overflowing */}
      <Box
        sx={{
          display: [
            'block',
            'block',
            isOverflowing ? 'block' : 'none',
            isOverflowing ? 'block' : 'none',
          ],
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          overflow: 'hidden',
          maxHeight: expanded ? '500px' : 0,
          transition: 'max-height 0.2s ease-out',
          bg: 'background',
        }}
      >
        <Box
          sx={{
            px: [3, 4, 5, 6],
            pb: 2,
            borderBottom: '1px solid',
            borderColor: 'muted',
          }}
        >
          {drawerItems.map((item) => (
            <Box key={item.href} sx={{ py: 2 }}>
              <Item {...item} color={color} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Desktop: title + (inline items OR expander when overflowing) */}
      <Row
        sx={{
          display: ['none', 'none', 'grid', 'grid'],
          height: `${SERIES_NAV_HEIGHT}px`,
          alignItems: 'center',
        }}
      >
        <Column start={[1]} width={[2]}>
          {isOverflowing ? (
            <Flex
              onClick={() => setExpanded(!expanded)}
              sx={{
                alignItems: 'center',
                gap: 2,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                width: 'max-content',
                '@media (hover: hover) and (pointer: fine)': {
                  '&:hover svg': { stroke: 'primary' },
                },
              }}
            >
              <Title title={title} asLink={false} />
              <Expander
                value={expanded}
                onClick={(e) => {
                  if (e) e.stopPropagation()
                  setExpanded(!expanded)
                }}
              />
            </Flex>
          ) : (
            <Title title={title} href={parentHref} />
          )}
        </Column>
        <Column start={[3]} width={[10]}>
          <Box
            ref={itemsContainerRef}
            sx={{ width: '100%', overflow: 'hidden' }}
          >
            {!isOverflowing && (
              <Flex sx={itemsRowSx}>
                {items.map((item) => (
                  <Item key={item.href} {...item} color={color} />
                ))}
              </Flex>
            )}
          </Box>
        </Column>
      </Row>

      {/* Hidden measurement of items at natural width.
          Clipped to 0x0 so the wide content can't widen the page. */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          overflow: 'hidden',
          visibility: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <Flex
          ref={measureRef}
          sx={{
            ...itemsRowSx,
            width: 'max-content',
            whiteSpace: 'nowrap',
          }}
        >
          {items.map((item) => (
            <Item key={item.href} {...item} color={color} />
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

export default SeriesNav
