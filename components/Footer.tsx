import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={4} />
          <SocialIcon kind="zhihu" href={siteMetadata.zhihu} size={4} />
          <SocialIcon kind="mfw" href={siteMetadata.mfw} size={4} />
          <SocialIcon kind="github" href={siteMetadata.github} size={4} />
        </div>
        <div className="flex items-center mb-8 text-sm text-gray-500 dark:text-gray-400 space-x-2">
          <div>{` Powered by `}</div>
          <SocialIcon kind="vercel" href={siteMetadata.vercel} size={4} />
          <SocialIcon kind="nextjs" href={siteMetadata.nextjs} size={4} />
          <SocialIcon kind="tailwind" href={siteMetadata.tailwind} size={4} />
        </div>
      </div>
    </footer>
  )
}
