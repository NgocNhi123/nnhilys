import { Link } from 'wouter'

interface Props {
  title: string
  href: string
  description?: string
}

export function Card(props: Props) {
  const { title, href, description } = props

  return (
    <Link className="flex gap-2" href={href}>
      <strong>{title}</strong>
      -
      <i>{description}</i>
    </Link>
  )
}
