'use client'

import styles from './style.module.scss'
import FloatingButton from '@/app/home/_components/VoiceWorker/AccountTransfer/floating-button'
import Mic from '/public/icon/icon-mic.svg'
import React, { useContext } from 'react'
import { handleSpeak } from '@/_hooks/useScene'
import { AiContext } from '@/_contexts/useAiContext'
import { getBankIcon } from '@/_utils/Bank'

const Page = () => {
  const { scene, selectedTo, work } = useContext(AiContext)

  if (!scene) return null
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.workSection}>
          <div className={styles.header}>김손자에게 100,000원 보낼게요.</div>
          <div className={styles.sub}>
            받는 분과 금액을 한 번 더 확인해주세요.
          </div>
          <button
            className={styles.account}
            onClick={async () =>
              await handleSpeak(scene, '김손자에게 100,000원 보내줘.', work)
            }
          >
            {getBankIcon('우리')}
            <div className={styles.accountInfo}>
              <div className={styles.name}>{selectedTo!.name}</div>
              <div className={styles.info}>
                {selectedTo!.accountType!} {selectedTo!.accountNumber}
              </div>
            </div>
          </button>
        </section>
        <FloatingButton />
      </div>
    </div>
  )
}

export default Page
