'use client'

import styles from './style.module.scss'
import ContentSwitcherSection from '@/app/_component/ContentSwitcherSection/page'
import { useState } from 'react'

const section = ['계좌', '연락처']

const ContentSwitcher = () => {
  const [selected, setSelected] = useState(0);

  return <div className={styles.wrapper}>
    {section.map((item, index) => (
      <ContentSwitcherSection key={item} selected={index === selected} title={item} onClick={() => setSelected(index)}/>))}
  </div>
}


export default ContentSwitcher