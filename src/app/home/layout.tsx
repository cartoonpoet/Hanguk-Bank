import React from 'react'
import styles from './_style/layout.module.scss'
import MenuTabBar from '@/app/_component/MenuTabBar/page'

type layoutProps = {
  children: React.ReactNode
}

const layout = ({ children }: layoutProps) => {
  return <div className={styles.container}>
    <main className={styles.body}>
      {children}
      <MenuTabBar />
    </main>
  </div>
}

export default layout