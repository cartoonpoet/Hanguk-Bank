import React from 'react'
import styles from './_style/layout.module.scss'
import TabBar from '@/app/_component/TabBar/page'

type layoutProps = {
  children: React.ReactNode
}

const layout = ({ children }: layoutProps) => {
  return <div className={styles.container}>
    <main className={styles.body}>
      {children}
      <TabBar />/
    </main>
  </div>
}

export default layout