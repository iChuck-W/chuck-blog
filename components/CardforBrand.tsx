// 品牌库组件

import React from 'react'
import Image from 'next/image'

interface CardforBrandProps {
  imageUrl: string
  linkUrl: string
  altText: string
}

const CardforBrand: React.FC<CardforBrandProps> = ({ imageUrl, linkUrl, altText }) => {
  return (
    <a href={linkUrl} className="block w-1/4 p-2" target="_blank" rel="noopener noreferrer">
      <div className="rounded-lg border border-gray-200 p-4 transition-shadow duration-300 hover:shadow-lg">
        <div className="relative h-16 w-full">
          <Image
            src={imageUrl}
            alt={altText}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        {/* 添加隐藏的文本元素，方便搜索 */}
        <span className="sr-only">{altText}</span>
      </div>
    </a>
  )
}

export default CardforBrand
