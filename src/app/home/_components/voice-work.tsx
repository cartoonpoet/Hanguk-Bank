import Badge from '@/_components/common/Badge/page'
import BadgeGroup from '@/_components/common/BadgeGroup/page'
import Title from '@/_components/common/BottomSheet/components/title'
import VoiceText from '@/_components/common/BottomSheet/components/voiceText'
import { useEffect } from 'react'
import { DELAY, VoiceWorkProps } from './voice-work-stepper'

const supportTxt: string[] = ['이체 해줘', '거래내역 알려줘', '대출 알려줘']

const VoiceWork = ({
  isListening,
  speechText,
  speakText,
  handleContentRoute,
  handleToggleSpaeking,
}: VoiceWorkProps) => {
  useEffect(() => {
    handleToggleSpaeking()
    speakText('원하는 업무를 말씀해주세요')
  }, [])

  useEffect(() => {
    if (!speechText) return

    if (!isListening) {
      setTimeout(() => {
        handleContentRoute('TRANSFER')
      }, DELAY)
    }
  }, [speechText, isListening])

  return (
    <>
      <Title title='원하는 업무를 말씀해 주세요.' />
      <BadgeGroup>
        {supportTxt.map((item) => (
          <Badge key={item} text={item} />
        ))}
      </BadgeGroup>
      <VoiceText text={speechText ? `"${speechText}"` : ''} />
    </>
  )
}

export default VoiceWork
