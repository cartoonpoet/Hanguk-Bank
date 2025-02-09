import { StepMoveProps } from '@/_types/FunnelTypes'
import NavBar from '@/_components/common/NavBar/page'
import React, { use, useEffect } from 'react'
import AccountCard from '@/_components/common/AccountCard/page'
import Inputs from '@/_components/common/Inputs/page'
import Button from '@/_components/common/Button/page'
import { PlusIcon } from '@/_assets/icons'
import CustomBottonSheet from '@/_components/common/CustomBottonSheet/page'
import ConfirmTransfer from '@/_components/Transfer/ConfirmAccount/_components/ConfirmTransfer'
import EnterPassword from '@/_components/Transfer/ConfirmAccount/_components/EnterPassword'
import { TransferContext } from '@/_contexts/useTransferContext'
import { numberToKorean } from '@/_utils/Bank'

const ConfirmAccount = ({ onPrev, onNext }: StepMoveProps) => {
  const { isOpen, setIsOpen, setMode, mode, amount, setPassword, password } = use(TransferContext)
  const open = () => {
    setPassword(_ => {
      return ''
    })
    setMode('ConfirmTransfer')
    setIsOpen(true)
  }
  const close = () => setIsOpen(false)

  useEffect(() => {
    if(onNext && password.length === 4) onNext()
  }, [onNext, password])

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
      <Inputs description={`${numberToKorean(amount)} 원`} total={`${amount.toLocaleString()}원`} />
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
    <CustomBottonSheet isOpen={isOpen} onClose={mode === 'EnterPassword' ? close : undefined}
                       headerBackgroundColor={mode === 'EnterPassword' ? 'var(--Brand-Default, #007BFF)' : undefined}>
      {mode === 'ConfirmTransfer' ?
        <ConfirmTransfer onCancel={close} onSubmit={() => setMode('EnterPassword')} /> : <EnterPassword />}
    </CustomBottonSheet>
  </main>
}

export default ConfirmAccount