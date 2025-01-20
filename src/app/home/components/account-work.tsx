import { useEffect } from 'react'
import { VoiceWorkProps } from './voice-work-stepper'
import Title from '@/_components/common/BottomSheet/components/title'
import AccountList from './account-list'

const AccountWork = ({
  speechText,
  handleContentRoute,
  speakText,
}: VoiceWorkProps) => {
  useEffect(() => {
    speakText('누구에게 보낼까요?')
  }, [])

  useEffect(() => {
    if (!speechText) return
    // handleContentRoute()
  }, [speechText])
  return (
    <>
      <Title title='누구에게 보낼까요?' />
      <div style={{ display: 'flex' }}>
        <span style={{ color: '#000000', fontSize: '18px' }}>
          최근 이체 계좌
        </span>
      </div>
      <AccountList />
    </>
  )
}

export default AccountWork
