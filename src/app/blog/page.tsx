import { Suspense } from 'react'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import { BlogContent } from '@/components/BlogContent'

export default async function ArticlesIndex() {
  const articles = await getAllArticles()

  return (
    <SimpleLayout
      title="My thoughts on data and beyond."
      intro="Exploring data, leadership, and the ideas that spark curiosity—one post at a time."
    >
      <Suspense
        fallback={
          <div className="text-zinc-600 dark:text-zinc-400">Loading...</div>
        }
      >
        <BlogContent articles={articles} />
      </Suspense>
    </SimpleLayout>
  )
}
