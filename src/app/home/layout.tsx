import React from 'react'
import styles from './_style/layout.module.scss'


interface layoutProps {
  children: React.ReactNode
  menu: React.ReactNode
  workButton: React.ReactNode
}


const layout = ({ children, menu, workButton}: layoutProps) => {
  return <div className={styles.container}>
    <main className={styles.body}>
      {workButton}
      {children}
    </main>
    {menu}
  </div>

}

export default layout
