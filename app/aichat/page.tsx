import Head from 'next/head'
import React from 'react'
import 'css/app.css'
import { genPageMetadata } from 'app/seo'

import Image from 'next/image'
import LayoutWithSidebar from '@/components/LayoutWithSidebar'

export const metadata = genPageMetadata({
  title: '🧑‍🏭 工业品智能专家 · 专注工业品使用指导和采购选型',
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
        <a href="#section2">📇 对话入口</a>
      </li>
      <li className="text-mid mb-4">
        <a href="#section3">🧑‍🏭 工业品智能专家</a>
      </li>
      <li className="text-mid mb-4">
        <a href="#section4">🧑‍💻 DeepSeek</a>
      </li>
      <li className="text-mid mb-4">
        <a href="#section5">🧑‍💻 Kimi.ai</a>
      </li>
      <li className="text-mid mb-4">
        <a href="#section6">🧑‍💻 文心一言</a>
      </li>
    </ul>
  </div>
)

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
        <li>
          点击进入
          <a href="https://www.chuckblog.com/blog/240612-Introduction" target="_blank">
            {' '}
            <b>
              📃<u>使用说明文</u>
            </b>
          </a>
          。除了常规问答，新增了模型解读网页内容，生成可下载供编辑文件的功能。
          <strong>以下是招标内容摘录示例：</strong>
        </li>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://ichuck-w.github.io/shared-documents/#/20240831_070618_4392.md"
            target="_blank"
          >
            {' '}
            ○ 📃 <u>浏览链接</u>
          </a>
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://raw.githubusercontent.com/ichuck-w/shared-documents/main/docs/20240831_070618_4392.md"
            target="_blank"
            download="20240831_070618_4392.md"
          >
            {' '}
            ○ 📃 <u>下载链接</u>
          </a>
        </p>
        <br />
        <li>
          Windows 系统自带的 Microsoft Edge
          浏览器会拒绝连接部分入口，应该是【设置-隐私、搜索和服务-防止跟踪】的配置问题。
        </li>

        <div id="section2" className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            <strong>📇 对话入口</strong>
          </h1>
        </div>

        <li>
          页面整合了头部 AI 问答入口，减少跳转，方便对比。
          <b>以下是无法嵌入的入口，点击后可跳转：</b>
        </li>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;○ 🧑‍💻{' '}
          <a href="https://www.perplexity.ai/" target="_blank">
            {' '}
            <u>Perplexity</u>
          </a>
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;○ 🧑‍💻{' '}
          <a href="https://metaso.cn/" target="_blank">
            {' '}
            <u>秘塔 AI 搜索</u>
          </a>
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;○ 🧑‍💻{' '}
          <a href="https://chatglm.cn/" target="_blank">
            {' '}
            <u>智谱清言</u>
          </a>
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;○ 🧑‍💻{' '}
          <a href="https://tongyi.aliyun.com/qianwen" target="_blank">
            {' '}
            <u>通义千问</u>
          </a>
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;○ 🧑‍💻{' '}
          <a href="https://www.doubao.com" target="_blank">
            {' '}
            <u>豆包</u>
          </a>
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;○ 🧑‍💻{' '}
          <a href="https://yuanbao.tencent.com/chat" target="_blank">
            {' '}
            <u>腾讯元宝</u>
          </a>
        </p>
      </div>

      <br />
      <div id="section3">
        <a
          target="_blank"
          href="https://www.aibangxuanxing.com/"
          className="custom-link text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14"
        >
          🧑‍🏭 工业品智能专家
        </a>
        <iframe
          title="agent"
          src="https://udify.app/chat/M51MSDFgiWlt6esT/"
          height="700px"
          width="100%"
          className="iframe"
        ></iframe>
      </div>

      <br />
      <div id="section4">
        <a
          target="_blank"
          href="https://chat.deepseek.com"
          className="custom-link custom-link text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14"
        >
          🧑‍💻 DeepSeek
        </a>
        <iframe
          title="agent"
          src="https://chat.deepseek.com"
          height="700px"
          width="100%"
          className="iframe"
        ></iframe>
      </div>

      <br />
      <div id="section5">
        <a
          target="_blank"
          href="https://kimi.moonshot.cn"
          className="custom-link custom-link text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14"
        >
          🧑‍💻 Kimi.ai
        </a>
        <iframe
          title="agent"
          src="https://kimi.moonshot.cn"
          height="700px"
          width="100%"
          className="iframe"
        ></iframe>
      </div>

      <br />
      <div id="section6">
        <a
          target="_blank"
          href="https://yiyan.baidu.com"
          className="custom-link custom-link text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14"
        >
          🧑‍💻 文心一言
        </a>
        <iframe
          title="agent"
          src="https://yiyan.baidu.com"
          height="700px"
          width="100%"
          className="iframe"
        ></iframe>
      </div>
    </LayoutWithSidebar>
  )
}
