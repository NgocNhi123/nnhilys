import { Route } from 'wouter'
import { Blog } from './pages/blog'
import { About } from './pages/about'
import { MyFirstBlog } from './pages/my-first-blog'

export function AppRouter() {
  return (
    <>
      <Route path="/nnhilys/about"><About /></Route>

      <Route path="/nnhilys/my-first-blog"><MyFirstBlog /></Route>

      <Route path="/nnhilys/"><Blog /></Route>
    </>
  )
}
