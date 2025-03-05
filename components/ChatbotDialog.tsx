'use client'

import { useState } from 'react'

const ChatbotDialog = () => {
  const [show] = useState(false)

  return (
    <div className={`${show ? '' : 'hidden'}`}>
      {/* 嵌入的 dify 对话框 */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.difyChatbotConfig = {
            token: 'NGL2TxspAgzpW8pi'
          };
        `,
        }}
      />
      <script src="https://udify.app/embed.min.js" id="NGL2TxspAgzpW8pi" defer />
      <style>{`
        #dify-chatbot-bubble-button {
          background-color: #0000FF !important;
        }
      `}</style>
    </div>
  )
}

export default ChatbotDialog
