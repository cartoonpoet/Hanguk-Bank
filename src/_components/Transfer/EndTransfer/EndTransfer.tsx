import NavBar from '@/_components/common/NavBar/page'
import React, { use } from 'react'
import { StepMoveProps } from '@/_types/FunnelTypes'
import { CheckIcon, StarIcon, ShareIcon } from '@/_assets/icons'
import Image from 'next/image'
import { TransferContext } from '@/_contexts/useTransferContext'
import Tag from '@/_components/common/Tag/page'
import Button from '@/_components/common/Button/page'
import { useRouter } from 'next/navigation'
import { URL } from '@/_constants/url'

const EndTransfer = ({ onPrev }: StepMoveProps) => {
  const { amount } = use(TransferContext)
  const router = useRouter()

  return (
    <main className="h-dvh flex flex-col gap-5">
      <div className="flex flex-col px-5">
        <NavBar leftControl="icon" rightControl="icon" title="이체" onClickBack={onPrev} />
      </div>
      <section className="flex flex-col flex-1 justify-center items-center gap-5">
        <Image src={CheckIcon} alt="Check icon" />
        <div className="text-center text-2xl font-medium">
          <span className="font-bold">김손자</span>님께<br />
          <span className="font-bold">{amount.toLocaleString()}원</span><br />
          이체가 완료되었습니다.
        </div>
        <section className="flex flex-row gap-2">
          <Tag type="Default">
            <div className="flex flex-row gap-1 text-base justify-center items-center text-black font-semibold">우리
              1002-345-678910 <StarIcon width="16" height="15" fill="#6B7684" /></div>
          </Tag>
          <div className="flex w-10 py-2.5 rounded-full bg-Neutral-Tertiary justify-center items-center"><ShareIcon
            width="20" height="20" fill="black" /></div>
        </section>
        <section className="flex flex-row gap-2 self-stretch px-5 py-10">
          <Button type="Outline" status="Default" size="Medium">
            <div className="text-[18px] font-semibold">거래내역 조회</div>
          </Button>
          <Button type="Outline" status="Default" size="Medium">
            <div className="text-[18px] font-semibold">추가이체</div>
          </Button>
        </section>
      </section>
      <section className="flex p-5">
        <Button type="Fill" status="Default" size="Large" onClick={() => router.replace(URL.home)}>
          <div className="font-semibold text-[18px]">확인</div>
        </Button>
      </section>
    </main>
  )
}

export default EndTransfer