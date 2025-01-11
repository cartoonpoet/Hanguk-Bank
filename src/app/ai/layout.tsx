import React from 'react'
import styles from './_style/layout.module.scss'
import AIAvatar from '@/app/ai/_component/AIAvatar'

interface LayoutProps {
  children: React.ReactNode
  modal: React.ReactNode
}

const Layout = ({ children, modal }: LayoutProps) => {
  return <div className={styles.container}>
    <AIAvatar/>
    {children}
    {modal}
  </div>
}

export default Layout