import Title from '@/_components/common/BottomSheet/components/title'
import TransferContainer from '@/_components/common/BottomSheet/components/transfer-container'
import React from 'react'

const SmartSaving = () => {
  return (
    <>
      <Title
        title='스마트적금을 가입하시겠어요?'
        description='가입 전 상품설명서를 확인해 주세요.'
      />
      <TransferContainer className='w-full flex flex-col items-start p-4 pymb-2 rounded-xl gap-3'>
        <strong className='text-black'>한국 스마트적금</strong>
        <div className='w-full flex justify-center text-[#007BFF] border border-[#007BFF] p-1 rounded-xl'>
          {/* //border-sky-500  */}
          <button className='p-2'>설명서 보기</button>
        </div>
      </TransferContainer>
    </>
  )
}

export default SmartSaving
