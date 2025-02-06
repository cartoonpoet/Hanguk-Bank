import React from 'react'

interface CellProps {
  children: React.ReactNode
}

const Cell = ({ children }: CellProps) => {
  return <div className="py-2 flex justify-center items-center gap-2 flex-1 flex-col">{children}</div>
}

export default Cell