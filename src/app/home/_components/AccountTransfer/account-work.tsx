'use client'

import { useEffect } from 'react'
import AccountList from './account-list'
import { DELAY, VoiceWorkProps } from './voice-work-stepper'
import Title from '@/_components/common/BottomSheet/components/title'

const AccountWork = ({
  isListening,
  speechText,
  handleContentRoute,
}: VoiceWorkProps) => {
  useEffect(() => {
    if (!speechText) return
    if (!isListening) {
      setTimeout(() => {
        handleContentRoute('TRANSFER_INFO')
      }, DELAY)
    }
  }, [speechText, isListening])

  return (
    <>
      <Title title='누구에게 보낼까요?' />
      <div className='flex mb-1'>
        <span className='text-black text-lg'>최근 이체 계좌</span>
      </div>
      <AccountList />
    </>
  )
}

export default AccountWork
