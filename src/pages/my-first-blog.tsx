import { AppPage } from '../components/page'

export function MyFirstBlog() {
  return (
    <AppPage title="My first blog" description="This is a story about how I create my first blog">
      <p>
        Almost everyone I asked
        <i> "How to improve my technical skills" </i>
        gave me the same answer:
      </p>
      <blockquote>
        <strong>"Build your own blog, you'll learn something along the way!"</strong>
      </blockquote>
      <p>
        So after 2 and a half year working in the field, I decided to create my
        own blog. Initially, I want to create something with fancy animations
        and colorful designs. Or maybe something that is different from the
        others. In the end, I realized those things doesn't made a good blog. It's
        the content that matters the most. So here we are with a blog that cover
        just the basic of the basic things.
      </p>
      <p>
        TBA
      </p>
    </AppPage>
  )
}
