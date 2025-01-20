import React from 'react'
import TransferContainer from './transfer-container'

type TransferInfo = {
  id: number
  bankName: string
  accountNumber: string
  expense: string
}

interface TransferListProps {
  data: TransferInfo[]
  handleClick: () => void
}

const TransferList = ({ data, handleClick }: TransferListProps) => {
  return (
    <div className='flex flex-col gap-2'>
      {data.map((item) => (
        <TransferContainer key={item.id} className='p-5'>
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
            <span className='text-black'>{`${item.accountNumber}원`}</span>
          </div>
        </TransferContainer>
      ))}
    </div>
  )
}

export default TransferList
