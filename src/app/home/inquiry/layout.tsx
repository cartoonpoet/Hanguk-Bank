import React from 'react'

interface layoutProps {
  children: React.ReactNode
}

const layout = ({ children }: layoutProps) => {
  return (
    <div className="h-dvh bg-white">
      {children}
    </div>
  )
}

export default layout
