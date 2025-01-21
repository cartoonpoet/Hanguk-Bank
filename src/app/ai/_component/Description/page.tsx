import styles from './style.module.scss'
import Button from '@/_components/common/Button/page'
import { useContext } from 'react'
import { AiContext } from '@/_contexts/useAiContext'
import Savings from '@/_components/common/Savings/page'
import { handleSpeak } from '@/_hooks/useScene'
import FloatingButton from '@/app/home/_components/floating-button'



const Page = () => {
  const { scene, work } = useContext(AiContext)

  if (!scene) return null
  return <div className={styles.container}>
    <div className={styles.wrapper}>
      <section className={styles.workSection}>
        <div className={styles.name}>한국 스마트적금</div>
        <button className={styles.btn}>설명서 보기</button>
      </section>
      <FloatingButton/>
        
    </div>
  </div>
}

export default Page