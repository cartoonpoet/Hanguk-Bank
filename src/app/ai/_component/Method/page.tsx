'use client'

import styles from './style.module.scss'
import Mic from '/public/icon/icon-mic.svg'
import FloatingButton from '@/app/home/_components/AccountTransfer/floating-button'
import { handleSpeak } from '@/_hooks/useScene'
import { useContext } from 'react'
import { AiContext } from '@/_contexts/useAiContext'

const Page = () => {
  const { scene, work: currentWork } = useContext(AiContext)

  if (!scene) return null
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.workSection}>
          <div
            className={styles.work_btn}
            onClick={async () =>
              await handleSpeak(
                scene,
                '원하는 금액을 자유롭게 적립',
                currentWork
              )
            }
          >
            <span className={styles.highlight}>원하는 금액을 자유롭게</span>{' '}
            적립
          </div>
          <div
            className={styles.work_btn}
            onClick={async () =>
              await handleSpeak(
                scene,
                '매월 정해진 금액을 같은 날짜에 적립',
                currentWork
              )
            }
          >
            <span className={styles.highlight}>매월 정해진 금액</span>을 같은
            날짜에 적립
          </div>
        </section>
        <FloatingButton />
      </div>
    </div>
  )
}

export default Page
