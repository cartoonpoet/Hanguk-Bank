import React, { ReactNode } from 'react'
import { CSSProperties } from 'styled-components'

interface TransferContainerProps {
  children: ReactNode
  className: string
}

const TransferContainer = ({ className, children }: TransferContainerProps) => {
  return (
    <div
      className={className}
      style={{
        border: '1px solid #D6DBE1',
        borderRadius: '16px',
      }}
    >
      {children}
    </div>
  )
}

export default TransferContainer
