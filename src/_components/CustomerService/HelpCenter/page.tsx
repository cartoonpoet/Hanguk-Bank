'use client'

import NavBar from '@/_components/common/NavBar/page'
import { URL } from '@/_constants/url'
import Header from '@/_components/CustomerService/_components/Header'
import ButtonGroup from '@/_components/CustomerService/_components/ButtonGroup'
import Menu from '@/_components/CustomerService/_components/Menu'
import React from 'react'
import { useRouter } from 'next/navigation'

const Menus = [
  '지점 상담예약',
  '전문가상담 예약',
  '지점찾기/번호표 발행',
  '',
  '나의 상담내역',
  '자주묻는 질문(FAQ)',
  '',
  '편의점 제휴 ATM 찾기',
  '영업시간 특화지점 안내/찾기',
]

const HelpCenter = () => {
  const router = useRouter()
  return <main className="h-dvh flex flex-col">
    <div className="flex flex-col px-5">
      <NavBar leftControl="icon" rightControl="icon" title="고객센터" onClickBack={() => router.replace(URL.home)} />
    </div>
    <div className="h-4" />
    <Header />
    <ButtonGroup />
    <div className="h-4 bg-Neutral-Tertiary" />
    {Menus.map((item, idx) => {
      if (!item) return <div className="h-4 bg-Neutral-Tertiary" key={item+idx} />
      return <Menu title={item} key={item} />
    })}
  </main>
}

export default HelpCenter