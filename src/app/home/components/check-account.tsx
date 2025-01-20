import Title from '@/_components/common/BottomSheet/components/title'
import Account from '@/app/_component/Account/account'
import { useEffect } from 'react'
import { DELAY, VoiceWorkProps } from './voice-work-stepper'

const CheckAccount = ({
  isListening,
  speechText,
  handleContentRoute,
  speakText,
}: VoiceWorkProps) => {
  useEffect(() => {
    speakText(
      '김손자에게 100,000원 보낼게요. 받는 분과 금액을 한번 더 확인해주세요.'
    )
  }, [])

  useEffect(() => {
    if (!speechText) return
    if (!isListening) {
      setTimeout(() => {
        handleContentRoute('TRANSFER_RESULT')
      }, DELAY)
    }
  }, [speechText, isListening])

  return (
    <>
      <Title
        title='김손자에게 100,000원 보낼게요'
        description='받는 분과 금액을 한 번 더 확인해주세요.'
      />
      <Account
        ownerName='우리'
        accountType='우리'
        accountNumber='1002-345-678910'
      />
    </>
  )
}

export default CheckAccount
