'use client'

import Title from '@/_components/common/BottomSheet/components/title'
import TransferList from '@/_components/common/BottomSheet/components/transfer-list'
import VoiceText from '@/_components/common/BottomSheet/components/voiceText'

const TRANSFER_LIST = [
  {
    id: 1,
    bankName: '저축예금통장',
    accountNumber: '한국 123456-78-9101112',
    expense: '12,345,600',
  },
  {
    id: 2,
    bankName: '저축예금통장',
    accountNumber: '한국 123456-78-9101112',
    expense: '12,345,600',
  },
]

const TransferWork = () => {
  return (
    <>
      <Title title='어떤 계좌에서 이체할까요?' />
      <div style={{ display: 'flex' }}>
        <span style={{ color: '#000000', fontSize: '18px' }}>입출금</span>&nbsp;
        <span style={{ color: '#007BFF', fontSize: '18px' }}>
          {TRANSFER_LIST.length}
        </span>
      </div>
      <TransferList data={TRANSFER_LIST} />
      <VoiceText text={`"첫번째 계좌"`} />
    </>
  )
}

export default TransferWork
