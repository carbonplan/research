import { Link } from 'theme-ui'

const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

const TaggedLink = ({ action, category, href, children, sx }) => {
  const onClick = (e) => {
    event({
      action: action,
      category: category,
      label: href,
    })
  }

  return (
    <Link onClick={onClick} href={href} sx={sx}>
      {children}
    </Link>
  )
}
export default TaggedLink
