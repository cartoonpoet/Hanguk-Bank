import { ArrowDown, WooriBank } from '@/_assets/icons'
import Tag from '@/_components/common/Tag/page'
import Button from '@/_components/common/Button/page'
import React, { use } from 'react'
import { TransferContext } from '@/_contexts/useTransferContext'

interface ConfirmTransferProps {
  onCancel?: () => void
  onSubmit?: () => void
}

const ConfirmTransfer = ({ onCancel, onSubmit }: ConfirmTransferProps) => {
  const { amount } = use(TransferContext)
  return <main className="flex flex-col px-5 py-10 justify-center items-center gap-[18px]">
    <section className="flex flex-col gap-2 justify-center items-center">
      <WooriBank />
      <div className="text-2xl"><b>김손자</b>님께<br /><b>{amount.toLocaleString()}원</b>을 이체합니다.</div>
    </section>
    <div className="flex flex-col gap-2.5">
      우리 1002-345-678910<Tag type="Default">받는 분과 금액을 한 번 더 확인해주세요</Tag>
    </div>
    <section className="self-stretch">
      <div className="flex justify-end flex-row items-center gap-1">이체 상세정보<ArrowDown width="11.6" height="6.6"
                                                                                      fill="#6B7684" /></div>
    </section>
    <section className="flex flex-row gap-2 self-stretch">
      <Button type="Soft" status="Default" size="Large" onClick={onCancel}>취소</Button>
      <Button type="Fill" status="Default" size="Large" onClick={onSubmit}>이체</Button>
    </section>
  </main>
}

export default ConfirmTransfer