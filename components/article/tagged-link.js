import { Link } from 'theme-ui'

const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

const TaggedLink = ({ action, category, href, children }) => {
  const onClick = (e) => {
    event({
      action: action,
      category: category,
      label: href,
    })
  }

  return (
    <Link onClick={onClick} href={href}>
      {' '}
      {children}{' '}
    </Link>
  )
}
export default TaggedLink
