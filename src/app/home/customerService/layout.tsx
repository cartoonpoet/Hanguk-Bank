import React from 'react'

type layoutProps = {
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
