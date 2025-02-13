import Title from '@/_components/common/BottomSheet/components/title'
import React from 'react'

import VoiceText from '@/_components/common/BottomSheet/components/voiceText'
import TransferContainer from '@/_components/common/BottomSheet/components/transfer-container'

const methodList = [
  { highlight: '원하는 금액을 자유롭게', text: '적립' },
  { highlight: '매월 정해진 금액', text: '을 같은 날짜에 적립' },
]

const FinancialMethod = () => {
  return (
    <>
      <Title title='적금 상품의 원하는 입금방식을 선택해 주세요.' />
      {methodList.map((item, idx) => {
        const { highlight, text } = item
        return (
          <TransferContainer key={idx} className='py-4 mb-2 rounded-xl'>
            <strong className='text-[#007BFF]'>{highlight}</strong>&nbsp;
            <strong className='text-black'>{text}</strong>
          </TransferContainer>
        )
      })}
      {/* {speechText && <VoiceText text={speechText ? `"${speechText}"` : ''} />} */}
    </>
  )
}

export default FinancialMethod
