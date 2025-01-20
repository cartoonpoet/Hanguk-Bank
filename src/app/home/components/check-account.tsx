import Title from '@/app/_component/BottomSheet/components/title'
import React, { useEffect } from 'react'
import TransferContainer from '@/app/_component/BottomSheet/components/transfer-container'
import { VoiceWorkProps } from './voice-work-stepper'
import Account from '@/app/_component/Account/account'
import BadgeGroup from '@/app/_component/BadgeGroup/page'
import Badge from '@/app/_component/Badge/page'

const supportTxt: string[] = ['대출 알려줘', '전체 계좌 보여줘']
const CheckAccount = ({
  speechText,
  handleContentRoute,
  speakText,
}: VoiceWorkProps) => {
  useEffect(() => {
    speakText('누구에게 보낼까요?')
  }, [])

  return (
    <>
      <Title
        title='누구에게 보낼까요?'
        description='받는 분과 금액을 한 번 더 확인해주세요.'
      />
      <Account
        ownerName='우리'
        accountType='우리'
        accountNumber='1002-345-678910'
      />
      <BadgeGroup>
        {supportTxt.map((item) => (
          <Badge key={item} text={item} />
        ))}
      </BadgeGroup>
    </>
  )
}

export default CheckAccount
