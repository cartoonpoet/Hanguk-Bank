'use client'

import NavBar from '@/_components/common/NavBar/page'
import React, { use } from 'react'
import { InquiryContext } from '@/_contexts/useInquiryContext'
import { InquirySteps } from '@/_constants/mode'
import AccountInfo from '@/_components/Inquiry/SelectAccountDetail/_components/AccountInfo'
import SearchBar from '@/_components/common/SearchBar/page'
import { MagnifierIcon } from '@/_assets/icons'
import { transferHistory } from '@/_components/Inquiry/SelectAccountDetail/_mock/data'
import Row from '@/_components/Inquiry/SelectAccountDetail/_components/Row'

const SelectAccountDetail = () => {
  const { setStep } = use(InquiryContext)
  return <main className="h-dvh flex flex-col">
    <div className="flex flex-col px-5">
      <NavBar leftControl="icon" rightControl="text" title="저축예금통장" onClickBack={() => setStep(InquirySteps[0])} />
    </div>
    <div className="h-4"/>
    <AccountInfo/>
    <div className="h-4 bg-Neutral-Tertiary"/>
    <section className="px-5"><SearchBar iconChildren={<MagnifierIcon/>}/></section>
    <div className="px-5 font-medium text-base">11월 20일</div>
    {transferHistory.map((item, index) => (<Row key={index} {...item} onClick={() => setStep(InquirySteps[2])}/>))}
  </main>
}

export default SelectAccountDetail