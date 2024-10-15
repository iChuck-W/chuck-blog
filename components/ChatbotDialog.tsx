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
            token: 'FldqA85Ns4qIvqrL'
          };
        `,
        }}
      />
      <script src="https://udify.app/embed.min.js" id="FldqA85Ns4qIvqrL" defer />
      <style>{`
        #dify-chatbot-bubble-button {
          background-color: #0000FF !important;
        }
      `}</style>
    </div>
  )
}

export default ChatbotDialog
