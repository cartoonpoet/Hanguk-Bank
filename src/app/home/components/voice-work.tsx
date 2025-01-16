import Title from '@/_components/common/BottomSheet/components/title'
import React from 'react'

import VoiceText from '@/_components/common/BottomSheet/components/voiceText'
import Badge from '@/_components/common/Badge/page'
import BadgeGroup from '@/_components/common/BadgeGroup/page'

const VoiceWork = () => {
  return (
    <>
      <Title title='원하는 업무를 말씀해 주세요.' />
      <BadgeGroup>
        {['이체 해줘', '거래내역 알려줘', '대출 알려줘'].map((item) => (
          <Badge key={item} text={item} />
        ))}
      </BadgeGroup>
      <VoiceText text={`"김손자에게 10만원 보내줘"`} />
    </>
  )
}

export default VoiceWork
