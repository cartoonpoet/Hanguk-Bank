'use client'

import BottomSheet from '@/_components/common/BottomSheet/page'
import Card from '@/_components/common/Card/Page'
import List from '@/_components/common/List/page'
import AccountTransferStepper from './_components/VoiceWorker/AccountTransfer/account-transfer-stepper'
import styles from './_style/page.module.scss'

import useCommonStore from '@/_hooks/useCommonStore'
import { useState } from 'react'

import { URL } from '@/_constants/url'
import { redirect, useRouter } from 'next/navigation'
import AiButton from './_components/AIButton/ai-button'
import VoiceButton from './_components/VoiceButton/voice-button'
import VoiceWorker from './_components/VoiceWorker/voice-worker'

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
        {isOpen && <VoiceWorker />}
      </BottomSheet>
    </>
  )
}
export default Home
