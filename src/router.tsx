import { Route } from 'wouter'
import { Home } from './pages/home'
import { About } from './pages/about'
import { MyFirstBlog } from './pages/my-first-blog'

export function AppRouter() {
  return (
    <>
      <Route path="/nnhilys/"><Home /></Route>
      <Route path="/nnhilys/about"><About /></Route>

      <Route path="/nnhilys/my-first-blog"><MyFirstBlog /></Route>
    </>
  )
}
