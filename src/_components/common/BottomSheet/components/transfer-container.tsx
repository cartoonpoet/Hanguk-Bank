import { ReactNode } from 'react'
import cx from 'classnames'

interface TransferContainerProps {
  children: ReactNode
  className?: string
}

const TransferContainer = ({ className, children }: TransferContainerProps) => {
  return (
    <div
      className={cx(className)}
      style={{
        border: '1px solid #D6DBE1',
      }}
    >
      {children}
    </div>
  )
}

export default TransferContainer
