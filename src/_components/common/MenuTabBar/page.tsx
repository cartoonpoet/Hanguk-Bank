'use client'

import style from './style.module.scss'
import Menu from '@/_components/common/Menu/page'
import { usePathname } from 'next/navigation'

const TabBar = () => {
  const pathname = usePathname()
  // transfer 경로에서 메뉴바 숨기기
  const hideMenuBar = pathname === '/home/transfer'
  if (hideMenuBar) return null

  return (
    <div className={style.wrapper}>
      <Menu />
    </div>
  )
}

export default TabBar
