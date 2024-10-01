import 'css/app.css'
import 'css/tailwind.css'
import 'pliny/search/algolia.css'
// import 'remark-github-blockquote-alert/alert.css'
// import { Space_Grotesk } from 'next/font/google'
// import { Analytics } from 'pliny/analytics'
import ChatbotDialog from '@/components/ChatbotDialog'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import type { Metadata } from 'next' // import { Metadata } from 'next'
import { SearchProvider, SearchConfig } from 'pliny/search'
import { ThemeProviders } from './theme-providers'

//const space_grotesk = Space_Grotesk({
//  subsets: ['latin'],
//  display: 'swap',
//  variable: '--font-space-grotesk',
//})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <link rel="apple-touch-icon" href="/static/favicons/favicon.ico" />
      <link rel="icon" href="/static/favicons/favicon.ico" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#abb581" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body className="bg-white text-black antialiased dark:bg-dark dark:text-hans-400">
        <ThemeProviders>
          <SectionContainer>
            <div className="flex h-screen flex-col justify-between">
              <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                <Header />
                <main className="mb-auto">{children}</main>
                <div className="bg-image-container bg-image-container-one"></div>
                <div className="bg-image-container bg-image-container-two h-3/6 w-3/6 md:h-3/6 md:w-3/6 "></div>
                {/* <div className="bg-image-container bg-image-container-three"></div> */}
              </SearchProvider>
              <Footer />
            </div>
            <ChatbotDialog />
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
