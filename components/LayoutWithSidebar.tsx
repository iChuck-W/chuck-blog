// app/components/LayoutWithSidebar.tsx
import React from 'react'

interface LayoutWithSidebarProps {
  sidebar: React.ReactNode
  children: React.ReactNode
}

const LayoutWithSidebar: React.FC<LayoutWithSidebarProps> = ({ sidebar, children }) => {
  return (
    <div className="flex">
      <div className="sidebar fixed left-0 top-0 h-full">{sidebar}</div>
      <div className="w-9/10 ml-32 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">{children}</div>
      </div>
    </div>
  )
}

export default LayoutWithSidebar
