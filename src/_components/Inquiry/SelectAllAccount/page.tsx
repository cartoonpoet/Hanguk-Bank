'use client'

import NavBar from '@/_components/common/NavBar/page'
import React, { use } from 'react'
import { StepMoveProps } from '@/_types/FunnelTypes'
import Tag from '@/_components/common/Tag/page'
import SearchBar from '@/_components/common/SearchBar/page'
import { MenuEllipseIcon, ReloadIcon, ArrowDown as ArrowRight } from '@/_assets/icons'
import AccountCard from '@/_components/Inquiry/SelectAllAccount/_components/AccountCard'
import { InquiryContext } from '@/_contexts/useInquiryContext'
import { InquirySteps } from '@/_constants/mode'

const TAGS = [
  {
    name: '입출금',
    isActive: true,
  },
  {
    name: '청약',
    isActive: false,
  },
  {
    name: '대출',
    isActive: false,
  },
]

const accountList = [{
  accountName: '저축예금통장',
  accountNumber: '123456-78-910112',
  balance: 12345600,
},
  {
    accountName: '입출금통장',
    accountNumber: '987654-32-109876',
    balance: 8800000,
  },
]


const Page = ({}: StepMoveProps) => {
  const { setStep } = use(InquiryContext)

  return <main className="h-dvh flex flex-col">
    <div className="flex flex-col px-5">
      <NavBar leftControl="icon" rightControl="icon" title="전체 계좌 조회" />
    </div>
    <section className="flex flex-row text-lg font-bold border-b border-Border-Default">
      <div className="flex-1 p-4 flex justify-center">한국은행</div>
      <div className="flex-1 p-4 flex justify-center text-Neutral-Default">다른 은행</div>
    </section>
    <section className="flex flex-row gap-2 p-5">
      {TAGS.map(tag => <Tag type={tag.isActive ? 'Focus' : 'Default'} key={tag.name}>{tag.name}</Tag>)}
    </section>
    <div className="h-4 flex bg-Neutral-Tertiary" />
    <section className="px-5">
      <SearchBar iconChildren={
        <>
          <ReloadIcon width="16.66" height="16.66" fill="#6B7684" />
          <MenuEllipseIcon width="3.33" height="15" fill="#6B7684" />
        </>
      } />
    </section>
    <section className="flex p-5 flex-col gap-2.5">
      <div className="flex flex-row justify-between text-lg">
        <div className="font-medium">입출금 <span className="text-Brand-Default">2</span></div>
        <div className="flex justify-center items-center gap-1 font-semibold">21,145,600원
          <ArrowRight width="14"
                      height="15"
                      fill="#6B7684"
                      className="-rotate-90" />
        </div>
      </div>
      {accountList.map((account) => (
        <AccountCard accountNumber={account.accountNumber} accountName={account.accountName}
                     balance={account.balance} key={account.accountNumber}
                     onClick={() => setStep(InquirySteps[1])} />))}
    </section>
  </main>
}

export default Page