import { type ArticleWithSlug } from './articles'

export interface TagWithCount {
  tag: string
  count: number
}

/**
 * Format a tag for display by replacing dashes with spaces and capitalizing first letter
 * Example: "data-science" -> "Data science"
 */
export function formatTagForDisplay(tag: string): string {
  const withSpaces = tag.replace(/-/g, ' ')
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1)
}

/**
 * Extract all unique tags from articles with their post counts
 * Returns tags sorted by count (descending)
 */
export function getAllTags(articles: ArticleWithSlug[]): TagWithCount[] {
  const tagCounts = new Map<string, number>()

  articles.forEach((article) => {
    if (article.tags) {
      article.tags.forEach((tag) => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1)
      })
    }
  })

  return Array.from(tagCounts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
}

/**
 * Filter articles that have ALL of the specified tags (AND logic)
 */
export function filterArticlesByTags(
  articles: ArticleWithSlug[],
  selectedTags: string[],
): ArticleWithSlug[] {
  if (selectedTags.length === 0) {
    return articles
  }

  return articles.filter((article) => {
    if (!article.tags || article.tags.length === 0) {
      return false
    }
    // Article must have ALL selected tags
    return selectedTags.every((tag) => article.tags!.includes(tag))
  })
}
