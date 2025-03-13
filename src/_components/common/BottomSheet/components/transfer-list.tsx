import React from 'react'
import TransferContainer from './transfer-container'
import cx from 'classnames'

type TransferInfo = {
  id: number
  bankName: string
  accountNumber: string
  expense: string
}

interface TransferListProps {
  data: TransferInfo[]
  handleClick?: () => void
  className?: string
}

const TransferList = ({ data, handleClick, className }: TransferListProps) => {
  return (
    <div className={cx('flex flex-col gap-2', className)}>
      {data.map((item) => (
        <TransferContainer key={item.id} className='p-5 rounded-2xl'>
          <div onClick={handleClick} className='flex flex-col gap-2 mb-5'>
            <div className='flex gap-2 font-bold text-lg'>
              <span style={{ color: '#007BFF' }}>{item.id}</span>
              <span className='text-black'>{item.bankName}</span>
            </div>
            <div className='flex text-base'>
              <span style={{ color: '#6B7684' }}>{item.accountNumber}</span>
            </div>
          </div>
          <div className='flex gap-2 font-bold text-xl justify-end'>
            <span className='text-black'>{`${item.expense}원`}</span>
          </div>
        </TransferContainer>
      ))}
    </div>
  )
}

export default TransferList
