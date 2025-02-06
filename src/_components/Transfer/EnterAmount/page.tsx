import NavBar from '@/_components/common/NavBar/page'
import React from 'react'
import { StepMoveProps } from '@/_types/FunnelTypes'


const EnterAmount = ({ onNext, onPrev }: StepMoveProps) => {
  return (
    <main className="h-dvh">
      <div className="flex flex-col px-5 gap-5 flex-1">
        <NavBar leftControl="icon" rightControl="icon" title="이체" onClickBack={onPrev} />
        <section className="flex flex-col p-5 flex-1 rounded-2xl border border-Border-Default border-solid">
          <div className="text-lg font-medium"><span className="font-bold">김손자</span>님</div>
          <div className="text-Neutral-Label text-base font-medium">우리 1002-345-678910</div>
        </section>
        <section className="flex flex-col justify-center items-center py-5 gap-2.5 flex-1">
          <div className="text-3xl font-bold">0원</div>
          <div className="text-base font-medium color-Neutral-Default">출금가능금액 12,345,600원</div>
        </section>
      </div>
    </main>
  )
}

export default EnterAmount