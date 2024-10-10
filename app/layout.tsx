import 'css/app.css'
import 'css/tailwind.css'
import 'pliny/search/algolia.css'
// import 'remark-github-blockquote-alert/alert.css'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { Space_Grotesk } from 'next/font/google'
import ChatbotDialog from '@/components/ChatbotDialog'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import type { Metadata } from 'next' // import { Metadata } from 'next'
import { SearchProvider } from '@/components/SearchProvider'
import { ThemeProviders } from './theme-providers'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

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
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link rel="apple-touch-icon" href="/static/favicons/favicon.ico" />
      <link rel="icon" href="/static/favicons/favicon.ico" />
      <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
      <link rel="mask-icon" href={`${basePath}/static/favicons/favicon.ico`} color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#abb581" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      <body className="bg-white text-black antialiased dark:bg-dark dark:text-hans-400">
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SectionContainer>
            <div className="flex h-screen flex-col justify-between">
              <SearchProvider>
                <Header />
                <main className="mb-auto">{children}</main>
                <div className="bg-image-container bg-image-container-one"></div>
                <div className="bg-image-container bg-image-container-two h-3/6 w-3/6 md:h-3/6 md:w-3/6 "></div>
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
