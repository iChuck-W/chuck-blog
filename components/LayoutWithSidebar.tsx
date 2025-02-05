// .eslintrc.json 中新增禁用规则
// "jsx-a11y/click-events-have-key-events": "off",
// "jsx-a11y/no-static-element-interactions": "off",

'use client'

import React, { useState, useEffect } from 'react'

interface LayoutWithSidebarProps {
  sidebar: React.ReactNode
  children: React.ReactNode
}

const LayoutWithSidebar: React.FC<LayoutWithSidebarProps> = ({ sidebar, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  useEffect(() => {
    // 点击侧边栏之外的区域时收起侧边栏
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isSidebarOpen && !target.closest('.sidebar') && !target.closest('.menu-toggle')) {
        setIsSidebarOpen(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isSidebarOpen])

  return (
    <div className="flex">
      <button
        className={`sidebar fixed left-0 top-0 h-full ${isSidebarOpen ? 'active' : 'hidden'} md:block`}
        onClick={toggleSidebar}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleSidebar()
          }
        }}
        aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isSidebarOpen}
        aria-controls="sidebar-content"
      >
        {sidebar}
      </button>
      <div
        id="sidebar-content"
        className="md:w-9/10 flex w-full items-center justify-center p-4 md:ml-32"
      >
        <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>

      <button
        className="menu-toggle menu-icon fixed left-4 top-4 md:hidden"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isSidebarOpen}
        aria-controls="sidebar-content"
      >
        {isSidebarOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="32" width="32">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="32" height="32">
            <path
              d="M362 62H182c-66 0-120 54-120 120v180c0 66 54 120 120 120h180c66 0 120-54 120-120V182c0-66-54-120-120-120z m30 270c0 33-27 60-60 60H212c-33 0-60-27-60-60V212c0-33 27-60 60-60h120c33 0 60 27 60 60v120zM362 542H182c-66 0-120 54-120 120v180c0 66 54 120 120 120h180c66 0 120-54 120-120V662c0-66-54-120-120-120z m30 270c0 33-27 60-60 60H212c-33 0-60-27-60-60V692c0-33 27-60 60-60h120c33 0 60 27 60 60v120zM842 62H662c-66 0-120 54-120 120v180c0 66 54 120 120 120h180c66 0 120-54 120-120V182c0-66-54-120-120-120z m30 270c0 33-27 60-60 60H692c-33 0-60-27-60-60V212c0-33 27-60 60-60h120c33 0 60 27 60 60v120zM842 542H662c-66 0-120 54-120 120v180c0 66 54 120 120 120h180c66 0 120-54 120-120V662c0-66-54-120-120-120z m30 270c0 33-27 60-60 60H692c-33 0-60-27-60-60V692c0-33 27-60 60-60h120c33 0 60 27 60 60v120z"
              fill="#2c2c2c"
            />
          </svg>
        )}
      </button>
    </div>
  )
}

export default LayoutWithSidebar
