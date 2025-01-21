'use client'
import Greetings from '@/components/Greetings'

export default function Home() {
  return (
    <>
      <Greetings />
      {/*  */}
      <br />
      <a target="_blank" href="https://www.aibangxuanxing.com/" className="custom-link">
        🧑‍🏭 工业品智能专家
      </a>
      <div className="type-wrap">
        <span style={{ whiteSpace: 'pre' }} />
        <p>
          这是一个以品牌官网为资讯中心的对话助手，<b>右下角对话按键</b> 💬
          会在所有的页面保持呈现，可以随时点击，开始对话。
          <br />
        </p>
      </div>

      <br />
      <div style={{ textAlign: 'center' }}>
        <iframe
          title="agent"
          src="https://www.aibangxuanxing.com/"
          height="700px"
          width="100%"
          className="iframe"
          style={{ display: 'inline-block', margin: 'auto' }}
        ></iframe>
      </div>

      <br />
      <br />
      <a target="_blank" href="https://www.ichuck.top/grid" className="custom-link">
        🌏 图库
      </a>
      <div className="type-wrap">
        <span style={{ whiteSpace: 'pre' }} />
        <p>
          自然划分的七大洲，人为定义的 197 个主权国家，国家划分的 34 省。
          <br />
          <br />
          在无尽的重复中探索新鲜感。
        </p>
      </div>
      <br />

      <div style={{ textAlign: 'center' }}>
        <iframe
          title="photos"
          src="https://www.ichuck.top/grid"
          height="700px"
          width="100%"
          className="iframe"
          style={{ display: 'inline-block', margin: 'auto' }}
        ></iframe>
      </div>
    </>
  )
}
