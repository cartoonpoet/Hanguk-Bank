'use client'

import NavBar from '@/_components/common/NavBar/page'
import React from 'react'
import { StepMoveProps } from '@/_types/FunnelTypes'
import Tag from '@/_components/common/Tag/page'

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

const SelectAccount = ({}: StepMoveProps) => {
  return <main className="h-dvh flex flex-col gap-5">
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
  </main>
}

export default SelectAccount