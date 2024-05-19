import { AppPage } from '../components/page'

export function MyFirstBlog() {
  return (
    <AppPage
      title="My first blog"
      description="This is a story about how I created my first blog"
      createdAt={new Date('2024-05-19')}
    >
      <p>
        Almost everyone I asked
        <i> "How can I to improve my technical skills" </i>
        gave me the same answer:
      </p>
      <blockquote>
        <strong>"Build your own blog, you'll learn something along the way!"</strong>
      </blockquote>
      <p>
        So after 2 and a half years working in the field, I decided to create my
        own blog. Initially, I wanted to create something with fancy animations
        and colorful designs. Or maybe something that is different from the
        others. In the end, I realized those things don't made a good blog. It's
        the content that matters the most. So here we are with a blog that covers
        just the basics of the basics.
      </p>
      <p>
        Although I had set up multiple projects before, this and the deployment
        process are still among of the things that I struggle with the most.
        Luckily, Vite documents cover almost everything I need.
      </p>
      <p>
        Vite provides different presets for us to choose from. To
        {' '}
        <a
          href="https://vitejs.dev/guide/#scaffolding-your-first-vite-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>create a Vite project using React & TypeScript</i>
          <sup>[1]</sup>
        </a>
        , all we need is this command:
      </p>
      <code>
        <strong>npm create vite@latest my-app -- --template react-ts</strong>
      </code>
      <p>
        Next step was to figure out how to deploy this app to the Internet. And
        once again, Vite came to the rescue with
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
        After all that was done, the final thing I needed to do before I can
        start writing was the routing. For this one, I opted for
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
        With just a simple
        {' '}
        <a
          href="https://github.com/molefrog/wouter?tab=readme-ov-file#route-pathpattern-"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>Route component</i>
          <sup>[4]</sup>
        </a>
        {' '}
        to setup the path and a
        {' '}
        <a
          href="https://github.com/molefrog/wouter?tab=readme-ov-file#link-hrefpath-"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>Link component</i>
          <sup>[5]</sup>
        </a>
        {' '}
        to navigate to said path, routing was done and I can start to write my
        first post.
      </p>
      <p>
        You might wonder, or not, what can we expect from this blog? I would say
        pretty much anything but mostly tech-related stuff. From the very beginning
        of my journey, I never had much chance to take a look at HTML semantics
        so that is one thing I'll focus on when implementing this blog: to use the
        right tag for the right content. Furthermore, since I'm treating this
        blog as my writing exercise, you probably won't find anything new here.
        Finally, for everything else, I'll just go with the flow and see where the
        path takes us. That's all from me, see you in my next post.
      </p>
      <p>
        Though this blog looks quite boring right now, there's always a not too
        small probability that I'll get sick of this black and white theme and
        literally paint the town red.
      </p>
    </AppPage>
  )
}
