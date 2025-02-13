import Title from '@/_components/common/BottomSheet/components/title'
import TransferContainer from '@/_components/common/BottomSheet/components/transfer-container'

import { Dispatch, SetStateAction, useState } from 'react'
import Manual from './Manual/page'

const SmartSaving = ({
  close,
  handleIsShowMic,
}: {
  close: () => void
  handleIsShowMic: (status: boolean) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return !isOpen ? (
    <>
      <Title
        title='스마트적금을 가입하시겠어요?'
        description='가입 전 상품설명서를 확인해 주세요.'
      />
      <TransferContainer className='w-full flex flex-col items-start p-4 pymb-2 rounded-xl gap-3'>
        <strong className='text-black'>한국 스마트적금</strong>
        <div className='w-full flex justify-center text-[#007BFF] border border-[#007BFF] p-1 rounded-xl'>
          <button
            className='p-2'
            onClick={() => {
              setIsOpen(true)
              handleIsShowMic(false)
            }}
          >
            설명서 보기
          </button>
        </div>
      </TransferContainer>
    </>
  ) : (
    <Manual onClickClose={close} isShowMic={false} isShowButton={false} />
  )
}

export default SmartSaving
