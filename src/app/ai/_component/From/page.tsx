'use client'

import styles from './style.module.scss'
import Mic from '/public/icon/icon-mic.svg'
import FloatingButton from '@/app/home/components/floating-button'
import { handleSpeak } from '@/app/ai/_hooks/useScene'
import {useContext} from "react";
import {AiContext} from "@/app/ai/_hooks/useAiContext";

const ACCOUNTS = [
  {
    name: '저축예금통장',
    kind: '한국',
    number: '123456-78-910112',
    balance: 12345600,
  },
  {
    name: '입출금통장',
    kind: '한국',
    number: '987654-32-109876',
    balance: 8800000,
  },
]

const Page = () => {
  const { scene } = useContext(AiContext)

  if (!scene) return null
  return <div className={styles.container}>
    <div className={styles.wrapper}>
      <section className={styles.workSection}>
        {ACCOUNTS.map((account, idx) => <ul key={account.number} className={styles.work_btn} onClick={async () => {
          await handleSpeak(scene, `${idx+1}번 계좌로 이체해줘`)
        }}
        >
          <li className={styles.title}>
            <div className={styles.order}>{String(idx + 1).padStart(2, '0')}</div>
            <div className={styles.name}>{account.name}</div>
          </li>
          <li className={styles.sub}>{account.kind} {account.number}</li>
          <li className={styles.balance}>{account.balance.toLocaleString()}원</li>
        </ul>)}
      </section>
      <FloatingButton>
        <Mic />
      </FloatingButton>
    </div>
  </div>
}

export default Page