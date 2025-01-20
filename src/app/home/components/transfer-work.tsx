'use client'

import { useEffect } from 'react'
import { DELAY, VoiceWorkProps } from './voice-work-stepper'
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
    bankName: '입출금 통장',
    accountNumber: '한국 987654-32-109876',
    expense: '12,345,600',
  },
]

const TransferWork = ({
  speechText,
  isListening,
  handleContentRoute,
  speakText,
}: VoiceWorkProps) => {
  const handleClick = () => {}

  useEffect(() => {
    speakText(
      '어떤 계좌에서 이체할까요? 첫번째 또는 저축예금통장으로 말씀해 주세요.'
    )
  }, [])

  useEffect(() => {
    if (!speechText) return

    if (!isListening) {
      setTimeout(() => {
        handleContentRoute('ACCOUNT_WORK')
      }, DELAY)
    }
  }, [speechText, isListening])
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
      <TransferList data={TRANSFER_LIST} handleClick={handleClick} />
      <VoiceText text={speechText ? `"${speechText}"` : ''} />
    </>
  )
}

export default TransferWork
