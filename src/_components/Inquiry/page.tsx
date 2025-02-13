'use client'

import SelectAllAccount from '@/_components/Inquiry/SelectAllAccount/page'
import InquiryContextProvider, { InquiryContext } from '@/_contexts/useInquiryContext'
import { use } from 'react'
import SelectAccountDetail from '@/_components/Inquiry/SelectAccountDetail/page'
import { InquirySteps } from '@/_constants/mode'
import TransactionDetailPage from '@/_components/Inquiry/TransactionDetail/page'

const Inquiry = () => {
  const { Funnel, Step } = use(InquiryContext)
  return <Funnel>
    <Step name={InquirySteps[0]}><SelectAllAccount /></Step>
    <Step name={InquirySteps[1]}><SelectAccountDetail /></Step>
    <Step name={InquirySteps[2]}><TransactionDetailPage /></Step>
  </Funnel>
}

const Page = () => {
  return <InquiryContextProvider><Inquiry /></InquiryContextProvider>
}

export default Page