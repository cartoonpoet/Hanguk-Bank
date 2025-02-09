import React from 'react'

interface CellProps {
  children: React.ReactNode
  onClick?: () => void
}

const Cell = ({ children, onClick }: CellProps) => {
  return <div className="py-2 flex justify-center items-center gap-2 flex-1 flex-col text-3xl"
              onClick={onClick}>{children}</div>
}

export default Cell