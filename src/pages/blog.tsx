import { Link } from 'wouter'
import { Card } from '../components/card'
import { AppPage } from '../components/page'

export function Blog() {
  return (
    <AppPage title="nnhilys" isMain>
      <Link href="/nnhilys/about">About me</Link>
      <Card
        title="My first blog"
        description="A story about how I create my first blog"
        href="/nnhilys/my-first-blog"
      />
    </AppPage>
  )
}
