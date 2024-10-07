import Head from 'next/head'
import React from 'react'
import 'css/app.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>🧑‍🏭 工业品智能专家 · 专注工业品使用指导和采购选型 </title>
        <meta
          name="description"
          content=" 以各大品牌官网为资讯中心，帮您了解复杂工业品的使用方法和技术指标等问题，同时可以根据您的功能需求提供产品清单选择。"
        ></meta>
      </Head>

      <div>
        <h2>
          <strong>📃 说明</strong>
        </h2>
        <br />
        <div className="type-wrap">
          <span style={{ whiteSpace: 'pre' }} />
          <li>
            <a href="https://www.chuckblog.com/blog/240612-Introduction" target="_blank">
              {' '}
              点击进入
              <b>
                <u>使用说明文</u>
              </b>
            </a>
            。除了常规问答，新增了摘录网页内容，生成可下载编辑文件的功能。
            <strong>以下是招标内容摘录示例：</strong>
          </li>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://ichuck-w.github.io/shared-documents/#/20240831_070618_4392.md"
              target="_blank"
            >
              <u>浏览链接</u>
            </a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://raw.githubusercontent.com/ichuck-w/shared-documents/main/docs/20240831_070618_4392.md"
              target="_blank"
              download="20240831_070618_4392.md"
            >
              <u>下载链接</u>
            </a>
          </p>
          <li>
            Windows 系统自带的 Microsoft Edge
            浏览器会拒绝连接部分入口，应该是【设置-隐私、搜索和服务-防止跟踪】的配置问题。
          </li>
          <li>
            做了头部 AI 问答入口整合，减少跳转，方便对比。
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
      </div>

      <br />
      <a target="_blank" href="https://www.aibangxuanxing.com/" className="custom-link">
        🧑‍🏭 工业品智能专家
      </a>
      <br />
      <iframe
        title="agent"
        src="https://udify.app/chat/M51MSDFgiWlt6esT/"
        height="500px"
        width="100%"
        className="iframe"
      ></iframe>

      <br />
      <a target="_blank" href="https://chat.deepseek.com" className="custom-link">
        🧑‍💻 DeepSeek
      </a>
      <br />
      <iframe
        title="agent"
        src="https://chat.deepseek.com"
        height="500px"
        width="100%"
        className="iframe"
      ></iframe>

      <br />
      <a target="_blank" href="https://kimi.moonshot.cn" className="custom-link">
        🧑‍💻 Kimi.ai
      </a>
      <br />
      <iframe
        title="agent"
        src="https://kimi.moonshot.cn"
        height="500px"
        width="100%"
        className="iframe"
      ></iframe>

      <br />
      <a target="_blank" href="https://yiyan.baidu.com" className="custom-link">
        🧑‍💻 文心一言
      </a>
      <br />
      <iframe
        title="agent"
        src="https://yiyan.baidu.com"
        height="500px"
        width="100%"
        className="iframe"
      ></iframe>
    </>
  )
}
