import { Route } from 'wouter'
import { Blog } from './pages/blog'
import { About } from './pages/about'
import { MyFirstBlog } from './pages/my-first-blog'

export function AppRouter() {
  return (
    <>
      <Route path="/"><Blog /></Route>
      <Route path="/about"><About /></Route>

      <Route path="/my-first-blog"><MyFirstBlog /></Route>
    </>
  )
}
