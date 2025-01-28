import Badge from '@/_components/common/Badge/page'
import BadgeGroup from '@/_components/common/BadgeGroup/page'
import Title from '@/_components/common/BottomSheet/components/title'
import VoiceText from '@/_components/common/BottomSheet/components/voiceText'
import React from 'react'
import { AccountInquiryProps } from './account-inquiry-stepper'

const supportTxt: string[] = ['대출 알려줘', '전체 계좌 보여줘']

const VoiceWork = ({ isListening, speechText }: AccountInquiryProps) => {
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
