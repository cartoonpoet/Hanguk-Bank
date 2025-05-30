import React from 'react'
import styles from './_style/layout.module.scss'


interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <div className={styles.container}>
    {children}
  </div>
}

export default Layout