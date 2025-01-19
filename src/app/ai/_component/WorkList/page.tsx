'use client'

import styles from './style.module.scss'
import Mic from '/public/icon/icon-mic.svg'
import FloatingButton from '@/app/home/components/floating-button'
import { handleSpeak } from '@/_hooks/useScene'
import {useContext} from "react";
import {AiContext} from "@/_contexts/useAiContext";

const WORKS = ['이체해줘', '계좌조회 해줘', '적금 추천해줘', '고객센터 연결해줘']

const Page = () => {
  const { scene, work: currentWork } = useContext(AiContext)

  if (!scene) return null
  return <div className={styles.container}>
    <div className={styles.wrapper}>
      <section className={styles.workSection}>
        {WORKS.map(work => <div key={work} className={styles.work_btn}
                                onClick={async () => await handleSpeak(scene, work, currentWork)}>{work}</div>)}
      </section>
      <FloatingButton>
        <Mic />
      </FloatingButton>
    </div>
  </div>
}

export default Page;