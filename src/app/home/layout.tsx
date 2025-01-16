import React from 'react'
import styles from './_style/layout.module.scss'

interface layoutProps {
  children: React.ReactNode
  menu: React.ReactNode
}


const layout = ({ children, menu}: layoutProps) => {
  return <div className={styles.container}>
    <main className={styles.body}>
      {children}
    </main>
    {menu}
  </div>

}

export default layout
