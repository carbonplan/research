import { Link } from 'theme-ui'
import * as gtag from '../../lib/gtag'

const TaggedLink = ({ action, category, href, children }) => {
  const onClick = (e) => {
    gtag.event({
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
