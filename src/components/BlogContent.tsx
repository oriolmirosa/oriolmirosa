'use client'

import { useSearchParams, useRouter } from 'next/navigation'

import { Card } from '@/components/Card'
import { TagSidebar } from '@/components/TagSidebar'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { getAllTags, filterArticlesByTags } from '@/lib/tags'

interface BlogContentProps {
  articles: ArticleWithSlug[]
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export function BlogContent({ articles }: BlogContentProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get selected tags from URL
  const selectedTags = searchParams.getAll('tag')

  // Filter articles based on selected tags
  const filteredArticles = filterArticlesByTags(articles, selectedTags)

  // Get all tags with counts
  const allTags = getAllTags(articles)

  const handleTagToggle = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString())
    const currentTags = params.getAll('tag')

    if (currentTags.includes(tag)) {
      // Remove tag
      params.delete('tag')
      currentTags
        .filter((t) => t !== tag)
        .forEach((t) => params.append('tag', t))
    } else {
      // Add tag
      params.append('tag', tag)
    }

    const queryString = params.toString()
    router.push(queryString ? `/blog?${queryString}` : '/blog')
  }

  const handleClearFilters = () => {
    router.push('/blog')
  }

  return (
    <div className="flex flex-col gap-12 lg:flex-row">
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40 lg:flex-1">
        <div className="flex max-w-3xl flex-col space-y-16">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <Article key={article.slug} article={article} />
            ))
          ) : (
            <div className="text-zinc-600 dark:text-zinc-400">
              No posts found with the selected tags.
            </div>
          )}
        </div>
      </div>
      {allTags.length > 0 && (
        <aside className="lg:w-64 lg:flex-shrink-0">
          <div className="sticky top-8">
            <TagSidebar
              tags={allTags}
              selectedTags={selectedTags}
              onTagToggle={handleTagToggle}
              onClearFilters={handleClearFilters}
            />
          </div>
        </aside>
      )}
    </div>
  )
}
