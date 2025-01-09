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
}

const TransferList = ({ data }: TransferListProps) => {
  return data.map((item) => (
    <TransferContainer
      key={item.id}
      style={{ paddingBlock: '20px', paddingInline: '20px' }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontWeight: 'bold',
            gap: '8px',
            fontSize: '18px',
          }}
        >
          <span style={{ color: '#007BFF' }}>{item.id}</span>
          <span style={{ color: '#000000' }}>{item.bankName}</span>
        </div>
        <div style={{ display: 'flex', fontSize: '16px' }}>
          <span style={{ color: '#6B7684' }}>{item.accountNumber}</span>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: '20px',
          fontWeight: 'bold',
          justifyContent: 'flex-end',
        }}
      >
        <span style={{ color: '#000000' }}>{`${item.accountNumber}원`}</span>
      </div>
    </TransferContainer>
  ))
}

export default TransferList
