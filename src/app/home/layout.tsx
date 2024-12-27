import React from 'react'
import styles from './_style/layout.module.scss'
// import MenuTabBar from '@/app/_component/MenuTabBar/page'


type layoutProps = {
  children: React.ReactNode
  menu: React.ReactNode
}

const layout = ({ children, menu, }: layoutProps) => {
  return <div className={styles.container}>
    <main className={styles.body}>
      {children}
    </main>
    {/*<MenuTabBar />*/}
    {menu}
  </div>
}

export default layout