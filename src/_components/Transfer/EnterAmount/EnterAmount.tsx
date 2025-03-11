'use client'

import NavBar from '@/_components/common/NavBar/page'
import React, { use } from 'react'
import { StepMoveProps } from '@/_types/FunnelTypes'
import KeyboardNumber from '@/_components/common/KeyboardNumber/page'
import Tag from '@/_components/common/Tag/page'
import AccountCard from '@/_components/common/AccountCard/page'
import Inputs from '@/_components/common/Inputs/page'
import { TransferContext } from '@/_contexts/useTransferContext'

// const tagNames = ['전액', '100만', '10만', '5만', '1만']

const tagNames = [
  {
    label: '전액',
    value: 12345600,
  },
  {
    label: '100만',
    value: 1000000,
  },
  {
    label: '10만',
    value: 100000,
  },
  {
    label: '5만',
    value: 50000,
  },
  {
    label: '1만',
    value: 10000,
  },
]


const EnterAmount = ({ onNext, onPrev }: StepMoveProps) => {
  const { amount, balance, setAmount } = use(TransferContext)

  const onClick = (number: number) => {
    setAmount((prev: number) => {
      if (number === -1) {
        return Math.floor(prev / 10)  // 10으로 나누고, 소수점 버림
      }
      return prev * 10 + number
    })
  }

  const onTagClick = (number: number) => {
    setAmount((prev: number) => {
      if (prev + number > balance) return balance
      return prev + number
    })
  }

  return (
    <main className="h-dvh flex flex-col">
      <div className="flex flex-col px-5 gap-5 flex-1">
        <NavBar leftControl="icon" rightControl="icon" title="이체" onClickBack={onPrev} />
        <AccountCard accountNumber="우리 1002-345-678910" name="김손자" isEditing={false} />
        <Inputs description={`출금가능금액 ${balance.toLocaleString()}원`} total={`${amount.toLocaleString()}원`} />
      </div>
      <section className="p-5 rounded-t-2xl shadow-[0_-8px_16px_0_rgba(0,0,0,0.10)] flex flex-col gap-5">
        <div className="flex flex-row gap-2 justify-center">
          {tagNames.map((tag) => (
            <Tag type="Default" key={tag.value} onClick={() => onTagClick(tag.value)}>{tag.label}</Tag>))}
        </div>
        <KeyboardNumber onClick={onNext} onClickNumber={onClick}>
          <span className="text-Brand-Default text-lg font-medium">완료</span>
        </KeyboardNumber>
      </section>
    </main>
  )
}

export default EnterAmount