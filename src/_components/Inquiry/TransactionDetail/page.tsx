import NavBar from '@/_components/common/NavBar/page'
import React, { use } from 'react'
import { InquiryContext } from '@/_contexts/useInquiryContext'
import { InquirySteps } from '@/_constants/mode'
import HistoryTitle from '@/_components/Inquiry/TransactionDetail/_components/HistoryTitle'
import HistoryContents from '@/_components/Inquiry/TransactionDetail/_components/HistoryContents'
import Button from '@/_components/common/Button/page'
import SNSList from '@/_components/Inquiry/TransactionDetail/_components/SNSList'
import { useRouter } from 'next/navigation'
import { URL } from '@/_constants/url'

const TransactionDetailPage = () => {
  const { setStep } = use(InquiryContext)
  const router = useRouter()

  return <main className="h-dvh flex flex-col">
    <div className="flex flex-col px-5">
      <NavBar leftControl="icon" rightControl="none" title="거래내역 상세" onClickBack={() => setStep(InquirySteps[1])} />
    </div>
    <div className="h-4" />
    <HistoryTitle />
    <HistoryContents />
    <SNSList />
    <div className="flex flex-row px-5 pb-5"><Button type="Fill" status="Default" size="Large"
                                                     onClick={() => router.replace(URL.home)}>확인</Button></div>
  </main>
}

export default TransactionDetailPage