'use client'

import SelectAllAccount from '@/_components/Inquiry/SelectAllAccount/page'
import InquiryContextProvider, { InquiryContext } from '@/_contexts/useInquiryContext'
import { use } from 'react'
import SelectAccountDetail from '@/_components/Inquiry/SelectAccountDetail/page'

const Inquiry = () => {
  const { Funnel, Step } = use(InquiryContext)
  return <Funnel>
    <Step name="전체 계좌 조회"><SelectAllAccount /></Step>
    <Step name="계좌 조회"><SelectAccountDetail /></Step>
  </Funnel>
}

const Page = () => {
  return <InquiryContextProvider><Inquiry /></InquiryContextProvider>
}

export default Page