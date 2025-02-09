'use client'

import Savings from '@/_components/common/Savings/page'
import { useContext } from 'react'
import { AiContext } from '@/_contexts/useAiContext'
import styles from './style.module.scss'
import { handleSpeak } from '@/_hooks/useScene'

import { ConsultationType } from '@/_types/AiStoreTypes'
import FloatingButton from '@/app/home/_components/VoiceWorker/AccountTransfer/floating-button'

const savingsData = [
  {
    name: '전화 상담',
    rate: 0,
    contents: '전화로 상담받기',
  },
  {
    name: '챗봇 상담',
    rate: 0,
    contents: '채팅으로 즉시 상담받기',
  },
]

const Page = () => {
  const { scene, work, setConsultationType } = useContext(AiContext)

  if (!scene) return null
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.workSection}>
          {savingsData.map((item, i) => (
            <Savings
              key={item.name}
              number={i + 1}
              name={item.name}
              rate={item.rate}
              contents={item.contents}
              onClick={async () => {
                await handleSpeak(scene, item.name, work)
                setConsultationType(item.name as ConsultationType)
              }}
            />
          ))}
        </section>
        <FloatingButton />
      </div>
    </div>
  )
}

export default Page
