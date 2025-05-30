'use client'

import styles from './style.module.scss'
import FloatingButton from '@/app/home/_components/VoiceWorker/AccountTransfer/floating-button'
import Mic from '/public/icon/icon-mic.svg'
import React, { useContext } from 'react'
import { handleSpeak } from '@/_hooks/useScene'
import { AiContext } from '@/_contexts/useAiContext'
import { getBankIcon } from '@/_utils/Bank'

const ACCOUNTS = [
  {
    accountType: '신한',
    name: '김신한',
    accountNumber: '110-234-567890',
  },
  {
    accountType: '국민',
    name: '나국민',
    accountNumber: '421001-23-456789',
  },
  {
    accountType: '카카오뱅크',
    name: '오카카',
    accountNumber: '3333-12-4567891',
  },
]

const Page = () => {
  const { scene, work } = useContext(AiContext)

  if (!scene) return null
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.workSection}>
          {ACCOUNTS.map((accountRow) => (
            <button
              key={accountRow.accountNumber}
              className={styles.account}
              onClick={async () => {
                // setSelectedTo(accountRow)
                await handleSpeak(scene, `${accountRow.name}에게 보내줘.`, work)
              }}
            >
              {getBankIcon(accountRow.accountType)}
              <div className={styles.accountInfo}>
                <div className={styles.name}>{accountRow.name}</div>
                <div className={styles.info}>
                  {accountRow.accountType} {accountRow.accountNumber}
                </div>
              </div>
            </button>
          ))}
        </section>
        <FloatingButton />
      </div>
    </div>
  )
}

export default Page
