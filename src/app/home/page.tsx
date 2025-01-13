'use client'

import styles from './_style/page.module.scss'
import Card from '@/app/_component/Card/Page'
import List from '@/app/_component/List/page'
import BottomSheet from '../_component/BottomSheet/page'

import VoiceWorkStepper from './components/voice-work-stepper'
import VoiceButton from './components/voice-button'
import { useState } from 'react'

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  return (
    <>
      <div className={styles.container}>
        <header className={styles.user}>
          <span>김금융 님</span>
          <VoiceButton onClick={open} />
        </header>
        <Card />
        <section className={styles.listContainer}>
          <List />
        </section>
      </div>
      <BottomSheet isOpen={isOpen} onClose={close}>
        <VoiceWorkStepper step='ACCOUNT_LIST' />
      </BottomSheet>
    </>
  )
}
export default Home
