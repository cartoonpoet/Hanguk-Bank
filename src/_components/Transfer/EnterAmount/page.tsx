'use client'

import NavBar from '@/_components/common/NavBar/page'
import React from 'react'
import { StepMoveProps } from '@/_types/FunnelTypes'
import KeyboardNumber from '@/_components/common/KeyboardNumber/page'
import Tag from '@/_components/common/Tag/page'

const tagNames = ['전액', '100만', '10만', '5만', '1만']


const EnterAmount = ({ onNext, onPrev }: StepMoveProps) => {
  return (
    <main className="h-dvh flex flex-col">
      <div className="flex flex-col px-5 gap-5 flex-1">
        <NavBar leftControl="icon" rightControl="icon" title="이체" onClickBack={onPrev} />
        <section className="flex flex-col p-5 rounded-2xl border border-Border-Default border-solid">
          <div className="text-lg font-medium"><span className="font-bold">김손자</span>님</div>
          <div className="text-Neutral-Label text-base font-medium">우리 1002-345-678910</div>
        </section>
        <section className="flex flex-col justify-center items-center py-5 gap-2.5 flex-1">
          <div className="text-3xl font-bold">0원</div>
          <div className="text-base font-medium color-Neutral-Default">출금가능금액 12,345,600원</div>
        </section>
      </div>
      <section className="p-5 rounded-t-2xl shadow-[0_-8px_16px_0_rgba(0,0,0,0.10)] flex flex-col gap-5">
        <div className="flex flex-row gap-2 justify-center">
          {tagNames.map((tag) => (<Tag key={tag}>{tag}</Tag>))}
        </div>
        <KeyboardNumber onClick={onNext}>
          <span className="text-Brand-Default text-lg font-medium">완료</span>
        </KeyboardNumber>
      </section>
    </main>
  )
}

export default EnterAmount