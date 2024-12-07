'use client'

import React from 'react'
import styles from './_style/layout.module.scss'
import MenuTabBar from '@/app/_component/MenuTabBar/page'
import { usePathname } from 'next/navigation';

type layoutProps = {
  children: React.ReactNode
}

const layout = ({ children }: layoutProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();
  // transfer 경로에서 메뉴바 숨기기
  const hideMenuBar = pathname === '/home/transfer';

  return <div className={styles.container}>
    <main className={styles.body}>
      {children}
    </main>
    {!hideMenuBar && <MenuTabBar />}
  </div>
}

export default layout