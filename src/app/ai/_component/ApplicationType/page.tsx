'use client'

import Savings from '@/_components/common/Savings/page'
import { useContext } from 'react'
import { AiContext } from '@/_contexts/useAiContext'
import styles from './style.module.scss'
import FloatingButton from '@/app/home/_components/floating-button'


const savingsData = [
  {
    name: '사고 신고',
    rate: 0,
    contents: '',
  },
  {
    name: '뱅킹/예금',
    rate: 0,
    contents: '',
  },
  {
    name: '펀드',
    rate: 0,
    contents: '',
  },
  {
    name: '대출',
    rate: 0,
    contents: '',
  },
  {
    name: '퇴직연금',
    rate: 0,
    contents: '',
  },
  {
    name: '민원 접수',
    rate: 0,
    contents: '',
  },
]

const Page = () => {
  const { scene, setApplicationType } = useContext(AiContext)

  if (!scene) return null
  return <div className={styles.container}>
    <div className={styles.wrapper}>
      <section className={styles.workSection}>
        {savingsData.map((item, i) => <div className={styles.item} key={item.name}><Savings key={item.name}
                                                                                            number={i + 1}
                                                                                            name={item.name}
                                                                                            rate={item.rate}
                                                                                            contents={item.contents}
                                                                                            onClick={() => {
                                                                                              setApplicationType(item.name)
                                                                                            }} />
        </div>)}
      </section>
      <FloatingButton />

    </div>
  </div>
}

export default Page