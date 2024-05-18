import type { ReactNode } from 'react'
import { Link } from 'wouter'

interface Props {
  children: ReactNode
  title: ReactNode
  description?: string
  isMain?: boolean
}

export function AppPage(props: Props) {
  const { children, title, description, isMain } = props

  return (
    <>
      <header className="fixed top-0 left-0 w-full text-center px-32 py-10 space-y-2">
        <div className="text-lg">{isMain ? title : <Link href="/">{title}</Link>}</div>
        <div className="text-sm"><i>{description}</i></div>
      </header>
      <main className="flex flex-col items-center gap-4 text-justify">
        {children}
      </main>
    </>
  )
}
