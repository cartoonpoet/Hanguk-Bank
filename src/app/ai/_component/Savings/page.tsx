'use client'

import Savings from '@/_components/common/Savings/page'
import { useContext } from 'react'
import { AiContext } from '@/_contexts/useAiContext'
import styles from './style.module.scss'
import { handleSpeak } from '@/_hooks/useScene'
import FloatingButton from '@/app/home/_components/floating-button'
import Mic from '/public/icon/icon-mic.svg'

const savingsData = [
  {
    name: '스마트적금',
    rate: 8,
    contents: '신규 및 장기미거래 고객님께 우대 이율 제공',
  },
  {
    name: '특별한적금',
    rate: 6,
    contents: '내가 원하는 날을 만기일로 지정하고 변경 가능',
  },
  {
    name: '내맘대로적금',
    rate: 3.5,
    contents: '상품에 관한 다양한 옵션 제공, 상품 요건 설계',
  },
]

const Page = () => {
  const { scene, work } = useContext(AiContext)

  if (!scene) return null
  return <div className={styles.container}>
    <div className={styles.wrapper}>
      <section className={styles.workSection}>
        {savingsData.map((item, i) => <Savings key={item.name} number={i + 1} name={item.name} rate={item.rate}
                                               contents={item.contents}
                                               onClick={async () => await handleSpeak(scene, item.name, work)} />)}
      </section>
      <FloatingButton>
        <Mic />
      </FloatingButton>
    </div>
  </div>
}

export default Page