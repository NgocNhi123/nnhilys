import { AppPage } from '../components/page'

export function MyFirstBlog() {
  return (
    <AppPage
      title="My first blog"
      description="This is a story about how I created my first blog"
      createdAt={new Date('2024-05-19')}
    >
      <p>
        Almost everyone I asked,
        <i> "How can I improve my technical skills?" </i>
        gave me the same answer:
      </p>
      <blockquote>
        <strong>"Build your own blog; you'll learn a ton along the way!"</strong>
      </blockquote>
      <p>
        After immersing myself in the tech field for two and a half years, I
        finally decided to create my own blog. Initially, my imagination ran
        wild with ideas of fancy animations and vibrant designs, or perhaps
        crafting something utterly unique. However, I soon realized that the
        essence of a good blog lies in its content, not just its aesthetics. So,
        I decided to focus on covering the basics.
      </p>
      <p>
        Even though I had set up multiple projects before, setting up and
        deploying the blog was still challenging. Fortunately, Vite's
        comprehensive documentation provided the guidance I needed, making
        these processes much simpler.
      </p>
      <p>
        <a
          href="https://vitejs.dev/guide/#scaffolding-your-first-vite-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>To kickstart the project with React & TypeScript</i>
          <sup>[1]</sup>
        </a>
        , I used the following command:
      </p>
      <code>
        <strong>npm create vite@latest my-app -- --template react-ts</strong>
      </code>
      <p>
        The next step was figuring out how to deploy this app to the Internet.
        And once again, Vite came to the rescue with its guide on
        {' '}
        <a
          href="https://vitejs.dev/guide/static-deploy.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>Deploying a Static Site</i>
          <sup>[2]</sup>
        </a>
        .
      </p>
      <p>
        After all that was done, the final piece of the puzzle before I could
        dive into writing was the routing. For this task, I chose
        {' '}
        <a
          href="https://github.com/molefrog/wouter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>Wouter</i>
          <sup>[3]</sup>
        </a>
        , a lightweight library that is straightforward and requires minimal setup.
        A few
        {' '}
        <a
          href="https://github.com/molefrog/wouter?tab=readme-ov-file#route-pathpattern-"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>Route</i>
          <sup>[4]</sup>
        </a>
        and
        {' '}
        <a
          href="https://github.com/molefrog/wouter?tab=readme-ov-file#link-hrefpath-"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>Link</i>
          <sup>[5]</sup>
        </a>
        {' '}
        components later, my blog was ready for its first post.
      </p>
      <p>
        What can readers expect from this blog? A mix of everything, with a focus
        on tech. I'll delve into topics I've overlooked, like HTML semantics,
        ensuring content is accessible and correctly structured. I'm eager to see
        where this journey takes us. That's all from me, see you in my next post.
      </p>
      <p>
        Though this blog looks quite vanilla right now, don't be too surprised
        if one day I decide to dazzle it up. Who knows? A splash of color might
        be just around the corner.
      </p>
    </AppPage>
  )
}
