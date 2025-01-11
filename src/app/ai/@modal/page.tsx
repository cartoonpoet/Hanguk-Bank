'use client'

import styles from './page.module.scss'
import Mic from '/public/icon/icon-mic.svg'
import FloatingButton from '@/app/home/components/floating-button'
import Link from 'next/link'

const WORKLIST = ['이체해줘', '계좌조회 해줘', '적금 추천해줘', '고객센터 연결해줘']

const Page = () => {
  return <div className={styles.container}>
    <div className={styles.wrapper}>
      <section className={styles.workSection}>
      {WORKLIST.map(work => <Link key={work} href={''} className={styles.work_btn}>{work}</Link>)}
      </section>
      <FloatingButton>
        <Mic />
      </FloatingButton>
    </div>
  </div>
}

export default Page