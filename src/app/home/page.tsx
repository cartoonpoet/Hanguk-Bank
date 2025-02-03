'use client'

import styles from './_style/page.module.scss'
import Card from '@/_components/common/Card/Page'
import List from '@/_components/common/List/page'
import BottomSheet from '@/_components/common/BottomSheet/page'
import VoiceWorkStepper from './_components/AccountTransfer/voice-work-stepper'

import { useState } from 'react'
import useCommonStore from '@/_hooks/useCommonStore'

import { useRouter, redirect } from 'next/navigation'
import { URL } from '@/_constants/url'
import AccountInquiryStepper from './_components/AccountInquiry/account-inquiry-stepper'
import FinancialProductsStepper from './_components/FinancialProducts/financial-product-stepper'
import CustomerServicetepper from './_components/CustomerService/customer-service-stepper'
import VoiceButton from './_components/VoiceButton/voice-button'
import AiButton from './_components/AIButton/ai-button'

const Home = () => {
  const { mode } = useCommonStore()

  if (!mode) redirect('/')

  const router = useRouter()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <>
      <div className={styles.container}>
        <header className={styles.user}>
          <div>김금융 님</div>
          {mode === 'voice' && <VoiceButton onClick={open} />}
          {mode === 'ai' && <AiButton onClick={() => router.push(URL.ai)} />}
        </header>
        <Card />
        <section className={styles.listContainer}>
          <List />
        </section>
      </div>
      <BottomSheet isOpen={isOpen} onClose={close}>
        {isOpen && <CustomerServicetepper />}
      </BottomSheet>
    </>
  )
}
export default Home
