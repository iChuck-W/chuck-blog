import React from 'react'
import 'css/app.css'
import { genPageMetadata } from 'app/seo'
import Image from 'next/image'
import LayoutWithSidebar from '@/components/LayoutWithSidebar'
import CardforBrand from '@/components/CardforBrand'

export const metadata = genPageMetadata({
  title: '品牌库',
  description:
    '我以各大品牌官网为资讯中心，帮您了解复杂工业品的使用方法和技术指标等问题，同时可以根据您的功能需求提供产品清单选择。',
  keywords: ['工业品', '人工智能', '五金工具'],
})

const SidebarContent = () => (
  <div>
    <Image
      src="/static/favicons/logo-tool.svg"
      alt="Landscape picture"
      className="mx-auto mb-12 mt-12 h-12 w-12"
      width={75}
      height={75}
    />
    <ul>
      <li className="text-mid mb-4">
        <a href="#section1">📇 说明</a>
      </li>
      <li className="text-mid mb-4">
        <a href="#section2">📇 品牌库</a>
      </li>
    </ul>
  </div>
)

const brands = [
  {
    imageUrl: '/brand_logo/logo-hioki.png',
    linkUrl: 'https://www.hioki.cn/',
    altText: '日置 HIOKI',
  },
  {
    imageUrl: '/brand_logo/Flk_1_CMYK_NB.jpg',
    linkUrl: 'https://www.fluke.com.cn',
    altText: '福禄克 FLUKE',
  },
  {
    imageUrl: '/brand_logo/logo-rigol.png',
    linkUrl: 'https://www.rigol.com/',
    altText: '普源精电科技 RIGOL TECHNOLOGIES',
  },
  {
    imageUrl: '/brand_logo/logo-unit.png',
    linkUrl: 'https://www.uni-trend.com.cn/',
    altText: '优利德科技 UNI-T',
  },
]

export default function Home() {
  return (
    <LayoutWithSidebar sidebar={<SidebarContent />}>
      <div id="section1" className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
          <strong>📇 说明</strong>
        </h1>
      </div>

      <div className="type-wrap">
        <span style={{ whiteSpace: 'pre' }} />

        <li>增加一些品牌官网入口。</li>

        <div id="section2" className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            <strong>📇 品牌库</strong>
          </h1>
          <div className="flex flex-wrap">
            {brands.map((brand, index) => (
              <CardforBrand
                key={index}
                imageUrl={brand.imageUrl}
                linkUrl={brand.linkUrl}
                altText={brand.altText}
              />
            ))}
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  )
}
