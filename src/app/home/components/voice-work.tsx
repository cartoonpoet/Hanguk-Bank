import Title from '@/_components/common/BottomSheet/components/title'
import { VoiceWorkProps } from './voice-work-stepper'
import BadgeGroup from '@/_components/common/BadgeGroup/page'
import Badge from '@/_components/common/Badge/page'
import VoiceText from '@/_components/common/BottomSheet/components/voiceText'
import { useEffect } from 'react'

const supportTxt: string[] = ['이체 해줘', '거래내역 알려줘', '대출 알려줘']

const VoiceWork = ({
  speechText,
  handleContentRoute,
  speakText,
  isListening,
}: VoiceWorkProps) => {
  useEffect(() => {
    speakText('원하는 업무를 말씀해주세요')
  }, [])

  useEffect(() => {
    if (!speechText) return

    handleContentRoute('TRANSFER')
  }, [speechText])

  return (
    <>
      <Title title='원하는 업무를 말씀해 주세요.' />
      <BadgeGroup>
        {supportTxt.map((item) => (
          <Badge key={item} text={item} />
        ))}
      </BadgeGroup>
      <VoiceText text={`"김손자에게 10만원 보내줘"`} />
    </>
  )
}

export default VoiceWork
