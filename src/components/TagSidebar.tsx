'use client'

import { TagPill } from '@/components/TagPill'
import { type TagWithCount } from '@/lib/tags'

interface TagSidebarProps {
  tags: TagWithCount[]
  selectedTags: string[]
  onTagToggle: (tag: string) => void
  onClearFilters: () => void
}

export function TagSidebar({
  tags,
  selectedTags,
  onTagToggle,
  onClearFilters,
}: TagSidebarProps) {
  const hasActiveFilters = selectedTags.length > 0

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          Browse by tag
        </h2>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="mt-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            Clear filters
          </button>
        )}
      </div>
      <div className="space-y-2">
        {tags.map(({ tag, count }) => {
          const isActive = selectedTags.includes(tag)
          return (
            <div
              key={tag}
              className="flex items-center justify-between gap-3"
            >
              <TagPill
                tag={tag}
                active={isActive}
                onClick={() => onTagToggle(tag)}
              />
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {count}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
