import type { ReactNode } from 'react'
import { Link } from 'wouter'

interface Props {
  children: ReactNode
  title: ReactNode
  description?: string
}

export function AppPage(props: Props) {
  const { children, title, description } = props

  return (
    <>
      <header className="text-center space-y-2 sticky top-0 bg-white py-10 px-32">
        <Link className="text-xl" href="/nnhilys/">
          <strong><i>nnhilys</i></strong>
        </Link>
        <div className="text-lg">{title}</div>
        <div className="text-sm"><i>{description}</i></div>
      </header>
      <main className="flex flex-col items-center gap-4 text-justify px-32">
        {children}
      </main>
    </>
  )
}
