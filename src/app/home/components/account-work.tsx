import { useEffect } from 'react'
import { DELAY, VoiceWorkProps } from './voice-work-stepper'
import Title from '@/_components/common/BottomSheet/components/title'
import AccountList from './account-list'

const AccountWork = ({
  isListening,
  speechText,
  handleContentRoute,
  speakText,
}: VoiceWorkProps) => {
  useEffect(() => {
    speakText('누구에게 보낼까요? 최근 이체한 계좌도 함께 보여드릴게요.')
  }, [])

  useEffect(() => {
    if (!speechText) return
    if (!isListening) {
      setTimeout(() => {
        handleContentRoute('CHECK_ACCOUNT')
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
