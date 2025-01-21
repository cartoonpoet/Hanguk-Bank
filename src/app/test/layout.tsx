import React from 'react'
import styles from './layout.module.scss'

interface layoutProps {
  children: React.ReactNode
}

const layout = ({ children }: layoutProps) => {
  return (
    <div className={styles.container}>
      <main className={styles.body}>{children}</main>
    </div>
  )
}

export default layout
