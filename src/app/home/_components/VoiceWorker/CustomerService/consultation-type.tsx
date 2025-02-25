import Title from '@/_components/common/BottomSheet/components/title'
import TransferContainer from '@/_components/common/BottomSheet/components/transfer-container'
import { AiContext } from '@/_contexts/useAiContext'
import React, { useContext, useEffect } from 'react'

const data = [
  {
    id: 1,
    title: '사고 신고',
  },
  {
    id: 2,
    title: '뱅킹/예금',
  },
  {
    id: 3,
    title: '펀드',
  },
  {
    id: 4,
    title: '대출',
  },
  {
    id: 5,
    title: '퇴직연금',
  },
  {
    id: 6,
    title: '민원 접수',
  },
]

const ConsultationType = ({
  close,
  handleImgType,
}: {
  close: () => void
  handleImgType: (type: string) => void
}) => {
  const { applicationType } = useContext(AiContext)

  useEffect(() => {
    if (applicationType) {
      close()
      handleImgType('Calling')
    }
  }, [applicationType])

  return (
    <>
      <Title title='상담 유형을 선택해 주세요' />
      <div className='flex flex-wrap justify-center gap-2'>
        {data.map((item) => (
          <TransferContainer key={item.id} className='w-[48%] p-5 rounded-2xl'>
            <div className='flex gap-3 text-lg font-bold'>
              <strong className='text-[#007BFF]'>{`0${item.id}`}</strong>
              <strong className='text-black'>{item.title}</strong>
            </div>
          </TransferContainer>
        ))}
      </div>
    </>
  )
}

export default ConsultationType
