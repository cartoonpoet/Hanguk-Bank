import React from 'react'
import styles from './_style/layout.module.scss'
import Button from '@/app/_component/Button/page'

type layoutProps = {
  children: React.ReactNode
}

const layout = ({ children }: layoutProps) => {
  return <div className={styles.container}>
    <main className={styles.body}>
      {children}
    </main>
    <div className={styles.fixedBtn}><Button name="다음" type="Fill" status="Disabled" size="Large" href="/" /></div>
  </div>
}

export default layout