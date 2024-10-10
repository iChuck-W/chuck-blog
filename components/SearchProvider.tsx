'use client'

import { KBarSearchProvider } from 'pliny/search/KBar'
import { useRouter } from 'next/navigation'
import { Blog } from 'contentlayer/generated'

export const SearchProvider = ({ children }) => {
  const router = useRouter()
  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath: 'search.json',
        defaultActions: [
          {
            id: 'homepage',
            name: 'Homepage',
            keywords: '',
            shortcut: ['h', 'h'], // 跳转到页面的快捷键
            section: 'Home',
            perform: () => router.push('/'),
          },
          {
            id: 'blog',
            name: 'Blog',
            keywords: '',
            shortcut: ['b', 'b'],
            section: 'Home',
            perform: () => router.push('/blog'),
          },
          {
            id: 'aichat',
            name: 'AiChat',
            keywords: '',
            shortcut: ['a', 'a'],
            section: 'Home',
            perform: () => router.push('/aichat'),
          },
        ],
        onSearchDocumentsLoad(json) {
          return json.map((post: Blog) => ({
            id: post.path,
            name: post.title,
            keywords: post.body.raw,
            section: 'Blog',
            subtitle: post.tags.join(', '),
            perform: () => router.push('/' + post.path),
          }))
        },
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}
