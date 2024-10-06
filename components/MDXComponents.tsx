import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import Script from 'next/script'

import Emoji from '@/components/twemoji'
import TOCInline from '@/components/TOCInline'
import GitHubCard from '@/components/GitHubCard'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  Emoji,
  Script,
  GitHubCard,
}