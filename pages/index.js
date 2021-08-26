import Head from 'next/head'

import { withSSRContext } from 'aws-amplify'
import { Post } from '../src/models'

export default function Home ({ posts }) {
  return (
    <div>
      <Head>
        <title>Amplify + Next</title>
        <meta name='description' content='Amplify + Next!' />
      </Head>

      <main>
        {posts.map(post => (
          <div key={post.id}>
            <a href={`/post/${post.id}`}><h2>{post.title}</h2></a>
          </div>
        ))}
      </main>
    </div>
  )
}

export async function getServerSideProps (context) {
  const SSR = withSSRContext(context.req)
  const models = await SSR.DataStore.query(Post)

  return {
    props: {
      posts: JSON.parse(JSON.stringify(models))
    }
  }
}
