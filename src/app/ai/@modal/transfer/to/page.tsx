'use client'

import { useAiStore } from '@/app/ai/_hooks/useAiStore'
import styles from './page.module.scss'
import FloatingButton from '@/app/home/components/floating-button'
import Mic from '/public/icon/icon-mic.svg'
import React from 'react'
import ShinHan from '/public/bank/shinhan.svg'
import KbStar from '/public/bank/kbstar.svg'
import KaKaoBank from '/public/bank/kakaobank.svg'
import { handleSpeak } from '@/app/ai/_hooks/useScene'

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

const getBankIcon = (accountType: string) => {
  switch (accountType) {
    case '신한':
      return <ShinHan />
    case '국민':
      return <KbStar />
    case '카카오뱅크':
      return <KaKaoBank />
  }
}

const Page = () => {
  const { scene } = useAiStore()

  if (!scene) return null
  return <div className={styles.container}>
    <div className={styles.wrapper}>
      <section className={styles.workSection}>
        {ACCOUNTS.map((accountRow) => (
          <button key={accountRow.accountNumber} className={styles.account}
                  onClick={async () => await handleSpeak(scene, `${accountRow.name}에게 이체해줘`)}>
            {getBankIcon(accountRow.accountType)}
            <div className={styles.accountInfo}>
              <div className={styles.name}>{accountRow.name}</div>
              <div className={styles.info}>{accountRow.accountType} {accountRow.accountNumber}</div>
            </div>
          </button>
        ))}
      </section>
      <FloatingButton>
        <Mic />
      </FloatingButton>
    </div>
  </div>
}

export default Page