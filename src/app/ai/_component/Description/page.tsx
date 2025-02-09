import styles from './style.module.scss'
import { useContext } from 'react'
import { AiContext } from '@/_contexts/useAiContext'
import FloatingButton from '@/app/home/_components/VoiceWorker/AccountTransfer/floating-button'

const Page = () => {
  const { scene, setIsShowManual } = useContext(AiContext)

  if (!scene) return null
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.workSection}>
          <div className={styles.name}>한국 스마트적금</div>
          <button className={styles.btn} onClick={() => setIsShowManual(true)}>
            설명서 보기
          </button>
        </section>
        <FloatingButton />
      </div>
    </div>
  )
}

export default Page
