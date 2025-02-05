import React from 'react'
import 'css/app.css'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: '🧑‍🏭 工业品智能专家 · 专注工业品使用指导和采购选型',
  description:
    '我以各大品牌官网为资讯中心，帮您了解复杂工业品的使用方法和技术指标等问题，同时可以根据您的功能需求提供产品清单选择。',
  keywords: ['工业品', '人工智能', '五金工具'],
})

const HEADING_STYLES =
  'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14'

const EXTERNAL_LINKS = [
  { name: 'Perplexity', url: 'https://www.perplexity.ai/' },
  { name: '秘塔 AI 搜索', url: 'https://metaso.cn/' },
  { name: '智谱清言', url: 'https://chatglm.cn/' },
  { name: '通义千问', url: 'https://tongyi.aliyun.com/qianwen' },
  { name: '豆包', url: 'https://www.doubao.com' },
  { name: '腾讯元宝', url: 'https://yuanbao.tencent.com/chat' },
]

const IFRAME_SECTIONS = [
  { id: 'deepseek', name: 'DeepSeek', url: 'https://chat.deepseek.com' },
  { id: 'kimi', name: 'Kimi.ai', url: 'https://kimi.moonshot.cn' },
  { id: 'yiyan', name: '文心一言', url: 'https://yiyan.baidu.com' },
]

const IframeSection = ({ name, url }: { name: string; url: string }) => (
  <div className="mb-8">
    <a target="_blank" href={url} className={`custom-link ${HEADING_STYLES}`}>
      🧑‍💻 {name}
    </a>
    <iframe title={name} src={url} height="700px" width="100%" className="iframe" />
  </div>
)

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div id="section1" className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className={HEADING_STYLES}>
          <strong>📇 说明</strong>
        </h1>
      </div>

      <div className="type-wrap">
        <ul className="list-none">
          <li>
            ●&nbsp;&nbsp;点击进入
            <a
              href="https://www.chuckblog.com/blog/240612-Introduction"
              target="_blank"
              className="ml-1"
            >
              <b>
                📃<u>使用说明文</u>
              </b>
            </a>
          </li>

          <li>
            ●&nbsp;&nbsp;点击进入
            <a href="https://www.aibangxuanxing.com" target="_blank" className="ml-1">
              <b>
                🧑‍🏭<u>工业品智能专家</u>
              </b>
            </a>
          </li>
        </ul>

        <div id="section2" className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className={HEADING_STYLES}>
            <strong>📇 对话入口集合</strong>
          </h1>
        </div>

        <div>
          <p>
            ●&nbsp;&nbsp;页面整合了头部 AI 问答入口，减少跳转，方便对比。
            <b>以下是无法嵌入的入口，点击后可跳转：</b>
          </p>
          {EXTERNAL_LINKS.map((link) => (
            <p key={link.url} className="ml-4">
              ○ 🧑‍💻{' '}
              <a href={link.url} target="_blank">
                <u>{link.name}</u>
              </a>
            </p>
          ))}
        </div>

        <p className="mt-4">
          ●&nbsp;&nbsp;Windows 系统自带的 Microsoft Edge
          浏览器会拒绝连接部分入口，应该是【设置-隐私、搜索和服务-防止跟踪】的配置问题。
        </p>
      </div>

      {IFRAME_SECTIONS.map((section) => (
        <IframeSection key={section.id} name={section.name} url={section.url} />
      ))}
    </div>
  )
}
