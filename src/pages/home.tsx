import { Link } from 'wouter'
import { Card } from '../components/card'
import { AppPage } from '../components/page'

export function Home() {
  return (
    <AppPage title="Home">
      <Link href="/nnhilys/about"><strong>About me</strong></Link>
      <Card
        title="My first blog"
        description="A story about how I create my first blog"
        href="/nnhilys/my-first-blog"
      />
    </AppPage>
  )
}
