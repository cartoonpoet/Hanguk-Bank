import React, { ReactNode } from 'react'
import { CSSProperties } from 'styled-components'

interface TransferContainerProps {
  children: ReactNode
  style: CSSProperties
}

const TransferContainer = ({ style, children }: TransferContainerProps) => {
  return (
    <div
      style={{
        ...style,
        border: '1px solid #D6DBE1',
        borderRadius: '16px',
      }}
    >
      {children}
    </div>
  )
}

export default TransferContainer
