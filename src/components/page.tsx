import type { ReactNode } from 'react'
import { Link } from 'wouter'

interface Props {
  children: ReactNode
  title: ReactNode
  description?: string
  createdAt?: Date
}

export function AppPage(props: Props) {
  const { children, title, description, createdAt } = props

  const date = createdAt?.toLocaleDateString(
    undefined,
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  )

  return (
    <>
      <header
        className={[
          'text-center space-y-2 sticky top-0 bg-white',
          'py-4 px-10 md:py-10 md:px-32',
        ].join(' ')}
      >
        <Link className="text-xl" href="/nnhilys/">
          <strong><i>nnhilys</i></strong>
        </Link>
        <h1 className="text-lg">{title}</h1>
        <div className="text-sm"><i>{description}</i></div>
      </header>
      <main
        className={[
          'flex flex-col items-center gap-4 text-justify',
          'pb-4 px-10 md:px-32 md:pb-10',
        ].join(' ')}
      >
        {children}
        <p>{date}</p>
      </main>
    </>
  )
}
