import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Exploring data, leadership, and the ideas that spark curiosity—one post at a time.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
