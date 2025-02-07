import { StepMoveProps } from '@/_types/FunnelTypes'
import NavBar from '@/_components/common/NavBar/page'
import React, { useState } from 'react'
import AccountCard from '@/_components/common/AccountCard/page'
import Inputs from '@/_components/common/Inputs/page'
import Button from '@/_components/common/Button/page'
import { PlusIcon, WooriBank, ArrowDown } from '@/_assets/icons'
import BottomSheet from '@/_components/common/BottomSheet/page'
import Tag from '@/_components/common/Tag/page'

const ConfirmAccount = ({ onPrev }: StepMoveProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return <main className="h-dvh flex flex-col gap-5">
    <div className="flex flex-col px-5">
      <NavBar leftControl="icon" rightControl="icon" title="이체" onClickBack={onPrev} />
    </div>
    <div className="flex flex-row gap-2 px-5 py-4 text-[16px] bg-Neutral-Tertiary font-medium">
      <div className="text-Neutral-Default">출금계좌</div>
      <div>신한 123456-78-910112</div>
    </div>
    <div className="px-5">
      <AccountCard accountNumber="우리 1002-345-678910" name="김손자" isEditing />
    </div>
    <section className="flex-1 flex">
      <Inputs description="10만 원" total="100,000원" />
    </section>
    <section className="px-5 flex flex-col gap-2">
      <div className="text-Neutral-Label text-[16px] font-medium">받는 분 통장 표시</div>
      <input type="text" placeholder="받는 분" className="p-4 rounded-xl border" />
    </section>
    <section className="px-5 flex flex-col gap-2">
      <div className="text-Neutral-Label text-[16px] font-medium">내 통장 표시</div>
      <input type="text" placeholder="내 통장" className="p-4 rounded-xl border" />
    </section>
    <section className="flex flex-row justify-end items-center gap-1">
      <PlusIcon width="16" height="16" fill="#000000" />
      <div className="text-[16px] font-medium">추가이체</div>
    </section>
    <div className="p-5 flex">
      <Button
        type="Fill"
        status="Default"
        size="Large"
        onClick={open}
      >다음</Button>
    </div>
    <BottomSheet isOpen={isOpen}>
      <main className="flex flex-col px-5 py-10 justify-center items-center gap-[18px]">
        <section className="flex flex-col gap-2 justify-center items-center">
          <WooriBank />
          <div className="text-2xl"><b>김손자</b>님께<br /><b>100,000원</b>을 이체합니다.</div>
        </section>
        <div>우리 1002-345-678910</div>
        <Tag type="Default">받는 분과 금액을 한 번 더 확인해주세요</Tag>
        <section className="self-stretch">
          <div className="flex justify-end flex-row items-center gap-1">이체 상세정보<ArrowDown width="11.6" height="6.6"
                                                                                          fill="#6B7684" /></div>
        </section>
        <section className="flex flex-row gap-2 self-stretch">
          <Button type="Soft" status="Default" size="Large" onClick={close}>취소</Button>
          <Button type="Fill" status="Default" size="Large">이체</Button>
        </section>
      </main>
    </BottomSheet>
  </main>
}

export default ConfirmAccount