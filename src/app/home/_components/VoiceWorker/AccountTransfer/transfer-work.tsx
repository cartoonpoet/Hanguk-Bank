'use client'

import Title from '@/_components/common/BottomSheet/components/title'
import TransferList from '@/_components/common/BottomSheet/components/transfer-list'
import { AiContext } from '@/_contexts/useAiContext'
import { handleSpeak } from '@/_hooks/useScene'
import { useContext, useEffect } from 'react'
import { DELAY } from './account-transfer-stepper'

const TRANSFER_LIST = [
  {
    id: 1,
    bankName: '저축예금통장',
    accountNumber: '한국 123456-78-9101112',
    expense: '12,345,600',
  },
  {
    id: 2,
    bankName: '입출금 통장',
    accountNumber: '한국 987654-32-109876',
    expense: '12,345,600',
  },
]

const TransferWork = () => {
  const { scene, selectedTo, work } = useContext(AiContext)

  // useEffect(() => {
  //   if (!scene) return

  //   setTimeout(() => {
  //     handleSpeak(scene, '첫번째', work)
  //   }, DELAY)
  // }, [])

  return (
    <>
      <Title title='어떤 계좌에서 이체할까요?' />
      <div className='flex'>
        <span className='text-black text-lg'>입출금</span>
        &nbsp;
        <span className='text-lg' style={{ color: '#007BFF' }}>
          {TRANSFER_LIST.length}
        </span>
      </div>
      <TransferList data={TRANSFER_LIST} />
      {/* {speechText && <VoiceText text={speechText ? `"${speechText}"` : ''} />} */}
    </>
  )
}

export default TransferWork
