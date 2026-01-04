'use client'

import Link from 'next/link'
import { formatTagForDisplay } from '@/lib/tags'

interface TagPillProps {
  tag: string
  href?: string
  active?: boolean
  onClick?: () => void
}

export function TagPill({ tag, href, active = false, onClick }: TagPillProps) {
  const baseClasses =
    'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors'
  const colorClasses = active
    ? 'bg-zinc-800 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-800'
    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'

  const className = `${baseClasses} ${colorClasses}`
  const displayText = formatTagForDisplay(tag)

  if (href) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {displayText}
      </Link>
    )
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {displayText}
    </button>
  )
}
